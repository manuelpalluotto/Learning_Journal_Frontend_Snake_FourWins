import '@/css/navbar.css';
import { FaBong } from "react-icons/fa";
import { TbBurger } from "react-icons/tb";
import Link from 'next/link';
import { useUser } from '@/app/context/UserContext';

export default function Navbar({ toggleSidenav }: { toggleSidenav: () => void }) {
    const { isLoggedIn } = useUser();



    return (
        <nav className='titlebar'>
            <div className='wrapper-container__titlebar'>
                <button className='burger-container' onClick={toggleSidenav}>
                    <TbBurger className='burger-icon' />
                </button>
                <div className='site-icon'>
                    <FaBong className='manu-icon' />
                    <span>Manu Solutions</span>
                </div>
            </div>
            <div className='options--button-container'>
                <Link href='/getEntries' className='nav-button'>Einträge anzeigen</Link>
                <Link href='/postEntries' className='nav-button'>Eintrag erstellen</Link>
            </div>
            <div className='login-area'>
                {isLoggedIn ? (<Link href='/logout' className='login-button'>Logout</Link>) : (<Link href='/' className='login-button'>Login</Link>)}
            </div>
        </nav>
    );
}