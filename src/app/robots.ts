import type { MetadataRoute } from "next";

/**
 * Crawling stays allowed on purpose: crawlers must reach the pages to read the
 * `noindex` set in layout.tsx. No sitemap until there is a definitive domain.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
