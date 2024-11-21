'use client';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useMobile } from '../../../context/MobileContext';
import academyPhone from '/public/images/homepage/academyPhone.png';
export default function AcademyStrip() {
    const t = useTranslations('HomePage2.AcademyStrip');
    const isMobile = useMobile();
    const locale = useLocale();

    return (
        <div
            className={`${isMobile ? 'gap-4 ' : ' gap-3'} flex-row py-3 flex justify-center items-center main-content`}
        >
            {isMobile ? (
                <>
                    <Image
                        src={academyPhone}
                        className={`w-[60px] h-[80px]`}
                        alt="breast cancer"
                    />
                    <div className="w-[80%] text-center">
                        <p
                            className={`text-[#314147] ${isMobile ? `text-[18px] ${locale == 'es' ? 'min-[1280px]:text-[16px]' : 'min-[1280px]:text-[18px]'}` : 'min-[1023px]:text-[14px] min-[1280px]:text-[16px] min-[1920px]:text-[22px]'}  font-bold`}
                        >
                            {t('Discover')}
                        </p>
                        <p
                            className={`text-[#058080] ${isMobile ? `text-[14px] ${locale == 'es' ? 'min-[1280px]:text-[16px]' : 'min-[1280px]:text-[18px]'}` : 'min-[1023px]:text-[14px] min-[1280px]:text-[16px] min-[1920px]:text-[22px]'}`}
                        >
                            {t('revolution')}
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <p
                        className={`text-[#314147] ${isMobile ? `text-[12px] ${locale == 'es' ? 'min-[1280px]:text-[16px]' : 'min-[1280px]:text-[18px]'}` : 'min-[1023px]:text-[14px] min-[1280px]:text-[16px] min-[1920px]:text-[22px]'}  font-bold`}
                    >
                        {t('Discover')}
                    </p>
                    <Image
                        src={academyPhone}
                        className={`${isMobile ? 'hidden min-[1280px]:flex w-[40px] h-[40px]' : 'w-[60px] h-[80px]'} `}
                        alt="breast cancer"
                    />
                    <p
                        className={`text-[#058080] ${isMobile ? `text-[10px] ${locale == 'es' ? 'min-[1280px]:text-[16px]' : 'min-[1280px]:text-[18px]'}` : 'min-[1023px]:text-[14px] min-[1280px]:text-[16px] min-[1920px]:text-[22px]'}`}
                    >
                        {t('revolution')}
                    </p>
                </>
            )}
        </div>
    );
}
