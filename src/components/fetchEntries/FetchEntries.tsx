'use client';

import styles from './FetchEntries.module.css';
import { JournalEntry } from '@/lib/api/apiClient';
import { fetchEntries } from '@/lib/api/apiMethods';
import { useEffect, useState } from 'react';
import { EntryItem } from '../entryItem/EntryItem';
import { User } from '@/lib/api/apiClient';
import { fetchUsers } from '@/lib/api/apiMethods';

export default function FetchEntries() {


    const [entries, setEntries] = useState<JournalEntry[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<User[]>([]);

    async function getUsers() {
        try {

        } catch (error) {
            console.error(error);
        }
    }



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

    return (
        <>
            {users.map((user: User) => {
                // Filtere die Einträge, die zu diesem Benutzer gehören
                const sortedEntries = entries.filter((entry) => entry.userId === user.id);

                return (


                    <div className={styles.sortedContainer} key={user.id}>
                        <div className={styles['entries-container']}>
                        <h2>{user.username}</h2>
                            {sortedEntries.length === 0 ? (
                                <p className={styles['no-entries']}>Keine Einträge vorhanden.</p>
                            ) : (
                                sortedEntries.map((entry) => (
                                    <EntryItem key={entry.id} entry={entry} />
                                ))
                            )}
                        </div>
                    </div>
                );
            })}
        </>
    );
}

