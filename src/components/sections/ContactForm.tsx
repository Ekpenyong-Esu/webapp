"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * ContactForm (Layer 9): the interactive, client-side form. It owns only UI
 * concerns — field state, submission, and showing success/errors. Validation
 * and delivery happen server-side (lib/contact + lib/email via /api/contact);
 * this component just posts JSON and reflects the result.
 */
export default function ContactForm({ privacyHref }: { privacyHref: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") === "on",
      company: String(data.get("company") ?? ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
      } else if (res.status === 422 && json.errors) {
        setErrors(json.errors);
        setStatus("error");
        setMessage("Please fix the highlighted fields.");
      } else {
        setStatus("error");
        setMessage(json.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full flex-col justify-center rounded-lg border border-navy/10 bg-surface-muted p-8 text-center"
      >
        <p className="font-heading text-lg font-bold text-navy">
          Thanks — your message is on its way.
        </p>
        <p className="mt-2 text-sm text-ink-muted">
          I&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot: hidden from users, tempting to bots. */}
      <div aria-hidden className="absolute left-[-9999px]" tabIndex={-1}>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Field id="name" label="Name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={!!errors.name}
          className="w-full rounded-lg border border-navy/15 bg-surface px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-cyan"
        />
      </Field>

      <Field id="email" label="Email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          className="w-full rounded-lg border border-navy/15 bg-surface px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-cyan"
        />
      </Field>

      <Field id="message" label="Project / message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={!!errors.message}
          className="w-full rounded-lg border border-navy/15 bg-surface px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-cyan"
        />
      </Field>

      {/* GDPR consent — unticked by default, links to the privacy policy. */}
      <div>
        <label className="flex items-start gap-2 text-sm text-ink-muted">
          <input
            name="consent"
            type="checkbox"
            aria-invalid={!!errors.consent}
            className="mt-0.5 h-4 w-4 rounded border-navy/30 text-cyan"
          />
          <span>
            I agree that my details will be used to respond to my enquiry, as
            described in the{" "}
            <Link href={privacyHref} className="text-navy underline">
              privacy policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-xs text-red-600">{errors.consent}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-lg bg-cyan px-6 py-3 text-sm font-medium text-navy-dark transition-colors hover:bg-cyan-light disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && message && (
        <p role="alert" className="text-sm text-red-600">
          {message}
        </p>
      )}
    </form>
  );
}

/** Small labelled field wrapper with inline error text. */
function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
