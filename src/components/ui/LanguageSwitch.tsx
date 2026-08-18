"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function LanguageSwitch() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.langAria}
      className="flex items-center rounded-[6px] border border-hairline p-0.5 text-[12px] font-semibold tracking-[0.08em]"
    >
      {(["es", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`rounded-[4px] px-2.5 py-1 uppercase transition-colors ${
            locale === code
              ? "bg-mint-dim text-mint"
              : "text-muted hover:text-ink"
          }`}
          aria-pressed={locale === code}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
