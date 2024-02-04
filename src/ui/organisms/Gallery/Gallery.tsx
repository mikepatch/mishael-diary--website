"use client";

import React, { useState } from "react";

import { TPhoto } from "../../types";
import Carousel from "./Carousel";
import GalleryThumbnailList from "../../molecules/Gallery/GalleryThumbnailList";

type TGalleryProps = {
    photos: TPhoto[];
    carousel?: boolean;
    carouselThumbnails?: boolean;
};

export default function Gallery({
    photos,
    carousel = false,
    carouselThumbnails = false,
}: TGalleryProps) {
    const [openedPhoto, setOpenedPhoto] = useState<TPhoto | null>(null);

    return (
        <>
            <GalleryThumbnailList
                photos={photos}
                setOpenedPhoto={setOpenedPhoto}
            />
            {openedPhoto && carousel && (
                <Carousel
                    photos={photos}
                    openedPhoto={openedPhoto}
                    setOpenedPhoto={setOpenedPhoto}
                    thumbnails={carouselThumbnails}
                />
            )}
        </>
    );
}

Gallery.defaultProps = {
    carousel: false,
    carouselThumbnails: false,
};
