import type { Metadata } from "next";
import { AboutClosing } from "@/components/about/about-closing";
import { AboutExperience } from "@/components/about/about-experience";
import { AboutHero } from "@/components/about/about-hero";
import { AboutPhilosophy } from "@/components/about/about-philosophy";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "NOVA COFFEE: más que café, una forma de hacer una pausa. Así entendemos el origen, el tiempo y la experiencia.",
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
