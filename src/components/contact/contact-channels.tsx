import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SoftText } from "@/components/ui/soft-text";
import { projectFacts } from "@/config/contact";

/** What the project is and who made it, set like the colophon of a magazine on linen. */
export function ContactChannels() {
  return (
    <section aria-labelledby="channels-title" className="bg-linen py-section">
      <Container className="grid grid-cols-12 sm:gap-x-[24px] lg:gap-x-[40px]">
        <Reveal className="col-span-12 lg:col-span-6">
          <p className="eyebrow flex items-center gap-4 text-roast">
            <span aria-hidden="true" className="h-px w-10 bg-terracotta" />
            Información
          </p>
          <h2 id="channels-title" className="mt-8 text-display-lg wrap-break-word lg:mt-10">
            Sobre este{" "}
            <em className="block text-roast [font-variation-settings:'SOFT'_100] sm:pl-[1.1em]">
              <SoftText>pro&shy;yec&shy;to.</SoftText>
            </em>
          </h2>
        </Reveal>

        <dl className="col-span-12 mt-16 border-b border-espresso/15 sm:col-span-10 sm:col-start-3 lg:col-span-6 lg:col-start-7 lg:mt-2">
          {projectFacts.map((fact, index) => (
            <Reveal
              key={fact.label}
              delay={index * 60}
              className="grid gap-x-8 gap-y-3 border-t border-espresso/15 py-6 sm:grid-cols-[min(11rem,40%)_minmax(0,1fr)] sm:items-baseline"
            >
              <dt className="eyebrow text-roast">{fact.label}</dt>
              <dd className="font-display text-xl [overflow-wrap:anywhere]">
                {fact.text}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
