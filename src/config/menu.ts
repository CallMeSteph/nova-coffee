/**
 * Single source of truth for the menu (/carta).
 *
 * Products and prices are fictional: they belong to a concept project, and
 * the page says so with `menuNotice`.
 */
export type MenuItem = {
  name: string;
  description: string;
  /** Formatted for display, in soles. */
  price: string;
};

export type MenuCategory = {
  /** Anchor on the page, e.g. /carta#cafes-clasicos */
  id: string;
  title: string;
  description: string;
  items: MenuItem[];
};

export const menuNotice =
  "Los productos y precios son ficticios y forman parte de un proyecto conceptual.";

/* Prices use a no-break space (\u00A0) so "S/" never parts from its amount. */
export const menu: MenuCategory[] = [
  {
    id: "cafes-clasicos",
    title: "Cafés clásicos",
    description: "Para empezar despacio, o para volver a empezar.",
    items: [
      {
        name: "Espresso",
        description: "Corto, intenso y directo. Un instante que se queda.",
        price: "S/\u00A07.00",
      },
      {
        name: "Americano",
        description: "Largo y sereno, para acompañar la mañana.",
        price: "S/\u00A09.00",
      },
      {
        name: "Cappuccino",
        description: "Espresso, leche y una espuma suave hasta el último sorbo.",
        price: "S/\u00A012.00",
      },
    ],
  },
  {
    id: "cafes-frios",
    title: "Cafés fríos",
    description: "La misma pausa, a otra temperatura.",
    items: [
      {
        name: "Iced Latte",
        description: "Café y leche fría sobre hielo, en un equilibrio ligero.",
        price: "S/\u00A014.00",
      },
      {
        name: "Cold Brew",
        description: "Café frío de sabor redondo, para beber sin prisa.",
        price: "S/\u00A013.00",
      },
      {
        name: "Mocha Frío",
        description: "Café, chocolate y leche con hielo: fresco y goloso.",
        price: "S/\u00A015.00",
      },
    ],
  },
  {
    id: "panaderia",
    title: "Panadería",
    description: "Algo para la mesa, mientras dura la conversación.",
    items: [
      {
        name: "Croissant de Mantequilla",
        description: "Capas doradas y crujientes, con un interior tierno.",
        price: "S/\u00A09.00",
      },
      {
        name: "Roll de Canela",
        description: "Una espiral suave y aromática, dulce en su punto.",
        price: "S/\u00A011.00",
      },
      {
        name: "Pain au Chocolat",
        description: "Hojaldre ligero que guarda un corazón de chocolate.",
        price: "S/\u00A010.00",
      },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    description: "Un final dulce, o una buena excusa para quedarse.",
    items: [
      {
        name: "Brownie de Chocolate",
        description: "Denso, húmedo e intensamente chocolatoso.",
        price: "S/\u00A012.00",
      },
      {
        name: "Cheesecake Clásico",
        description: "Cremoso y delicado, sobre una base de galleta.",
        price: "S/\u00A014.00",
      },
      {
        name: "Tarta de Zanahoria",
        description: "Esponjosa y especiada, para compartir o no.",
        price: "S/\u00A013.00",
      },
    ],
  },
];
