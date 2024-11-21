'use client';
import bg from '/public/images/homepage/bg-line-pattern.png';
import laptop from '/public/images/homepage/full-image.png';
import laptop2 from '/public/images/homepage/half-image.png';
import bracket from '/public/images/homepage/brackets-big.png';
import InnerSection from './InnerSection';
import { useMobile } from '../../../context/MobileContext';
import { getLocalizedPath } from '../../hooks/localizedPath';
import { useLocale, useTranslations } from 'next-intl';

export default function Section4() {
    const t = useTranslations('HomePage2.Crisp Clear');
    const locale = useLocale();
    const isMobile = useMobile();
    const icons = [
        {
            src: '/icons/homepage/SECURED DEPOSITS.svg',
            alt: 'icon',
            description: `${t('Secured deposits')},<br> ${t('premium bankers')}`,
            width: 50,
        },
        {
            src: '/icons/homepage/ASSISTANCE SUPPORT.svg',
            alt: 'icon',
            description: t('Assistance and support services'),
            width: 65,
        },
        {
            src: '/icons/homepage/MULTI LANGUAGE.svg',
            alt: 'icon',
            description: t('Multi-language'),
            width: 50,
        },
        {
            src: '/icons/homepage/ACCESS FROM ANY WEB BROWSER.svg',
            alt: 'icon',
            description: t('Access from any web browser services'),
            width: 50,
        },
        {
            src: '/icons/homepage/ACCESS ADV TRADING TOOLS.svg',
            alt: 'icon',
            description: t('Access advanced trading tools'),
            width: 60,
        },
    ];
    const btns = [
        {
            text: t('Start Trading Now'),
            className:
                'text-colors-white bg-colors-primary-500 hover:text-colors-primary-500 hover:bg-colors-white',
            link: `${isMobile ? `https://mobile.evest.com/?lang=${locale}#/signup` : `/${locale}/sign-up`}`,
            alt: 'Start Trading',
        },
        {
            text: t('Try Demo Account'),
            className:
                'text-colors-primary-500 bg-transparent hover:bg-colors-primary-500 hover:text-colors-white',
            link: `${getLocalizedPath(`/${locale}/services/demo-account`)}`,
            alt: 'Demo Account',
        },
    ];
    return (
        <InnerSection
            title={t('CRISP CLEAR')}
            subtitle={t('Web Trading Platform')}
            description={t('all-new')}
            icons={icons}
            actionButtons={btns}
            mainImage={isMobile ? laptop2 : laptop}
            bracketImage={bracket}
            bgColor={'bg-[#f7f7f7]'}
            bgImage={bg}
            titleColor={'text-colors-evest-500'}
            LTR={true}
            bracketWidth={250}
            isSideImg={true}
        />
    );
}
