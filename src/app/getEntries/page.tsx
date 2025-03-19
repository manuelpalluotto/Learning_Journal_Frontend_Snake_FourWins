'use client';

import FetchEntries from '@/components/FetchEntries';
import Navbar from '@/components/Navbar';
import ProtectedRoute from '@/components/ProtectedRouter';
import Sidenav from '@/components/Sidenav';
import '@/css/getEntries.css';



export default function GetEntries() {
    return(
        <>
        <ProtectedRoute>
        <Navbar />
        <Sidenav />
        <FetchEntries />
        </ProtectedRoute>
        </>
    );
}