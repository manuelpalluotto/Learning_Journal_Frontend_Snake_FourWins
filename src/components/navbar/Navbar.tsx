'use client';

import styles from './Navbar.module.css';
import { FaBong } from "react-icons/fa";
import { TbBurger } from "react-icons/tb";
import Link from 'next/link';
import { useUser } from '@/app/context/UserContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar({ toggleSidenav }: { toggleSidenav: () => void }) {
    const { isLoggedIn } = useUser();

    const router = useRouter();
    const [shouldShowLoginButton, setShouldShowLoginButton] = useState<boolean>();
    
    useEffect( () => {
        if (typeof window !== 'undefined') {
            const hideLoginButtonOnRoutes = ['/login', '/register', '/'];
            setShouldShowLoginButton(!hideLoginButtonOnRoutes.includes(router.pathname));
        }
    }, [router.pathname]);


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
            <div className={styles['login-area']}>
                {shouldShowLoginButton && isLoggedIn ? (<Link href='/logout' className={styles['navbar--login-button']}>Logout</Link>) : (<Link href='/login' className={styles['navbar--login-button']}>Login</Link>)}
            </div>
        </nav>
    );
}