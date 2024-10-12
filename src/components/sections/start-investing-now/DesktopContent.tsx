import InvestDollars from "../../../assets/start-investing-now/invest-dollars.svg";
import ChooseWhatsBest from '../../../assets/start-investing-now/choose-whats-best.svg'
import SetInvestment from '../../../assets/start-investing-now/set-investment-gols.svg'
import AutoInvest from '../../../assets/start-investing-now/auto-invest.svg'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const DesktopContent = () => {

    const sectionsRef = useRef<(HTMLElement | null)[]>([]);

   
    useEffect(() => {
        sectionsRef.current.forEach((section) => {
            if (section) {
                gsap.fromTo(
                    section,
                    { opacity: 0, y: 100, scale: 0.9 }, 
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1.5, 
                        ease: "power4.out", 
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse",
                            scrub: 0.5, 
                        },
                    }
                );
            }
        });
    }, []);
    
    const Arrow = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M1.07107 9.55636C1.26623 9.75152 1.58301 9.75152 1.77817 9.55636L8.83139 2.50314L8.70305 7.77639C8.69633 8.05216 8.91412 8.28162 9.19077 8.28851C9.4669 8.29523 9.696 8.07709 9.70272 7.80096L9.84927 1.77836C9.84927 1.51107 9.74532 1.26005 9.55635 1.07108C9.36755 0.882278 9.11635 0.778157 8.83704 0.77851L2.82664 0.924881C2.55051 0.931598 2.33254 1.16088 2.33908 1.43683C2.34545 1.71295 2.57491 1.93109 2.85103 1.92438L8.13559 1.78472L1.07107 8.84925C0.875905 9.04441 0.875905 9.3612 1.07107 9.55636Z"
                fill="#07969E"
            />
        </svg>
    );

    return (
        <div className="hidden md:block">
            <section ref={(el) => (sectionsRef.current[0] = el)}  className="flex items-center pt-[2.525rem]" aria-labelledby="invest-dollars-heading">
                <div className="flex-1 text-left">
                    <header>
                        <h2 id="invest-dollars-heading" className="text-rise-black font-semibold pb-3 text-[2rem]">
                            Invest your money in dollars
                        </h2>
                    </header>
                    <p className="text-rise-body leading-6 text-lg pb-6">
                        By holding your investments in a stable{" "}
                        <br className="hidden md:block" /> currency, your money grows more
                        over <br className="hidden lg:block" /> time and retains its value
                        better.
                    </p>
                    <div className="text-teal-1 font-semibold gap-x-2.5 flex items-center">
                        <span className="text-lg cursor-pointer hover:underline">Start Investing Now</span>
                        <Arrow />
                    </div>
                </div>
                <div className="flex-1">
                    <img src={InvestDollars} className="w-full" alt="Invest in dollars graphic" />
                </div>
            </section>

            <section ref={(el) => (sectionsRef.current[1] = el)} className="flex flex-row-reverse items-center gap-x-[4.625rem]" aria-labelledby="choose-best-heading">
                <div className="flex-1 text-left">
                    <header>
                        <h2 id="choose-best-heading" className="text-rise-black font-semibold pb-3 text-[2rem]">
                            Choose what's best <br className="hidden lg:block" /> for you
                        </h2>
                    </header>
                    <p className="text-rise-body leading-6 text-lg pb-6">
                        Unlike other platforms, Rise lets you pick between{" "}
                        <br className="hidden lg:block" /> stocks, US real estate and fixed
                        income, according to <br className="hidden lg:block" /> your risk
                        appetite. That way you can spread your risk and{" "}
                        <br className="hidden lg:block" /> tap into different investments
                        all in one place.
                    </p>
                    <div className="text-teal-1 font-semibold gap-x-2.5 flex items-center">
                        <span className="text-lg cursor-pointer hover:underline">Start Investing Now</span>
                        <Arrow />
                    </div>
                </div>
                <div className="flex-grow flex-1">
                    <img src={ChooseWhatsBest} className="w-full" alt="Choose what's best for you graphic" />
                </div>
            </section>

            <section ref={(el) => (sectionsRef.current[2] = el)} className="flex flex-row-reverse items-center justify-between" aria-labelledby="set-goals-heading">
                <div className="flex-1">
                    <img src={SetInvestment} className="w-full" alt="Set investment goals graphic" />
                </div>
                <div className="flex-1 text-left">
                    <header>
                        <h2 id="set-goals-heading" className="text-rise-black font-semibold pb-3 text-[2rem]">
                            Set goals and reach them
                        </h2>
                    </header>
                    <p className="text-rise-body leading-6 text-lg pb-6">
                        You can invest towards a goal on Rise--retirement, higher <br className="hidden lg:block" /> education, save for your home or travel budgets. Or create <br className="hidden md:block" /> a goal of your own and invest periodically to achieve them.
                    </p>
                    <div className="text-teal-1 font-semibold gap-x-2.5 flex items-center">
                        <span className="text-lg cursor-pointer hover:underline">Start Investing Now</span>
                        <Arrow />
                    </div>
                </div>
            </section>

            <section ref={(el) => (sectionsRef.current[3] = el)} className="flex items-center gap-x-[4.625rem]" aria-labelledby="auto-invest-heading">
                <div className="flex-1">
                    <img src={AutoInvest} className="w-full" alt="Auto invest graphic" />
                </div>
                <div className="flex-1 text-left">
                    <header>
                        <h2 id="auto-invest-heading" className="text-rise-black font-semibold pb-3 text-[2rem]">
                            We remember so you don’t <br className="hidden lg:block" /> have to
                        </h2>
                    </header>
                    <p className="text-rise-body leading-6 text-lg pb-6">
                        Our Auto-invest feature makes it easy to stay consistent, <br className="hidden lg:block" />  even when you forget. Set a funding amount, frequency <br className="hidden md:block" />  and payment method and Rise will automatically fund <br className="hidden md:block" />  your investment, on schedule.
                    </p>
                    <div className="text-teal-1 font-semibold gap-x-2.5 flex items-center">
                        <span className="text-lg cursor-pointer hover:underline">Start Investing Now</span>
                        <Arrow />
                    </div>
                </div>
            </section>
        </div>
    );
};
