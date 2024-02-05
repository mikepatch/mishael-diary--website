import { TPhoto } from "@/ui/types";
import GalleryThumbnail from "../../atoms/Gallery/GalleryThumbnail";

type TGalleryThumbnailListProps = {
    photos: TPhoto[];
    setOpenedPhoto: (photoToOpen: TPhoto) => void;
};

export default function GalleryThumbnailList({
    photos,
    setOpenedPhoto,
}: TGalleryThumbnailListProps) {
    return (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {photos.map(photo => (
                <li key={photo.id}>
                    <GalleryThumbnail
                        key={photo.id}
                        photo={photo}
                        setOpenedPhoto={photoToOpen =>
                            setOpenedPhoto(photoToOpen)
                        }
                    />
                </li>
            ))}
        </ul>
    );
}
