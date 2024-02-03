import Gallery from "@/ui/organisms/Gallery/Gallery";

type TPhoto = {
    id: number;
    alt: string;
    src: string;
};

const PORTFOLIO_PATH = "/portfolio/";
const PHOTOS: TPhoto[] = [
    {
        id: 1,
        alt: "Rozmarzona Mishael",
        src: `${PORTFOLIO_PATH}mishael-dreaming.jpeg`,
    },
    {
        id: 2,
        alt: "Mishael je pierogi",
        src: `${PORTFOLIO_PATH}mishael-eating.jpeg`,
    },
    {
        id: 3,
        alt: "Mishael na dworze",
        src: `${PORTFOLIO_PATH}mishael-outside.jpeg`,
    },
    {
        id: 4,
        alt: "Mishael w okularach przeciwsłonecznych",
        src: `${PORTFOLIO_PATH}mishael-with-sunglassess.jpeg`,
    },
    {
        id: 5,
        alt: "Ładny zabytkowy budynek",
        src: `${PORTFOLIO_PATH}nice-oldstyle-building.jpeg`,
    },
];

export default function PortfolioPage() {
    return <Gallery photos={PHOTOS} carousel carouselThumbnails />;
}
