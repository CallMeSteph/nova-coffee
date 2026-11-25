/**
 * Single source of truth for brand data and site routes.
 * Navigation, metadata and links read from here instead of hardcoding paths.
 */
export const siteConfig = {
  name: "NOVA COFFEE",
  shortName: "Nova",
  description:
    "NOVA COFFEE, proyecto conceptual de una marca ficticia: café, una mesa compartida y una pausa sin prisa.",
  /** Language of the document. */
  locale: "es",
  /** Open Graph locale: language and territory. */
  ogLocale: "es_PE",
} as const;

/** NOVA COFFEE is a fictional brand; the footer says so on every page. */
export const projectNotice = "Proyecto conceptual. Marca ficticia.";

export const projectCredit = "Crafted by CallMeSteph";

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
