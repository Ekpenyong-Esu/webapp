import { siteConfig } from "@/config/site";

/**
 * schema.org structured data (JSON-LD), kept out of layout.tsx so the layout
 * stays focused on markup and the SEO data lives in one place. It's exposed as
 * a single @graph so search engines see one connected entity — the Organization
 * and the ProfessionalService it provides — and it's derived from `siteConfig`
 * so the service list and copy never drift from the visible site.
 */

/** The legal entity behind the site. */
const organizationNode = {
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.company.legalName,
  alternateName: ["zaramTech", "ZaramTech"],
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.svg`,
  email: siteConfig.company.email,
  description: siteConfig.description,
  sameAs: [siteConfig.company.linkedin],
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.company.email,
    contactType: "customer support",
    areaServed: ["SE", "Europe", "North America", "US", "CA"],
    availableLanguage: ["English", "Swedish"],
  },
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

/**
 * The consultancy as a service provider. `hasOfferCatalog` mirrors the Services
 * section and `knowsAbout` + `areaServed` target the niche, buyer-intent queries
 * this site can realistically rank for (unlike broad head terms).
 */
const professionalServiceNode = {
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#service`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  image: `${siteConfig.url}/opengraph-image`,
  email: siteConfig.company.email,
  provider: { "@id": `${siteConfig.url}/#organization` },
  areaServed: [
    { "@type": "Country", name: "Sweden" },
    { "@type": "Place", name: "Europe" },
    { "@type": "Place", name: "North America" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
  ],
  knowsAbout: [
    "Embedded systems",
    "Firmware development",
    "HIL/SIL automotive test",
    "Edge AI",
    "TinyML",
    "Machine learning",
    "Computer vision",
    "Vehicle networking",
    "IoT and connectivity",
    "Embedded security",
    "Machine learning security",
    "Cybersecurity",
    "Full-stack software",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Engineering services",
    itemListElement: siteConfig.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.benefit,
      },
    })),
  },
};

/** The full JSON-LD graph rendered once in the document head. */
export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [organizationNode, professionalServiceNode],
};
