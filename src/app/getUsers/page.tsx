'use client';
import { fetchUsers } from "@/lib/api/apiMethods";
import { useEffect, useState } from "react";
import { User } from "@/lib/api/apiClient";

export default function GetUsers() {
    
    const [data, setData] = useState<User[]>([]);

    async function getData() {
        const response = await fetchUsers();
        setData(response);
    }

    useEffect( () => {
        getData();
    }, []);

    return(
        <>
        {data}
        </>
    );
}