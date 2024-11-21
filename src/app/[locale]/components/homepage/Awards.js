'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { useMobile } from '../../../context/MobileContext';
import { useLocale, useTranslations } from 'next-intl';
import bracket from '/public/images/homepage/brackets-big.png';
import Image from 'next/image';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Alert() {
    const locale = useLocale();
    const isMobile = useMobile();
    const t = useTranslations('HomePage2.Awards');

    const { data } = useSWR(`/api/awards?lang=${locale}`, fetcher);

    return (
        <>
            <div className="flex items-center justify-center pt-14 gap-x-2 pb-10 container mx-auto ">
                <div
                    className={`relative self-baseline ${locale == 'ar' ? 'min-[360px]:w-[150px] min-[360px]:h-[100px] min-[410px]:w-[120px] lg:h-[130px] lg:w-[80px] ' : 'min-[360px]:w-[170px] min-[360px]:h-[90px] min-[410px]:w-[150px] lg:h-[130px] lg:w-[100px]'} min-[760px]:h-[130px] ${locale !== 'es' ? 'min-[800px]:w-[100px]' : 'min-[800px]:w-[120px]'}  xl:w-[60px] xl:h-[120px]`}
                >
                    <Image
                        className={`FlipImage`}
                        src={bracket}
                        fill
                        alt="bracket"
                    />
                </div>
                <div className="flex flex-col justify-center items-start gap-y-1">
                    <p
                        className={`sm:text-5xl 2xl:text-6xl text-bold  text-colors-evest-500 text-[2rem] leading-none ${locale === 'es' && 'lg:text-[3rem]'}`}
                    >
                        <span className="text-[#058080] text-[37px] sm:text-5xl 2xl:text-6xl text-bold">
                            {t('Our Awards')}
                        </span>{' '}
                        {t('Recognitions')}
                    </p>
                    <p className=" text-colors-evest-500 mt-2 sm:w-[84%] lg:text-[18px] xl:text-[16px] 2xl:text-[18px]">
                        {t('We')}
                    </p>
                </div>
            </div>
            {data ? (
                isMobile ? (
                    <>
                        <Swiper
                            slidesPerView={isMobile ? 1 : 4}
                            spaceBetween={isMobile ? 0 : 20}
                            centeredSlides={false}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: true,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            speed={2000}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className={`upcomingSlider min-[1280px]:!hidden ${!isMobile && 'centeredImages'}`}
                        >
                            {data
                                .slice()
                                .reverse()
                                .map((event, index) => (
                                    <SwiperSlide
                                        className={`h-auto ${locale == 'es' && 'gird'}`}
                                        key={index}
                                    >
                                        <div className="flex flex-col items-center">
                                            <Image
                                                src={
                                                    event.yoast_head_json
                                                        .og_image &&
                                                    event.yoast_head_json
                                                        .og_image[0] &&
                                                    event.yoast_head_json
                                                        .og_image[0].url
                                                }
                                                alt={event.title.rendered}
                                                width={200}
                                                height={200}
                                                className={`w-[80%]`}
                                            />
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: event.title
                                                        .rendered,
                                                }}
                                                className="px-10 text-center"
                                            ></p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                        <div
                            className={`${isMobile ? 'hidden min-[1280px]:flex' : 'hidden'}  py-10 px-20 `}
                        >
                            {data
                                .slice()
                                .reverse()
                                .map((event, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center"
                                    >
                                        <Image
                                            className="w-[60%]"
                                            src={
                                                event.yoast_head_json
                                                    .og_image &&
                                                event.yoast_head_json
                                                    .og_image[0] &&
                                                event.yoast_head_json
                                                    .og_image[0].url
                                            }
                                            alt={event.title.rendered}
                                            width={200}
                                            height={200}
                                        />
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: event.title.rendered,
                                            }}
                                            className="px-10 text-center"
                                        ></p>
                                    </div>
                                ))}
                        </div>
                    </>
                ) : (
                    <div className="grid grid-cols-6 gap-y-5 py-10 px-10">
                        {data
                            .slice()
                            .reverse()
                            .map((event, index) => (
                                <div key={index} className="grid gap-2">
                                    <Image
                                        className={`${locale != 'en' ? index != 5 && 'w-[220px]' : 'w-[160px]'} h-[160px] justify-self-center`}
                                        src={
                                            event.yoast_head_json.og_image &&
                                            event.yoast_head_json.og_image[0] &&
                                            event.yoast_head_json.og_image[0]
                                                .url
                                        }
                                        alt={event.title.rendered}
                                        width={160}
                                        height={160}
                                    />
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: event.title.rendered,
                                        }}
                                        className="w-[80%] justify-self-center px-5 text-center"
                                    ></p>
                                </div>
                            ))}
                    </div>
                )
            ) : (
                <div className="w-full flex gap-2">
                    {isMobile ? (
                        <div className="skeleton bg-colors-gray-400 h-[250px] w-full  py-2 animate-pulse"></div>
                    ) : (
                        [1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="skeleton bg-colors-gray-400 h-[250px] w-full px-5 py-2 animate-pulse"
                            ></div>
                        ))
                    )}
                </div>
            )}
        </>
    );
}
