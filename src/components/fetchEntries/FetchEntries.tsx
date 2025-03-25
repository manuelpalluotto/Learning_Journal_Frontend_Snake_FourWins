'use client';

import styles from './FetchEntries.module.css';
import { JournalEntry } from '@/lib/api/apiClient';
import { fetchEntries } from '@/lib/api/apiMethods';
import { useEffect, useState } from 'react';
import { EntryItem } from '../entryItem/EntryItem';


export default function FetchEntries() {

    const [entries, setEntries] = useState<JournalEntry[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);


    const getData = async () => {
        try {
            const response = await fetchEntries();
            setEntries(response);
        } catch (error) {
            console.error(error);
            setError("Fehler beim Laden der Einträge.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={styles['entries-container']}>
            {loading && <p className={styles['loading-message']}>Lädt...</p>}
            {error && <p className={styles['error-message']}>{error}</p>}
            {!loading && entries.length === 0 && <p className={styles['no-entries']}>Keine Einträge vorhanden.</p>}

            {/* Map über alle Einträge und rendere für jeden das EntryItem */}
            {entries.map((entry) => (
                <EntryItem key={entry.id} entry={entry} />
            ))}
        </div>
    );
}