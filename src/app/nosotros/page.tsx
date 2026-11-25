import type { Metadata } from "next";
import { AboutClosing } from "@/components/about/about-closing";
import { AboutExperience } from "@/components/about/about-experience";
import { AboutHero } from "@/components/about/about-hero";
import { AboutPhilosophy } from "@/components/about/about-philosophy";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "La idea detrás de NOVA COFFEE, una cafetería ficticia: el origen, el tiempo y la experiencia de hacer una pausa. Proyecto conceptual.",
};

/** About page — copy lives in src/config/about.ts. */
export default function AboutPage() {
  return (
    <main id="main" className="flex-1">
      <AboutHero />
      <AboutPhilosophy />
      <AboutExperience />
      <AboutClosing />
    </main>
  );
}
