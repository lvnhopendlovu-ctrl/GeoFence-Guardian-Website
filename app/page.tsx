import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ArrowIcon, BellIcon, FingerprintIcon, LockIcon, MapIcon, PlayStoreIcon, ShieldIcon } from "@/components/Icons";
import { PhoneDemo } from "@/components/PhoneDemo";
import { pageMetadata, playStoreUrl } from "@/lib/seo";

export const metadata = pageMetadata(
  "Android Geofence Alarm App",
  "Protect your Android device with saved zones, daily schedules, custom alerts, offline geofence checks, and secure owner controls.",
  "/",
);

const features = [
  { icon: <MapIcon />, number: "01", title: "Draw your safe zone", text: "Set a 10–500 metre radius around your current location or a centre selected on the map." },
  { icon: <BellIcon />, number: "02", title: "Know when it’s crossed", text: "A persistent full-volume alarm and optional vibration respond after a confirmed boundary breach." },
  { icon: <FingerprintIcon />, number: "03", title: "Keep control secure", text: "Biometrics or your device credential guard activation, deactivation, and alarm stopping." },
  { icon: <LockIcon />, number: "04", title: "Keep location private", text: "Zone settings, event history, and geofence decisions remain on your Android device." },
];

const currentCapabilities = ["Saved zone profiles", "Daily schedules", "Custom alarm sound", "Offline monitoring", "Event history", "Reboot restoration"];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid-overlay" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="trust-pill"><span><ShieldIcon size={16} /></span>Privacy-first protection for Android</div>
            <h1>Your safe zone.<br /><em>Always on.</em></h1>
            <p className="hero-lede">Set a secure perimeter around your device. If it moves beyond your chosen boundary, GeoFence Guardian makes sure you know.</p>
            <div className="hero-actions">
              <a className="button button-red" href={playStoreUrl} rel="noopener noreferrer" target="_blank"><PlayStoreIcon size={19} />Get it on Google Play<ArrowIcon size={18} /></a>
              <Link className="text-link" href="/demo">Try the interactive demo<ArrowIcon size={17} /></Link>
            </div>
            <div className="hero-facts" aria-label="Product highlights">
              <div><strong>10–500 m</strong><span>Flexible radius</span></div>
              <div><strong>On-device</strong><span>Location decisions</span></div>
              <div><strong>Version 8.1</strong><span>Current release</span></div>
            </div>
          </div>
          <PhoneDemo />
        </div>
        <div className="scroll-cue" aria-hidden="true"><span />Explore</div>
      </section>

      <section className="section feature-section">
        <div className="shell">
          <div className="section-heading split-heading"><div><span className="eyebrow">Quiet confidence</span><h2>A simple boundary.<br />A powerful response.</h2></div><p>Built for moments when your attention is elsewhere—but your device still needs a dependable layer of protection.</p></div>
          <div className="feature-grid">
            {features.map((feature) => <article className="feature-card" key={feature.number}><div className="feature-top"><span className="icon-box">{feature.icon}</span><span className="feature-number">{feature.number}</span></div><h3>{feature.title}</h3><p>{feature.text}</p></article>)}
          </div>
          <div className="current-capabilities">
            <div><span className="eyebrow">Now available</span><h3>More than a single boundary.</h3></div>
            <ul>{currentCapabilities.map((capability) => <li key={capability}>✓ {capability}</li>)}</ul>
            <Link className="text-link dark" href="/features">Explore every feature <ArrowIcon size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="section steps-section" id="how-it-works">
        <div className="shell steps-grid">
          <div className="steps-copy"><span className="eyebrow light">How it works</span><h2>Protected in three deliberate steps.</h2><p>No complicated setup. Choose the boundary, authenticate, and let the foreground service watch the perimeter.</p><div className="step-list"><div><span>1</span><div><strong>Choose your centre and radius</strong><p>Use the current position, map selection, or a saved profile.</p></div></div><div><span>2</span><div><strong>Securely activate</strong><p>Confirm with biometrics, PIN, pattern, or password.</p></div></div><div><span>3</span><div><strong>Move with confidence</strong><p>The app monitors in the background and alerts on a confirmed breach.</p></div></div></div></div>
          <div className="radar-card" aria-hidden="true"><div className="radar-grid" /><div className="radar-circle c1" /><div className="radar-circle c2" /><div className="radar-circle c3" /><div className="radar-sweep" /><span className="radar-pin" /><div className="radar-readout"><span>PERIMETER STATUS</span><strong><i /> SECURE</strong><small>Radius / 100 metres</small></div></div>
        </div>
      </section>

      <section className="section privacy-section">
        <div className="shell privacy-grid"><div className="privacy-mark"><div className="shield-rings"><ShieldIcon size={70} /></div></div><div className="privacy-copy"><span className="eyebrow">Privacy is the architecture</span><h2>Your location belongs to you.</h2><p>GeoFence Guardian performs boundary checks locally. Zone coordinates are not uploaded to a GeoFence Guardian server, and authentication is handled by Android’s secure system APIs.</p><ul className="check-list"><li><span>✓</span> Local geofence decisions</li><li><span>✓</span> System-managed authentication</li><li><span>✓</span> No advertising SDK</li><li><span>✓</span> Clear background monitoring</li></ul><Link className="text-link dark" href="/privacy">Read the Privacy Policy <ArrowIcon size={17} /></Link></div></div>
      </section>
      <CtaBand />
    </>
  );
}
