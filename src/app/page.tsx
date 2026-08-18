import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Leadership } from "@/components/sections/Leadership";
import { TechStack } from "@/components/sections/TechStack";
import { site } from "@/content/shared";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  description: site.seo.description.es,
  image: site.photo.src,
  email: site.email,
  url: site.linkedin,
  sameAs: [site.github, site.linkedin],
};

export default function Home() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <About />
      <Experience />
      <Leadership />
      <FeaturedProjects />
      <TechStack />
      <Education />
      <Contact />
    </main>
  );
}
