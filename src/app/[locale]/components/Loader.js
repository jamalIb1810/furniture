import { useTranslations } from 'next-intl';

export default function Loader() {
    const t = useTranslations('global');
    return (
        <div className="flex justify-center items-center flex-col">
            <span className="loading loading-bars loading-lg bg-colors-accent"></span>
            <h2>{t('Loading')}</h2>
        </div>
    );
}
