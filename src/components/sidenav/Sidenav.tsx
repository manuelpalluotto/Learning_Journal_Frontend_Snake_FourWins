'use client';

import styles from './Sidenav.module.css';
import Link from 'next/link';
import { VscSnake } from "react-icons/vsc";
import { FaChessBoard } from "react-icons/fa";
import { BsJournal } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';


export default function Sidenav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {

    const sidenavRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (sidenavRef.current && !sidenavRef.current.contains(event.target as Node)) {
                onClose();
            }

        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onClose]);

    if (typeof window === 'undefined') {
        return null;
    }

    return (


        <aside ref={sidenavRef} className={`${styles['sidenav-container']} ${isOpen ? styles.open : ''}`}>
            <Link href='/'><FaHome /> Home</Link>
            <Link href='/snake'><VscSnake /> Snake</Link>
            <Link href='/checkfour'><FaChessBoard /> Vier Gewinnt</Link>
            {/* <Link href='/entries'><BsJournal /> Learning Journal</Link> */}
        </aside>


    );
} 