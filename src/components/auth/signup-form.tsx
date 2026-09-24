"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { AuthCard } from "@/components/auth/auth-card";
import { signUp } from "@/lib/auth";

export function SignUpForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setMessage("");

    try {
      await signUp(form);
      router.push("/app/chat");
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Unable to create account.",
      );
    } finally {
      setIsPending(false);
    }
  }

  return (
    <AuthCard
      eyebrow="Sign up"
      title="Create your Lumio learning space"
      description="Start with a calm, adaptive study environment. The account flow is frontend-only for now, with API-ready functions prepared for backend integration."
      footerLabel="Already have an account?"
      footerHref="/signin"
      footerLinkText="Sign in"
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        {[
          { key: "name", label: "Name", type: "text", placeholder: "Maya Johnson" },
          {
            key: "email",
            label: "Email",
            type: "email",
            placeholder: "student@example.com",
          },
          {
            key: "password",
            label: "Password",
            type: "password",
            placeholder: "Create a password",
          },
          {
            key: "confirmPassword",
            label: "Confirm password",
            type: "password",
            placeholder: "Re-enter your password",
          },
        ].map((field) => (
          <label
            key={field.key}
            className="block space-y-2 text-sm font-medium text-slate-700"
          >
            <span>{field.label}</span>
            <input
              className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--brand)]"
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.key as keyof typeof form]}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  [field.key]: event.target.value,
                }))
              }
              required
            />
          </label>
        ))}

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
          {isPending ? "Creating account..." : "Create Account"}
        </button>
      </form>
    </AuthCard>
  );
}
