import { siteConfig } from "@/config/site";
import MobileNav from "@/components/layout/MobileNav";

/**
 * Site header: brand on the left, navigation + call-to-action on the right.
 * It is presentation-only — all links come from `siteConfig`, so this component
 * never needs editing when the menu changes.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-muted bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand (in-page anchor to the top; native <a> for reliable hash scroll) */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/#hero" className="font-heading text-lg font-bold text-navy">
          {siteConfig.name}
        </a>

        {/* Primary navigation (hidden on small screens) */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-ink-muted">
            {siteConfig.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side: desktop CTA + mobile hamburger */}
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.cta.href}
            className="hidden rounded-lg bg-cyan px-4 py-2 text-sm font-medium text-navy-dark transition-colors hover:bg-cyan-light md:inline-block"
          >
            {siteConfig.cta.label}
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
