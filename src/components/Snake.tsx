'use client';
import '@/css/snake.css';
import { useRef, useState, useEffect } from 'react';


type KeyboardEvent = {
    key: string;
};


export default function Snake() {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const tileSize: number = 15;
    const tileCountY = useRef<number>(0);
    const tileCountX = useRef<number>(0);
    const snakeBody: { x: number, y: number }[] = [{ x: 10, y: 10 }];
    const food: { x: number, y: number } = { x: 15, y: 15 };
    const [score, setScore] = useState<number>(0);
    const [highScore, setHighScore] = useState<number>(0);
    const direction = useRef<string>('');
    const snakeHead = { x: snakeBody[0].x, y: snakeBody[0].y };
    const margin = 200;


    const setCanvasSize = () => {
        if (!canvasRef || !canvasRef.current) return;
        canvasRef.current.width = window.innerWidth - 2 * margin;
        canvasRef.current.height = window.innerHeight - 2 * margin;
        tileCountX.current = Math.floor(canvasRef.current.width / tileSize);
        tileCountY.current = Math.floor(canvasRef.current.height / tileSize);
    };

    const calcMovement = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft' && direction.current !== 'right')/*left*/ {
            direction.current = 'left';
        }
        if (e.key === 'ArrowUp' && direction.current !== 'down')/*up*/ {
            direction.current = 'up';
        }
        if (e.key === 'ArrowRight' && direction.current !== 'left')/*right*/ {
            direction.current = 'right';
        }
        if (e.key === 'ArrowDown' && direction.current !== 'up')/*down*/ {
            direction.current = 'down';
        }
    };

    const generateFood = () => {
        food.x = Math.floor(Math.random() * tileCountX.current);
        food.y = Math.floor(Math.random() * tileCountY.current);

    };

    const generateSnake = () => {
        snakeHead.y = Math.floor(Math.random() * tileCountX.current);
        snakeHead.x = Math.floor(Math.random() * tileCountY.current);
    };

    const eatFood = () => {
        if (snakeHead.x === food.x && snakeHead.y === food.y) {
            snakeBody.push(food);
            setScore((prevScore) => prevScore + 1);
            generateFood();
        }
    };

    const move = () => {
        if (direction.current = 'left') {
            snakeHead.x--;
        } if (direction.current = 'right') {
            snakeHead.x++;
        } if (direction.current = 'up') {
            snakeHead.y--;
        } if (direction.current = 'down') {
            snakeHead.y++;
        }
        eatFood();

        if (snakeHead.x < 0 || snakeHead.x > tileCountX.current || snakeHead.y < 0 || snakeHead.y > tileCountY.current || headHitsBody()) {
            alert('Game Over!');
            if (score > highScore) {
                setHighScore((prevHighScore) => prevHighScore = score);
            }
            setScore((prevScore) => prevScore = 0);
            generateFood();
            generateSnake();
        }
    };
    const headHitsBody = () => {
        if (snakeBody.length > 3) {
            return snakeBody.some(bodyPart => snakeHead.x === bodyPart.x && snakeHead.y === bodyPart.y);
        }
    };


    useEffect(() => {

        const context = canvasRef.current?.getContext('2d');


        if (!context) {
            return;
        }

        setCanvasSize();

        const drawCanvas = () => {
            context.fillStyle = 'black';
            context.fillRect(0, 0, tileSize, tileSize);
        };

        const drawFood = () => {
            context.fillStyle = 'red';
            context.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);
        };

        const drawSnake = () => {
            snakeBody.forEach((block) => {
                context.fillStyle = 'green';
                context.fillRect(block.x * tileSize, block.y * tileSize, tileSize, tileSize);
            });
        };

        window.addEventListener('keydown', calcMovement);

        const interval = setInterval(() => {
            move();
            drawCanvas();
            drawFood();
            drawSnake();
        }, 50);

        return () => {
            clearInterval(interval);
            removeEventListener('keydown', calcMovement);
        };

    }, []);


    return (
        <>
            <div className='body-container'>
                <div className='game-container'>
                    <div className='score'>
                        <span>Score: {score}</span>
                        <span>Highscore: {highScore}</span>
                    </div>
                    <canvas ref={canvasRef}></canvas>
                </div>
            </div>
        </>
    );
}