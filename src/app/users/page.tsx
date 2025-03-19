'use client';
import { fetchUsers } from '@/lib/api/apiMethods';
import '@/css/users.css';
import Navbar from "@/components/Navbar";
import Sidenav from "@/components/Sidenav";
import Searchbar from '@/components/searchbar';
import { useState, useEffect } from 'react';
import ProtectedRoute from '@/components/ProtectedRouter';

interface User {
    id: string;
    email: string;
    password: string;
    username: string;
}

export default function Users() {
    
const [users, setUsers] = useState<User[]>([]);
const [error, setError] = useState<string | null>(null);


useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await fetchUsers();
            setUsers(data);
        } catch (err) {
            setError('Failed to fetch users');
        }
    };

    fetchData();
}, []);

    return (
        <>
        <ProtectedRoute>
            <Navbar />
            <div className='under--navbar-container'>
                <Sidenav />
                <div className='user-container'>
                    <div className='user-prefix'>
                        <span>ID:</span>
                        <span>Username:</span>
                        <span>E-Mail:</span>
                    </div>
                    {users.map(user => (
                        <div key={user.id} className='user-information'>
                        <span>{user.id}</span>
                        <span>{user.username}</span>
                        <span>{user.email}</span>
                    </div>
                    ))}
                </div>
            </div>
            </ProtectedRoute>
        </>
    );
}