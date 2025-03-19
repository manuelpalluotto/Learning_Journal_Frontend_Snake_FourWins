'use client';

import Navbar from "@/components/Navbar";
import Sidenav from "@/components/Sidenav";
import { useRouter } from "next/navigation";
import { useUser } from "./context/UserContext";
import { useEffect } from "react";

export default function Home() {



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
      <Navbar />
      <Sidenav />
      </>
  );
}