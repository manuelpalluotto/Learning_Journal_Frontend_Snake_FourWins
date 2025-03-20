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
            timestamp: new Date().toISOString(), 
            userId: currentUser.id, 
            
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
        <div className="form-container">
            <form onSubmit={handleSubmit} className="entry-form">
                <fieldset>
                    <legend>Neuer Eintrag</legend>
                    <label htmlFor="author">Autor</label>
                    <input 
                        id="author"
                        className="author-field"
                        type="text"
                        placeholder="Autor"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />

                    <label htmlFor="entry">Eintrag</label>
                    <textarea 
                        id="entry"
                        className="entry-input"
                        placeholder="Dein Eintrag..."
                        value={entry}
                        onChange={(e) => setEntry(e.target.value)}
                        required
                    />

                    <div className="form-button-container">
                        <button type="submit" className="submit-button">Speichern</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}