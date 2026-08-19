"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useNeonFlickerVariants, VIEWPORT_ONCE } from "@/lib/motion";

export function NeonIndex({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { variants } = useNeonFlickerVariants();

  return (
    <motion.p
      className={`reveal ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={variants}
    >
      {children}
    </motion.p>
  );
}
