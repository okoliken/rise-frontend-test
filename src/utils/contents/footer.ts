export interface FooterLink {
    label: string;
    href: string;
    hasIcon?: boolean;
}

export interface FooterSection {
    title: string;
    type: "nav" | "address";
    links: FooterLink[];
}

  

export const footerSections: FooterSection[] = [
    {
        title: "Company Info",
        type: "nav",
        links: [
            { label: "About Us", href: "#" },
            { label: "Careers", href: "#" },
            { label: "FAQs", href: "#" },
            { label: "Contact Info", href: "#" },
            { label: "Press", href: "#" },
            { label: "Rise Impact", href: "#" },
        ],
    },
    {
        title: "Explore",
        type: "nav",
        links: [
            { label: "Investment Club", href: "#", hasIcon: true },
            { label: "Blog", href: "#", hasIcon: true },
        ],
    },
    {
        title: "Products",
        type: "nav",
        links: [
            { label: "Rise App", href: "#" },
            { label: "Wallets", href: "#" },
            { label: "FAQs", href: "#" },
            { label: "Asset Classes", href: "#" },
        ],
    },
    {
        title: "Contact Us",
        type: "address",
        links: [
            { label: "0818 714 7405", href: "tel:08187147405", hasIcon: true },
            { label: "hello@rise.capital", href: "mailto:hello@rise.capital", hasIcon: true },
            { label: "Newsletter", href: "#", hasIcon: true },
            { label: "Instagram", href: "#", hasIcon: true },
            { label: "Twitter", href: "#", hasIcon: true },
        ],
    },
];
