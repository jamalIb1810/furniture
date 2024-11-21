/* eslint-disable @next/next/no-img-element */
'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import useSWR from 'swr';
import { useMobile } from '../../../context/MobileContext';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Upcoming() {
    const locale = useLocale();
    const isMobile = useMobile();
    const { data } = useSWR(`/api/upcomingEvents?lang=${locale}`, fetcher);
    return data ? (
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
                className={`upcomingSlider bg-[#f7f7f7] ${isMobile ? 'min-[1280px]:!hidden' : '!hidden'}`}
            >
                {data
                    .slice()
                    .reverse()
                    .map((event, index) => (
                        // Using original image tag until we found a solution for the quality of next image tag
                        <SwiperSlide
                            className={`h-auto  ${locale == 'es' && 'gird'}`}
                            key={index}
                        >
                            <Link
                                href={event.title.rendered}
                                className={`${locale == 'es' && 'self-center'} flex`}
                                target="_blank"
                            >
                                <img
                                    src={
                                        event.yoast_head_json.og_image &&
                                        event.yoast_head_json.og_image[0] &&
                                        event.yoast_head_json.og_image[0].url
                                    }
                                    alt={
                                        event.yoast_head_json.og_image &&
                                        event.yoast_head_json.og_image[0] &&
                                        event.yoast_head_json.og_image[0].url
                                    }
                                    width={200}
                                    height={200}
                                    className={`w-[100%]`}
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
            </Swiper>
            <Swiper
                slidesPerView={4}
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
                className={`upcomingSlider bg-[#f7f7f7]  ${isMobile ? '!hidden min-[1280px]:!grid justify-center' : locale == 'es' ? 'centeredImages ' : ''}`}
            >
                {data
                    .slice()
                    .reverse()
                    .map((event, index) => (
                        // Using original image tag until we found a solution for the quality of next image tag
                        <SwiperSlide
                            className={`h-auto  ${locale == 'es' && 'gird'}`}
                            key={index}
                        >
                            <Link
                                href={event.title.rendered}
                                className={`${locale == 'es' && 'self-center'} flex`}
                                target="_blank"
                            >
                                <img
                                    src={
                                        event.yoast_head_json.og_image &&
                                        event.yoast_head_json.og_image[0] &&
                                        event.yoast_head_json.og_image[0].url
                                    }
                                    alt={
                                        event.yoast_head_json.og_image &&
                                        event.yoast_head_json.og_image[0] &&
                                        event.yoast_head_json.og_image[0].url
                                    }
                                    width={200}
                                    height={200}
                                    className={`w-[100%]`}
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
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
    );
}
