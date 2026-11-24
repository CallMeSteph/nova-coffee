import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SoftText } from "@/components/ui/soft-text";
import { contactChannels, hasPendingChannels } from "@/config/contact";

/** Ways to get in touch, set like the colophon of a magazine on linen. */
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
            Cómo{" "}
            <em className="block text-roast [font-variation-settings:'SOFT'_100] sm:pl-[1.1em]">
              <SoftText>encon&shy;trar&shy;nos.</SoftText>
            </em>
          </h2>
          {hasPendingChannels && (
            <p className="mt-10 max-w-[22rem] border-l border-terracotta pl-5 text-sm leading-relaxed text-ink-muted">
              Sección en preparación: publicaremos aquí cada dato en cuanto esté
              confirmado.
            </p>
          )}
        </Reveal>

        <dl className="col-span-12 mt-16 border-b border-espresso/15 sm:col-span-10 sm:col-start-3 lg:col-span-6 lg:col-start-7 lg:mt-2">
          {contactChannels.map((channel, index) => (
            <Reveal
              key={channel.label}
              delay={index * 60}
              className="grid gap-x-8 gap-y-3 border-t border-espresso/15 py-6 sm:grid-cols-[min(11rem,40%)_minmax(0,1fr)] sm:items-baseline"
            >
              <dt className="eyebrow text-roast">{channel.label}</dt>
              {channel.entries.length === 0 ? (
                <dd className="font-display text-xl italic text-ink-muted">
                  Pendiente de configurar
                </dd>
              ) : (
                channel.entries.map((entry) => (
                  <dd
                    key={entry.text}
                    className="font-display text-xl [overflow-wrap:anywhere] sm:col-start-2"
                  >
                    {entry.href ? (
                      <a
                        href={entry.href}
                        className="underline decoration-espresso/30 decoration-1 underline-offset-[6px] transition-[text-decoration-color] duration-(--duration-base) ease-(--ease-out-soft) hover:decoration-terracotta"
                      >
                        {entry.text}
                      </a>
                    ) : (
                      entry.text
                    )}
                  </dd>
                ))
              )}
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
