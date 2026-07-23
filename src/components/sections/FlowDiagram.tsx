/**
 * FlowDiagram — the "silicon → cloud" chain rendered as a connected,
 * left-to-right pipeline (Layer 6). Each step is a node; between nodes a cyan
 * pulse travels along the connector to imply flow from one stage to the next.
 *
 * Presentation-only: it receives the ordered `steps` as a prop (from
 * `siteConfig.hero.chain`) and knows nothing about the config. Pure CSS
 * animation — no client JS — and the pulse is neutralised for users with
 * `prefers-reduced-motion` via the global rule in globals.css.
 */
export default function FlowDiagram({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 sm:gap-x-0">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <li key={step} className="flex items-center">
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm font-medium text-white/80 backdrop-blur">
              {step}
            </span>

            {!isLast && (
              <span
                aria-hidden
                className="relative mx-1 hidden h-px w-8 bg-white/15 sm:block"
              >
                <span
                  className="absolute top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_6px_var(--color-cyan)]"
                  style={{
                    animation: "flow-dot 2.4s linear infinite",
                    animationDelay: `${index * 0.3}s`,
                  }}
                />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}
