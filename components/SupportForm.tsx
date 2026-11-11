"use client";

import { FormEvent, useState } from "react";
import { repositoryUrl } from "@/lib/seo";

export function SupportForm() {
  const [category, setCategory] = useState("Bug report");
  const [device, setDevice] = useState("");
  const [androidVersion, setAndroidVersion] = useState("");
  const [details, setDetails] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = `[${category}] ${details.split("\n")[0].slice(0, 70) || "GeoFence Guardian feedback"}`;
    const body = [
      `**Category:** ${category}`,
      `**Device:** ${device || "Not provided"}`,
      `**Android version:** ${androidVersion || "Not provided"}`,
      "",
      "**Details**",
      details,
      "",
      "_Submitted from the GeoFence Guardian support page. No form data was stored by the website._",
    ].join("\n");
    const url = `${repositoryUrl}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="support-form" onSubmit={submit}>
      <div className="form-field">
        <label htmlFor="support-category">What can we help with?</label>
        <select id="support-category" onChange={(event) => setCategory(event.target.value)} value={category}>
          <option>Bug report</option>
          <option>Feature request</option>
          <option>Permission problem</option>
          <option>Alarm problem</option>
          <option>Website feedback</option>
        </select>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="support-device">Device model <span>optional</span></label>
          <input id="support-device" onChange={(event) => setDevice(event.target.value)} placeholder="e.g. Pixel 8" value={device} />
        </div>
        <div className="form-field">
          <label htmlFor="support-android">Android version <span>optional</span></label>
          <input id="support-android" onChange={(event) => setAndroidVersion(event.target.value)} placeholder="e.g. Android 16" value={androidVersion} />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="support-details">Details</label>
        <textarea id="support-details" minLength={10} onChange={(event) => setDetails(event.target.value)} placeholder="Describe what happened, what you expected, and any steps that reproduce it." required rows={7} value={details} />
      </div>
      <button className="button button-red" type="submit">Continue to GitHub</button>
      <p className="form-privacy">This website does not submit or store the form. Your browser opens a pre-filled GitHub issue that you can review before posting.</p>
    </form>
  );
}
