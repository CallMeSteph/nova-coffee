import Image from "next/image";
import pauseImage from "@/assets/images/menu-pause.jpg";
import { Container } from "@/components/ui/container";
import { isMenuProvisional, menu } from "@/config/menu";

/**
 * Menu opening: a headline across the full measure, then a wide photograph
 * held to the left against a narrow column with the intro and a table of
 * contents. On small screens the photo bleeds off the left edge.
 */
export function MenuHero() {
  return (
    <section aria-labelledby="menu-title" className="relative">
      <Container className="grid grid-cols-12 gap-x-6 pb-20 pt-6 lg:gap-x-10 lg:pb-28 lg:pt-8">
        {/* Running head */}
        <div className="eyebrow col-span-12 flex items-center justify-between gap-6 border-b border-espresso/15 pb-4 text-[0.65rem] text-ink-muted animate-fade-up">
          <span>
            <span className="tabular-nums text-espresso">N.º 02</span> — Nuestra
            carta
          </span>
          {isMenuProvisional && (
            <span className="hidden items-center gap-3 text-roast sm:flex">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-terracotta"
              />
              Provisional
            </span>
          )}
        </div>

        {/* Headline */}
        <h1
          id="menu-title"
          className="col-span-12 pt-12 text-display-xl sm:pt-16 lg:pt-20"
        >
          <span className="block animate-fade-up [animation-delay:80ms]">
            Una pausa,{" "}
          </span>
          <em className="block text-roast animate-fade-up [animation-delay:180ms] [font-variation-settings:'SOFT'_100] sm:pl-[1.1em] lg:pl-[2.2em]">
            a tu manera
          </em>
        </h1>

        {/* Photograph */}
        <figure className="col-span-12 -ml-(--gutter) mr-[8%] mt-12 sm:mt-16 lg:col-span-8 lg:mx-0 lg:mt-20">
          <div className="grain relative aspect-[4/5] overflow-hidden bg-linen animate-reveal [animation-delay:200ms] sm:aspect-[3/2]">
            <Image
              src={pauseImage}
              alt="Taza de café vista desde arriba sobre un fondo color crema, con una sombra larga de luz natural."
              fill
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 90rem) 55rem, (min-width: 64rem) 62vw, (min-width: 40rem) 92vw, 170vw"
              className="object-cover saturate-[.82] sepia-[.1] contrast-[1.03]"
            />
          </div>
          <figcaption className="ml-(--gutter) mt-4 flex items-baseline justify-between gap-6 text-xs text-ink-muted lg:ml-0">
            <span className="eyebrow text-[0.6rem] tabular-nums">Fig. 01</span>
            <span className="font-display text-sm italic">
              Una taza, un momento.
            </span>
          </figcaption>
        </figure>

        {/* Intro and contents */}
        <div className="col-span-12 mt-14 flex flex-col sm:col-span-9 sm:col-start-4 lg:col-span-4 lg:col-start-9 lg:mt-20 lg:pb-9">
          <p className="max-w-[24rem] font-display text-[1.3rem] leading-snug text-espresso animate-fade-up [animation-delay:300ms] md:text-[1.5rem]">
            Hay quien llega con prisa y quien se queda un rato más. Elige lo que
            te apetezca y tómate el tiempo que necesites.
          </p>

          {isMenuProvisional && (
            <p className="mt-8 max-w-[24rem] border-l border-terracotta pl-5 text-sm leading-relaxed text-ink-muted animate-fade-up [animation-delay:380ms]">
              Carta provisional: los productos son marcadores de posición y se
              sustituirán por la oferta confirmada.
            </p>
          )}

          <nav
            aria-label="Categorías de la carta"
            className="mt-12 animate-fade-up [animation-delay:460ms] lg:mt-auto lg:pt-10"
          >
            <ol className="border-b border-espresso/15">
              {menu.map((category, index) => (
                <li key={category.id} className="border-t border-espresso/15">
                  <a
                    href={`#${category.id}`}
                    className="group flex items-baseline gap-5 py-3.5"
                  >
                    <span
                      aria-hidden="true"
                      className="font-display text-sm italic tabular-nums text-roast"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base underline decoration-transparent decoration-1 underline-offset-[6px] transition-[text-decoration-color] duration-(--duration-base) ease-(--ease-out-soft) group-hover:decoration-terracotta">
                      {category.title}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  );
}
