import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/legal/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy — zaramTech AB",
  description:
    "How zaramTech AB collects, uses, and protects personal data submitted through this website.",
};

export default function PrivacyPage() {
  const { company } = siteConfig;

  return (
    <LegalPage title="Privacy Policy" updated="21 July 2026">
      <p className="text-sm leading-relaxed text-ink-muted">
        This policy explains what personal data {company.legalName} collects
        through this website, why we collect it, and the rights you have over it.
      </p>

      <LegalSection heading="Who we are (data controller)">
        <p>
          {company.legalName}
          {company.orgNumber ? `, org.nr ${company.orgNumber}` : ""}, based in{" "}
          {company.location}, is the controller responsible for your personal
          data. For any privacy question or request, contact us at{" "}
          <a
            href={`mailto:${company.email}`}
            className="text-navy underline"
          >
            {company.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="What data we collect">
        <p>
          We only collect what you choose to send us through the contact form:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Your name</li>
          <li>Your email address</li>
          <li>The message / project details you provide</li>
        </ul>
        <p>
          We do not collect special categories of data, and we do not use the
          form data for marketing.
        </p>
      </LegalSection>

      <LegalSection heading="Why we use it and our legal basis">
        <p>
          We use this data solely to read and respond to your enquiry. The legal
          basis is your <strong>consent</strong> (given via the checkbox on the
          form) and our <strong>legitimate interest</strong> in responding to
          business enquiries, under the EU General Data Protection Regulation
          (GDPR).
        </p>
      </LegalSection>

      <LegalSection heading="How long we keep it">
        <p>
          We retain enquiry data only as long as needed to handle your request
          and any resulting correspondence, after which it is deleted. You may
          ask us to delete it sooner at any time.
        </p>
      </LegalSection>

      <LegalSection heading="Sharing and processors">
        <p>
          We do not sell your data. Messages are delivered using a third-party
          email provider acting as our processor purely to transmit your
          message. No data is shared beyond what is necessary to respond to you.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>Under the GDPR you have the right to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Access the personal data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Object to or restrict our processing</li>
          <li>Request data portability</li>
          <li>Lodge a complaint with your supervisory authority</li>
        </ul>
        <p>
          To exercise any of these rights, email{" "}
          <a
            href={`mailto:${company.email}`}
            className="text-navy underline"
          >
            {company.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Cookies & analytics">
        <p>
          This site aims to use privacy-friendly, cookieless analytics and sets
          no tracking cookies. See our{" "}
          <Link href="/cookies" className="text-navy underline">
            Cookie Policy
          </Link>{" "}
          for details.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
