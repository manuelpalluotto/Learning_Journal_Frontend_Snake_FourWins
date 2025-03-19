'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/app/context/UserContext';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isLoggedIn, isLoading } = useUser();
    const router = useRouter();



    // In your ProtectedRoute component
    useEffect(() => {
        console.log('Protected route: token exists =', !!localStorage.getItem('token'));

        // Also log when the component unmounts
        return () => {
            console.log('Protected route unmounting: token exists =', !!localStorage.getItem('token'));
        };
    }, []);


    
    useEffect(() => {
        if (!isLoading && !isLoggedIn) {
            router.push('/login');
        }
    }, [isLoggedIn, isLoading, router]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isLoggedIn) {
        return null;
    }

    return <>{children}</>;
}