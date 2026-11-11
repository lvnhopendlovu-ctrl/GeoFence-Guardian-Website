import { pageMetadata } from "@/lib/seo";
import { ArrowIcon, HeartIcon, ShieldIcon } from "@/components/Icons";

export const metadata = pageMetadata(
  "Support Android App Development",
  "Support GeoFence Guardian’s ongoing Android development, reliability testing, privacy improvements, accessibility, and maintenance with a voluntary donation.",
  "/donate",
);

const donationUrl = "https://www.paypal.com/donate/?hosted_button_id=R9D67EQ7X4TJ2";

export default function DonatePage() {
  return (
    <>
      <section className="page-hero donate-hero"><div className="hero-grid-overlay" /><div className="shell donate-hero-grid"><div className="page-hero-inner"><span className="eyebrow light">Support development</span><h1>Keep the boundary<br /><em>moving forward.</em></h1><p>GeoFence Guardian is built with a simple goal: useful personal security with genuine respect for privacy. Your contribution helps sustain that work.</p></div><div className="donation-card"><span className="donation-heart"><HeartIcon size={32} /></span><span className="eyebrow">One-time contribution</span><h2>Choose what feels right.</h2><p>PayPal opens in a secure new tab, where you can select an amount and payment method.</p><a className="button button-red donation-button" href={donationUrl} rel="noopener noreferrer" target="_blank">Donate securely with PayPal <ArrowIcon size={18} /></a><small><ShieldIcon size={15} /> Payment is processed by PayPal</small></div></div></section>
      <section className="section impact-section"><div className="shell"><div className="section-heading centered"><span className="eyebrow">Where support goes</span><h2>Every contribution strengthens the project.</h2><p>Donations support the practical work that keeps protection dependable.</p></div><div className="impact-grid"><article><span>01</span><h3>Reliability &amp; testing</h3><p>Testing location, alarms, notifications, permissions, schedules, and reboot behaviour across modern Android versions.</p></article><article><span>02</span><h3>Privacy &amp; security</h3><p>Reviewing sensitive flows, improving disclosures, and keeping geofence state under the user’s control.</p></article><article><span>03</span><h3>Accessibility &amp; polish</h3><p>Improving diagnostics, documentation, interface clarity, battery behaviour, and inclusive interaction.</p></article></div></div></section>
      <section className="section gratitude-section"><div className="shell gratitude-grid"><div className="gratitude-visual"><div className="heart-ripple r1" /><div className="heart-ripple r2" /><div className="heart-ripple r3" /><HeartIcon size={50} /></div><div><span className="eyebrow light">More than a payment</span><h2>Thank you for believing in careful software.</h2><p>Financial support is never required to value the app. Using it thoughtfully, sharing constructive feedback, and telling someone who may benefit all help this project grow.</p></div></div></section>
      <section className="section faq-section"><div className="shell faq-grid"><div><span className="eyebrow">Good to know</span><h2>Donation questions.</h2></div><div className="faq-list"><details><summary>Do I need to donate to use the app?<span>+</span></summary><p>No. A donation is a voluntary way to support continued development.</p></details><details><summary>Who processes my payment?<span>+</span></summary><p>Payments are handled on PayPal’s website. GeoFence Guardian does not receive or store your payment details.</p></details><details><summary>Does a donation purchase features?<span>+</span></summary><p>No. It does not unlock features, buy priority support, or guarantee that a requested feature will be developed.</p></details></div></div></section>
    </>
  );
}
