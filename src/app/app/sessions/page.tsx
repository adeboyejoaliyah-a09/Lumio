import { mockSessions } from "@/lib/mock-data";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import Link from "next/link";

export default function SessionsPage() {
  return (
    <div className="space-y-8">
      <section className="surface-card rounded-[2rem] p-6 md:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--brand)]">
          Learning sessions
        </p>
        <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              Review what you&apos;ve practiced and pick up where you left off.
            </h1>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Session history is mocked for the MVP, but the layout is ready to
              connect to persistent backend data later.
            </p>
          </div>
          <Link
            href="/app/chat"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-900"
          >
            Start new session
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <div className="grid gap-5">
        {mockSessions.map((session) => (
          <article
            key={session.id}
            className="surface-card rounded-[2rem] p-6 transition hover:-translate-y-0.5"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {session.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    {session.duration}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">
                    {session.topic}
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                    {session.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {session.conceptsPracticed.map((concept) => (
                    <span
                      key={concept}
                      className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium tracking-wide text-slate-700"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/app/chat"
                  className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  Review
                </Link>
                <Link
                  href="/app/chat"
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--brand)]"
                >
                  Continue
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
