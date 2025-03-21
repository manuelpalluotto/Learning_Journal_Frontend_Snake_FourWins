import '@/css/sidenav.css';
import Link from 'next/link';
import { VscSnake } from "react-icons/vsc";
import { FaChessBoard } from "react-icons/fa";
import { FaHome } from "react-icons/fa";


export default function Sidenav({ isOpen }: { isOpen: boolean }) {
    return (
        <aside className={`sidenav-container ${isOpen ? 'open' : ''}`}>
            <Link href='/'><FaHome /> Home</Link>
            <Link href='/snake'><VscSnake /> Snake</Link>
            <Link href='/checkfour'><FaChessBoard /> Vier Gewinnt</Link>
        </aside>
    );
} 