"use client";

import { useEffect, useState } from "react";

/** True only for mouse/trackpad devices — gates hover-only interactions off touch. */
export function usePointerFine() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    const update = () => setFine(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return fine;
}
