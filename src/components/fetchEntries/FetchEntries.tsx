'use client';

import styles from './FetchEntries.module.css';
import { JournalEntry } from '@/lib/api/apiClient';
import { fetchEntries, fetchUsers } from '@/lib/api/apiMethods';
import { useEffect, useState } from 'react';

export default function FetchEntries() {
    const [entries, setEntries] = useState<JournalEntry[]>([]);
    const [users, setUsers] = useState<{ id: string; username: string }[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedUser, setSelectedUser] = useState<string>('all'); // 'all' zeigt alle Einträge an

    const getData = async () => {
        try {
            const entryResponse = await fetchEntries();
            const userResponse = await fetchUsers();
            setEntries(entryResponse);
            setUsers(userResponse);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const filteredEntries = selectedUser === 'all'
        ? entries
        : entries.filter((entry) => entry.userId === selectedUser);

    return (

        <>
            <style jsx global>
                {`
                body {
                    background: linear-gradient(to bottom right, #00008b, #4b0082);
                    color: white;
                }
                    `}
            </style>
            <div className={styles.container}>
                <h1 className={styles.title}>Einträge</h1>

                {/* Dropdown für Benutzerfilter */}
                <div className={styles.filterContainer}>
                    <label htmlFor="userFilter" className={styles.filterLabel}>Filter nach Benutzer:</label>
                    <select
                        id="userFilter"
                        className={styles.filterDropdown}
                        value={selectedUser}
                        onChange={(e) => setSelectedUser(e.target.value)}
                    >
                        <option value="all">Alle Benutzer</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.username}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Tabelle für Einträge */}
                <table className={styles.entriesTable}>
                    <thead>
                        <tr>
                            <th>Autor</th>
                            <th>Eintrag</th>
                            <th>Datum</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={3} className={styles.loadingMessage}>Lädt...</td>
                            </tr>
                        ) : filteredEntries.length === 0 ? (
                            <tr>
                                <td colSpan={3} className={styles.noEntriesMessage}>Keine Einträge vorhanden.</td>
                            </tr>
                        ) : (
                            filteredEntries.map((entry) => (
                                <tr key={entry.id}>
                                    <td>{users.find((user) => user.id === entry.userId)?.username || 'Unbekannt'}</td>
                                    <td>{entry.entry}</td>
                                    <td>{new Date(entry.timestamp).toLocaleString('de-DE')}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}