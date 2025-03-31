'use client';

import Navbar from "@/components/navbar/Navbar";
import ProtectedRoute from "@/components/protectedRoute/ProtectedRouter";
import Sidenav from "@/components/sidenav/Sidenav";
import Snake from "@/components/snake/Snake";
import { useState } from "react";


export default function SnakePage() {

  const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(false);

  return (
    <>
        <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
        <Sidenav isOpen={isSidenavOpen} />
        <Snake />
    </>
  );
}
