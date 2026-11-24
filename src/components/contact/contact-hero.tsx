import Image from "next/image";
import twoCupsImage from "@/assets/images/contact-two-cups.jpg";
import { Container } from "@/components/ui/container";

/**
 * Contact opening: the headline runs across the page and the portrait hangs
 * off-centre beneath it, with the intro at its foot. On small screens the
 * photo bleeds off the right edge.
 */
export function ContactHero() {
  return (
    <section aria-labelledby="contact-title" className="relative">
      <Container className="grid grid-cols-12 gap-x-6 pb-20 pt-6 lg:gap-x-10 lg:pb-32 lg:pt-8">
        {/* Running head */}
        <div className="eyebrow col-span-12 flex items-center justify-between gap-6 border-b border-espresso/15 pb-4 text-[0.65rem] text-ink-muted animate-fade-up">
          <span>
            <span className="tabular-nums text-espresso">N.º 04</span> — Contacto
          </span>
          <span className="hidden sm:inline">Una mesa, dos tazas</span>
        </div>

        {/* Headline */}
        <h1
          id="contact-title"
          className="col-span-12 pt-12 text-display-lg sm:pt-16 lg:pt-20 lg:text-[clamp(4rem,6.6vw,6.5rem)]"
        >
          <span className="block animate-fade-up [animation-delay:80ms]">
            Toda buena conversación{" "}
          </span>
          <em className="block text-roast animate-fade-up [animation-delay:180ms] [font-variation-settings:'SOFT'_100] sm:pl-[1.1em] lg:pl-[2.2em]">
            comienza con un hola
          </em>
        </h1>

        {/* Photograph */}
        <figure className="col-span-12 -mr-(--gutter) ml-[18%] mt-14 sm:ml-[36%] lg:col-span-5 lg:col-start-3 lg:mx-0 lg:mt-20">
          <div className="grain relative aspect-[4/5] overflow-hidden bg-linen animate-reveal [animation-delay:200ms]">
            <Image
              src={twoCupsImage}
              alt="Dos tazas de café con arte latte, una junto a otra sobre una mesa de madera rodeada de hojas, vistas desde arriba."
              fill
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 90rem) 34rem, (min-width: 64rem) 40vw, (min-width: 40rem) 66vw, 84vw"
              className="object-cover brightness-110 saturate-[.6] sepia-[.5]"
            />
          </div>
          <figcaption className="mr-(--gutter) mt-4 flex items-baseline justify-between gap-6 text-xs text-ink-muted lg:mr-0">
            <span className="eyebrow text-[0.6rem] tabular-nums">Fig. 01</span>
            <span className="font-display text-sm italic">Siempre mejor para dos.</span>
          </figcaption>
        </figure>

        {/* Intro, at the foot of the photograph on desktop */}
        <div className="col-span-12 mt-14 animate-fade-up [animation-delay:400ms] sm:col-span-9 sm:col-start-4 lg:col-span-4 lg:col-start-9 lg:mt-20 lg:self-end lg:pb-9">
          <span aria-hidden="true" className="mb-8 block h-px w-10 bg-terracotta" />
          <p className="max-w-[24rem] font-display text-[1.3rem] leading-snug text-espresso md:text-[1.5rem]">
            Una pregunta, una idea o simplemente las ganas de saludar. Cuéntanos
            lo que tengas en mente; nos gustará leerte.
          </p>
        </div>
      </Container>
    </section>
  );
}
