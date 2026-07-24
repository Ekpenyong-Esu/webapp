"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/config/site";
import CaseStudyCard from "@/components/sections/CaseStudyCard";
import CaseStudyFilter from "@/components/sections/CaseStudyFilter";
import Reveal from "@/components/ui/Reveal";

/** The reset pill that clears the filter and shows every case study. */
const ALL_CATEGORY = "All";

/**
 * Case studies section (Layer 8). Client component that owns a single concern:
 * which category is active. It derives the available filters from the data,
 * delegates the pills to `CaseStudyFilter` and each card to `CaseStudyCard`,
 * and lets visitors self-select faster — automotive OEM buyers and AI/product
 * companies care about different work.
 */
export default function CaseStudies() {
  const { caseStudies } = siteConfig;
  const [active, setActive] = useState(ALL_CATEGORY);

  // Unique categories in first-seen order, prefixed with the "All" reset.
  const categories = useMemo(() => {
    const unique = [...new Set(caseStudies.map((study) => study.category))];
    return [ALL_CATEGORY, ...unique];
  }, [caseStudies]);

  const visibleStudies =
    active === ALL_CATEGORY
      ? caseStudies
      : caseStudies.filter((study) => study.category === active);

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
          <div className="mt-8">
            <CaseStudyFilter
              categories={categories}
              active={active}
              onSelect={setActive}
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <ul className="mt-8 grid gap-6 lg:grid-cols-3">
            {visibleStudies.map((study) => (
              <CaseStudyCard key={study.title} study={study} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
