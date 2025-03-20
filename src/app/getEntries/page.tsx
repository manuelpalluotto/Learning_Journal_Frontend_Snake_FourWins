'use client';

import FetchEntries from '@/components/FetchEntries';
import Navbar from '@/components/Navbar';
import ProtectedRoute from '@/components/ProtectedRouter';
import Sidenav from '@/components/Sidenav';
import '@/css/getEntries.css';
import { useState } from 'react';



export default function GetEntries() {

    const [isSidenavOpen, setIsSidenavOpen] = useState(false);


    return (
        <>
            <ProtectedRoute>
                <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
                <Sidenav isOpen={isSidenavOpen} />
                <FetchEntries />
            </ProtectedRoute>
        </>
    );
}