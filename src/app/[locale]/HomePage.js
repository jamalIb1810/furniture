'use client';
import { useLocale, useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations('HomePage2');
    const locale = useLocale();

    useEffect(() => {
        document.body?.scrollTo(0, 0);
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <div className="bg-colors-gray-100">
                <p
                    className={`text-center py-2 ${
                        locale == 'es' ? 'text-[12px]' : 'text-[14px]'
                    } lg:text-[16px]`}
                >
                    {t('Evest')}
                </p>
            </div>
        </Suspense>
    );
}
