'use client';

import '@/css/getEntries.css';
import { fetchEntries } from '@/lib/api/apiMethods';
import { JournalEntry } from '@/lib/api/apiClient';
import { useState, useEffect } from 'react';


export default function FetchEntries() {

    const [entries, setEntries] = useState<JournalEntry[]>([]);


    const getData = async () => {
        try {
            const response = await fetchEntries();
            setEntries(response);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect( () => {
        getData();
    }, []);

    return(
        <div className='entries-container'>
            {entries.map((entry, index) => (
                <div key={index} className='entry-container'>
                    <span className='author-field'>{entry.author}</span>
                    <div className='entry-content'>{entry.entry}</div>
                </div>
            ))}
        </div>
    );
}