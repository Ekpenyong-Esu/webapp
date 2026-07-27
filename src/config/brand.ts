/**
 * Brand + SEO metadata: the site name, canonical URL, meta description, and
 * tagline. The single source of truth for anything that identifies the site to
 * users and search engines (metadata, sitemap, robots, JSON-LD, header brand).
 */
export const brand = {
  name: "zaramTech AB",
  /** Canonical site URL (used for SEO metadata, sitemap, robots, JSON-LD). */
  url: "https://zaramtech.com",
  /** Site-wide meta description (SEO + social share previews). */
  description:
    "zaramTech AB builds embedded firmware, HIL/SIL automotive test rigs, and on-device edge AI — from bare-metal to cloud.",
  /** Short tagline used in the header/brand area. */
  tagline:
    "Embedded systems, edge AI & automotive test engineering, from bare-metal to cloud.",
} as const;
