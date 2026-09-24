"use client";

import { useMemo, useState } from "react";
import { LearningResponse } from "@/components/chat/learning-response";
import { createWelcomeMessage, sendLearningMessage } from "@/lib/ai";
import { ChatMessage } from "@/types/ai";
import { Loader2, Plus, SendHorizonal, Sparkles } from "lucide-react";

function createStudentMessage(content: string): ChatMessage {
  return {
    id: crypto.randomUUID(),
    role: "student",
    content,
    timestamp: new Date().toISOString(),
  };
}

export function ChatExperience() {
  const [messages, setMessages] = useState<ChatMessage[]>([createWelcomeMessage()]);
  const [draft, setDraft] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const assistantCount = useMemo(
    () => messages.filter((message) => message.role === "assistant").length,
    [messages],
  );

  async function submitMessage(content: string) {
    const trimmed = content.trim();

    if (!trimmed || isLoading) {
      return;
    }

    const studentMessage = createStudentMessage(trimmed);
    const nextMessages = [...messages, studentMessage];

    setMessages(nextMessages);
    setDraft("");
    setError("");
    setIsLoading(true);

    try {
      const response = await sendLearningMessage({
        message: trimmed,
        history: nextMessages,
      });

      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: response.supportive_note,
          response,
          timestamp: new Date().toISOString(),
        },
      ]);
    } catch (issue) {
      setError(
        issue instanceof Error
          ? issue.message
          : "Lumio could not respond just now. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleNewSession() {
    setMessages([createWelcomeMessage()]);
    setDraft("");
    setError("");
    setIsLoading(false);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1.45fr_0.55fr]">
      <section className="surface-card flex min-h-[72vh] flex-col overflow-hidden rounded-[2rem]">
        <div className="flex flex-col gap-4 border-b border-[var(--border)] px-5 py-5 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--brand)]">
              Lumio chat
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-slate-900">
              Start a learning conversation
            </h1>
          </div>
          <button
            type="button"
            onClick={handleNewSession}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
          >
            <Plus className="h-4 w-4" />
            New session
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5 md:px-6">
          {messages.map((message) =>
            message.role === "assistant" && message.response ? (
              <LearningResponse
                key={message.id}
                response={message.response}
                onChooseOption={(option) => submitMessage(`I think the answer is ${option}.`)}
              />
            ) : (
              <div
                key={message.id}
                className={`max-w-3xl rounded-[1.75rem] px-4 py-4 text-sm leading-7 md:px-5 ${
                  message.role === "assistant"
                    ? "soft-panel mr-auto text-slate-700"
                    : "ml-auto bg-[var(--brand)] text-white"
                }`}
              >
                {message.content}
              </div>
            ),
          )}

          {isLoading ? (
            <div className="soft-panel mr-auto flex max-w-sm items-center gap-3 rounded-[1.75rem] px-4 py-4 text-sm text-slate-600">
              <Loader2 className="h-4 w-4 animate-spin" />
              Lumio is preparing the next explanation...
            </div>
          ) : null}

          {error ? (
            <div className="rounded-[1.75rem] border border-rose-200 bg-rose-50 px-4 py-4 text-sm text-rose-700">
              <p>{error}</p>
              <button
                type="button"
                onClick={() => submitMessage(draft || "Please try again with a fresh explanation.")}
                className="mt-3 font-semibold text-rose-800"
              >
                Try again
              </button>
            </div>
          ) : null}
        </div>

        <form
          className="border-t border-[var(--border)] px-4 py-4 md:px-6"
          onSubmit={(event) => {
            event.preventDefault();
            submitMessage(draft);
          }}
        >
          <div className="flex flex-col gap-3 rounded-[1.75rem] bg-white p-3 shadow-sm ring-1 ring-black/5 md:flex-row md:items-end">
            <label className="sr-only" htmlFor="lumio-message">
              Ask Lumio a question
            </label>
            <textarea
              id="lumio-message"
              className="min-h-24 flex-1 resize-none rounded-[1.25rem] border border-transparent bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[var(--brand)]"
              placeholder="Ask a question, share your thinking, or respond to Lumio..."
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
            />
            <button
              type="submit"
              disabled={isLoading || !draft.trim()}
              className="inline-flex items-center justify-center gap-2 rounded-[1.25rem] bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <SendHorizonal className="h-4 w-4" />
              )}
              Send
            </button>
          </div>
        </form>
      </section>

      <aside className="space-y-6">
        <section className="surface-card rounded-[2rem] p-6">
          <div className="flex items-center gap-3">
            <span className="rounded-2xl bg-[var(--brand-soft)] p-3 text-[var(--brand)]">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Session guidance
              </h2>
              <p className="text-sm text-slate-600">
                Lumio keeps the focus on understanding, reflection, and steady
                progress.
              </p>
            </div>
          </div>
          <ul className="mt-5 space-y-3 text-sm text-slate-700">
            {[
              "Ask for a simpler explanation if you want the concept broken into smaller steps.",
              "Reply with your own reasoning so Lumio can adapt the next explanation.",
              "Use New session when you want a fresh topic or a reset in teaching style.",
            ].map((tip) => (
              <li key={tip} className="soft-panel rounded-2xl px-4 py-3 leading-6">
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <section className="surface-card rounded-[2rem] p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Teaching modes in rotation
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Each new reply can use a different mode depending on what feels most
            helpful for the moment.
          </p>
          <div className="mt-5 space-y-2 text-sm text-slate-700">
            <p>Responses used this session: {assistantCount}</p>
            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-[var(--brand)] transition-all"
                style={{ width: `${Math.min(assistantCount * 20, 100)}%` }}
              />
            </div>
          </div>
        </section>
      </aside>
    </div>
  );
}
