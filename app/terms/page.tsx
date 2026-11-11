import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Terms of Use",
  "Terms governing use of the GeoFence Guardian Android app, website, alerts, maps, schedules, support tools, and voluntary donations.",
  "/terms",
);

export default function TermsPage() {
  return (
    <>
      <section className="page-hero legal-hero"><div className="hero-grid-overlay" /><div className="shell page-hero-inner"><span className="eyebrow light">Terms of use</span><h1>Use the boundary<br /><em>with good judgement.</em></h1><p>Effective 10 November 2026 · These terms apply to the Android app and this website.</p></div></section>
      <section className="section legal-section"><div className="shell legal-layout"><aside><span>On this page</span><a href="#purpose">Purpose</a><a href="#responsibilities">Responsibilities</a><a href="#limitations">Limitations</a><a href="#third-parties">Third parties</a><a href="#support">Support</a></aside><article className="legal-copy">
        <section id="purpose"><h2>Purpose and acceptance</h2><p>GeoFence Guardian is a personal Android geofence-alert tool. By installing the app or using this website, you agree to these terms. If you do not agree, do not use the app or website.</p></section>
        <section><h2>Not an emergency or tracking service</h2><p>The app is not a substitute for emergency services, professional security, medical monitoring, theft recovery, child supervision, or guaranteed real-time tracking. It does not contact emergency responders or another person on your behalf.</p></section>
        <section id="responsibilities"><h2>Your responsibilities</h2><ul><li>Choose a radius appropriate for local GPS conditions and test the alarm before relying on it.</li><li>Keep required Android permissions, notifications, location services, battery settings, and audio settings correctly configured.</li><li>Use the app only on a device you own or are authorised to control.</li><li>Do not use the app or website unlawfully, to invade another person’s privacy, or to misrepresent its capabilities.</li><li>Keep your Android device and Google Play updates reasonably current.</li></ul></section>
        <section id="limitations"><h2>Location and alert limitations</h2><p>GPS accuracy, buildings, weather, device hardware, battery restrictions, Android changes, map availability, network conditions, selected settings, and force-stopping the app can affect timing or availability. Alerts may be delayed, duplicated, missed, or triggered near a boundary. Schedules depend on Android alarm permissions and device time.</p></section>
        <section><h2>No warranty</h2><p>The app and website are provided on an “as available” basis. To the extent permitted by applicable law, no guarantee is made that they will be uninterrupted, error-free, suitable for a particular safety scenario, or compatible with every Android device.</p></section>
        <section><h2>Limitation of liability</h2><p>To the extent permitted by applicable law, the project developer is not liable for indirect, incidental, special, or consequential loss arising from reliance on the app, missed or false alerts, device loss, data loss, or third-party service availability. Rights that cannot lawfully be excluded remain unaffected.</p></section>
        <section id="third-parties"><h2>Third-party services</h2><p>Google Play, Android, OpenStreetMap tile services, GitHub, PayPal, and website-hosting providers operate under their own terms and policies. Their availability and conduct are outside GeoFence Guardian’s direct control.</p></section>
        <section><h2>Donations</h2><p>Donations are voluntary and do not purchase enhanced app functionality, priority support, ownership, or a guaranteed feature. Payment processing and any refund eligibility are governed by PayPal and applicable law.</p></section>
        <section><h2>Changes and availability</h2><p>Features, compatibility, and these terms may change as the project develops. A revised effective date will be shown when terms are updated. The app or website may be modified, suspended, or discontinued.</p></section>
        <section id="support"><h2>Support and questions</h2><p>Use the <Link href="/support">Support &amp; feedback page</Link> for product questions. Review the <Link href="/privacy">Privacy Policy</Link> for information-handling details. These terms are a practical project document and not legal advice.</p></section>
      </article></div></section>
    </>
  );
}
