import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { StoreButton } from "../ui/StoreButton";
import PhoneMobile from "../../assets/hero/phone-mobile.png";
import PhoneDesktop from "../../assets/hero/phone-desktop.png";


export const Hero = () => {
    const bubbleRefs = useRef<(SVGSVGElement | null)[]>([]);

    useEffect(() => {
        bubbleRefs.current.forEach((bubble) => {
            if (bubble) {
                gsap.to(bubble, {
                    y: "random(-50, 50)", 
                    x: "random(-50, 50)",
                    duration: "random(2, 5)",
                    repeat: -1,
                    yoyo: true,
                    ease: "power2.inOut", 
                });
            }
        });
    }, []);
    

    const desktopBubbleSvg = (size: number, index: number) => (
        <svg
            ref={(el) => (bubbleRefs.current[index] = el)}
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden lg:block"
        >
            <circle cx={size / 2} cy={size / 2} r={size / 2} fill="#A0DDE2" />
        </svg>
    );

    const mobileBubbleSvg = (size: number, index: number) => (
        <svg 
            ref={(el) => (bubbleRefs.current[index] = el)}
            width={size} 
            height={size} 
            viewBox="0 0 38 37" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="lg:hidden"
        >
            <circle 
                opacity="0.3" 
                cx="19.0156" 
                cy="18.0505" 
                r="18.0505" 
                fill="#A0DDE2"
            />
        </svg>
    );


    return (
        <div className="relative ">
     
         {/* Desktop bubbles */}
         <div className="absolute top-10 left-5 z-0 hidden lg:block">{desktopBubbleSvg(40, 0)}</div>
            <div className="absolute bottom-8 transform translate-y-24 right-0 z-10 hidden lg:block">{desktopBubbleSvg(100, 1)}</div> 
            <div className="absolute bottom-8 left-36 z-0 hidden lg:block">{desktopBubbleSvg(80, 2)}</div>
            <div className="absolute top-10 right-[26rem] z-0 hidden lg:block">{desktopBubbleSvg(80, 3)}</div>
            <div className="absolute bottom-0 right-[40%] z-0 hidden lg:block">{desktopBubbleSvg(60, 4)}</div>

            {/* Mobile bubbles */}
            <div className="absolute top-4 right-4 z-0 lg:hidden">{mobileBubbleSvg(38, 5)}</div>
            <div className="absolute top-20 left-0 z-0 lg:hidden">{mobileBubbleSvg(28, 6)}</div>
            <div className="absolute top-28 right-1 z-0 lg:hidden">{mobileBubbleSvg(12, 7)}</div>
            <div className="absolute top-1/2 left-10 z-0 lg:hidden">{mobileBubbleSvg(38, 8)}</div>
            <div className="absolute top-2/3 left-0 z-0 lg:hidden">{mobileBubbleSvg(28, 9)}</div>
            <div className="absolute bottom-1/3 right-2 z-0 lg:hidden">{mobileBubbleSvg(38, 10)}</div>
            <div className="absolute bottom-36 left-8 z-0 lg:hidden">{mobileBubbleSvg(38, 11)}</div>

            <header className="py-[4.375rem] flex flex-col items-center lg:flex-row lg:justify-between lg:py-[1.438rem] lg:pl-4 lg:pr-14">
                <section className="flex flex-1 items-center justify-center lg:items-start lg:justify-start flex-col gap-4 px-2 lg:px-0 xl:pt-0">
                    <h1 className="text-teal-1 font-semibold text-[2.5rem] lg:text-[3.5rem] text-center tracking-tighter leading-9 lg:leading-[3.75rem] lg:mb-2">
                        Dollar investments <br className="hidden md:block" /> that help you
                        grow
                    </h1>
                    <p className="text-center lg:text-left leading-6 text-rise-body px-4 lg:font-medium lg:px-0 lg:mb-4">
                        We put your money in high quality assets that help{" "}
                        <br className="hidden md:block" /> you build wealth and achieve your
                        financial goals.
                    </p>
                    <div
                        className="flex gap-4"
                        role="group"
                        aria-label="Download store links"
                    >
                        <StoreButton
                            className="w-36"
                            storeType="apple"
                            url="https://apps.apple.com/your-app"
                        />
                        <StoreButton
                            className="w-36"
                            storeType="google"
                            url="https://play.google.com/store/apps/your-app"
                        />
                    </div>
                </section>

                <figure className="pt-[3.756rem] lg:pt-0">
                    <picture>
                        <source
                            srcSet={PhoneDesktop}
                            media="(min-width: 1024px)"
                            aria-labelledby="hero-image"
                        />
                        <img
                            src={PhoneMobile}
                            alt="An illustration of the Risevest app displayed on a mobile phone."
                            aria-labelledby="hero-image"
                            className="w-[14rem] z-10 relative lg:w-fit lg:max-w-xs object-contain"
                        />
                    </picture>
                    <figcaption id="hero-image" className="sr-only">
                        A visual representation of the Risevest app, showing both mobile and
                        desktop interfaces.
                    </figcaption>
                </figure>
            </header>
        </div>
    );
};