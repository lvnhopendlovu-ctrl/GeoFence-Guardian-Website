import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const paths = ["", "/features", "/demo", "/help", "/about", "/releases", "/support", "/privacy", "/terms", "/donate"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-11T00:00:00+02:00");
  return paths.map((path, index) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : path === "/features" || path === "/help" ? 0.8 : 0.6,
  }));
}
