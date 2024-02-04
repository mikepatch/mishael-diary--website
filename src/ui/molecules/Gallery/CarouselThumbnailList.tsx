import React, { createRef, useEffect, useRef } from "react";

import CarouselThumbnail from "../../atoms/Gallery/CarouselThumbnail";
import { TPhoto } from "../../types";

type TCarouselThumbnailListProps = {
    photos: TPhoto[];
    openedPhoto: TPhoto;
    setOpenedPhoto: (photo: TPhoto) => void;
};

export default function CarouselThumbnailList({
    photos,
    openedPhoto,
    setOpenedPhoto,
}: TCarouselThumbnailListProps) {
    const photoRefs = useRef<(React.RefObject<HTMLLIElement> | null)[]>([]);
    photoRefs.current = photos.map(
        (_, i) => photoRefs.current[i] ?? createRef()
    );

    useEffect(() => {
        const currentPhotoIndex = photos.findIndex(
            photo => photo.id === openedPhoto.id
        );
        if (currentPhotoIndex === -1) {
            return;
        }

        photoRefs.current[currentPhotoIndex]?.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    }, [openedPhoto, photos]);

    return (
        <ul
            className="relative mx-0 flex h-full snap-x snap-mandatory justify-start gap-2 overflow-x-auto bg-stone-800 bg-opacity-90 px-6 py-6"
            data-click-outside="true"
        >
            {photos.map((photo, index) => (
                <li
                    key={photo.id}
                    ref={photoRefs.current[index]}
                    className=" aspect-square h-full shrink-0 cursor-pointer snap-center brightness-90 transition-all hover:brightness-100"
                >
                    <CarouselThumbnail
                        photo={photo}
                        setOpenedPhoto={setOpenedPhoto}
                        openedPhotoId={openedPhoto.id}
                    />
                </li>
            ))}
        </ul>
    );
}
