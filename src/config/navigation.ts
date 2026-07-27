import type { NavLink } from "./types";

/**
 * Primary navigation — the anchor sections of the single-page site. Hrefs are
 * root-relative (/#...) so they also work from sub-pages like /privacy, jumping
 * back to the home page and scrolling to the section.
 */
export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Case studies", href: "/#case-studies" },
  { label: "Tech stack", href: "/#tech-stack" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] satisfies NavLink[];

/** Legal / policy pages (linked in the footer). */
export const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
] satisfies NavLink[];

/** The primary call-to-action repeated across the site. */
export const cta = { label: "Book a call", href: "/#contact" } as const;

/** Lower-commitment secondary CTA for visitors not ready to book yet. */
export const secondaryCta = {
  label: "See case studies",
  href: "/#case-studies",
} as const;
