'use client';
import { useState } from 'react';
import { login } from '@/lib/api/apiClient';
import { setCookie } from 'cookies-next';


export default function Login() {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        try {
            const data = await login(username, password);
            console.log('Login erfolgreich!', data);
            setCookie('sessionID', data.sessionID);
        } catch (err) {
            setError('Login failed');
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