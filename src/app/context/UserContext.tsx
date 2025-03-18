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
}

//context erstellen - speicherort für daten
const UserContext = createContext<UserContextType | undefined>(undefined);


export function UserProvider({ children }: { children: React.ReactNode }) {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
        }
    }, []);

    const getUser = () => {
        fetchUsers()
            .then(setUsers)
            .catch((error)=> 
                console.error('Fehler beim Laden der Nutzer: ', error));
    };

    const loginUser = async (username: string, password: string) => {
        try {
            const token = await login(username, password);
            localStorage.setItem('token', token);
            setLoggedIn(true);
        } catch (error) {
            console.error('Fehler beim Login: ', error);
        }
    };

    return (
        <UserContext.Provider value={{ users, getUser, isLoggedIn, setLoggedIn, loginUser }}>
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