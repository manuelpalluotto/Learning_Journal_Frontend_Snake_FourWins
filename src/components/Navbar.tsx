import '@/css/navbar.css';
import { FaBong } from "react-icons/fa";
import { TbBurger } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import Searchbar from './searchbar';

export default function Navbar() {

    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);


    const [isLoginPressed, setLoginPressed] = useState<boolean>(false);
    const handleLoginClick = () => {
        setLoginPressed(!isLoginPressed);
    };


    const [isDropdownPressed, setDropdownPressed] = useState<boolean>(false);
    const handleDropdownOnClick = () => {
        setDropdownPressed(!isDropdownPressed);
    };

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
                    <div className='login-area'>
                        {!isLoggedIn && <button className='login-button' onClick={() => handleLoginClick()}>Login</button>}
                        {isLoginPressed && <div className='login-window'>
                            <input className='user-span'></input>
                            <input className='password-span'></input>
                        </div>}
                        {isLoggedIn && <div className='login-area__when-logged-in'>
                            <button className='upload-button'>+ Upload</button>
                            <button className='settings__dropdown-button' onClick={() => handleDropdownOnClick()}>Settings</button>
                            <div className='profile-image'></div>
                        </div>
                        }
                        {isDropdownPressed &&
                            <div className='settings-container'>
                                <button className='account-settings'>Account Settings</button>
                                <button className='account-settings'>Account Settings</button>
                                <button className='account-settings'>Account Settings</button>
                                <button className='account-settings'>Account Settings</button>
                                <button className='account-settings'>Account Settings</button>
                            </div>
                        }
                    </div>
                </div>
        </>
    );
}