import Link from "next/link";
import { GeofenceDemo } from "@/components/GeofenceDemo";
import { EscapeChallenge } from "@/components/EscapeChallenge";
import { ArrowIcon, PlayStoreIcon } from "@/components/Icons";
import { pageMetadata, playStoreUrl } from "@/lib/seo";

export const metadata = pageMetadata(
  "Interactive Geofence Demo",
  "Try an illustrative GeoFence Guardian safe-zone simulation in your browser without sharing your location.",
  "/demo",
);

export default function DemoPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="hero-grid-overlay" />
        <div className="shell page-hero-inner">
          <span className="eyebrow light">Interactive walkthrough</span>
          <h1>Cross the line.<br /><em>See the response.</em></h1>
          <p>This safe browser simulation explains the product flow without requesting your location, playing audio, or storing any input.</p>
        </div>
      </section>
      <section className="section demo-section">
        <div className="shell"><GeofenceDemo /></div>
      </section>
      <section className="section challenge-section">
        <div className="shell"><EscapeChallenge /></div>
      </section>
      <section className="section demo-explainer-section">
        <div className="shell demo-explainer-grid">
          <div><span className="eyebrow">What the app adds</span><h2>The real protection runs on Android.</h2></div>
          <div>
            <p>The installed app uses Android location services, a visible foreground notification, secure device authentication, scheduled alarms, and persistent local state. This web demo is deliberately visual only.</p>
            <div className="inline-actions">
              <a className="button button-red" href={playStoreUrl} rel="noopener noreferrer" target="_blank"><PlayStoreIcon size={18} /> Get the app</a>
              <Link className="text-link dark" href="/help">Read the setup guide <ArrowIcon size={17} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
