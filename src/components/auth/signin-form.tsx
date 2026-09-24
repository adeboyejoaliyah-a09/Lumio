"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { AuthCard } from "@/components/auth/auth-card";
import { signIn } from "@/lib/auth";

export function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setMessage("");

    try {
      await signIn({ email, password });
      router.push("/app/chat");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to sign in.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <AuthCard
      eyebrow="Sign in"
      title="Continue your learning flow"
      description="This MVP uses frontend-only authentication helpers so a real auth API can be connected later without changing the form experience."
      footerLabel="New to Lumio?"
      footerHref="/signup"
      footerLinkText="Create an account"
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        <label className="block space-y-2 text-sm font-medium text-slate-700">
          <span>Email</span>
          <input
            className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--brand)]"
            type="email"
            placeholder="student@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>

        <label className="block space-y-2 text-sm font-medium text-slate-700">
          <span>Password</span>
          <input
            className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--brand)]"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>

        <div className="flex items-center justify-between gap-4 text-sm">
          <button
            type="button"
            className="text-slate-500 transition hover:text-[var(--brand)]"
            onClick={() =>
              setMessage("Password reset will connect to the auth backend when it is ready.")
            }
          >
            Forgot password
          </button>
          <Link href="/" className="text-slate-500 transition hover:text-[var(--brand)]">
            Back to home
          </Link>
        </div>

        {message ? (
          <p className="rounded-2xl bg-[var(--accent-soft)] px-4 py-3 text-sm text-amber-800">
            {message}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-2xl bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </AuthCard>
  );
}
