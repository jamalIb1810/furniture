// app/layout.js
import { GoogleTagManager } from '@next/third-parties/google';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { MobileProvider } from '../context/MobileContext';
import Coockies from './components/coockies';
import FooterV2 from './components/FooterV2';
import ModernNavBar from './components/ModernNavBar';
import ProgressBar from './components/ProgressBar';
import Firebase from './firebase.js';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });
const timeZone = 'Asia/Riyadh';

export const metadata = {
    title: 'Evest - Trade',
    description:
        'Evest Online Trading Platform: Elevate your experience with diverse online trading—ETFs, options, cryptocurrencies, and stocks with zero commission',
    keywords: [
        'Evest Online Trading Platform',
        'online trading',
        'Zero commission',
    ],
    metadataBase: new URL('https://www.evest.com'),
    alternates: {
        canonical: '/',
    },
};

export default async function RootLayout({ children }) {
    // eslint-disable-next-line
    const locale = useLocale();
    let translation;
    const headersList = headers();
    const isMobile = headersList.get('x-is-mobile') === 'true';

    try {
        translation = (await import(`../../translation/${locale}.json`))
            .default;
    } catch (error) {
        console.log(error);

        notFound();
    }

    return (
        <html
            lang={locale}
            data-theme="mytheme"
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
        >
            <body className={inter.className}>
                    <MobileProvider isMobile={isMobile}>
                        <NextIntlClientProvider
                            timeZone={timeZone}
                            locale={locale}
                            messages={translation}
                        >
                            <Coockies />
                            <ProgressBar />
                            <ModernNavBar />
                            <main>{children}</main>
                            <FooterV2 />
                        </NextIntlClientProvider>
                    </MobileProvider>
            </body>
            <GoogleTagManager gtmId="GTM-N6G9PB9" />
            <Firebase />
        </html>
    );
}
