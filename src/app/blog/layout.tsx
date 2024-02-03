import React from "react";

import SubPageHeader from "@/ui/molecules/SubPageHeader";

export default function PortfolioLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <SubPageHeader title="Blog." />
            <main className="px-6 sm:px-14">{children}</main>
        </>
    );
}
