"use client";

import { useState } from "react";

const initialPlan = { owner: "", backupContact: "", carrier: "", imei: "", insurer: "", policy: "", securityContact: "", notes: "" };

export function EmergencyPlan() {
  const [plan, setPlan] = useState(initialPlan);
  const [message, setMessage] = useState("");

  function update(field: keyof typeof plan, value: string) {
    setPlan((current) => ({ ...current, [field]: value }));
  }

  function downloadText() {
    const content = [
      "GEOFENCE GUARDIAN - LOST PHONE EMERGENCY PLAN",
      "",
      `Owner / device label: ${plan.owner || "Not provided"}`,
      `Trusted backup contact: ${plan.backupContact || "Not provided"}`,
      `Mobile provider: ${plan.carrier || "Not provided"}`,
      `IMEI: ${plan.imei || "Not provided"}`,
      `Insurer: ${plan.insurer || "Not provided"}`,
      `Policy / reference: ${plan.policy || "Not provided"}`,
      `Security / reporting contact: ${plan.securityContact || "Not provided"}`,
      `Notes: ${plan.notes || "None"}`,
      "",
      "FIRST RESPONSE",
      "1. Use Find Hub to play a sound or review the last known location.",
      "2. Do not confront a suspected thief or enter an unsafe location.",
      "3. Mark the device as lost or use Remote Lock when available.",
      "4. Contact the carrier, insurer, security team, or authorities as appropriate.",
      "5. Protect high-risk accounts and decide carefully before remote erasure.",
      "",
      "Do not store passwords, PINs, recovery codes, or banking credentials in this plan.",
    ].join("\n");
    const url = URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "lost-phone-emergency-plan.txt";
    link.click();
    URL.revokeObjectURL(url);
    setMessage("Emergency plan downloaded.");
  }

  return (
    <div className="plan-builder">
      <div className="tool-privacy-note"><strong>Nothing is submitted</strong><span>Plan details remain in this tab. Avoid entering passwords, PINs, banking credentials, or recovery codes.</span></div>
      <div className="plan-layout">
        <form className="plan-form" onSubmit={(event) => event.preventDefault()}>
          <label>Owner or device label<input autoComplete="off" onChange={(event) => update("owner", event.target.value)} placeholder="Example: My daily phone" value={plan.owner} /></label>
          <label>Trusted backup contact<input autoComplete="off" onChange={(event) => update("backupContact", event.target.value)} placeholder="Name and safe contact method" value={plan.backupContact} /></label>
          <label>Mobile provider<input autoComplete="off" onChange={(event) => update("carrier", event.target.value)} placeholder="Carrier and support number" value={plan.carrier} /></label>
          <label>IMEI<input autoComplete="off" inputMode="numeric" onChange={(event) => update("imei", event.target.value)} placeholder="Store this plan away from the phone" value={plan.imei} /></label>
          <div className="form-row"><label>Insurer<input autoComplete="off" onChange={(event) => update("insurer", event.target.value)} value={plan.insurer} /></label><label>Policy / reference<input autoComplete="off" onChange={(event) => update("policy", event.target.value)} value={plan.policy} /></label></div>
          <label>Campus, workplace, or local reporting contact<input autoComplete="off" onChange={(event) => update("securityContact", event.target.value)} value={plan.securityContact} /></label>
          <label>Safe notes<textarea onChange={(event) => update("notes", event.target.value)} placeholder="Device model, case colour, or reporting steps - never passwords" rows={4} value={plan.notes} /></label>
        </form>
        <article className="plan-preview" id="emergency-plan-preview">
          <span className="eyebrow">Lost-phone plan</span><h2>{plan.owner || "My Android phone"}</h2>
          <dl><div><dt>Backup contact</dt><dd>{plan.backupContact || "Add a trusted contact"}</dd></div><div><dt>Mobile provider</dt><dd>{plan.carrier || "Add provider details"}</dd></div><div><dt>IMEI</dt><dd>{plan.imei || "Record away from the phone"}</dd></div><div><dt>Insurer / policy</dt><dd>{[plan.insurer, plan.policy].filter(Boolean).join(" / ") || "Add if applicable"}</dd></div><div><dt>Reporting contact</dt><dd>{plan.securityContact || "Add the appropriate route"}</dd></div></dl>
          {plan.notes && <div className="plan-notes"><strong>Notes</strong><p>{plan.notes}</p></div>}
          <ol><li>Check nearby and use Find Hub.</li><li>Lock the device without confronting anyone.</li><li>Preserve the location, time, model, and IMEI.</li><li>Contact the relevant provider or authority.</li><li>Protect accounts; erase only after considering the trade-off.</li></ol>
          <small>Generated locally at geofenceguardians.co.za</small>
        </article>
      </div>
      <div className="plan-actions"><button className="button button-red" onClick={() => window.print()} type="button">Print or save as PDF</button><button className="button button-dark" onClick={downloadText} type="button">Download text copy</button><button className="button button-outline" onClick={() => setPlan(initialPlan)} type="button">Clear form</button></div>
      {message && <p className="tool-message">{message}</p>}
    </div>
  );
}
