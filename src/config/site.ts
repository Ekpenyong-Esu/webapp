/**
 * Central site configuration — the single source of truth consumed across the
 * app as `siteConfig`. The actual data is split into focused, single-purpose
 * modules (one per section / concern) under `src/config`; this file only
 * composes them, so components keep a single, stable import while each piece of
 * content lives in its own small, readable file.
 */
import { brand } from "./brand";
import { company } from "./company";
import { nav, legal, cta, secondaryCta } from "./navigation";
import { hero } from "./sections/hero";
import { services } from "./sections/services";
import { caseStudies } from "./sections/case-studies";
import { techStack } from "./sections/tech-stack";
import { about } from "./sections/about";
import { contact } from "./sections/contact";
import { process } from "./sections/process";

export type { NavLink } from "./types";

export const siteConfig = {
  ...brand,
  hero,
  services,
  caseStudies,
  contact,
  techStack,
  about,
  company,
  nav,
  legal,
  cta,
  secondaryCta,
  process,
} as const;
