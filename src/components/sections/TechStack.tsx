import { siteConfig } from "@/config/site";
import Reveal from "@/components/ui/Reveal";

/**
 * Tech stack section (Layer 10). Renders the grouped keyword grid from
 * `siteConfig.techStack`. Presentation-only — all data lives in the config.
 */
export default function TechStack() {
  const { techStack } = siteConfig;

  return (
    <section id="tech-stack" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              {techStack.heading}
            </h2>
            <p className="mt-3 text-lg text-ink-muted">{techStack.subheading}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.groups.map((group) => (
              <div key={group.category}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-navy">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-navy/10 bg-surface-muted px-3 py-1 text-sm text-ink-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
