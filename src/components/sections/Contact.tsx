import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { siteConfig } from "@/config/site";
import ContactForm from "@/components/sections/ContactForm";
import Reveal from "@/components/ui/Reveal";

/**
 * Contact section (Layer 9). Server component: renders the heading, direct
 * contact links, and the interactive `ContactForm` (a client component). Copy
 * comes from `siteConfig.contact`; delivery is handled by the API route.
 */
export default function Contact() {
  const { contact, company } = siteConfig;

  return (
    <section id="contact" className="bg-surface-muted">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-2">
          {/* Intro + direct contact */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              {contact.heading}
            </h2>
            <p className="mt-3 max-w-md text-lg text-ink-muted">
              {contact.subheading}
            </p>

            <div className="mt-8 space-y-3 text-sm text-ink-muted">
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
          </div>

          {/* Form */}
          <div className="rounded-lg border border-navy/10 bg-surface p-6 sm:p-8">
            <ContactForm privacyHref={contact.privacyHref} />
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
