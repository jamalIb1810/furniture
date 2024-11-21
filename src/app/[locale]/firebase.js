'use client';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { useEffect } from 'react';

const firebaseConfig = {
    apiKey: 'AIzaSyAR-Oj7tzp47jlL-nV9xkRnbXGA7wNkG-s',
    authDomain: 'ultra-brand-291910.firebaseapp.com',
    projectId: 'ultra-brand-291910',
    storageBucket: 'ultra-brand-291910.appspot.com',
    messagingSenderId: '174835192735',
    appId: '1:174835192735:web:0ae685c9bb912b728be3aa',
    measurementId: 'G-D7P6ZJ0HY3',
};

export default function Firebase() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    useEffect(() => {
        getAnalytics(app);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <></>;
}
