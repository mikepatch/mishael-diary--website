import React from "react";
import Image from "next/image";
import { TPhoto } from "../../types";

type TGalleryThumbnailProps = {
    photo: TPhoto;
    setOpenedPhoto: (photoToOpen: TPhoto) => void;
};

export default function GalleryThumbnail({
    photo,
    setOpenedPhoto,
}: TGalleryThumbnailProps) {
    return (
        <figure className=" w-full cursor-pointer overflow-hidden">
            <Image
                src={photo.src}
                alt={photo.alt}
                width={300}
                height={300}
                onClick={() => setOpenedPhoto(photo)}
                className="aspect-square h-full w-full cursor-zoom-in rounded-sm object-cover shadow-sm brightness-90 transition-all hover:brightness-100"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                placeholder="blur"
            />
        </figure>
    );
}
