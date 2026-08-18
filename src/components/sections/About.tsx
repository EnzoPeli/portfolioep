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
          <div className="max-w-2xl">
            <SectionHeading kicker={about.kicker} heading={about.heading} />
            <div className="mt-8 space-y-5">
              {about.body.map((paragraph) => (
                <p key={paragraph} className="body-md text-body-strong">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
