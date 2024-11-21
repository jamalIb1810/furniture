import Image from 'next/image';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import rightArrow from '/public/icons/rightArrow.png';
import leftArrow from '/public/icons/leftArrow.png';
import whylimit from '/public/images/homepage/whylimit-bg.png';

export default function Section3MobileSlider({ cards }) {
    const locale = useLocale();
    const t = useTranslations('HomePage.HomeSection3');
    const [selected, setSelected] = useState(2);
    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);
    const [nextSelected, setnextSelected] = useState(false);
    const [prevSelected, setprevSelected] = useState(false);

    const handlePrevClick = () => {
        setTimeout(() => {
            setRight(false);
            if (selected > 0) {
                setSelected(selected - 1);
            } else {
                setSelected(cards.length - 1);
            }
            setprevSelected(true);
        }, 400);
    };
    const handleNextClick = () => {
        setTimeout(() => {
            if (selected < cards.length - 1) {
                setSelected(selected + 1);
            } else {
                setSelected(0);
            }
            setnextSelected(true);
        }, 400);
    };
    return (
        <>
            <Image
                src={locale == 'ar' ? rightArrow : leftArrow}
                alt="leftArrow"
                className="leftArrow w-[9.19px] h-[16px] md:w-[14.36px] md:h-[25px] cursor-pointer"
                onClick={() => {
                    locale == 'ar' ? setLeft(true) : setRight(true),
                        locale == 'ar' ? handleNextClick() : handlePrevClick();
                }}
            />
            <div className="carousel-wrapper items-center h-[600px] w-screen flex justify-center">
                {cards.map((card, index) => (
                    <div
                        onAnimationEnd={() =>
                            left == true
                                ? setLeft(false)
                                : nextSelected
                                  ? setnextSelected(false)
                                  : prevSelected
                                    ? setprevSelected(false)
                                    : ''
                        }
                        key={card.id}
                        className={
                            selected === index
                                ? `flex h-[450px]  ${left ? 'animate-left' : right ? 'animate-right' : ''} ${nextSelected ? 'animate-nextSmall' : prevSelected ? 'animate-prevSmall' : ''} flex-col relative my-0 text-center w-[90%] active card `
                                : 'hidden'
                        }
                        style={
                            card.id == 5
                                ? {
                                      background:
                                          'linear-gradient(180deg, #D9D0DE -22.69%, rgba(217, 208, 222, 0.2) 113.34%)',
                                  }
                                : card.id == 4
                                  ? {
                                        background:
                                            'linear-gradient(180deg, #CCD7EF -22.69%, rgba(204, 215, 239, 0.2) 113.34%)',
                                    }
                                  : card.id == 2
                                    ? {
                                          background:
                                              'linear-gradient(180deg, #CCD7EF -22.69%, rgba(204, 215, 239, 0.2) 113.34%)',
                                      }
                                    : {
                                          background:
                                              'linear-gradient(180deg, #CCD4D8 -22.69%, rgba(204, 212, 216, 0.1) 113.34%)',
                                      }
                        }
                    >
                        <div className="absolute bottom-0 left-0 w-[100%] h-[100%]">
                            <Image
                                src={whylimit}
                                className="w-[100%] h-[100%]"
                                alt="bgLines"
                            />
                        </div>
                        <div className="relative bottom-[80px] flex justify-center items-center">
                            <Image
                                src={card.img}
                                alt="icon"
                                width={230}
                                height={261}
                            />
                        </div>
                        <div className="card-title self-center relative bottom-[60px] font-[325] text-[16px]">
                            <p className="text-[20px] text-bold text-[#072A38]">
                                {t(card.title)}
                            </p>
                        </div>
                        <div className="relative bottom-[50px]">
                            <p className="text-bold text-[16px] mt-10 px-3 text-start text-[#072A38]">
                                {t(card.subtitle)}
                            </p>
                        </div>
                        <div className="relative bottom-[40px]">
                            {card.content}
                        </div>
                    </div>
                ))}
            </div>
            <Image
                src={locale == 'ar' ? leftArrow : rightArrow}
                alt="rightArrow"
                className="rightArrow w-[9.19px] h-[16px] md:w-[14.36px] md:h-[25px] cursor-pointer"
                onClick={() => {
                    locale == 'ar' ? setRight(true) : setLeft(true),
                        locale == 'ar' ? handlePrevClick() : handleNextClick();
                }}
            />
        </>
    );
}
