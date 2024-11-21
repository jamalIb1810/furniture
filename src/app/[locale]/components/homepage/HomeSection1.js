'use client';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMobile } from '../../../context/MobileContext';
import Counter from '../counter/counter';

export default function HomeSection1() {
    const isMobile = useMobile();
    const t = useTranslations('HomePage.HomeSection1');
    const locale = useLocale();
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger only once
        threshold: 0.1, // 10% of the element should be visible
    });

    const texts = {
        ar: 'text-medium',
        en: '',
        es: '',
    };

    const text = texts[locale];

    return (
        <div id="homeSection1" className="bg-colors-evest-600">
            {/* {isMobile ? ( */}
            <div
                className={`section1 ${isMobile ? 'flex min-[1280px]:hidden' : 'hidden'}  container items-center bg-opacity-0.9 h-28 text-colors-white text-xl  py-2`}
            >
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    centeredSlides={false}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    grabCursor={false}
                    modules={[Autoplay]}
                    className="!flex h-full flex items-center justify-center py-5 w-full"
                >
                    <SwiperSlide className="flex justify-center items-baseline py-2">
                        <div className="w-fit text-center">
                            <p
                                className={`text-[#64F0E3] font-black text-[34px] ${text}`}
                            >
                                400+
                            </p>
                            <span className="text-[18px] ">
                                {t('Financial Instruments')}
                            </span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-baseline py-2">
                        <div className="w-fit text-center">
                            <p
                                className={`text-[#64F0E3] font-black text-[34px] ${text}`}
                            >
                                1:400
                            </p>
                            <div className="w-[153px] md:w-auto">
                                <span className="text-[18px]">
                                    {t('Financial Leverage')}
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-baseline py-2">
                        <div className="w-fit text-center">
                            <p
                                className={`text-[#64F0E3] font-black text-[34px]  ${text}`}
                            >
                                04
                            </p>
                            <div className="w-[153px] md:w-auto">
                                <span className="text-[18px]">
                                    {t('Trading Accounts')}
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-baseline py-3">
                        <div className="w-fit  text-center">
                            <p
                                className={`text-[#64F0E3] font-black text-[34px] ${text}`}
                            >
                                0%
                            </p>
                            <div className="w-[100px] md:w-auto">
                                <span className="text-[18px]">
                                    {t('Deposit Fees')}
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-baseline py-2">
                        <div className="w-[170px] text-center">
                            <p
                                className={`text-[#64F0E3] font-black text-[34px]  ${text}`}
                            >
                                0.03
                                <span
                                    className={
                                        locale == 'ar'
                                            ? 'text-[28px]'
                                            : 'text-[34px]'
                                    }
                                >
                                    {t('ms')}
                                </span>
                            </p>
                            <span className="text-[18px]">
                                {t('Orders Execution Speed')}
                            </span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* ) : ( */}
            <div
                ref={ref}
                className={`${isMobile ? 'hidden min-[1280px]:flex' : 'flex'} section1 main-content justify-between bg-opacity-0.9 h-28 items-center text-colors-white text-xl `}
            >
                <div className="w-fit hidden md:block text-center">
                    <p
                        style={{
                            opacity: inView ? 1 : 0,
                            transition:
                                'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)',
                        }}
                        className={`text-[#64F0E3] font-black text-[34px] ${text}`}
                    >
                        <Counter value={400} />+
                    </p>
                    <div
                        style={{
                            transform: inView ? 'none' : 'translateY(50px)',
                            opacity: inView ? 1 : 0,
                            transition:
                                'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)',
                        }}
                    >
                        <span className="text-[18px]">
                            {t('Financial Instruments')}
                        </span>
                    </div>
                </div>
                <div className="w-fit text-center">
                    <p
                        style={{
                            opacity: inView ? 1 : 0,
                            transition:
                                'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
                        }}
                        className={`text-[#64F0E3] font-black text-[34px]  ${text}`}
                    >
                        <Counter value={1} />
                        <span>:</span>
                        <Counter value={400} />
                    </p>
                    <div
                        className="w-[153px] md:w-auto"
                        style={{
                            transform: inView ? 'none' : 'translateY(50px)',
                            opacity: inView ? 1 : 0,
                            transition:
                                'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
                        }}
                    >
                        <span className="text-[18px]">
                            {t('Financial Leverage')}
                        </span>
                    </div>
                </div>
                <div className="w-fit text-center">
                    <p
                        style={{
                            opacity: inView ? 1 : 0,
                            transition:
                                'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                        }}
                        className={`text-[#64F0E3] font-black text-[34px] ${text}`}
                    >
                        <span>0</span>
                        <Counter value={4} />
                    </p>
                    <div
                        className="w-[153px] md:w-auto"
                        style={{
                            transform: inView ? 'none' : 'translateY(50px)',
                            opacity: inView ? 1 : 0,
                            transition:
                                'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                        }}
                    >
                        <span className="text-[18px]">
                            {t('Trading Accounts')}
                        </span>
                    </div>
                </div>
                <div className="w-fit hidden md:block text-center">
                    <p
                        style={{
                            opacity: inView ? 1 : 0,
                            transition:
                                'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s',
                        }}
                        className={`text-[#64F0E3] font-black text-[34px] ${text}`}
                    >
                        <Counter value={100} direction="down" />%
                    </p>
                    <div
                        style={{
                            transform: inView ? 'none' : 'translateY(50px)',
                            opacity: inView ? 1 : 0,
                            transition:
                                'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s',
                        }}
                    >
                        <span className="text-[18px]">{t('Deposit Fees')}</span>
                    </div>
                </div>
                <div className="w-fit hidden md:block text-center">
                    <p
                        style={{
                            opacity: inView ? 1 : 0,
                            transition:
                                'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s',
                        }}
                        className={`text-[#64F0E3] font-black text-[34px] ${text}`}
                    >
                        <Counter value={0.03} fixed={2} />{' '}
                        <span
                            className={
                                locale == 'ar' ? 'text-[28px]' : 'text-[34px]'
                            }
                        >
                            {t('ms')}
                        </span>
                    </p>
                    <div
                        style={{
                            transform: inView ? 'none' : 'translateY(50px)',
                            opacity: inView ? 1 : 0,
                            transition:
                                'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s',
                        }}
                    >
                        <span className="text-[18px]">
                            {t('Orders Execution Speed')}
                        </span>
                    </div>
                </div>
            </div>
            {/* )} */}
        </div>
    );
}
