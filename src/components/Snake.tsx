'use client';
import '@/css/snake.css';
import { useRef, useState, useEffect } from 'react';

export default function Snake() {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const tileSize: number = 15;
    const tileCountY = useRef<number>(0);
    const tileCountX = useRef<number>(0);
    const snakeBody = useRef<{ x: number, y: number }[]>([{ x: 10, y: 10 }]);
    const food = useRef<{ x: number, y: number }>({ x: 15, y: 15 });
    const [score, setScore] = useState<number>(0);
    const [highScore, setHighScore] = useState<number>(0);
    const direction = useRef<string>('');
    const margin = 200;


    const setCanvasSize = () => {
        if (!canvasRef || !canvasRef.current) return;
        canvasRef.current.width = window.innerWidth - 2 * margin;
        canvasRef.current.height = window.innerHeight - 2 * margin;
        tileCountX.current = Math.floor(canvasRef.current.width / tileSize);
        tileCountY.current = Math.floor(canvasRef.current.height / tileSize);
    };

    const calcMovement = (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft' && direction.current !== 'right') {
            direction.current = 'left';
        }
        if (event.key === 'ArrowUp' && direction.current !== 'down') {
            direction.current = 'up';
        }
        if (event.key === 'ArrowRight' && direction.current !== 'left') {
            direction.current = 'right';
        }
        if (event.key === 'ArrowDown' && direction.current !== 'up') {
            direction.current = 'down';
        }
    };

    const generateFood = () => {
        food.current.x = Math.floor(Math.random() * tileCountX.current);
        food.current.y = Math.floor(Math.random() * tileCountY.current);

    };

    const generateSnake = () => {
        snakeBody.current[0].x = Math.floor(Math.random() * tileCountX.current);
        snakeBody.current[0].y = Math.floor(Math.random() * tileCountY.current); 
    };

    const eatFood = () => {
        let snakeHead = snakeBody.current[0];
        if (snakeHead.x === food.current.x && snakeHead.y === food.current.y) {
            generateFood();
            setScore((prevScore) => prevScore + 1);
        } else {
            snakeBody.current.pop();
        }
    };

    const move = () => {
        let snakeHead = snakeBody.current[0];
        if (direction.current === 'left') {
            snakeHead.x--;
        } if (direction.current === 'right') {
            snakeHead.x++;
        } if (direction.current === 'up') {
            snakeHead.y--;
        } if (direction.current === 'down') {
            snakeHead.y++;
        }
        snakeBody.current.unshift({ x: snakeHead.x, y: snakeHead.y });
        eatFood();

        if (snakeHead.x < 0 || snakeHead.x > tileCountX.current || snakeHead.y < 0 || snakeHead.y > tileCountY.current || headHitsBody()) {
            alert('Game Over!');
            if (score > highScore) {
                setHighScore((prevHighScore) => prevHighScore = score);
            }
            setScore((prevScore) => prevScore = 0);
            generateFood();
            generateSnake();
            direction.current = '';
            snakeBody.current[0] = {x: Math.floor(Math.random() * tileCountX.current),  y: Math.floor(Math.random() * tileCountX.current)};
        }
    };
    const headHitsBody = () => {
        let snakeHead = snakeBody.current[0];
        if (snakeBody.current.length > 3) {
            return snakeBody.current.some(bodyPart => snakeHead.x === bodyPart.x && snakeHead.y === bodyPart.y);
        }
    };


    useEffect(() => {

        const context = canvasRef.current?.getContext('2d');


        if (!context) {
            return;
        }

        setCanvasSize();

        const drawCanvas = () => {
            context.clearRect(0, 0, tileCountX.current * tileSize, tileCountY.current * tileSize);

            context.fillStyle = 'black';
            context.fillRect(0, 0, tileCountX.current * tileSize, tileCountY.current * tileSize);
        };

        const drawFood = () => {
            context.fillStyle = 'red';
            context.fillRect(food.current.x * tileSize, food.current.y * tileSize, tileSize, tileSize);
        };

        const drawSnake = () => {
            snakeBody.current.forEach((block) => {
                context.fillStyle = 'green';
                context.fillRect(block.x * tileSize, block.y * tileSize, tileSize, tileSize);
            });
        };

        const interval = setInterval(() => {
            drawCanvas();
            drawFood();
            drawSnake();
            move();
        }, 50);

        return () => clearInterval(interval);

    }, []); 

    useEffect(() => {
        window.addEventListener('keydown', calcMovement);
        return () => window.removeEventListener('keydown', calcMovement);
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