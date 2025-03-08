import '@/css/sidenav.css';
import Link from 'next/link';
import { VscSnake } from "react-icons/vsc";
import { FaChessBoard } from "react-icons/fa";
import { FaHome } from "react-icons/fa";


export default function Sidenav() {
    return (
        <div className='sidenav-container'>
            <Link href="/"><FaHome /></Link>
            <Link href="/snake"> <VscSnake /></Link>
            <Link href="/checkfour"><FaChessBoard /></Link>
        </div>
    );
} 