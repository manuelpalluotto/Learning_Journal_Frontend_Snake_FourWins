'use client';

import FetchEntries from '@/components/fetchEntries/FetchEntries';
import Navbar from '@/components/navbar/Navbar';
import ProtectedRoute from '@/components/protectedRoute/ProtectedRouter';
import Sidenav from '@/components/sidenav/Sidenav';
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