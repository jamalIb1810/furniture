'use client';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useMobile } from '../../context/MobileContext';
import Buttons from '../components/innerComponents/Buttons';
import FooterLinks from '../components/innerComponents/FooterLinks';
import FooterText from '../components/innerComponents/FooterText';
import Line from './homepage/Line';
import appStore from '/public/images/homepage/applestore.png';
import playstore from '/public/images/homepage/Playstore.png';

import arLogo from '/public/icons/arLogo1.png';
import arLogoMobile from '/public/icons/arLogoMobile1.png';
import enLogo from '/public/icons/enLogo1.png';
import enLogoMobile from '/public/icons/enLogoMobile1.png';
import esLogo from '/public/icons/esLogo1.png';
import esLogoMobile from '/public/icons/esLogoMobile1.png';

export default function FooterV2() {
    const t = useTranslations('FooterV2');
    const locale = useLocale();
    const [twitter, setTwitter] = useState(false);
    const pathname = usePathname();
    const isMobile = useMobile();

    const logo = { en: enLogo, ar: arLogo, es: esLogo };
    const desktopLogo = logo[locale];
    const mobileLogos = {
        en: enLogoMobile,
        ar: arLogoMobile,
        es: esLogoMobile,
    };
    const mobileLogo = mobileLogos[locale];

    const appleLinks = {
        en: `https://apps.apple.com/sa/app/evest-stock-forex-trading/id1560191184?l=en`,
        es: `https://apps.apple.com/sa/app/evest-stock-forex-trading/id1560191184?l=es`,
        ar: `https://apps.apple.com/sa/app/%D8%A7%D9%8A%D9%81%D8%B3%D8%AA-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AB%D9%85%D8%A7%D8%B1-%D9%88%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D8%A7%D9%84%D8%A7%D8%B3%D9%87%D9%85/id1560191184?l=ar`,
    };

    const apple = appleLinks[locale];

    const cards = [
        { img: '/images/footerv2/securess--dark.png', alt: 'mastercard' },
        { img: '/images/footerv2/pci-dss-logo--dark.png', alt: 'pci-dss-logo' },
        { img: '/images/footerv2/pci-dss-dark-logo.png', alt: 'pci-dss' },
        {
            img: '/images/footerv2/mastercardsecurecode--dark.png',
            alt: 'securess',
        },
    ];

    const social = [
        {
            href: 'https://www.threads.net/@evest_official',
            src: '/icons/footer-icons/Threads.svg',
            alt: 'Threads',
        },
        {
            href:
                locale == 'es'
                    ? 'https://www.facebook.com/evestlatam/'
                    : 'https://www.facebook.com/EvestofficialGCC/',
            src: '/icons/footer-icons/fbActive.png',
            alt: 'facebook',
        },
        {
            href:
                locale == 'es'
                    ? 'https://x.com/evestLatam'
                    : 'https://x.com/evestofficial',
            src: twitter
                ? '/icons/footer-icons/TwitterActive.png'
                : '/icons/footer-icons/twitter.png',
            alt: 'twitter',
        },
        {
            href: 'https://www.instagram.com/evest_official/',
            src: '/icons/footer-icons/InstagramActive.png',
            alt: 'instagram',
        },
        {
            href: 'https://www.youtube.com/channel/UCgOHoUCzElFju7HgkuHLzfw',
            src: '/icons/footer-icons/YouTubeActive.png',
            alt: 'YouTube',
        },
        {
            href: 'https://t.me/Evestofficial_ar',
            src: '/icons/footer-icons/telegramActive.png',
            alt: 'Telegram',
        },
    ];

    const visas = [
        { src: '/icons/footer-icons/Wire.svg', alt: 'Wire' },
        { src: '/icons/footer-icons/Visa.svg', alt: 'Visa' },
        { src: '/icons/footer-icons/Visa Electron.svg', alt: 'Electron' },
        { src: '/icons/footer-icons/Skrill.svg', alt: 'Skrill' },
        { src: '/icons/footer-icons/Neteller.svg', alt: 'Neteller' },
        { src: '/icons/footer-icons/Mastercard.svg', alt: 'Mastercard' },
        { src: '/icons/footer-icons/Maestro.svg', alt: 'Masetro' },
        {
            src: '/icons/footer-icons/American Express.svg',
            alt: 'American Express',
        },
    ];

    return (
        !pathname.includes('sign') && (
            <>
                <div className="bg-gradient-to-b from-[#00bbbb0d] to-[#00bbbb1a] py-10 footer flex justify-center items-center flex-col ">
                    <div className=" container flex justify-center items-center flex-col gap-y-5 ">
                        {isMobile ? (
                            <Image
                                src={mobileLogo}
                                width={250}
                                height={100}
                                alt="logo"
                            />
                        ) : (
                            <Image
                                src={desktopLogo}
                                width={250}
                                height={100}
                                alt="logo"
                            />
                        )}

                        <Buttons
                            divClass={
                                'flex justify-center items-center gap-x-2'
                            }
                            btn1Class={''}
                            btn1Href={apple}
                            btn1Text={
                                <Image
                                    src={appStore}
                                    width={111}
                                    alt="appStore"
                                />
                            }
                            btn1Alt={'appStore'}
                            btn1Target={'_blank'}
                            btn2Class={''}
                            btn2Href={`https://play.google.com/store/apps/details?id=com.pandats.evest&h=${locale}`}
                            btn2Text={
                                <Image
                                    src={playstore}
                                    width={111}
                                    alt="playstore"
                                />
                            }
                            btn2Alt={'playstore'}
                            btn2Target={'_blank'}
                        />
                        <div className="flex justify-center items-center gap-x-4 px-1 md:px-0 aspect-square w-[80px]">
                            {cards.map((img, index) => (
                                <Image
                                    key={index}
                                    src={img.img}
                                    width={80}
                                    height={40}
                                    alt={img.alt}
                                />
                            ))}
                        </div>
                        <div className="flex justify-center items-center flex-col">
                            <p className="text-center sm:w-[500px] pb-5">
                                {t('The information')}
                            </p>
                            <div className="flex gap-5 pt-3">
                                {social.map((img, index) => (
                                    <Link
                                        key={index}
                                        href={img.href}
                                        target="_blank"
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            width={24}
                                            height={24}
                                            className={`cursor-pointer ${index == 2 ? 'w-[24px] h-[24px]' : 'grayscale hover:grayscale-0'} `}
                                            onMouseEnter={() =>
                                                index == 2 && setTwitter(true)
                                            }
                                            onMouseLeave={() =>
                                                index == 2 && setTwitter(false)
                                            }
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <FooterLinks />
                </div>
                <Line way="bg-gradient-to-l" />
                <div className="bg-[#022A3A] ">
                    <div className="NavbarFooter  grid grid-cols-4 lg:grid-cols-8 gap-4 align-baseline main-content py-5 justify-between">
                        {visas.map((img, index) => (
                            <Image
                                key={index}
                                className="aspect-[16/9] sm:aspect-[3/2] object-contain"
                                src={img.src}
                                width={55}
                                height={55}
                                alt={img.alt}
                            />
                        ))}
                    </div>
                </div>
                <FooterText />
            </>
        )
    );
}
