import Image from "next/image";
import handsImage from "@/assets/images/about-hands.jpg";
import { Container } from "@/components/ui/container";
import { SoftText } from "@/components/ui/soft-text";

/**
 * About opening: the home cover turned around, with the portrait on the left
 * and the headline on the right. On small screens the headline leads and the
 * photo bleeds off the right edge.
 */
export function AboutHero() {
  return (
    <section aria-labelledby="about-title" className="relative">
      <Container className="grid grid-cols-12 sm:gap-x-[24px] pb-20 pt-6 lg:grid-rows-[auto_auto_1fr] lg:gap-x-[40px] lg:pb-32 lg:pt-8">
        {/* Running head */}
        <div className="eyebrow col-span-12 flex items-center justify-between gap-6 border-b border-espresso/15 pb-4 text-[0.6875rem] text-ink-muted animate-fade-up">
          <span>
            <span className="tabular-nums text-espresso">N.º 03</span> — Nosotros
          </span>
          <span className="hidden sm:inline">Origen · Tiempo · Experiencia</span>
        </div>

        {/* Headline */}
        <h1
          id="about-title"
          className="col-span-12 pt-12 text-display-lg wrap-break-word sm:pt-16 sm:text-display-xl lg:col-span-7 lg:col-start-6 lg:row-start-2 lg:pt-14 lg:text-[clamp(4rem,6.6vw,6.5rem)]"
        >
          <span className="block animate-fade-up [animation-delay:80ms]">
            Más que café,{" "}
          </span>
          <em className="block text-roast [font-variation-settings:'SOFT'_100] sm:pl-[0.6em]">
            <span className="block animate-fade-up [animation-delay:180ms]">
              <SoftText>una for&shy;ma de</SoftText>{" "}
            </span>
            <span className="block animate-fade-up [animation-delay:280ms]">
              <SoftText>hacer una pau&shy;sa</SoftText>
            </span>
          </em>
        </h1>

        {/* Photograph */}
        <figure className="col-span-12 -mr-(--gutter) ml-[12%] mt-14 sm:ml-[28%] lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-2 lg:mx-0 lg:mt-14">
          <div className="grain relative aspect-[4/5] overflow-hidden bg-linen animate-reveal [animation-delay:200ms]">
            <Image
              src={handsImage}
              alt="Dos manos sostienen una taza de café con arte latte, vistas de cerca."
              fill
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 90rem) 62rem, (min-width: 64rem) 70vw, (min-width: 40rem) 135vw, 165vw"
              className="object-cover object-[58%_50%] saturate-[.9]"
            />
          </div>
          <figcaption className="mr-(--gutter) mt-4 flex items-baseline justify-between gap-6 text-xs text-ink-muted lg:mr-0">
            <span className="eyebrow text-[0.6875rem] tabular-nums">Fig. 01</span>
            <span className="font-display text-sm italic">Un momento entre las manos.</span>
          </figcaption>
        </figure>

        {/* Intro, at the foot of the photograph on desktop */}
        <div className="col-span-12 mt-14 animate-fade-up [animation-delay:400ms] sm:col-span-9 sm:col-start-4 lg:col-span-5 lg:col-start-8 lg:row-start-3 lg:mt-16 lg:self-end lg:pb-9">
          <span aria-hidden="true" className="mb-8 block h-px w-10 bg-terracotta" />
          <p className="max-w-[26rem] font-display text-[1.3rem] leading-snug text-espresso md:text-[1.5rem]">
            Hay días que pasan sin que nos demos cuenta. Una taza de café es una
            buena razón para detenerlos un momento.
          </p>
        </div>
      </Container>
    </section>
  );
}
