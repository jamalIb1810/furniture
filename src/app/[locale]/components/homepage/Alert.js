'use client';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from '../../../../../public/images/homepage/Evest-Final-Logo-Icon500px.png';
import academyPhone from '/public/images/homepage/academyPhone.png';
import { useMobile } from '../../../context/MobileContext';

export default function Alert() {
    const t = useTranslations('HomePage2.AcademyStrip');
    const locale = useLocale();
    const [show, setShow] = useState(true);
    const [hideIt, setHideIt] = useState('');
    const isMobile = useMobile();

    useEffect(() => {
        if (!show) {
            const timer = setTimeout(() => {
                setHideIt('hidden');
            }, 800); // Set timeout to match animation duration
            return () => clearTimeout(timer);
        }
    }, [show]);
    return (
        <div
            className={
                show
                    ? 'flex justify-center items-center bg-[#ededed]'
                    : `sticky top-0 z-[900] flex justify-center bg-[#ededed] items-center animate-fadeOut ${hideIt}`
            }
        >
            <div
                role="alert"
                className={`alert ${isMobile ? `w-full ${locale != 'ar' && 'ps-0'}` : 'w-fit'} w-fit h-16 my-4 relative flex`}
            >
                <Image
                    src={academyPhone}
                    className={`w-[60px] h-[80px]`}
                    alt="breast cancer"
                />
                <Link
                    href={`https://academy.evest.com/?lang=${locale}`}
                    className="text-center pe-5"
                >
                    <p
                        className={`text-[#314147] ${isMobile ? `text-[16px]` : 'text-[20px]'}  font-bold`}
                    >
                        {t('Discover')}
                    </p>
                    <p
                        className={`text-[#058080] ${isMobile ? `text-[12px]` : 'text-[14px]'}`}
                    >
                        {t('revolution')}
                    </p>
                </Link>

                <div
                    className={`absolute top-1 ${locale == 'ar' ? 'left-1' : 'right-1'} `}
                >
                    <button
                        className="btn btn-xs bg-colors-red-500 text-colors-white btn-circle text-[12px] hover:text-colors-red-300 hover:bg-colors-red-800 text-english"
                        onClick={() => {
                            setShow(false);
                        }}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    );
}
