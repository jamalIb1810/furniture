'use client';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import styles from '../../../styles/navBarText.module.css';
import { getLocalizedPath } from '../../hooks/localizedPath';
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function NavbarLinksNew() {
    const t = useTranslations('NavbarV2');
    const locale = useLocale();

    const [hideInvesting, setHideInvesting] = useState(true);
    const [hideAccounts, setHideAccounts] = useState(true);
    const [hideMarkets, setHideMarkets] = useState(true);
    const [hideCompany, setHideCompany] = useState(true);
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

    const Investing = [
        {
            name: 'Investing Services',
            links: [
                {
                    href: getLocalizedPath(`/${locale}/services/demo-account`),
                    text: t('Demo Trading Account'),
                },
                {
                    href: getLocalizedPath(
                        `/${locale}/services/zero-commission`
                    ),
                    text: t('0% Stock Trading'),
                },
                {
                    href: getLocalizedPath(`/${locale}/services/eib`),
                    text: t('Investment Baskets'),
                },
                locale !== 'es' && {
                    href: getLocalizedPath(
                        `/${locale}/services/islamic-account`
                    ),
                    text: t('Islamic Trading Account'),
                },
                {
                    href: getLocalizedPath(`/${locale}/services/crypto`),
                    text: t('CryptoCurrencies'),
                },
                {
                    href: getLocalizedPath(`/${locale}/services/commodities`),
                    text: t('commodities'),
                },
                {
                    href: getLocalizedPath(`/${locale}/services/currencies`),
                    text: t('currencies'),
                },
                {
                    href: getLocalizedPath(`/${locale}/services/indices`),
                    text: t('indices'),
                },
            ].filter(Boolean),
        },
        {
            name: 'Investing Features',
            links: [
                locale !== 'es' && {
                    href: getLocalizedPath(`/${locale}/educative/webinars`),
                    text: t('Webinars'),
                },
                {
                    href: `https://academy.evest.com/?lang=${locale}`,
                    text: t('Trading Academy'),
                },
                {
                    href: getLocalizedPath(`/${locale}/products/copy-trade`),
                    text: t('Copy Trade'),
                },
                {
                    href: getLocalizedPath(`/${locale}/products/analytics`),
                    text: t('Evest Analytics'),
                },
                {
                    href: getLocalizedPath(
                        `/${locale}/products/trading-central`
                    ),
                    text: t('Trading Central'),
                },
                {
                    href: getLocalizedPath(`/${locale}/products/tip-ranks`),
                    text: t('TipRanks'),
                },
                {
                    href: getLocalizedPath(
                        `/${locale}/trade/trading-calculator`
                    ),
                    text: t('Trading Calculators'),
                },
            ].filter(Boolean),
        },
        {
            name: 'Investing Plaforms',
            links: [
                {
                    href: getLocalizedPath(`/${locale}/platforms/trading-app`),
                    text: t('Trading App'),
                },
                {
                    href: getLocalizedPath(`/${locale}/platforms/web-trading`),
                    text: t('Web Trading'),
                },
                {
                    href: getLocalizedPath(
                        `/${locale}/platforms/mobile-trading`
                    ),
                    text: t('Mobile Trading'),
                },
                {
                    href: getLocalizedPath(`/${locale}/platforms/meta-trader`),
                    text: t('Meta Trader 5'),
                },
            ],
        },
    ];

    const Accounts = [
        {
            name: t('Accounts'),
            links: [
                {
                    href: getLocalizedPath(`/${locale}/trade/account-types`),
                    text: t('Investment account types'),
                    slogan: t('slogan1'),
                },
                {
                    href: getLocalizedPath(`/${locale}/trade/trading-fees`),
                    text: t('Trading Fees'),
                    slogan: t('slogan2'),
                },
                {
                    href: getLocalizedPath(
                        `/${locale}/trade/deposit-and-withdrawal`
                    ),
                    text: t('Deposit & Withdrawal'),
                    slogan: t('slogan3'),
                },
                {
                    href: getLocalizedPath(`/${locale}/trade/account-security`),
                    text: t('Account security'),
                    slogan: t('slogan4'),
                },
            ],
        },
        {
            name: t('Accounts'),
            links: [
                {
                    href: getLocalizedPath(
                        `/${locale}/evest/regulatory-authorization`
                    ),
                    text: t('Regulatory Authorisation'),
                    slogan: t('slogan5'),
                },
                {
                    href: getLocalizedPath(
                        `/${locale}/evest/Documents-Policies`
                    ),
                    text: t('Documents & Policies'),
                    slogan: t('slogan6'),
                },
                {
                    href: getLocalizedPath(`/${locale}/services/promotion`),
                    text: t('Promotions'),
                    slogan: t('slogan7'),
                },
            ],
        },
    ];

    const AllMarkets = [
        {
            href: getLocalizedPath(`/${locale}/market/all-markets`),
            text: t('All Markets'),
            slogan: t('slogan8'),
        },
        {
            href: getLocalizedPath(`/${locale}/news/trading-blog`),
            text: t('Trading Blog'),
            slogan: t('slogan9'),
        },
    ];

    const Markets = [
        {
            name: t('Markets'),
            links: [
                {
                    href: getLocalizedPath(`/${locale}/market/SHARES`),
                    text: t('Stocks'),
                },
                {
                    href: getLocalizedPath(`/${locale}/market/FOREX`),
                    text: t('Currencies'),
                },
                {
                    href: getLocalizedPath(`/${locale}/market/EIB`),
                    text: t('Investment Baskets'),
                },
                {
                    href: getLocalizedPath(`/${locale}/market/CRYPTO`),
                    text: t('CryptoCurrencies'),
                },
                {
                    href: getLocalizedPath(`/${locale}/market/COMMODITIES`),
                    text: t('Commodities'),
                },
                {
                    href: getLocalizedPath(`/${locale}/market/INDICES`),
                    text: t('Indices'),
                },
                {
                    href: getLocalizedPath(`/${locale}/market/FUTURE INDICES`),
                    text: t('Future Indices'),
                },
            ],
        },
        {
            name: t('news'),
            links: [
                {
                    href: getLocalizedPath(`/${locale}/news/trading-news`),
                    text: t('Trading News'),
                },
                {
                    href: getLocalizedPath(`/${locale}/news/gold-news`),
                    text: t('Gold News'),
                },
                {
                    href: getLocalizedPath(`/${locale}/news/oil-news`),
                    text: t('Oil News'),
                },
                {
                    href: getLocalizedPath(`/${locale}/news/stocks-news`),
                    text: t('Stock News'),
                },
                {
                    href: getLocalizedPath(
                        `/${locale}/news/cryptocurrency-news`
                    ),
                    text: t('Crypto News'),
                },
                {
                    href: getLocalizedPath(`/${locale}/news/currencies-news`),
                    text: t('Currencies News'),
                },
            ],
        },
    ];

    const Company = [
        {
            name: 'Company',
            links: [
                {
                    href: getLocalizedPath(`/${locale}/evest/evest`),
                    text: t('Evest'),
                },
                {
                    href: getLocalizedPath(`/${locale}/evest/ceo`),
                    text: t('Ali Hasan CEO'),
                },
                locale !== 'es' && {
                    href: getLocalizedPath(`/${locale}/evest/evest-ambassador`),
                    text: t('Mohanad Alwadiya Ambassador'),
                },
                {
                    href: getLocalizedPath(`/${locale}/evest/in-the-press`),
                    text: t('In the press'),
                },
                locale !== 'es' && {
                    href: getLocalizedPath(`/${locale}/evest/entertainment`),
                    text: t('Entertainment'),
                },
                locale !== 'es' && {
                    href: getLocalizedPath(`/${locale}/evest/evest-talk`),
                    text: t('Evest Talk'),
                },
            ].filter(Boolean),
        },
        {
            name: 'EvestTitle',
            links: [
                {
                    href: getLocalizedPath(
                        `https://evestpartners.com/${locale}/`
                    ),
                    text: t('Become a partner'),
                    target: '_balnk',
                },
                {
                    href: getLocalizedPath(`/${locale}/evest/careers`),
                    text: t('Career with evest'),
                },
                {
                    href: getLocalizedPath(`/${locale}/evest/contact-us`),
                    text: t('Contact us'),
                },
                { href: authLink, text: t('Help Center') },
                {
                    href: getLocalizedPath(`/${locale}/evest/complaints`),
                    text: t('Complaints'),
                },
            ],
        },
    ];

    return (
        <>
            <li
                onMouseEnter={() => setHideInvesting(false)}
                onMouseLeave={() => setHideInvesting(true)}
                className={`group px-4 py-2`}
            >
                <p
                    className={
                        styles.navbarSubText +
                        ' hover:text-colors-evestGreen-700 cursor-pointer'
                    }
                >
                    {t('Investing')}
                </p>
                <div
                    className={`absolute top-12 left-0 w-full transition  ${hideInvesting ? 'invisible translate-y-0 opacity-0 transform' : 'translate-y-5 opacity-100 visible transform'}  duration-500 ease-in-out  z-50 min-w-[560px] `}
                >
                    <div className="relative top-6 p-6 px-20 bg-colors-white rounded-xl shadow-md w-full flex justify-center items-center">
                        <div className="w-10 h-10 bg-colors-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm shadow-"></div>
                        <div className="relative z-10 w-fit ">
                            <div className="grid grid-cols-3 gap-6">
                                {Investing.map((category, index) => (
                                    <div key={index} className="relative z-10">
                                        <p
                                            className={
                                                styles.navbarText +
                                                ' uppercase tracking-wider text-colors-evest-500 font-medium text-bold'
                                            }
                                        >
                                            {t(category.name)}
                                        </p>
                                        <ul className="mt-3 text-[15px]">
                                            {category.links.map((link, i) => (
                                                <li key={i}>
                                                    <Link
                                                        href={link.href}
                                                        onClick={() =>
                                                            setHideInvesting(
                                                                true
                                                            )
                                                        }
                                                        className={
                                                            styles.navbarSubText +
                                                            ' bg-transparent  bg-clip-text text-transparent bg-gradient-to-br from-colors-evest-400 to-colors-evest-500 hover:from-colors-evestGreen-800 hover:to-colors-evestGreen-600 hover:via-colors-evestGreen-400 py-1 block'
                                                        }
                                                    >
                                                        {link.text}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li
                onMouseEnter={() => setHideAccounts(false)}
                onMouseLeave={() => setHideAccounts(true)}
                className="group px-4 py-2"
            >
                <p
                    className={
                        styles.navbarSubText +
                        ' hover:text-colors-evestGreen-700 cursor-pointer'
                    }
                >
                    {t('Accounts')}
                </p>
                <div
                    className={`absolute top-12 left-0 w-full transition ${hideAccounts ? 'invisible translate-y-0 opacity-0 transform' : 'translate-y-5 opacity-100 visible transform'}  duration-500 ease-in-out  z-50 min-w-[560px] `}
                >
                    <div className="relative top-6 p-6 px-20 bg-colors-white rounded-xl shadow-md w-full flex justify-center items-center">
                        <div className="w-10 h-10 bg-colors-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                        <div className="relative z-10 w-[600px] ">
                            <div className="grid grid-cols-2 gap-6">
                                {Accounts.map((category, index) => (
                                    <div key={index}>
                                        <p
                                            className={
                                                styles.navbarText +
                                                ` uppercase tracking-wider ${index == 0 ? 'text-colors-evest-500' : 'text-transparent'}  font-medium text-bold`
                                            }
                                        >
                                            {category.name}
                                        </p>
                                        <ul className="mt-3 text-[15px]">
                                            {category.links.map((link, i) => (
                                                <li key={i}>
                                                    <Link
                                                        href={link.href}
                                                        onClick={() =>
                                                            setHideAccounts(
                                                                true
                                                            )
                                                        }
                                                        className={
                                                            styles.navbarSubText +
                                                            ' block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-colors-evestGreen-100/20 hover:to-colors-primary-200/30 transition ease-in-out duration-300 text-colors-gray-800  hover:text-colors-evest-600'
                                                        }
                                                    >
                                                        {link.text}
                                                        <p className="text-colors-gray-500  font-normal text-[12px]">
                                                            {link.slogan}
                                                        </p>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li
                onMouseEnter={() => setHideMarkets(false)}
                onMouseLeave={() => setHideMarkets(true)}
                className="group px-4 py-2"
            >
                <button
                    className={
                        styles.navbarSubText +
                        ' hover:text-colors-evestGreen-700 cursor-pointer'
                    }
                >
                    {t('Markets')}
                </button>
                <div
                    className={`absolute top-12 left-0 w-full transition ${hideMarkets ? 'invisible translate-y-0 opacity-0 transform' : 'translate-y-5 opacity-100 visible transform'}  duration-500 ease-in-out  z-50 min-w-[560px] `}
                >
                    <div className="relative top-6 p-6 px-20 bg-colors-white rounded-xl shadow-md w-full flex justify-center items-center">
                        <div className="w-10 h-10 bg-colors-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm"></div>
                        <div className="relative z-10 w-[600px]">
                            <ul className="mt-3 text-[15px] grid grid-cols-2 gap-6">
                                {AllMarkets.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setHideMarkets(true)}
                                            className={
                                                styles.navbarSubText +
                                                ' block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-colors-evestGreen-100/20 hover:to-colors-primary-200/30 transition ease-in-out duration-300 text-colors-gray-800  hover:text-colors-evest-600'
                                            }
                                        >
                                            {link.text}
                                            <p className="text-colors-gray-500 text-[12px]">
                                                {link.slogan}
                                            </p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 grid grid-cols-2 gap-6">
                                {Markets.map((category, index) => (
                                    <div key={index}>
                                        <p
                                            className={
                                                styles.navbarText +
                                                ' uppercase tracking-wider text-colors-evest-500 font-medium text-bold'
                                            }
                                        >
                                            {category.name}
                                        </p>
                                        <ul className="mt-3 text-[15px]">
                                            {category.links.map((link, i) => (
                                                <li key={i}>
                                                    <Link
                                                        href={link.href}
                                                        onClick={() =>
                                                            setHideMarkets(true)
                                                        }
                                                        className={
                                                            styles.navbarSubText +
                                                            ' bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-colors-evest-400 to-colors-evest-500 hover:from-colors-evestGreen-800 hover:to-colors-evestGreen-600 hover:via-colors-evestGreen-400 py-1 block'
                                                        }
                                                    >
                                                        {link.text}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-1 gap-6 w-full">
                                <Link
                                    href={getLocalizedPath(
                                        `/${locale}/trade/trading-hours`
                                    )}
                                    onClick={() => setHideMarkets(true)}
                                    className={
                                        styles.navbarSubText +
                                        ' block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-colors-evestGreen-100/20 hover:to-colors-primary-200/30 transition ease-in-out duration-300 text-colors-gray-800  hover:text-colors-evest-600'
                                    }
                                >
                                    {t('Market Trading Hours')}
                                    <p className="text-colors-gray-500 text-sm w-full">
                                        {t('slogan11')}
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li
                onMouseEnter={() => setHideCompany(false)}
                onMouseLeave={() => setHideCompany(true)}
                className="group px-4 py-2"
            >
                <button
                    className={
                        styles.navbarSubText +
                        ' hover:text-colors-evestGreen-700 cursor-pointer'
                    }
                >
                    {t('Company')}
                </button>
                <div
                    className={`absolute top-12 left-0 w-full transition ${hideCompany ? 'invisible translate-y-0 opacity-0 transform' : 'translate-y-5 opacity-100 visible transform'}  duration-500 ease-in-out  z-50 min-w-[560px] `}
                >
                    <div className="relative top-6 p-6 px-20 bg-colors-white rounded-xl shadow-md w-full flex justify-center items-center">
                        <div className="w-10 h-10 bg-colors-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm"></div>
                        <div className="relative z-10 w-[600px]">
                            <div className="grid grid-cols-2 gap-6">
                                {Company.map((category, index) => (
                                    <div key={index}>
                                        <p
                                            className={
                                                styles.navbarText +
                                                ' uppercase tracking-wider text-colors-evest-500 font-medium text-bold'
                                            }
                                        >
                                            {t(category.name)}
                                        </p>
                                        <ul className="mt-3 text-[15px] space-y-1">
                                            {category.links.map((link, i) => (
                                                <li key={i}>
                                                    <Link
                                                        href={link.href}
                                                        onClick={() =>
                                                            setHideCompany(true)
                                                        }
                                                        target={
                                                            link.target
                                                                ? link.target
                                                                : ''
                                                        }
                                                        className={
                                                            styles.navbarSubText +
                                                            ' bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-colors-evest-400 to-colors-evest-500 hover:from-colors-evestGreen-800 hover:to-colors-evestGreen-600 hover:via-colors-evestGreen-400 py-1 block'
                                                        }
                                                    >
                                                        {link.text}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
}
