'use client';

import { logout } from "@/lib/api/apiMethods";
import { useUser } from "@/app/context/UserContext";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {


    const router = useRouter();
    const {  setLoggedIn, isLoading, setIsLoading } = useUser();


    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/login');
        }, 3000); // Redirect after 3 seconds

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);
    try {
        const logoutUser = async () => {
            await logout();
            setLoggedIn(false);
            logoutUser();
        }; 
    } catch (error) {
        console.error(error);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/login");
        }, 1000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    );

}
