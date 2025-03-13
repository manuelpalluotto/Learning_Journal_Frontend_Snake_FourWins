'use client';

import { useState, useEffect } from 'react';


//interface für den entry
interface User {
    id: string;
    email: string;
    username: string;
}

//typisiere als Array von Usern
export default function GetUsers() {
    const [data, setData] = useState<User[]>([]);

    const fetchData = async () => {
        try {
            //Daten der API abrufen
            const response = await fetch('http://localhost:8080/users');

            //exception werfen falls response nicht gut ist
            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            //antwort wird als array typisiert
            const users: User[] = await response.json();

            //Daten werden gesetzt
            setData(users);


        } catch (error) {
            console.error('Fetch Error: ', error);
        }
    };


    //beim rendern werden daten gefetched
    useEffect( () => {
        fetchData();
    }, []);


    {/*
        map() creates a new array from calling a function for every array element.
        map() does not execute the function for empty elements.
        map() does not change the original array.

        map(user => bedeutet dass der code auf jeden user im array angewandt wird. hier wird für jeden user im array ein li erstellt)
        */}



    return(
        <div>
            <h1>Users</h1>
            <ul>
                {
                    data.map(user => (
                        <li key={user.id}>{user.username} - {user.email}</li>
                    ))
                }
            </ul>
        </div>
    );
}