'use client';
import { motion, useInView } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef } from 'react';
import { useMobile } from '../../../context/MobileContext';
import { getLocalizedPath } from '../../hooks/localizedPath';
import Buttons from '../innerComponents/Buttons';
import Line from './Line';
import muhanad from '/public/images/homepage/Mohanad-Alwadiya-image-no-space-5000px1.png';
import logo from '/public/images/homepage/academy-logo-big-white.png';
import laptop from '/public/images/homepage/book-laptop.png';
import bracket from '/public/images/homepage/brackets-big.png';
import mohanadTextArMob from '/public/images/homepage/mohanad-ar-mob.png';
import mohanadTextAr from '/public/images/homepage/mohanad-ar-web.png';
import mohanadTextMob from '/public/images/homepage/mohanad-en-mob.png';
import mohanadText from '/public/images/homepage/mohanad-en-web.png';
import bgLines from '/public/images/homepage/section2Bg1.png';

export default function Section2() {
    const t = useTranslations('HomePage2.Future Traders');
    const locale = useLocale();
    const isMobile = useMobile();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });

    return (
        <>
            <Line way="bg-gradient-to-r" />
            <div
                ref={ref}
                className={`relative min-[360px]:h-[780px] min-[410px]:h-[800px] ${locale == 'es' ? 'min-[428px]:h-[750px]' : 'min-[428px]:h-[850px]'}  min-[600px]:h-[1100px] min-[820px]:h-[1100px] min-[880px]:h-[1150px] min-[1023px]:h-[450px] min-[1279px]:h-[600px] min-[1920px]:h-[800px] flex flex-col min-[1023px]:flex-row items-start min-[1023px]:items-auto min-[1023px]:justify-center pt-10`}
            >
                <div className="absolute top-0 w-[100%] h-[100%]">
                    <Image
                        src={bgLines}
                        className="w-[100%] h-[100%]"
                        alt="bgLines"
                    />
                </div>
                <motion.div
                    className="bg-[#082a39] ms-20 min-[760px]:ms-40 min-[1023px]:ms-0 flex flex-col-reverse min-[1023px]:justify-end min-[1023px]:grid min-[1023px]:grid-cols-2 z-50 relative  min-[1023px]:w-[70%] h-fit min-[1023px]:h-[100%]"
                    initial={{ opacity: 0, x: isMobile ? 0 : -200 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                        duration: 0.9,
                        ease: 'easeInOut',
                        delay: 0.5,
                    }}
                >
                    <Image
                        src={locale == 'es' ? laptop : muhanad}
                        alt={locale == 'es' ? 'laptop' : 'ambassador'}
                        className={
                            locale == 'es'
                                ? `self-end min-[760px]:self-start min-[1023px]:self-center mr-10 min-[1023px]:mr-0 max-w-[100%]`
                                : `${locale == 'ar' ? ' -mr-20 ml-10 min-[1023px]:ml-0' : '-ml-20 mr-10 min-[1023px]:mr-0'} FlipImage self-end min-[760px]:self-start min-[1023px]:self-end  max-w-[100%] min-[760px]:max-w-[80%] min-[1023px]:max-w-[120%] min-[1096px]:max-w-[110%] min-[1163px]:max-w-[100%] min-[1279px]:max-w-[130%] min-[1364px]:max-w-[120%] min-[1460px]:max-w-[110%] min-[1600px]:max-w-[100%] min-[1745px]:max-w-[90%] min-[1920px]:max-w-[120%] min-[1995px]:max-w-[110%] min-[2133px]:max-w-[100%] min-[2400px]:max-w-[85%] min-[2744px]:max-w-[80%] `
                        }
                    />
                    <div
                        className={`flex flex-col text-colors-white justify-center ${locale == 'ar' ? 'ml-5 min-[1023px]:ml-[4rem] -mr-10 min-[1023px]:-mr-10' : 'mr-6 min-[1023px]:mr-[4rem] -ml-10 min-[1023px]:-ml-10'} `}
                    >
                        <div
                            id="section2Text"
                            className="flex gap-5 h-fit mb-2"
                        >
                            <div className="w-[40px] min-[760px]:w-[60px] min-[1023px]:w-[40px] min-[1279px]:w-[45px] min-[1536px]:w-[55px] min-[1920px]:w-[65px] h-[90%] min-[1023px]:h-[90px] min-[1279px]:h-[110px] min-[1536px]:h-[130px] min-[1920px]:h-[155px]">
                                <Image
                                    src={bracket}
                                    alt="evest-brackets"
                                    className={`h-[100%] w-[100%] FlipImage `}
                                />
                            </div>
                            <div className="h-fit">
                                <p className="text-[10vw] min-[760px]:text-[7vw] min-[1023px]:text-[3vw] leading-none uppercase text-bold">
                                    {t('future')} <br /> {t('traders')}
                                </p>
                                <p
                                    className={`${locale == 'en' ? 'text-[6vw]' : 'text-[5vw]'}  min-[760px]:text-[5vw] min-[1023px]:text-[2vw] text-colors-secondary`}
                                >
                                    {t('Join Evest Academy')}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 ps-[40px] min-[1023px]:ps-[40px] min-[1279px]:ps-[45px] min-[1536px]:ps-[55px] min-[1920px]:ps-[65px] w-[100%] 2xl:w-[90%]">
                            <div className="flex flex-col gap-5 ps-[1.25rem] w-[100%]">
                                <p className="text-[14px] min-[760px]:text-[18px] min-[1023px]:text-[0.8vw] min-[1024px]:text-[1.1vw]">
                                    {t('Unlock')}
                                </p>
                                {/* {!isMobile && ( */}
                                {/* <> */}
                                <Buttons
                                    divClass={`${isMobile ? 'hidden min-[1280px]:grid ' : 'grid'}  grid-cols-2 gap-2 gap-y-5 items-start`}
                                    btn1Class={`min-[1023px]:text-[11px] min-[1024px]:text-[12px] min-[1279px]:text-[15px] min-[1920px]:text-[20px]  max-w-[220px] btn bg-colors-evestGreen-500 text-colors-white border-colors-accent hover:text-colors-evest-500 text-xl text-thin arabic-thin`}
                                    btn1Href={`/${locale}/sign-up`}
                                    btn1Text={t('Create Account')}
                                    btn1Alt={'Create Account'}
                                    btn2Class={
                                        'min-[1023px]:text-[11px] min-[1024px]:text-[12px] min-[1279px]:text-[15px] min-[1920px]:text-[20px] max-w-[220px] btn bg-transparent text-colors-accent border-colors-accent hover:text-colors-evest-500 text-xl text-thin arabic-thin'
                                    }
                                    btn2Href={`https://academy.evest.com/?lang=${locale}`}
                                    btn2Text={t('Evest Academy')}
                                    btn2Alt={'Stocks'}
                                />
                                {locale == 'es' ? (
                                    <Image
                                        src={logo}
                                        className={`${isMobile ? 'hidden min-[1280px]:block ' : 'block'} w-[50%] self-center`}
                                        alt="AcademyLogo"
                                    />
                                ) : (
                                    <div
                                        className={`${isMobile ? 'hidden min-[1280px]:grid ' : 'grid'} grid-cols-2 gap-2 gap-y-5 items-start`}
                                    >
                                        <Image
                                            src={
                                                locale == 'ar'
                                                    ? mohanadTextAr
                                                    : mohanadText
                                            }
                                            className="self-center"
                                            alt="AcademyLogo"
                                        />
                                        <Image src={logo} alt="AcademyLogo" />
                                    </div>
                                )}
                                {/* </> */}
                                {/* )} */}
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div
                    className={`${isMobile ? 'w-[100%] z-50 min-[1280px]:hidden' : 'hidden'}`}
                >
                    <Line way="bg-gradient-to-l" />
                </div>
                {locale == 'es' ? (
                    <Image
                        src={logo}
                        className={`${isMobile ? 'self-center z-50 w-[50%] mt-10 min-[1280px]:hidden' : 'hidden'} '`}
                        alt="AcademyLogo"
                    />
                ) : (
                    <div
                        className={`${isMobile ? 'grid grid-cols-2 gap-x-2 gap-y-5 z-50 self-center items-center px-[5%] mt-10 min-[1280px]:hidden' : 'hidden'}  `}
                    >
                        <Image
                            src={
                                locale == 'ar'
                                    ? mohanadTextArMob
                                    : mohanadTextMob
                            }
                            className="justify-self-center min-[800px]:w-[80%]"
                            alt="AcademyLogo"
                        />
                        <Image
                            src={logo}
                            className="justify-self-center min-[800px]:w-[100%]"
                            alt="AcademyLogo"
                        />
                    </div>
                )}
                <Buttons
                    divClass={`${isMobile ? `grid grid-cols-2 gap-x-2 ${locale !== 'es' && 'min-[800px]:gap-x-28'} gap-y-5 z-50 self-center items-center px-[5%] my-5 min-[1280px]:hidden` : 'hidden'}`}
                    btn1Class={
                        'justify-self-center min-[360px]:text-[14px] min-[410px]:text-[16px] min-[428px]:text-[16px] min-[360px]:w-[150px] min-[410px]:w-[170px] min-[430px]:w-[170px] btn bg-colors-evestGreen-500 text-colors-white border-colors-accent hover:text-colors-evest-500 text-xl text-thin arabic-thin'
                    }
                    btn1Href={`https://mobile.evest.com/?lang=${locale}#/signup`}
                    btn1Text={t('Create Account')}
                    btn1Alt={'Create Account'}
                    btn2Class={`justify-self-center ${locale == 'es' ? 'min-[360px]:text-[13px] min-[410px]:text-[15px] min-[428px]:text-[17px] min-[800px]:text-[15px] min-[1280px]:text-[17px]' : 'min-[360px]:text-[14px] min-[410px]:text-[16px] min-[428px]:text-[16px]'}  min-[360px]:w-[150px] min-[410px]:w-[170px] min-[430px]:w-[170px] btn bg-transparent text-colors-accent border-colors-accent hover:text-colors-evest-500 text-xl text-thin arabic-thin`}
                    btn2Href={`https://academy.evest.com/?lang=${locale}`}
                    btn2Text={t('Evest Academy')}
                    btn2Alt={'Evest Academy'}
                />
            </div>
            <div
                className={`${isMobile ? 'hidden min-[1280px]:block' : ''} w-[100%] z-50 relative`}
            >
                <Line way="bg-gradient-to-l" />
            </div>
        </>
    );
}
