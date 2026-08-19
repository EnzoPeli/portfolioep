"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export function About() {
  const { about } = useLanguage().t;

  return (
    <section id="about" className="border-t border-hairline py-20 md:py-24">
      <Container>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading kicker={about.kicker} heading={about.heading} />
              <div className="mt-8 space-y-5">
                {about.body.map((paragraph) => (
                  <p key={paragraph} className="body-md text-body-strong">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {about.principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-[10px] border border-hairline bg-surface-soft p-5"
                >
                  <p className="label-caps text-mint">{principle.title}</p>
                  <p className="body-sm mt-3">{principle.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
