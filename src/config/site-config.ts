import type { Metadata } from "next";

const SITE_URL = "https://gargk.vercel.app";
const TITLE = "kunal garg | developer";
const DESCRIPTION =
    "portfolio of kunal garg, a passionate developer. explore my projects in next.js, react, solidity, and more.";

export const siteConfig: Metadata = {
    metadataBase: new URL(SITE_URL),

    title: {
        default: TITLE,
        template: "%s | kunal garg",
    },
    description: DESCRIPTION,
    keywords: [
        "Kunal Garg",
        "full-stack developer",
        "web3 developer",
        "Next.js portfolio",
        "React.js",
        "TypeScript",
        "Solidity",
        "TailwindCSS",
        "Hardhat",
        "MongoDB",
    ],
    alternates: {
        canonical: SITE_URL,
        languages: {
            "en-US": SITE_URL,
        },
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "kunal garg", url: SITE_URL }],
    creator: "@kunalg_twt",
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: SITE_URL,
        siteName: "kunal garg portfolio",
        images: [
            {
                url: `/og-image.png`,
                width: 1200,
                height: 630,
                alt: "kunal garg portfolio preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    // Twitter Card setup
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        creator: "@kunalg_twt",
        images: [`/og-image.png`],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    verification: {
        google: "GOOGLE_SITE_VERIFICATION_CODE",
    },
};
