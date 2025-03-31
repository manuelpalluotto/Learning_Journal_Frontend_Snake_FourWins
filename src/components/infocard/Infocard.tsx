'use client';
import styles from './Infocard.module.css';
import { useState } from "react";
import Image from 'next/image';
import Navbar from "../navbar/Navbar";
import Sidenav from "../sidenav/Sidenav";
import { ticTacToeBoardDescription } from '../description';
import ProtectedRoute from '../protectedRoute/ProtectedRouter';

interface imageInfoObj {
    src: string,
    name: string,
};


export default function Infocard() {


    const ticTacToeBoard: imageInfoObj = {
        src: '/images/TicTacToeBoard.png',
        name: 'Visualization of my programmed Tic Tac Toe Board',
    };

    const ticTacToeCodeFull: imageInfoObj = {
        src: '/images/TicTacToeCodeFull.png',
        name: 'Visualization of my programmed Tic Tac Toe Board',
    };

    const ticTacToeTieDialog: imageInfoObj = {
        src: '/images/TicTacToeTieDialog.png',
        name: 'Visualization of my programmed Tic Tac Toe Board',
    };

    const ticTacToeWinDialog: imageInfoObj = {
        src: '/images/TicTacToeWinDialog.png',
        name: 'Visualization of my programmed Tic Tac Toe Board',
    };

    const structureNpe: imageInfoObj = {
        src: '/images/StructureNpe.png',
        name: 'Visualization of my programmed Tic Tac Toe Board',
    };

    const npeCodeFull: imageInfoObj = {
        src: '/images/NpeCodeFull.png',
        name: 'Visualization of my programmed Tic Tac Toe Board',
    };

    const structureBackendSpring: imageInfoObj = {
        src: '/images/StructureBackendSpring.png',
        name: 'Visualization of my programmed Tic Tac Toe Board',
    };

    const structureFrontendTS: imageInfoObj = {
        src: '/images/StructureFrontendTS.png',
        name: 'Visualization of my programmed Tic Tac Toe Board',
    };

    const npeData: imageInfoObj[] = [
        { src: structureNpe.src, name: structureNpe.name },
        { src: npeCodeFull.src, name: npeCodeFull.name },

    ];

    const springBootData: imageInfoObj[] = [
        { src: structureBackendSpring.src, name: structureBackendSpring.name },
        { src: structureFrontendTS.src, name: structureFrontendTS.name },
    ];

    const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(false);


    const [ticExpanded, setTicExpanded] = useState<boolean>(false);
    const [npeExpanded, setNpeExpanded] = useState<boolean>(false);
    const [springExpanded, setSpringExpanded] = useState<boolean>(false);

    const tttStyle = `${styles.tttCardContainer} ${ticExpanded ? styles.expanded : ""}`;
    const npeStyle = `${styles.npeCardContainer} ${npeExpanded ? styles.expanded : ""}`;

    return (

        <ProtectedRoute>
            <div className={styles.body}>
                <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
                <Sidenav isOpen={isSidenavOpen} />
                <div className={styles['body-minus-header']}>
                    <div className={styles['title-field']}>
                        <h1 className={styles.h1}>Willkommen!</h1>
                        <p className={styles.p}>Hier finden Sie eine kleine Übersicht über meine bisherigen Projekte. </p>
                    </div>
                    <div className={styles.overallContainer}>





                        <div className={styles.topicContainerTTT}>

                            {!ticExpanded &&
                                <div className={styles.topicTitle}>
                                    <span className={styles.tttTitleOne}>Tic</span>
                                    <span className={styles.tttTitleTwo}>Tac</span>
                                    <span className={styles.tttTitleThree}>Toe</span>
                                </div>
                            }
                            <div className={tttStyle} onClick={() => setTicExpanded(!ticExpanded)}>
                                <div className={styles.imageDecsriptionWrapper}>
                                    <div className={styles.imageContainer}>
                                        <Image className={styles.ticTacToeBoardImage} src={ticTacToeCodeFull.src} alt={ticTacToeCodeFull.name} width={1920} height={1080}></Image>
                                    </div>
                                </div>
                                <div className={styles.imageDecsriptionWrapper}>
                                    <div className={styles.imageContainer}>
                                        <Image className={styles.ticTacToeBoardImage} src={ticTacToeBoard.src} alt={ticTacToeBoard.name} width={1920} height={1080}></Image>
                                    </div>
                                </div>
                                <div className={styles.imageDecsriptionWrapper}>
                                    <div className={styles.imageContainer}>
                                        <Image className={styles.ticTacToeBoardImage} src={ticTacToeTieDialog.src} alt={ticTacToeTieDialog.name} width={1920} height={1080}></Image>
                                    </div>
                                </div>
                                <div className={styles.imageDecsriptionWrapper}>
                                    <div className={styles.imageContainer}>
                                        <Image className={styles.ticTacToeBoardImage} src={ticTacToeWinDialog.src} alt={ticTacToeWinDialog.name} width={1920} height={1080}></Image>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className={styles.topicContainerNpe}>

                            {npeExpanded &&
                            <div className={styles.npeTopicTitle}>
                                <span className={styles.npeTitleOne}>Netz-</span>
                                <span className={styles.npeTitleTwo}>Plan-</span>
                                <span className={styles.npeTitleThree}>Erstellung</span>
                                </div>
                        }
                            <div className={styles.npeStyle} onClick={() => setNpeExpanded(!npeExpanded)}>

                                <div className={styles.imageDecsriptionWrapper}>
                                    <div className={styles.imageContainer}>
                                        <Image className={styles.npeImage} src={structureNpe.src} alt={structureNpe.name} width={1920} height={1080} ></Image>
                                    </div>
                                </div>
                                
                                <div className={styles.imageDecsriptionWrapper}>
                                    <div className={styles.imageContainer}>
                                        <Image className={styles.npeImage} src={npeCodeFull.src} alt={npeCodeFull.name} width={1920} height={1080} ></Image>
                                    </div>
                                </div>
                            </div>


                        </div>




                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}