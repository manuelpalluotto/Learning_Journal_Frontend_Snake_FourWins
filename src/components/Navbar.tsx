import '@/css/navbar.css';
import { FaBong } from "react-icons/fa";
import { TbBurger } from "react-icons/tb";
import Link from 'next/link';
import { useUser } from '@/app/context/UserContext';

export default function Navbar() {
    const { isLoggedIn } = useUser();



    return (
        <>
            <div className='titlebar'>
                <div className='wrapper-container__titlebar'>
                    <div className='burger-container'><TbBurger className='burger-icon' /></div>
                    <div className='site-icon'>
                        <FaBong className='manu-icon' />
                        <span>Manu Solutions</span>
                    </div>
                </div>
                <div className='options--button-container'>
                            <button className='show--entries-button'><Link href='/getEntries'>Einträge anzeigen</Link></button>
                            <button className='create--entry-button'><Link href='/postEntries'>Eintrag erstellen</Link></button>
                        </div>
                <div className='login-area'>
                    {!isLoggedIn && <button className='login-button'><Link href='/login'>Login</Link></button>}
                </div>
            </div>
        </>
    );
}