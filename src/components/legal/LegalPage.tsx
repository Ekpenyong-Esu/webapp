import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * LegalPage: a shared, presentational wrapper for policy pages (privacy,
 * cookies). Keeps the title, "last updated" line, back link, and prose styling
 * consistent so each policy page only supplies its content.
 */
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-navy"
        >
          <ArrowLeft size={16} aria-hidden />
          Back to home
        </Link>

        <h1 className="mt-6 font-heading text-3xl font-bold text-navy sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-ink-muted">Last updated: {updated}</p>

        <div className="mt-10 space-y-8">{children}</div>
      </div>
    </main>
  );
}

/** A titled section within a legal page. */
export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-xl font-bold text-navy">{heading}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-muted">
        {children}
      </div>
    </section>
  );
}
