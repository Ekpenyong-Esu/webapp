import Image from "next/image";
import { siteConfig } from "@/config/site";
import MobileNav from "@/components/layout/MobileNav";
import PrimaryNav from "@/components/layout/PrimaryNav";

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
        <a href="/#hero" className="flex items-center" aria-label={siteConfig.name}>
          <Image
            src="/logo.svg"
            alt={siteConfig.name}
            width={190}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </a>

        {/* Primary navigation (hidden on small screens) */}
        <nav aria-label="Primary" className="hidden md:block">
          <PrimaryNav />
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
