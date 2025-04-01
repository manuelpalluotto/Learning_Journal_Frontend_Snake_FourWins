'use client';

import Entries from "@/components/entriesPage/Entries";
import Navbar from "@/components/navbar/Navbar";
import Sidenav from "@/components/sidenav/Sidenav";
import { useState } from "react";

export default function EntriesPage() {

    const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(false);

    return (

        <>
        <style jsx global>{`
                body {
                    background: linear-gradient(to bottom right, #00008b, #4b0082);
                    color: white;
                }
            `}</style>
            <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
            <Sidenav isOpen={isSidenavOpen} />
            <Entries />
        </>

    );

}