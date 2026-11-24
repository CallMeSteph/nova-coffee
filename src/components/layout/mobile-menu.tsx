"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { mainNav, primaryCta } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Mobile / tablet menu (hidden from lg up). Owns the toggle button and a
 * full-height panel below the header. Escape closes it, focus moves into the
 * panel on open and back to the toggle on close, and page scroll is locked
 * while it is open. Everything the panel covers is inert meanwhile, so only
 * the header (logo, toggle) and the panel itself can be reached.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (!open) {
      // Return focus only when closing, not on first mount.
      if (wasOpen.current) toggleRef.current?.focus();
      wasOpen.current = false;
      return;
    }
    wasOpen.current = true;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    // The header stays visible above the panel; its body siblings do not. The
    // route announcer is left alone so navigations are still announced.
    const header = toggleRef.current?.closest("header");
    const covered = Array.from(document.body.children).filter(
      (node): node is HTMLElement =>
        node instanceof HTMLElement &&
        node !== header &&
        !node.inert &&
        node.localName !== "next-route-announcer",
    );
    covered.forEach((node) => (node.inert = true));

    // Covers the logo, and the browser's back and forward buttons.
    const onHeaderClick = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest("a")) setOpen(false);
    };
    const onPopState = () => setOpen(false);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    // Close if the viewport grows into the desktop layout.
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    header?.addEventListener("click", onHeaderClick);
    window.addEventListener("popstate", onPopState);
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      root.style.overflow = previousOverflow;
      covered.forEach((node) => (node.inert = false));
      header?.removeEventListener("click", onHeaderClick);
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="relative z-10 -mr-[8px] inline-flex h-11 items-center gap-[clamp(8px,16px-0.25rem,12px)] pl-[max(0px,24px-1rem)] pr-[8px] text-sm font-medium"
      >
        <span>{open ? "Cerrar" : "Menú"}</span>
        <span aria-hidden="true" className="relative block h-[10px] w-[24px]">
          <span
            className={cn(
              "absolute left-0 top-0 h-px w-full bg-current transition-transform duration-(--duration-base) ease-(--ease-out-soft)",
              open && "translate-y-[5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-(--duration-base) ease-(--ease-out-soft)",
              open && "-translate-y-[4px] -rotate-45",
            )}
          />
        </span>
      </button>

      <div
        ref={panelRef}
        id={panelId}
        inert={!open}
        className={cn(
          "fixed inset-x-0 bottom-0 top-(--header-height) flex flex-col overflow-y-auto bg-cream",
          // Visibility flips instantly on open (so focus can move in) and only
          // after the fade on close (so the fade-out stays visible).
          open
            ? "visible opacity-100 [transition:opacity_var(--duration-base)_var(--ease-out-soft),visibility_0s]"
            : "invisible opacity-0 [transition:opacity_var(--duration-base)_var(--ease-out-soft),visibility_0s_var(--duration-base)]",
        )}
      >
        <nav aria-label="Principal" className="px-(--gutter) pt-10">
          <ul className="border-t border-espresso/10">
            {mainNav.map((item, index) => (
              <li
                key={item.href}
                className={cn(
                  "border-b border-espresso/10 transition-[opacity,translate] duration-(--duration-slow) ease-(--ease-out-soft)",
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                )}
                style={{ transitionDelay: open ? `${80 + index * 60}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="group flex items-baseline gap-5 py-5"
                >
                  <span
                    aria-hidden="true"
                    className="w-6 text-xs tabular-nums tracking-wider text-roast"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[min(2.5rem,15vw)] leading-none tracking-[-0.02em] transition-[color,font-style] group-hover:text-roast group-aria-[current=page]:italic">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto flex flex-col gap-6 px-(--gutter) pb-10 pt-12">
          <ButtonLink
            href={primaryCta.href}
            onClick={close}
            className="w-full justify-between"
          >
            {primaryCta.label}
          </ButtonLink>
          <p className="eyebrow text-[0.6875rem] text-ink-muted">
            Cada taza, un ritual
          </p>
        </div>
      </div>
    </div>
  );
}
