import type { Dictionary } from "./types";

export const en: Dictionary = {
  skip: "Skip to content",
  menuOpen: "Menu",
  menuClose: "Close",
  navAria: "Primary",
  langAria: "Language",
  hero: {
    kicker: "Technical Lead",
    tagline:
      "I own uCRM end to end — the CRM contact-center teams across LatAm run on — architecture, product, and engineering in the same loop, not just shipping features.",
    primaryCta: "View projects",
    secondaryCta: "Contact me",
    cvCta: "Download CV",
    stats: [
      { index: "01", value: "7+", label: "Years of experience" },
      { index: "02", value: "Technical Lead", label: "Current role" },
      { index: "03", value: "uCRM", label: "Technical ownership" },
      { index: "04", value: "Cloud + Integrations", label: "Focus" },
    ],
  },
  about: {
    kicker: "About",
    heading: "Engineering with a product lens.",
    body: [
      "I started programming because I liked solving problems. That hasn't changed — I still get the most out of building something new, end to end.",
      "I prefer full stack work: close to the product, the architecture, and the code that connects them. These days I care about growing as a lead without stepping away from the systems we run.",
    ],
  },
  experience: {
    kicker: "Experience",
    heading: "From shipping work to owning the system.",
    intro:
      "At net2phone since April 2019. Remote. Promoted to Technical Lead in April 2025 — the title changed; the scope had already been widening.",
    currentRole: "Technical Lead",
    previousRole: "Developer",
    company: "net2phone",
    dates: "April 2019 — present",
    promotion: "Promoted April 2025",
    mode: "Remote",
    summary:
      "I joined as a Developer and now own uCRM in production. Still hands-on: architecture, integrations, cloud, and the people around the code.",
    asDeveloper: {
      heading: "How I worked as a Developer",
      text: "Delivery end to end: reading the board, matching effort to dates, implementing from requirements, testing, documenting, and flagging gaps when the spec didn't match the product. When something needed clarifying with the client, I worked with the onboarding team instead of guessing.",
    },
    path: [
      {
        stage: "01",
        title: "Developer",
        period: "From April 2019",
        current: false,
        summary:
          "Implementing, testing, documenting, and keeping work honest against requirements and dates.",
      },
      {
        stage: "02",
        title: "Senior-level ownership",
        period: "March 2024 — April 2025",
        current: false,
        summary:
          "Priorities, deadlines, quality, and the conversations that happen when a requirement doesn't hold.",
      },
      {
        stage: "03",
        title: "Technical Lead",
        period: "April 2025 — present",
        current: true,
        summary: "People, architecture, product, and stakeholders. Still close to the code.",
      },
    ],
  },
  leadership: {
    kicker: "Leadership",
    heading: "Technical Lead, not a project manager.",
    intro:
      "I lead a team of two — one developer and one QA — and I still make the technical calls. Leadership here is engineering direction, not a role detached from the code.",
    team: {
      heading: "Team",
      text: "2 people: 1 Developer and 1 QA.",
    },
    chips: ["People", "Delivery", "Engineering", "Quality", "Stakeholders"],
  },
  stack: {
    kicker: "Stack",
    heading: "What I actually build with.",
    intro: "Grouped by how I use it — not a wall of logos. The core stack sits higher.",
    groups: [
      {
        title: "Languages / Runtime",
        items: [
          { name: "TypeScript", emphasis: "primary" },
          { name: "JavaScript", emphasis: "secondary" },
          { name: "Node.js", emphasis: "primary" },
        ],
      },
      {
        title: "Frontend",
        items: [
          { name: "Vue", emphasis: "primary" },
          { name: "React", emphasis: "primary" },
          { name: "Next.js", emphasis: "primary" },
        ],
      },
      {
        title: "Backend",
        items: [
          { name: "Node.js", emphasis: "primary" },
          { name: "REST", emphasis: "secondary" },
          { name: "WebSockets", emphasis: "secondary" },
          { name: "Microservices", emphasis: "secondary" },
          { name: "Event-driven architecture", emphasis: "secondary" },
        ],
      },
      {
        title: "Databases",
        items: [
          { name: "PostgreSQL", emphasis: "primary" },
          { name: "MongoDB", emphasis: "primary" },
          { name: "MySQL", emphasis: "secondary" },
        ],
      },
      {
        title: "Cloud",
        items: [
          { name: "Google Cloud Platform", emphasis: "primary" },
          { name: "Cloud Run", emphasis: "primary" },
          { name: "Cloud Storage", emphasis: "primary" },
          { name: "Cloud Functions", emphasis: "primary" },
          { name: "Firebase Hosting", emphasis: "primary" },
          { name: "Cloud Tasks", emphasis: "primary" },
        ],
      },
      {
        title: "Infrastructure",
        items: [
          { name: "Docker", emphasis: "primary" },
          { name: "Kubernetes", emphasis: "secondary" },
          { name: "Terraform", emphasis: "secondary" },
        ],
      },
      {
        title: "CI / CD",
        items: [
          { name: "GitHub Actions", emphasis: "primary" },
          { name: "Jenkins", emphasis: "secondary" },
        ],
      },
      {
        title: "Testing",
        items: [{ name: "Playwright", emphasis: "secondary" }],
      },
      {
        title: "Other",
        items: [
          { name: "Supabase", emphasis: "primary" },
          { name: "Vercel", emphasis: "primary" },
        ],
      },
    ],
  },
  projects: {
    kicker: "Work",
    heading: "Selected work.",
    intro:
      "Each case shows a different capability: product ownership, DevOps and infrastructure, or professional client work.",
    repoLabel: "View repository",
    tradeoffsLabel: "Trade-offs",
    items: [
      {
        id: "ucrm",
        tier: 1,
        name: "uCRM",
        company: "net2phone",
        kind: "Primary professional case study",
        summary:
          "CRM platform for customer interactions and business workflows, with a full stack architecture, integrations, plugins, and cloud infrastructure.",
        role: null,
        responsibilities: [
          "Full stack architecture",
          "Product evolution",
          "uContact integrations",
          "Plugin platform",
          "Cloud infrastructure",
          "Deployment",
          "Operations",
        ],
        technologies: [],
        image: null,
        imageAlt: null,
        href: null,
        architectureNotes: [],
        tradeoffs: [],
      },
      {
        id: "voting-app",
        tier: 2,
        name: "Voting App DevOps 2025",
        company: "Universidad ORT Uruguay",
        kind: "Academic / DevOps project",
        summary:
          "Degree capstone: DevOps practices to deploy a voting app across three environments — Dev, Test, and Prod — with infrastructure as code, Kubernetes, and observability.",
        role: "Mandatory academic project for Analista en Tecnologías de la Información. Not professional experience.",
        responsibilities: [],
        technologies: [
          "Terraform",
          "GitHub Actions",
          "Docker",
          "Kubernetes",
          "AWS EKS",
          "AWS ECR",
          "AWS Lambda",
          "CloudWatch",
          "SNS",
          "PostgreSQL",
          "Redis",
        ],
        image: null,
        imageAlt: null,
        href: "https://github.com/EnzoPeli/voting-app-devops-2025",
        architectureNotes: [
          "Microservices: vote, result, worker, seed-data, Redis, and PostgreSQL.",
          "Infrastructure with Terraform. AWS EKS for Kubernetes. Environments split with Terraform Workspaces and namespaces: dev, test, prod.",
          "CI/CD: develop → Dev, test → Test, main → Prod. Pipelines automate static analysis, infrastructure, builds, image publishing, and deploy.",
          "Observability: CloudWatch → Lambda → SNS → Email. Monitors Lambda errors and EKS cluster CPU.",
        ],
        tradeoffs: [
          "NGINX Ingress was dropped because Vote and Result were designed to run at `/`. Independent LoadBalancer services were used instead.",
          "PVC for PostgreSQL was attempted; emptyDir was used in the end, so data is lost when the pod restarts.",
        ],
      },
      {
        id: "vaccichek",
        tier: 3,
        name: "VacciCheck",
        company: "Vipermed",
        kind: "Paid private client project",
        summary:
          "Clinical decision-support app that recommends vaccines from patient characteristics, comorbidities, and risk factors, using a rules-based recommendation engine.",
        role: null,
        responsibilities: [],
        technologies: ["JavaScript", "HTML", "CSS", "Supabase"],
        image: "/projects/vaccichek.png",
        imageAlt: "VacciCheck screen: profession selection and vaccine recommendation flow",
        href: null,
        architectureNotes: [],
        tradeoffs: [],
      },
      {
        id: "abrilar",
        tier: 3,
        name: "Librería Médica Abrilar",
        company: "Vipermed",
        kind: "Paid private client project",
        summary:
          "Private medical content platform built with WordPress and Elementor Pro — dynamic navigation, custom components, embedded resources, and user-interaction analytics.",
        role: null,
        responsibilities: [],
        technologies: [
          "WordPress",
          "Elementor Pro",
          "PHP",
          "JavaScript",
          "ACF",
          "Google Analytics",
          "Google Tag Manager",
        ],
        image: "/projects/abrilar.png",
        imageAlt: "Librería Médica Abrilar login screen",
        href: null,
        architectureNotes: [],
        tradeoffs: [],
      },
      {
        id: "shingrix",
        tier: 3,
        name: "Shingrix — Costa Rica",
        company: "GSK",
        kind: "Paid client project",
        summary:
          "Public education site on shingles and vaccination for Shingrix in Costa Rica. Educational content, epidemiological data visualization, and vaccination guidance, across four pages from approved brand designs.",
        role: "Client project. I was not a GSK employee.",
        responsibilities: [],
        technologies: ["HTML", "CSS", "JavaScript", "Playwright"],
        image: "/projects/shingrix.png",
        imageAlt: "Shingrix Costa Rica public site, education on herpes zoster",
        href: null,
        architectureNotes: [],
        tradeoffs: [],
      },
    ],
  },
  education: {
    kicker: "Education",
    heading: "The degree is done. The capstone is still useful.",
    status: "Completed July 2025",
    program: "Analista en Tecnologías de la Información",
    institution: "Universidad ORT Uruguay — Montevideo",
    thesisLabel: "Capstone",
    thesisName: "Voting App DevOps 2025",
    languagesKicker: "Languages",
    languagesHeading: "How I communicate.",
    languages: [
      { name: "Spanish", level: "Native", note: null },
      {
        name: "English",
        level: "Basic professional usage",
        note: "I use it at work for writing and straightforward communication. Not conversationally fluent.",
      },
    ],
  },
  contact: {
    kicker: "Contact",
    heading: "Let's build something.",
    intro:
      "Open to Senior Engineer and Technical Lead conversations — especially around full stack systems, cloud, and product-minded engineering.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvCta: "Download CV",
  },
};
