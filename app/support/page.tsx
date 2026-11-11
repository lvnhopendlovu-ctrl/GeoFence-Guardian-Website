import { SupportForm } from "@/components/SupportForm";
import { ArrowIcon, StarIcon } from "@/components/Icons";
import { pageMetadata, rateAppUrl, repositoryUrl } from "@/lib/seo";

export const metadata = pageMetadata(
  "Support and Feedback",
  "Report a GeoFence Guardian problem, request a feature, share website feedback, or rate the Android app on Google Play.",
  "/support",
);

export default function SupportPage() {
  return (
    <>
      <section className="page-hero compact-hero"><div className="hero-grid-overlay" /><div className="shell page-hero-inner"><span className="eyebrow light">Support &amp; feedback</span><h1>Make the next release<br /><em>more useful.</em></h1><p>Describe a problem or idea below. The form prepares a GitHub issue in your browser so you remain in control of what gets posted.</p></div></section>
      <section className="section support-section">
        <div className="shell support-grid">
          <div><span className="eyebrow">Create a report</span><h2>Useful details make fixes faster.</h2><p>Include the phone model, Android version, expected result, actual result, and repeatable steps when possible. Never include passwords, precise home coordinates, or other sensitive information.</p><a className="text-link dark" href={`${repositoryUrl}/issues`} rel="noopener noreferrer" target="_blank">View existing issues <ArrowIcon size={17} /></a></div>
          <SupportForm />
        </div>
      </section>
      <section className="section feedback-options-section"><div className="shell feedback-options"><article><StarIcon size={30} /><h3>Enjoying the app?</h3><p>A Google Play rating helps other Android users find the project.</p><a className="button button-dark" href={rateAppUrl} rel="noopener noreferrer" target="_blank">Rate the app</a></article><article><ArrowIcon size={30} /><h3>Need setup help?</h3><p>Review permissions, battery settings, schedules, alarm checks, and common fixes.</p><a className="button button-dark" href="/help">Open help centre</a></article></div></section>
    </>
  );
}
