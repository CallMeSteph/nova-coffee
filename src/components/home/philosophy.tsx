import Image from "next/image";
import portafiltersImage from "@/assets/images/philosophy-portafilters.jpg";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SoftText } from "@/components/ui/soft-text";

const pillars = [
  {
    number: "01",
    title: "Origen",
    keyword: "Carácter",
    text: "Todo café evoca un lugar y un carácter propios. Descubrirlos es parte del placer.",
  },
  {
    number: "02",
    title: "Tueste",
    keyword: "Equilibrio",
    text: "El equilibrio entre aroma, cuerpo y sabor se construye mucho antes de que el café llegue a la taza.",
  },
  {
    number: "03",
    title: "Prepa\u00ADra\u00ADción",
    keyword: "Método",
    text: "Cada método revela una manera distinta de entender el café, y también de disfrutarlo.",
  },
] as const;

/**
 * Philosophy — the magazine's second spread. Opens with the same running
 * head as the hero, sets a headline against an offset intro, then pairs a
 * smaller supporting photograph with the three pillars as a numbered index.
 * On small screens the photo bleeds off the left edge, mirroring the hero.
 */
export function Philosophy() {
  return (
    <section aria-labelledby="philosophy-title" className="relative">
      <Container className="grid grid-cols-12 sm:gap-x-[24px] pb-section lg:gap-x-[40px]">
        {/* Running head */}
        <div className="eyebrow col-span-12 flex items-center justify-between gap-6 border-b border-espresso/15 pb-4 text-[0.6875rem] text-ink-muted">
          <span>
            <span className="text-espresso">Filosofía</span>
          </span>
          <span className="hidden sm:inline">Origen · Tueste · Preparación</span>
        </div>

        {/* Headline */}
        <div className="col-span-12 pt-16 sm:pt-20 lg:col-span-7 lg:pt-28">
          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-roast">
              <span aria-hidden="true" className="h-px w-10 bg-terracotta" />
              Nuestra filosofía
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 id="philosophy-title" className="mt-8 text-display-lg wrap-break-word lg:mt-10">
              <SoftText>El café me&shy;re&shy;ce</SoftText>{" "}
              <em className="block pl-[min(1.1em,13.75vw)] text-roast [font-variation-settings:'SOFT'_100]">
                <SoftText>su tiem&shy;po.</SoftText>
              </em>
            </h2>
          </Reveal>
        </div>

        {/* Intro, offset to the right and aligned to the headline's baseline */}
        <Reveal
          delay={200}
          className="col-span-12 mt-10 sm:col-span-9 sm:col-start-4 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:self-end lg:pb-2"
        >
          <p className="max-w-[24rem] font-display text-[1.3rem] leading-snug text-espresso md:text-[1.5rem]">
            No se trata solamente de tomar café. Se trata de detenerse,
            apreciarlo y disfrutar todo lo que lo hace especial.
          </p>
        </Reveal>

        {/* Supporting photograph */}
        <figure className="col-span-12 -ml-(--gutter) mr-[18%] mt-16 sm:mr-[42%] lg:col-span-4 lg:mx-0 lg:mt-32">
          <Reveal>
            <div className="grain relative aspect-[4/5] overflow-hidden bg-linen">
              <Image
                src={portafiltersImage}
                alt="Dos portafiltros con mango de madera sobre una mesa oscura: uno con granos de café tostado y otro con café molido."
                fill
                placeholder="blur"
                sizes="(min-width: 64rem) 57vw, (min-width: 40rem) 109vw, 154vw"
                className="object-cover object-[20%_50%] saturate-[.9]"
              />
            </div>
          </Reveal>
          <figcaption className="ml-(--gutter) mt-4 flex items-baseline justify-between gap-6 text-xs text-ink-muted lg:ml-0">
            <span className="eyebrow text-[0.6875rem] tabular-nums">Fig. 02</span>
            <span className="font-display text-sm italic">El grano, antes y después.</span>
          </figcaption>
        </figure>

        {/* Pillars */}
        <ol className="col-span-12 mt-16 border-b border-espresso/15 lg:col-span-7 lg:col-start-6 lg:mt-32">
          {pillars.map((pillar, index) => (
            <li key={pillar.number} className="border-t border-espresso/15">
              <Reveal
                delay={index * 120}
                className="grid grid-cols-[44px_minmax(0,1fr)] gap-x-[16px] py-8 sm:grid-cols-[64px_minmax(0,1fr)_minmax(0,1.15fr)] sm:gap-x-[32px] lg:grid-cols-[64px_minmax(0,1fr)] xl:grid-cols-[64px_minmax(0,1fr)_minmax(0,1.15fr)] sm:py-10 lg:py-12"
              >
                <span
                  aria-hidden="true"
                  className="pt-2 font-display text-lg italic tabular-nums text-roast sm:pt-3"
                >
                  {pillar.number}
                </span>
                <div>
                  <h3 className="text-display-md wrap-break-word"><SoftText>{pillar.title}</SoftText></h3>
                  <p className="eyebrow mt-3 text-[0.6875rem] text-ink-muted">
                    {pillar.keyword}
                  </p>
                </div>
                <p className="col-start-2 mt-5 max-w-[26rem] text-base leading-relaxed text-ink-muted sm:col-start-3 sm:mt-0 sm:pt-2 lg:col-start-2 lg:mt-5 lg:pt-0 xl:col-start-3 xl:mt-0 xl:pt-2">
                  {pillar.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
