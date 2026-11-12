import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { pageMetadata } from "@/lib/seo";
import { siteUpdates } from "@/lib/updates";

export const metadata = pageMetadata(
  "Project Updates",
  "Follow GeoFence Guardian releases, new safety resources, website improvements, and public project changes.",
  "/updates",
);

export default function UpdatesPage() {
  return (
    <>
      <section className="page-hero compact-hero"><div className="hero-grid-overlay" /><div className="shell page-hero-inner"><span className="eyebrow light">Project signal</span><h1>Small updates.<br /><em>Public record.</em></h1><p>Product releases, new safety resources, and meaningful website changes in one chronological feed.</p></div></section>
      <section className="section updates-section"><div className="shell"><div className="feed-links"><a href="/feed.xml">RSS feed</a><a href="/feed.json">JSON Feed</a></div><div className="updates-list">{siteUpdates.map((update) => <article key={update.slug}><div><span>{update.category}</span><time dateTime={update.date}>{new Date(`${update.date}T12:00:00+02:00`).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" })}</time></div><div><h2>{update.title}</h2><p>{update.summary}</p>{update.href.startsWith("http") ? <a className="text-link dark" href={update.href} rel="noopener noreferrer" target="_blank">View update <ArrowIcon size={17} /></a> : <Link className="text-link dark" href={update.href}>View update <ArrowIcon size={17} /></Link>}</div></article>)}</div></div></section>
    </>
  );
}
