import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui/container";
import { mainNav, projectCredit, projectNotice } from "@/config/site";

/**
 * Shared footer. Set on linen so it stands apart from both the espresso
 * closings and the cream page. Carries the fictional-brand notice and credit.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-espresso/10 bg-linen">
      <Container className="py-14 lg:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <Logo className="self-start" />
          <nav aria-label="Pie de página">
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(7rem,1fr))] gap-x-9 md:flex md:flex-wrap">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-espresso underline decoration-transparent decoration-1 underline-offset-[6px] transition-[text-decoration-color] duration-(--duration-base) ease-(--ease-out-soft) hover:decoration-terracotta"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-espresso/15 pt-6 text-sm leading-relaxed text-ink-muted md:flex-row md:justify-between md:gap-8">
          <p>{projectNotice}</p>
          <p>{projectCredit}</p>
        </div>
      </Container>
    </footer>
  );
}
