"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "@/components/ui/BrandMark";
import { Container } from "@/components/ui/Container";
import { LanguageSwitch } from "@/components/ui/LanguageSwitch";
import { site } from "@/content/shared";
import { useLanguage } from "@/i18n/LanguageProvider";

export function SiteHeader() {
  const { t, nav } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline/80 bg-canvas/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" onClick={() => setOpen(false)}>
          <BrandMark />
        </a>

        <nav aria-label={t.navAria} className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] text-body transition-colors hover:text-mint"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.cv.href}
            download={site.cv.filename}
            className="hidden text-[13px] text-muted transition-colors hover:text-mint sm:inline"
          >
            {t.hero.cvCta}
          </a>
          <a
            href={site.github}
            className="hidden text-[13px] text-muted transition-colors hover:text-mint sm:inline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            className="hidden text-[13px] text-muted transition-colors hover:text-mint sm:inline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <LanguageSwitch />
          <button
            type="button"
            className="text-[13px] font-semibold text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? t.menuClose : t.menuOpen}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="fixed inset-0 z-50 flex flex-col bg-canvas lg:hidden">
          <Container className="flex h-16 items-center justify-between">
            <a href="#top" onClick={() => setOpen(false)}>
              <BrandMark />
            </a>
            <button
              type="button"
              className="text-[13px] font-semibold text-ink"
              onClick={() => setOpen(false)}
            >
              {t.menuClose}
            </button>
          </Container>
          <nav
            aria-label={t.navAria}
            className="flex flex-1 flex-col justify-center gap-5 px-5"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="display-md"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.cv.href}
              download={site.cv.filename}
              className="display-md"
              onClick={() => setOpen(false)}
            >
              {t.hero.cvCta}
            </a>
            <div className="mt-6">
              <LanguageSwitch />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
