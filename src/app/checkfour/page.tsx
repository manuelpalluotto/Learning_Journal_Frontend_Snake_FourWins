'use client';

import Checkfour from "@/components/checkfour/Checkfour";
import Navbar from "@/components/navbar/Navbar";
import ProtectedRoute from "@/components/protectedRoute/ProtectedRouter";
import Sidenav from "@/components/sidenav/Sidenav";
import { useState } from "react";

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