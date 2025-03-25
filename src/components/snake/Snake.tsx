'use client';
import styles from './Snake.module.css';
import { useEffect, useRef, useState } from "react";


export default function Snake() {

    const blocksize: number = 15;

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const canvasWidth: number = 60 * blocksize;
    const canvasHeight: number = 40 * blocksize;

    const [score, setScore] = useState<number>(0);
    const [highScore, setHighScore] = useState<number>(0);

    const [food, setFood] = useState<{ x: number, y: number }>({ x: Math.floor(Math.random() * canvasWidth / blocksize) * blocksize, y: Math.floor(Math.random() * canvasHeight / blocksize) * blocksize });
    const snakeBody = useRef<{ x: number, y: number }[]>([{ x: Math.floor(Math.random() * canvasWidth / blocksize) * blocksize, y: Math.floor(Math.random() * canvasHeight / blocksize) * blocksize }]);
    const direction = useRef<string>('');

    const newFood = {
        x: Math.floor(Math.random() * (canvasWidth / blocksize)) * blocksize,
        y: Math.floor(Math.random() * (canvasHeight / blocksize)) * blocksize
    };

    const drawCanvas = () => {

        //das ausrufezeichen ist der not null operator und sagt typescript dass dieses element sicher nicht null ist
        const context = canvasRef.current!.getContext('2d');


        context!.clearRect(0, 0, canvasWidth, canvasHeight);
        context!.fillStyle = 'black';
        context!.fillRect(0, 0, canvasWidth, canvasHeight);

        context!.fillStyle = 'red';
        context!.fillRect(food.x, food.y, blocksize, blocksize);

        snakeBody.current.forEach((block, index) => {

            context!.fillStyle = index === 0 ? 'pink' : 'lime';
            context!.fillRect(block.x, block.y, blocksize, blocksize);
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


    const eat = () => {
        if (snakeBody.current[0].x === food.x && snakeBody.current[0].y === food.y) {
            console.log('food eaten');
            const newFood = {
                x: Math.floor(Math.random() * (canvasWidth / blocksize)) * blocksize,
                y: Math.floor(Math.random() * (canvasHeight / blocksize)) * blocksize
            };
            setFood(newFood);
            snakeBody.current.push({ ...snakeBody.current[snakeBody.current.length - 1] });
        }
    };

    const move = () => {

        for (let i = snakeBody.current.length - 1; i > 0; i--) {
            snakeBody.current[i] = { ...snakeBody.current[i - 1] };
        }
        if (direction.current === 'left') {
            snakeBody.current[0].x -= blocksize;
        }
        if (direction.current === 'right') {
            snakeBody.current[0].x += blocksize;
        }
        if (direction.current === 'up') {
            snakeBody.current[0].y -= blocksize;
        }
        if (direction.current === 'down') {
            snakeBody.current[0].y += blocksize;
        }
    };


    const losingCondition = () => {

        if (snakeBody.current[0].x < 0) {
            alert('collision left');
            //resetGame();
            return true;
        }
        if (snakeBody.current[0].x > canvasWidth) {
            alert('collision right');
            //resetGame();
            return true;
        }
        if (snakeBody.current[0].y < 0) {
            alert('collision up');
            //resetGame();
            return true;
        }
        if (snakeBody.current[0].y > canvasHeight) {
            alert('collision down');
            //resetGame();
            return true;
        }
        if (snakeBody.current.length > 3) {
                if (snakeBody.current.some((block, index) => index !== 0 && snakeBody.current[0].x === block.x && snakeBody.current[0].y === block.y)) {
                    alert('collision with head');
                    //resetGame();
                    return true;
                }
        }
    };

    const resetGame = () => {
        setFood(newFood);
        snakeBody.current = [{ x: Math.floor(Math.random() * canvasWidth / blocksize) * blocksize, y: Math.floor(Math.random() * canvasHeight / blocksize) * blocksize }];
        direction.current = '';
        setScore(0);
        if (score > highScore) {
            setHighScore(score);
        }
    };

    const gameLoop = () => {
        if (losingCondition()) {
            resetGame();
        }
        move();
        eat();
        drawCanvas();
    };


    useEffect(() => {
        window.addEventListener('keydown', keypressed);
        return () => window.removeEventListener('keydown', keypressed);
    });


    useEffect(() => {
        const gameInterval = setInterval(gameLoop, 50);
        return () => clearInterval(gameInterval);
    },);


    return (
        <>
            <div className={styles['body-container']}>
                <div className={styles['game-container']}>
                    <div className={styles['score-container']}>
                        <span className={styles.score}>Score: {score}</span>
                        <span className={styles.highscore}>Highscore: {highScore}</span>
                    </div>
                    <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight}></canvas>
                </div>
            </div>
        </>
    );

}