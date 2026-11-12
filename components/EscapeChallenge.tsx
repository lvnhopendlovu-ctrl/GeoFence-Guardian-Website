"use client";

import { useState } from "react";

const scenarios = [
  { question: "An armed device crosses the saved boundary. What should happen after the app confirms the breach?", options: ["Nothing until it reconnects", "The configured alarm response can start", "The phone is remotely erased"], answer: 1, explanation: "A confirmed boundary breach can start the configured alarm and vibration response. This visual challenge does not measure real detection time." },
  { question: "Mobile data is switched off while the perimeter is active. Which statement is accurate?", options: ["Boundary calculations can continue on-device", "GPS automatically stops", "The device becomes impossible to protect"], answer: 0, explanation: "The app calculates the boundary locally. Map tiles may not load, and an optional network-loss alert can be configured." },
  { question: "The phone restarts while protection was active. What can the current app do?", options: ["Always erase the phone", "Restore active monitoring when Android permits", "Disable every saved zone"], answer: 1, explanation: "The app can restore active protection after reboot or update, subject to Android permissions and device behaviour." },
];

export function EscapeChallenge() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [finished, setFinished] = useState(false);
  const [message, setMessage] = useState("");

  function answer(option: number) {
    if (feedback) return;
    const correct = option === scenarios[index].answer;
    if (correct) setScore((current) => current + 1);
    setFeedback(`${correct ? "Correct. " : "Not quite. "}${scenarios[index].explanation}`);
  }

  function next() {
    if (index === scenarios.length - 1) setFinished(true);
    else { setIndex((current) => current + 1); setFeedback(""); }
  }

  function reset() { setIndex(0); setScore(0); setFeedback(""); setFinished(false); setMessage(""); }

  async function share() {
    const text = `I scored ${score}/${scenarios.length} in the GeoFence Guardian escape challenge. Try it at https://geofenceguardians.co.za/demo`;
    try { if (navigator.share) await navigator.share({ title: "GeoFence Guardian challenge", text, url: "https://geofenceguardians.co.za/demo" }); else { await navigator.clipboard.writeText(text); setMessage("Challenge result copied."); } } catch { setMessage("Sharing was cancelled."); }
  }

  return (
    <div className="escape-challenge">
      {!finished ? <><div className="challenge-heading"><div><span className="eyebrow">Scenario {index + 1} / {scenarios.length}</span><h2>Can you predict the protection layer?</h2></div><strong>{score} pts</strong></div><p className="challenge-question">{scenarios[index].question}</p><div className="challenge-options">{scenarios[index].options.map((option, optionIndex) => <button disabled={Boolean(feedback)} key={option} onClick={() => answer(optionIndex)} type="button">{option}</button>)}</div>{feedback && <div className="challenge-feedback" aria-live="polite"><p>{feedback}</p><button className="button button-red" onClick={next} type="button">{index === scenarios.length - 1 ? "See result" : "Next scenario"}</button></div>}</> : <div className="challenge-result"><span className="eyebrow">Challenge complete</span><h2>{score === scenarios.length ? "Protection specialist." : score >= 2 ? "Strong instincts." : "A useful first run."}</h2><strong>{score}/{scenarios.length}</strong><p>This score reflects the educational scenarios only, not real-world device security or alarm performance.</p><div className="inline-actions"><button className="button button-red" onClick={share} type="button">Share score</button><button className="button button-outline" onClick={reset} type="button">Try again</button></div>{message && <p className="tool-message">{message}</p>}</div>}
    </div>
  );
}
