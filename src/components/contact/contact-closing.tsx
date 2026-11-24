import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SoftText } from "@/components/ui/soft-text";
import { primaryCta } from "@/config/site";

/** Contact closing: the last line of the site on espresso. */
export function ContactClosing() {
  return (
    <section aria-label="Cierre" className="bg-espresso text-cream">
      <Container className="grid grid-cols-12 sm:gap-x-[24px] py-section lg:gap-x-[40px]">
        <Reveal className="col-span-12">
          <span aria-hidden="true" className="block h-px w-10 bg-terracotta" />
          <p className="mt-10 font-display text-display-lg wrap-break-word lg:mt-14">
            <SoftText>Siem&shy;pre hay espa&shy;cio</SoftText>{" "}
            <em className="block text-crema [font-variation-settings:'SOFT'_100] sm:pl-[1.1em] lg:pl-[2.2em]">
              <SoftText>para una buena con&shy;ver&shy;sa&shy;ción.</SoftText>
            </em>
          </p>
        </Reveal>
        <Reveal
          delay={150}
          className="col-span-12 mt-14 sm:col-span-9 sm:col-start-4 lg:col-span-4 lg:col-start-9 lg:mt-20"
        >
          <ButtonLink
            href={primaryCta.href}
            className="bg-cream text-espresso hover:bg-crema"
          >
            {primaryCta.label}
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
