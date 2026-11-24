import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SoftText } from "@/components/ui/soft-text";

/** The form, set like a letter beside a heading that holds still on desktop. */
export function ContactMessage() {
  return (
    <section aria-labelledby="contact-form-title" className="py-section">
      <Container className="grid grid-cols-12 items-start sm:gap-x-[24px] lg:gap-x-[40px]">
        <div className="col-span-12 lg:sticky lg:top-[calc(var(--header-height)+3rem)] lg:col-span-5">
          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-roast">
              <span aria-hidden="true" className="h-px w-10 bg-terracotta" />
              Demostración
            </p>
            <h2 id="contact-form-title" className="mt-8 text-display-lg wrap-break-word lg:mt-10">
              Unas líneas{" "}
              <em className="block text-roast [font-variation-settings:'SOFT'_100] sm:pl-[1.1em]">
                <SoftText>bas&shy;tan.</SoftText>
              </em>
            </h2>
          </Reveal>
        </div>

        <Reveal
          delay={120}
          className="col-span-12 mt-14 sm:col-span-10 sm:col-start-3 lg:col-span-6 lg:col-start-7 lg:mt-2"
        >
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
