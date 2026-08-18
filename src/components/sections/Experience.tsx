"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Experience() {
  const { experience } = useLanguage().t;

  return (
    <section id="experience" className="border-t border-hairline py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker={experience.kicker}
            heading={experience.heading}
            intro={experience.intro}
          />

          <article className="mt-12 overflow-hidden rounded-[10px] border border-hairline">
            <div className="grid lg:grid-cols-[200px_minmax(0,1fr)]">
              <div className="border-b border-hairline bg-surface-soft p-6 lg:border-b-0 lg:border-r">
                <p className="label-caps text-mint">{experience.currentRole}</p>
                <p className="mt-4 text-[1.15rem] font-semibold text-ink">
                  {experience.company}
                </p>
                <p className="caption mt-3">{experience.dates}</p>
                <p className="caption mt-1">{experience.mode}</p>
                <p className="caption mt-4 text-mint">{experience.promotion}</p>
              </div>
              <div className="p-6 md:p-8">
                <p className="body-md max-w-3xl text-body-strong">{experience.summary}</p>
                <p className="label-caps mt-8 text-muted">
                  {experience.asDeveloper.heading}
                </p>
                <p className="body-sm mt-3 max-w-2xl">{experience.asDeveloper.text}</p>
              </div>
            </div>
          </article>

          <ol className="mt-6 grid gap-px overflow-hidden rounded-[10px] border border-hairline bg-hairline lg:grid-cols-3">
            {experience.path.map((step) => (
              <li
                key={step.stage}
                className={`p-6 ${step.current ? "bg-mint-dim/40" : "bg-canvas"}`}
              >
                <p className="caption font-mono text-mint">{step.stage}</p>
                <h3 className="display-sm mt-4">{step.title}</h3>
                <p className="label-caps mt-3 text-muted">{step.period}</p>
                <p className="body-sm mt-4">{step.summary}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
