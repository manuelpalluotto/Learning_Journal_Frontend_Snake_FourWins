'use client';

import styles from './Checkfour.module.css';
import { useState, useRef, useEffect } from 'react';
import { FaArrowDown } from "react-icons/fa";
import BackButton from '../backButton/Backbutton';

export default function Checkfour() {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const [player, setPlayer] = useState<string>('Player 1');

    const rows: number = 6;
    const cols: number = 7;
    const [selectedCol, setSelectedCol] = useState<number>(0);

    const [board, setBoard] = useState<Array<Array<string>>>(
        Array(rows).fill(null).map(() => Array(cols).fill(''))
    );

    const tilesize: number = 100;
    const canvasWidth: number = cols * tilesize;
    const canvasHeight: number = rows * tilesize;

    function checkWin(): boolean {
        const directions = [
            { r: 0, c: 1 },  // Horizontal
            { r: 1, c: 0 },  // Vertikal
            { r: 1, c: 1 },  // Diagonal /
            { r: 1, c: -1 }, // Diagonal \
        ];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const currentPlayer = board[r][c];
                if (!currentPlayer) continue; // Leere Felder überspringen

                // Für jede Richtung prüfen
                for (let dir of directions) {
                    let count = 0;

                    // Prüfen, ob wir 4 Steine in einer Richtung finden
                    for (let i = 0; i < 4; i++) {
                        const nr = r + dir.r * i;
                        const nc = c + dir.c * i;

                        // Wenn wir außerhalb des Spiels sind oder die Farbe nicht übereinstimmt, abbrechen
                        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || board[nr][nc] !== currentPlayer) {
                            break;
                        }
                        count++;
                    }

                    if (count === 4) {
                        return true; // Gewinnbedingung erfüllt
                    }
                }
            }
        }
        return false; // Kein Gewinner
    }

    function drawBoard() {
        const context = canvasRef.current?.getContext('2d');
        if (!context) return;
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.strokeStyle = '#d7d7d7';

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                context.strokeRect(c * tilesize, r * tilesize, tilesize, tilesize);
            }
        }
    }


    function moveLeftAndRight(e: KeyboardEvent) {
        if ((e.key === 'a' || e.key === 'ArrowLeft') && selectedCol > 0) {
            setSelectedCol(selectedCol - 1);
        } else if ((e.key === 'd' || e.key === 'ArrowRight') && selectedCol < cols - 1) {
            setSelectedCol(selectedCol + 1);
        }
    }

    function dropStone() {
        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx) return;

        for (let r = rows - 1; r >= 0; r--) {
            if (!board[r][selectedCol]) {
                ctx.fillStyle = player === 'Player 1' ? 'red' : 'yellow';
                ctx.beginPath();
                const x = (selectedCol + 0.5) * tilesize;
                const y = (r + 0.5) * tilesize;
                ctx.arc(x, y, tilesize / 2, 0, Math.PI * 2);
                ctx.fill();

                const newBoard = [...board];
                newBoard[r][selectedCol] = player;
                setBoard(newBoard);
                setPlayer(prev => prev === 'Player 1' ? 'Player 2' : 'Player 1');

                // Prüfen, ob der Spieler gewonnen hat
                if (checkWin()) {
                    alert(`${player} wins!`);
                    // Spiel zurücksetzen
                    setBoard(Array(rows).fill(null).map(() => Array(cols).fill('')));
                    setPlayer('Player 1');
                    setSelectedCol(0);
                }
                break;
            }
        }
    }

    function detectSpaceBar(e: KeyboardEvent) {
        if (e.key === ' ') {
            dropStone();

        }
    }

    useEffect(() => {
        window.addEventListener('keydown', detectSpaceBar);
        return () => window.removeEventListener('keydown', detectSpaceBar);
    });

    useEffect(() => {
        window.addEventListener('keydown', moveLeftAndRight);
        return () => window.removeEventListener('keydown', moveLeftAndRight);
    }, [selectedCol]);

    useEffect(() => {
        drawBoard();
    }, []);

    return (
        <>
        <BackButton href='/' />
            <div className={styles['game-board']}>

                <div className={styles['game-info']}>
                    <div className={styles['player-turn']}>{player}`s turn!</div>
                </div>
                <div className={styles.idicator} style={{ transform: `translateX(${selectedCol * tilesize}px)` }}>
                    <FaArrowDown className={styles.arrow}/>
                </div>
                <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight}></canvas>
            </div>
        </>
    );
}