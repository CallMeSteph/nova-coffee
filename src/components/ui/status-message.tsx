import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type StatusMessageProps = {
  /** Running head, e.g. "Error 404". */
  label: string;
  title: string;
  /** Second half of the headline, set in italics like the rest of the site. */
  emphasis: string;
  text: string;
  /** Announces the message when it replaces content already on screen. */
  alert?: boolean;
  children: ReactNode;
};

/** Shared layout of the 404 and error pages: a headline, a line and a way on. */
export function StatusMessage({
  label,
  title,
  emphasis,
  text,
  alert = false,
  children,
}: StatusMessageProps) {
  return (
    <main id="main" className="flex-1">
      <Container className="pb-section pt-6 lg:pt-8">
        <p className="eyebrow border-b border-espresso/15 pb-4 text-[0.6875rem] text-ink-muted">
          {label}
        </p>
        <div role={alert ? "alert" : undefined}>
          <h1 className="mt-16 text-display-lg wrap-break-word sm:text-display-xl lg:mt-20">
            {title}{" "}
            <em className="block text-roast [font-variation-settings:'SOFT'_100] sm:pl-[0.6em]">
              {emphasis}
            </em>
          </h1>
          <span aria-hidden="true" className="mt-14 block h-px w-10 bg-terracotta" />
          <p className="mt-8 max-w-[26rem] text-base leading-relaxed text-ink-muted md:text-lg md:leading-relaxed">
            {text}
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-2">
          {children}
        </div>
      </Container>
    </main>
  );
}
