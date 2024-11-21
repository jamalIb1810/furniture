'use client';
import copyTrade from '/public/images/homepage/Copy-trade-image-1300.png';
import bracket from '/public/images/homepage/brackets-big.png';
import InnerSection from './InnerSection';
import { useMobile } from '../../../context/MobileContext';
import { useLocale, useTranslations } from 'next-intl';
import { getLocalizedPath } from '../../hooks/localizedPath';

export default function Section5() {
    const locale = useLocale();
    const isMobile = useMobile();
    const t = useTranslations('HomePage2.Copy Trade');

    const icons = [
        {
            src: '/icons/homepage/COPY TRADERS PORTFOLIO.svg',
            alt: 'icon',
            description: t('Copy leading traders portfolio'),
            width: 90,
        },
        {
            src: '/icons/homepage/MULTI LANGUAGE.svg',
            alt: 'icon',
            description: t('Multi language'),
            width: 45,
        },
        {
            src: '/icons/homepage/FILTER.svg',
            alt: 'icon',
            description: t('Filter by Market, Trends, Top Copied'),
            width: 120,
        },
        {
            src: '/icons/homepage/AUTO COPY TRADES INSTANTLY.svg',
            alt: 'icon',
            description: t('Auto-copy trades instantly'),
            width: 60,
        },
    ];
    const btns = [
        {
            text: t('Copy Trade'),
            className:
                'text-colors-primary-500 bg-transparent hover:bg-colors-primary-500 hover:text-colors-white',
            link: `${getLocalizedPath(`/${locale}/products/copy-trade`)}`,
        },
        {
            text: t('Create Account'),
            className:
                'bg-colors-primary-500 text-colors-white hover:text-colors-primary-500 hover:bg-colors-white',
            link: `${isMobile ? `https://mobile.evest.com/?lang=${locale}#/signup` : `/${locale}/sign-up`}`,
        },
    ];
    return (
        <InnerSection
            icons={icons}
            actionButtons={btns}
            LTR={true}
            bgColor={'white'}
            mainImage={copyTrade}
            bracketImage={bracket}
            title={t('Copy trade')}
            titleColor={'text-colors-evest-500'}
            subtitle={t('Leading Investors')}
            description={t('Automate success')}
            bracketWidth={isMobile ? 200 : 90}
            mainImageWidth={250}
            titleEn="CopyTrade"
        />
    );
}
