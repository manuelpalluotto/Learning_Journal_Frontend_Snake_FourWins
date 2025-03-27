'use client';

import styles from './FetchEntries.module.css';
import { JournalEntry } from '@/lib/api/apiClient';
import { editEntry, fetchEntries } from '@/lib/api/apiMethods';
import { useEffect, useState } from 'react';
import { EntryItem } from '../entryItem/EntryItem';
import { useUser } from '@/app/context/UserContext';

export default function FetchEntries() {


    const [entries, setEntries] = useState<JournalEntry[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const { getCurrentUser } = useUser();
    const currentUser = getCurrentUser();
    const author: string = currentUser?.username || '';
    const [entry, setEntry] = useState<string>('');


    const getData = async () => {
        try {
            const response = await fetchEntries();
            setEntries(response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={styles['entries-container']}>
            {!loading && entries.length === 0 && <p className={styles['no-entries']}>Keine Einträge vorhanden.</p>}
            {entries.map((entry) => (
                <EntryItem key={entry.id} entry={entry} />
            ))}
        </div>
    );
}