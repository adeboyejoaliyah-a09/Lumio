import Link from "next/link";
import { BrainCircuit } from "lucide-react";

type AuthCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  footerLabel: string;
  footerHref: string;
  footerLinkText: string;
  children: React.ReactNode;
};

export function AuthCard({
  eyebrow,
  title,
  description,
  footerLabel,
  footerHref,
  footerLinkText,
  children,
}: AuthCardProps) {
  return (
    <main className="app-shell-bg flex min-h-screen items-center justify-center px-4 py-10">
      <div className="grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="surface-card hidden rounded-[2rem] p-10 lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-[var(--brand-soft)] px-4 py-2 text-sm font-medium text-[var(--brand)]">
              <BrainCircuit className="h-4 w-4" />
              Lumio
            </div>
            <h1 className="mt-8 max-w-lg text-4xl font-semibold tracking-tight text-slate-900">
              An AI tutor that adapts to how you learn.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Move from confusion to confidence with structured explanations,
              calm guidance, and check-ins that help you stay engaged.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Step-by-step support when a topic feels dense",
              "Adaptive teaching styles matched to the moment",
              "Progress-focused language that stays encouraging",
              "A responsive workspace built for practice, not pressure",
            ].map((benefit) => (
              <div key={benefit} className="soft-panel rounded-3xl p-4 text-sm text-slate-700">
                {benefit}
              </div>
            ))}
          </div>
        </section>

        <section className="surface-card rounded-[2rem] p-6 md:p-8">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
              {eyebrow}
            </div>
            <h2 className="mt-5 text-3xl font-semibold text-slate-900">
              {title}
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-slate-600">
              {description}
            </p>
          </div>

          {children}

          <p className="mt-8 text-sm text-slate-600">
            {footerLabel}{" "}
            <Link href={footerHref} className="font-semibold text-[var(--brand)]">
              {footerLinkText}
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
