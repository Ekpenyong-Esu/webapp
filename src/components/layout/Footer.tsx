import Link from "next/link";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { siteConfig } from "@/config/site";

/**
 * Site footer: navigation, contact links, and the legal identity block
 * (company name, organisationsnummer, location) that a Swedish AB is expected
 * to show. Data comes from `siteConfig` so it stays consistent site-wide.
 */
export default function Footer() {
  const { company, nav, legal, cta } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-muted bg-surface-muted">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-12">
        {/* Brand + tagline */}
        <div className="lg:col-span-5">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/#hero"
            className="font-heading text-lg font-bold text-navy"
          >
            {siteConfig.name}
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer" className="lg:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-navy">
            Navigate
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-muted">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact + CTA */}
        <div className="lg:col-span-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-navy">
            Get in touch
          </h3>
          <div className="mt-4 space-y-3 text-sm text-ink-muted">
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 transition-colors hover:text-navy"
            >
              <Mail size={16} aria-hidden />
              {company.email}
            </a>
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-navy"
            >
              <FaLinkedin size={16} aria-hidden />
              LinkedIn
            </a>
          </div>
          <a
            href={cta.href}
            className="mt-5 inline-flex items-center justify-center rounded-lg bg-cyan px-5 py-2.5 text-sm font-medium text-navy-dark transition-colors hover:bg-cyan-light"
          >
            {cta.label}
          </a>
        </div>
      </div>

      {/* Legal identity block (required trust signal for a Swedish AB) */}
      <div className="border-t border-navy/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {company.legalName} &middot; Org.nr{" "}
            {company.orgNumber} &middot; {company.location}
          </p>
          <nav aria-label="Legal" className="flex items-center gap-4">
            {legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
