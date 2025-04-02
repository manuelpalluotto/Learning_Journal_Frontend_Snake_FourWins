'use client';

import styles from './SetEntries.module.css';
import { useUser } from '@/app/context/UserContext';
import { addEntry } from '@/lib/api/apiMethods';
import { JournalEntry } from '@/lib/api/apiClient';
import { useState, useEffect } from 'react';
import BackButton from '../backButton/Backbutton';


export default function SetEntries() {

    const { isLoggedIn, getCurrentUser } = useUser();
    const currentUser = getCurrentUser();
    const author: string = currentUser?.username || '';
    const [entry, setEntry] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
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
            userId: currentUser.id, 
            
        };

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
        <div className={styles.allContainer}>
            <BackButton href='/entries' />
        <div className={styles['form-container']}>
            <form onSubmit={handleSubmit} className={styles['entry-form']}>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Neuer Eintrag</legend>
                    <label className={styles.label} htmlFor="author">Autor</label>
                    <input className={styles.input}
                        id="author"
                        type="text"
                        placeholder="Autor"
                        value={author}
                        disabled
                    />

                    <label className={styles.label} htmlFor="entry">Eintrag</label>
                    <textarea className={styles.textarea}
                        id="entry"
                        placeholder="Dein Eintrag..."
                        value={entry}
                        onChange={(e) => setEntry(e.target.value)}
                        required
                    />

                    <div className={styles['form-button-container']}>
                        <button type="submit" className={styles['submit-button']}>Speichern</button>
                    </div>
                </fieldset>
            </form>
        </div>
        </div>
    );
}