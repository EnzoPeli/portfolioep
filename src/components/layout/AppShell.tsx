"use client";

import { LanguageProvider } from "@/i18n/LanguageProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import type { ReactNode } from "react";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <SkipLink />
        <SiteHeader />
        {children}
        <SiteFooter />
      </SmoothScrollProvider>
    </LanguageProvider>
  );
}
