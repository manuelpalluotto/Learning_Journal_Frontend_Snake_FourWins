import { JournalEntry } from "@/lib/api/apiClient";
import '@/css/getEntries.css';
import { useState } from "react";
import { editEntry } from "@/lib/api/apiMethods";


export const EntryItem = ({ entry }: { entry: JournalEntry }) => {

    const [updatedEntry, setUpdatedEntry] = useState<string>(entry.entry);
    const [editing, setEditing] = useState<boolean>(false);

    const reloadPage = () => {
        window.location.href = window.location.href;
    };


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
            console.log(entry.id, entry.author, updatedEntry, timestamp, entry.userId);
            reloadPage();
        } catch (error) {
            console.error(error);
        }
    };

    // Umwandlung des timestamp (falls es sich um Millisekunden handelt) in ein Date-Objekt
    const timestamp = typeof entry.timestamp === 'string' && !isNaN(Number(entry.timestamp))
        ? new Date(Number(entry.timestamp))  // Falls der timestamp eine Zahl ist
        : new Date(entry.timestamp);  // Falls der timestamp ein ISO-String ist

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
        <article key={entry.id} className="entry-card">
            <div className="entry-header">
                <h3 className="author-name">{entry.author}</h3>
            </div>
            {editing? 
            <div>
                <input 
                className="entry-content"
                value={updatedEntry}
                onChange={(e) => setUpdatedEntry(e.target.value)}
                >
                </input>
                <button className="edit-button" type='submit' onClick={() => sendEdit()}>Bestätigen</button>
            </div>
             : 
             <p className="entry-content">{entry.entry}</p>
             }
            <p className="entry-timestamp">{formattedTimestamp}</p> 
            <button className="edit-button" onClick={() => setEditing(!editing)}>Bearbeiten</button>
        </article>
    );
};
