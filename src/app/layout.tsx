import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

// Body font: neutral, highly readable sans
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Heading font: geometric sans for a modern, technical feel
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const seoTitle =
  "zaramTech AB — Embedded systems, edge AI & automotive test engineering";

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

// JSON-LD Organization schema (SEO structured data — docs/08 §2).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.company.legalName,
  url: siteConfig.url,
  email: siteConfig.company.email,
  description: siteConfig.description,
  sameAs: [siteConfig.company.linkedin],
  address: {
    "@type": "PostalAddress",
    addressCountry: "SE",
  },
  identifier: {
    "@type": "PropertyValue",
    name: "Organisationsnummer",
    value: siteConfig.company.orgNumber,
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
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
