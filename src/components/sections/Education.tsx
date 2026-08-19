"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/shared";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useRevealVariants, VIEWPORT_ONCE } from "@/lib/motion";

export function Education() {
  const { education } = useLanguage().t;
  const { container, item } = useRevealVariants();

  return (
    <section id="education" className="border-t border-hairline py-20 md:py-24">
      <Container>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading kicker={education.kicker} heading={education.heading} />
              <article className="mt-10 rounded-[10px] border border-hairline bg-surface-soft p-6 md:p-8">
                <p className="label-caps text-mint">{education.status}</p>
                <h3 className="display-sm mt-4">{education.program}</h3>
                <p className="mt-3 text-[16px] text-ink">{education.institution}</p>
                <p className="caption mt-8">{education.thesisLabel}</p>
                <a
                  href={site.votingRepo}
                  className="mt-2 inline-flex text-[16px] font-medium text-mint hover:text-mint-strong"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {education.thesisName} →
                </a>
              </article>
            </div>
            <div>
              <SectionHeading
                kicker={education.languagesKicker}
                heading={education.languagesHeading}
              />
              <motion.div
                className="reveal mt-10 grid gap-px overflow-hidden rounded-[10px] border border-hairline bg-hairline"
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                variants={container}
              >
                {education.languages.map((lang) => (
                  <motion.article key={lang.name} variants={item} className="bg-canvas p-6">
                    <p className="display-sm">{lang.name}</p>
                    <p className="label-caps mt-3 text-mint">{lang.level}</p>
                    {lang.note ? <p className="body-sm mt-4 max-w-md">{lang.note}</p> : null}
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
