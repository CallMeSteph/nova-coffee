import type { Metadata } from "next";
import { ContactChannels } from "@/components/contact/contact-channels";
import { ContactClosing } from "@/components/contact/contact-closing";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactMessage } from "@/components/contact/contact-message";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Información sobre NOVA COFFEE, proyecto conceptual de una cafetería ficticia, y un formulario de demostración que no envía ni almacena mensajes.",
  alternates: { canonical: "/contacto" },
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
