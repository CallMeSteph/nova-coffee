/**
 * Single source of truth for brand data and site routes.
 * Only Home is built in phase 1; the other routes are reserved so navigation,
 * metadata and links can be wired against them without hardcoding paths.
 */
export const siteConfig = {
  name: "NOVA COFFEE",
  shortName: "Nova",
  description:
    "Café de especialidad tostado con cuidado. Espresso, filtrados y una pausa bien hecha.",
  locale: "es",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Carta", href: "/carta" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export const primaryCta: NavItem = {
  label: "Explorar la carta",
  href: "/carta",
};
