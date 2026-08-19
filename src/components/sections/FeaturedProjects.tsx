"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Project } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useRevealVariants, VIEWPORT_ONCE } from "@/lib/motion";

function ProjectImage({ project }: { project: Project }) {
  if (!project.image) return null;

  return (
    <div className="relative min-h-[200px] overflow-hidden bg-surface-soft md:min-h-[240px]">
      <Image
        src={project.image}
        alt={project.imageAlt ?? project.name}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-top"
      />
    </div>
  );
}

function TechList({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-[4px] border border-hairline px-2.5 py-1 text-[12px] text-body-strong"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function FeaturedProjects() {
  const { projects } = useLanguage().t;
  const featured = projects.items.find((item) => item.tier === 1);
  const technical = projects.items.find((item) => item.tier === 2);
  const clients = projects.items.filter((item) => item.tier === 3);
  const { container: gridContainer, item: gridItem } = useRevealVariants();

  if (!featured || !technical) return null;

  return (
    <section id="work" className="border-t border-hairline py-20 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            kicker={projects.kicker}
            heading={projects.heading}
            intro={projects.intro}
          />
        </Reveal>

        <Reveal>
          <article className="mt-12 overflow-hidden rounded-[10px] border border-mint/25 bg-surface-card">
            <div className="p-6 md:p-10">
              <p className="label-caps text-mint">{featured.kind}</p>
              <h3 className="display-lg mt-4">{featured.name}</h3>
              {featured.company ? (
                <p className="caption mt-2">{featured.company}</p>
              ) : null}
              <p className="body-md mt-5 max-w-3xl text-body-strong">{featured.summary}</p>
              {featured.role ? (
                <p className="body-sm mt-4 max-w-3xl text-muted">{featured.role}</p>
              ) : null}
              {featured.responsibilities.length > 0 ? (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {featured.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="rounded-[4px] border border-hairline px-2.5 py-1 text-[12px] text-body-strong"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {featured.architectureNotes.length > 0 ? (
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {featured.architectureNotes.map((note) => (
                    <p
                      key={note}
                      className="rounded-[8px] border border-hairline bg-surface-soft p-4 body-sm"
                    >
                      {note}
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        </Reveal>

        <Reveal>
          <article className="mt-6 overflow-hidden rounded-[10px] border border-hairline bg-canvas">
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-3">
                <p className="label-caps text-mint">{technical.kind}</p>
                {technical.company ? (
                  <p className="caption">{technical.company}</p>
                ) : null}
              </div>
              <h3 className="title-lg mt-3">{technical.name}</h3>
              <p className="body-sm mt-3 max-w-3xl">{technical.summary}</p>
              {technical.role ? (
                <p className="caption mt-3 max-w-3xl">{technical.role}</p>
              ) : null}

              {technical.architectureNotes.length > 0 ? (
                <ul className="mt-5 space-y-2">
                  {technical.architectureNotes.map((note) => (
                    <li key={note} className="body-sm">
                      {note}
                    </li>
                  ))}
                </ul>
              ) : null}

              {technical.tradeoffs.length > 0 ? (
                <div className="mt-5">
                  <p className="label-caps text-muted">{projects.tradeoffsLabel}</p>
                  <ul className="mt-2 space-y-2">
                    {technical.tradeoffs.map((item) => (
                      <li key={item} className="body-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <TechList items={technical.technologies} />

              {technical.href ? (
                <a
                  href={technical.href}
                  className="mt-6 inline-flex text-[13px] font-semibold text-mint hover:text-mint-strong"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {projects.repoLabel} →
                </a>
              ) : null}
            </div>
          </article>
        </Reveal>

        <motion.div
          className="reveal mt-6 grid gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={gridContainer}
        >
          {clients.map((project) => (
            <motion.article
              key={project.id}
              variants={gridItem}
              className="overflow-hidden rounded-[10px] border border-hairline"
            >
              <ProjectImage project={project} />
              <div className="p-6">
                <p className="label-caps text-mint">{project.kind}</p>
                <h3 className="title-lg mt-3">{project.name}</h3>
                {project.company ? (
                  <p className="caption mt-1">{project.company}</p>
                ) : null}
                <p className="body-sm mt-4">{project.summary}</p>
                {project.role ? (
                  <p className="caption mt-3">{project.role}</p>
                ) : null}
                <TechList items={project.technologies} />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
