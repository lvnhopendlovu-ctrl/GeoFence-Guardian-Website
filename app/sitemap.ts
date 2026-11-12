import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { guides } from "@/lib/guides";

export const dynamic = "force-static";

const paths = ["", "/features", "/tools", "/risk-check", "/emergency-plan", "/share", "/demo", "/guides", ...guides.map((guide) => `/guides/${guide.slug}`), "/trust", "/updates", "/help", "/about", "/releases", "/support", "/privacy", "/terms", "/donate"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-12T00:00:00+02:00");
  return paths.map((path, index) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : path === "/features" || path === "/tools" || path === "/guides" ? 0.8 : 0.6,
  }));
}
