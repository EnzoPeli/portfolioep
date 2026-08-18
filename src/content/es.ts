import type { Dictionary } from "./types";

export const es: Dictionary = {
  skip: "Saltar al contenido",
  menuOpen: "Menú",
  menuClose: "Cerrar",
  navAria: "Principal",
  langAria: "Idioma",
  hero: {
    kicker: "Technical Lead",
    tagline:
      "Llevo de punta a punta uCRM, el CRM que usan equipos de contact center en LatAm: arquitectura, producto e ingeniería en el mismo ciclo — no solo features sueltas.",
    primaryCta: "Ver proyectos",
    secondaryCta: "Contactarme",
    cvCta: "Descargar CV",
    stats: [
      { index: "01", value: "7+", label: "Años de experiencia" },
      { index: "02", value: "Technical Lead", label: "Rol actual" },
      { index: "03", value: "uCRM", label: "Technical ownership" },
      { index: "04", value: "Cloud + Integrations", label: "Especialización" },
    ],
  },
  about: {
    kicker: "Sobre mí",
    heading: "Ingeniería con mirada de producto.",
    body: [
      "Empecé a programar porque me gustaba resolver problemas. Eso no cambió: lo que más me interesa sigue siendo construir algo nuevo, de punta a punta.",
      "Prefiero el desarrollo full stack: cerca del producto, de la arquitectura y del código que los conecta. Hoy me interesa especialmente crecer en liderazgo, sin alejarme de los sistemas que operamos.",
    ],
  },
  experience: {
    kicker: "Experiencia",
    heading: "De implementar trabajo a ser dueño del sistema.",
    intro:
      "En net2phone desde abril de 2019. Remoto. En abril de 2025 pasé a Technical Lead: el título cambió; el alcance ya venía creciendo.",
    currentRole: "Technical Lead",
    previousRole: "Developer",
    company: "net2phone",
    dates: "Abril 2019 — presente",
    promotion: "Promovido en abril 2025",
    mode: "Remoto",
    summary:
      "Entro como Developer y hoy soy responsable técnico de uCRM. Sigo hands-on: arquitectura, integraciones, cloud y las personas alrededor del código.",
    asDeveloper: {
      heading: "Cómo trabajaba como Developer",
      text: "El trabajo era delivery de punta a punta: leer el tablero, acomodar esfuerzo a fechas, implementar desde requerimientos, testear, documentar y marcar huecos cuando el spec no coincidía con el producto. Si había que aclarar algo con el cliente, lo hacía con el equipo de onboarding — no adivinando.",
    },
    path: [
      {
        stage: "01",
        title: "Developer",
        period: "Desde abril 2019",
        current: false,
        summary:
          "Implementar, testear, documentar y mantener el trabajo honesto frente a requerimientos y fechas.",
      },
      {
        stage: "02",
        title: "Ownership de nivel senior",
        period: "Marzo 2024 — abril 2025",
        current: false,
        summary:
          "Prioridades, plazos, calidad y las conversaciones que aparecen cuando un requerimiento no sostiene.",
      },
      {
        stage: "03",
        title: "Technical Lead",
        period: "Abril 2025 — presente",
        current: true,
        summary: "Personas, arquitectura, producto y stakeholders. Todavía cerca del código.",
      },
    ],
  },
  leadership: {
    kicker: "Liderazgo",
    heading: "Technical Lead, no project manager.",
    intro:
      "Lidero un equipo de dos personas — un developer y un QA — y sigo tomando las decisiones técnicas. El liderazgo acá es dirección de ingeniería, no un cargo separado del código.",
    team: {
      heading: "Equipo",
      text: "2 personas: 1 Developer y 1 QA.",
    },
    chips: ["Personas", "Entrega", "Ingeniería", "Calidad", "Stakeholders"],
  },
  stack: {
    kicker: "Stack",
    heading: "Con lo que construyo de verdad.",
    intro: "Por cómo lo uso, no como una pared de logos. Lo principal pesa más.",
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
    kicker: "Proyectos",
    heading: "Trabajo seleccionado.",
    intro:
      "Cada caso muestra una capacidad distinta: ownership de producto, DevOps e infraestructura, o trabajo profesional para clientes.",
    repoLabel: "Ver repositorio",
    tradeoffsLabel: "Decisiones",
    items: [
      {
        id: "ucrm",
        tier: 1,
        name: "uCRM",
        company: "net2phone",
        kind: "Caso profesional principal",
        summary:
          "Plataforma CRM para gestionar interacciones con clientes y flujos de negocio, con arquitectura full stack, integraciones, plugins e infraestructura cloud.",
        role: null,
        responsibilities: [
          "Arquitectura full stack",
          "Evolución del producto",
          "Integraciones con uContact",
          "Plataforma de plugins",
          "Infraestructura cloud",
          "Despliegue",
          "Operación",
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
        kind: "Proyecto académico / DevOps",
        summary:
          "Proyecto final de carrera: prácticas de DevOps para desplegar una app de votación en tres ambientes — Dev, Test y Prod — con infraestructura como código, Kubernetes y observabilidad.",
        role: "Proyecto académico obligatorio de Analista en Tecnologías de la Información. No es experiencia laboral.",
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
          "Microservicios: vote, result, worker, seed-data, Redis y PostgreSQL.",
          "Infraestructura con Terraform. AWS EKS para Kubernetes. Ambientes separados con Terraform Workspaces y namespaces: dev, test, prod.",
          "CI/CD: develop → Dev, test → Test, main → Prod. Los pipelines automatizan análisis estático, infraestructura, builds, publicación de imágenes y despliegue.",
          "Observabilidad: CloudWatch → Lambda → SNS → Email. Se monitorean errores de Lambda y CPU del cluster EKS.",
        ],
        tradeoffs: [
          "NGINX Ingress se descartó porque Vote y Result estaban pensadas para correr en `/`. Se usaron servicios LoadBalancer independientes.",
          "Se intentó PVC para PostgreSQL; al final se usó emptyDir, así que los datos se pierden al reiniciar el pod.",
        ],
      },
      {
        id: "vaccichek",
        tier: 3,
        name: "VacciCheck",
        company: "Vipermed",
        kind: "Proyecto pago para cliente",
        summary:
          "Aplicación de soporte a la decisión clínica que recomienda vacunas según características del paciente, comorbilidades y factores de riesgo, con un motor de recomendaciones basado en reglas.",
        role: null,
        responsibilities: [],
        technologies: ["JavaScript", "HTML", "CSS", "Supabase"],
        image: "/projects/vaccichek.png",
        imageAlt: "Pantalla de VacciCheck: selección de profesión y flujo de recomendación de vacunas",
        href: null,
        architectureNotes: [],
        tradeoffs: [],
      },
      {
        id: "abrilar",
        tier: 3,
        name: "Librería Médica Abrilar",
        company: "Vipermed",
        kind: "Proyecto pago para cliente",
        summary:
          "Plataforma privada de contenido médico desarrollada con WordPress y Elementor Pro, con navegación dinámica, componentes personalizados, recursos embebidos y analítica de interacción de usuarios.",
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
        imageAlt: "Pantalla de acceso de Librería Médica Abrilar",
        href: null,
        architectureNotes: [],
        tradeoffs: [],
      },
      {
        id: "shingrix",
        tier: 3,
        name: "Shingrix — Costa Rica",
        company: "GSK",
        kind: "Proyecto pago para cliente",
        summary:
          "Sitio público de educación y concientización sobre herpes zóster y vacunación para Shingrix en Costa Rica. Contenido educativo, visualización de datos epidemiológicos y orientación sobre vacunación, en cuatro páginas a partir de diseños de marca aprobados.",
        role: "Trabajo para cliente. No fui empleado de GSK.",
        responsibilities: [],
        technologies: ["HTML", "CSS", "JavaScript", "Playwright"],
        image: "/projects/shingrix.png",
        imageAlt: "Sitio público de Shingrix Costa Rica, educación sobre herpes zóster",
        href: null,
        architectureNotes: [],
        tradeoffs: [],
      },
    ],
  },
  education: {
    kicker: "Educación",
    heading: "Formación cerrada. El proyecto final sigue abierto.",
    status: "Finalizada en julio de 2025",
    program: "Analista en Tecnologías de la Información",
    institution: "Universidad ORT Uruguay — Montevideo",
    thesisLabel: "Proyecto final",
    thesisName: "Voting App DevOps 2025",
    languagesKicker: "Idiomas",
    languagesHeading: "Cómo me comunico.",
    languages: [
      { name: "Español", level: "Nativo", note: null },
      {
        name: "Inglés",
        level: "Uso profesional básico",
        note: "Lo uso en el trabajo para escritura y comunicación sencilla. No tengo fluidez conversacional avanzada.",
      },
    ],
  },
  contact: {
    kicker: "Contacto",
    heading: "Construyamos algo.",
    intro:
      "Abierto a conversaciones de Senior Engineer y Technical Lead — sobre todo alrededor de sistemas full stack, cloud e ingeniería con mirada de producto.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvCta: "Descargar CV",
  },
};
