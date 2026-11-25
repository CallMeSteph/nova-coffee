import type { Metadata } from "next";
import { MenuClosing } from "@/components/menu/menu-closing";
import { MenuHero } from "@/components/menu/menu-hero";
import { MenuSection } from "@/components/menu/menu-section";
import { menu } from "@/config/menu";

export const metadata: Metadata = {
  title: "Carta",
  description:
    "La carta de NOVA COFFEE: cafés clásicos, cafés fríos, panadería y postres. Productos y precios ficticios de un proyecto conceptual.",
  alternates: { canonical: "/carta" },
};

/** Menu page — content lives in src/config/menu.ts. */
export default function MenuPage() {
  return (
    <main id="main" className="flex-1">
      <MenuHero />
      {menu.map((category, index) => (
        <MenuSection
          key={category.id}
          category={category}
          index={index}
          total={menu.length}
        />
      ))}
      <MenuClosing />
    </main>
  );
}
