import Link from "next/link";
import styles from './backbutton.module.css';

interface BackButtonProps {
    href: string;
}

export default function BackButton({ href }: BackButtonProps) {
    return <button className={styles.backButton}><Link href={href}>Zurück</Link></button>;
}