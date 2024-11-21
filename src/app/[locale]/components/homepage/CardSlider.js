import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import whylimit from '/public/images/homepage/whylimit-bg.png';
import Arrow from '/public/icons/Arrow.png';

export default function CardSlider({ cards }) {
    const [middle, setMiddle] = useState(Math.floor(cards.length / 2));
    const t = useTranslations('HomePage.HomeSection3');

    const handlePrevClick = () => {
        setMiddle((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    };

    const handleNextClick = () => {
        setMiddle((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    };

    const getCardIndex = (index) => {
        const totalCards = cards.length;
        return (middle + index - 1 + totalCards) % totalCards;
    };

    return (
        <div className="flex justify-center items-center h-[25rem] w-[100%] gap-x-2">
            <Image
                src={Arrow}
                onClick={handlePrevClick}
                className="flip cursor-pointer mx-2 opacity-70 hover:opacity-100"
                alt="Arrow"
            />
            <div className="flex justify-between items-center gap-x-7 sm:w-[900px]">
                <AnimatePresence initial={false}>
                    {cards.map((_, index) => {
                        const cardIndex = getCardIndex(index);
                        const item = cards[cardIndex];
                        const isMiddle = index === 1; // Middle card is now the second one in the displayed array
                        return (
                            ![3, 4].includes(index) && (
                                <motion.div
                                    className={`card bg-gradient-to-b ${isMiddle ? 'from-colors-slate-300 to-colors-slate-200' : 'from-colors-slate-200 to-colors-slate-100'} w-[200px]`}
                                    key={cardIndex}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    // exit={{ opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    layout
                                    style={{
                                        width: isMiddle ? '20rem' : '14rem',
                                        height: isMiddle ? '22rem' : '14rem',
                                    }}
                                >
                                    <div className="absolute bottom-0 left-0 w-[100%] h-[100%]">
                                        <Image
                                            src={whylimit}
                                            className="w-[100%] h-[100%]"
                                            alt="bgLines"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center justify-center relative top-[-25%]">
                                        <motion.div
                                            className="flex justify-center items-center"
                                            animate={{
                                                width: isMiddle
                                                    ? '180px'
                                                    : '70px',
                                                height: isMiddle
                                                    ? '180px'
                                                    : '80px',
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={item.img}
                                                    alt="icon"
                                                    fill={true}
                                                    style={{
                                                        objectFit: 'contain',
                                                    }}
                                                />
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            className="relative flex flex-col justify-center items-center"
                                            transition={{ duration: 0.5 }}
                                        >
                                            <h6
                                                className={`pt-3 ${isMiddle ? 'text-xl text-bold' : 'text-sm'}`}
                                            >
                                                {t(item.title)}
                                            </h6>
                                            <motion.p
                                                className="pt-4 text-center"
                                                animate={{
                                                    fontSize: isMiddle
                                                        ? '15px'
                                                        : '12px',
                                                    width: isMiddle
                                                        ? '90%'
                                                        : '70%',
                                                    height: isMiddle
                                                        ? '100%'
                                                        : '50%',
                                                }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {t(item.subtitle)}
                                            </motion.p>
                                            <motion.div
                                                className="relative bottom-[-5%]"
                                                animate={{
                                                    opacity: isMiddle ? 1 : 0,
                                                }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {item.content}
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )
                        );
                    })}
                </AnimatePresence>
            </div>
            <Image
                src={Arrow}
                onClick={handleNextClick}
                className="flipEn cursor-pointer mx-2 opacity-70 hover:opacity-100"
                alt="Arrow"
            />
        </div>
    );
}
