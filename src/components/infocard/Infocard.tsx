'use client';
import styles from './Infocard.module.css';
import { useState } from "react";
import Image from 'next/image';
import Navbar from "../navbar/Navbar";
import Sidenav from "../sidenav/Sidenav";
import { ticTacToeBoardDescription } from '../description';

export default function Infocard() {

    interface imageInfoObj {
        src: string,
        name: string,
        description: string,
    };

    const ticTacToeBoard: imageInfoObj = {
        src: '/images/TicTacToeBoard.png',
        name: 'Visualization of my programmed Tic Tac Toe Board',
        description: ticTacToeBoardDescription,
    };

    const ticTacToeCodeFull: imageInfoObj = {
        src: '/images/TicTacToeCodeFull.png',
        name: 'Visualization of my programmed Tic Tac Toe Board',
        description: ticTacToeBoardDescription,
    };

    const ticTacToeTieDialog: imageInfoObj = {
        src: '/images/TicTacToeTieDialog.png',
        name: 'Visualization of my programmed Tic Tac Toe Board',
        description: ticTacToeBoardDescription,
    };

    const ticTacToeWinDialog: imageInfoObj = {
        src: '/images/TicTacToeWinDialog.png',
        name: 'Visualization of my programmed Tic Tac Toe Board',
        description: ticTacToeBoardDescription,
    };

    const ticTacToeData: imageInfoObj[] = [
        { src: ticTacToeBoard.src, name: ticTacToeBoard.name, description: ticTacToeBoard.description },
        { src: ticTacToeCodeFull.src, name: ticTacToeCodeFull.name, description: ticTacToeCodeFull.description },
        { src: ticTacToeTieDialog.src, name: ticTacToeTieDialog.name, description: ticTacToeTieDialog.description },
        { src: ticTacToeWinDialog.src, name: ticTacToeWinDialog.name, description: ticTacToeWinDialog.description },
    ];

    const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(false);
    const [expanded, setExpanded] = useState<boolean>(false);


    return (
        <>
            <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
            <Sidenav isOpen={isSidenavOpen} />
            <div className={styles['below-navbar']}>
                <div className={styles['projects-overview']}>
                    <h1>Willkommen!</h1>
                    <p>Hier finden Sie eine kleine Übersicht über meine bisherigen Projekte. </p>
                </div>


                <div className={styles['content-field']}>



                    <div className={`${styles.container} ${expanded ? styles.expanded : ""}`}>

                        {/* überprüft, ob expanded === true und falls nein, wird ein <h2> eingefügt */}
                        {!expanded && <h2 className={styles.title}>Tic Tac Toe</h2>}

                        {/* überprüft, ob expanded === true und falls ja wird .expanded 
                        zum klassennamen hinzugefügt, onclick kehrt expanded um */}
                        <div
                            className={`${styles["ticTacToe-card"]} ${expanded ? styles.expanded : ""}`}
                            onClick={() => setExpanded(!expanded)}
                        >


                            <div className={styles.imageContainer}>
                                {ticTacToeData.map((item, index) => (
                                    <div key={index} className={styles['image-wrapper']}>
                                        <Image className={styles.image} src={item.src} alt={item.name} width={500} height={300} />
                                        {expanded && (
                                            <p className={styles.description}>{item.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>


                        </div>



                    </div>



                </div>
            </div>
        </>
    );
}