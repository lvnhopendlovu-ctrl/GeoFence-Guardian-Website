import Link from "next/link";
import { ArrowIcon, LockIcon, MapIcon, ShieldIcon, StarIcon } from "@/components/Icons";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Free Phone Safety Tools",
  "Use a private phone-theft risk check, build an emergency plan, download security cards, and try the GeoFence Guardian challenge.",
  "/tools",
);

const tools = [
  { href: "/risk-check", icon: <ShieldIcon />, label: "2 minute check", title: "Phone Theft Risk Check", text: "Answer eight practical questions and receive a private, shareable readiness score." },
  { href: "/emergency-plan", icon: <LockIcon />, label: "Browser only", title: "Emergency Plan Builder", text: "Prepare a printable response sheet without sending personal details to a server." },
  { href: "/share", icon: <StarIcon />, label: "Download and share", title: "Security Cards", text: "Create practical phone-safety cards for friends, family, campus groups, or travel." },
  { href: "/demo", icon: <MapIcon />, label: "Interactive", title: "Geofence Challenge", text: "Explore a visual boundary and test your understanding of offline, reboot, and breach behaviour." },
];

export default function ToolsPage() {
  return (
    <>
      <section className="page-hero compact-hero"><div className="hero-grid-overlay" /><div className="shell page-hero-inner"><span className="eyebrow light">Free safety lab</span><h1>Useful tools.<br /><em>No account required.</em></h1><p>Everything here runs in the browser. No answers, plan details, or card choices are sent to GeoFence Guardian.</p></div></section>
      <section className="section tools-section"><div className="shell tool-grid">{tools.map((tool) => <article className="tool-card" key={tool.href}><span className="icon-box">{tool.icon}</span><small>{tool.label}</small><h2>{tool.title}</h2><p>{tool.text}</p><Link className="text-link dark" href={tool.href}>Open tool <ArrowIcon size={17} /></Link></article>)}</div></section>
    </>
  );
}
