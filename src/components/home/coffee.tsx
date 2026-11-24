import Image from "next/image";
import pourOverImage from "@/assets/images/coffee-pour-over.jpg";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SoftText } from "@/components/ui/soft-text";
import { primaryCta } from "@/config/site";
import { cn } from "@/lib/utils";

/* Each note steps further right, so the three read as one descending phrase. */
const senses = [
  {
    title: "Aro\u00ADma",
    text: "Lo primero que llega. Una invitación antes del primer sorbo.",
    indent: "",
  },
  {
    title: "Cuer\u00ADpo",
    text: "El peso del café en la boca: ligero, sedoso o profundo.",
    indent: "pl-[12%] md:pl-[9%] lg:pl-[12%]",
  },
  {
    title: "Sa\u00ADbor",
    text: "Lo que permanece cuando la taza ya está vacía.",
    indent: "pl-[24%] md:pl-[18%] lg:pl-[24%]",
  },
] as const;

/**
 * Coffee — the magazine's third spread. A landscape photograph takes the
 * widest measure of the page so far (full bleed on small screens), and the
 * sensory notes step diagonally beneath it, tied to their text by leader
 * lines like the ones on a printed menu.
 */
export function Coffee() {
  return (
    <section aria-labelledby="coffee-title" className="relative">
      <Container className="grid grid-cols-12 sm:gap-x-[24px] pb-section lg:gap-x-[40px]">
        {/* Running head */}
        <div className="eyebrow col-span-12 flex items-center justify-between gap-6 border-b border-espresso/15 pb-4 text-[0.6875rem] text-ink-muted">
          <span>
            <span className="tabular-nums text-espresso">N.º 03</span> — El café
          </span>
          <span className="hidden sm:inline">Aroma · Cuerpo · Sabor</span>
        </div>

        {/* Headline */}
        <Reveal className="col-span-12 pt-16 sm:pt-20 lg:pt-28">
          <h2 id="coffee-title" className="text-display-lg wrap-break-word">
            <SoftText>Todo co&shy;mien&shy;za</SoftText>{" "}
            <em className="block text-roast [font-variation-settings:'SOFT'_100] sm:pl-[1.1em] lg:pl-[2.2em]">
              con un buen café.
            </em>
          </h2>
        </Reveal>

        {/* Intro: set beside the foot of the photograph on desktop */}
        <Reveal
          delay={100}
          className="col-span-12 mt-10 sm:col-span-9 sm:col-start-4 lg:col-span-4 lg:col-start-1 lg:row-start-3 lg:mt-20 lg:self-end lg:pb-9"
        >
          <span
            aria-hidden="true"
            className="mb-8 hidden h-px w-10 bg-terracotta lg:block"
          />
          <p className="max-w-[24rem] font-display text-[1.3rem] leading-snug text-espresso md:text-[1.5rem]">
            Antes de la conversación y de la pausa, hay un instante en que el
            agua encuentra el café. Ahí empieza todo.
          </p>
        </Reveal>

        {/* Photograph */}
        <figure className="col-span-12 -mx-(--gutter) mt-16 lg:col-span-8 lg:col-start-5 lg:row-start-3 lg:mx-0 lg:mt-20">
          <Reveal delay={150}>
            <div className="grain relative aspect-[4/5] overflow-hidden bg-linen sm:aspect-[3/2]">
              <Image
                src={pourOverImage}
                alt="Agua vertida desde una tetera de cobre sobre un filtro de café, con vapor y una jarra de vidrio debajo."
                fill
                placeholder="blur"
                sizes="(min-width: 90rem) 55rem, (min-width: 64rem) 62vw, (min-width: 40rem) 100vw, 190vw"
                className="object-cover object-[62%_50%] saturate-[.9] sepia-[.28] contrast-[1.03]"
              />
            </div>
          </Reveal>
          <figcaption className="mx-(--gutter) mt-4 flex items-baseline justify-between gap-6 text-xs text-ink-muted lg:mx-0">
            <span className="eyebrow text-[0.6875rem] tabular-nums">Fig. 03</span>
            <span className="font-display text-sm italic">
              Agua, café y paciencia.
            </span>
          </figcaption>
        </figure>

        {/* Sensory notes */}
        <ul className="col-span-12 mt-16 space-y-12 sm:mt-24 md:space-y-10 lg:mt-32 lg:space-y-12">
          {senses.map((sense, index) => (
            <li key={sense.title} className={cn(sense.indent)}>
              <Reveal
                delay={index * 120}
                className="md:flex md:flex-wrap md:items-baseline md:gap-x-[24px] lg:gap-x-[32px]"
              >
                <h3 className="text-display-lg wrap-break-word italic text-roast [font-variation-settings:'SOFT'_100]">
                  <SoftText>{sense.title}</SoftText>
                </h3>
                <span
                  aria-hidden="true"
                  className="hidden h-px flex-1 bg-espresso/15 md:block"
                />
                <p className="mt-4 max-w-[17rem] text-base leading-relaxed text-ink-muted md:mt-0 md:w-[min(17rem,36vw)] md:max-w-none md:shrink-0">
                  {sense.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Shares the notes' left edge from md up */}
        <Reveal className="col-span-12 mt-14 md:ml-auto md:w-fit md:min-w-[min(17rem,36vw)] lg:mt-20">
          <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
