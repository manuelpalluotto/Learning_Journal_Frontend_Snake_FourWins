'use client';

import '@/css/setEntries.css';
import { useUser } from '@/app/context/UserContext';
import { addEntry } from '@/lib/api/apiMethods';
import { JournalEntry } from '@/lib/api/apiClient';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function SetEntries() {

    const { isLoggedIn, getCurrentUser } = useUser();
    const currentUser = getCurrentUser();
    const [author, setAuthor] = useState<string>(currentUser?.username || '');
    const [entry, setEntry] = useState<string>('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('User IDDDDDDDDDDD', currentUser?.id);
        if (!isLoggedIn) {
            alert('You must be logged in!');
            return;
        }

        if (!currentUser?.id) {
            alert();
            return;
        }

        const newEntry: Omit<JournalEntry, 'id'> = {
            author,
            entry,
            userId: currentUser.id
        };

        console.log('New Entry:', newEntry);

        try {
            await addEntry(newEntry);
            alert('Entry submitted successfully');
            setEntry('');
        } catch (error) {
            console.error(error);
            alert(error);
        }
    };

    return (
        <div>
            <div className='form-container'>
                <form onSubmit={handleSubmit} className='entry-input'>
                    <input className='author-field'
                        type='text'
                        placeholder='Author'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    
                    <div>
                        <textarea className='entry-input'
                            placeholder='Your entry...' 
                            value={entry}
                            onChange={(e) => setEntry(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}