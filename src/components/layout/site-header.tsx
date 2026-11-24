import { Logo } from "@/components/layout/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { NavLinks } from "@/components/layout/nav-links";
import { ButtonLink } from "@/components/ui/button-link";
import { primaryCta } from "@/config/site";

/**
 * Sticky header with a translucent cream surface. The blur lives on a
 * background layer, not on <header>, because backdrop-filter would turn the
 * header into the containing block of the fixed mobile panel.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 isolate h-(--header-height)">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 border-b border-espresso/10 bg-cream/85 backdrop-blur-md"
      />
      <div className="mx-auto grid h-full w-full max-w-(--container-page) grid-cols-[1fr_auto] items-center px-[min(var(--gutter),6.4vw)] lg:grid-cols-[1fr_auto_1fr]">
        <Logo className="justify-self-start" />

        <nav aria-label="Principal" className="hidden lg:block">
          <NavLinks />
        </nav>

        <div className="flex items-center justify-self-end">
          <ButtonLink
            href={primaryCta.href}
            variant="outline"
            className="hidden whitespace-nowrap lg:inline-flex"
          >
            {primaryCta.label}
          </ButtonLink>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
