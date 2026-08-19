"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroSpotlight } from "@/components/sections/HeroSpotlight";
import { site } from "@/content/shared";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useRevealVariants } from "@/lib/motion";

export function Hero() {
  const { t, locale } = useLanguage();
  const { hero } = t;
  const { container, item } = useRevealVariants();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-field opacity-70" />
      <HeroSpotlight />
      <Container className="relative py-10 sm:py-14 lg:py-16">
        {/* h1 and the portrait are the LCP candidates: they render instantly,
            never gated behind an entrance animation. Only the supporting
            content cascades in around them. */}
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_340px]">
          <motion.div initial="hidden" animate="visible" variants={container}>
            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-1">
                <p className="label-caps text-mint">{hero.kicker}</p>
                <h1 className="display-xl mt-4">
                  <span className="block">Enzo</span>
                  <span className="block">Pelizzari</span>
                </h1>
                <motion.p variants={item} className="display-sm mt-4 max-w-2xl">
                  {hero.heading}
                </motion.p>
              </div>
              <aside className="w-[112px] shrink-0 sm:w-[136px] lg:hidden">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] border border-hairline bg-surface-soft">
                  <AmbientGlow className="opacity-70" />
                  <Image
                    src={site.photo.src}
                    alt={site.photo.alt[locale]}
                    fill
                    priority
                    sizes="136px"
                    className="object-contain object-bottom"
                  />
                </div>
              </aside>
            </div>
            <motion.p variants={item} className="body-md mt-5 max-w-2xl text-body-strong">
              {hero.tagline}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Button href="#work" magnetic>
                {hero.primaryCta}
              </Button>
              <Button href="#contact" variant="ghost" magnetic>
                {hero.secondaryCta}
              </Button>
              <Button href={site.cv.href} download={site.cv.filename} variant="ghost" magnetic>
                {hero.cvCta}
              </Button>
            </motion.div>

            <motion.div variants={item} className="mt-6 flex gap-5 text-[14px]">
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
            </motion.div>
          </motion.div>

          <aside className="mx-auto hidden w-full lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] border border-hairline bg-surface-soft">
              <AmbientGlow />
              <Image
                src={site.photo.src}
                alt={site.photo.alt[locale]}
                fill
                priority
                sizes="(max-width: 1280px) 300px, 340px"
                className="object-contain object-bottom"
              />
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
