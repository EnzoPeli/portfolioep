"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/shared";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Contact() {
  const { t } = useLanguage();
  const { contact } = t;

  return (
    <section id="contact" className="relative overflow-hidden border-t border-hairline">
      <div className="pointer-events-none absolute inset-0 grid-field opacity-30" />
      <Container className="relative py-20 md:py-24">
        <Reveal>
          <p className="label-caps text-mint">{contact.kicker}</p>
          <h2 className="display-lg mt-4 max-w-3xl">{contact.heading}</h2>
          <p className="body-md mt-5 max-w-2xl text-body-strong">{contact.intro}</p>

          <ul className="mt-12 grid gap-px overflow-hidden rounded-[10px] border border-hairline bg-hairline sm:grid-cols-3">
            <li className="bg-canvas p-6">
              <p className="label-caps text-muted">{contact.emailLabel}</p>
              <a href={`mailto:${site.email}`} className="mt-3 block text-[15px] text-ink hover:text-mint">
                {site.email}
              </a>
            </li>
            <li className="bg-canvas p-6">
              <p className="label-caps text-muted">{contact.linkedinLabel}</p>
              <a
                href={site.linkedin}
                className="mt-3 block text-[15px] text-ink hover:text-mint"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/enzo-pelizzari
              </a>
            </li>
            <li className="bg-canvas p-6">
              <p className="label-caps text-muted">{contact.githubLabel}</p>
              <a
                href={site.github}
                className="mt-3 block text-[15px] text-ink hover:text-mint"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/EnzoPeli
              </a>
            </li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={`mailto:${site.email}`}>{t.hero.secondaryCta}</Button>
            <Button href={site.cv.href} download={site.cv.filename} variant="ghost">
              {contact.cvCta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
