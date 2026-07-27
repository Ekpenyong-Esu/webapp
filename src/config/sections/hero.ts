/**
 * Hero section copy (Layer 6). Kept as data so the wording is edited here,
 * separate from the Hero component's markup.
 */
export const hero = {
  /** The sharp, specific one-liner (design + positioning docs). */
  headline: "From silicon to cloud — one engineering partner.",
  /** Supporting line that states the full-stack-of-hardware differentiator. */
  subheadline:
    "Embedded Systems, Firmware, HIL/SIL automotive test rigs, on-device edge AI, Robotics, Machine Learning, and full-stack software — one partner across the whole path, from bare-metal to cloud.",
  /** The silicon → cloud chain, shown as a subtle row of steps. */
  chain: [
    "Embedded",
    "Machine Learning",
    "Robotics",
    "Firmware",
    "RTOS",
    "CAN / TSN",
    "HIL / SIL",
    "Edge AI",
    "IoT",
    "Cloud",
    "Embedded, Machine Learning, and AI Security",
  ],
} as const;
