"use client";

/**
 * CaseStudyFilter (Layer 8): the presentational filter chrome for the case
 * studies section. It owns no state — it renders the category pills and reports
 * clicks upward — so the parent `CaseStudies` keeps sole ownership of the
 * active-filter logic. Splitting it out mirrors the `ServiceCard`/`ServiceTags`
 * separation and keeps each file to a single concern.
 */
export default function CaseStudyFilter({
  categories,
  active,
  onSelect,
}: {
  categories: readonly string[];
  active: string;
  onSelect: (category: string) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Filter case studies by category"
      className="flex flex-wrap gap-2"
    >
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            aria-pressed={isActive}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-navy text-white"
                : "bg-surface text-ink-muted ring-1 ring-inset ring-navy/15 hover:text-navy hover:ring-cyan"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
