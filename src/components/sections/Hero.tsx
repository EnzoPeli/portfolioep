"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SpecCell } from "@/components/ui/SpecCell";
import { site } from "@/content/shared";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Hero() {
  const { t, locale } = useLanguage();
  const { hero } = t;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-field opacity-70" />
      <Container className="relative py-10 sm:py-14 lg:py-16">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_240px] xl:grid-cols-[minmax(0,1fr)_260px]">
          <div>
            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-1">
                <p className="label-caps text-mint">{hero.kicker}</p>
                <h1 className="display-xl mt-4">
                  <span className="block">Enzo</span>
                  <span className="block">Pelizzari</span>
                </h1>
                <p className="mt-5 text-[18px] font-medium text-ink sm:text-[20px]">
                  {site.title}
                </p>
              </div>
              <aside className="w-[88px] shrink-0 sm:w-[110px] lg:hidden">
                <figure className="mint-glow overflow-hidden rounded-[10px] bg-surface-card">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={site.photo.src}
                      alt={site.photo.alt[locale]}
                      fill
                      priority
                      sizes="110px"
                      className="object-cover object-center"
                    />
                  </div>
                </figure>
              </aside>
            </div>
            <p className="body-md mt-5 max-w-xl text-body-strong">{hero.tagline}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href="#work">{hero.primaryCta}</Button>
              <Button href="#contact" variant="ghost">
                {hero.secondaryCta}
              </Button>
              <Button href={site.cv.href} download={site.cv.filename} variant="ghost">
                {hero.cvCta}
              </Button>
            </div>

            <div className="mt-6 flex gap-5 text-[13px]">
              <a
                href={site.github}
                className="text-muted transition-colors hover:text-mint"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={site.linkedin}
                className="text-muted transition-colors hover:text-mint"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="mx-auto hidden w-full lg:block">
            <figure className="mint-glow overflow-hidden rounded-[10px] bg-surface-card">
              <div className="relative aspect-[4/5]">
                <Image
                  src={site.photo.src}
                  alt={site.photo.alt[locale]}
                  fill
                  priority
                  sizes="(max-width: 1024px) 230px, 280px"
                  className="object-cover object-center"
                />
              </div>
            </figure>
          </aside>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[10px] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {hero.stats.map((stat) => (
            <SpecCell
              key={stat.index}
              index={stat.index}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
