import Link from "next/link";
import { ArrowIcon, BellIcon, ClockIcon, MapIcon, ShieldIcon } from "@/components/Icons";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Help Centre",
  "Set up GeoFence Guardian, grant the right Android permissions, improve background reliability, and troubleshoot location, alarm, and schedule issues.",
  "/help",
);

const setupSteps = [
  { icon: <MapIcon />, title: "Choose the centre", text: "Tap Use current or long-press the map, then set a radius between 10 and 500 metres." },
  { icon: <ShieldIcon />, title: "Grant location access", text: "Allow precise location. On Android 11 and later, open the app settings and choose Allow all the time for background monitoring." },
  { icon: <BellIcon />, title: "Allow notifications", text: "The ongoing notification tells you monitoring is active and is required for reliable foreground-service operation." },
  { icon: <ClockIcon />, title: "Configure optional schedules", text: "Enable exact alarms when Android asks so daily scheduled start and stop times can run accurately." },
];

export default function HelpPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="hero-grid-overlay" />
        <div className="shell page-hero-inner">
          <span className="eyebrow light">Help centre</span>
          <h1>Set up once.<br /><em>Protect reliably.</em></h1>
          <p>Use these steps to configure Android permissions, create a zone, and resolve the most common background-monitoring issues.</p>
        </div>
      </section>

      <section className="section setup-section">
        <div className="shell">
          <div className="section-heading centered"><span className="eyebrow">First-time setup</span><h2>Four steps to a dependable perimeter.</h2></div>
          <div className="setup-grid">
            {setupSteps.map((step, index) => <article key={step.title}><span className="icon-box">{step.icon}</span><small>Step {index + 1}</small><h3>{step.title}</h3><p>{step.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section troubleshooting-section">
        <div className="shell help-grid">
          <div><span className="eyebrow light">Troubleshooting</span><h2>Check the system before the boundary.</h2><p>Android power and permission settings vary between devices. These checks solve most problems without resetting your saved zones.</p></div>
          <div className="troubleshooting-list">
            <details open><summary>Location remains unavailable<span>+</span></summary><p>Turn on device location, grant precise location, move where the phone has a clear GPS view, and wait for the quality line to report a fresh fix.</p></details>
            <details><summary>Monitoring stops in the background<span>+</span></summary><p>Choose Allow all the time in Android Settings → Apps → GeoFence Guardian → Permissions → Location. Also remove restrictive battery optimisation for the app if your device manufacturer suspends foreground services.</p></details>
            <details><summary>The alarm has no sound<span>+</span></summary><p>Confirm notification permission, choose a valid alarm sound under Options, and make sure the device can play the selected sound. Vibration can be enabled as an additional signal.</p></details>
            <details><summary>A schedule did not start on time<span>+</span></summary><p>Open Options and confirm the schedule is enabled, the start and stop times are correct, and Android allows Alarms &amp; reminders for GeoFence Guardian.</p></details>
            <details><summary>The map does not load<span>+</span></summary><p>Map tiles require an internet connection. Geofence monitoring itself uses device location and continues offline after activation.</p></details>
            <details><summary>A boundary alert seems too sensitive<span>+</span></summary><p>Use a larger radius in places with weak GPS reception. The app already checks location age, accuracy, and consecutive outside readings before raising a breach.</p></details>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-grid">
          <div><span className="eyebrow">Frequently asked</span><h2>Important details.</h2></div>
          <div className="faq-list">
            <details><summary>Does the app upload my saved zones?<span>+</span></summary><p>No. Zone centres, radii, settings, and event history are stored in the app’s private on-device preferences.</p></details>
            <details><summary>Why does it need background location?<span>+</span></summary><p>Monitoring must compare your position with the active boundary after the app is no longer visible. The ongoing notification makes that monitoring visible.</p></details>
            <details><summary>Can I use more than one location?<span>+</span></summary><p>Yes. Save multiple named zone profiles and load the one you want before activating protection.</p></details>
            <details><summary>Does it require mobile data?<span>+</span></summary><p>No for boundary calculations and alarms. Internet access is used to download OpenStreetMap tiles when viewing the map.</p></details>
            <details><summary>How do I stop an alarm?<span>+</span></summary><p>Use the Stop Alarm control and authenticate with the device’s configured biometric, PIN, pattern, or password.</p></details>
          </div>
        </div>
      </section>

      <section className="section source-links-section">
        <div className="shell source-links-inner">
          <div><span className="eyebrow">Official guidance</span><h2>Android permission references.</h2></div>
          <div>
            <a href="https://developer.android.com/develop/sensors-and-location/location/permissions/background" rel="noopener noreferrer" target="_blank">Background location on Android <ArrowIcon size={16} /></a>
            <a href="https://developer.android.com/training/permissions/requesting" rel="noopener noreferrer" target="_blank">Runtime permission guidance <ArrowIcon size={16} /></a>
            <Link href="/support">Still need help? Open support <ArrowIcon size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
