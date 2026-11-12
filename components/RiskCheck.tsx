"use client";

import { useMemo, useState } from "react";

type Option = { label: string; points: number };
type Question = { id: string; prompt: string; options: Option[]; advice: string };

const questions: Question[] = [
  { id: "screen-lock", prompt: "Do you use a strong PIN, password, or pattern?", options: [{ label: "Yes", points: 0 }, { label: "Not consistently", points: 12 }, { label: "No", points: 20 }], advice: "Use a strong screen lock and review what notifications reveal while locked." },
  { id: "find-hub", prompt: "Have you confirmed that Find Hub can see this phone?", options: [{ label: "Yes, I tested it", points: 0 }, { label: "It is on, but untested", points: 8 }, { label: "No / unsure", points: 18 }], advice: "Open Find Hub from another trusted device and verify that your phone appears." },
  { id: "theft-lock", prompt: "Are Android theft-protection features enabled where supported?", options: [{ label: "Yes", points: 0 }, { label: "Some of them", points: 7 }, { label: "No / unavailable", points: 14 }], advice: "Review Theft Detection Lock, Offline Device Lock, Failed Authentication Lock, and Remote Lock." },
  { id: "backup-access", prompt: "Could you access your key accounts without this phone?", options: [{ label: "Yes", points: 0 }, { label: "Only some", points: 8 }, { label: "No", points: 16 }], advice: "Keep recovery codes or another authentication method somewhere separate and secure." },
  { id: "imei", prompt: "Is the IMEI recorded somewhere away from the phone?", options: [{ label: "Yes", points: 0 }, { label: "I can retrieve it online", points: 4 }, { label: "No / unsure", points: 10 }], advice: "Record the IMEI securely for your carrier, insurer, or incident report." },
  { id: "backup", prompt: "Are important photos and documents backed up?", options: [{ label: "Recently", points: 0 }, { label: "Not recently", points: 5 }, { label: "No", points: 10 }], advice: "Back up information you cannot replace and test that it can be restored." },
  { id: "boundary", prompt: "Do you use a nearby-alert layer in higher-risk situations?", options: [{ label: "Yes", points: 0 }, { label: "Sometimes", points: 3 }, { label: "No", points: 7 }], advice: "Consider a tested geofence or proximity routine where an audible alarm is appropriate." },
  { id: "plan", prompt: "Do you have a written lost-phone response plan?", options: [{ label: "Yes", points: 0 }, { label: "I know the basics", points: 2 }, { label: "No", points: 5 }], advice: "Prepare carrier, insurer, security, and account-recovery details before an incident." },
];

function band(score: number) {
  if (score <= 20) return { label: "Well prepared", text: "Your foundations are strong. Test them periodically and keep recovery details current." };
  if (score <= 45) return { label: "Some gaps", text: "A few practical changes would significantly improve your recovery readiness." };
  return { label: "High exposure", text: "Prioritize screen lock, Find Hub, backup access, and a written response plan." };
}

export function RiskCheck() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [message, setMessage] = useState("");
  const complete = Object.keys(answers).length === questions.length;
  const score = useMemo(() => Object.values(answers).reduce((sum, value) => sum + value, 0), [answers]);
  const result = band(score);
  const gaps = questions.filter((question) => (answers[question.id] ?? 0) > 0).sort((a, b) => (answers[b.id] ?? 0) - (answers[a.id] ?? 0));

  function resultText() {
    return `My Phone Theft Risk Check result: ${score}/100 risk points (${result.label}). Check yours at https://geofenceguardians.co.za/risk-check`;
  }

  async function shareResult() {
    const text = resultText();
    try {
      if (navigator.share) await navigator.share({ title: "Phone Theft Risk Check", text, url: "https://geofenceguardians.co.za/risk-check" });
      else { await navigator.clipboard.writeText(text); setMessage("Result copied to clipboard."); }
    } catch { setMessage("Sharing was cancelled. Your result remains on this device."); }
  }

  function downloadCard() {
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 630;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.fillStyle = "#101617";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#ff173e";
    context.fillRect(72, 72, 12, 486);
    context.fillStyle = "#fffefa";
    context.font = "700 34px Arial";
    context.fillText("GEOFENCE GUARDIAN", 122, 130);
    context.font = "700 72px Arial";
    context.fillText(result.label, 122, 265);
    context.fillStyle = "#ff173e";
    context.font = "800 118px Arial";
    context.fillText(`${score}/100`, 122, 410);
    context.fillStyle = "#aeb8b7";
    context.font = "28px Arial";
    context.fillText("Phone theft risk points - lower is better", 122, 475);
    context.fillText("geofenceguardians.co.za/risk-check", 122, 535);
    const link = document.createElement("a");
    link.download = "geofence-guardian-risk-check.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    setMessage("Result card downloaded.");
  }

  return (
    <div className="risk-check">
      <div className="tool-privacy-note"><strong>Private by design</strong><span>Your answers stay in this browser tab and are not transmitted or stored.</span></div>
      <div className="risk-progress" aria-label={`${Object.keys(answers).length} of ${questions.length} answered`}><span style={{ width: `${Object.keys(answers).length / questions.length * 100}%` }} /></div>
      <div className="question-list">
        {questions.map((question, index) => (
          <fieldset className="risk-question" key={question.id}>
            <legend><span>{String(index + 1).padStart(2, "0")}</span>{question.prompt}</legend>
            <div>{question.options.map((option) => <button aria-pressed={answers[question.id] === option.points} className={answers[question.id] === option.points ? "selected" : ""} key={option.label} onClick={() => setAnswers((current) => ({ ...current, [question.id]: option.points }))} type="button">{option.label}</button>)}</div>
          </fieldset>
        ))}
      </div>
      {complete ? (
        <section className="risk-result" aria-live="polite">
          <div><span>Risk points</span><strong>{score}<small>/100</small></strong></div>
          <div><span className="eyebrow">{result.label}</span><h2>Your next useful moves.</h2><p>{result.text}</p><ol>{gaps.slice(0, 4).map((gap) => <li key={gap.id}>{gap.advice}</li>)}</ol><div className="inline-actions"><button className="button button-red" onClick={downloadCard} type="button">Download result card</button><button className="button button-outline" onClick={shareResult} type="button">Share result</button></div>{message && <p className="tool-message">{message}</p>}</div>
        </section>
      ) : <p className="completion-note">Answer every question to generate your private readiness result.</p>}
      <p className="tool-disclaimer">This educational checklist is not a security audit and cannot predict or prevent theft.</p>
    </div>
  );
}
