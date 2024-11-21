'use client';
import { motion, useCycle } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { FaSistrix } from 'react-icons/fa6';
import { HiMiniUser, HiMiniUserPlus } from 'react-icons/hi2';
import useSWR from 'swr';
import { useDebounce } from 'use-debounce';
import { useMobile } from '../../context/MobileContext';
import MobileMenu from '../components/navbar/mobileMenu';
import SearchInput from '../components/navbar/SearchInput';
import HandleChangeLang from '../hooks/handleChangeLang';
import { getLocalizedPath } from '../hooks/localizedPath';
import { arPaths, enPaths, esPaths } from '../utils/paths';
import NavbarLinks from './innerComponents/NavbarLinks';
import arLangFlag from '/public/icons/flags/ar.png';
import enLangFlag from '/public/icons/flags/en.png';
import esLangFlag from '/public/icons/flags/es.png';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

import arLogo from '/public/icons/arLogo1.png';
import arLogoMobile from '/public/icons/arLogoMobile1.png';
import enLogo from '/public/icons/enLogo1.png';
import enLogoMobile from '/public/icons/enLogoMobile1.png';
import esLogo from '/public/icons/esLogo1.png';
import esLogoMobile from '/public/icons/esLogoMobile1.png';

import styles from '../../styles/navBarText.module.css';
import HelpCenter from './navbar/helpCenter';

export default function ModernNavBar() {
    const t = useTranslations('NavbarV2');
    const t2 = useTranslations('Navbar');
    const t1 = useTranslations('SearchBar');
    let searchBar = t1('What are you looking for?');
    const isMobile = useMobile();
    const [search, setSearch] = useState('');
    const [query] = useDebounce(search, 500);
    const locale = useLocale();
    const [isOpen, setIsOpen] = useCycle(false, true);
    const [searchOpen, setSearchOpen] = useCycle(false, true);
    const fullPathname = usePathname();
    const [loggedin, setLoggedin] = useState(false);
    const [userData, setUserData] = useState(null);
    const flags = { en: enLangFlag, ar: arLangFlag, es: esLangFlag };
    const flag = flags[locale];
    const logo = { en: enLogo, ar: arLogo, es: esLogo };
    const desktopLogo = logo[locale];
    const mobileLogos = {
        en: enLogoMobile,
        ar: arLogoMobile,
        es: esLogoMobile,
    };
    const mobileLogo = mobileLogos[locale];

    // Check for expiration on application load
    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if (userData) {
            const parsedData = JSON.parse(userData);
            const currentTime = Date.now();

            if (currentTime > parsedData.expires) {
                localStorage.removeItem('userData');
                localStorage.removeItem('panda-forex__token');
                localStorage.removeItem('loggedin');
            } else {
                setUserData(parsedData);
                const token = localStorage.getItem('panda-forex__token');
                setLoggedin(!!token);
            }
        }
    }, []);

    let language = locale == 'en' ? 'En' : locale == 'ar' ? 'ع' : 'Es';
    const handleMobileClick = () => {
        setIsOpen(false);
    };

    const closeSearchBar = () => {
        if (searchOpen) {
            setSearchOpen();
        }
        setSearch('');
    };

    const { data, isLoading } = useSWR(
        `/api/search?toLook=${query}&lang=${locale}`,
        fetcher
    );
    const router = useRouter();

    const handleClick = () => {
        const elem = document.activeElement;
        if (elem) {
            elem?.blur();
        }
    };

    const handleLogOut = () => {
        localStorage.removeItem('userData');
        localStorage.removeItem('panda-forex__token');
        localStorage.removeItem('loggedin');
        setLoggedin(false);
        setUserData(null);
    };

    return (
        <>
            <div
                className={
                    styles.navbar +
                    ' navbar opacity-95 py-6 h-24 flex justify-between bg-colors-white w-full sticky top-0 z-[999] shadow-[0_0_10px_0_rgb(211,211,211)]'
                }
            >
                <div
                    className={
                        styles.NavbarFooter +
                        ' ' +
                        styles.heightAdjust +
                        ' flex justify-between'
                    }
                >
                    <Link
                        href={`/${locale}`}
                        className="font-bold text-colors-primary-700 text-xl justify-start"
                    >
                        {isMobile ? (
                            <Image
                                src={mobileLogo}
                                width={200}
                                height={170}
                                alt="logo"
                                priority={true}
                                className={`w-[250px] min-[1920px]:w-[300px]`}
                            />
                        ) : (
                            <Image
                                src={desktopLogo}
                                width={200}
                                height={170}
                                alt="logo"
                                priority={true}
                                className={`w-[250px] min-[1920px]:w-[300px]`}
                            />
                        )}
                    </Link>
                    {isMobile ? (
                        <div className="mobileNavBar flex justify-around items-center gap-4">
                            {isOpen ? (
                                ''
                            ) : (
                                <div className="bg-primary bg-opacity-25 flex h-[36px] w-[36px] justify-center items-center rounded-md lg:hidden text-colors-primary-500 hover:text-colors-white hover:bg-[#058080]">
                                    <motion.div
                                        animate={searchOpen ? 'open' : 'closed'}
                                        onClick={() => setSearchOpen()}
                                        role="button"
                                        title="search bar"
                                        aria-label="search bar"
                                        id="searchBar"
                                    >
                                        <FaSistrix size={20} />
                                    </motion.div>
                                </div>
                            )}
                            <motion.button
                                className="flex flex-col space-y-1 bg-primary bg-opacity-25 w-10 h-10 justify-center items-center rounded-md 2xl:hidden"
                                animate={isOpen ? 'open' : 'closed'}
                                onClick={() => setIsOpen()}
                                role="button"
                                title="menu"
                                aria-label="menu"
                                id="menu"
                            >
                                <motion.span
                                    variants={{
                                        open: { rotate: 45, y: 8 },
                                        closed: { rotate: 0 },
                                    }}
                                    className="w-5 h-1 bg-primary block"
                                ></motion.span>
                                <motion.span
                                    variants={{
                                        open: { opacity: 0 },
                                        closed: { opacity: 1 },
                                    }}
                                    className="w-5 h-1 bg-primary block"
                                ></motion.span>
                                <motion.span
                                    variants={{
                                        open: { rotate: -45, y: -8 },
                                        closed: { rotate: 0 },
                                    }}
                                    className="w-5 h-1 bg-primary block"
                                ></motion.span>
                            </motion.button>
                        </div>
                    ) : (
                        <>
                            <nav className="desktopNavbar flex justify-center items-center space-x-10">
                                <ul className="flex items-center justify-center ">
                                    <li className="group px-4 py-2">
                                        <Link
                                            onClick={() => {
                                                window.localStorage.setItem(
                                                    'panda-forex__socialSwitchState',
                                                    'trading-platform'
                                                );
                                            }}
                                            href={getLocalizedPath(
                                                `/${locale}/trade-room`
                                            )}
                                            className={
                                                'hover:text-colors-evestGreen-700 cursor-pointer text-[1rem] ' +
                                                styles.navbarSubText
                                            }
                                        >
                                            {t('Trade')}
                                        </Link>
                                    </li>

                                    <NavbarLinks />

                                    <li>
                                        <div className="bg-primary bg-opacity-25 flex h-[36px] w-[36px] justify-center items-center rounded-[10px] text-colors-primary-500 hover:text-colors-white hover:bg-[#058080] hover:font-bold">
                                            <motion.div
                                                animate={
                                                    searchOpen
                                                        ? 'open'
                                                        : 'closed'
                                                }
                                                onClick={() => setSearchOpen()}
                                                role="button"
                                                title="search bar"
                                                aria-label="search bar"
                                                id="search bar"
                                                className="searchBtn"
                                            >
                                                <FaSistrix size={20} />
                                            </motion.div>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <nav className="desktopNavbar flex justify-end">
                                <ul className="menu menu-horizontal flex justify-center px-0 items-center hover:bg-transparent">
                                    <li>
                                        <HelpCenter />
                                    </li>
                                    <li className="dropdownLi">
                                        <div className="dropdown dropdown-bottom dropdown-hover hover:bg-transparent p-0">
                                            <label className="m-1 flex justify-center items-center gap-1 text-bold-hover hover:text-[#058080] text">
                                                <Image
                                                    src={flag}
                                                    width={25}
                                                    height={25}
                                                    alt="Language Flag"
                                                />
                                            </label>
                                            <ul className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box h-[130px] w-[120px] justify-between py-[10px] m-0">
                                                <li className="notArabic ">
                                                    <p
                                                        className="hover:bg-transparent hover:text-[#058080] text-bold-hover px-0 text-start"
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
                                                            alt="engLang"
                                                        />
                                                        ENGLISH
                                                    </p>
                                                </li>
                                                <li className="Arabic ArabicLang">
                                                    <p
                                                        className="Arabic hover:bg-transparent hover:text-[#058080] text-bold-hover px-0 text-start"
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
                                                            alt="arLang"
                                                        />
                                                        العربيه
                                                    </p>
                                                </li>
                                                <li className="notArabic ">
                                                    <p
                                                        className="hover:bg-transparent hover:text-[#058080] text-bold-hover px-0 text-start"
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
                                                            alt="esLang"
                                                        />
                                                        Español
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="hover:bg-transparent text-bold-hover group ">
                                        {
                                            <div className="dropdown dropdown-bottom dropdown-hover hover:bg-transparent flex  items-center justify-center">
                                                <label className="m-1 flex justify-center items-center gap-0 text-bold-hover hover:text-[#058080]">
                                                    <Image
                                                        src={'/icons/user.webp'}
                                                        alt="SignIn"
                                                        width={20}
                                                        height={20}
                                                        className="min-[2560px]:w-10 min-[2560px]:h-10"
                                                    />
                                                    {userData && loggedin && (
                                                        <p>
                                                            {userData &&
                                                            userData.fullName ? (
                                                                <>
                                                                    Hi,{' '}
                                                                    {
                                                                        userData.fullName.split(
                                                                            ' '
                                                                        )[0]
                                                                    }
                                                                </>
                                                            ) : (
                                                                <span>---</span>
                                                            )}
                                                        </p>
                                                    )}
                                                </label>
                                                <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-max space-y-2">
                                                    {userData && loggedin ? (
                                                        <>
                                                            <li>
                                                                <Link
                                                                    href="#"
                                                                    onClick={
                                                                        handleLogOut
                                                                    }
                                                                    className="hover:bg-transparent"
                                                                >
                                                                    <BiLogOut />
                                                                    <p className="hover:bg-transparent hover:text-[#058080] text-bold-hover">
                                                                        {t(
                                                                            'Logout'
                                                                        )}
                                                                    </p>
                                                                </Link>
                                                            </li>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <li className=" ">
                                                                <Link
                                                                    href={getLocalizedPath(
                                                                        `/${locale}/sign-in`
                                                                    )}
                                                                    onClick={
                                                                        handleClick
                                                                    }
                                                                    className="hover:bg-transparent"
                                                                >
                                                                    <HiMiniUser />
                                                                    <p className="hover:bg-transparent hover:text-[#058080] text-bold-hover">
                                                                        {t(
                                                                            'Login'
                                                                        )}
                                                                    </p>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={getLocalizedPath(
                                                                        `/${locale}/sign-up`
                                                                    )}
                                                                    onClick={
                                                                        handleClick
                                                                    }
                                                                    className="hover:bg-transparent"
                                                                >
                                                                    <HiMiniUserPlus />
                                                                    <p className="hover:bg-transparent hover:text-[#058080] text-bold-hover">
                                                                        {t(
                                                                            'SignUp'
                                                                        )}
                                                                    </p>
                                                                </Link>
                                                            </li>
                                                        </>
                                                    )}
                                                </ul>
                                            </div>
                                        }
                                    </li>
                                    <li>
                                        {!userData && !loggedin && (
                                            <Link
                                                href={getLocalizedPath(
                                                    `/${locale}/sign-up`
                                                )}
                                                className=" bg-colors-evestGreen-600 text-colors-white hover:bg-colors-evest-500 hover:text-colors-white  flex justify-center items-center content-center transition ease-in-out rounded-none rounded-tl-md rounded-bl-md rounded-br-md  hover:scale-110 duration-300 uppercase min-[2560px]:text-[25px] min-[2560px]:py-4"
                                            >
                                                {t('Get Started')}
                                            </Link>
                                        )}
                                    </li>
                                </ul>
                            </nav>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isOpen}
                locale={locale}
                t2={t2}
                t={t}
                language={language}
                handleMobileClick={handleMobileClick}
            />
            {/* Search input */}
            <SearchInput
                searchOpen={searchOpen}
                isOpen={isOpen}
                searchBar={searchBar}
                setSearch={setSearch}
                data={data}
                locale={locale}
                fullPathname={fullPathname}
                closeSearchBar={closeSearchBar}
                isLoading={isLoading}
                t2={t2}
                t={t}
            />
        </>
    );
}
