import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";

import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mishael Diary",
    description: "Mishael's personal website.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <body
                className={`${inter.className} mx-auto min-h-svh overflow-x-hidden bg-gradient-to-tl from-brand-background to-brand-background-light`}
            >
                {children}
            </body>
        </html>
    );
}
