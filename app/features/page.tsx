import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { ArrowIcon, BellIcon, ClockIcon, FingerprintIcon, HistoryIcon, LockIcon, MapIcon, VolumeIcon, WifiIcon } from "@/components/Icons";

export const metadata = pageMetadata(
  "Android Geofence Features",
  "Explore saved zones, scheduled monitoring, offline geofence checks, custom alarms, event history, secure controls, and recovery features in GeoFence Guardian.",
  "/features",
);

const features = [
  { icon: <MapIcon />, title: "Flexible safe zones", text: "Choose a 10–500 metre radius, use your current position, or long-press the map to set a different centre." },
  { icon: <MapIcon />, title: "Saved zone profiles", text: "Save named combinations of centre, radius, alarm, vibration, network, and schedule settings for quick reuse." },
  { icon: <ClockIcon />, title: "Daily schedules", text: "Set a daily start and stop window so protection can activate around a predictable routine." },
  { icon: <VolumeIcon />, title: "Custom alert controls", text: "Choose an alarm sound and decide whether vibration should accompany a perimeter breach." },
  { icon: <WifiIcon />, title: "Offline monitoring", text: "Boundary calculations use device location and continue without an internet connection. Network-loss alerts are optional." },
  { icon: <HistoryIcon />, title: "Local event history", text: "Review the latest 100 activation, deactivation, schedule, network, and alarm events stored on your device." },
  { icon: <FingerprintIcon />, title: "Secure owner controls", text: "Biometrics or the device PIN, pattern, or password protect sensitive controls and alarm stopping." },
  { icon: <BellIcon />, title: "Reliable breach response", text: "Accuracy checks, fresh-location checks, two-reading confirmation, vibration, and persistent alarm playback reduce false or missed alerts." },
  { icon: <LockIcon />, title: "Automatic restoration", text: "Active protection can recover after a reboot or app update, while original alarm volume is restored after the alert ends." },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="hero-grid-overlay" />
        <div className="shell page-hero-inner">
          <span className="eyebrow light">Version 8.1</span>
          <h1>Every useful layer.<br /><em>Nothing ornamental.</em></h1>
          <p>Protection is built from clear controls, careful location validation, strong alarms, and local state that survives everyday interruptions.</p>
        </div>
      </section>

      <section className="section feature-catalog-section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">Complete toolkit</span><h2>Built for real routines.</h2></div>
            <p>Every feature below is available in the current Android release. Nothing here is a speculative roadmap item.</p>
          </div>
          <div className="feature-catalog">
            {features.map((feature, index) => (
              <article className="catalog-card" key={feature.title}>
                <span className="icon-box">{feature.icon}</span>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section safety-layers-section">
        <div className="shell safety-layers-grid">
          <div><span className="eyebrow light">Reliability by design</span><h2>Three checks before the alarm.</h2></div>
          <ol>
            <li><span>01</span><div><strong>Fresh location</strong><p>Old or low-quality fixes are rejected before activation and breach decisions.</p></div></li>
            <li><span>02</span><div><strong>Stable boundary result</strong><p>Consecutive outside readings and a small accuracy buffer reduce GPS-edge noise.</p></div></li>
            <li><span>03</span><div><strong>Persistent response</strong><p>The alarm, vibration, notification, and secure stop flow work together once a breach is confirmed.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section page-cta-section">
        <div className="shell page-cta">
          <div><span className="eyebrow">Try before installing</span><h2>See the perimeter react.</h2><p>Use the browser demo to adjust a radius, activate protection, and simulate a boundary crossing.</p></div>
          <Link className="button button-red" href="/demo">Open interactive demo <ArrowIcon size={18} /></Link>
        </div>
      </section>
    </>
  );
}
