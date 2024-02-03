import Image from "next/image";

export default function IntroHeader() {
    return (
        <header>
            <figure className="relative aspect-square w-40 overflow-hidden rounded-[50%] border-2 border-emerald-500">
                <Image
                    src="/img/mishael-avatar.jpeg"
                    width={200}
                    height={200}
                    alt="Awatar Mishael"
                    loading="eager"
                    blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                    placeholder="blur"
                />
            </figure>
            <h1 className="text-center text-2xl">Mishael Diary</h1>
        </header>
    );
}
