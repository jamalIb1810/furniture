'use client';
import Image from 'next/image';
import mobileBG from '/public/images/homepage/abobader/mobileBG.png';
import desktopBG from '/public/images/homepage/abobader/desktopBG.png';
import aboBaderMobile from '/public/images/homepage/abobader/abo-bader-mobile3.png';
import aboBaderDesktop from '/public/images/homepage/abobader/abo-bader-desktop2.png';
import bracket from '/public/images/homepage/brackets-big.png';
import Line from './Line';
import { useMobile } from '../../../context/MobileContext';
import { useLocale, useTranslations } from 'next-intl';
import Buttons from '../innerComponents/Buttons';

export default function AboBader() {
    const locale = useLocale();
    const isMobile = useMobile();
    const t = useTranslations('HomePage2.Trading App');

    const icons = [
        {
            img: '/icons/homepage/MARKET NOTIFICATION.png',
            alt: 'Market Notifications',
            text: 'Market Notifications',
        },
        {
            img: '/icons/homepage/FULL FINANCIAL CONTROL.png',
            alt: 'Full Financial Control',
            text: 'Full Financial Control',
        },
        {
            img: '/icons/homepage/USER VERIFICATION.png',
            alt: 'User Verification',
            text: 'User Verification',
        },
        {
            img: '/icons/homepage/TRADING CENTRAL.png',
            alt: 'Trading Central',
            text: 'Trading Central',
        },
        {
            img: '/icons/homepage/SECURITY MEASUREMENTS.png',
            alt: 'Security Measurements',
            text: 'Security Measurements',
        },
        {
            img: '/icons/homepage/MULTI LANGUAGE.png',
            alt: 'Multi language',
            text: 'Multi language',
        },
    ];

    return (
        <>
            <Line way={'bg-gradient-to-r'} />
            <div
                className={`flex flex-col min-[1023px]:flex-row justify-center ${isMobile && 'pb-10 min-[1280px]:pb-0 min-[1280px]:flex-col'} pt-20 relative `}
            >
                <div className="absolute bottom-0 left-0 top-0 w-[100%] z-[1]">
                    <Image
                        src={isMobile ? mobileBG : desktopBG}
                        className="w-full h-full"
                        alt="bgLines"
                    />
                </div>
                <div
                    className={`flex flex-col min-[1023px]:flex-row ${!isMobile && 'ps-14 pe-14 min-[1536px]:pe-28'} `}
                >
                    <div
                        className={`flex flex-col z-[2] ${isMobile ? 'px-[5%]' : 'w-[50%]'} `}
                    >
                        <div
                            className={`flex gap-5 h-fit mb-2 ${!isMobile && 'w-[70%] min-[1536px]:self-end'} `}
                        >
                            <div className="w-[40px] min-[760px]:w-[60px] min-[1023px]:w-[40px] min-[1279px]:w-[45px] min-[1536px]:w-[55px] min-[1920px]:w-[65px] h-[90%] min-[1023px]:h-[90px] min-[1279px]:h-[110px] min-[1536px]:h-[130px] min-[1920px]:h-[155px]">
                                <Image
                                    src={bracket}
                                    alt="evest-brackets"
                                    className={`h-[100%] w-[100%] FlipImage`}
                                />
                            </div>
                            <div className="h-fit">
                                <p className="text-[#FFF] text-[10vw] min-[760px]:text-[7vw] min-[1023px]:text-[3vw] leading-none uppercase text-bold">
                                    {t('Get in on')} <br /> {t('the action')}
                                </p>
                                <p
                                    className={`${locale == 'es' ? 'text-[5vw]' : 'text-[6vw]'} min-[760px]:text-[5vw] min-[1023px]:text-[2vw] text-colors-secondary`}
                                >
                                    {t('Evest Trading App')}
                                </p>
                            </div>
                        </div>
                        <div className="flex min-[1536px]:self-end gap-5 ps-[40px] min-[1023px]:ps-[40px] min-[1279px]:ps-[45px] min-[1536px]:ps-[55px] min-[1920px]:ps-[65px] w-[100%] 2xl:w-[70%]">
                            <div className="flex flex-col gap-5 ps-[1.25rem] w-[80%]">
                                <p className="text-[#FFF] text-[14px] min-[760px]:text-[18px] min-[1023px]:text-[0.8vw] min-[1024px]:text-[1.1vw]">
                                    {t('all-new')}
                                </p>
                                <div
                                    className={`${isMobile ? 'hidden min-[1280px]:grid ' : 'grid'}  grid-cols-2 justify-center items-center gap-y-4 min-[1023px]:gap-x-24 min-[1280px]:gap-x-10 w-full py-5 text-[#FFF]`}
                                >
                                    {icons.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-center items-center gap-3 sm:w-[180px]"
                                        >
                                            <Image
                                                src={icon.img}
                                                width={45}
                                                height={45}
                                                alt={icon.alt}
                                            />{' '}
                                            <p className="text-start sm:w-[125px] text-thin">
                                                {t(icon.text)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <Buttons
                                    divClass={`${isMobile ? 'hidden min-[1280px]:grid' : 'grid'} grid grid-cols-2 gap-2 items-start pb-10`}
                                    btn1Class={
                                        'min-[1023px]:text-[11px] min-[1024px]:text-[14px] min-[1279px]:text-[14px] min-[1920px]:text-[19px] min-[1023px]:w-[150px] min-[1920px]:w-[190px] max-w-[220px] btn bg-[#64F0E3] text-colors-black border-[#64F0E3] rounded-[10px] hover:text-colors-evest-500 text-xl text-bold arabic-thin'
                                    }
                                    btn1Href={
                                        'https://evest.onelink.me/o6qP/63b4f023'
                                    }
                                    btn1Text={t('Get Evest App')}
                                    btn1Alt={'Evest App'}
                                    btn2Class={`bg-transparent min-[1023px]:text-[11px] min-[1024px]:text-[14px] min-[1279px]:text-[15px] min-[1920px]:text-[20px] min-[1023px]:w-[150px] min-[1920px]:w-[190px] max-w-[220px] min-[1023px]:me-10 min-[1920px]:me-0 btn text-[#64F0E3] border-[#64F0E3] rounded-[10px] border-[3px] hover:text-colors-evest-500 text-xl text-thin arabic-thin`}
                                    btn2Href={`/${locale}/sign-up`}
                                    btn2Text={t('Create Account')}
                                    btn2Alt={'Create Account'}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className={`flex ${isMobile ? 'justify-center relative' : 'justify-end w-[50%]'}`}
                    >
                        <Image
                            src={aboBaderDesktop}
                            alt={'TradingApp'}
                            className={`z-[2] ${isMobile && 'hidden min-[1280px]:block'}`}
                        />
                        {isMobile && (
                            <Image
                                src={aboBaderMobile}
                                alt={'TradingApp'}
                                width={500}
                                className={`w-full z-50 min-[1280px]:hidden`}
                            />
                        )}
                    </div>
                </div>
                {isMobile && (
                    <>
                        <div
                            className={`grid min-[1280px]:hidden grid-cols-2 justify-center z-[50] text-[14px] min-[430px]:text-[16px] items-center gap-y-4 w-full min-[1023px]:gap-x-14 py-5 text-[#FFF] px-[5%] min-[410px]:px-[7%] min-[431px]:px-[10%]`}
                        >
                            {icons.map((icon, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center gap-3 w-fit justify-self-center"
                                >
                                    <Image
                                        src={icon.img}
                                        width={45}
                                        height={45}
                                        alt={icon.alt}
                                    />{' '}
                                    <p className="text-center sm:w-[125px] text-thin">
                                        {t(icon.text)}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <Buttons
                            divClass={`min-[1280px]:hidden px-[5%] min-[800px]:px-[10%] min-[1280px]:px-[5%] pt-5 z-[50] grid grid-cols-2 min-[760px]:gap-0 justify-center items-center`}
                            btn1Class={`justify-self-center min-[360px]:text-[14px] min-[410px]:text-[16px] min-[430px]:text-[16px] min-[360px]:w-[150px] min-[410px]:w-[170px] min-[430px]:w-[170px] btn bg-[#64F0E3] text-colors-black border-[#64F0E3] rounded-[10px] hover:text-colors-evest-500 text-xl text-bold arabic-thin`}
                            btn1Href={'https://evest.onelink.me/o6qP/63b4f023'}
                            btn1Text={t('Get Evest App')}
                            btn1Alt={'Evest App'}
                            btn2Class={`justify-self-center min-[360px]:text-[14px] min-[410px]:text-[14px] min-[360px]:w-[150px] min-[410px]:w-[170px] min-[410px]:text-[14px] btn bg-transparent text-[#64F0E3] border-[#64F0E3] rounded-[10px] border-[3px] hover:text-colors-evest-500 text-xl text-semibold arabic-thin`}
                            btn2Href={`https://mobile.evest.com/?lang=${locale}#/signup`}
                            btn2Text={t('Create Account')}
                            btn2Alt={'Create Account'}
                        />
                    </>
                )}
            </div>
            <Line way="bg-gradient-to-l" />
        </>
    );
}
