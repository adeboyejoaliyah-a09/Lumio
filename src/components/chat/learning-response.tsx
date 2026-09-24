"use client";

import { useState } from "react";
import { MarkdownContent } from "@/components/chat/markdown-content";
import { LumioAIResponse } from "@/types/ai";
import {
  Compass,
  Landmark,
  Layers3,
  Lightbulb,
  PartyPopper,
  Shapes,
} from "lucide-react";

type LearningResponseProps = {
  response: LumioAIResponse;
  onChooseOption: (option: string) => void;
};

const modeConfig = {
  visual_structured: {
    label: "Visual / Structured",
    icon: Shapes,
    tone: "bg-sky-50 text-sky-700",
  },
  chunked_step_by_step: {
    label: "Chunked / Step-by-step",
    icon: Layers3,
    tone: "bg-amber-50 text-amber-700",
  },
  interactive_socratic: {
    label: "Interactive / Socratic",
    icon: Compass,
    tone: "bg-violet-50 text-violet-700",
  },
  analogy_real_world: {
    label: "Analogy / Real-world",
    icon: Landmark,
    tone: "bg-emerald-50 text-emerald-700",
  },
  exploratory_gamified: {
    label: "Exploratory / Gamified",
    icon: PartyPopper,
    tone: "bg-rose-50 text-rose-700",
  },
} as const;

export function LearningResponse({
  response,
  onChooseOption,
}: LearningResponseProps) {
  const [showHint, setShowHint] = useState(false);
  const config = modeConfig[response.teaching_mode];
  const Icon = config.icon;

  return (
    <article className="surface-card mr-auto max-w-4xl rounded-[2rem] p-5 md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-3">
          <span className={`rounded-2xl p-3 ${config.tone}`}>
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Lumio response
            </p>
            <h2 className="mt-1 text-lg font-semibold text-slate-900">
              {config.label}
            </h2>
          </div>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600">
          Confidence: {response.adaptive_metrics.perceived_confidence}
        </span>
      </div>

      <div className="mode-grid mt-6">
        <section className="soft-panel rounded-[1.75rem] p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Explanation
          </p>
          <div className="markdown-content mt-4 text-sm leading-7 text-slate-700">
            <MarkdownContent content={response.explanation} />
          </div>
        </section>

        <section className="space-y-4">
          <div className="rounded-[1.75rem] bg-[var(--brand-soft)] p-5 text-sm leading-7 text-slate-700">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <Lightbulb className="h-4 w-4 text-[var(--brand)]" />
              Supportive note
            </div>
            <p className="mt-3">{response.supportive_note}</p>
          </div>

          <div className="rounded-[1.75rem] bg-slate-100 p-5 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Recommended next step
            </p>
            <p className="mt-2 text-base font-medium text-slate-900">
              {response.adaptive_metrics.recommended_next_step}
            </p>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-[1.75rem] border border-[var(--border)] bg-white p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Check for understanding
        </p>
        <h3 className="mt-2 text-lg font-semibold text-slate-900">
          {response.check_for_understanding.question}
        </h3>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {response.check_for_understanding.options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onChooseOption(option)}
              className="rounded-2xl border border-[var(--border)] px-4 py-3 text-left text-sm text-slate-700 transition hover:border-[var(--brand)] hover:bg-[var(--brand-soft)]"
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-4">
          <button
            type="button"
            onClick={() => setShowHint((current) => !current)}
            className="text-sm font-semibold text-[var(--brand)]"
          >
            {showHint ? "Hide hint" : "See a hint"}
          </button>
          {showHint ? (
            <p className="mt-3 rounded-2xl bg-[var(--accent-soft)] px-4 py-3 text-sm leading-6 text-amber-800">
              {response.check_for_understanding.hint}
            </p>
          ) : null}
        </div>
      </section>
    </article>
  );
}
