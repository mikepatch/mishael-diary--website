import { TNavItems } from "../types";
import NavItem from "../atoms/Common/NavItem";

const NAV_ITEMS: TNavItems[] = [
    { id: "blog", label: "Blog", url: "/blog" },
    { id: "portfolio", label: "Portfolio", url: "/portfolio" },
    { id: "produkty", label: "Produkty", url: "/products" },
];

export default function NavList() {
    return (
        <ul className="flex w-[250px] flex-col gap-2 text-center">
            {NAV_ITEMS.map(item => (
                <NavItem key={item.id} {...item} />
            ))}
        </ul>
    );
}
