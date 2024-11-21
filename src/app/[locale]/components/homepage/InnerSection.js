'use client';
import Image from 'next/image';
import Line from './Line';
import { useMobile } from '../../../context/MobileContext';
import { useLocale } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Buttons from '../innerComponents/Buttons';

export default function InnerSection({
    title,
    titleColor = 'text-colors-white',
    subtitle,
    description,
    icons,
    mainImage,
    bracketImage,
    bracketWidth,
    actionButtons,
    showLines = false,
    LTR = true,
    bgImage,
    bgColor = 'bg-colors-evest-500',
    titleEn,
    isSideImg = false,
}) {
    const locale = useLocale();
    const isMobile = useMobile();
    const columns = isMobile
        ? 1
        : icons.length <= 3
          ? 1
          : icons.length <= 6
            ? 2
            : 3;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <>
            {showLines && <Line way={'bg-gradient-to-r'} />}
            <div
                className={`relative min-[360px]:py-10 py-24 flex flex-col justify-center items-center ${bgColor} overflow-x-hidden overflow-y-hidden`}
            >
                {bgImage && (
                    <div className="absolute inset-0 w-full h-1/2">
                        <Image
                            src={bgImage}
                            fill
                            style={{ objectFit: 'fill' }}
                            alt="bg"
                        />
                    </div>
                )}
                {!isMobile ? (
                    <>
                        <motion.div
                            ref={ref}
                            className={`relative container py-4 flex flex-col ${isSideImg ? 'sm:flex-row' : 'sm:flex-row'} justify-between items-center ${LTR ? '' : 'flex-row-reverse'}`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <div className="text-center lg:text-left sm:w-[500px]">
                                <div className="flex flex-col sm:flex-row justify-start items-start gap-2">
                                    <div>
                                        <Image
                                            className={`FlipImage h-[150px] 2xl:h-[120px]`}
                                            src={bracketImage}
                                            alt="bracket"
                                            width={
                                                locale != 'es'
                                                    ? bracketWidth
                                                    : bracketWidth * 3
                                            }
                                            height={
                                                locale != 'es'
                                                    ? bracketWidth
                                                    : bracketWidth * 2
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2
                                            className={`text-3xl lg:text-6xl xl:text-5xl 2xl:text-6xl w-[110%] text-bold uppercase text-start ${titleColor}`}
                                        >
                                            {title}
                                        </h2>
                                        <h3
                                            className={`text-[43px] py-3 xl:text-[35px] 2xl:text-[43px] leading-none text-colors-evestGreen-500 text-start text-thin w-[110%] ${locale != 'ar' && '-mt-3'} `}
                                        >
                                            {subtitle}
                                        </h3>
                                        <p className="text-justify text-colors-evest-500 xl:text-[14px] 2xl:text-[16px]">
                                            {description}
                                        </p>
                                        <div className="relative flex justify-center items-center sm:items-start sm:justify-start mt-4">
                                            <div
                                                className={`grid grid-cols-${columns} gap-x-5 xl:gap-x-0 2xl:gap-x-5 xl:gap-x-3 w-full`}
                                            >
                                                {icons.map((icon, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center justify-start gap-x-2"
                                                    >
                                                        <div
                                                            className={`flex basis-1/4 items-center justify-start h-24 `}
                                                        >
                                                            <Image
                                                                src={icon.src}
                                                                width={
                                                                    icon.width
                                                                }
                                                                height={
                                                                    icon.width
                                                                }
                                                                alt={icon.alt}
                                                            />
                                                        </div>
                                                        <div
                                                            className={`flex items-center justify-start h-24 basis-3/4`}
                                                        >
                                                            <p
                                                                className="text-start text-sm text-colors-evest-500"
                                                                dangerouslySetInnerHTML={{
                                                                    __html: icon.description,
                                                                }}
                                                            ></p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <Buttons
                                            divClass={
                                                'flex justify-center lg:justify-start gap-x-4'
                                            }
                                            btn1Class={`btn border border-colors-evestGreen-500  text-[1.1rem] w-[170px] 2xl:w-[215px] ${locale == 'es' ? ' xl:w-[210px] ' : 'xl:w-[190px]'} text-thin ${actionButtons[0].className}`}
                                            btn1Href={actionButtons[0].link}
                                            btn1Text={actionButtons[0].text}
                                            btn1Alt={actionButtons[0].alt}
                                            btn2Class={`btn border border-colors-evestGreen-500  text-[1.1rem] w-[170px] 2xl:w-[215px] ${locale == 'es' ? ' xl:w-[210px] ' : 'xl:w-[190px]'} text-thin ${actionButtons[1].className}`}
                                            btn2Href={actionButtons[1].link}
                                            btn2Text={actionButtons[1].text}
                                            btn2Alt={actionButtons[1].alt}
                                        />
                                    </div>
                                </div>
                            </div>
                            {!isSideImg && (
                                <div className="relative w-[450px] h-[450px] min-[820px]:w-[300px] xl:w-[600px] 2xl:h-[500px]">
                                    <Image
                                        className="min-[820px]:ml-6 min-[1023px]:ml-10"
                                        src={mainImage}
                                        alt="Main Image"
                                        fill={true}
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            )}
                        </motion.div>
                        {isSideImg && (
                            <div
                                className={`absolute ${locale === 'ar' ? 'sm:-left-[35%] lg:-left-[70%] xl:-left-[40%] 2xl:-left-[15%] min-[2560px]:left-0 min-[1023px]:-left-[50%] ' : 'min-[820px]:-right-[50%] sm:-right-[35%] min-[1023px]:-right-[50%] min-[1136px]:-right-[30%] min-[1364px]:-right-[20%] 2xl:-right-[15%] min-[2560px]:right-[14%]'} min-[820px]:bottom-10 overflow-hidden`}
                            >
                                <Image
                                    src={mainImage}
                                    alt="Main Image"
                                    width={1200}
                                    height={900}
                                    className="min-[820px]:w-[700px] min-[1023px]:h-[600px] min-[1536px]:w-[800px] min-[1536px]:h-[600px] min-[1920px]:h-[650px] min-[1920px]:w-[1000px] min-[1023px]:w-[900px] min-[1536px]:h-[650px] min-[1536px]:w-[900px]"
                                />
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <motion.div
                            ref={ref}
                            className={`container mx-auto relative grid grid-cols-[0.3fr_2fr] grid-rows-1 ${titleEn !== 'CopyTrade' ? (locale === 'ar' ? 'pl-0' : 'pr-0') : locale === 'ar' ? 'pl-0' : 'pr-0'}`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <div className="row-span-3 col-span-1">
                                <Image
                                    className={'FlipImage'}
                                    src={bracketImage}
                                    alt="bracket"
                                    width={bracketWidth / 4}
                                    height={bracketWidth / 4}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start col-span-1">
                                <div
                                    className={`text-bold text-[2.45rem] -mt-2 ${locale === 'es' ? 'leading-none' : ''}`}
                                >
                                    {title}
                                </div>
                                <div className="text-colors-evestGreen-600 text-[1.8rem] text-thin -mt-3">
                                    {subtitle}
                                </div>
                                <div className="text-colors-evest-500 text-justify w-[92%] mt-2">
                                    {description}
                                </div>
                            </div>
                            {titleEn !== 'CopyTrade' && (
                                <>
                                    <div
                                        className={`container flex relative mx-auto pt-5 ${locale === 'ar' ? 'pl-0 min-[360px]:-mr-[10%] min-[390px]:-mr-[15%] min-[430px]:-mr-[5%] xl:-mr-0' : 'pr-0 min-[360px]:-ml-[15%] min-[410px]:-ml-[5%] min-[1280px]:-ml-0'}`}
                                    >
                                        <div className="icons grid grid-cols-1 min-[1280px]:grid-cols-2 gap-y-4">
                                            {icons.map((icon, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex justify-center items-center gap-x-3"
                                                >
                                                    <Image
                                                        src={icon.src}
                                                        width={40}
                                                        height={icon.width}
                                                        alt={icon.alt}
                                                    />
                                                    <p
                                                        className="mt-2 text-sm text-colors-evest-500 w-[120px] "
                                                        dangerouslySetInnerHTML={{
                                                            __html: icon.description,
                                                        }}
                                                    ></p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="w-[120px]"></div>
                                    </div>
                                    <div
                                        className={`absolute bottom-10 ${locale === 'ar' ? '-left-28 min-[760px]:-bottom-14 min-[1280px]:-bottom-40 min-[1280px]:-left-0' : '-right-28 min-[760px]:-bottom-10 min-[1280px]:-right-0 min-[1280px]:-bottom-24'} flex justify-center items-center overflow-x-hidden`}
                                    >
                                        <Image
                                            className={`FlipImage min-[760px]:w-[450px] min-[1280px]:w-[400px] `}
                                            src={mainImage}
                                            alt="Main Image"
                                            width={300}
                                            height={520}
                                        />
                                    </div>
                                </>
                            )}
                        </motion.div>
                        {titleEn === 'CopyTrade' && (
                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                className="container relative mx-auto pt-5"
                            >
                                <div className="flex flex-row-reverse gap-5 min-[1280px]:gap-24 justify-center">
                                    <div className="icons flex flex-col gap-y-4">
                                        {icons.map((icon, idx) => (
                                            <div
                                                key={idx}
                                                className="flex justify-center items-center gap-x-3"
                                            >
                                                <Image
                                                    src={icon.src}
                                                    width={45}
                                                    height={icon.width}
                                                    alt={icon.alt}
                                                />
                                                <p
                                                    className="mt-2 text-sm text-colors-evest-500 w-[120px]"
                                                    dangerouslySetInnerHTML={{
                                                        __html: icon.description,
                                                    }}
                                                ></p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="relative flex justify-center items-center">
                                        <Image
                                            src={mainImage}
                                            alt="Main Image"
                                            className="min-[760px]:w-[250px]"
                                            width={180}
                                            height={120}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        <Buttons
                            divClass={`container relative mx-auto flex py-7 justify-around min-[760px]:justify-center min-[760px]:gap-5 min-[760px]:pt-20 ${locale == 'ar' ? titleEn !== 'CopyTrade' && 'min-[1280px]:pt-40' : 'min-[1280px]:pt-24'} items-center`}
                            btn1Class={`btn border border-colors-evestGreen-500 text-colors-evestGreen-500 min-[360px]:w-[150px] min-[410px]:w-[170px] ${actionButtons[0].className}`}
                            btn1Href={actionButtons[0].link}
                            btn1Text={actionButtons[0].text}
                            btn1Alt={actionButtons[0].alt}
                            btn2Class={`btn border border-colors-evestGreen-500 text-colors-evestGreen-500 min-[360px]:w-[150px] min-[410px]:w-[170px] ${actionButtons[1].className}`}
                            btn2Href={actionButtons[1].link}
                            btn2Text={actionButtons[1].text}
                            btn2Alt={actionButtons[1].alt}
                        />
                    </>
                )}
            </div>
            {showLines && <Line way="bg-gradient-to-l" />}
        </>
    );
}
