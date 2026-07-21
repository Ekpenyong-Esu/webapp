import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/legal/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Cookie Policy — zaramTech AB",
  description:
    "How zaramTech AB uses cookies and local storage on this website.",
};

export default function CookiesPage() {
  const { company } = siteConfig;

  return (
    <LegalPage title="Cookie Policy" updated="21 July 2026">
      <p className="text-sm leading-relaxed text-ink-muted">
        This policy explains how {company.legalName} uses cookies and similar
        technologies on this website.
      </p>

      <LegalSection heading="Do we use cookies?">
        <p>
          This website is designed to be light and privacy-friendly. It does{" "}
          <strong>not</strong> set advertising or cross-site tracking cookies,
          and it does not sell or share your browsing data.
        </p>
      </LegalSection>

      <LegalSection heading="Essential functionality">
        <p>
          We only use storage that is strictly necessary for the site to work
          (for example, remembering your interface preferences). These are not
          used to track you across other websites.
        </p>
      </LegalSection>

      <LegalSection heading="Analytics">
        <p>
          Where analytics are used, we aim to use a privacy-friendly, cookieless
          solution that does not collect personal data or set tracking cookies.
          If this ever changes, we will update this policy and request consent
          where required.
        </p>
      </LegalSection>

      <LegalSection heading="Managing cookies">
        <p>
          You can control or delete cookies through your browser settings at any
          time. Because this site relies only on essential storage, disabling
          cookies will not break core functionality.
        </p>
      </LegalSection>

      <LegalSection heading="Questions">
        <p>
          For any question about this policy, email{" "}
          <a
            href={`mailto:${company.email}`}
            className="text-navy underline"
          >
            {company.email}
          </a>{" "}
          or read our{" "}
          <Link href="/privacy" className="text-navy underline">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
