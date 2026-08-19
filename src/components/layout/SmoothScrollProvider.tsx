"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Smooth scroll is opt-in to fine-pointer devices only (desktop mouse/trackpad).
 * Touch devices keep native momentum scroll — Lenis on touch is a well-known
 * source of scroll jank, and native mobile scroll already feels good.
 * Lenis.respectReducedMotion defaults to true, so no extra gating is needed
 * for prefers-reduced-motion here.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const lenis = new Lenis({ autoRaf: false });
    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.off("scroll", onScroll);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
