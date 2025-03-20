'use client';

import '@/css/register.css';
import { addUser } from "@/lib/api/apiMethods";
import { stringify } from "querystring";
import { useState } from "react";


export default function Register() {
    
    type UserRegistrationData = {
        username: string;
        password: string;
        email: string;
        role: string;
        classroom: string;
    };

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [classroom, setClassroom] = useState<string>('');
    

    const handleRegister = async () => {
        const userData: UserRegistrationData = {
            username, 
            password, 
            email, 
            role: 'USER',
            classroom,
        };

        console.log(userData);
        try {
            await addUser(userData);
        } catch (error) {
            console.error(error);
        }
    };
    
    
    return (
        <main className="register-container">



            <section className="register-card">


                <h1>Registrieren</h1>
                <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                    <label htmlFor="username">Benutzername</label>
                    <input className='username-input'
                        id="username"
                        type="text"
                        placeholder="Benutzername"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Passwort</label>
                    <input className='password-input'
                        id="password"
                        type="password"
                        placeholder="Passwort"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="email">E-Mail</label>
                    <input className='email-input'
                        id="email"
                        type="email"
                        placeholder="E-Mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button type="submit" className="login-button">Registrieren</button>
                </form>
                


            </section>



        </main>
    );
}