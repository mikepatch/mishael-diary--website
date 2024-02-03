import IntroHeader from "@/ui/molecules/IntroHeader";
import IntroNav from "@/ui/molecules/IntroNav";

export default function HomePage() {
    return (
        <section className="flex h-screen flex-col items-center justify-center gap-10 ">
            <IntroHeader />
            <IntroNav />
        </section>
    );
}
