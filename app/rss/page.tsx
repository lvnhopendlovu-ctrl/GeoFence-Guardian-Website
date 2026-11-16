import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { pageMetadata, siteUrl } from "@/lib/seo";

export const metadata = pageMetadata(
  "RSS Feed",
  "Subscribe to GeoFence Guardian project updates using RSS or JSON Feed.",
  "/rss",
);

export default function RssPage() {
  const rssUrl = `${siteUrl}/feed.xml`;
  const jsonUrl = `${siteUrl}/feed.json`;

  return (
    <>
      <section className="page-hero compact-hero">
        <div className="hero-grid-overlay" />
        <div className="shell page-hero-inner">
          <span className="eyebrow light">Follow without an algorithm</span>
          <h1>Updates, delivered<br /><em>the quiet way.</em></h1>
          <p>Subscribe in any RSS reader to receive GeoFence Guardian releases, safety resources, and meaningful project updates.</p>
        </div>
      </section>
      <section className="section source-links-section">
        <div className="shell source-links-inner">
          <div>
            <span className="eyebrow">Choose your format</span>
            <h2>Copy a feed address into your reader.</h2>
            <p>The XML link is the standard RSS feed. JSON Feed is available for readers that prefer it.</p>
          </div>
          <div>
            <a href={rssUrl}>Open RSS feed <ArrowIcon size={17} /></a>
            <a href={jsonUrl}>Open JSON Feed <ArrowIcon size={17} /></a>
          </div>
        </div>
      </section>
      <section className="section demo-explainer-section">
        <div className="shell demo-explainer-grid">
          <div><span className="eyebrow">New to RSS?</span><h2>No account. No inbox. No feed-ranking robot.</h2></div>
          <div>
            <p>Install an RSS reader, add <strong>{rssUrl}</strong>, and new entries will appear when the project publishes an update.</p>
            <div className="inline-actions"><Link className="text-link dark" href="/updates">Browse updates in your browser <ArrowIcon size={17} /></Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
