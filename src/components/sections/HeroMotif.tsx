/**
 * HeroMotif — the single tasteful technical motif for the hero
 * (design system §4: "one tasteful technical motif, not decoration everywhere").
 *
 * Subtle, low-contrast PCB traces sitting behind the tagline. It is purely
 * decorative, so it is `aria-hidden`, ignores pointer events, and never affects
 * layout. The gentle node pulse is automatically neutralised for users with
 * `prefers-reduced-motion` via the global rule in globals.css.
 */
export default function HeroMotif() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* PCB traces — thin navy lines with right-angle turns */}
        <g
          stroke="var(--color-navy)"
          strokeOpacity="0.08"
          strokeWidth="2"
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

        {/* Solder pads / nodes — a few cyan accents, some gently pulsing */}
        <g fill="var(--color-cyan)">
          <circle cx="620" cy="180" r="4" fillOpacity="0.25" />
          <circle cx="560" cy="150" r="4" fillOpacity="0.2" />
          <circle cx="520" cy="240" r="4" fillOpacity="0.2" className="animate-pulse" />
          <circle cx="480" cy="380" r="4" fillOpacity="0.2" />
          <circle cx="700" cy="420" r="4" fillOpacity="0.25" className="animate-pulse" />
          <circle cx="660" cy="140" r="4" fillOpacity="0.2" />
          <circle cx="480" cy="460" r="4" fillOpacity="0.2" />
        </g>
      </svg>
    </div>
  );
}
