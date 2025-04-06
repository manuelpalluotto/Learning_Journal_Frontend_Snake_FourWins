'use client';

import styles from './Navbar.module.css';
import { FaBong } from "react-icons/fa";
import { TbBurger } from "react-icons/tb";
import Link from 'next/link';
import { useUser } from '@/app/context/UserContext';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar({ toggleSidenav }: { toggleSidenav: () => void }) {
    const { isLoggedIn } = useUser();

    const pathname = usePathname() || '';
    
    const routesWithoutLoginButton: string[] = ['/', '/snake', '/checkfour'];
    const [boolean, setBoolean] = useState<boolean>(routesWithoutLoginButton.includes(pathname));

    useEffect(() => {
        setBoolean(routesWithoutLoginButton.includes(pathname));
    }, [pathname]);

    if (typeof window === 'undefined') {
        return null;
    }

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
            { !boolean && 
                <div className={styles['login-area']}>
                    {isLoggedIn ? (<Link href='/logout' className={styles['navbar--login-button']}>Logout</Link>) : (<Link href={`/login?redirect=${encodeURIComponent(pathname)}`} className={styles['navbar--login-button']}>Login</Link>)}
                </div>
            }
        </nav>
    );
}