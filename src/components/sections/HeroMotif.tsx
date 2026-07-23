/**
 * HeroMotif — the single tasteful technical motif for the hero
 * (design system §4: "one tasteful technical motif, not decoration everywhere").
 *
 * On the dark navy hero it does two jobs: a soft cyan radial glow that lifts the
 * background out of flatness, and low-contrast PCB traces with a few glowing
 * solder nodes. It is purely decorative, so it is `aria-hidden`, ignores pointer
 * events, and never affects layout. The gentle node pulse is automatically
 * neutralised for users with `prefers-reduced-motion` via the global rule in
 * globals.css.
 */
export default function HeroMotif() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Soft cyan radial glow — references the brand token so it stays in sync
          with the design system. Blurred and oversized to feel like ambient light. */}
      <div
        className="absolute left-1/2 top-1/3 h-220 w-220 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-cyan) 18%, transparent) 0%, transparent 60%)",
        }}
      />

      <svg
        className="h-full w-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* PCB traces — thin cyan lines with right-angle turns */}
        <g
          stroke="var(--color-cyan)"
          strokeOpacity="0.22"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M0 120 H320 L380 180 H620" />
          <path d="M1200 90 H900 L840 150 H560" />
          <path d="M0 300 H240 L300 240 H520" />
          <path d="M1200 320 H820 L760 380 H480" />
          <path d="M0 480 H360 L420 420 H700" />
          <path d="M1200 500 H860 L800 440 H600" />
          <path d="M600 0 V80 L660 140 V260" />
          <path d="M540 600 V520 L480 460 V340" />
        </g>

        {/* Solder pads / nodes — glowing cyan accents, some gently pulsing */}
        <g fill="var(--color-cyan)">
          <circle cx="620" cy="180" r="4" fillOpacity="0.7" />
          <circle cx="560" cy="150" r="4" fillOpacity="0.5" />
          <circle cx="520" cy="240" r="4" fillOpacity="0.6" className="animate-pulse" />
          <circle cx="480" cy="380" r="4" fillOpacity="0.5" />
          <circle cx="700" cy="420" r="4" fillOpacity="0.7" className="animate-pulse" />
          <circle cx="660" cy="140" r="4" fillOpacity="0.5" />
          <circle cx="480" cy="460" r="4" fillOpacity="0.5" />
        </g>
      </svg>
    </div>
  );
}
