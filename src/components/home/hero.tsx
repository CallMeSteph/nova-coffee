import Image from "next/image";
import heroImage from "@/assets/images/hero-cup.jpg";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SoftText } from "@/components/ui/soft-text";
import { primaryCta } from "@/config/site";

/**
 * Home hero, composed like a magazine cover: a running head with issue
 * number, a large serif headline on the left seven columns and a captioned
 * portrait photograph on the right five. On small screens the photo bleeds
 * off the right edge to keep the composition asymmetric.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative">
      <Container className="grid grid-cols-12 sm:gap-x-[24px] pb-20 pt-6 lg:gap-x-[40px] lg:pb-28 lg:pt-8">
        {/* Running head */}
        <div className="eyebrow col-span-12 flex items-center justify-between gap-6 border-b border-espresso/15 pb-4 text-[0.6875rem] text-ink-muted animate-fade-up">
          <span>
            <span className="tabular-nums text-espresso">N.º 01</span>
            <span className="hidden sm:inline"> — La portada</span>
          </span>
          <span className="hidden md:inline">Café · Mesa · Conversación</span>
          <span>Una pausa sin prisa</span>
        </div>

        {/* Copy */}
        <div className="col-span-12 flex flex-col pt-12 sm:pt-16 lg:col-span-7 lg:pb-2 lg:pt-12">
          <p className="eyebrow flex items-center gap-4 text-roast animate-fade-up [animation-delay:80ms]">
            <span aria-hidden="true" className="h-px w-10 bg-terracotta" />
            El placer de la pausa
          </p>

          <h1 id="hero-title" className="mt-8 text-display-xl wrap-break-word lg:mt-10">
            <span className="block animate-fade-up [animation-delay:160ms]">
              <SoftText>Cada ta&shy;za,</SoftText>{" "}
            </span>
            <em className="block pl-[min(0.6em,9.75vw)] text-roast animate-fade-up [animation-delay:260ms] [font-variation-settings:'SOFT'_100] lg:pl-[1.1em]">
              <SoftText>un ri&shy;tual.</SoftText>
            </em>
          </h1>

          <div className="mt-10 grid gap-10 sm:mt-14 lg:mt-auto lg:pt-10">
            <p className="max-w-[27rem] text-base leading-relaxed text-ink-muted animate-fade-up [animation-delay:380ms] md:text-lg md:leading-relaxed">
              Un aroma que llena la mesa, un sorbo sin prisa y una conversación
              que se alarga. En NOVA COFFEE, cada taza es una invitación a
              quedarse un rato más.
            </p>

            <div className="flex flex-wrap items-center gap-x-9 gap-y-2 animate-fade-up [animation-delay:480ms]">
              <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
              <ButtonLink href="/nosotros" variant="text">
                Conocer nuestra filosofía
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Photograph */}
        <figure className="relative col-span-12 -mr-(--gutter) ml-[12%] mt-16 sm:ml-[28%] lg:col-span-5 lg:mx-0 lg:mt-0 lg:pt-10">
          <p
            aria-hidden="true"
            className="eyebrow absolute -left-[36px] top-10 hidden text-[0.6875rem] text-ink-muted [writing-mode:vertical-rl] rotate-180 xl:block"
          >
            Un sorbo lento · Una mesa compartida
          </p>

          {/* Portrait on small screens; on desktop the height follows the
              viewport so headline, photo and CTAs share the first screen. */}
          <div className="grain relative aspect-[4/5] overflow-hidden bg-linen animate-reveal [animation-delay:200ms] lg:aspect-auto lg:h-[clamp(28rem,calc(100svh-var(--header-height)-11rem),46rem)]">
            <Image
              src={heroImage}
              alt="Taza de cerámica moteada con espresso y crema dorada, sobre una mesa de madera oscura con luz natural."
              fill
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 64rem) 69rem, (min-width: 40rem) 135vw, 165vw"
              className="object-cover object-[54%_50%] saturate-[.9]"
            />
          </div>

          <figcaption className="mr-(--gutter) mt-4 flex items-baseline justify-between gap-6 text-xs text-ink-muted lg:mr-0">
            <span className="eyebrow text-[0.6875rem] tabular-nums">Fig. 01</span>
            <span className="font-display text-sm italic">
              Café de la mañana, luz natural.
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
