import IntroHeader from "@/ui/molecules/IntroHeader";
import IntroNav from "@/ui/molecules/IntroNav";

export default function Home() {
    return (
        <section className="flex h-screen flex-col items-center justify-center gap-10 bg-gradient-to-tl from-brand-background to-brand-background-light">
            <IntroHeader />
            <IntroNav />
        </section>
    );
}
