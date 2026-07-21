import { siteConfig } from "@/config/site";
import CaseStudyCard from "@/components/sections/CaseStudyCard";
import Reveal from "@/components/ui/Reveal";

/**
 * Case studies section (Layer 8). Maps the `caseStudies` config to reusable
 * `CaseStudyCard`s. Sits on a muted background to alternate with the white
 * Services section above it.
 */
export default function CaseStudies() {
  const { caseStudies } = siteConfig;

  return (
    <section id="case-studies" className="bg-surface-muted">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Case studies
            </h2>
            <p className="mt-3 text-lg text-ink-muted">
              Anonymized proof, problem, approach, and the result that mattered.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} study={study} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
