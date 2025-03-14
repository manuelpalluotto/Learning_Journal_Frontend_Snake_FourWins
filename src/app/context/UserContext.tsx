'use client';

import { createContext, useContext, useState } from 'react';
import axios from 'axios';

interface User {
    id: string;
    username: string;
    email: string;
}

//context erstellen - speicherort für daten
const UserContext = createContext<any>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [users, setUsers] = useState<User[]>([]);

    const getUser = () => {
        axios.get<User[]>('http://localhost:8080/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Fehler beim Laden der Nutzerdaten', error));
    };

    return(
        <UserContext.Provider value={{ users, getUser }}>
            { children }
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}