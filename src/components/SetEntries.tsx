'use client';

import '@/css/setEntries.css';
import { addEntry } from '@/lib/api/apiClient';
import { JournalEntry } from '@/lib/api/apiClient';
import { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';


export default function SetEntries() {

    const [entry, setEntry] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [userId, setUserId] = useState<string>('');

    useEffect(() => {
        const username = getCookie('username');
        const userId = getCookie('userId');
        if (username && userId) {
            setAuthor(username as string);
            setUserId(userId as string);
        }
    }, []);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newEntry: Omit<JournalEntry, 'id'> = {
            entry,
            author,
            userId
        };

        try {
            const data = await addEntry(newEntry);
            console.log('Entry added: ', data);
        } catch (error) {
            console.error('Error adding entry: ', error);
        }
    };

    return (

        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className='entry-display'>
                    <textarea
                        className='entry-input'
                        placeholder='entry'
                        value={entry}
                        onChange={(e) => setEntry(e.target.value)}
                    />
                </div>
                <div className='form--button-container'>
                    <button type='submit'>Add Entry</button>
                </div>
            </form>
        </div>
    );
}