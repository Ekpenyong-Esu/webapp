import { NextResponse } from "next/server";
import { validateContact, isSpam } from "@/lib/contact";
import { sendContactEmail } from "@/lib/email";

/**
 * Contact form handler (Layer 9). Thin HTTP layer: parse the request, delegate
 * validation to `lib/contact`, delegate delivery to `lib/email`, and translate
 * the outcome into HTTP responses. No business logic lives here.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  // Honeypot: pretend success so bots don't learn they were caught.
  if (isSpam(body)) {
    return NextResponse.json({ ok: true });
  }

  const result = validateContact(body);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, errors: result.errors },
      { status: 422 },
    );
  }

  try {
    await sendContactEmail(result.data);
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Something went wrong sending your message. Please email us directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
