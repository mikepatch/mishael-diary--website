import React from "react";

import SubPageHeader from "@/ui/molecules/SubPageHeader";

export default function PortfolioLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <SubPageHeader title="Portfolio." />
            <main className="p-6 sm:p-14">{children}</main>
        </>
    );
}
