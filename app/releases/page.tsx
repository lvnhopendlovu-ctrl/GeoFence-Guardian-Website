import { ArrowIcon, HistoryIcon } from "@/components/Icons";
import { currentVersion, pageMetadata, playStoreUrl } from "@/lib/seo";

export const metadata = pageMetadata(
  "Release Notes",
  "See what changed in GeoFence Guardian version 8.1 and review the major reliability, saved-zone, schedule, and interface improvements from recent releases.",
  "/releases",
);

const releases = [
  {
    version: "8.1",
    date: "10 November 2026",
    current: true,
    summary: "A clearer interface and a more discoverable set of controls.",
    changes: ["New navigation drawer for Saved zones, Options, History, and rating", "One-time Google Play rating prompt after ten app launches", "Improved drawer branding, logo fitting, and contrast", "Release version code advanced to 9"],
  },
  {
    version: "5.2",
    date: "9 November 2026",
    summary: "The major reliability and workflow release.",
    changes: ["Saved zone profiles with reusable settings", "Daily scheduled activation and deactivation", "Custom alarm sound, vibration control, and optional network-loss alarm", "Offline boundary calculations and local event history", "Fresh-location, accuracy, and consecutive-reading validation", "Automatic active-state restoration after reboot or app update"],
  },
  {
    version: "5.1",
    date: "23 July 2026",
    summary: "Core geofence monitoring and secure alarm controls.",
    changes: ["Adjustable 10–500 metre safety radius", "Foreground location monitoring with visible notification", "Biometric or device-credential control", "Persistent alarm and vibration response", "OpenStreetMap map interface"],
  },
];

export default function ReleasesPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="hero-grid-overlay" />
        <div className="shell page-hero-inner">
          <span className="eyebrow light">Release notes</span>
          <h1>Protection that<br /><em>keeps improving.</em></h1>
          <p>The current public version is {currentVersion}. This history focuses on user-visible changes and the reliability work behind them.</p>
        </div>
      </section>
      <section className="section releases-section">
        <div className="shell releases-list">
          {releases.map((release) => (
            <article className={release.current ? "current" : ""} key={release.version}>
              <div className="release-meta"><span><HistoryIcon size={20} /></span><strong>Version {release.version}</strong><small>{release.date}</small>{release.current && <em>Current</em>}</div>
              <div className="release-copy"><h2>{release.summary}</h2><ul>{release.changes.map((change) => <li key={change}>{change}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>
      <section className="section page-cta-section"><div className="shell page-cta"><div><span className="eyebrow">Stay current</span><h2>Update through Google Play.</h2><p>Google Play delivers the signed production release and future updates.</p></div><a className="button button-red" href={playStoreUrl} rel="noopener noreferrer" target="_blank">Open Google Play <ArrowIcon size={18} /></a></div></section>
    </>
  );
}
