import { useMobile } from '../../../context/MobileContext';
import Link from 'next/link';

export default function FooterLinksSection({ title, items }) {
    const isMobile = useMobile();

    return (
        <div className="sm:h-[256px]">
            <p
                className={`text-bold pb-5 text-colors-evest-500 ${isMobile ? 'text-[16px]' : 'text'}`}
            >
                {title}
            </p>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={`text-colors-evest-500 ${isMobile ? 'text-[16px]' : 'subText'}`}
                    >
                        <Link
                            href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={
                                item.external
                                    ? 'noopener noreferrer'
                                    : undefined
                            }
                        >
                            {item.text} {item.suffix && `(${item.suffix})`}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
