import React, { useCallback, useEffect } from "react";

import { CloseButton } from "@/ui/atoms/Common";
import { TPhoto } from "../../types";
import CarouselPhoto from "../../molecules/Gallery/CarouselPhoto";
import CarouselThumbnailList from "../../molecules/Gallery/CarouselThumbnailList";

type TGalleryCarouselProps = {
    photos: TPhoto[];
    openedPhoto: TPhoto;
    setOpenedPhoto: (photo: TPhoto | null) => void;
    thumbnails: boolean;
};

export default function Carousel({
    photos,
    openedPhoto,
    setOpenedPhoto,
    thumbnails,
}: TGalleryCarouselProps) {
    const handleSwipe = useCallback(
        (direction: "left" | "right") => {
            const currentPhotoIndex = photos.findIndex(
                p => p.id === openedPhoto?.id
            );
            let newPhotoIndex = currentPhotoIndex;

            if (direction === "right") {
                newPhotoIndex = (currentPhotoIndex + 1) % photos.length;
            } else {
                newPhotoIndex =
                    (currentPhotoIndex - 1 + photos.length) % photos.length;
            }

            setOpenedPhoto(photos[newPhotoIndex]);
        },
        [setOpenedPhoto, photos, openedPhoto?.id]
    );

    const handleClose = useCallback(() => {
        setOpenedPhoto(null);
    }, [setOpenedPhoto]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
            if (e.key === "ArrowRight") handleSwipe("right");
            if (e.key === "ArrowLeft") handleSwipe("left");
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleClose, handleSwipe]);

    return (
        <section className="fixed inset-0 flex flex-wrap items-end overflow-hidden bg-black bg-opacity-90  backdrop-blur-sm transition-all">
            {/* <section className="fixed inset-0  cursor-zoom-out items-end justify-center overflow-hidden bg-black bg-opacity-90  backdrop-blur-sm transition-all"> */}
            {/* <section className="flex h-full w-full cursor-auto flex-wrap items-end justify-center"> */}
            <CloseButton onClick={handleClose} />
            <CarouselPhoto
                openedPhoto={openedPhoto}
                handleSwipe={handleSwipe}
                setOpenedPhoto={setOpenedPhoto}
            />
            {thumbnails && (
                <footer className="h-1/5 w-full cursor-auto">
                    <CarouselThumbnailList
                        photos={photos}
                        openedPhoto={openedPhoto}
                        setOpenedPhoto={setOpenedPhoto}
                    />
                </footer>
            )}
            {/* </section> */}
        </section>
    );
}
