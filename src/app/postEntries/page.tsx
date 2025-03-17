'use client';

import '@/css/entriesPage.css';
import Navbar from "@/components/Navbar";
import SetEntries from "@/components/SetEntries";
import Sidenav from "@/components/Sidenav";



export default function PostEntries() {




    return (
        <>
            <Navbar />
            <Sidenav />
            <SetEntries />
        </>
    );
}