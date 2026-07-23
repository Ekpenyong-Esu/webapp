import type { siteConfig } from "@/config/site";

/** One case study, derived from the config so the shape stays in sync. */
type CaseStudy = (typeof siteConfig.caseStudies)[number];

/**
 * CaseStudyCard (Layer 8): a single reusable case-study card. Presentation-only.
 * The three stages are mapped from a local array so the Problem → Approach →
 * Result markup isn't repeated three times.
 */
export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const stages = [
    { label: "Problem", text: study.problem },
    { label: "Approach", text: study.approach },
    { label: "Result", text: study.result },
  ];

  return (
    <li className="flex flex-col rounded-lg border border-navy/10 bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan/60 hover:shadow-lg hover:shadow-navy/5">
      <span className="w-fit rounded-full bg-cyan/10 px-2.5 py-1 text-xs font-semibold text-navy ring-1 ring-inset ring-cyan/20">
        {study.domain}
      </span>

      <h3 className="mt-4 font-heading text-lg font-bold text-navy">
        {study.title}
      </h3>

      <dl className="mt-4 space-y-3">
        {stages.map((stage) => (
          <div key={stage.label}>
            <dt className="text-xs font-semibold uppercase tracking-wider text-navy">
              {stage.label}
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-ink-muted">
              {stage.text}
            </dd>
          </div>
        ))}
      </dl>
    </li>
  );
}
