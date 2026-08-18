import { en } from "./en";
import { es } from "./es";
import type { Locale } from "./types";

export const dictionaries = {
  es,
  en,
} as const;

export const navHrefs = [
  { id: "home", href: "#top" },
  { id: "about", href: "#about" },
  { id: "experience", href: "#experience" },
  { id: "work", href: "#work" },
  { id: "stack", href: "#stack" },
  { id: "contact", href: "#contact" },
] as const;

export function getNav(locale: Locale) {
  const labels = {
    es: ["Inicio", "Sobre mí", "Experiencia", "Proyectos", "Stack", "Contacto"],
    en: ["Home", "About", "Experience", "Work", "Stack", "Contact"],
  }[locale];

  return navHrefs.map((item, index) => ({
    ...item,
    label: labels[index],
  }));
}

export type { Locale } from "./types";
