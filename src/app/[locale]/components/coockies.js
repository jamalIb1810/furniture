'use client';
import Cookies from 'js-cookie';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getLocalizedPath } from '../hooks/localizedPath';
import cookies from '/public/icons/cookies.png';

export default function Coockies() {
    const [isVisible, setIsVisible] = useState(null);
    const locale = useLocale();
    const t = useTranslations('Cookies');

    useEffect(() => {
        const cookieAccepted = Cookies.get('cookieAcceptedEvest');
        if (!cookieAccepted) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, []);

    const handleAccept = () => {
        Cookies.set('cookieAcceptedEvest', 'true', { expires: 365 });
        setIsVisible(false);
    };
    const hideIt = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }
    return (
        <section className="fixed bottom-0 w-full bg-colors-evest-500 text-colors-white z-[999] opacity-90">
            <div className="max-w-5xl px-4 py-8 mx-auto md:flex md:items-center md:gap-x-6 flex flex-col md:flex-row">
                <div className="flex items-start md:items-center gap-x-2">
                    <Image
                        src={cookies}
                        className="self-center"
                        alt="coockies"
                    />
                    <p className="text-colors-white text-sm">
                        {t('We use')}{' '}
                        <Link
                            className="underline underline-offset-4"
                            href={getLocalizedPath(
                                `/${locale}/evest/Documents-Policies`
                            )}
                        >
                            {t('Cookie Policy')}
                        </Link>
                    </p>
                </div>
                <div className="flex self-center gap-2 mt-3 items-center">
                    <button
                        name="acceptCoockies"
                        className="btn bg-primary w-[100px] h-[35px] text-colors-white border-none min-h-[20px] hover:bg-accent"
                        onClick={handleAccept}
                    >
                        {t('Accept')}
                    </button>
                    <button
                        name="closeCoockies"
                        className="items-center justify-center text-gray-700 transition-colors duration-300 rounded-full md:flex dark:text-gray-200 dark:hover:bg-gray-700  focus:outline-none hover:bg-gray-200"
                        onClick={hideIt}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                        <p> {t('Decline')} </p>
                    </button>
                </div>
            </div>
        </section>
    );
}
