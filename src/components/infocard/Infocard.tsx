'use client';
import styles from './Infocard.module.css';
import { useState } from "react";
import Image from 'next/image';
import Navbar from "../navbar/Navbar";
import Sidenav from "../sidenav/Sidenav";
import { ticTacToeBoardDescription } from '../description';
import ProtectedRoute from '../protectedRoute/ProtectedRouter';

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

    const structureNpe: imageInfoObj = {
        src: '/images/StructureNpe.png',
        name: 'Visualization of my programmed Tic Tac Toe Board',
        description: ticTacToeBoardDescription,
    };

    const npeCodeFull: imageInfoObj = {
        src: '/images/NpeCodeFull.png',
        name: 'Visualization of my programmed Tic Tac Toe Board',
        description: ticTacToeBoardDescription,
    };

    const structureBackendSpring: imageInfoObj = {
        src: '/images/StructureBackendSpring.png',
        name: 'Visualization of my programmed Tic Tac Toe Board',
        description: ticTacToeBoardDescription,
    };

    const structureFrontendTS: imageInfoObj = {
        src: '/images/StructureFrontendTS.png',
        name: 'Visualization of my programmed Tic Tac Toe Board',
        description: ticTacToeBoardDescription,
    };

    const npeData: imageInfoObj[] = [
        { src: structureNpe.src, name: structureNpe.name, description: structureNpe.description },
        { src: npeCodeFull.src, name: npeCodeFull.name, description: npeCodeFull.description },

    ];

    const springBootData: imageInfoObj[] = [
        { src: structureBackendSpring.src, name: structureBackendSpring.name, description: structureBackendSpring.description },
        { src: structureFrontendTS.src, name: structureFrontendTS.name, description: structureFrontendTS.description },
    ];

    const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(false);
    const [ticExpanded, setTicExpanded] = useState<boolean>(false);
    const [npeExpanded, setNpeExpanded] = useState<boolean>(false);
    const [springExpanded, setSpringExpanded] = useState<boolean>(false);

    return (

        <ProtectedRoute>
        <div className={styles.body}>
            <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
            <Sidenav isOpen={isSidenavOpen} />



            <div className={styles['below-navbar']}>



                <div className={styles['projects-overview']}>
                    <h1 className={styles.h1}>Willkommen!</h1>
                    <p>Hier finden Sie eine kleine Übersicht über meine bisherigen Projekte. </p>
                </div>



                <div className={styles['content-field']}>



                <div className={`${styles.container} ${ticExpanded ? styles.expanded : styles.collapsed}`}>
                {!ticExpanded && <h2 className={styles.title}>Tic Tac Toe</h2>} 
                        <div className={`${styles["ticTacToe-card"]} ${ticExpanded ? styles.expanded : ""}`} onClick={() => setTicExpanded(!ticExpanded)}>
                            <div className={`${styles["imageContainer"]} ${ticExpanded ? styles.expanded : ""}`}>
                                {ticTacToeData.map((item, index) => (
                                    <div key={index} className={styles['image-wrapper']}>
                                        <Image className={styles.image} src={item.src} alt={item.name} width={500} height={300} />
                                        {ticExpanded && (
                                            <div className={styles.description}>{item.description}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>



                    <div className={styles.container}>
                        {!springExpanded && <h2 className={styles.title}>Tic Tac Toe</h2>}
                        <div className={`${styles["springboot-card"]} ${springExpanded ? styles.expanded : ""}`} onClick={() => setSpringExpanded(!springExpanded)}>
                            <div className={styles.imageContainer}>
                                {springBootData.map((item, index) => (
                                    <div key={index} className={styles['image-wrapper']}>
                                        <Image className={styles.image} src={item.src} alt={item.name} width={500} height={300} />
                                        {springExpanded && (
                                            <p className={styles.description}>{item.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>



                    <div className={styles.container}>
                        {!npeExpanded && <h2 className={styles.title}>Tic Tac Toe</h2>}
                        <div className={`${styles["npe-card"]} ${npeExpanded ? styles.expanded : ""}`} onClick={() => setNpeExpanded(!npeExpanded)}>
                            <div className={styles.imageContainer}>
                                {npeData.map((item, index) => (
                                    <div key={index} className={styles['image-wrapper']}>
                                        <Image className={styles.image} src={item.src} alt={item.name} width={500} height={300} />
                                        {npeExpanded && (
                                            <p className={styles.description}>{item.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>



                </div>



            </div>
        </div>
        </ProtectedRoute>
    );
}