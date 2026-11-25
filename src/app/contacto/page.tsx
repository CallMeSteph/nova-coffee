import type { Metadata } from "next";
import { ContactChannels } from "@/components/contact/contact-channels";
import { ContactClosing } from "@/components/contact/contact-closing";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactMessage } from "@/components/contact/contact-message";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Conoce NOVA COFFEE, un proyecto conceptual que explora el diseño editorial y la identidad visual de una cafetería ficticia.",
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
