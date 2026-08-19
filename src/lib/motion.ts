"use client";

import { useReducedMotion } from "motion/react";
import type { Transition, Variants } from "motion/react";

export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const DURATION_FAST = 0.18;
export const DURATION_BASE = 0.55;
export const STAGGER_INTERVAL = 0.07;

export const VIEWPORT_ONCE = {
  once: true,
  margin: "0px 0px -8% 0px",
  amount: 0.12,
} as const;

const baseTransition: Transition = { duration: DURATION_BASE, ease: EASE_OUT };
const reducedTransition: Transition = { duration: DURATION_FAST };

/**
 * Single source of truth for the site's scroll-reveal animation: a plain
 * fade+slide-up, one level of stagger max, collapsing to an opacity-only
 * fade when the user has prefers-reduced-motion set.
 */
export function useRevealVariants() {
  const reduced = useReducedMotion();

  const item: Variants = reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: reducedTransition } }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: baseTransition },
      };

  const container: Variants = {
    hidden: {},
    visible: {
      transition: reduced
        ? {}
        : { staggerChildren: STAGGER_INTERVAL, delayChildren: 0.05 },
    },
  };

  return { item, container, reduced };
}

/**
 * Variants (not direct whileHover/whileTap props) so a descendant — e.g. a
 * glow-ring span — can share the same "hover"/"tap" state via matching
 * variant keys instead of wiring its own pointer listeners.
 */
export const buttonVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: DURATION_FAST, ease: EASE_OUT } },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
};

/** Neon sign-style flicker: opacity/glow settle in with a couple of stutters. */
export function useNeonFlickerVariants() {
  const reduced = useReducedMotion();

  const variants: Variants = reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: reducedTransition } }
    : {
        hidden: { opacity: 0, textShadow: "0 0 0px transparent" },
        visible: {
          opacity: [0, 1, 0.15, 1, 0.3, 1, 1],
          textShadow: [
            "0 0 0px transparent",
            "0 0 10px color-mix(in srgb, var(--color-mint) 80%, transparent)",
            "0 0 0px transparent",
            "0 0 10px color-mix(in srgb, var(--color-mint) 80%, transparent)",
            "0 0 4px color-mix(in srgb, var(--color-mint) 50%, transparent)",
            "0 0 10px color-mix(in srgb, var(--color-mint) 80%, transparent)",
            "0 0 6px color-mix(in srgb, var(--color-mint) 60%, transparent)",
          ],
          transition: { duration: 0.9, ease: EASE_OUT },
        },
      };

  return { variants, reduced };
}
