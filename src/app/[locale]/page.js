import HomePage from './HomePage';

export async function generateMetadata({ params }) {
    // Get the locale (language)
    const lang = params.locale;

    const data = {
        en: {
            title: 'Evest Online Trading Platform | Zero commission on stocks',
            description:
                'Evest Zero commission on stocks, a reliable multi-asset Trading platform. Test strategies on demo account, replicate successful traders with Copy Trade',
            keywords: 'Zero commission ,  Trading Platform , evest , stocks',
            canonical: 'en',
        },
        es: {
            title: 'Opera en línea con evest | Cero comisión en acciones',
            description:
                'Evest Cero comisión en acciones , plataforma multiasetos confiable. Prueba estrategias en demo y replica operaciones exitosas',
            keywords: 'Cero comisión , replica operaciones , evest , acciones',
            canonical: 'es',
        },
        ar: {
            title: 'تداول اون لاين مع ايفست  | صفر عمولة على الاسهم',
            description:
                'ايفست صفر عمولة على الأسهم, منصة تداول متعددة الأصول وموثوقة اختبر استراتيجياتك على حساب تجريبي, استنسخ صفقات المستثمرين الناجحين مع خاصية نسخ التداول',
            keywords: 'صفر عمولة ,  منصة تداول , ايفست , الأسهم',
            canonical: 'ar',
        },
    };

    return {
        title: data[lang].title,
        description: data[lang].description,
        keywords: data[lang].keywords,
        metadataBase: new URL('https://www.evest.com'),
        alternates: {
            canonical: `https://www.evest.com/${data[lang].canonical}`,
        },
    };
}

export default function Page() {
    return <HomePage />;
}
