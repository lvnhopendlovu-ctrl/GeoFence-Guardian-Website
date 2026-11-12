import Link from "next/link";
import { RiskCheck } from "@/components/RiskCheck";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Phone Theft Risk Check",
  "Run a private eight-question Android phone-theft readiness check and get practical next steps without submitting personal information.",
  "/risk-check",
);

export default function RiskCheckPage() {
  return (
    <>
      <section className="page-hero tool-hero"><div className="hero-grid-overlay" /><div className="shell page-hero-inner"><span className="eyebrow light">Private readiness check</span><h1>How prepared is<br /><em>your phone?</em></h1><p>Eight practical questions. No login, analytics profile, or submitted answers. The result is educational and generated entirely in your browser.</p></div></section>
      <section className="section interactive-tool-section"><div className="shell"><RiskCheck /><div className="tool-follow-up"><p>Need help closing a gap?</p><Link href="/guides/android-theft-protection-checklist">Open the Android theft-protection checklist</Link></div></div></section>
    </>
  );
}
