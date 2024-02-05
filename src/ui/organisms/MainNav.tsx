import NavList from "../molecules/NavList";
import SocialMediaBar from "../molecules/SocialMediaBar";

export default function MainNav() {
    return (
        <nav className="flex flex-col items-center gap-6">
            <SocialMediaBar />
            <NavList />
        </nav>
    );
}
