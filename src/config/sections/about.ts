/**
 * About section (Layer 10). Company credibility — the trust signal for a
 * boutique AB. Plain data rendered by the About component (and reused by the
 * hero trust bar via `highlights`).
 */
export const about = {
  heading: "About",
  paragraphs: [
    "zaramTech AB is a boutique engineering consultancy spanning the full path from silicon to cloud — embedded firmware, HIL/SIL automotive test, on-device edge AI, and full-stack software.",
    "Behind it is 10+ years designing, integrating, and validating embedded and automotive software — building Hardware-in-the-Loop rigs end-to-end and the automated test infrastructure (NI VeriStand, TwinCAT, and Aliaro SIL) that validates safety-critical vehicle systems.",
    "That deep firmware, RTOS, and vehicle-networking background is paired with applied AI/ML research — including a quantized YOLOv8n detector deployed on an ESP32-CAM via TFLite Micro for real-time, offline, on-device detection.",
  ],
  highlights: [
    "10+ years in embedded & automotive",
    "HIL/SIL automotive test engineering",
    "Applied AI & edge ML expertise",
    "Sweden-based, working internationally",
  ],
} as const;
