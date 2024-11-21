'use client';
import Image from 'next/image';
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, useInView } from 'framer-motion';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import useSWR from 'swr';
import { useEffect, useRef } from 'react';
import { useMobile } from '../../../context/MobileContext';
import { getLocalizedPath } from '../../hooks/localizedPath';
import { useLocale } from 'next-intl';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Section7() {
    const locale = useLocale();
    const { data, isLoading } = useSWR(`/api/getPressData`, fetcher);

    const getDomain = (url) => {
        const hostname = new URL(url).hostname;
        const domainParts = hostname.split('.').slice(-2);
        return domainParts.join('.');
    };

    const extractUniqueByDomain = (articles) => {
        const uniqueArticles = [];
        const seenDomains = new Set();

        for (const article of articles) {
            const domain = getDomain(article.acf.link_url);
            if (!seenDomains.has(domain)) {
                seenDomains.add(domain);
                uniqueArticles.push(article);
            }
        }
        return uniqueArticles;
    };

    const uniqueArticles = !isLoading && data && extractUniqueByDomain(data);

    const isMobile = useMobile();
    useEffect(() => {
        const TrustBoxScript = document.createElement('script');
        TrustBoxScript.setAttribute(
            'src',
            '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
        );
        TrustBoxScript.setAttribute('type', 'text/javascript');
        TrustBoxScript.setAttribute('id', 'TrustBoxScript');
        document.body.appendChild(TrustBoxScript);

        TrustBoxScript.onload = () => {
            if (window.Trustpilot) {
                window.Trustpilot.loadFromElement(
                    document.getElementsByClassName('trustpilot-widget')[0],
                    true
                );
            }
        };

        return () => {
            if (document.getElementById('TrustBoxScript')) {
                document.getElementById('TrustBoxScript').remove();
            }
        };
    }, []);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col mx-2 py-10"
        >
            <div>
                <div
                    className="trustpilot-widget"
                    data-locale="en-GB"
                    data-template-id="53aa8807dec7e10d38f59f32"
                    data-businessunit-id="60b17d94e1f09a00017d6f00"
                    data-style-height="150px"
                    data-style-width="100%"
                    data-theme="light"
                    data-text-color="#082a39"
                >
                    <a
                        href="https://uk.trustpilot.com/review/evest.com"
                        target="_blank"
                        rel="noopener"
                    >
                        Trustpilot
                    </a>
                </div>
            </div>
            <div>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={15}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className={`pressSlider mx-2 h-[100px] ${isMobile ? 'min-[1280px]:!hidden' : '!hidden'}`}
                >
                    {!isLoading &&
                        data &&
                        uniqueArticles.map((post, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: 'easeOut',
                                    }}
                                >
                                    <Link
                                        href={getLocalizedPath(
                                            `/${locale}/evest/in-the-press`
                                        )}
                                        className="h-[110px] flex items-center justify-center"
                                    >
                                        <Image
                                            src={
                                                post?.yoast_head_json
                                                    ?.og_image?.[0]?.url
                                            }
                                            alt={'Test'}
                                            width={250}
                                            height={250}
                                            className="grayscale aspect-square h-[100px] "
                                        />
                                    </Link>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                </Swiper>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={isMobile ? 15 : 30}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className={`pressSlider mx-2 h-[100px] ${isMobile && '!hidden min-[1280px]:!block'}`}
                >
                    {!isLoading &&
                        data &&
                        uniqueArticles.map((post, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: 'easeOut',
                                    }}
                                >
                                    <Link
                                        href={getLocalizedPath(
                                            `/${locale}/evest/in-the-press`
                                        )}
                                        className="h-[110px] flex justify-center"
                                    >
                                        <Image
                                            src={
                                                post?.yoast_head_json
                                                    ?.og_image?.[0]?.url
                                            }
                                            alt={'Test'}
                                            width={250}
                                            height={250}
                                            className="grayscale aspect-square h-[100px] "
                                        />
                                    </Link>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </motion.div>
    );
}
