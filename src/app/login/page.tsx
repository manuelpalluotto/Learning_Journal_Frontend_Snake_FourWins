'use client';
import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { useRouter } from 'next/navigation';


export default function Login() {

    const { loginUser, isLoggedIn } = useUser();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();


    const handleLogin = async () => {
        try {
            await loginUser(username, password);
            router.push('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='login-form'>
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <h2>Login</h2>
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}