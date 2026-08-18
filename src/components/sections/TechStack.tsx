"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export function TechStack() {
  const { stack } = useLanguage().t;

  return (
    <section id="stack" className="border-t border-hairline bg-surface-soft py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker={stack.kicker}
            heading={stack.heading}
            intro={stack.intro}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[10px] border border-hairline bg-hairline md:grid-cols-2">
            {stack.groups.map((group) => (
              <article key={group.title} className="bg-canvas p-6">
                <h3 className="label-caps text-muted">{group.title}</h3>
                <ul className="mt-6 flex flex-wrap items-end gap-x-5 gap-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className={
                        item.emphasis === "primary"
                          ? "text-[1.45rem] font-semibold tracking-tight text-ink"
                          : "text-[15px] text-body"
                      }
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
