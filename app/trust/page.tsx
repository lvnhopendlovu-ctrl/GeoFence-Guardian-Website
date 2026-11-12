import Link from "next/link";
import { ArrowIcon, LockIcon, ShieldIcon } from "@/components/Icons";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Trust Centre",
  "Review GeoFence Guardian data handling, permissions, external services, security boundaries, product limitations, and reporting channels.",
  "/trust",
);

const permissionRows = [
  ["Precise and background location", "Measure the active device against the boundary while monitoring continues."],
  ["Foreground service and notifications", "Keep monitoring visible and deliver state or alarm notifications."],
  ["Vibration and audio settings", "Produce the configured alarm response and restore the prior volume afterward."],
  ["Exact alarms", "Run user-configured daily activation and deactivation schedules."],
  ["Boot completed", "Restore active protection after a restart when Android permits it."],
  ["Internet and network state", "Load map tiles and support the optional network-loss alert."],
];

export default function TrustPage() {
  return (
    <>
      <section className="page-hero compact-hero"><div className="hero-grid-overlay" /><div className="shell page-hero-inner"><span className="eyebrow light">Trust centre</span><h1>Security claims<br /><em>with clear boundaries.</em></h1><p>What the app processes, why permissions exist, which services receive requests, and what no phone-security app can promise.</p></div></section>
      <section className="section trust-overview-section"><div className="shell trust-pillars"><article><ShieldIcon size={34} /><h2>Local by design</h2><p>Zone coordinates, preferences, recent event history, and boundary decisions are stored or processed on the Android device.</p></article><article><LockIcon size={34} /><h2>System authentication</h2><p>Android handles biometrics and device credentials. The app receives only the authentication result.</p></article><article><span className="trust-symbol">!</span><h2>Not a guarantee</h2><p>The app cannot prevent theft, replace emergency services, guarantee GPS accuracy, or recover a powered-off device.</p></article></div></section>
      <section className="section permission-section"><div className="shell trust-grid"><div><span className="eyebrow">Permission ledger</span><h2>Access has a stated purpose.</h2><p>Android versions and manufacturers may present permission names differently. Denying essential access can stop monitoring from working.</p></div><div className="permission-table">{permissionRows.map(([permission, purpose]) => <div key={permission}><strong>{permission}</strong><p>{purpose}</p></div>)}</div></div></section>
      <section className="section trust-boundaries-section"><div className="shell trust-grid"><div><span className="eyebrow light">External boundaries</span><h2>Where a network request can go.</h2></div><div className="boundary-list"><article><strong>OpenStreetMap tiles</strong><p>Viewing the map requests map tiles through OSMDroid. The provider necessarily receives network information and requested tile coordinates.</p></article><article><strong>Google Play</strong><p>Google handles app delivery, updates, ratings, and Play account activity under its own terms.</p></article><article><strong>GitHub Pages</strong><p>This public website is served by GitHub Pages. Ordinary hosting and security logs may include request metadata such as IP address and browser type.</p></article><article><strong>No GeoFence account</strong><p>The app and website do not require a GeoFence Guardian account and contain no advertising SDK.</p></article></div></div></section>
      <section className="section page-cta-section"><div className="shell page-cta"><div><span className="eyebrow">Inspect the details</span><h2>Privacy, support, and public changes.</h2><p>Read the full policy or report a reproducible concern through the public project.</p></div><div className="inline-actions"><Link className="button button-dark" href="/privacy">Privacy policy</Link><Link className="text-link dark" href="/support">Report a concern <ArrowIcon size={17} /></Link></div></div></section>
    </>
  );
}
