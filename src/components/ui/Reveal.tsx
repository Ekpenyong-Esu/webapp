"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal: fades and slides its content in when it scrolls into view — the
 * "subtle scroll reveals only" motion the design system asks for (docs/03 §5).
 *
 * Reveals once, then stops observing. Users with `prefers-reduced-motion` (or
 * without JS/IntersectionObserver) get the content immediately with no motion,
 * and the global reduced-motion rule neutralises the transition as a backstop.
 *
 * `delay` (ms) lets callers stagger a heading and the grid beneath it.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // No animation needed / unsupported: reveal on the next frame (deferred so
    // we don't call setState synchronously inside the effect body).
    if (reduce || !("IntersectionObserver" in window)) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      // threshold 0 = fire as soon as any part enters the viewport. Using a
      // fraction here (e.g. 0.15) breaks on very tall elements whose height
      // exceeds the viewport, since that fraction may never be visible at once.
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
