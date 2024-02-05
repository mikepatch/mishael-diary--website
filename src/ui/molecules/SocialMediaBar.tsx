import Link from "next/link";
import { TSocials } from "../types";
import { FaIcon } from "../atoms/Common";

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

export default function SocialMediaBar() {
    return (
        <ul className="flex gap-4">
            {SOCIALS.map(({ id, label, url, icon }) => (
                <li key={id}>
                    <Link
                        href={url}
                        role="link"
                        target="_blank"
                        aria-label={label}
                        rel="noopener noreferrer"
                    >
                        <FaIcon
                            name={icon}
                            className="text-3xl transition-all  hover:scale-110 hover:text-brand-secondary"
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
}
