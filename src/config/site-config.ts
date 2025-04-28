import type { Metadata } from "next";

const TITLE = "kunal garg";
const DESCRIPTION = "kunal garg work proof!!";

export const siteConfig: Metadata = {
    title: {
        default: TITLE,
        template: `%s | ${TITLE}`,
    },
    description: DESCRIPTION,
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: "https://kunalgarg.com",
        siteName: TITLE,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        creator: "@kunalg_twt",
    },
}