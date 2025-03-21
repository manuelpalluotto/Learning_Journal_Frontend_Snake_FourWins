'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function VerifyEmail() {

    const searchParams = useSearchParams();
    const token = searchParams?.get('token');
    const [message, setMessage] = useState('Verify...');

    useEffect( () => {
        if (token) {
            fetch(`http://localhost:8080/verify?token=${token}`)
                .then( (res) => res.text())
                .then( (data) => setMessage(data))
                .catch( () => setMessage('Fehler bei der Verifizierung.'));
        }
    }, [token]);

    return <div><h1>{message}</h1></div>;
}