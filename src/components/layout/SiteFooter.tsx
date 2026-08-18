"use client";

import { BrandMark } from "@/components/ui/BrandMark";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/shared";
import { useLanguage } from "@/i18n/LanguageProvider";

export function SiteFooter() {
  const { t, nav } = useLanguage();

  return (
    <footer className="border-t border-hairline bg-canvas">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <BrandMark />
          <p className="body-sm mt-4 max-w-xs">{site.title}</p>
        </div>
        <div>
          <p className="label-caps text-muted">{t.navAria}</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="body-sm hover:text-mint">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-caps text-muted">{t.contact.kicker}</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href={`mailto:${site.email}`} className="body-sm hover:text-mint">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                className="body-sm hover:text-mint"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.github}
                className="body-sm hover:text-mint"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="border-t border-hairline py-5">
        <p className="caption">
          {site.name} — {site.title}
        </p>
      </Container>
    </footer>
  );
}
