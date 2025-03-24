'use client';

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Image from 'next/image';
import axios from 'axios';

export default function Home() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

/*   // Token-Handling
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('App initialized with token:', !!token);

    const checkTimer = setTimeout(() => {
      const tokenAfterDelay = localStorage.getItem('token');
      console.log('Token after delay:', !!tokenAfterDelay);
    }, 1000);

    return () => clearTimeout(checkTimer);
   }, []); */

  return (
    <div className="portfolio-wrapper">
      <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
      <div className="portfolio-container">
        <h2>Fachinformatiker - Anwendungsentwicklung</h2>
        <p>Erfahrungen mit Java, JavaScript/TypeScript, Spring Boot, SQL</p>
        <h3>Projekte</h3>
        </div>
      </div>
  );
}