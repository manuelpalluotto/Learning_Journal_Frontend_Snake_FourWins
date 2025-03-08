import '@/css/navbar.css';
import { FaBong } from "react-icons/fa";
import { TbBurger } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';

export default function Navbar() {

    const [isLoggedIn, setLoggedIn] = useState<boolean>(true);
    const [isPressed, setPressed] = useState<boolean>(false);

    const handleDropdownOnClick = () => {
        setPressed(!isPressed);
        console.log(isPressed);
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


                <div className='search'>
                    <input className='searchbar'></input>
                    <div className='mg-glass'><CiSearch /></div>
                </div>


                <div className='login-area'>
                    {!isLoggedIn && <button className='login-button'>Login</button>}
                    {isLoggedIn && <div className='login-area__when-logged-in'>
                        <button className='upload-button'>+ Upload</button>
                        <button className='settings__dropdown-button' onClick={() => handleDropdownOnClick()}>Settings</button>
                        <div className='profile-image'></div>
                        </div>
                        }
                        
                        
                        {isPressed && 
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