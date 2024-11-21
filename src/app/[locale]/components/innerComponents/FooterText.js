import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import styles from '../../../styles/navBarText.module.css';
import { getLocalizedPath } from '../../hooks/localizedPath';

export default function FooterText() {
    const t = useTranslations('FooterV2');
    const locale = useLocale();
    //function gets the current year
    const year = new Date().getFullYear();

    const disclimers = {
        en: (
            <>
                Trading Contracts For Difference (CFD) is highly speculative,
                carries a high level of risk and is not appropriate for every
                investor. Any and all information provided on this website is
                for general information purpose only, and has been prepared
                without taking your individual objectives, financial situation
                or needs into account. Before deciding to trade CFDs offered by{' '}
                <Link href={'https://www.evest.com'} className="text-[#80FFFF]">
                    www.evest.com
                </Link>{' '}
                , you should carefully consider your objectives, financial
                situation, needs and level of experience, and consider seeking
                independent professional advice. By trading, you may sustain a
                loss of some or all of your invested capital, therefore, you
                should not speculate with capital that you cannot afford to
                lose. You should be aware of all the risks associated with
                trading on margin. We strongly recommend that you read the full
                <Link
                    href={getLocalizedPath(
                        `/${locale}/documents-and-policies/risk-disclosure`
                    )}
                    className="text-[#80FFFF]"
                >
                    {' '}
                    Risk Disclosure{' '}
                </Link>
                Statement,
                <Link
                    href={getLocalizedPath(
                        `/${locale}/documents-and-policies/terms-and-conditions`
                    )}
                    className="text-[#80FFFF]"
                >
                    {' '}
                    Terms and Conditions{' '}
                </Link>
                and
                <Link
                    href={getLocalizedPath(
                        `/${locale}/documents-and-policies/privacy-policy`
                    )}
                    className="text-[#80FFFF]"
                >
                    {' '}
                    Privacy Policy{' '}
                </Link>
                prior to any trading activity.
            </>
        ),
        ar: (
            <>
                تداول عقود الفروقات (CFD) يُعد تكهنيًا للغاية، يحمل مستوى عالٍ
                من المخاطر ولا يُناسب كل مستثمر. جميع المعلومات المقدمة على هذا
                الموقع هي لأغراض المعلومات العامة فقط، وقد تم إعدادها دون أخذ
                أهدافك الفردية، الوضع المالي أو احتياجاتك بعين الاعتبار. قبل
                اتخاذ قرار بتداول عقود الفروقات التي تقدمها www.evest.com، يجب
                أن تفكر بعناية في أهدافك، الوضع المالي، احتياجاتك ومستوى خبرتك،
                وتفكر في طلب النصيحة المهنية المستقلة. من خلال التداول، قد تتكبد
                خسارة بعض أو كل رأس المال المستثمر، ولذلك، يجب ألا تتكهن برأس
                مال لا تستطيع تحمل خسارته. يجب أن تكون على دراية بجميع المخاطر
                المرتبطة بالتداول على الهامش. نوصي بشدة بأن تقرأ بيان{' '}
                <Link
                    href={getLocalizedPath(
                        `/${locale}/documents-and-policies/risk-disclosure`
                    )}
                    className="text-[#80FFFF]"
                >
                    {' '}
                    الإفصاح عن المخاطر{' '}
                </Link>{' '}
                بالكامل،
                <Link
                    href={getLocalizedPath(
                        `/${locale}/documents-and-policies/terms-and-conditions`
                    )}
                    className="text-[#80FFFF]"
                >
                    {' '}
                    الشروط والأحكام{' '}
                </Link>
                و
                <Link
                    href={getLocalizedPath(
                        `/${locale}/documents-and-policies/privacy-policy`
                    )}
                    className="text-[#80FFFF]"
                >
                    {' '}
                    سياسة الخصوصية{' '}
                </Link>{' '}
                قبل القيام بأي نشاط تداول.
            </>
        ),
        es: (
            <>
                Hacer trading con Contratos Por Diferencia (CFD) es altamente
                especulativo, conlleva un alto nivel de riesgo y no es apropiado
                para todos los inversores. Toda la información proporcionada en
                este sitio web tiene únicamente fines informativos generales y
                se ha elaborado sin tener en cuenta tus objetivos, situación
                financiera o necesidades individuales. Antes de decidir hacer
                trading con CFD ofrecidos por www.evest.com, debes considerar
                cuidadosamente tus objetivos, situación financiera, necesidades
                y nivel de experiencia, y considerar la posibilidad de buscar
                asesoramiento profesional independiente. Al hacer trading,
                puedes sufrir una pérdida de parte o de todo el capital
                invertido, por lo que no debes especular con un capital que no
                puedas permitirte perder. Debes ser consciente de todos los
                riesgos asociados al trading con margen. Te recomendamos
                encarecidamente que leas el Aviso Legal, los
                <Link
                    href={getLocalizedPath(
                        `/${locale}/documents-and-policies/terms-and-conditions`
                    )}
                    className="text-[#80FFFF]"
                >
                    {' '}
                    Términos y Condiciones{' '}
                </Link>
                y{' '}
                <Link
                    href={getLocalizedPath(
                        `/${locale}/documents-and-policies/privacy-policy`
                    )}
                    className="text-[#80FFFF]"
                >
                    {' '}
                    la Política de Privacidad{' '}
                </Link>{' '}
                antes de empezar a hacer trading.
            </>
        ),
    };

    const disclimer14 = disclimers[locale];

    const disclimer = [
        t('Disclimer1'),
        t('Disclimer2'),
        t('Disclimer3'),
        t('Disclimer4'),
        t('Disclimer5'),
        t('Disclimer6'),
        t('Disclimer7'),
        t('Disclimer8'),
        t('Disclimer9'),
        t('Disclimer10'),
        t('Disclimer11'),
        t('Disclimer12'),
        t('Disclimer13'),
        disclimer14,
        t('Disclimer15'),
        t('Disclimer16'),
        t('Disclimer17'),
        t('Disclimer18'),
    ];

    return (
        <footer className="footer py-4  bg-[#022A3A] pb-5 text-colors-white flex-col flex justify-evenly items-center px-5 lg:px-0">
            <div className={styles.NavbarFooter}>
                {disclimer.map((text, index) => (
                    <p
                        key={index}
                        style={{ color: index == 12 && '#F39B9B' }}
                        className={
                            styles.navbarSubText +
                            ' text-justify text-colors-white leading-snug'
                        }
                    >
                        {text}
                    </p>
                ))}
            </div>
            <div className="bg-[#022A3A] text-colors-white text-center py-5 text">
                <p>Evest &#8482; {year} all rights reserved</p>
            </div>
        </footer>
    );
}
