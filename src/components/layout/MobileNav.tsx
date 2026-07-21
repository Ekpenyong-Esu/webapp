"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * Mobile navigation: a hamburger button that opens a full-screen panel with the
 * same nav links used on desktop. Hidden on md+ screens where the inline desktop
 * nav takes over.
 *
 * Headless UI's `Dialog` handles the hard parts for us — rendering in a portal
 * (so it escapes the header's backdrop-filter context), locking body scroll,
 * closing on Escape / backdrop click, focus trapping, and ARIA roles.
 */
export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="inline-flex items-center justify-center rounded-lg p-2 text-navy transition-colors hover:bg-surface-muted"
      >
        <Menu size={24} aria-hidden />
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-100 md:hidden">
        <DialogPanel className="fixed inset-0 overflow-y-auto bg-surface">
          {/* Panel header: brand + close button */}
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/#hero"
              onClick={() => setOpen(false)}
              className="font-heading text-lg font-bold text-navy"
            >
              {siteConfig.name}
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex items-center justify-center rounded-lg p-2 text-navy transition-colors hover:bg-surface-muted"
            >
              <X size={24} aria-hidden />
            </button>
          </div>

          {/* Links + CTA */}
          <nav aria-label="Mobile" className="px-6 py-6">
            <ul className="flex flex-col gap-2">
              {siteConfig.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 text-lg text-ink transition-colors hover:bg-surface-muted hover:text-navy"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={siteConfig.cta.href}
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-cyan px-6 py-3 font-medium text-navy-dark transition-colors hover:bg-cyan-light"
            >
              {siteConfig.cta.label}
            </a>
          </nav>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
