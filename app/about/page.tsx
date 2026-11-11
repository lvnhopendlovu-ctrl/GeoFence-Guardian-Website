import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ArrowIcon, BellIcon, LockIcon, MapIcon, ShieldIcon } from "@/components/Icons";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("About", "Why GeoFence Guardian exists, how it protects Android devices, and the principles behind its privacy-first design.", "/about");

const principles = [
  { icon: <ShieldIcon />, title: "Protection without surveillance", text: "A security tool should reduce worry without creating a new privacy trade-off. Geofence decisions happen locally." },
  { icon: <LockIcon />, title: "Control stays with the owner", text: "Sensitive actions use Android’s biometric and device-credential safeguards." },
  { icon: <BellIcon />, title: "Alerts should be unmistakable", text: "A confirmed perimeter breach can trigger persistent audio, vibration, notification, and visual responses." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero"><div className="hero-grid-overlay" /><div className="shell page-hero-inner"><span className="eyebrow light">About the project</span><h1>Peace of mind,<br /><em>built into the boundary.</em></h1><p>GeoFence Guardian began with a clear idea: an Android device should be able to watch its own perimeter—privately, simply, and with a response you cannot miss.</p></div></section>
      <section className="section origin-section"><div className="shell origin-grid"><div className="origin-map" aria-hidden="true"><div className="origin-map-lines" /><div className="origin-zone"><span /></div><div className="origin-caption"><MapIcon size={18} /><span>One active centre.<br /><strong>Your chosen radius.</strong></span></div></div><div className="origin-copy"><span className="eyebrow">The purpose</span><h2>Security can be direct and respectful.</h2><p>The app creates a safety zone around a selected position. Once active, the centre stays fixed while GeoFence Guardian monitors device location from a visible foreground service.</p><p>If the device leaves that boundary, the alarm responds. Stopping it requires secure authentication, so protection cannot be casually dismissed.</p></div></div></section>
      <section className="section values-section"><div className="shell"><div className="section-heading centered"><span className="eyebrow">What guides us</span><h2>Designed around trust.</h2><p>Every product decision starts with the person carrying the device.</p></div><div className="principle-grid">{principles.map((item) => <article className="principle-card" key={item.title}><span className="icon-box">{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
      <section className="section tech-section"><div className="shell tech-grid"><div><span className="eyebrow light">Under the hood</span><h2>Purposeful technology.<br />Fewer dependencies.</h2></div><div className="tech-details"><div><span>01</span><div><strong>Open maps</strong><p>OpenStreetMap and OSMDroid provide the visual map experience without a Google Maps API key.</p></div></div><div><span>02</span><div><strong>Native location</strong><p>Android location providers and a foreground service keep the active perimeter monitored.</p></div></div><div><span>03</span><div><strong>Durable local state</strong><p>Saved profiles, settings, schedules, and event history stay on-device; active monitoring can recover after restart.</p></div></div></div></div></section>
      <section className="section roadmap-section"><div className="shell roadmap-inner"><div><span className="eyebrow">The road ahead</span><h2>Small project.<br />Serious intent.</h2></div><div><p>Future work will focus on battery efficiency, accessibility, clearer diagnostics, profile import and export, and carefully scoped emergency-contact options. Each addition must earn its place without weakening privacy or clarity.</p><div className="inline-actions"><Link className="button button-dark" href="/releases">See what has shipped <ArrowIcon size={18} /></Link><Link className="text-link dark" href="/support">Suggest a feature <ArrowIcon size={17} /></Link></div></div></div></section>
      <CtaBand />
    </>
  );
}
