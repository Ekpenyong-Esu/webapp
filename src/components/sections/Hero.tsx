import { siteConfig } from "@/config/site";
import HeroMotif from "@/components/sections/HeroMotif";
import Reveal from "@/components/ui/Reveal";

/**
 * Hero section (Layer 6): the first impression. Presentation-only — all copy
 * comes from `siteConfig.hero` and the CTA from `siteConfig.cta`, so wording
 * changes never require editing this component. The technical motif is kept in
 * its own `HeroMotif` component to keep this markup readable.
 */
export default function Hero() {
  const { hero, cta } = siteConfig;

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-navy-dark"
    >
      <HeroMotif />

      <Reveal>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 py-24 text-center sm:py-32">
          <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {hero.headline}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-white/70">
            {hero.subheadline}
          </p>

          {/* Full-stack-of-hardware differentiator, shown as a subtle chain */}
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {hero.chain.map((step) => (
              <li
                key={step}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm font-medium text-white/80 backdrop-blur"
              >
                {step}
              </li>
            ))}
          </ul>

          <a
            href={cta.href}
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-cyan px-6 py-3 font-medium text-navy-dark transition-colors hover:bg-cyan-light"
          >
            {cta.label}
          </a>
        </div>
      </Reveal>

      {/* Soften the hard edge where the dark hero meets the white Services
          section below. Purely decorative, so it ignores pointer events. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-surface" />
    </section>
  );
}
