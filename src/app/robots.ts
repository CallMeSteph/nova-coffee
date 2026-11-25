import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/** Everything can be crawled; the 404 page opts out with its own `noindex`. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", siteConfig.url).href,
  };
}
