import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SoftText } from "@/components/ui/soft-text";
import type { MenuCategory } from "@/config/menu";
import { cn } from "@/lib/utils";

type MenuSectionProps = {
  category: MenuCategory;
  index: number;
  total: number;
};

const pad = (value: number) => String(value).padStart(2, "0");

/**
 * One menu category. The title holds still beside its list on desktop; even
 * categories mirror the layout on a linen band, so each reads as its own page
 * of the printed menu.
 */
export function MenuSection({ category, index, total }: MenuSectionProps) {
  const titleId = `${category.id}-title`;
  const mirrored = index % 2 === 1;

  return (
    <section
      id={category.id}
      aria-labelledby={titleId}
      className={cn("py-section", mirrored && "bg-linen")}
    >
      <Container className="grid grid-cols-12 items-start sm:gap-x-[24px] lg:gap-x-[40px]">
        {/* Category heading */}
        <div
          className={cn(
            "col-span-12 lg:sticky lg:top-[calc(var(--header-height)+3rem)] lg:col-span-5 lg:row-start-1",
            mirrored && "lg:col-start-8 lg:pl-[12%]",
          )}
        >
          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-[0.6875rem] tabular-nums text-roast">
              <span aria-hidden="true" className="h-px w-10 bg-terracotta" />
              {pad(index + 1)} / {pad(total)}
            </p>
            {/* Phone and desktop sizes track the column so long titles fit. */}
            <h2
              id={titleId}
              className="mt-8 text-display-lg wrap-break-word max-sm:text-[min(10.2vw,3rem)] lg:text-[clamp(2.25rem,3.6vw,3.5rem)]"
            >
              <SoftText>{category.title}</SoftText>
            </h2>
            <p className="mt-5 max-w-[19rem] font-display text-lg italic leading-snug text-ink-muted">
              {category.description}
            </p>
          </Reveal>
        </div>

        {/* Products */}
        <ul
          className={cn(
            "col-span-12 mt-12 border-b border-espresso/15 sm:col-span-10 sm:col-start-3 lg:col-span-7 lg:row-start-1 lg:mt-1",
            mirrored ? "lg:col-start-1" : "lg:col-start-6",
          )}
        >
          {category.items.map((item, itemIndex) => (
            <li key={item.name} className="border-t border-espresso/15">
              <Reveal delay={itemIndex * 80} className="py-7 lg:py-9">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="text-2xl leading-tight tracking-[-0.01em] md:text-[1.75rem]">
                    {item.name}
                  </h3>
                  <span className="shrink-0 font-display text-xl tabular-nums text-roast">
                    {item.price}
                  </span>
                </div>
                <p className="mt-2.5 max-w-[30rem] text-base leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
