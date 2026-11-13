"use client";

import { useState } from "react";

type QuizChoice = {
  label: string;
  points: number;
  response: string;
};

type QuizQuestion = {
  question: string;
  aside: string;
  yes: QuizChoice;
  no: QuizChoice;
};

const questions: QuizQuestion[] = [
  {
    question: "Does she like you?",
    aside: "Establishing whether this is romance or an extremely patient networking event.",
    yes: { label: "Apparently, yes", points: 0, response: "Promising. Love remains the leading theory." },
    no: { label: "The data is unclear", points: 5, response: "Concerning for your heart; inconclusive for national security." },
  },
  {
    question: "Is she Chinese?",
    aside: "Careful. This question is a trap for the person taking the quiz.",
    yes: { label: "Yes", points: 0, response: "Zero points. Nationality is not evidence of espionage." },
    no: { label: "No", points: 0, response: "Also zero points. Geography has failed to solve the case." },
  },
  {
    question: "Is she unusually interested in your work?",
    aside: "There is a fine line between emotional support and requesting the full architecture diagram.",
    yes: { label: "Very interested", points: 5, response: "Could be love. Could be excellent stakeholder management." },
    no: { label: "She changes the subject", points: 0, response: "Your proprietary roadmap remains safely boring." },
  },
  {
    question: "Do you get government contracts?",
    aside: "Bonus suspense if the answer is classified.",
    yes: { label: "I can neither confirm nor deny", points: 15, response: "Corporate security has entered the chat." },
    no: { label: "Nope", points: 0, response: "The nation may survive this relationship after all." },
  },
  {
    question: "Are you in tech?",
    aside: "A startup hoodie is not a security clearance, but it is circumstantial evidence of bad posture.",
    yes: { label: "Yes", points: 10, response: "Add ten points and remove one point for every unfinished side project." },
    no: { label: "Mercifully, no", points: 0, response: "Excellent. Your secrets are probably recipes and Wi-Fi passwords." },
  },
  {
    question: "Did your first date include the phrase “export controls”?",
    aside: "Nothing says candlelight like a detailed discussion of restricted accelerators.",
    yes: { label: "Before dessert", points: 20, response: "Romance rating: complicated. Compliance rating: alarmed." },
    no: { label: "Just normal small talk", points: 0, response: "Boring, healthy, and disappointingly uncinematic." },
  },
  {
    question: "Has she ever asked how many GPUs fit in a carry-on?",
    aside: "A perfectly ordinary packing question for a perfectly ordinary weekend away.",
    yes: { label: "She had a spreadsheet", points: 20, response: "The spreadsheet is what moved this from quirky to quarterly review." },
    no: { label: "Only shoes", points: 0, response: "Conventional baggage detected." },
  },
  {
    question: "Does she call your laptop “the primary objective”?",
    aside: "Pet names have become very operational lately.",
    yes: { label: "Only in public", points: 15, response: "Your relationship may have a mission statement." },
    no: { label: "She calls it ancient", points: 0, response: "A brutal but credible civilian assessment." },
  },
  {
    question: "Was your anniversary gift a Faraday bag?",
    aside: "Thoughtful, practical, and impossible to reach by phone.",
    yes: { label: "With a bow", points: 10, response: "Secure love language unlocked." },
    no: { label: "It was socks", points: 0, response: "Socks: still undefeated by counter-intelligence." },
  },
  {
    question: "Has she asked for your MFA code “to feel closer”?",
    aside: "True love is never having to say your one-time password out loud.",
    yes: { label: "It seemed romantic", points: 30, response: "Abort the quiz. Call IT. Change your password. Then reconsider your type." },
    no: { label: "Absolutely not", points: 0, response: "Congratulations on maintaining both romance and basic access control." },
  },
];

function getResult(score: number) {
  if (score <= 15) {
    return {
      label: "Hopeless romantic",
      headline: "Your biggest vulnerability may be this quiz.",
      copy: "The threat meter barely moved. Carry on, use a password manager, and try listening when she talks.",
    };
  }

  if (score <= 45) {
    return {
      label: "Suspiciously employable",
      headline: "Probably love. Possibly a mandatory security refresher.",
      copy: "Nothing here identifies a spy, but your approach to confidential information could use a software update.",
    };
  }

  if (score <= 85) {
    return {
      label: "Corporate security would like a word",
      headline: "The romance has entered enhanced due diligence.",
      copy: "Do not panic. Do stop emailing sensitive PDFs to yourself and calling it “the cloud.”",
    };
  }

  return {
    label: "Jensen mode",
    headline: "Congratulations: you are now the plot of a prestige miniseries.",
    copy: "The score is satire, not an allegation. The MFA code, however, was genuinely a terrible idea.",
  };
}

export function SpyQuiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState<QuizChoice | null>(null);
  const [finished, setFinished] = useState(false);

  const question = questions[questionIndex];
  const progress = finished ? 100 : ((questionIndex + (answer ? 1 : 0)) / questions.length) * 100;
  const result = getResult(score);

  function choose(choice: QuizChoice) {
    if (answer) return;
    setScore((current) => current + choice.points);
    setAnswer(choice);
  }

  function next() {
    if (questionIndex === questions.length - 1) {
      setFinished(true);
      return;
    }
    setQuestionIndex((current) => current + 1);
    setAnswer(null);
  }

  function restart() {
    setQuestionIndex(0);
    setScore(0);
    setAnswer(null);
    setFinished(false);
  }

  return (
    <section aria-labelledby="spy-quiz-title" className="spy-quiz">
      <div className="spy-quiz-intro">
        <span className="eyebrow light">Extremely scientific relationship screening</span>
        <h2 id="spy-quiz-title">Is your girlfriend a <em>Chinese spy?</em></h2>
        <p>
          A ten-question, zero-intelligence assessment inspired by the Nvidia news cycle. Earn points, make poor inferences,
          and remember: nationality is not evidence. Terrible password hygiene is.
        </p>
        <div className="spy-quiz-disclaimer">
          <strong>Satire, obviously.</strong>
          <span>This quiz cannot identify spies, girlfriends, or healthy boundaries.</span>
        </div>
      </div>

      <div className="spy-quiz-console">
        <div aria-hidden="true" className="spy-console-grid" />
        <div className="spy-console-topline">
          <span>{finished ? "Assessment complete" : `Question ${questionIndex + 1} / ${questions.length}`}</span>
          <strong>{score} pts</strong>
        </div>
        <div aria-hidden="true" className="spy-progress"><span style={{ width: `${progress}%` }} /></div>

        {finished ? (
          <div aria-live="polite" className="spy-result">
            <span className="spy-result-label">{result.label}</span>
            <div className="spy-score"><strong>{score}</strong><span>points</span></div>
            <h3>{result.headline}</h3>
            <p>{result.copy}</p>
            <button className="button button-light" onClick={restart} type="button">Run another background check</button>
          </div>
        ) : (
          <div className="spy-question">
            <span className="spy-question-number">{String(questionIndex + 1).padStart(2, "0")}</span>
            <h3>{question.question}</h3>
            <p>{question.aside}</p>
            <div className="spy-options">
              <button className={answer === question.yes ? "selected" : ""} disabled={Boolean(answer)} onClick={() => choose(question.yes)} type="button">
                <span>A</span>{question.yes.label}
              </button>
              <button className={answer === question.no ? "selected" : ""} disabled={Boolean(answer)} onClick={() => choose(question.no)} type="button">
                <span>B</span>{question.no.label}
              </button>
            </div>
            {answer && (
              <div aria-live="polite" className="spy-answer">
                <div><strong>{answer.points > 0 ? `+${answer.points} points` : "No points"}</strong><span>{answer.response}</span></div>
                <button className="button button-red button-small" onClick={next} type="button">
                  {questionIndex === questions.length - 1 ? "Reveal threat level" : "Next suspicious detail"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
