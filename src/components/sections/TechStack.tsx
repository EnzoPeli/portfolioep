"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useRevealVariants, VIEWPORT_ONCE } from "@/lib/motion";

export function TechStack() {
  const { stack } = useLanguage().t;
  const { container, item } = useRevealVariants();

  return (
    <section id="stack" className="border-t border-hairline bg-surface-soft py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker={stack.kicker}
            heading={stack.heading}
            intro={stack.intro}
          />
        </Reveal>

        <motion.div
          className="reveal mt-12 grid gap-px overflow-hidden rounded-[10px] border border-hairline bg-hairline md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={container}
        >
          {stack.groups.map((group) => (
            <motion.article key={group.title} variants={item} className="bg-canvas p-6">
              <h3 className="label-caps text-muted">{group.title}</h3>
              <ul className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-3">
                {group.items.map((techItem) => (
                  <li
                    key={techItem.name}
                    className={
                      techItem.emphasis === "primary"
                        ? "text-[1.45rem] font-semibold tracking-tight text-ink"
                        : "text-[15px] text-body"
                    }
                  >
                    {techItem.name}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
