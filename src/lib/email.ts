import { siteConfig } from "@/config/site";
import type { CleanContact } from "@/lib/contact";

/**
 * Email delivery (Layer 9). Isolated from the API route so the route never
 * knows which provider is used. Sends via Resend (see docs/05) using the REST
 * API, so no extra dependency is required.
 *
 * If RESEND_API_KEY is not configured (e.g. local development), the message is
 * logged server-side and the call resolves without sending — the form still
 * works end-to-end while developing.
 *
 * Required env vars for production:
 *   RESEND_API_KEY      — your Resend API key
 *   CONTACT_TO_EMAIL    — where enquiries are delivered (defaults to site email)
 *   CONTACT_FROM_EMAIL  — a verified Resend sender address
 */
export async function sendContactEmail(msg: CleanContact): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.company.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "zaramTech Website <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY not set — logging message instead of sending.",
      msg,
    );
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: msg.email,
      subject: `New enquiry from ${msg.name}`,
      text: `From: ${msg.name} <${msg.email}>\n\n${msg.message}`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Resend request failed: ${res.status} ${detail}`);
  }
}
