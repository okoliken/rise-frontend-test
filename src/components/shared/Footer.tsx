
import { RiseLogo } from "../RiseLogo";
import { footerSections, type FooterLink } from '../../utils/contents/footer';

const ExternalLinkIcon = () => (
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
            fill="#2D2D2D"
        />
    </svg>
);

const FooterLink: React.FC<FooterLink> = ({ label, href, hasIcon }) => (
    <li className="mb-4 leading-[0.9rem]">
        <a
            className="text-base tracking-tighter inline-flex items-center gap-x-[1.278rem] text-rise-black"
            href={href}
            {...(href.startsWith('http') && { target: "_blank", rel: "noopener noreferrer" })}
        >
            {label}
            {hasIcon && <ExternalLinkIcon />}
        </a>
    </li>
);

const FooterSection = ({ title, type, links }: { title: string, type: string, links: FooterLink[] }) => (
    <section className="flex flex-col gap-y-8">
        <h2 className="font-semibold tracking-tighter">{title}</h2>
        {type === 'nav' ? (
            <nav aria-label={title}>
                <ul>
                    {links.map((link, index) => (
                        <FooterLink key={index} {...link} />
                    ))}
                </ul>
            </nav>
        ) : (
            <address className="not-italic">
                <ul>
                    {links.map((link, index) => (
                        <FooterLink key={index} {...link} />
                    ))}
                </ul>
            </address>
        )}
    </section>
);

export const Footer = () => {
    return (
        <footer className="px-4 container mx-auto max-w-6xl py-6 xl:py-12 lg:h-[25.938rem]">
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-12 xl:gap-x-[10.063rem]">
                <section className="flex flex-col gap-y-8">
                    <RiseLogo themeColor="#000" />
                    <nav aria-label="Company Info">
                        <ul>
                            {footerSections[0].links.map((link, index) => (
                                <FooterLink key={index} {...link} />
                            ))}
                        </ul>
                    </nav>
                </section>

                {footerSections.slice(1).map((section, index) => (
                    <FooterSection key={index} {...section} />
                ))}
            </div>
        </footer>
    );
};