'use client';
import Image from 'next/image';
import brackets from '/public/images/homepage/brackets-big.png';
import Upcoming from './Upcoming';
import { useLocale, useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Section3() {
    const t = useTranslations('HomePage2.Upcoming');
    const locale = useLocale();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="py-4 bg-[#f7f7f7]"
        >
            <div className="container flex justify-start items-start gap-x-3">
                <Image
                    className={`FlipImage mt-2`}
                    src={brackets}
                    alt={'bracketsEvest'}
                    height={35}
                    width={35}
                />
                <div>
                    <p className="text-colors-evest-500 text-[38px] text-bold uppercase">
                        {t('UPCOMING')}
                    </p>
                    <p className="text-colors-evestGreen-500 text-2xl sm:text-4xl lg:text-[40px] text-thin font-semibold">
                        {t('Hybrid')}
                    </p>
                </div>
            </div>
            <div className="mt-10">
                <Upcoming />
            </div>
        </motion.div>
    );
}
