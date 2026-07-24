import { siteConfig } from "@/config/site";

/**
 * TrustBar (Layer 6/10): a compact strip of the strongest credibility signals,
 * surfaced directly under the hero so the "10+ years / credentials / scholar"
 * proof is seen immediately rather than only near the footer. Presentation-only;
 * the items come from `siteConfig.about.highlights` so credibility copy stays in
 * one place.
 */
export default function TrustBar() {
  const { highlights } = siteConfig.about;

  return (
    <section aria-label="Credibility" className="border-b border-navy/10 bg-surface">
      <ul className="mx-auto grid max-w-6xl gap-4 px-6 py-6 text-center sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="text-sm font-medium text-ink-muted sm:text-left"
          >
            {highlight}
          </li>
        ))}
      </ul>
    </section>
  );
}
