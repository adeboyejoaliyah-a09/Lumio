"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BrainCircuit,
  ChartColumnBig,
  History,
  MessageSquareText,
  Settings2,
} from "lucide-react";

const navigation = [
  { href: "/app/chat", label: "Chat", icon: MessageSquareText },
  { href: "/app/dashboard", label: "Dashboard", icon: ChartColumnBig },
  { href: "/app/sessions", label: "Sessions", icon: History },
  { href: "/app/profile", label: "Profile", icon: Settings2 },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="app-shell-bg min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 px-4 py-4 md:px-6 lg:flex-row lg:py-6">
        <aside className="surface-card hidden w-full max-w-xs rounded-[2rem] p-5 lg:flex lg:flex-col">
          <Link href="/" className="inline-flex items-center gap-3 text-lg font-semibold text-slate-900">
            <span className="rounded-2xl bg-[var(--brand-soft)] p-2 text-[var(--brand)]">
              <BrainCircuit className="h-5 w-5" />
            </span>
            Lumio
          </Link>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            A calm workspace for adaptive tutoring, practice, and progress.
          </p>

          <nav className="mt-8 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-[var(--brand)] text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-[1.75rem] bg-[var(--accent-soft)] p-5 text-sm leading-6 text-amber-900">
            <p className="font-semibold text-slate-900">Today&apos;s reminder</p>
            <p className="mt-2">
              Learning progress grows from consistency, curiosity, and reflection
              — not speed.
            </p>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col gap-4 pb-20 lg:min-h-0 lg:pb-0">
          <header className="surface-card flex items-center justify-between rounded-[2rem] px-5 py-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                Student application
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-900">
                Adaptive learning workspace
              </p>
            </div>
            <Link
              href="/app/chat"
              className="rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-900"
            >
              Start session
            </Link>
          </header>

          <main className="flex-1">{children}</main>
        </div>
      </div>

      <nav className="surface-card fixed inset-x-4 bottom-4 z-20 flex items-center justify-between rounded-full px-4 py-3 lg:hidden">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 rounded-full px-3 py-2 text-xs font-medium ${
                isActive ? "text-[var(--brand)]" : "text-slate-500"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
