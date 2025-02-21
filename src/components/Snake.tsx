'use client';
import '@/css/snake.css';
import { useRef, useState, useEffect } from "react";


export default function Snake() {

    const blocksize: number = 15;

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const canvasWidth: number = 30 * blocksize;
    const canvasHeight: number = 20 * blocksize;

    const [score, setScore] = useState<number>(0);
    const [highScore, setHighScore] = useState<number>(0);

    const food = useRef<{ x: number, y: number }>({ x: Math.floor(Math.random() * canvasWidth / blocksize) * blocksize, y: Math.floor(Math.random() * canvasHeight / blocksize) * blocksize });

    const snakeBody = useRef<{ x: number, y: number }[]>([{ x: Math.floor(Math.random() * canvasWidth / blocksize) * blocksize, y: Math.floor(Math.random() * canvasHeight / blocksize) * blocksize }]);

    const direction = useRef<string>('');



    const drawCanvas = () => {

        //das ausrufezeichen ist der not null operator und sagt typescript dass dieses element sicher nicht null ist
        const context = canvasRef.current!.getContext('2d');


        context!.clearRect(0, 0, canvasWidth, canvasHeight);
        context!.fillStyle = 'black';
        context!.fillRect(0, 0, canvasWidth, canvasHeight);

        context!.fillStyle = 'lime';
        context!.fillRect(snakeBody.current[0].x, snakeBody.current[0].y, blocksize, blocksize);


        snakeBody.current.forEach((block) => {
            context!.fillStyle = 'red';
            context!.fillRect(food.current.x, food.current.y, blocksize, blocksize);
        });
    };


    const keypressed = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft' && direction.current !== 'right') {
            console.log('Taste links erkannt');
            direction.current = 'left';
        }
        if (e.key === 'ArrowUp' && direction.current !== 'down') {
            console.log('Taste oben erkannt');
            direction.current = 'up';
        }
        if (e.key === 'ArrowRight' && direction.current !== 'left') {
            console.log('Taste rechts erkannt');
            direction.current = 'right';
        }
        if (e.key === 'ArrowDown' && direction.current !== 'up') {
            console.log('Taste unten erkannt');
            direction.current = 'down';
        }
    };



    const move = () => {


        if (direction.current === 'left') {
            console.log('fahre nach links');
            snakeBody.current[0].x -= blocksize;
        }
        if (direction.current === 'right') {
            console.log('fahre nach rechts');
            snakeBody.current[0].x += blocksize;
        }
        if (direction.current === 'up') {
            console.log('fahre nach oben');
            snakeBody.current[0].y -= blocksize;
        }
        if (direction.current === 'down') {
            console.log('fahre nach oben');
            snakeBody.current[0].y += blocksize;
        }
    };


    const losingCondition = () => {

        if (snakeBody.current[0].x < 0) {
            alert('collision left');
            return true;
        }
        if (snakeBody.current[0].x > canvasWidth) {
            alert('collision right');
            return true;
        }
        if (snakeBody.current[0].y < 0) {
            alert('collision up');
            return true;
        }
        if (snakeBody.current[0].y > canvasHeight) {
            alert('collision down');
            return true;
        }
    };

    const gameLoop = () => {
        move();
        if (losingCondition()) {
            return;
        }
        drawCanvas();
    };


    useEffect(() => {
        window.addEventListener('keydown', keypressed);
        return () => window.removeEventListener('keydown', keypressed);
    });


   useEffect( () => {
    const gameInterval = setInterval(gameLoop, 100);
    return () => clearInterval(gameInterval);
   });


    return (
        <>
            <div className='body-container'>
                <div className='game-container'>
                    <div className='score-container'>
                        <span className='score'>Score: {score}</span>
                        <span className='highscore'>Highscore: {highScore}</span>
                    </div>
                    <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight}></canvas>
                </div>
            </div>
        </>
    );

}