import type { Metadata } from "next";
import { ContactChannels } from "@/components/contact/contact-channels";
import { ContactClosing } from "@/components/contact/contact-closing";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactMessage } from "@/components/contact/contact-message";
import { siteConfig } from "@/config/site";

const description =
  "Contacta con NOVA COFFEE. Toda buena conversación comienza con un hola.";

export const metadata: Metadata = {
  title: "Contacto",
  description,
  openGraph: {
    title: `Contacto · ${siteConfig.name}`,
    description,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
};

/** Contact page — project facts live in src/config/contact.ts. */
export default function ContactPage() {
  return (
    <main id="main" className="flex-1">
      <ContactHero />
      <ContactChannels />
      <ContactMessage />
      <ContactClosing />
    </main>
  );
}
