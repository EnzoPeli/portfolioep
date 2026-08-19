"use client";

import { useEffect, useState } from "react";

/**
 * Gate for any decorative R3F piece: desktop viewport and no reduced-motion
 * preference. Consumers should use this to decide whether to mount a 3D
 * piece at all (not just hide it via CSS) so the WebGL context never starts
 * on mobile or for users who opted out of motion.
 */
export function useCanRender3D() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setEnabled(desktop.matches && !reducedMotion.matches);
    update();

    desktop.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}
