import Link from 'next/link';
import styles from './entries.module.css';
import { FaBookReader } from 'react-icons/fa';
import { TfiWrite } from 'react-icons/tfi';


export default function Entries() {
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.h1}>Learning Journal</h1>
                <p className={styles.p}>Hier kannst du Einträge lesen oder selbst neue erstellen. Teile deine Gedanken und Erfahrungen!</p>
            </header>

            <div className={styles.entriesContainerWrapper}>
            <Link href='/getEntries'>
                <div className={styles.read}>
                    <button className={styles.button}>
                        <FaBookReader size={50} />
                    </button>
                    <span className={styles.span}>Einträge lesen</span>
                </div>
                </Link>
                <Link href='/postEntries'>
                <div className={styles.write}>
                    <button className={styles.button}>
                        <TfiWrite size={50} />
                    </button>
                    <span className={styles.span}>Einträge erstellen</span>
                </div>
                </Link>
            </div>
        </>
    );
}