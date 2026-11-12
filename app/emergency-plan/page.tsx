import Link from "next/link";
import { EmergencyPlan } from "@/components/EmergencyPlan";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Lost Phone Emergency Plan Builder",
  "Create and print a private lost-phone response plan in your browser without sending device or contact details to a server.",
  "/emergency-plan",
);

export default function EmergencyPlanPage() {
  return (
    <>
      <section className="page-hero tool-hero"><div className="hero-grid-overlay" /><div className="shell page-hero-inner"><span className="eyebrow light">Prepare before the emergency</span><h1>A lost-phone plan<br /><em>you can actually use.</em></h1><p>Collect the safe details you would need under pressure, then print or download the result. Nothing is uploaded or saved by this website.</p></div></section>
      <section className="section interactive-tool-section"><div className="shell"><EmergencyPlan /><div className="tool-follow-up"><p>Review the response sequence before an incident.</p><Link href="/guides/lost-android-first-15-minutes">Read the first 15 minutes guide</Link></div></div></section>
    </>
  );
}
