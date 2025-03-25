import styles from './Navbar.module.css';
import { FaBong } from "react-icons/fa";
import { TbBurger } from "react-icons/tb";
import Link from 'next/link';
import { useUser } from '@/app/context/UserContext';

export default function Navbar({ toggleSidenav }: { toggleSidenav: () => void }) {
    const { isLoggedIn } = useUser();

    return (
        <nav className={styles.titlebar}>
            <div className={styles['wrapper-container__titlebar']}>
                <button className={styles['burger-container']} onClick={toggleSidenav}>
                    <TbBurger className={styles['burger-icon']} />
                </button>
                <div className={styles['site-icon']}>
                    <FaBong className={styles['manu-icon']} />
                    <span>Manu Solutions</span>
                </div>
            </div>
            <div className={styles['options--button-container']}>
                <Link href='/getEntries' className={styles['nav-button']}>Einträge anzeigen</Link>
                <Link href='/postEntries' className={styles['nav-button']}>Eintrag erstellen</Link>
            </div>
            <div className={styles['login-area']}>
                {isLoggedIn ? (<Link href='/logout' className={styles['navbar--login-button']}>Logout</Link>) : (<Link href='/' className={styles['login-button']}>Login</Link>)}
            </div>
        </nav>
    );
}