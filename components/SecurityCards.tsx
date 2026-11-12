"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

const cards = [
  { kicker: "BEFORE IT GOES MISSING", title: "Five things to configure today", steps: ["Use a strong screen lock", "Test Find Hub", "Enable supported theft protection", "Store backup access separately", "Record the IMEI securely"], accent: "#ff173e" },
  { kicker: "FIRST 15 MINUTES", title: "A calm lost-phone response", steps: ["Check nearby and play a sound", "Review location without confronting anyone", "Mark the device as lost", "Contact the provider or security route", "Erase only after considering recovery"], accent: "#2196f3" },
  { kicker: "TRAVEL READY", title: "Do not let one phone hold every key", steps: ["Keep backup authentication separate", "Back up important documents", "Save carrier details", "Use a consistent bag or pocket", "Know the local reporting route"], accent: "#4caf50" },
];

function drawCard(index: number) {
  const card = cards[index];
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1080;
  const context = canvas.getContext("2d");
  if (!context) return null;
  context.fillStyle = "#101617";
  context.fillRect(0, 0, 1080, 1080);
  context.fillStyle = card.accent;
  context.fillRect(70, 70, 14, 940);
  context.fillStyle = "#fffefa";
  context.font = "800 28px Arial";
  context.fillText("GEOFENCE GUARDIAN", 130, 130);
  context.fillStyle = card.accent;
  context.font = "800 24px Arial";
  context.fillText(card.kicker, 130, 205);
  context.fillStyle = "#fffefa";
  context.font = "800 58px Arial";
  const words = card.title.split(" ");
  let line = "";
  let y = 290;
  for (const word of words) {
    const test = `${line}${word} `;
    if (context.measureText(test).width > 820 && line) { context.fillText(line.trim(), 130, y); line = `${word} `; y += 72; }
    else line = test;
  }
  context.fillText(line.trim(), 130, y);
  y += 105;
  context.font = "32px Arial";
  card.steps.forEach((step, stepIndex) => { context.fillStyle = card.accent; context.fillText(String(stepIndex + 1).padStart(2, "0"), 130, y); context.fillStyle = "#d9dfde"; context.fillText(step, 205, y); y += 78; });
  context.fillStyle = "#8e9998";
  context.font = "25px Arial";
  context.fillText("geofenceguardians.co.za/guides", 130, 970);
  return canvas;
}

export function SecurityCards() {
  const [message, setMessage] = useState("");

  function download(index: number) {
    const canvas = drawCard(index);
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `geofence-guardian-safety-card-${index + 1}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    setMessage("Safety card downloaded.");
  }

  async function share(index: number) {
    const canvas = drawCard(index);
    if (!canvas) return;
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
    if (!blob) return;
    const file = new File([blob], `geofence-guardian-safety-card-${index + 1}.png`, { type: "image/png" });
    try {
      if (navigator.share && navigator.canShare?.({ files: [file] })) await navigator.share({ title: cards[index].title, text: "A practical Android phone-safety card from GeoFence Guardian.", files: [file] });
      else { download(index); setMessage("Direct image sharing is unavailable here, so the card was downloaded."); }
    } catch { setMessage("Sharing was cancelled."); }
  }

  return (
    <div className="security-card-tool">
      <div className="share-card-grid">{cards.map((card, index) => <article className="share-card" key={card.title} style={{ "--card-accent": card.accent } as CSSProperties}><small>{card.kicker}</small><h2>{card.title}</h2><ol>{card.steps.map((step) => <li key={step}>{step}</li>)}</ol><div><button className="button button-light" onClick={() => download(index)} type="button">Download PNG</button><button className="button button-outline-light" onClick={() => share(index)} type="button">Share</button></div></article>)}</div>
      {message && <p className="tool-message">{message}</p>}
    </div>
  );
}
