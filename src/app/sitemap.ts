import type { MetadataRoute } from "next";
import { ARTICLES } from "@/content/blog";
import { NAVIGATION, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = NAVIGATION.map((item) => ({
    url: `${SITE_URL}${item.href}`,
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));
  const articles = ARTICLES.map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}/`,
    lastModified: a.date,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...pages, ...articles];
}
