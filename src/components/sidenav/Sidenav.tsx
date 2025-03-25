'use client';

import styles from './Sidenav.module.css';
import Link from 'next/link';
import { VscSnake } from "react-icons/vsc";
import { FaChessBoard } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useState } from 'react';


export default function Sidenav({ isOpen }: { isOpen: boolean }) {

    console.log('styles:', styles);
    console.log('Sidenav is open:', isOpen);
    console.log('Classname:', `${styles['sidenav-container']} ${isOpen ? styles.open : ''}`);

    console.log('Sidenav is open: ', isOpen);

    return (
        <aside className={`${styles['sidenav-container']} ${isOpen ? styles.open : ''}`}>
            <Link href='/'><FaHome /> Home</Link>
            <Link href='/snake'><VscSnake /> Snake</Link>
            <Link href='/checkfour'><FaChessBoard /> Vier Gewinnt</Link>
        </aside>
    );
} 