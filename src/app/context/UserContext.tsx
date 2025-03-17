'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { getCookie } from 'cookies-next';

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
}

//context erstellen - speicherort für daten
const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const sessionID = getCookie('sessionID');
        if (sessionID) {
            setLoggedIn(true);
        }
    }, []);

    const getUser = () => {
        axios.get<User[]>('http://localhost:8080/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Fehler beim Laden der Nutzerdaten', error));
    };

    return (
        <UserContext.Provider value={{ users, getUser, isLoggedIn, setLoggedIn }}>
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