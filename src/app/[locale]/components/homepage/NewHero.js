'use client';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useMobile } from '../../../context/MobileContext';
import { getLocalizedPath } from '../../hooks/localizedPath';
import Buttons from '../innerComponents/Buttons';
import './style.css';
import barcode from '/public/icons/homepage/barCode.png';
import ArBg from '/public/images/backgrounds/ArBg.png';
import EnBg from '/public/images/backgrounds/EnBg1.png';
import MobileBG from '/public/images/backgrounds/MobileBG.png';
import appStore from '/public/images/homepage/applestore.png';
import ArMobile from '/public/images/homepage/ArMobile.png';
import bracket from '/public/images/homepage/brackets-big.png';
import EnMobile from '/public/images/homepage/EnMobile.png';
import EsMobile from '/public/images/homepage/EsMobile.png';
import mainImgar from '/public/images/homepage/mainImgar.png';
import mainImgen from '/public/images/homepage/mainImgen.png';
import mainImges from '/public/images/homepage/mainImges.png';
import playstore from '/public/images/homepage/Playstore.png';

export default function Hero() {
    const t = useTranslations('HomePage2.Hero');
    const locale = useLocale();
    const isMobile = useMobile();

    const localeImages = {
        es: { main: mainImges, mobile: EsMobile },
        ar: { main: mainImgar, mobile: ArMobile },
        en: { main: mainImgen, mobile: EnMobile },
    };

    const appleLinks = {
        en: `https://apps.apple.com/sa/app/evest-stock-forex-trading/id1560191184?l=en`,
        es: `https://apps.apple.com/sa/app/evest-stock-forex-trading/id1560191184?l=es`,
        ar: `https://apps.apple.com/sa/app/%D8%A7%D9%8A%D9%81%D8%B3%D8%AA-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AB%D9%85%D8%A7%D8%B1-%D9%88%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D8%A7%D9%84%D8%A7%D8%B3%D9%87%D9%85/id1560191184?l=ar`,
    };

    const [img] = useState(localeImages[locale].main);
    const [mobileImg] = useState(localeImages[locale].mobile);
    const [apple] = useState(appleLinks[locale]);

    const renderButtons = (props) => (
        <Buttons
            divClass={props.divClass}
            btn1Class={props.btn1Class}
            btn1Href={props.btn1Href}
            btn1Text={props.btn1Text}
            btn1Alt={props.btn1Alt}
            btn2Class={props.btn2Class}
            btn2Href={props.btn2Href}
            btn2Text={props.btn2Text}
            btn2Alt={props.btn2Alt}
        />
    );

    return (
        <div
            className={`grid gird-cols-1 sm:grid-cols-2 relative bg-white justify-center items-center shadow-sm ${!isMobile ? 'ps-[5%] min-[1600px]:ps-[10%] min-[1920px]:ps-[18%]' : 'pb-10'} `}
        >
            {!isMobile && (
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={locale == 'ar' ? ArBg : EnBg}
                        style={{ objectFit: 'fill' }}
                        fill
                        alt="bg"
                    />
                </div>
            )}
            {isMobile && (
                <div className="relative">
                    <Image
                        src={MobileBG}
                        className="z-10 !h-[95%]"
                        style={{ objectFit: 'fill' }}
                        fill
                        alt="bg"
                    />
                    <Image
                        className="z-50"
                        src={mobileImg}
                        priority={true}
                        alt="mainImage"
                    />
                </div>
            )}
            {isMobile && (
                <Link
                    href={`/${locale}/sign-up`}
                    alt={'Start Trading'}
                    className={'btn btn btn-primary text-[18px] mx-[8%]'}
                >
                    {t('Start Trading')}
                </Link>
            )}
            <div
                className={`sm:basis-2/3 flex items-start justify-center flex-col max-w-[700px] z-[9] py-8 sm:pb-10 sm:pt-12 ${isMobile && 'ps-[5%]'}`}
            >
                <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <div className="flex gap-5 ">
                            <div>
                                <Image
                                    className={`FlipImage h-[180px] w-[80px] min-[1023px]:h-[130px] min-[1023px]:w-[60px] min-[1280px]:h-[160px] min-[1280px]:w-[70px] `}
                                    src={bracket}
                                    alt="bracket"
                                    width={isMobile ? 150 : 60}
                                    height={50}
                                />
                            </div>

                            <div className="w-fit flex flex-col gap-2">
                                <h1 className="text-colors-evest-500 text-5xl xs:text-4xl min-[800px]:text-[40px] min-[1023px]:text-3xl min-[1270px]:text-5xl 2xl:text-[2.7rem] text-bold">
                                    {t('TRADE GLOBAL')}
                                </h1>
                                <h1
                                    className={`text-colors-evest-500 text-bold text-4xl xs:text-5xl min-[1023px]:text-4xl min-[1280px]:text-6xl 2xl:text-6xl ${locale == 'ar' && 'text-medium'}`}
                                >
                                    {t('%0 STOCKS')}
                                </h1>
                                <h2
                                    className={`text-xl xs:text-[2.2rem] min-[1023px]:text-2xl min-[1280px]:text-4xl text-thin font-semibold ${locale === 'ar' && 'arabic-thin pt-2'}`}
                                >
                                    {t('Diversify your portfolio')}
                                </h2>
                                <p className="text-justify pt-2 sm:pt-6 min-[1023px]:pt-0 w-[88%] lg:w-[80%] ">
                                    {' '}
                                    {t('Trade globally')}{' '}
                                </p>
                                {!isMobile && (
                                    <>
                                        {renderButtons({
                                            divClass: 'flex gap-x-6 py-5 w-fit',
                                            btn1Class:
                                                'btn btn-primary min-[360px]:w-[150px] min-[410px]:w-[170px] min-[1280px]:w-[200px] min-[1280px]:text-lg',
                                            btn1Href: `/${locale}/sign-up`,
                                            btn1Text: t('Start Trading'),
                                            btn1Alt: 'sign up',
                                            btn2Class:
                                                'btn border-colors-primary-600 bg-transparent text-colors-primary-500 min-[360px]:w-[150px] min-[410px]:w-[170px] min-[1280px]:w-[200px] min-[1280px]:text-lg',
                                            btn2Href: getLocalizedPath(
                                                `/${locale}/market/SHARES`
                                            ),
                                            btn2Text: t('Explore Markets'),
                                            btn2Alt: 'Stocks',
                                        })}
                                        <div className="flex shadow-xl rounded-b-[30px] py-5 w-fit px-10 gap-5 bg-colors-white">
                                            <div className="flex flex-col gap-3 items-center">
                                                <Link
                                                    href={`https://play.google.com/store/apps/details?id=com.pandats.evest&h=${locale}`}
                                                >
                                                    <Image
                                                        src={playstore}
                                                        width={200}
                                                        height={60}
                                                        alt="playstore"
                                                    />
                                                </Link>
                                                <Link href={apple}>
                                                    <Image
                                                        src={appStore}
                                                        width={200}
                                                        height={60}
                                                        alt="appStore"
                                                    />
                                                </Link>
                                            </div>
                                            <div>
                                                <Image
                                                    src={barcode}
                                                    width={135}
                                                    height={135}
                                                    alt="barcode"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            {!isMobile && (
                <Image
                    className="z-[9] h-full"
                    src={img}
                    priority={true}
                    alt="mainImage"
                />
            )}
            {isMobile && (
                <>
                    <div className="flex  justify-between items-center py-5 px-[8%]">
                        <Link
                            href={`https://play.google.com/store/apps/details?id=com.pandats.evest&h=${locale}`}
                        >
                            <Image
                                src={playstore}
                                className="min-[360px]:w-[150px] min-[410px]:w-[170px] min-[1280px]:w-[200px]"
                                width={200}
                                height={60}
                                alt="playstore"
                            />
                        </Link>
                        <Link href={apple}>
                            <Image
                                src={appStore}
                                className="min-[360px]:w-[150px] min-[410px]:w-[170px] min-[1280px]:w-[200px]"
                                width={200}
                                height={60}
                                alt="appStore"
                            />
                        </Link>
                    </div>
                    <Link
                        href={getLocalizedPath(`/${locale}/market/SHARES`)}
                        alt={'Stocks'}
                        className={
                            'btn border-colors-primary-600 bg-transparent text-colors-primary-500 text-[18px] mx-[8%]'
                        }
                    >
                        {t('Explore Markets')}
                    </Link>
                </>
            )}
        </div>
    );
}
