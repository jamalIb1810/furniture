import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React, { memo, useEffect, useRef, useState } from 'react';
import { getLocalizedPath } from '../../hooks/localizedPath';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SearchInput = ({
    searchOpen,
    isOpen,
    searchBar,
    setSearch,
    data,
    locale,
    fullPathname,
    closeSearchBar,
    isLoading,
    t2,
}) => {
    const searchRef = useRef(null);
    const translate = useTranslations('search');
    const [authLink, setAuthLink] = useState('https://support.evest.com');
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            setUserData(JSON.parse(localStorage.getItem('userData')));
        }
    }, []);

    const { helpLink } = useSWR(
        `/api/goToHelpDesk?fullName=${userData ? userData.fullName : ''}&email=${userData ? userData.email : ''}`,
        fetcher
    );

    useEffect(() => {
        if (helpLink && helpLink.url) {
            setAuthLink(helpLink.url); // Update the auth link when data is fetched
        } else {
            setAuthLink('https://support.evest.com'); // Fallback URL on error
        }
    }, [helpLink]);

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            closeSearchBar();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderArticles = (articles) => {
        return articles.map((item, index) => (
            <Link
                key={index}
                href={`${getLocalizedPath(`/${locale}/news/trading-news`)}/${item.slug}`}
                onClick={closeSearchBar}
            >
                <div className="py-5 flex justify-start items-center bg-[#f8f7f7] rounded-xl">
                    {item.yoast_head_json?.og_image[0] && (
                        <Image
                            alt="searchResult"
                            src={item.yoast_head_json?.og_image[0]?.url}
                            width={50}
                            height={50}
                            layout="fixed"
                        />
                    )}
                    <p className="text-sm px-2 text-justify">
                        {item.title.rendered}
                    </p>
                </div>
            </Link>
        ));
    };

    const getPageName = (pageName) => {
        return pageName
            .replaceAll('-', ' ')
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.substring(1))
            .join(' ');
    };

    const renderPages = (pages) => {
        console.log(pages);
        return pages.map(
            (item, index) =>
                !item.path.includes('signup') && (
                    <Link
                        key={index}
                        href={
                            item.path.includes('help-center')
                                ? authLink
                                : getLocalizedPath(
                                      `/${locale}${item.path.includes('documents-policies') ? item.path.replace('documents-policies', 'Documents-Policies') : item.path}`
                                  )
                        }
                        onClick={closeSearchBar}
                    >
                        <p
                            id={translate(getPageName(item.pageName))}
                            className="text-lg px-2 text-justify text-colors-evestGreen-600"
                        >
                            {item.path.includes('/market/stocks/')
                                ? getPageName(item.pageName)
                                : translate(getPageName(item.pageName))}
                        </p>
                    </Link>
                )
        );
    };

    return (
        <AnimatePresence>
            {searchOpen && !isOpen && (
                <MotionConfig transition={{ type: 'spring' }}>
                    <div
                        className="flex justify-start items-center fixed w-full sm:w-full flex-col bg-colors-gray-500/50 h-full z-[9999999] pt-5"
                        ref={searchRef}
                    >
                        <motion.div
                            className="relative w-full max-w-sm sm:max-w-xl"
                            variants={{
                                hide: {
                                    x: '-100%',
                                    transition: { duration: 0.05 },
                                },
                                show: {
                                    x: '0%',
                                    transition: { duration: 0.7 },
                                },
                            }}
                            initial="hide"
                            animate="show"
                            exit="hide"
                        >
                            <motion.input
                                name="Search"
                                key="search-bar"
                                type="text"
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder={searchBar}
                                className="input input-bordered w-full rounded-md pr-10"
                                aria-label="Search"
                                id="searchInput"
                            />
                            {/* X button to close/clear the search */}
                            <button
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                onClick={closeSearchBar}
                                id="closeIcon"
                                aria-label={
                                    searchBar ? 'Clear search' : 'Close search'
                                }
                            >
                                &#10005;
                            </button>
                        </motion.div>
                        {data && (
                            <div
                                className={`input input-bordered w-full max-w-sm sm:max-w-xl rounded-md h-full ${
                                    data.articles?.length || data.pages?.length
                                        ? ''
                                        : 'hidden'
                                }`}
                            >
                                {fullPathname.includes('news') ||
                                fullPathname.includes('blogs') ? (
                                    <>
                                        {!isLoading &&
                                            data.articles?.length > 0 && (
                                                <div className="tradingnewsResults">
                                                    <h3 className="text-colors-evestGreen-600 pb-2 pt-4 underline-offset-4">
                                                        {translate(
                                                            'TradingNews-blogs'
                                                        )}
                                                    </h3>
                                                    <hr />
                                                    <div className="flex flex-col gap-2 my-2 h-[30vh] overflow-y-scroll">
                                                        {renderArticles(
                                                            data.articles
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        {!isLoading &&
                                            data.pages?.length > 0 && (
                                                <div className="innerpagesResults">
                                                    <h3 className="text-colors-evestGreen-600 pb-2 pt-4 underline-offset-4">
                                                        {t2('Pages')}
                                                    </h3>
                                                    <hr />
                                                    <div className="flex flex-col gap-2 my-2 h-[30vh] overflow-y-scroll">
                                                        {renderPages(
                                                            data.pages
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                    </>
                                ) : (
                                    <>
                                        {!isLoading &&
                                            data.pages?.length > 0 && (
                                                <div className="innerpagesResults">
                                                    <h3 className="text-colors-evestGreen-600 pb-2 pt-4 underline-offset-4">
                                                        {t2('Pages')}
                                                    </h3>
                                                    <hr />
                                                    <div className="flex flex-col gap-2 my-2 h-[30vh] overflow-y-scroll">
                                                        {renderPages(
                                                            data.pages
                                                        )}
                                                    </div>
                                                </div>
                                            )}

                                        {!isLoading &&
                                            data?.articles?.length > 0 && (
                                                <div className="tradingnewsResults">
                                                    <h3 className="text-colors-evestGreen-600 pb-2 pt-4 underline-offset-4">
                                                        {t2(
                                                            'TradingNews-blogs'
                                                        )}
                                                    </h3>
                                                    <hr />
                                                    <div className="flex flex-col gap-2 my-2 h-[30vh] overflow-y-scroll">
                                                        {renderArticles(
                                                            data.articles
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </MotionConfig>
            )}
        </AnimatePresence>
    );
};

export default memo(SearchInput);
