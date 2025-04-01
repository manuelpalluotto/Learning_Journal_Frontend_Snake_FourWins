'use client';

import styles from './Sidenav.module.css';
import Link from 'next/link';
import { VscSnake } from "react-icons/vsc";
import { FaChessBoard } from "react-icons/fa";
import { BsJournal } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { useState } from 'react';


export default function Sidenav({ isOpen }: { isOpen: boolean }) {



    return (


            <aside className={`${styles['sidenav-container']} ${isOpen ? styles.open : ''}`}>
                <Link href='/'><FaHome /> Home</Link>
                <Link href='/snake'><VscSnake /> Snake</Link>
                <Link href='/checkfour'><FaChessBoard /> Vier Gewinnt</Link>
                <Link href='/entries'><BsJournal /> Learning Journal</Link>
            </aside>


    );
} 