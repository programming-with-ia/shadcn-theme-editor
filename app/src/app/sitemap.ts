import { siteConfig } from "@/lib/site-config";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    siteConfig.url,
    siteConfig.github,
    siteConfig.npm,
    siteConfig.docs,
  ].map((url) => ({ url }));
}
