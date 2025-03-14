import '@/css/checkfour.css';
import { useState, useRef, useEffect } from 'react';
import { FaArrowDown } from "react-icons/fa";

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

    function dropStone(){

    }

    function detectSpaceBar(e: KeyboardEvent) {
        if (e.key === ' '){
            dropStone();
            console.log('stone dropped');
        }
    }

    useEffect( () => {
        window.addEventListener('keydown', detectSpaceBar);
        return () => window.removeEventListener('keydown', detectSpaceBar);
    });

    useEffect(() => {
        window.addEventListener('keydown', moveLeftAndRight);
        return () => window.removeEventListener('keydown', moveLeftAndRight);
    }, [selectedCol]);

    useEffect(() => {
        drawBoard();
    }, [selectedCol]);

    return (
        <>
            <div className='game-board'>

                <div className='game-info'>
                    <div className='player-turn'>{player}`s turn!</div>
                </div>
                <div className='indicator' style={{ transform: `translateX(${selectedCol * tilesize}px)` }}>
                    <FaArrowDown />
                </div>
                <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight}></canvas>
            </div>
        </>
    );
}