import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { guides } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Android Phone Security Guides",
  "Practical, sourced guides for preparing an Android phone, responding to theft, travelling safely, and understanding offline protection.",
  "/guides",
);

export default function GuidesPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="hero-grid-overlay" />
        <div className="shell page-hero-inner">
          <span className="eyebrow light">Phone-safety field guide</span>
          <h1>Useful before.<br /><em>Calm under pressure.</em></h1>
          <p>Original, source-linked guidance for protecting an Android phone and responding safely when it goes missing.</p>
        </div>
      </section>
      <section className="section guides-section">
        <div className="shell">
          <div className="guide-grid">
            {guides.map((guide) => (
              <article className="guide-card" key={guide.slug}>
                <div className="guide-card-meta"><span>{guide.category}</span><small>{guide.readingTime}</small></div>
                <h2>{guide.title}</h2>
                <p>{guide.description}</p>
                <Link className="text-link dark" href={`/guides/${guide.slug}`}>Read the guide <ArrowIcon size={17} /></Link>
              </article>
            ))}
          </div>
          <p className="editorial-note">These guides provide general safety information, not emergency, legal, insurance, or law-enforcement advice. Product and Android behaviour can vary by device and version.</p>
        </div>
      </section>
    </>
  );
}
