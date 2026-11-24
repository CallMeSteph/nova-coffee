/**
 * Single source of truth for the menu (/carta).
 *
 * PROVISIONAL CONTENT: there is no confirmed menu yet. Replace the
 * `placeholderItems(...)` calls below with real products. Entries flagged
 * `provisional` are labelled as such on the page; once none are left, the
 * page-level notice disappears by itself.
 */
export type MenuItem = {
  name: string;
  description: string;
  /** Formatted for display. Leave out until the price is confirmed. */
  price?: string;
  provisional?: boolean;
};

export type MenuCategory = {
  /** Anchor on the page, e.g. /carta#cafe-caliente */
  id: string;
  title: string;
  description: string;
  items: MenuItem[];
};

function placeholderItems(count: number): MenuItem[] {
  return Array.from({ length: count }, (_, index) => ({
    name: `Producto ${index + 1}`,
    description: "Nombre y descripción por confirmar.",
    provisional: true,
  }));
}

export const menu: MenuCategory[] = [
  {
    id: "cafe-caliente",
    title: "Café caliente",
    description: "Para empezar despacio, o para volver a empezar.",
    items: placeholderItems(3),
  },
  {
    id: "cafe-frio",
    title: "Café frío",
    description: "La misma pausa, a otra temperatura.",
    items: placeholderItems(3),
  },
  {
    id: "otras-bebidas",
    title: "Otras bebidas",
    description: "Porque no todas las pausas piden café.",
    items: placeholderItems(3),
  },
  {
    id: "acompanamientos",
    // Soft hyphen: only breaks, with a hyphen, when the word does not fit.
    title: "Acompaña\u00ADmientos",
    description: "Algo para la mesa, mientras dura la conversación.",
    items: placeholderItems(3),
  },
];

export const isMenuProvisional = menu.some((category) =>
  category.items.some((item) => item.provisional),
);
