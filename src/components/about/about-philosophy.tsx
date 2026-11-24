import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SoftText } from "@/components/ui/soft-text";
import { concepts } from "@/config/about";
import { cn } from "@/lib/utils";

/* Each column hangs lower than the previous one; on phones they step right. */
const steps = [
  "",
  "ml-[10%] sm:ml-[20%] lg:ml-0 lg:mt-20",
  "ml-[20%] sm:ml-[40%] lg:ml-0 lg:mt-40",
];

/** Three ideas hung from hairlines at descending heights on a linen band. */
export function AboutPhilosophy() {
  return (
    <section aria-labelledby="about-philosophy-title" className="bg-linen py-section">
      <Container>
        <Reveal>
          <p className="eyebrow flex items-center gap-4 text-roast">
            <span aria-hidden="true" className="h-px w-10 bg-terracotta" />
            Nuestra filosofía
          </p>
          <h2 id="about-philosophy-title" className="mt-8 text-display-lg wrap-break-word lg:mt-10">
            <SoftText>Una taza se entien&shy;de</SoftText>{" "}
            <em className="block text-roast [font-variation-settings:'SOFT'_100] sm:pl-[1.1em] lg:pl-[2.2em]">
              sin prisa.
            </em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-y-14 lg:mt-24 lg:grid-cols-3 lg:gap-x-[40px]">
          {concepts.map((concept, index) => (
            <Reveal
              key={concept.title}
              delay={index * 140}
              className={cn("border-t border-espresso/20 pt-6 lg:pt-8", steps[index])}
            >
              <h3 className="text-display-md wrap-break-word italic text-roast [font-variation-settings:'SOFT'_100]">
                <SoftText>{concept.title}</SoftText>
              </h3>
              <p className="mt-5 max-w-[22rem] text-base leading-relaxed text-ink-muted md:text-lg md:leading-relaxed">
                {concept.text}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
