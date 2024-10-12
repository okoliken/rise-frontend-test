import { StoreButton } from "../ui/StoreButton";
import PhoneMobile from '../../assets/hero/phone-mobile.png';
import PhoneDesktop from '../../assets/hero/Phone-desktop.png';

export const Hero = () => {
    return (
        <header className="py-[4.375rem] flex flex-col items-center lg:flex-row lg:justify-between lg:py-[1.438rem] lg:px-6">
            <section className="flex flex-1 items-center justify-center lg:items-start lg:justify-start flex-col gap-4 px-2 lg:px-0 xl:pt-0">
                <h1
                    className="text-teal-1 font-semibold text-[2.5rem] lg:text-[3.5rem] text-center tracking-tighter leading-9 lg:leading-[3.75rem] lg:mb-2"
                >
                    Dollar investments <br className="hidden md:block" /> that help you grow
                </h1>
                <p className="text-center lg:text-left leading-6 text-rise-body px-4 lg:font-medium lg:px-0 lg:mb-4">
                    We put your money in high quality assets that help <br className="hidden md:block" /> you build wealth and achieve your financial goals.
                </p>
                <div className="flex gap-4" role="group" aria-label="Download store links">
                    <StoreButton className="w-36" storeType="apple" url="https://apps.apple.com/your-app" />
                    <StoreButton className="w-36" storeType="google" url="https://play.google.com/store/apps/your-app" />
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
                        className="w-[14rem] lg:w-fit lg:max-w-xs object-contain"
                    />
                </picture>
                <figcaption id="hero-image" className="sr-only">
                    A visual representation of the Risevest app, showing both mobile and desktop interfaces.
                </figcaption>
            </figure>
        </header>
    );
};
