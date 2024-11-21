import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { getLocalizedPath } from '../../hooks/localizedPath';
import FooterLinksSection from './FooterLinksSection';
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function FooterLinks() {
    const t = useTranslations('FooterV2');
    const locale = useLocale();
    const [authLink, setAuthLink] = useState('https://support.evest.com');
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            setUserData(JSON.parse(localStorage.getItem('userData')));
        }
    }, []);

    const { data } = useSWR(
        `/api/goToHelpDesk?fullName=${userData ? userData.fullName : ''}&email=${userData ? userData.email : ''}`,
        fetcher
    );

    useEffect(() => {
        if (data && data.url) {
            setAuthLink(data.url); // Update the auth link when data is fetched
        } else {
            setAuthLink('https://support.evest.com'); // Fallback URL on error
        }
    }, [data]);

    const appleLinks = {
        en: `https://apps.apple.com/sa/app/evest-stock-forex-trading/id1560191184?l=en`,
        es: `https://apps.apple.com/sa/app/evest-stock-forex-trading/id1560191184?l=es`,
        ar: `https://apps.apple.com/sa/app/%D8%A7%D9%8A%D9%81%D8%B3%D8%AA-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AB%D9%85%D8%A7%D8%B1-%D9%88%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D8%A7%D9%84%D8%A7%D8%B3%D9%87%D9%85/id1560191184?l=ar`,
    };

    const apple = appleLinks[locale];

    const topInstruments = [
        {
            href: `/${locale}/trade-room/?asset=BTCUSD&lang=${locale}`,
            text: t('Bitcoin'),
            suffix: 'BTC',
        },
        {
            href: `/${locale}/trade-room/?asset=ETHUSD&lang=${locale}`,
            text: t('Ethereum'),
            suffix: 'ETH',
        },
        {
            href: `/${locale}/trade-room/?asset=SHBUSD.mln&lang=${locale}`,
            text: t('Shiba'),
            suffix: t('in Millions'),
        },
        {
            href: `/${locale}/trade-room/?asset=TESLA&lang=${locale}`,
            text: t('Tesla'),
        },
        {
            href: `/${locale}/trade-room/?asset=APPLE&lang=${locale}`,
            text: t('Apple'),
        },
        {
            href: `/${locale}/trade-room/?asset=NIO&lang=${locale}`,
            text: t('Nio'),
        },
    ];

    const tradingServices = [
        {
            href: `/${locale}/services/demo-account`,
            text: t('Demo Trading Account'),
        },
        {
            href: `/${locale}/services/zero-commission`,
            text: t('0% Stock Trading'),
        },
        { href: `/${locale}/services/eib`, text: t('Investment Baskets') },
        locale !== 'es' && {
            href: `/${locale}/services/islamic-account`,
            text: t('Islamic Trading Account'),
        },
        {
            href: `/${locale}/services/crypto`,
            text: t("CFD's on Crypto"),
        },
        {
            href: `/${locale}/services/commodities`,
            text: t('Commodities'),
        },
        {
            href: `/${locale}/services/currencies`,
            text: t('Currencies'),
        },
        { href: `/${locale}/services/indices`, text: t('Indices') },
    ].filter(Boolean); // Filter out null/undefined values like the conditional locale.

    const features = [
        { href: `/${locale}/educative/webinars`, text: t('Live Webinars') },
        {
            href: `https://academy.evest.com/?lang=${locale}`,
            text: t('Trading Academy'),
        },
        { href: `/${locale}/products/copy-trade`, text: t('Copy Trade') },
        { href: `/${locale}/products/analytics`, text: t('Evest Analytics') },
        {
            href: `/${locale}/products/trading-central`,
            text: t('Trading Central'),
        },
        { href: `/${locale}/products/tip-ranks`, text: t('Tip Ranks') },
        { href: `/${locale}/trade/trading-calculator`, text: t('Calculators') },
    ];

    const platforms = [
        { href: `/${locale}/platforms/trading-app`, text: t('Trading App') },
        { href: `/${locale}/platforms/web-trading`, text: t('Web Trading') },
        {
            href: `/${locale}/platforms/mobile-trading`,
            text: t('Mobile Trading'),
        },
        { href: `/${locale}/platforms/meta-trader`, text: t('Meta Trader 5') },
        { href: apple, text: t('IOS Trading App'), external: true },
        {
            href: `https://play.google.com/store/apps/details?id=com.pandats.evest&hl=${locale}`,
            text: t('Android Trading App'),
            external: true,
        },
    ];

    const SupportLinks = [
        {
            text: t('Help Center'),
            href: authLink,
        },
        {
            text: t('How to deposit withdraw'),
            href: 'https://support.evest.com/hc/en-us/sections/16828146332690-Deposit-withdrawal',
        },
        {
            text: t('How to Open an Account'),
            href: 'https://support.evest.com/hc/en-us/sections/16828130508562-My-Account',
        },
        {
            text: t('How to verify your account'),
            href: 'https://support.evest.com/hc/en-us/sections/16826916433426-Verification',
        },
        {
            text: t('Complaints'),
            href: getLocalizedPath(`/${locale}/evest/complaints`),
        },
    ];

    const PrivacyLinks = [
        {
            text: t('Documents & Policies'),
            href: getLocalizedPath(`/${locale}/evest/Documents-Policies`),
        },
        {
            text: t('Regulation and License'),
            href: getLocalizedPath(`/${locale}/evest/regulatory-authorization`),
        },
        {
            text: t('Privacy Policy'),
            href: getLocalizedPath(
                `/${locale}/documents-and-policies/privacy-policy`
            ),
        },
        {
            text: t('General Risk Disclosure'),
            href: getLocalizedPath(
                `/${locale}/documents-and-policies/risk-disclosure`
            ),
        },
        {
            text: t('Terms & Conditions'),
            href: getLocalizedPath(
                `/${locale}/documents-and-policies/terms-and-conditions`
            ),
        },
    ];

    const PartnersLinks = [
        {
            text: t('Invite a friend'),
            href: getLocalizedPath(`/${locale}/promotions/referral-program`),
        },
        {
            text: t('Partnership & Affiliate Program'),
            href: `https://evestpartners.com/${locale}`,
            external: true,
        },
        { text: t('Summer campaign'), href: '' },
        locale !== 'es' && { text: t('Ramadan campaign'), href: '' },
        {
            text: t('Evest Entertainment'),
            href: getLocalizedPath(`/${locale}/evest/entertainment`),
        },
        {
            text: t('Evest Talk'),
            href: getLocalizedPath(`/${locale}/evest/evest-talk`),
        },
        ,
    ].filter(Boolean);

    const AboutLinks = [
        {
            text: t('Evest Brand'),
            href: getLocalizedPath(`/${locale}/evest/evest`),
        },
        {
            text: t('Ali Hasan CEO'),
            href: getLocalizedPath(`/${locale}/evest/ceo`),
        },
        locale !== 'es' && {
            text: t('Our Ambassador'),
            href: getLocalizedPath(`/${locale}/evest/evest-ambassador`),
        },
        {
            text: t('Brand SpotLights'),
            href: getLocalizedPath(`/${locale}/evest/in-the-press`),
        },
        {
            text: t('Career with evest'),
            href: getLocalizedPath(`/${locale}/evest/careers`),
        },
        {
            text: t('Contact Us'),
            href: getLocalizedPath(`/${locale}/evest/contact-us`),
        },
    ].filter(Boolean);

    return (
        <div className="container flex flex-col sm:flex-row justify-between gap-y-8 gap-4 w-full sm:py-5 pt-5">
            <div className="grid gap-x-11 grid-cols-2 sm:grid-cols-1 sm:gap-y-4 w-[100%]">
                <FooterLinksSection
                    title={t('TOP INSTRUMENTS')}
                    items={topInstruments}
                />
                <FooterLinksSection
                    title={t('TRADING SERVICES')}
                    items={tradingServices}
                />
            </div>
            <div className="grid gap-x-11 grid-cols-2 sm:grid-cols-1 sm:gap-y-4 w-[100%]">
                <FooterLinksSection title={t('FEATURES')} items={features} />
                <FooterLinksSection title={t('PLATFORMS')} items={platforms} />
            </div>
            <div className="grid gap-x-11 grid-cols-2 sm:grid-cols-1 sm:gap-y-4 w-[100%]">
                <FooterLinksSection title={t('SUPPORT')} items={SupportLinks} />
                <FooterLinksSection
                    title={t('PRIVACY AND REGULATION')}
                    items={PrivacyLinks}
                />
            </div>
            <div className="grid gap-x-11 grid-cols-2 sm:grid-cols-1 sm:gap-y-4 w-[100%]">
                <FooterLinksSection
                    title={t('PARTNERS AND PROMOTIONS')}
                    items={PartnersLinks}
                />
                <FooterLinksSection title={t('ABOUT US')} items={AboutLinks} />
            </div>
        </div>
    );
}
