import type { Metadata, Viewport } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { site } from "@/content/shared";
import { geistMono, inter } from "@/lib/fonts";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#070a09",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: site.seo.title,
  description: site.seo.description.en,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "Technical Lead",
    "Engineering Lead",
    "Full Stack Engineering",
    "Cloud",
    "SaaS",
    "Enzo Pelizzari",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_UY"],
    title: site.seo.title,
    description: site.seo.description.en,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description.en,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas font-sans text-body">
        <noscript>
          <style>{`.reveal,.reveal *{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
