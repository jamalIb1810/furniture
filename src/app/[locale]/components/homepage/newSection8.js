'use client';
import Image from 'next/image';
import AppImg from '/public/images/homepage/flip-left-mobile-screen-1192.png';
import AppImgAr from '/public/images/homepage/flip-left-mobile-screen-1192 arabic.png';
import bracket from '/public/images/homepage/brackets-big.png';
import Line from './Line';
import { useMobile } from '../../../context/MobileContext';
import { useLocale, useTranslations } from 'next-intl';
import bgLines from '/public/images/homepage/gita-BG.png';
import Buttons from '../innerComponents/Buttons';

export default function Section8() {
    const locale = useLocale();
    const isMobile = useMobile();
    const t = useTranslations('HomePage2.Trading App');

    const icons = [
        {
            img: '/icons/homepage/MARKET NOTIFICATION.svg',
            alt: 'Market Notifications',
            text: 'Market Notifications',
        },
        {
            img: '/icons/homepage/FULL FINANCIAL CONTROL.svg',
            alt: 'Full Financial Control',
            text: 'Full Financial Control',
        },
        {
            img: '/icons/homepage/USER VERIFICATION.svg',
            alt: 'User Verification',
            text: 'User Verification',
        },
        {
            img: '/icons/homepage/TRADING CENTRAL.svg',
            alt: 'Trading Central',
            text: 'Trading Central',
        },
        {
            img: '/icons/homepage/SECURITY MEASUREMENTS.svg',
            alt: 'Security Measurements',
            text: 'Security Measurements',
        },
        {
            img: '/icons/homepage/MULTI LANGUAGE.svg',
            alt: 'Multi language',
            text: 'Multi language',
        },
    ];

    return (
        <>
            <Line way={'bg-gradient-to-r'} />
            <div
                className={`bg-[#082a39] flex flex-col min-[1023px]:flex-row justify-center py-10 relative `}
            >
                <div
                    className={`${isMobile && 'hidden min-[1280px]:block'} absolute bottom-0 left-0 opacity-50 w-[100%] z-[1]`}
                >
                    <Image
                        src={bgLines}
                        className="w-[100%] h-[300px]"
                        alt="bgLines"
                    />
                </div>
                <div className="grid grid-cols-1 min-[1023px]:grid-cols-2 min-[1023px]:w-[70%] ">
                    <div
                        className={`flex flex-col justify-center min-[1023px]:mb-20 px-[5%] z-[2]`}
                    >
                        <div className="flex gap-5 h-fit mb-2">
                            <div className="w-[40px] min-[760px]:w-[60px] min-[1023px]:w-[40px] min-[1279px]:w-[45px] min-[1536px]:w-[55px] min-[1920px]:w-[65px] h-[90%] min-[1023px]:h-[90px] min-[1279px]:h-[110px] min-[1536px]:h-[130px] min-[1920px]:h-[155px]">
                                <Image
                                    src={bracket}
                                    alt="evest-brackets"
                                    className={`h-[100%] w-[100%] FlipImage `}
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
                        <div className="flex gap-5 ps-[40px] min-[1023px]:ps-[40px] min-[1279px]:ps-[45px] min-[1536px]:ps-[55px] min-[1920px]:ps-[65px] w-[100%] 2xl:w-[90%]">
                            <div className="flex flex-col gap-5 ps-[1.25rem] w-[100%]">
                                <p className="text-[#FFF] text-[14px] min-[760px]:text-[18px] min-[1023px]:text-[0.8vw] min-[1024px]:text-[1.1vw]">
                                    {t('all-new')}
                                </p>
                                <div
                                    className={`${isMobile ? 'hidden min-[1280px]:grid' : 'grid'} grid-cols-2 justify-center items-center gap-y-4 min-[1023px]:gap-x-24 min-[1280px]:gap-x-10 w-full py-5 text-[#FFF]`}
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
                                    divClass={`${isMobile ? 'hidden min-[1280px]:grid' : 'grid'} grid-cols-2 gap-2 items-start`}
                                    btn1Class={`min-[1023px]:text-[11px] min-[1024px]:text-[14px] min-[1279px]:text-[14px] min-[1920px]:text-[19px] min-[1023px]:w-[150px] min-[1280px]:w-[170px] min-[1920px]:w-[210px] max-w-[220px] btn bg-colors-evestGreen-500 text-colors-white border-colors-accent hover:text-colors-evest-500 text-xl text-thin arabic-thin`}
                                    btn1Href={
                                        'https://evest.onelink.me/o6qP/63b4f023'
                                    }
                                    btn1Text={t('Get Evest App')}
                                    btn1Alt={'Evest App'}
                                    btn2Class={`bg-[#082a39] min-[1023px]:text-[11px] min-[1024px]:text-[14px] min-[1279px]:text-[15px] min-[1920px]:text-[20px] min-[1023px]:w-[150px] min-[1280px]:w-[170px] min-[1920px]:w-[210px] max-w-[220px] ${locale == 'ar' ? 'min-[1023px]:mr-10 min-[1920px]:mr-0' : 'min-[1023px]:ml-10 min-[1920px]:ml-0'}  btn text-colors-accent border-colors-accent hover:text-colors-evest-500 text-xl text-thin arabic-thin`}
                                    btn2Href={`/${locale}/sign-up`}
                                    btn2Text={t('Create Account')}
                                    btn2Alt={'Create Account'}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${isMobile ? 'flex justify-center relative min-[1280px]:hidden' : 'hidden'} `}
                    >
                        <Image
                            src={locale == 'ar' ? AppImg : AppImgAr}
                            alt={'TradingApp'}
                            width={500}
                            className={`w-[50%] min-[760px]:w-[35%] min-[800px]:w-[40%] min-[1023px]:w-[60%] z-50`}
                        />
                        <div className="absolute bottom-0 left-0 opacity-50 w-[100%]">
                            <Image
                                src={bgLines}
                                className="w-[100%] h-[300px]"
                                alt="bgLines"
                            />
                        </div>
                    </div>
                    <div
                        className={`${isMobile ? 'hidden min-[1280px]:flex justify-center' : 'flex justify-center'} `}
                    >
                        <Image
                            src={locale == 'ar' ? AppImg : AppImgAr}
                            alt={'TradingApp'}
                            width={500}
                            className={`w-[40%] min-[1023px]:w-[60%] min-[1024px]:w-[70%] min-[1536px]:w-[60%] min-[1920px]:w-[50%] z-[2] self-center`}
                        />
                    </div>
                </div>
                <div
                    className={`${isMobile ? 'grid min-[1280px]:hidden' : 'hidden'} grid-cols-2 justify-center text-[14px] min-[430px]:text-[16px] items-center gap-y-4 w-full min-[1023px]:gap-x-14 py-5 text-[#FFF] px-[5%] min-[410px]:px-[7%] min-[431px]:px-[10%]`}
                >
                    {icons.map((icon, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 w-fit min-[431px]:justify-self-center"
                        >
                            <Image
                                src={icon.img}
                                width={45}
                                height={45}
                                alt={icon.alt}
                            />{' '}
                            <p className="text-start sm:w-[135px] text-thin">
                                {t(icon.text)}
                            </p>
                        </div>
                    ))}
                </div>
                <Buttons
                    divClass={`px-[10%] mt-5 ${isMobile ? 'grid min-[1280px]:hidden' : 'hidden'}  grid-cols-2 gap-4 min-[760px]:gap-0 justify-center items-center`}
                    btn1Class={`min-[431px]:justify-self-center ${locale == 'es' ? 'min-[360px]:text-[12px] min-[410px]:text-[14px]' : 'min-[360px]:text-[14px] min-[410px]:text-[16px]'}  min-[360px]:w-[150px] min-[410px]:w-[170px] min-[430px]:w-[170px] btn bg-colors-evestGreen-500 text-colors-white border-colors-accent hover:text-colors-evest-500 text-xl text-thin arabic-thin`}
                    btn1Href={'https://evest.onelink.me/o6qP/63b4f023'}
                    btn1Text={t('Get Evest App')}
                    btn1Alt={'Evest App'}
                    btn2Class={`min-[431px]:justify-self-center min-[360px]:text-[14px] min-[410px]:text-[16px] min-[430px]:text-[18px] min-[360px]:w-[150px] min-[410px]:w-[170px] min-[430px]:w-[170px] btn bg-transparent text-colors-accent border-colors-accent hover:text-colors-evest-500 text-xl text-thin arabic-thin`}
                    btn2Href={`https://mobile.evest.com/?lang=${locale}#/signup`}
                    btn2Text={t('Create Account')}
                    btn2Alt={'Create Account'}
                />
            </div>
            <Line way="bg-gradient-to-l" />
        </>
    );
}
