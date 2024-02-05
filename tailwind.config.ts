import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-background": "#fffbe6",
                "brand-background-light": "#fffdf5",
                "font-dark": "#212427",
                "brand-secondary": "#D6CAB6",
                // "brand-secondary": "#776B5D",
            },
        },
    },
    plugins: [],
};
export default config;
