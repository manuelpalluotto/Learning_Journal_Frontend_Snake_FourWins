'use client';

import Checkfour from "@/components/Checkfour";
import Navbar from "@/components/Navbar";
import Sidenav from "@/components/Sidenav";
import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRouter";

export default function CheckfourPage() {

    const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(false);

    return (
        <>
            <ProtectedRoute>
                <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
                <Sidenav isOpen={isSidenavOpen} />
                <Checkfour />
            </ProtectedRoute>
        </>
    );
}