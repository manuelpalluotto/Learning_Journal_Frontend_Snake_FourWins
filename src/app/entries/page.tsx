'use client';
import '@/css/entries.css';
import Navbar from "@/components/Navbar";
import Sidenav from "@/components/Sidenav";
import Searchbar from '@/components/searchbar';

export default function Entries() {
    return (
        <>
            <Navbar />
            <Searchbar />
            <div className='below--navbar-container'>
                <Sidenav />
                <div className='entries-container'>
                    <div className='author'>asd</div>
                    <div className='content'>asd</div>
                </div>
            </div>

        </>
    );
}