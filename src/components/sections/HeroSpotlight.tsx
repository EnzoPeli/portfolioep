"use client";

import { useEffect, useRef } from "react";

/**
 * A soft mint glow that follows the cursor within the Hero section. Updates
 * CSS custom properties directly on the DOM node via a ref instead of React
 * state, so mousemove never triggers a re-render. Desktop-only (no cursor on
 * touch) and skipped under prefers-reduced-motion (continuous position
 * tracking reads closer to parallax than a simple hover state).
 */
export function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const section = el?.closest("section");
    if (!el || !section) return;

    const canRun =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canRun) return;

    const handleMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
      el.style.opacity = "1";
    };
    const handleLeave = () => {
      el.style.opacity = "0";
    };

    section.addEventListener("pointermove", handleMove);
    section.addEventListener("pointerleave", handleLeave);
    return () => {
      section.removeEventListener("pointermove", handleMove);
      section.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-500 ease-out lg:block"
      style={{
        background:
          "radial-gradient(600px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in srgb, var(--color-mint) 14%, transparent), transparent 60%)",
      }}
    />
  );
}
