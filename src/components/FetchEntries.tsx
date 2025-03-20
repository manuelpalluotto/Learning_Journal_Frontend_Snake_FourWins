'use client';

import { EntryItem } from './EntryItem';
import '@/css/getEntries.css';
import { fetchEntries } from '@/lib/api/apiMethods';
import { JournalEntry } from '@/lib/api/apiClient';
import { useState, useEffect } from 'react';


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
        <div className="entries-container">
            {loading && <p className="loading-message">Lädt...</p>}
            {error && <p className="error-message">{error}</p>}
            {!loading && entries.length === 0 && <p className="no-entries">Keine Einträge vorhanden.</p>}

            {/* Map über alle Einträge und rendere für jeden das EntryItem */}
            {entries.map((entry) => (
                <EntryItem key={entry.id} entry={entry} />
            ))}
        </div>
    );
}