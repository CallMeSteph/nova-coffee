"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger offset in ms, applied as a transition delay. */
  delay?: number;
};

/**
 * Fades and lifts its content the first time it enters the viewport.
 * Content is visible by default, in the HTML and in CSS: it is only hidden
 * once this component is running and the element is confirmed below the
 * viewport, so a blocked or failed script never strands it invisible.
 * The states live in CSS (`[data-reveal]` in globals.css).
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"static" | "hidden" | "visible">("static");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
          // Already on screen (or scrolled past): nothing to hide or animate.
          setState((current) => (current === "hidden" ? "visible" : current));
          observer.disconnect();
        } else {
          setState("hidden");
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={state}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
      className={cn(className)}
    >
      {children}
    </div>
  );
}
