import styles from './Checkfour.module.css';
import { useState, useRef, useEffect } from 'react';
import { FaArrowDown } from "react-icons/fa";
import BackButton from '../backButton/Backbutton';

export default function Checkfour() {

    const canvasRef = useRef<HTMLCanvasElement>(document.createElement('canvas'));

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

    function drawBoard() {
        const context = canvasRef.current?.getContext('2d');
        if (context) {
            context.clearRect(0, 0, canvasWidth, canvasHeight);

            context.strokeStyle = '#d7d7d7';

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    context.strokeRect(c * tilesize, r * tilesize, tilesize, tilesize);

                }
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
        if (ctx) {
            for (let r = rows - 1; r >= 0; r--) {
                if (!board[r][selectedCol]) {

                    ctx.fillStyle = player === 'Player 1' ? 'red' : 'yellow';
                    ctx.beginPath();

                    // Calculate the x and y coordinates based on the column and row
                    const x = (selectedCol + 0.5) * tilesize;
                    const y = (r + 0.5) * tilesize;

                    ctx.arc(x, y, tilesize / 2, 0, Math.PI * 2);
                    ctx.fill();
                    const newBoard = [...board];
                    newBoard[r][selectedCol] = player;
                    setBoard(newBoard);
                    setPlayer(player === 'Player 1' ? 'Player 2' : 'Player 1');
                    break;
                }

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