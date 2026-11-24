import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SoftText } from "@/components/ui/soft-text";

/**
 * Menu closing: one sentence on espresso, like the back cover.
 * No contact link yet: /contacto has no page.
 */
export function MenuClosing() {
  return (
    <section aria-label="Cierre de la carta" className="bg-espresso text-cream">
      <Container className="py-section">
        <Reveal>
          <span aria-hidden="true" className="block h-px w-10 bg-terracotta" />
          <p className="mt-10 font-display text-display-lg wrap-break-word lg:mt-14">
            <SoftText>La taza está servi&shy;da.</SoftText>{" "}
            <em className="block text-crema [font-variation-settings:'SOFT'_100] sm:pl-[1.1em] lg:pl-[2.2em]">
              <SoftText>El tiem&shy;po lo pones tú.</SoftText>
            </em>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
