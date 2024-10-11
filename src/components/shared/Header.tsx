import { useState } from 'react';
import { RiseLogo } from "../RiseLogo";
import ClosedMenu from '../../assets/svgs/menu.svg';
import OpenedMenu from '../../assets/svgs/close.svg'; // Optionally, add an icon for the close button.

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

                <nav className="block lg:hidden">
                    <button 
                        aria-label="Toggle navigation menu" 
                        onClick={toggleMenu}
                    >
                        <img 
                            src={isMenuOpen ? OpenedMenu : ClosedMenu} 
                            alt={isMenuOpen ? "Open hamburger menu" : "Closed hamburger menu"} 
                        />
                    </button>
                </nav>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <nav className="lg:hidden block px-4">
                    <ul className="flex flex-col gap-y-2 mt-2">
                        <li><a className="leading-[1.2rem] text-teal-1" href="#">Home</a></li>
                        <li><a className="leading-[1.2rem] text-teal-1" href="#">Products</a></li>
                        <li><a className="leading-[1.2rem] text-teal-1" href="#">Investment Club</a></li>
                        <li><a className="leading-[1.2rem] text-teal-1" href="#">Blog</a></li>
                        <li><a className="leading-[1.2rem] text-teal-1" href="#">About Us</a></li>
                        <li><a className="leading-[1.2rem] text-teal-1" href="#">FAQs</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};
