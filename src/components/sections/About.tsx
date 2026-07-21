import { Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/ui/Reveal";

/**
 * About section (Layer 10). Founder credibility — the trust signal for a
 * boutique AB. Presentation-only; copy comes from `siteConfig.about`.
 */
export default function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="bg-surface-muted">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-2">
          {/* Bio */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              {about.heading}
            </h2>
            <div className="mt-6 space-y-4">
              {about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-base leading-relaxed text-ink-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Credentials */}
          <div className="lg:pt-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-navy">
              Credibility
            </h3>
            <ul className="mt-4 space-y-3">
              {about.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-base text-ink"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-cyan/15 text-cyan">
                    <Check size={16} aria-hidden />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
