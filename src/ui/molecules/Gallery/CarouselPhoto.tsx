import React, { useRef } from "react";

import { useOnOverlayClick } from "@/hooks/useOnOverlayClick";
import NavigationButton from "../../atoms/Gallery/NavigationButton";
import Photo from "../../atoms/Gallery/Photo";
import { TPhoto } from "../../types";

const swipeThreshold = 50;
const swipeVelocity = 0.5;

type TCarouselPhotoProps = {
    openedPhoto: TPhoto;
    handleSwipe: (direction: "left" | "right") => void;
    setOpenedPhoto: (photo: TPhoto | null) => void;
};

export default function CarouselPhoto({
    openedPhoto,
    handleSwipe,
    setOpenedPhoto,
}: TCarouselPhotoProps) {
    const touchStartX = useRef(0);
    const touchStartTime = useRef(0);

    useOnOverlayClick(() => {
        setOpenedPhoto(null);
    });

    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];

        touchStartX.current = touch.clientX;
        touchStartTime.current = Date.now();
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const touch = e.changedTouches[0];
        const distanceX = touch.clientX - touchStartX.current;
        const timeElapsed = Date.now() - touchStartTime.current;
        const velocity = Math.abs(distanceX) / timeElapsed;

        if (Math.abs(distanceX) > swipeThreshold && velocity > swipeVelocity) {
            handleSwipe(distanceX > 0 ? "left" : "right");
        }
    };

    return (
        <figure
            className="relative m-0 flex h-4/5 w-full cursor-zoom-out justify-center lg:h-4/5"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            data-click-overlay="true"
        >
            <Photo photo={openedPhoto} />
            <nav className=" hidden sm:block">
                <ul>
                    <li>
                        <NavigationButton
                            direction="left"
                            handleSwipe={handleSwipe}
                        />
                    </li>
                    <li>
                        <NavigationButton
                            direction="right"
                            handleSwipe={handleSwipe}
                        />
                    </li>
                </ul>
            </nav>
        </figure>
    );
}
