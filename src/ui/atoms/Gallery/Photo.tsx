import Image from "next/image";
import { TPhoto } from "../../types";

type TPhotoProps = {
    photo: TPhoto;
};

export default function Photo({ photo }: TPhotoProps) {
    return (
        <Image
            src={photo.src}
            alt={photo.alt}
            width={400}
            height={500}
            className="h-full w-full cursor-auto rounded-sm object-contain"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            placeholder="blur"
        />
    );
}
