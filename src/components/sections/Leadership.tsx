"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Leadership() {
  const { leadership } = useLanguage().t;

  return (
    <section id="leadership" className="border-t border-hairline bg-surface-soft py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker={leadership.kicker}
            heading={leadership.heading}
            intro={leadership.intro}
          />

          <p className="mt-8 inline-flex rounded-[6px] border border-hairline bg-canvas px-4 py-2 text-[14px] text-ink">
            {leadership.team.text}
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {leadership.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-[6px] border border-hairline bg-canvas px-3 py-1.5 text-[13px] text-ink"
              >
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
