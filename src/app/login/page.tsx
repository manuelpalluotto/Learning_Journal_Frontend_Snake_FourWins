'use client';
import '@/css/login.css';
import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/navbar/Navbar';
import Sidenav from '@/components/sidenav/Sidenav';


export default function Login() {

    const { loginUser, isLoggedIn } = useUser();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(false);

    const handleLogin = async () => {
        try {
            await loginUser(username, password);
            router.push('/');
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
            <Sidenav isOpen={isSidenavOpen} onClose={() => setIsSidenavOpen(false)} />
            <style jsx global>
                {`
                body {
                    background: linear-gradient(to bottom right, #00008b, #4b0082);
                    color: white;
                }
                    `}
            </style>

            <main className="login-container">
                <section className="login-card">
                    <h1>Anmelden</h1>
                    <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                        <input
                            id="username"
                            type="text"
                            placeholder="Benutzername"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />

                        <input
                            id="password"
                            type="password"
                            placeholder="Passwort"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button type="submit" className="login-button">Login</button>
                    </form>
                    <p className="register-link">
                        Noch kein Konto? <a href="/register">Registrieren</a>
                    </p>
                </section>
            </main>
        </>
    );
}
