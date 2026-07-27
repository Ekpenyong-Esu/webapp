import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import { siteStructuredData } from "@/lib/structuredData";

// Body font: neutral, highly readable sans
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Heading font: geometric sans for a modern, technical feel
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const seoTitle =
  "zaramTech AB — Embedded Systems, Edge AI & Automotive Test";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seoTitle,
    template: "%s — zaramTech AB",
  },
  description: siteConfig.description,
  keywords: [
    "embedded systems",
    "firmware",
    "HIL",
    "SIL",
    "automotive test",
    "edge AI",
    "TinyML",
    "machine learning",
    "computer vision",
    "vehicle networking",
    "CAN",
    "TSN",
    "Sweden",
  ],
  authors: [{ name: "zaramTech AB" }],
  creator: "zaramTech AB",
  alternates: { canonical: "/" },
  // Google Search Console: paste the verification token here once you've added
  // the property (Search Console → Settings → Ownership verification → HTML tag).
  // verification: { google: "YOUR_TOKEN" },
  openGraph: {
    type: "website",
    siteName: "zaramTech AB",
    title: seoTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteStructuredData),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
