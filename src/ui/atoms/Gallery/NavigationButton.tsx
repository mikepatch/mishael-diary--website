import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type TDirection = "right" | "left";

type TNavigationButtonProps = {
    direction: TDirection;
    handleSwipe: (direction: TDirection) => void;
};

export default function NavigationButton({
    direction,
    handleSwipe,
}: TNavigationButtonProps) {
    return (
        <button
            aria-label={`Navigate ${direction}`}
            type="button"
            onClick={() => handleSwipe(direction)}
            className={`group absolute ${direction === "left" ? "left-0" : "right-0"} top-0 h-full px-6 text-2xl transition-all lg:px-16`}
            data-click-outside="true"
        >
            <div className="rounded-full bg-white bg-opacity-10 p-4 text-white transition-all group-hover:scale-105 group-hover:bg-opacity-20">
                {direction === "left" ? <FaChevronLeft /> : <FaChevronRight />}
            </div>
        </button>
    );
}
