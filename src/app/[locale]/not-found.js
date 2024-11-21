'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NotFound() {
    const router = useRouter();
    useEffect(() => {
        // Redirect to the home page
        router.push('/');
    }, [router]);
    return null;
}
