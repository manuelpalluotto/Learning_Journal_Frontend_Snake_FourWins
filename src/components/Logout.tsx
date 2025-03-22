'use client';

import { logout } from "@/lib/api/apiMethods";
import { useUser } from "@/app/context/UserContext";
import { useState } from "react";

export default function Logout() {

    const {  setLoggedIn } = useUser();

    try {
        const logoutUser = async () => {
            await logout();
            setLoggedIn(false);
        }
        logoutUser();
    }

    return(
        <div>
            
        </div>
    );

}
