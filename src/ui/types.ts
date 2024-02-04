export type TPhoto = {
    id: number;
    alt: string;
    src: string;
};

export type TBlogPost = {
    id: number;
    slug: string;
    timestamp: number;
    thumbnail: string;
    title: string;
    content: unknown;
};

export type TSocials = {
    id: string;
    label: string;
    url: string;
    icon: string;
};

export type TNavItems = {
    id: string;
    label: "Blog" | "Portfolio" | "Produkty";
    url: string;
};
