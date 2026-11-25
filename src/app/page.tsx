import type { Metadata } from "next";
import { Coffee } from "@/components/home/coffee";
import { Hero } from "@/components/home/hero";
import { Philosophy } from "@/components/home/philosophy";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/** Home — sections are composed here one by one (src/components/home/*). */
export default function HomePage() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <Philosophy />
      <Coffee />
    </main>
  );
}
