import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  ChartColumnBig,
  Compass,
  Layers3,
  Lightbulb,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const modes = [
  {
    title: "Visual / Structured",
    description:
      "Concepts arrive in clear sections, cards, and definitions that reduce cognitive clutter.",
    icon: ChartColumnBig,
  },
  {
    title: "Chunked / Step-by-step",
    description:
      "Lumio breaks dense ideas into manageable pieces and checks in before moving on.",
    icon: Layers3,
  },
  {
    title: "Interactive / Socratic",
    description:
      "Guided prompts encourage students to reason through a concept instead of copying an answer.",
    icon: MessageSquareText,
  },
  {
    title: "Analogy / Real-world",
    description:
      "Abstract ideas are anchored in everyday examples before technical language is introduced.",
    icon: Lightbulb,
  },
  {
    title: "Exploratory / Gamified",
    description:
      "Small challenges and momentum cues keep the experience rewarding without feeling childish.",
    icon: Sparkles,
  },
];

export function LandingPage() {
  return (
    <main className="app-shell-bg min-h-screen">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-6 md:px-6 md:pb-16 md:pt-8">
        <header className="surface-card flex items-center justify-between rounded-full px-5 py-4 md:px-6">
          <Link href="/" className="inline-flex items-center gap-3 font-semibold text-slate-900">
            <span className="rounded-2xl bg-[var(--brand-soft)] p-2 text-[var(--brand)]">
              <BrainCircuit className="h-5 w-5" />
            </span>
            Lumio
          </Link>
          <nav className="flex items-center gap-3 text-sm font-medium text-slate-700">
            <Link
              href="/signin"
              className="rounded-full px-4 py-2 transition hover:bg-white"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-[var(--brand)] px-4 py-2 text-white transition hover:bg-slate-900"
            >
              Start Learning
            </Link>
          </nav>
        </header>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <section className="surface-card rounded-[2rem] p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
              Adaptive AI learning tutor
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
              An AI tutor that adapts to how you learn.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Lumio helps students build understanding with structured
              explanations, gentle guidance, and teaching modes that shift with
              the moment instead of forcing one style for every learner.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/signin"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              >
                Sign In
              </Link>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ["Supportive", "Encouraging language designed for steady progress."],
                ["Structured", "Explanations organized into digestible teaching moments."],
                ["Responsive", "Built for desktop, tablet, and mobile learning sessions."],
              ].map(([title, description]) => (
                <article key={title} className="soft-panel rounded-3xl p-4">
                  <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="surface-card rounded-[2rem] p-6 md:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--brand)]">
              Preview the tutoring experience
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-[1.75rem] bg-[var(--brand)] px-5 py-4 text-sm leading-7 text-white">
                Can you help me understand slope-intercept form?
              </div>
              <div className="rounded-[1.75rem] border border-[var(--border)] bg-white p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  <Compass className="h-4 w-4 text-[var(--brand)]" />
                  Visual / Structured
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  Let&apos;s map the equation before solving.
                </h3>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="soft-panel rounded-3xl p-4 text-sm text-slate-700">
                    <p className="font-semibold text-slate-900">y = mx + b</p>
                    <p className="mt-2">m tells you the slope.</p>
                    <p>b tells you where the line begins on the y-axis.</p>
                  </div>
                  <div className="soft-panel rounded-3xl p-4 text-sm text-slate-700">
                    <p className="font-semibold text-slate-900">Quick check</p>
                    <p className="mt-2">
                      If b = 4, where does the line cross the y-axis?
                    </p>
                  </div>
                </div>
                <p className="mt-4 rounded-2xl bg-[var(--brand-soft)] px-4 py-3 text-sm text-slate-700">
                  You&apos;re already noticing the pattern — let&apos;s use that
                  to make the next step easier.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="surface-card rounded-[2rem] p-8">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--brand)]">
              How Lumio works
            </p>
            <ol className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
              {[
                "You ask a question, explain your reasoning, or respond to a prompt.",
                "Lumio receives structured learning signals from the AI backend.",
                "The frontend renders the selected teaching mode without exposing raw JSON.",
                "A check-for-understanding prompt keeps the session active and reflective.",
              ].map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)] font-semibold text-[var(--brand)]">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="surface-card rounded-[2rem] p-8">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--brand)]">
              Adaptive learning, explained
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Teaching mode shifts",
                  description:
                    "The backend selects whether the moment needs structure, analogy, questioning, or a lighter challenge.",
                },
                {
                  title: "Supportive progress cues",
                  description:
                    "Students see calm, encouraging language focused on effort, understanding, and next steps.",
                },
                {
                  title: "No diagnostic labels",
                  description:
                    "Lumio talks about learning behaviors and study progress, never about diagnoses or judgments.",
                },
                {
                  title: "Built for practice",
                  description:
                    "The goal is to help students think, respond, and improve — not to turn the chat into an answer dump.",
                },
              ].map((item) => (
                <div key={item.title} className="soft-panel rounded-3xl p-4">
                  <h3 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <div className="surface-card rounded-[2rem] p-8 md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--brand)]">
              Teaching modes
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Five ways to help the same concept finally click
            </h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-5">
            {modes.map((mode) => {
              const Icon = mode.icon;

              return (
                <article key={mode.title} className="soft-panel rounded-3xl p-5">
                  <span className="inline-flex rounded-2xl bg-white p-3 text-[var(--brand)] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    {mode.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {mode.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Designed for trust",
              description:
                "A calm visual system, thoughtful spacing, and a product flow that feels educational rather than transactional.",
              icon: ShieldCheck,
            },
            {
              title: "Built for continuity",
              description:
                "Dashboard, session history, and profile views create a steady learning environment beyond a single chat.",
              icon: Sparkles,
            },
            {
              title: "Ready for AI integration",
              description:
                "The frontend is separated from the AI service so the real backend can replace mocks without rebuilding the interface.",
              icon: BrainCircuit,
            },
          ].map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article key={benefit.title} className="surface-card rounded-[2rem] p-6">
                <span className="inline-flex rounded-2xl bg-[var(--brand-soft)] p-3 text-[var(--brand)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-xl font-semibold text-slate-900">
                  {benefit.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-slate-600 md:px-6 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Lumio. A dedicated learning environment for thoughtful practice.</p>
        <div className="flex items-center gap-4">
          <Link href="/signup" className="font-medium text-slate-900">
            Start Learning
          </Link>
          <Link href="/signin" className="font-medium text-slate-900">
            Sign In
          </Link>
        </div>
      </footer>
    </main>
  );
}
