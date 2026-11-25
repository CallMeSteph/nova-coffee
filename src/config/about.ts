import type { StaticImageData } from "next/image";
import gatheringImage from "@/assets/images/about-gathering.jpg";
import shadowImage from "@/assets/images/about-shadow.jpg";
import tableImage from "@/assets/images/about-table.jpg";

/**
 * Copy for /nosotros. Deliberately about how coffee is enjoyed: no claims on
 * sourcing, roasting, staff, premises or history, as the brand is fictional.
 */
export type Concept = {
  title: string;
  text: string;
};

export const concepts: Concept[] = [
  {
    title: "El origen",
    text: "Toda taza empieza en otro lugar. Recordarlo cambia la manera de probarla.",
  },
  {
    title: "El tiempo",
    text: "El café no se apura. Pide unos minutos y, a cambio, devuelve un poco de calma.",
  },
  {
    title: "La expe\u00ADrien\u00ADcia",
    text: "El sabor es solo una parte. También cuentan la luz, la compañía y el silencio.",
  },
];

export type Moment = {
  title: string;
  text: string;
  image: StaticImageData;
  alt: string;
  figure: string;
  caption: string;
};

type MomentId = "pause" | "detail" | "gathering";

export const moments: Record<MomentId, Moment> = {
  pause: {
    title: "Una pausa en medio del día",
    text: "Dejar el teléfono boca abajo. Mirar por la ventana. No hacer nada más durante lo que dura una taza.",
    image: tableImage,
    alt: "Taza de café con arte latte sobre una mesa de madera, junto a un frasco con flores blancas.",
    figure: "Fig. 02",
    caption: "Un hueco en la tarde.",
  },
  detail: {
    title: "El placer de lo pequeño",
    text: "Una sombra sobre la mesa, el primer sorbo, el calor en las manos.",
    image: shadowImage,
    alt: "Vaso de vidrio con café con leche y hielo sobre un posavasos de corcho, entre sombras de hojas.",
    figure: "Fig. 03",
    caption: "La luz a través del vidrio.",
  },
  gathering: {
    title: "Un punto de encuen\u00ADtro",
    text: "A veces el café es solo la excusa. Lo importante ocurre alrededor.",
    image: gatheringImage,
    alt: "Tres manos brindan con una taza de café con arte latte y dos vasos de café con hielo, sobre una mesa de madera.",
    figure: "Fig. 04",
    caption: "Tres manos, un brindis.",
  },
};
