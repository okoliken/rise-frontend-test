import { useState, useRef, useEffect } from 'react';
import { RiseLogo } from "../RiseLogo";
import ClosedMenu from '../../assets/svgs/menu.svg';
import OpenedMenu from '../../assets/svgs/close.svg';
import { gsap } from 'gsap';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobileNavRef = useRef(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        tl.current = gsap.timeline({ paused: true });
        tl.current.to(mobileNavRef.current, {
            duration: 0.3,
            height: 'auto',
            opacity: 1,
            ease: 'power2.inOut'
        });
        tl.current.fromTo(
            'nav.mobile ul li',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.05, ease: 'power2.out' },
            '-=0.2'
        );
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            tl.current?.play();
        } else {
            tl.current?.reverse();
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="container mx-auto max-w-6xl lg:py-[1.75rem] px-4">
            <div className="flex items-center justify-between px-4 py-[1.156rem]">
                <div>
                    <RiseLogo />
                </div>
                <nav className="lg:block hidden">
                    <ul className="flex items-center gap-x-[1.438rem]">
                        <li><a className="leading-[1.2rem] text-teal-1" href="#">Home</a></li>
                        <li><a className="leading-[1.2rem] text-teal-1" href="#">Products</a></li>
                        <li><a className="leading-[1.2rem] text-teal-1" href="#">Investment Club</a></li>
                        <li><a className="leading-[1.2rem] text-teal-1" href="#">Blog</a></li>
                        <li><a className="leading-[1.2rem] text-teal-1" href="#">About Us</a></li>
                        <li><a className="leading-[1.2rem] text-teal-1" href="#">FAQs</a></li>
                    </ul>
                </nav>

                <button 
                    className="block lg:hidden"
                    aria-label="Toggle navigation menu" 
                    onClick={toggleMenu}
                >
                    <img 
                        src={isMenuOpen ? OpenedMenu : ClosedMenu} 
                        alt={isMenuOpen ? "Close menu" : "Open menu"} 
                        className="transition-transform duration-300 ease-in-out"
                        style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
                    />
                </button>
            </div>
            <nav 
                ref={mobileNavRef} 
                className="lg:hidden overflow-hidden mobile"
                style={{ height: 0, opacity: 0 }}
            >
                <ul className="flex flex-col gap-y-2 mt-2 px-4">
                    <li><a className="leading-[1.2rem] text-teal-1" href="#">Home</a></li>
                    <li><a className="leading-[1.2rem] text-teal-1" href="#">Products</a></li>
                    <li><a className="leading-[1.2rem] text-teal-1" href="#">Investment Club</a></li>
                    <li><a className="leading-[1.2rem] text-teal-1" href="#">Blog</a></li>
                    <li><a className="leading-[1.2rem] text-teal-1" href="#">About Us</a></li>
                    <li><a className="leading-[1.2rem] text-teal-1" href="#">FAQs</a></li>
                </ul>
            </nav>
        </header>
    );
};