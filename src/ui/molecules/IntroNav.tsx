import Link from "next/link";

import { FaIcon } from "../atoms/Common";
import { TNavItems, TSocials } from "../types";

const SOCIALS: TSocials[] = [
    {
        id: "social-instagram",
        label: "Instagram",
        url: "https://www.instagram.com/mishael_diary",
        icon: "FaInstagram",
    },
    {
        id: "social-youtube",
        label: "Youtube",
        url: "https://www.youtube.com/@mishaeldiary",
        icon: "FaYoutube",
    },
    {
        id: "social-tiktok",
        label: "TikTok",
        url: "https://www.tiktok.com/@mishaeldiary",
        icon: "FaTiktok",
    },
    {
        id: "social-email",
        label: "E-mail",
        url: "mailto:diarymishael@gmail.com",
        icon: "FaRegEnvelope",
    },
];
const NAV_ITEMS: TNavItems[] = [
    { id: "blog", label: "Blog", url: "/blog" },
    { id: "portfolio", label: "Portfolio", url: "/portfolio" },
    { id: "produkty", label: "Produkty", url: "/products" },
];

export default function IntroNav() {
    return (
        <nav className="flex flex-col items-center gap-4">
            <ul className="flex gap-4 text-3xl">
                {SOCIALS.map(({ id, label, url, icon }) => (
                    <li key={id}>
                        <Link
                            href={url}
                            role="link"
                            target="_blank"
                            aria-label={label}
                            rel="noopener noreferrer"
                        >
                            <FaIcon name={icon} />
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="flex w-[200px] flex-col gap-2 text-center">
                {NAV_ITEMS.map(({ id, label, url }) => (
                    <li key={id}>
                        <Link
                            href={url}
                            aria-label={label}
                            role="link"
                            rel="noopener noreferrer"
                            className="block rounded-md border border-emerald-500 px-4 py-2 transition-all hover:bg-emerald-500 hover:text-white"
                        >
                            {label}
                            {/* <div className="absolute right-0 top-0 h-full w-1 bg-emerald-500 hover:w-full" /> */}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
