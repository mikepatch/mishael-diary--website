import Link from "next/link";
import FaIcon from "../atoms/FaIcon";

export type TSocials = {
    id: string;
    label: string;
    url: string;
    icon: string;
};

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
                <li className="block rounded-md border border-emerald-500 px-4 py-2">
                    Blog
                </li>
                <li className="">
                    <Link
                        href="/portfolio"
                        className="block rounded-md border border-emerald-500 px-4 py-2"
                    >
                        Portfolio
                    </Link>
                </li>
                <li className="block rounded-md border border-emerald-500 px-4 py-2">
                    Produkty
                </li>
            </ul>
        </nav>
    );
}
