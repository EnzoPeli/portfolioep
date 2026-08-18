"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#main"
      className="absolute left-5 top-3 z-[60] -translate-y-16 rounded-[6px] bg-mint px-4 py-3 text-sm font-semibold text-canvas transition-transform focus:translate-y-0"
    >
      {t.skip}
    </a>
  );
}
