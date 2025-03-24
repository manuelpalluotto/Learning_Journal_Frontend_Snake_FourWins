'use client';

import '@/css/register.css';
import { addUser } from "@/lib/api/apiMethods";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
    const router = useRouter();

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
            const response = await addUser(userData);
    
            if (response && response.email) {  
                alert("Registrierung erfolgreich! Überprüfe deine E-Mail für die Bestätigung.");
                router.push("/login");
            } 
        } catch (error: any) {
            console.error(error);
    
            if (error.response && error.response.data && error.response.data.message) {
                alert("Fehler: " + error.response.data.message);
            } else {
                alert("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
            }
        }
    };
    
    //!noch eine db entity anlegen!

    return (
        <main className="register-container">



            <section className="register-card">


                <h1>Registrieren</h1>
                <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                    <input className='username-input'
                        id="username"
                        type="text"
                        placeholder="Benutzername"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <input className='password-input'
                        id="password"
                        type="password"
                        placeholder="Passwort"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input className='email-input'
                        id="email"
                        type="email"
                        placeholder="E-Mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button type="submit" className="register--login-button"><Link href='/login'>Registrieren</Link></button>
                    <p className="login-link">
                    Schon ein Konto? <a href="/login">Einloggen</a>
                </p>
                </form>
                


            </section>



        </main>
    );
}