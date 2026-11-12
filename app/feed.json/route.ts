import { siteName, siteUrl } from "@/lib/seo";
import { siteUpdates } from "@/lib/updates";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    version: "https://jsonfeed.org/version/1.1",
    title: `${siteName} updates`,
    home_page_url: `${siteUrl}/updates`,
    feed_url: `${siteUrl}/feed.json`,
    language: "en-ZA",
    items: siteUpdates.map((item) => ({
      id: `${siteUrl}/updates#${item.slug}`,
      url: item.href.startsWith("http") ? item.href : `${siteUrl}${item.href}`,
      title: item.title,
      content_text: item.summary,
      date_published: `${item.date}T12:00:00+02:00`,
      tags: [item.category],
    })),
  });
}
