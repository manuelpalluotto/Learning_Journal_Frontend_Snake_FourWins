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
    description: string,
};


export default function Infocard() {


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

    const tttStyle = `${styles.tttCardContainer} ${ticExpanded ? styles.expanded : ""}`;

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
                            {/* grün  */}<div className={tttStyle} onClick={() => setTicExpanded(!ticExpanded)}>




                                {/* pink  */}<div className={styles.imageDecsriptionWrapper}>
                                    <div className={styles.imageContainer}>
                                        <Image className={styles.ticTacToeBoardImage} src={ticTacToeCodeFull.src} alt={ticTacToeCodeFull.name} width={400} height={200}></Image>
                                    </div>

                                    {ticExpanded &&
                                        <div className={styles.imageDescription}>{ticTacToeCodeFull.description}</div>
                                    }
                                </div>




                                <div className={styles.imageDecsriptionWrapper}>
                                    <div className={styles.imageContainer}>
                                        <Image className={styles.ticTacToeBoardImage} src={ticTacToeBoard.src} alt={ticTacToeBoard.name} width={400} height={200}></Image>
                                    </div>
                                    {ticExpanded && 
                                        <div className={styles.imageDescription}>{ticTacToeBoard.description}</div>
                                    }
                                </div>




                                <div className={styles.imageDecsriptionWrapper}>
                                    <div className={styles.imageContainer}>
                                        <Image className={styles.ticTacToeBoardImage} src={ticTacToeTieDialog.src} alt={ticTacToeTieDialog.name} width={400} height={200}></Image>
                                    </div>
                                    {ticExpanded && 
                                        <div className={styles.imageDescription}>{ticTacToeTieDialog.description}</div>
                                    }
                                </div>




                                <div className={styles.imageDecsriptionWrapper}>
                                    <div className={styles.imageContainer}>
                                        <Image className={styles.ticTacToeBoardImage} src={ticTacToeWinDialog.src} alt={ticTacToeWinDialog.name} width={400} height={200}></Image>
                                    </div>
                                    {ticExpanded && 
                                        <div className={styles.imageDescription}>{ticTacToeWinDialog.description}</div>
                                    }
                                </div>




                            </div>
                        </div>


                        {/* <div className={styles.topicContainerNpe}>
                            <div className={styles.topicTitle}>Netzplanerstellung</div>
                            <div className={styles.npeCardContainer}>
                                <div className={styles.imageDecsriptionWrapper}>
                                    <div className={styles.imageContainer}>
                                        <Image className={styles.npeImage} src={structureNpe.src} alt={structureNpe.name} width={400} height={200} ></Image>
                                    </div>
                                    <div className={styles.imageDescription}>{structureNpe.description}</div>
                                </div>
                                <div className={styles.imageDecsriptionWrapper}>
                                    <div className={styles.imageContainer}>
                                        <Image className={styles.npeImage} src={npeCodeFull.src} alt={npeCodeFull.name} width={400} height={200} ></Image>
                                    </div>
                                    <div className={styles.imageDescription}>{npeCodeFull.description}</div>
                                </div>
                            </div>
                        </div> */}




                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}