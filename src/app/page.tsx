'use client';

import Navbar from "@/components/Navbar";
import Sidenav from "@/components/Sidenav";
import { useRouter } from "next/navigation";
import { useUser } from "./context/UserContext";
import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRouter";

export default function Home() {

  const [isSidenavOpen, setIsSidenavOpen] = useState(false);


// In your main app component or layout
useEffect(() => {
  const token = localStorage.getItem('token');
  console.log('App initialized with token:', !!token);
  
  // Check if token exists after a short delay
  const checkTimer = setTimeout(() => {
      const tokenAfterDelay = localStorage.getItem('token');
      console.log('Token after delay:', !!tokenAfterDelay);
  }, 1000);
  
  return () => clearTimeout(checkTimer);
}, []);



return (
  <>
      <ProtectedRoute>
      <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
      <Sidenav isOpen={isSidenavOpen} />
      <main className='content'>
          <h1>Willkommen auf Manu Solutions!</h1>
      </main>
      </ProtectedRoute>
  </>
);


}