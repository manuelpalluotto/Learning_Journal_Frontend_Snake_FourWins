import { JournalEntry } from "@/lib/api/apiClient";
import '@/css/getEntries.css';


export const EntryItem = ({ entry }: { entry: JournalEntry }) => {
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
            <p className="entry-content">{entry.entry}</p>
            <p className="entry-timestamp">{formattedTimestamp}</p> {/* Der formatierte Timestamp */}
        </article>
    );
};
