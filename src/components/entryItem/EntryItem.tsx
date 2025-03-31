import { JournalEntry } from "@/lib/api/apiClient";
import styles from '@/components/fetchEntries/FetchEntries.module.css';
import { useState } from "react";
import { editEntry } from "@/lib/api/apiMethods";
import { useUser } from "@/app/context/UserContext";

export const EntryItem = ({
    entry,
    isExpanded,
    onToggleExpand,
    onEntryUpdated,
}: {
    entry: JournalEntry;
    isExpanded: boolean;
    onToggleExpand: () => void;
    onEntryUpdated: () => void;
}) => {



    const { getCurrentUser } = useUser();
    const currentUser = getCurrentUser();

    const [updatedEntry, setUpdatedEntry] = useState<string>(entry.entry);
    const [editing, setEditing] = useState<boolean>(false);

    const sendEdit = async () => {
        const newEntry: JournalEntry = {
            id: entry.id,
            author: entry.author,
            entry: updatedEntry,
            timestamp: new Date().toISOString(),
            userId: entry.userId,
        };

        try {
            await editEntry(newEntry);
            setEditing(false);
            onEntryUpdated();
        } catch (error) {
            console.error(error);
        }
    };

    const timestamp = typeof entry.timestamp === 'string' && !isNaN(Number(entry.timestamp))
        ? new Date(Number(entry.timestamp))
        : new Date(entry.timestamp);

    const formattedTimestamp = timestamp.toLocaleString('de-DE', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    return (
        <article key={entry.id} className={styles['entry-card']}>
            <div className={styles['entry-header']}>
                <h3
                    className={styles['author-name']}
                    onClick={(e) => {
                        e.stopPropagation(); 
                        onToggleExpand(); 
                    }}
                >
                    {currentUser?.username === entry.author ? 'Deine Beiträge' : entry.author}
                </h3>
            </div>
            {editing ? (
                <div>
                    <input
                        className={styles['entry-content']}
                        value={updatedEntry}
                        onChange={(e) => setUpdatedEntry(e.target.value)}
                    />
                    <button
                        className={styles['edit-button']}
                        onClick={(event) => {
                            event.stopPropagation();
                            setEditing(!editing);
                            sendEdit();
                        }}
                    >
                        Bestätigen
                    </button>
                </div>
            ) : (
                <p className={styles['entry-content']}>{entry.entry}</p>
            )}
            <p className={styles['entry-timestamp']}>{formattedTimestamp}</p>

            {currentUser?.id === entry.userId &&
            <button
                className={styles['edit-button']}
                onClick={() => setEditing(!editing)}
            >
                Bearbeiten
            </button>
            }
        </article>
    );
};
