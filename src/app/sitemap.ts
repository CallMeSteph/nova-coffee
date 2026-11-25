import type { MetadataRoute } from "next";
import { mainNav, siteConfig } from "@/config/site";

/** The public pages are exactly the ones in the main navigation. */
export default function sitemap(): MetadataRoute.Sitemap {
  return mainNav.map(({ href }) => ({
    url: new URL(href, siteConfig.url).href,
  }));
}
