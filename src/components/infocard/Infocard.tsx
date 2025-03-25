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
    const [expanded, setExpanded] = useState<boolean>(false);

    // TODO:: an dieser stelle für jede kategorie ein eigener boolean sodass sich jede karte einzeln ausklappen lässt
    // TODO:: herausfinden warum der kartenübercontainer über den rand geht, vermutlich overflow oder sowas
    // TODO:: herausfinden warum die karten nicht zentriert sind


    return (
        <div className={styles.body}>
            <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
            <Sidenav isOpen={isSidenavOpen} />



            <div className={styles['below-navbar']}>



                <div className={styles['projects-overview']}>
                    <h1 className={styles.h1}>Willkommen!</h1>
                    <p>Hier finden Sie eine kleine Übersicht über meine bisherigen Projekte. </p>
                </div>



                <div className={styles['content-field']}>



                <div className={styles.container}>
                {!expanded && <h2 className={styles.title}>Tic Tac Toe</h2>} 
                        <div className={`${styles["ticTacToe-card"]} ${expanded ? styles.expanded : ""}`} onClick={() => setExpanded(!expanded)}>
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



                    <div className={styles.container}>
                        {!expanded && <h2 className={styles.title}>Tic Tac Toe</h2>}
                        <div className={`${styles["springboot-card"]} ${expanded ? styles.expanded : ""}`} onClick={() => setExpanded(!expanded)}>
                            <div className={styles.imageContainer}>
                                {springBootData.map((item, index) => (
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



                    <div className={styles.container}>
                        {!expanded && <h2 className={styles.title}>Tic Tac Toe</h2>}
                        <div className={`${styles["npe-card"]} ${expanded ? styles.expanded : ""}`} onClick={() => setExpanded(!expanded)}>
                            <div className={styles.imageContainer}>
                                {npeData.map((item, index) => (
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
        </div>
    );
}