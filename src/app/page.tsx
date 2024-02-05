import IntroHeader from "@/ui/molecules/IntroHeader";
import MainNav from "@/ui/organisms/MainNav";

export default function HomePage() {
    return (
        <section className="flex h-svh flex-col items-center justify-center  gap-12">
            <IntroHeader />
            <MainNav />
        </section>
    );
}
