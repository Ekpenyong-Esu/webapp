/**
 * Contact form validation (Layer 9). Pure, framework-agnostic logic so it can
 * be reused by the API route and unit-tested without HTTP or React. Keeping it
 * here separates "what is a valid submission" from "how it arrives" (the route)
 * and "how it's shown" (the form component).
 */

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  consent: boolean;
  /** Honeypot field — must be empty for a genuine submission. */
  company?: string;
};

export type CleanContact = {
  name: string;
  email: string;
  message: string;
};

export type ValidationResult =
  | { ok: true; data: CleanContact }
  | { ok: false; errors: Record<string, string> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Validate and normalise a raw submission body. */
export function validateContact(input: unknown): ValidationResult {
  const body = (input ?? {}) as Partial<ContactPayload>;
  const errors: Record<string, string> = {};

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const consent = body.consent === true;

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email))
    errors.email = "Please enter a valid email address.";
  if (message.length < 10)
    errors.message = "Please add a few words about your project.";
  if (!consent)
    errors.consent = "Please accept the privacy policy to continue.";

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  return { ok: true, data: { name, email, message } };
}

/** Honeypot check — returns true when the hidden field was filled (a bot). */
export function isSpam(input: unknown): boolean {
  const body = (input ?? {}) as Partial<ContactPayload>;
  return typeof body.company === "string" && body.company.trim().length > 0;
}
