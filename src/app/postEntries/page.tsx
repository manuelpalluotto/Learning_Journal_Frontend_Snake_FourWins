'use client';

import '@/css/entriesPage.css';
import Navbar from "@/components/Navbar";
import SetEntries from "@/components/SetEntries";
import Sidenav from "@/components/Sidenav";
import ProtectedRoute from '@/components/ProtectedRouter';



export default function PostEntries() {

    return (
        <>
        <ProtectedRoute>
            <Navbar />
            <Sidenav />
            <SetEntries />
        </ProtectedRoute>
        </>
    );
}