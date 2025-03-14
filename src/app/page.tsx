'use client';

import { useUser } from "./context/UserContext";
import "@/css/home.css";
import Navbar from "@/components/Navbar";
import Sidenav from "@/components/Sidenav";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <Navbar />
      <Sidenav />
      <div className='content-container'>
        <div className='options--button-container'>
          <button className='show--entries-button'><Link href='/entries'>Einträge anzeigen</Link></button>
          <button className='create--entry-button'><Link href='/users'>Eintrag erstellen</Link></button>
          <button className='show--profile-button'><Link href='/users'>Mein Profil</Link></button>
        </div>
      </div>
    </>
  );
}