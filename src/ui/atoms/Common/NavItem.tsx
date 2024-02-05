import Link from "next/link";

export type TNavItemProps = {
    label: string;
    url: string;
};

export default function NavItem({ label, url }: TNavItemProps) {
    return (
        <li>
            <Link
                href={url}
                aria-label={label}
                role="link"
                rel="noopener noreferrer"
                className=" block rounded-sm border border-brand-secondary px-4 py-2 font-semibold transition-all hover:bg-brand-secondary hover:text-white"
            >
                {label}
            </Link>
        </li>
    );
}
