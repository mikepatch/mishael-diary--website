import Image from "next/image";

export default function IntroHeader() {
    return (
        <header>
            <figure className="relative aspect-square w-40 overflow-hidden rounded-[50%] border border-black">
                <Image
                    src="/img/mishael-avatar.jpeg"
                    width={200}
                    height={200}
                    alt="Awatar Mishael"
                    loading="eager"
                    blurDataURL="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                    placeholder="blur"
                />
            </figure>
            <h1 className="text-center text-2xl">Mishael Diary</h1>
        </header>
    );
}
