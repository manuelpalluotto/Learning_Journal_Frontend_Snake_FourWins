'use client';

import '@/css/entriesPage.css';
import Navbar from "@/components/Navbar";
import SetEntries from "@/components/SetEntries";
import Sidenav from "@/components/Sidenav";
import ProtectedRoute from '@/components/ProtectedRouter';
import { useState } from 'react';



export default function PostEntries() {

    const [isSidenavOpen, setIsSidenavOpen] = useState(false);


    return (
        <>
            <ProtectedRoute>
                <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
                <Sidenav isOpen={isSidenavOpen} />
                <SetEntries />
            </ProtectedRoute>
        </>
    );
}