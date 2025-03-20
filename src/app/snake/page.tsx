'use client';

import Snake from "@/components/Snake";
import ProtectedRoute from "@/components/ProtectedRouter";
import Sidenav from "@/components/Sidenav";
import Navbar from "@/components/Navbar";
import { useState } from "react";


export default function SnakePage() {

  const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(false);

  return (
    <>
      <ProtectedRoute>
        <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
        <Sidenav isOpen={isSidenavOpen} />
        <Snake />
      </ProtectedRoute>
    </>
  );
}
