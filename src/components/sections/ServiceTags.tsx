"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * How many tags show before the rest collapse behind a "+N" toggle. Keeping it
 * here means every card stays visually balanced and the section reads as a
 * scannable grid rather than a wall of pills.
 */
const MAX_VISIBLE_TAGS = 4;

/**
 * ServiceTags (Layer 7): the interactive tag list for a service card. It owns a
 * single concern — whether the extra tags are expanded — so the surrounding
 * `ServiceCard` can stay a presentational server component. Receives only plain
 * data (a string array + a label), so it's safe across the server/client boundary.
 */
export default function ServiceTags({
  tags,
  label,
}: {
  tags: readonly string[];
  label: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const hiddenTagCount = tags.length - MAX_VISIBLE_TAGS;
  const hasHiddenTags = hiddenTagCount > 0;
  const visibleTags =
    expanded || !hasHiddenTags ? tags : tags.slice(0, MAX_VISIBLE_TAGS);

  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {visibleTags.map((tag) => (
        <li
          key={tag}
          className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-ink-muted"
        >
          {tag}
        </li>
      ))}
      {hasHiddenTags && (
        <li>
          <button
            type="button"
            onClick={() => setExpanded((open) => !open)}
            aria-expanded={expanded}
            aria-label={
              expanded
                ? `Show fewer ${label} technologies`
                : `Show ${hiddenTagCount} more ${label} technologies`
            }
            className="inline-flex items-center gap-1 rounded-full bg-cyan/10 px-2.5 py-1 text-xs font-semibold text-navy ring-1 ring-inset ring-cyan/30 transition-colors hover:bg-cyan hover:text-navy-dark"
          >
            {expanded ? "Show less" : `+${hiddenTagCount} more`}
            <ChevronDown
              size={12}
              aria-hidden
              className={`transition-transform duration-200 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </li>
      )}
    </ul>
  );
}
