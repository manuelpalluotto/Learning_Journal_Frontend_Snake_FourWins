'use client';

import styles from './Sidenav.module.css';
import Link from 'next/link';
import { VscSnake } from "react-icons/vsc";
import { FaChessBoard } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useState } from 'react';


export default function Sidenav({ isOpen }: { isOpen: boolean }) {

    

    return (
        <div onClick={() => }>
            <aside className={`${styles['sidenav-container']} ${isOpen ? styles.open : ''}`}>
                <Link href='/'><FaHome /> Home</Link>
                <Link href='/snake'><VscSnake /> Snake</Link>
                <Link href='/checkfour'><FaChessBoard /> Vier Gewinnt</Link>
                <Link href='/getEntries' className={styles['nav-button']}>Einträge anzeigen</Link>
                <Link href='/postEntries' className={styles['nav-button']}>Eintrag erstellen</Link>
            </aside>
        </div>
    );
} 