export type SiteUpdate = {
  slug: string;
  date: string;
  title: string;
  summary: string;
  href: string;
  category: "release" | "guide" | "project";
};

export const siteUpdates: SiteUpdate[] = [
  {
    slug: "safety-tools-and-guides",
    date: "2026-11-12",
    title: "Free phone-safety tools and field guides",
    summary: "A private risk check, emergency plan builder, shareable safety cards, practical Android guides, and a clearer trust centre are now available.",
    href: "/tools",
    category: "project",
  },
  {
    slug: "website-moved-to-github-pages",
    date: "2026-11-12",
    title: "The website is now served by GitHub Pages",
    summary: "The public website source, deployment history, and community tools now live in a dedicated public repository.",
    href: "https://github.com/lvnhopendlovu-ctrl/GeoFence-Guardian-Website",
    category: "project",
  },
  {
    slug: "version-8-1",
    date: "2026-11-10",
    title: "GeoFence Guardian 8.1",
    summary: "The navigation drawer, rating prompt, branding refinements, and current production release are documented in the release notes.",
    href: "/releases",
    category: "release",
  },
];
