'use client';

import FetchEntries from '@/components/FetchEntries';
import Navbar from '@/components/Navbar';
import Sidenav from '@/components/Sidenav';
import '@/css/getEntries.css';



export default function GetEntries() {
    return(
        <>
        <Navbar />
        <Sidenav />
        <FetchEntries />
        </>
    );
}