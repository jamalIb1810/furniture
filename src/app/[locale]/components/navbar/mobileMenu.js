'use client';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import HandleChangeLang from '../../hooks/handleChangeLang';
import { getLocalizedPath } from '../../hooks/localizedPath';
import { arPaths, enPaths, esPaths } from '../../utils/paths';
import arLangFlag from '/public/icons/flags/ar.png';
import enLangFlag from '/public/icons/flags/en.png';
import esLangFlag from '/public/icons/flags/es.png';
import HelpCenter from './helpCenter';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function MobileMenu({
    isOpen,
    locale,
    t2,
    t,
    handleMobileClick,
}) {
    const router = useRouter();
    const fullPathname = usePathname();
    const flags = { en: enLangFlag, ar: arLangFlag, es: esLangFlag };
    const flag = flags[locale];

    const [authLink, setAuthLink] = useState('https://support.evest.com');
    let userData = null; // Initialize userData as null
    if (typeof localStorage !== 'undefined') {
        // Check if localStorage is defined
        userData = JSON.parse(localStorage.getItem('userData'));
    }
    const { data, error } = useSWR(
        userData
            ? `/api/goToHelpDesk?fullName=${userData.fullName}&email=${userData.email}`
            : null,
        fetcher
    );

    useEffect(() => {
        if (data && data.url) {
            setAuthLink(data.url); // Update the auth link when data is fetched
        } else if (error) {
            setAuthLink('https://support.evest.com'); // Fallback URL on error
        }
    }, [data, error]);

    return (
        <AnimatePresence>
            {isOpen && (
                <MotionConfig
                    transition={{
                        type: 'spring',
                        bounce: 0.1,
                    }}
                >
                    <motion.div
                        key="mobile-nav"
                        variants={{
                            hide: {
                                x: '-100%',
                                transition: {
                                    type: 'spring',
                                    duration: 0.3,
                                },
                            },
                            show: {
                                x: '0%',
                                transition: {
                                    type: 'spring',
                                    duration: 0.7,
                                },
                            },
                        }}
                        initial="hide"
                        animate="show"
                        exit="hide"
                        className="w-full h-full flex flex-col justify-start items-start z-[999] fixed md:w-full lg:w-full overflow-y-scroll shadow-2xl pb-[50px] bg-[#F2F4F5]"
                    >
                        <div className="menu">
                            <ul className="menu menu-vertical dropdown-content flex justify-center items-start">
                                <li className="w-[90vw]">
                                    <Link
                                        href={`https://mobile.evest.com/?lang=${locale}#/login`}
                                        target="_blank"
                                    >
                                        <p className="focus:text-colors-primary-500 text-[16px]">
                                            {t2('Trade')}{' '}
                                        </p>
                                    </Link>
                                </li>
                                <div className="divider m-0 px-3"></div>
                                <li className="w-[90vw]">
                                    <details>
                                        <summary className="focus:text-colors-primary-500 text-[16px]">
                                            {t('Investing')}
                                        </summary>
                                        <ul className="p-2">
                                            <li>
                                                <details>
                                                    <summary className="w-2/3 newsMobileMenu">
                                                        {t(
                                                            'Investing Services'
                                                        )}
                                                    </summary>
                                                    <ul className="p-2">
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/services/demo-account`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t(
                                                                    'Demo Trading Account'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/services/zero-commission`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    '0% Stock Trading'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/services/eib`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'Investment Baskets'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        {locale != 'es' && (
                                                            <li>
                                                                <Link
                                                                    href={getLocalizedPath(
                                                                        `/${locale}/services/islamic-account`
                                                                    )}
                                                                    onClick={
                                                                        handleMobileClick
                                                                    }
                                                                >
                                                                    {t2(
                                                                        'Islamic Trading Account'
                                                                    )}
                                                                </Link>
                                                            </li>
                                                        )}
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/services/crypto`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'CryptoCurrencies'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/services/commodities`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'commodities'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/services/currencies`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'currencies'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/services/indices`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2('indices')}
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </details>
                                            </li>
                                            <li>
                                                <details>
                                                    <summary className="w-2/3 newsMobileMenu ">
                                                        {t(
                                                            'Investing Features'
                                                        )}
                                                    </summary>
                                                    <ul className="p-2">
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/educative/webinars`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {' '}
                                                                {t('Webinars')}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={`https://academy.evest.com/?lang=${locale}`}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'Trading Academy'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/products/copy-trade`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'Copy Trade'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/products/analytics`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'Evest Analytics'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/products/trading-central`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'Trading Central'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/products/tip-ranks`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2('TipRanks')}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/trade/trading-calculator`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t(
                                                                    'Trading Calculators'
                                                                )}
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </details>
                                            </li>
                                            <li>
                                                <details>
                                                    <summary className="w-2/3 newsMobileMenu ">
                                                        {t(
                                                            'Investing Plaforms'
                                                        )}
                                                    </summary>
                                                    <ul className="p-2">
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/platforms/trading-app`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'Trading App'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/platforms/web-trading`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'Web Trading'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/platforms/mobile-trading`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'Mobile Trading'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/platforms/meta-trader`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'Meta Trader 5'
                                                                )}
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </details>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <div className="divider m-0 px-3"></div>
                                <li className="w-[90vw]">
                                    <details>
                                        <summary className="focus:text-colors-primary-500 text-[16px]">
                                            {t('Accounts')}
                                        </summary>
                                        <ul className="p-2">
                                            <li>
                                                <Link
                                                    href={getLocalizedPath(
                                                        `/${locale}/trade/account-types`
                                                    )}
                                                    onClick={handleMobileClick}
                                                >
                                                    {t(
                                                        'Investment account types'
                                                    )}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={getLocalizedPath(
                                                        `/${locale}/trade/trading-fees`
                                                    )}
                                                    onClick={handleMobileClick}
                                                >
                                                    {t('Trading Fees')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={getLocalizedPath(
                                                        `/${locale}/trade/deposit-and-withdrawal`
                                                    )}
                                                    onClick={handleMobileClick}
                                                >
                                                    {t('Deposit & Withdrawal')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={getLocalizedPath(
                                                        `/${locale}/trade/account-security`
                                                    )}
                                                    onClick={handleMobileClick}
                                                >
                                                    {t('Account security')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={getLocalizedPath(
                                                        `/${locale}/evest/regulatory-authorization`
                                                    )}
                                                    onClick={handleMobileClick}
                                                >
                                                    {t(
                                                        'Regulatory Authorisation'
                                                    )}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={getLocalizedPath(
                                                        `/${locale}/evest/Documents-Policies`
                                                    )}
                                                    onClick={handleMobileClick}
                                                >
                                                    {t('Documents & Policies')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={getLocalizedPath(
                                                        `/${locale}/evest/Documents-Policies`
                                                    )}
                                                    onClick={handleMobileClick}
                                                >
                                                    {t('Documents & Policies')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={getLocalizedPath(
                                                        `/${locale}/services/promotion`
                                                    )}
                                                    onClick={handleMobileClick}
                                                >
                                                    {t('Promotions')}
                                                </Link>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <div className="divider m-0 px-3"></div>
                                <li className="w-[90vw]">
                                    <details>
                                        <summary className="focus:text-colors-primary-500 text-[16px]">
                                            {t('Markets')}
                                        </summary>
                                        <ul className="p-2">
                                            <li>
                                                <Link
                                                    href={getLocalizedPath(
                                                        `/${locale}/market/all-markets`
                                                    )}
                                                    onClick={handleMobileClick}
                                                >
                                                    {t2('All Markets')}
                                                </Link>
                                            </li>
                                            <li>
                                                <details>
                                                    <summary className="w-2/3 newsMobileMenu">
                                                        {t('Markets')}
                                                    </summary>
                                                    <ul className="p-2">
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/market/SHARES`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2('Stocks')}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/market/FOREX`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'Currencies'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/market/EIB`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'Investment Baskets'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/market/CRYPTO`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'CryptoCurrencies'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/market/COMMODITIES`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'Commodities'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/market/INDICES`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2('Indices')}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/market/FUTURE INDICES`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'Future Indices'
                                                                )}
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </details>
                                            </li>
                                            <li>
                                                <Link
                                                    href={getLocalizedPath(
                                                        `/${locale}/news/trading-blog`
                                                    )}
                                                    onClick={handleMobileClick}
                                                >
                                                    {t2('Trading Blog')}
                                                </Link>
                                            </li>
                                            <li>
                                                <details>
                                                    <summary className="w-2/3 newsMobileMenu">
                                                        {t('news')}
                                                    </summary>
                                                    <ul className="p-2">
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/news/trading-news`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'Trading News'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/news/gold-news`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'Gold News'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/news/oil-news`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2('Oil News')}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/news/stocks-news`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'Stock News'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/news/cryptocurrency-news`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'Crypto News'
                                                                )}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                href={getLocalizedPath(
                                                                    `/${locale}/news/currencies-news`
                                                                )}
                                                                onClick={
                                                                    handleMobileClick
                                                                }
                                                            >
                                                                {t2(
                                                                    'Currencies News'
                                                                )}
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </details>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <div className="divider m-0 px-3"></div>
                                <li className="w-[90vw]">
                                    <details>
                                        <summary className="focus:text-colors-primary-500 text-[16px]">
                                            {t('Company')}
                                        </summary>
                                        <ul className="p-2">
                                            <li>
                                                <Link
                                                    href={getLocalizedPath(
                                                        `/${locale}/evest/evest`
                                                    )}
                                                    onClick={handleMobileClick}
                                                >
                                                    {t('Evest')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={getLocalizedPath(
                                                        `/${locale}/evest/ceo`
                                                    )}
                                                    onClick={handleMobileClick}
                                                >
                                                    {t('Ali Hasan CEO')}
                                                </Link>
                                            </li>
                                            {locale != 'es' && (
                                                <li>
                                                    <Link
                                                        href={getLocalizedPath(
                                                            `/${locale}/evest/evest-ambassador`
                                                        )}
                                                        onClick={
                                                            handleMobileClick
                                                        }
                                                    >
                                                        {t(
                                                            'Mohanad Alwadiya Ambassador'
                                                        )}
                                                    </Link>
                                                </li>
                                            )}
                                            <li>
                                                <Link
                                                    href={getLocalizedPath(
                                                        `/${locale}/evest/in-the-press`
                                                    )}
                                                    onClick={handleMobileClick}
                                                >
                                                    {t('In the press')}
                                                </Link>
                                            </li>
                                            {locale != 'es' && (
                                                <li>
                                                    <Link
                                                        href={getLocalizedPath(
                                                            `/${locale}/evest/entertainment`
                                                        )}
                                                        onClick={
                                                            handleMobileClick
                                                        }
                                                    >
                                                        {t('Entertainment')}
                                                    </Link>
                                                </li>
                                            )}
                                            {locale != 'es' && (
                                                <li>
                                                    <Link
                                                        href={getLocalizedPath(
                                                            `/${locale}/evest/evest-talk`
                                                        )}
                                                        onClick={
                                                            handleMobileClick
                                                        }
                                                    >
                                                        {t('Evest Talk')}
                                                    </Link>
                                                </li>
                                            )}
                                            <li>
                                                <Link
                                                    href={getLocalizedPath(
                                                        `https://evestpartners.com/${locale}/`
                                                    )}
                                                    target="_blank"
                                                    onClick={handleMobileClick}
                                                >
                                                    {t('Become a partner')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={getLocalizedPath(
                                                        `/${locale}/evest/careers`
                                                    )}
                                                    onClick={handleMobileClick}
                                                >
                                                    {t('Career with evest')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={getLocalizedPath(
                                                        `/${locale}/evest/contact-us`
                                                    )}
                                                    onClick={handleMobileClick}
                                                >
                                                    {t('Contact us')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={authLink}
                                                    onClick={handleMobileClick}
                                                >
                                                    {t('Help Center')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={getLocalizedPath(
                                                        `/${locale}/evest/complaints`
                                                    )}
                                                    onClick={handleMobileClick}
                                                >
                                                    {t('Complaints')}
                                                </Link>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <div className="divider m-0 px-3"></div>
                            </ul>
                        </div>
                        <div className="submenu">
                            <ul className="menu menu-vertical flex justify-center items-start px-4 gap-1 gap-y-3">
                                <li>
                                    <Link
                                        href={`https://mobile.evest.com/?lang=${locale}#/login`}
                                        target="_blank"
                                        onClick={handleMobileClick}
                                    >
                                        <Image
                                            src={'/icons/user.webp'}
                                            alt="help"
                                            width={24}
                                            height={24}
                                        />
                                        <h6>{t2('SignIn')}</h6>
                                    </Link>
                                </li>
                                <li className="px-3">
                                    <Link
                                        href={`https://mobile.evest.com/?lang=${locale}#/signup`}
                                        target="_blank"
                                        className=" bg-colors-evestGreen-600 text-colors-white hover:bg-colors-evest-500 hover:text-colors-white  flex justify-center items-center content-center transition ease-in-out rounded-none rounded-tl-md rounded-bl-md rounded-br-md  hover:scale-110 duration-300 uppercase"
                                    >
                                        {' '}
                                        {t('Get Started')}
                                    </Link>
                                </li>
                                <li className="ps-[8px]">
                                    <HelpCenter />
                                </li>
                                <li className="flex">
                                    <details>
                                        <summary>
                                            <Image
                                                src={flag}
                                                width={20}
                                                height={20}
                                                alt="langs"
                                            />
                                        </summary>
                                        <ul className="p-2">
                                            <li className="notArabic">
                                                <p
                                                    className="text-start"
                                                    onClick={() =>
                                                        HandleChangeLang(
                                                            'en',
                                                            locale,
                                                            router,
                                                            fullPathname,
                                                            arPaths,
                                                            esPaths,
                                                            enPaths
                                                        )
                                                    }
                                                >
                                                    <Image
                                                        src={enLangFlag}
                                                        width={20}
                                                        height={20}
                                                        alt="enLangFlag"
                                                    />
                                                    ENGLISH
                                                </p>
                                            </li>
                                            <li className="Arabic">
                                                <p
                                                    className="text-start"
                                                    onClick={() =>
                                                        HandleChangeLang(
                                                            'ar',
                                                            locale,
                                                            router,
                                                            fullPathname,
                                                            arPaths,
                                                            esPaths,
                                                            enPaths
                                                        )
                                                    }
                                                >
                                                    <Image
                                                        src={arLangFlag}
                                                        width={20}
                                                        height={20}
                                                        alt="arLangFlag"
                                                    />
                                                    العربيه
                                                </p>
                                            </li>
                                            <li className="notArabic">
                                                <p
                                                    className="text-start"
                                                    onClick={() =>
                                                        HandleChangeLang(
                                                            'es',
                                                            locale,
                                                            router,
                                                            fullPathname,
                                                            arPaths,
                                                            esPaths,
                                                            enPaths
                                                        )
                                                    }
                                                >
                                                    <Image
                                                        src={esLangFlag}
                                                        width={20}
                                                        height={20}
                                                        alt="esLangFlag"
                                                    />
                                                    Español
                                                </p>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </div>
                        <div className="menu w-full flex flex-row justify-center items-center gap-x-5">
                            <Link
                                href="https://evest.onelink.me/o6qP/63b4f023"
                                target="_blank"
                            >
                                <Image
                                    src={'/icons/AppleStore.webp'}
                                    width={150}
                                    height={150}
                                    alt="appleStore"
                                />
                            </Link>
                            <Link
                                href="https://evest.onelink.me/o6qP/63b4f023"
                                target="_blank"
                            >
                                <Image
                                    src={'/icons/googleplay.webp'}
                                    width={150}
                                    height={150}
                                    alt="googlePlay"
                                />
                            </Link>
                        </div>
                    </motion.div>
                </MotionConfig>
            )}
        </AnimatePresence>
    );
}
