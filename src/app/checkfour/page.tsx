'use client';

import Checkfour from "@/components/checkfour/Checkfour";
import Navbar from "@/components/navbar/Navbar";
import Sidenav from "@/components/sidenav/Sidenav";
import { useState } from "react";

export default function CheckfourPage() {

    const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(false);

    return (
        <>
                <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
                <Sidenav isOpen={isSidenavOpen} onClose={() => setIsSidenavOpen(false)}/>
                <Checkfour />
        </>
    );
}