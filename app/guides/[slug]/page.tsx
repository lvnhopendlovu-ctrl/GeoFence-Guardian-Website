import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/Icons";
import { getGuide, guides } from "@/lib/guides";
import { pageMetadata, siteName, siteUrl } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMetadata(guide.title, guide.description, `/guides/${guide.slug}`);
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        datePublished: "2026-11-12",
        dateModified: "2026-11-12",
        inLanguage: "en-ZA",
        mainEntityOfPage: `${siteUrl}/guides/${guide.slug}`,
        author: { "@type": "Organization", name: siteName, url: siteUrl },
        publisher: { "@type": "Organization", name: siteName, url: siteUrl },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${siteUrl}/guides` },
          { "@type": "ListItem", position: 3, name: guide.title, item: `${siteUrl}/guides/${guide.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} type="application/ld+json" />
      <section className="page-hero guide-hero">
        <div className="hero-grid-overlay" />
        <div className="shell page-hero-inner">
          <Link className="guide-back" href="/guides">Guides / {guide.category}</Link>
          <h1>{guide.title}</h1>
          <p>{guide.description}</p>
          <div className="guide-reading-meta"><span>Updated 12 November 2026</span><span>{guide.readingTime} read</span></div>
        </div>
      </section>
      <section className="section guide-article-section">
        <div className="shell guide-layout">
          <aside>
            <span>In this guide</span>
            {guide.sections.map((section) => <a href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} key={section.heading}>{section.heading}</a>)}
            <a href="#sources">Sources</a>
          </aside>
          <article className="guide-copy">
            <div className="guide-summary"><strong>In brief</strong><p>{guide.summary}</p></div>
            {guide.sections.map((section) => {
              const id = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              return (
                <section id={id} key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                </section>
              );
            })}
            <section id="sources">
              <h2>Sources and further reading</h2>
              <ul className="source-list">
                {guide.sources.map((source) => <li key={source.href}><a href={source.href} rel="noopener noreferrer" target="_blank">{source.label} <ArrowIcon size={15} /></a></li>)}
              </ul>
              <p className="guide-disclaimer">This guide is general safety information. Device features vary by Android version, manufacturer, region, and configuration. Follow the current instructions shown on your own device and by the relevant service provider.</p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
