import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Sitemap (SEO — docs/08 §4). Lists the indexable pages. The single-page
 * sections live under "/", plus the two legal pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/cookies`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
