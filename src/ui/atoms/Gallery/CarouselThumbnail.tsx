import { TPhoto } from "@/ui/types";
import Image from "next/image";

type TPhotoProps = {
    photo: TPhoto;
    setOpenedPhoto: (photo: TPhoto) => void;
    openedPhotoId: number;
};

export default function CarouselThumbnail({
    photo,
    setOpenedPhoto,
    openedPhotoId,
}: TPhotoProps) {
    return (
        <Image
            width={150}
            height={100}
            src={photo.src}
            alt={photo.alt}
            onClick={() => setOpenedPhoto(photo)}
            className={`aspect-square h-full w-full rounded-sm object-cover ${openedPhotoId === photo.id ? "box-border border-4" : ""}`}
            data-click-outside="true"
        />
    );
}
