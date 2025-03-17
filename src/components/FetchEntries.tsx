'use client';

import '@/css/getEntries.css';
import { fetchEntries } from '@/lib/api/apiClient';
import { JournalEntry } from '@/lib/api/apiClient';
import { useState } from 'react';


export default function FetchEntries() {

    const [entries, setEntries] = useState<JournalEntry[]>([]);

    async function fetchData() {
        const response = await fetchEntries();

    }


    return(
        <div className='entries-container'>
            <span className='author-field'></span>
            <div className='entry-content'></div>
        </div>
    );
}