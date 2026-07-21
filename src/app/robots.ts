import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * robots.txt (SEO — docs/08 §4). Allows all crawlers and points to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
