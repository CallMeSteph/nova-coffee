import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { primaryCta } from "@/config/site";

/** About closing: the last line on espresso, with the way on to the menu. */
export function AboutClosing() {
  return (
    <section aria-label="Cierre" className="bg-espresso text-cream">
      <Container className="grid grid-cols-12 gap-x-6 py-section lg:gap-x-10">
        <Reveal className="col-span-12">
          <span aria-hidden="true" className="block h-px w-10 bg-terracotta" />
          <p className="mt-10 font-display text-display-lg lg:mt-14">
            Hay momentos que merecen{" "}
            <em className="block text-crema [font-variation-settings:'SOFT'_100] sm:pl-[1.1em] lg:pl-[2.2em]">
              quedarse un poco más.
            </em>
          </p>
        </Reveal>
        <Reveal
          delay={150}
          className="col-span-12 mt-14 sm:col-start-4 sm:col-span-9 lg:col-span-4 lg:col-start-9 lg:mt-20"
        >
          <ButtonLink
            href={primaryCta.href}
            className="bg-cream text-espresso hover:bg-crema"
          >
            Descubre nuestra carta
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
