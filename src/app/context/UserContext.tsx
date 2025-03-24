'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { login, fetchUsers } from '@/lib/api/apiMethods';

interface User {
    id: string;
    username: string;
    email: string;
}

interface UserContextType {
    users: User[];
    getUser: () => void;
    isLoggedIn: boolean;
    setLoggedIn: (loggedIn: boolean) => void;
    loginUser: (username: string, password: string) => Promise<void>;
    getCurrentUser: () => User | undefined;
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
}

//context erstellen - speicherort für daten
const UserContext = createContext<UserContextType | undefined>(undefined);


export function UserProvider({ children }: { children: React.ReactNode }) {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const checkLoginStatus = async () => {
            setIsLoading(true);
            const token = localStorage.getItem('token');
            if (token) {
                const decoded = decodeToken(token);
                if (decoded) {
                    try {
                        const fetchedUsers = await fetchUsers(); // Benutzerliste laden
                        setUsers(fetchedUsers);
    
                        const currentUser = fetchedUsers.find(user => user.username === decoded.username);
                        if (currentUser) {
                            setLoggedIn(true); // Benutzer gefunden, eingeloggt
                        } else {
                            localStorage.removeItem('token');
                            setLoggedIn(false); // Benutzer nicht gefunden, ausgeloggt
                        }
                    } catch (error) {
                        console.error('Fehler beim Laden der Nutzer:', error);
                        localStorage.removeItem('token');
                        setLoggedIn(false); // Fehler beim Laden der Benutzerliste
                    }
                } else {
                    localStorage.removeItem('token');
                    setLoggedIn(false); // Ungültiger Token
                }
            } else {
                setLoggedIn(false); // Kein Token vorhanden
            }
            setIsLoading(false);
        };
    
        checkLoginStatus();
    }, []); // Nur beim ersten Render ausführen

    const getUser = async () => {
        try {
            const fetchedUsers = await fetchUsers();
            setUsers(fetchedUsers);
        } catch (error) {
            console.error('Fehler beim Laden der Nutzer: ', error);
            throw error;
        }
    };

    const loginUser = async (username: string, password: string) => {
    try {
        const token = await login(username, password);
        
        // No need to set token again if we modified the login function as above
        // But we can double-check it's there
        const storedToken = localStorage.getItem('token');
        console.log('Stored token:', storedToken);
        
        if (storedToken) {
            setLoggedIn(true);
            await getUser(); // Make sure to await this
        } else {
            console.error('Token not found in localStorage after login');
            localStorage.setItem('token', token); // Try setting it again
            setLoggedIn(true);
            await getUser();
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('Login failed. Please check your credentials.');
    }
};

    const getCurrentUser = (): User | undefined => {
        const token = localStorage.getItem('token');
        if (!token) return undefined;
    
        const decoded = decodeToken(token);
        if (!decoded?.username) return undefined;
    
        return users.find(user => user.username === decoded.username);
    };

    function decodeToken(token: string): { username: string } | null {
        try {
            console.log(atob(token.split('.')[1]));
            const payload = JSON.parse(atob(token.split('.')[1]));
            return { username: payload.sub };
        } catch (error) {
            console.error('Invalid token:', error);
            return null;
        }
    }

    return (
        <UserContext.Provider value={{ users, getUser, isLoggedIn, setLoggedIn, loginUser, getCurrentUser, isLoading, setIsLoading }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}