'use client';

import Navbar from "@/components/navbar/Navbar";
import ProtectedRoute from '@/components/protectedRoute/ProtectedRouter';
import SetEntries from "@/components/setEntries/SetEntries";
import Sidenav from "@/components/sidenav/Sidenav";
import '@/css/entriesPage.css';
import { useState } from 'react';



export default function PostEntries() {

    const [isSidenavOpen, setIsSidenavOpen] = useState(false);


    return (
        <>
                <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
                <Sidenav isOpen={isSidenavOpen} />
                <SetEntries />
        </>
    );
}