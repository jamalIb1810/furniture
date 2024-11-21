'use client';
import { motion, useInView } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useMobile } from '../../../context/MobileContext';
import { getLocalizedPath } from '../../hooks/localizedPath';
import CardSlider from './CardSlider';
import Section3MobileSlider from './Seciton6MobileSlider';
import bracket from '/public/images/homepage/brackets-big.png';

export default function Section6() {
    const locale = useLocale();
    const t = useTranslations('HomePage.HomeSection3');
    const tSlider = useTranslations('HomePage2.Slider');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const cards =
        locale == 'es'
            ? [
                  {
                      id: 1,
                      title: 'Evest Analytics',
                      subtitle: 'AI',
                      content: (
                          <>
                              <Link
                                  href={getLocalizedPath(
                                      `/${locale}/products/analytics`
                                  )}
                                  className="btn bg-[#058080] text-colors-white w-[215px] h-[30px]  text-[1rem] mt-[20px] rounded-[10px] text-thin"
                              >
                                  {t('Evest Analytics')}
                              </Link>
                          </>
                      ),
                      img: '/images/homepage/ANALYTICS1.svg',
                  },
                  {
                      id: 3,
                      title: 'Investment Baskets',
                      subtitle: 'original',
                      content: (
                          <>
                              <Link
                                  href={getLocalizedPath(
                                      `/${locale}/services/eib`
                                  )}
                                  className="btn bg-[#058080] text-colors-white w-[215px] h-[30px] text-[1rem] mt-[20px] rounded-[10px] text-thin"
                              >
                                  {t('Investment Baskets')}
                              </Link>
                          </>
                      ),
                      img: '/images/eggsbasket.webp',
                  },
                  {
                      id: 4,
                      title: 'Trading Central',
                      subtitle: 'When',
                      content: (
                          <>
                              <Link
                                  href={getLocalizedPath(
                                      `/${locale}/products/trading-central`
                                  )}
                                  className="btn bg-[#058080] text-colors-white w-[215px] h-[30px]  text-[1rem] mt-[20px] rounded-[10px] text-thin"
                              >
                                  {t('Trading Central')}
                              </Link>
                          </>
                      ),
                      img: '/images/tradingcentral.webp',
                  },
                  {
                      id: 5,
                      title: 'Tip Ranks',
                      subtitle: 'TipRanks',
                      content: (
                          <>
                              <Link
                                  href={getLocalizedPath(
                                      `/${locale}/products/tip-ranks`
                                  )}
                                  className="btn bg-[#058080] text-colors-white w-[215px] h-[30px]  text-[1rem] mt-[20px] rounded-[10px] text-thin"
                              >
                                  {t('Tip Ranks')}
                              </Link>
                          </>
                      ),
                      img: '/images/tipranks 8.webp',
                  },
              ]
            : [
                  {
                      id: 1,
                      title: 'Evest Analytics',
                      subtitle: 'AI',
                      content: (
                          <>
                              <Link
                                  href={getLocalizedPath(
                                      `/${locale}/products/analytics`
                                  )}
                                  className="btn bg-[#058080] text-colors-white w-[215px] h-[30px]  text-[1rem] mt-[20px] rounded-[10px] text-thin"
                              >
                                  {t('Evest Analytics')}
                              </Link>
                          </>
                      ),
                      img: '/images/homepage/ANALYTICS1.svg',
                  },
                  {
                      id: 2,
                      title: 'Islamic Accounts',
                      subtitle: 'A interest free account',
                      content: (
                          <>
                              <Link
                                  href={getLocalizedPath(
                                      `/${locale}/services/islamic-account`
                                  )}
                                  className="btn bg-[#058080] text-colors-white w-[215px] h-[30px]  text-[1rem] mt-[20px] rounded-[10px] text-thin"
                              >
                                  {t('Islamic Accounts')}
                              </Link>
                          </>
                      ),
                      img: '/images/islamic.webp',
                  },
                  {
                      id: 3,
                      title: 'Investment Baskets',
                      subtitle: 'original',
                      content: (
                          <>
                              <Link
                                  href={getLocalizedPath(
                                      `/${locale}/services/eib`
                                  )}
                                  className="btn bg-[#058080] text-colors-white w-[215px] h-[30px]  text-[1rem] mt-[20px] rounded-[10px] text-thin"
                              >
                                  {t('Investment Baskets')}
                              </Link>
                          </>
                      ),
                      img: '/images/eggsbasket.webp',
                  },
                  {
                      id: 4,
                      title: 'Trading Central',
                      subtitle: 'When',
                      content: (
                          <>
                              <Link
                                  href={getLocalizedPath(
                                      `/${locale}/products/trading-central`
                                  )}
                                  className="btn bg-[#058080] text-colors-white w-[215px] h-[30px]  text-[1rem] mt-[20px] rounded-[10px] text-thin"
                              >
                                  {t('Trading Central')}
                              </Link>
                          </>
                      ),
                      img: '/images/tradingcentral.webp',
                  },
                  {
                      id: 5,
                      title: 'Tip Ranks',
                      subtitle: 'TipRanks',
                      content: (
                          <>
                              <Link
                                  href={getLocalizedPath(
                                      `/${locale}/products/tip-ranks`
                                  )}
                                  className="btn bg-[#058080] text-colors-white w-[215px] h-[30px]  text-[1rem] mt-[20px] rounded-[10px] text-thin"
                              >
                                  {t('Tip Ranks')}
                              </Link>
                          </>
                      ),
                      img: '/images/tipranks 8.webp',
                  },
              ];
    const isMobile = useMobile();

    return (
        <motion.div
            className="bg-[#C7C8C9] bg-opacity-[10%] min-[360px]:py-5 py-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <div className="container mx-auto flex flex-col gap-y-3 items-center justify-center ">
                <div className="flex items-center justify-center pt-14 gap-x-2 pb-10">
                    <div
                        className={`relative self-baseline ${locale == 'ar' ? 'min-[360px]:w-[150px] min-[360px]:h-[100px] min-[410px]:w-[120px] min-[800px]:w-[100px] lg:h-[130px] lg:w-[80px]' : 'min-[360px]:w-[170px] min-[360px]:h-[90px] min-[410px]:w-[150px] lg:h-[130px] lg:w-[100px]'} min-[760px]:h-[130px] xl:w-[60px] xl:h-[120px]`}
                    >
                        <Image
                            className={`FlipImage `}
                            src={bracket}
                            fill
                            alt="bracket"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-y-1">
                        <p
                            className={`sm:text-5xl 2xl:text-6xl text-bold text-colors-evest-500 text-[2rem] ${locale === 'es' && 'lg:text-[3rem]'}`}
                        >
                            {tSlider('Why limit to just Copy Trade?')}
                        </p>
                        <p className="lg:text-5xl sm:text-[2.55rem] text-2xl xl:text-6xl 2xl:text-7xl text-thin text-colors-evestGreen-500">
                            {tSlider('Maximize your investments')}
                        </p>
                        <p className=" text-colors-evest-500 mt-2 sm:w-[84%] lg:text-[18px] xl:text-[16px] 2xl:text-[18px]">
                            {tSlider('Explore')}
                        </p>
                    </div>
                </div>

                <div ref={ref} className="w-full">
                    <div
                        className={`min-[360px]:py-0 py-10 relative ${isMobile ? 'flex min-[1280px]:hidden' : 'hidden'}  items-center w-full justify-between  px-5 sm:px-10 lg:px-20 xl:px-32`}
                    >
                        <Section3MobileSlider cards={cards} />
                    </div>

                    <div
                        className={`my-10 ${isMobile ? 'hidden min-[1280px]:flex' : 'flex'}  justify-center items-center w-[100%]`}
                    >
                        <CardSlider
                            cards={cards.map((card) => ({
                                ...card,
                                isInView,
                            }))}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
