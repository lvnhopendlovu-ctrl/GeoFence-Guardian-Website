import { siteName, siteUrl } from "@/lib/seo";
import { siteUpdates } from "@/lib/updates";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}

export function GET() {
  const items = siteUpdates.map((item) => {
    const link = item.href.startsWith("http") ? item.href : `${siteUrl}${item.href}`;
    return `<item><title>${escapeXml(item.title)}</title><link>${escapeXml(link)}</link><guid isPermaLink="false">${escapeXml(`${siteUrl}/updates#${item.slug}`)}</guid><pubDate>${new Date(`${item.date}T12:00:00+02:00`).toUTCString()}</pubDate><description>${escapeXml(item.summary)}</description></item>`;
  }).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${siteName} updates</title><link>${siteUrl}/updates</link><description>Releases, safety resources, and project updates from ${siteName}.</description><language>en-ZA</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
