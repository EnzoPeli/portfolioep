"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import type { PointerEvent, ReactNode } from "react";
import { buttonVariants } from "@/lib/motion";
import { usePointerFine } from "@/lib/usePointerFine";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
  download?: string;
  /** Pulls slightly toward the cursor and gains a glow ring on hover — reserve for the one or two primary CTAs on a page, not every button. */
  magnetic?: boolean;
};

const MAGNETIC_PULL = 0.35;
const MAGNETIC_SPRING = { stiffness: 300, damping: 20, mass: 0.5 };

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  download,
  magnetic = false,
}: ButtonProps) {
  const pointerFine = usePointerFine();
  const isMagnetic = magnetic && pointerFine;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, MAGNETIC_SPRING);
  const springY = useSpring(y, MAGNETIC_SPRING);

  const base =
    "relative inline-flex h-11 items-center justify-center rounded-[6px] px-6 text-[13px] font-semibold tracking-[0.04em] transition-colors duration-200";

  const styles =
    variant === "ghost"
      ? "border border-hairline bg-transparent text-ink hover:border-mint hover:text-mint"
      : "bg-mint text-canvas hover:bg-mint-strong";

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (!isMagnetic) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * MAGNETIC_PULL);
    y.set((event.clientY - rect.top - rect.height / 2) * MAGNETIC_PULL);
  };

  const handlePointerLeave = () => {
    if (!isMagnetic) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      className={`${base} ${styles} ${className}`}
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      style={isMagnetic ? { x: springX, y: springY } : undefined}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...(download ? { download } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {isMagnetic ? (
        <motion.span
          aria-hidden="true"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
            tap: { opacity: 1 },
          }}
          className="pointer-events-none absolute inset-0 rounded-[6px]"
          style={{
            boxShadow:
              "0 0 0 1px color-mix(in srgb, var(--color-mint) 55%, transparent), 0 0 26px 2px color-mix(in srgb, var(--color-mint) 45%, transparent)",
          }}
        />
      ) : null}
      {children}
    </motion.a>
  );
}
