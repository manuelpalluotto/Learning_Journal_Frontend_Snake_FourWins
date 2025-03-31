'use client';

import FetchEntries from '@/components/fetchEntries/FetchEntries';
import Navbar from '@/components/navbar/Navbar';
import Sidenav from '@/components/sidenav/Sidenav';
import { useState } from 'react';



export default function GetEntries() {

    const [isSidenavOpen, setIsSidenavOpen] = useState(false);


    return (
        <>
                <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
                <Sidenav isOpen={isSidenavOpen} />
                <FetchEntries />
        </>
    );
}