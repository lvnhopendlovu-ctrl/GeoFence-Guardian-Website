import { SecurityCards } from "@/components/SecurityCards";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Shareable Phone Safety Cards",
  "Download practical phone-safety cards for Android preparation, lost-phone response, and travel readiness.",
  "/share",
);

export default function SharePage() {
  return (
    <>
      <section className="page-hero tool-hero"><div className="hero-grid-overlay" /><div className="shell page-hero-inner"><span className="eyebrow light">Useful information travels</span><h1>Safety cards worth<br /><em>passing forward.</em></h1><p>Download or share concise, practical Android safety reminders. No tracking code, account, or personal details are added to the images.</p></div></section>
      <section className="section share-tool-section"><div className="shell"><SecurityCards /><p className="editorial-note light-note">Share responsibly. These cards are general preparation guidance and should not replace device-specific instructions or emergency advice.</p></div></section>
    </>
  );
}
