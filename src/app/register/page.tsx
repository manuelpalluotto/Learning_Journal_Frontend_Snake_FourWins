'use client';

import Sidenav from "@/components/Sidenav";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Register from "@/components/Register";

export default function RegisterPage() {

    const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(false);


    return (
        <>
            <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
            <Sidenav isOpen={isSidenavOpen} />
            <Register />

        </>
    );
}