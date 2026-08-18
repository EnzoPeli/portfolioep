export type Locale = "es" | "en";

export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  index: string;
  value: string;
  label: string;
};

export type Project = {
  id: string;
  tier: 1 | 2 | 3;
  name: string;
  company: string | null;
  kind: string;
  summary: string;
  role: string | null;
  responsibilities: string[];
  technologies: string[];
  image: string | null;
  imageAlt: string | null;
  href: string | null;
  architectureNotes: string[];
  tradeoffs: string[];
};

export type Dictionary = {
  skip: string;
  menuOpen: string;
  menuClose: string;
  navAria: string;
  langAria: string;
  hero: {
    kicker: string;
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
    cvCta: string;
    stats: Stat[];
  };
  about: {
    kicker: string;
    heading: string;
    body: string[];
  };
  experience: {
    kicker: string;
    heading: string;
    intro: string;
    currentRole: string;
    previousRole: string;
    company: string;
    dates: string;
    promotion: string;
    mode: string;
    summary: string;
    asDeveloper: { heading: string; text: string };
    path: {
      stage: string;
      title: string;
      period: string;
      current: boolean;
      summary: string;
    }[];
  };
  leadership: {
    kicker: string;
    heading: string;
    intro: string;
    team: { heading: string; text: string };
    chips: string[];
  };
  stack: {
    kicker: string;
    heading: string;
    intro: string;
    groups: { title: string; items: { name: string; emphasis: "primary" | "secondary" }[] }[];
  };
  projects: {
    kicker: string;
    heading: string;
    intro: string;
    repoLabel: string;
    tradeoffsLabel: string;
    items: Project[];
  };
  education: {
    kicker: string;
    heading: string;
    status: string;
    program: string;
    institution: string;
    thesisLabel: string;
    thesisName: string;
    languagesKicker: string;
    languagesHeading: string;
    languages: { name: string; level: string; note: string | null }[];
  };
  contact: {
    kicker: string;
    heading: string;
    intro: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    cvCta: string;
  };
};
