import { dashboardData } from "@/lib/mock-data";
import {
  Activity,
  BookOpen,
  Flame,
  Lightbulb,
  Sparkles,
  Target,
} from "lucide-react";

const statIcons = [Flame, BookOpen, Target, Sparkles];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="surface-card rounded-[2rem] p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--brand)]">
              Learning progress
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Welcome back, Maya. Your learning rhythm is building nicely.
            </h1>
            <p className="text-base leading-7 text-slate-600">
              Lumio is noticing steady follow-through in algebra and a growing
              comfort level with visual explanations. Today&apos;s suggestions
              focus on keeping the momentum without overwhelming you.
            </p>
          </div>
          <div className="rounded-3xl bg-[var(--accent-soft)] px-5 py-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Recommended next step</p>
            <p className="mt-1">{dashboardData.recommendedPractice}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardData.stats.map((stat, index) => {
          const Icon = statIcons[index];

          return (
            <article
              key={stat.label}
              className="surface-card rounded-3xl p-5 text-slate-900"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-2xl bg-[var(--brand-soft)] p-3 text-[var(--brand)]">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm text-slate-500">{stat.context}</span>
              </div>
              <p className="mt-5 text-3xl font-semibold">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
            </article>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
        <article className="surface-card rounded-[2rem] p-6">
          <div className="flex items-center gap-3">
            <span className="rounded-2xl bg-[var(--brand-soft)] p-3 text-[var(--brand)]">
              <Activity className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Recent activity
              </h2>
              <p className="text-sm text-slate-600">
                A quick view of where your effort has been going.
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {dashboardData.recentActivity.map((item) => (
              <div
                key={item.title}
                className="soft-panel rounded-3xl p-4 text-sm text-slate-700"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <span className="text-slate-500">{item.time}</span>
                </div>
                <p className="mt-2 leading-6">{item.summary}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="space-y-6">
          <article className="surface-card rounded-[2rem] p-6">
            <div className="flex items-center gap-3">
              <span className="rounded-2xl bg-[var(--accent-soft)] p-3 text-amber-700">
                <Lightbulb className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Teaching modes used
                </h2>
                <p className="text-sm text-slate-600">
                  Variety helps explanations stay clear and useful.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {dashboardData.teachingModes.map((mode) => (
                <span
                  key={mode}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                >
                  {mode}
                </span>
              ))}
            </div>
          </article>

          <article className="surface-card rounded-[2rem] p-6">
            <div className="flex items-center gap-3">
              <span className="rounded-2xl bg-[var(--success-soft)] p-3 text-emerald-700">
                <Target className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Concepts practiced
                </h2>
                <p className="text-sm text-slate-600">
                  Topics you&apos;ve recently revisited with Lumio.
                </p>
              </div>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              {dashboardData.conceptsPracticed.map((concept) => (
                <li
                  key={concept}
                  className="soft-panel rounded-2xl px-4 py-3 leading-6"
                >
                  {concept}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
