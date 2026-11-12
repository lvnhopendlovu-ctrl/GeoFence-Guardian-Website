import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Privacy Policy",
  "How GeoFence Guardian handles location, saved zones, event history, authentication, map requests, website visits, and voluntary donations.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero legal-hero"><div className="hero-grid-overlay" /><div className="shell page-hero-inner"><span className="eyebrow light">Privacy policy</span><h1>Your location<br /><em>stays under your control.</em></h1><p>Effective 10 November 2026 · Applies to the GeoFence Guardian Android app and this website.</p></div></section>
      <section className="section legal-section">
        <div className="shell legal-layout">
          <aside><span>On this page</span><a href="#app-data">App data</a><a href="#permissions">Permissions</a><a href="#external-services">External services</a><a href="#website">Website</a><a href="#choices">Your choices</a><a href="#contact">Contact</a></aside>
          <article className="legal-copy">
            <section><h2>Privacy in plain language</h2><p>GeoFence Guardian uses location to compare the Android device with a boundary chosen by the user. Geofence decisions, saved zone coordinates, settings, and event history are processed and stored on the device. The app contains no advertising SDK and does not use location for advertising or analytics.</p></section>
            <section id="app-data"><h2>Information processed by the Android app</h2><h3>Location and zone data</h3><p>The app processes precise or approximate device location, the selected zone centre, radius, location accuracy, and the time of recent fixes. This is necessary to activate and monitor the perimeter.</p><h3>Settings and local history</h3><p>Saved profiles, schedule times, alarm preferences, vibration preference, network-alert preference, active state, and up to 100 recent event-history entries are stored in private app preferences on the device.</p><h3>Authentication</h3><p>Android handles biometric and device-credential authentication. GeoFence Guardian receives only the success, failure, or cancellation result and does not receive fingerprint, face, PIN, pattern, or password data.</p></section>
            <section id="permissions"><h2>Why permissions are requested</h2><ul><li><strong>Precise and background location:</strong> to monitor the active boundary while the app is not visible.</li><li><strong>Notifications and foreground service:</strong> to show that monitoring is running and to deliver alarm status.</li><li><strong>Vibration and audio settings:</strong> to produce and manage the selected alert.</li><li><strong>Exact alarms:</strong> to run user-configured daily schedules.</li><li><strong>Boot completed:</strong> to restore active monitoring after restart.</li><li><strong>Internet and network state:</strong> to retrieve map tiles and optionally detect a lost network connection.</li></ul></section>
            <section id="external-services"><h2>External services</h2><p>The map uses OpenStreetMap tiles through OSMDroid. Requesting a map tile necessarily sends network information such as an IP address and the requested tile coordinates to the tile provider; those coordinates describe the viewed map area. Geofence calculations and stored zone profiles are not uploaded to a GeoFence Guardian server.</p><p>Google Play handles app distribution, updates, and ratings under Google’s own privacy terms. If you choose to donate, PayPal processes the payment on its website. GeoFence Guardian does not receive card or account credentials.</p></section>
            <section id="website"><h2>Website data</h2><p>The website does not run advertising analytics or create user accounts. Its hosting infrastructure may process ordinary request information such as IP address, browser type, requested page, timestamps, and security logs to deliver and protect the site. The interactive demo, risk check, emergency plan builder, challenge, and safety-card generator run in the browser. Their answers and form fields are not transmitted to GeoFence Guardian. The support form does not transmit data to this website; it opens a pre-filled GitHub issue for review.</p></section>
            <section><h2>Retention and deletion</h2><p>App information remains on the device until it is replaced, deleted in the app where that control exists, cleared through Android app storage, or removed by uninstalling the app. Event history retains up to 100 entries. External services apply their own retention practices.</p></section>
            <section id="choices"><h2>Your choices</h2><p>You can deny or revoke permissions in Android Settings, deactivate monitoring, disable optional vibration, network alerts, and schedules, delete saved profiles, clear app storage, or uninstall the app. Revoking location or notification permissions may prevent core monitoring from working reliably.</p></section>
            <section><h2>Children</h2><p>The app and website are general-purpose tools and are not directed specifically at children. GeoFence Guardian does not knowingly operate an account system or intentionally collect children’s personal information.</p></section>
            <section><h2>Changes to this policy</h2><p>Material changes will be published on this page with a revised effective date. The release notes may also identify privacy-relevant product changes.</p></section>
            <section id="contact"><h2>Questions or requests</h2><p>Use the <Link href="/support">Support &amp; feedback page</Link> to open a public project issue. Do not include precise location, credentials, or other sensitive information. This policy is an operational description of the product and is not legal advice.</p></section>
          </article>
        </div>
      </section>
    </>
  );
}
