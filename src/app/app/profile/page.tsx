import { profileData } from "@/lib/mock-data";
import { Bell, LogOut, Settings2, Sparkles, UserCircle2 } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <section className="surface-card rounded-[2rem] p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[var(--brand-soft)] text-[var(--brand)]">
              <UserCircle2 className="h-9 w-9" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--brand)]">
                Profile & settings
              </p>
              <h1 className="mt-1 text-3xl font-semibold text-slate-900">
                {profileData.name}
              </h1>
              <p className="mt-1 text-sm text-slate-600">{profileData.email}</p>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <article className="surface-card rounded-[2rem] p-6 xl:col-span-2">
          <div className="flex items-center gap-3">
            <span className="rounded-2xl bg-[var(--brand-soft)] p-3 text-[var(--brand)]">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Learning preferences
              </h2>
              <p className="text-sm text-slate-600">
                These settings are UI-ready and can connect to the student
                profile API later.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {profileData.preferences.map((item) => (
              <div
                key={item.label}
                className="soft-panel rounded-3xl p-4 text-sm text-slate-700"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-2 text-base font-medium text-slate-900">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </article>

        <div className="space-y-6">
          <article className="surface-card rounded-[2rem] p-6">
            <div className="flex items-center gap-3">
              <span className="rounded-2xl bg-[var(--accent-soft)] p-3 text-amber-700">
                <Settings2 className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Account settings
                </h2>
                <p className="text-sm text-slate-600">
                  API-ready sections for account management.
                </p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {profileData.accountSettings.map((setting) => (
                <li
                  key={setting}
                  className="soft-panel rounded-2xl px-4 py-3"
                >
                  {setting}
                </li>
              ))}
            </ul>
          </article>

          <article className="surface-card rounded-[2rem] p-6">
            <div className="flex items-center gap-3">
              <span className="rounded-2xl bg-[var(--success-soft)] p-3 text-emerald-700">
                <Bell className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Notifications
                </h2>
                <p className="text-sm text-slate-600">
                  Keep encouragement and session reminders useful and calm.
                </p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {profileData.notifications.map((setting) => (
                <li
                  key={setting}
                  className="soft-panel rounded-2xl px-4 py-3"
                >
                  {setting}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
