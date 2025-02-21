'use client';
import '@/css/snake.css';
import { useEffect, useRef, useState } from 'react';

export default function Snake() {


    const [gameOver, setGameOver] = useState<boolean>(false);

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const blocksize: number = 15;
    const canvasHeight: number = 50 * blocksize;
    const canvasWidth: number = 75 * blocksize;

    const snakeBody = useRef<{ x: number, y: number }[]>([{ x: 1 * blocksize, y: 1 * blocksize }]);
    const food = useRef<{ x: number, y: number }>({ x: 2 * blocksize, y: 2 * blocksize });
    const [score, setScore] = useState<number>(0);
    const [highScore, setHighScore] = useState<number>(0);
    const direction = useRef<string>('');
    const snakeHead = useRef<{ x: number, y: number }>({ x: snakeBody.current[0].x, y: snakeBody.current[0].y });


    //feste werte statt dynamisch
    //mehr logs
    //

    const calcMovement = (event: KeyboardEvent) => {  //fertig                           
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

    const move = () => {                   //von -- auf -= geändert, weil -- mich nur einen pixel bewegt
        if (direction.current === 'left') {
            snakeHead.current.x -= blocksize;
        }
         if (direction.current === 'right') {
            snakeHead.current.x += blocksize;
        }
         if (direction.current === 'up') {
            snakeHead.current.y -= blocksize;
        }
         if (direction.current === 'down') {
            snakeHead.current.y += blocksize;
        }
        eatFood();
    };

    const eatFood = () => {//fertig
        if (snakeHead.current.x === food.current.x && snakeHead.current.y === food.current.y) { 
            console.log('essen gefunden ', 'neue länge: ', snakeBody.current.length);
            snakeBody.current.push({...food.current}); //statt food.current lieber ...food.current (Spread-operator) speichert ein eigenständiges objekt
            console.log('gegessen ', 'neue länge: ', snakeBody.current.length);
            generateFood();
            setScore((prevScore) => prevScore + 1);
        }
    };

    const generateFood = () => {//fertig

        food.current.x = Math.floor(Math.random() * (canvasWidth / blocksize)) * blocksize;
        food.current.y = Math.floor(Math.random() * (canvasHeight / blocksize)) * blocksize;
        console.log('food', food.current);
    };

    const generateSnake = () => {//fertig
        snakeBody.current[0].x = Math.floor(Math.random() * (canvasWidth / blocksize)) * blocksize;
        snakeBody.current[0].y = Math.floor(Math.random() * (canvasHeight / blocksize)) * blocksize;
        console.log(snakeBody.current[0].x, snakeBody.current[0].y);
    };

    // const headHitsBody = () => {//fertig
    //     if (snakeBody.current.length > 3) {
    //         return snakeBody.current.some((bodyPart) => snakeHead.current === bodyPart);
    //     }
    //     return false;
    // };

    const headHitsBody = () => {
        if (snakeBody.current.length > 3) {
            //'index' in der klammer ermöglicht es mir, mit einem bestimmten element des arrays etwas zu tun
            return snakeBody.current.some((bodyPart, index) => {
                //.some() prüft ob mindestens ein element im array die bedingung erfüllt
                if (index === 0) return false; // Skip head
                return snakeHead.current.x === bodyPart.x && snakeHead.current.y === bodyPart.y;
            });
        }
        return false;
    };

    const overTop = () => {//fertig
        if (snakeHead.current.y < 0) {
            return true;
        }
    };

    const belowBottom = () => {//fertig
        if (snakeHead.current.y > canvasHeight) {
            return true;
        }
    };

    const outOfLeftBound = () => {//fertig
        if (snakeHead.current.x < 0) {
            return true;
        }
    };

    const outOfRightBound = () => {//fertig
        if (snakeHead.current.x > canvasWidth) {
            return true;
        }
    };

    const loseConditions = () => {//fertig
        if (headHitsBody()) {
            alert('Head Collided With Body. Game Over.');
            setGameOver(true);
            return true;
        }
        if (overTop()) {
            alert('Collided With Top Bound. Game Over.');
            setGameOver(true);
            return true;
        }
        if (belowBottom()) {
            alert('Collided With Bottom Bound. Game Over.');
            setGameOver(true);
            return true;
        }
        if (outOfLeftBound()) {
            alert('Collided With Left Bound. Game Over.');
            setGameOver(true);
            return true;
        }
        if (outOfRightBound()) {
            alert('Collided With Right Bound. Game Over.');
            setGameOver(true);
            return true;
        } 
        return false;
        
    };

    const resetScore = () => {//fertig
        if (score > highScore) {
            setHighScore((prevHighScore) => prevHighScore = score);
        }
        setScore((prevScore) => prevScore = 0);
    };

    const resetDirection = () => {//fertig
        direction.current = '';
    };

    const resetGame = () => {//fertig
        if (loseConditions()) {
            resetScore();
            resetDirection();
            generateFood();
            generateSnake();
        }
    };

    const drawGame = () => {
        drawCanvas();
        move();
        resetGame();
    };

    const drawCanvas = () => {

        const context = canvasRef.current?.getContext('2d');

        if (!context) {
            return;
        }

        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.fillStyle = 'black';
        context.fillRect(0, 0, canvasWidth, canvasHeight);
   


        context.fillStyle = 'red';
        context.fillRect(food.current.x, food.current.y, blocksize, blocksize);
    

        snakeBody.current.forEach((block) => {
            context.fillStyle = 'green';
            context.fillRect(block.x, block.y, blocksize, blocksize);
        });
    
    };

   
    //hier zwei useeffects, weil je ein useEffect seine eigene aufgabe bekommt
    useEffect(() => {
        const interval = setInterval(drawGame, 50);
        return () => clearInterval(interval);

    }, []);




    useEffect(() => {
        window.addEventListener('keydown', calcMovement);
        return () => window.removeEventListener('keydown', calcMovement);
    }, []);

    useEffect(() => {
        if (gameOver) {
            setTimeout(() => {
                resetScore();
                resetDirection();
                generateFood();
                generateSnake();
                setGameOver(false); // Spiel zurücksetzen
            }, 100); // Gibt dem Rendering Zeit
        }
    }, [gameOver]);


    return (
        <>
            <div className='body-container'>
                <div className='game-container'>
                    <div className='score'>
                        <span>Score: {score}</span>
                        <span>Highscore: {highScore}</span>
                    </div>
                    <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight}></canvas>
                </div>
            </div>
        </>
    );
}
