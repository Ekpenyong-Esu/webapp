import { siteConfig } from "@/config/site";
import Reveal from "@/components/ui/Reveal";

/**
 * Process section ("How we work"): a light, four-step engagement model that
 * tells prospects how a project runs — discovery, scoping, build, handover —
 * before they book a call. Presentation-only; copy comes from
 * `siteConfig.process`. Sits on the white surface to alternate with the muted
 * sections around it.
 */
export default function Process() {
  const { process } = siteConfig;

  return (
    <section id="process" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              {process.heading}
            </h2>
            <p className="mt-3 text-lg text-ink-muted">{process.subheading}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-col rounded-lg border border-navy/10 bg-surface p-6"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan/15 font-heading text-sm font-bold text-navy">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
