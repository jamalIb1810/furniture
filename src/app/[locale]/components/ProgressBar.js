// src/app/components/ProgressBar.js
'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const startLoading = () => {
        setVisible(true);
        setProgress(30); // Start with 30% on route change start
    };

    const stopLoading = () => {
        setProgress(100); // Complete the progress
        setTimeout(() => setVisible(false), 500); // Hide after 500ms
    };

    useEffect(() => {
        setVisible(true);
        startLoading();
        setTimeout(() => {
            stopLoading();
            setVisible(false);
        }, 500);
    }, [pathname, searchParams]);

    return (
        visible && (
            <div
                style={{
                    width: '100%',
                    backgroundColor: '#ddd',
                    height: '4px',
                    position: 'fixed',
                    top: 0,
                    zIndex: 9999,
                }}
            >
                <div
                    style={{
                        width: `${progress}%`,
                        backgroundColor: '#64F0E3',
                        height: '100%',
                        transition: 'width 0.4s ease',
                    }}
                />
            </div>
        )
    );
};

export default ProgressBar;
