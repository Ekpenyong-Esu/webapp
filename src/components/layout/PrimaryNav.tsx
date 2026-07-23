"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

/** The section id an in-page nav href points at, e.g. "/#services" -> "services". */
function sectionIdFromHref(href: string): string {
  return href.split("#")[1] ?? "";
}

/**
 * PrimaryNav: the desktop header navigation with active-section highlighting
 * ("scrollspy"). It owns a single concern — tracking which section is currently
 * centred in the viewport and underlining that link — so the `Header` stays a
 * presentational server component. Falls back gracefully (no highlight) without
 * JS or IntersectionObserver.
 */
export default function PrimaryNav() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const sections = siteConfig.nav
      .map((link) => document.getElementById(sectionIdFromHref(link.href)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // A thin band across the middle of the viewport: the section crossing the
    // centre is treated as "active", which feels natural while scrolling.
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) setActiveId(mostVisible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <ul className="flex items-center gap-8 text-sm text-ink-muted">
      {siteConfig.nav.map((link) => {
        const isActive = sectionIdFromHref(link.href) === activeId;

        return (
          <li key={link.href}>
            <a
              href={link.href}
              aria-current={isActive ? "true" : undefined}
              className={`relative transition-colors hover:text-navy ${
                isActive ? "text-navy" : ""
              }`}
            >
              {link.label}
              <span
                aria-hidden
                className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-cyan transition-transform duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
