import Link from "next/link";
import type { ComponentProps } from "react";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { cn } from "@/lib/utils";

const variants = {
  /** Filled espresso pill: the one main action per view. */
  primary:
    "h-13 rounded-full bg-espresso px-7 text-cream hover:bg-roast",
  /** Hairline pill for secondary placements such as the header. */
  outline:
    "h-11 rounded-full border border-espresso/25 px-5 text-espresso hover:border-espresso hover:bg-espresso hover:text-cream",
  /** Underlined text link with an arrow, for quieter actions. */
  text: "h-13 px-0 text-espresso underline decoration-espresso/30 decoration-1 underline-offset-[6px] hover:decoration-terracotta",
} as const;

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
  withArrow?: boolean;
};

export function ButtonLink({
  variant = "primary",
  withArrow = true,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "group inline-flex items-center justify-center gap-3 text-sm font-medium tracking-[0.01em]",
        "transition-[color,background-color,border-color,text-decoration-color] duration-(--duration-base) ease-(--ease-out-soft)",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
      {withArrow && (
        <ArrowIcon className="transition-transform duration-(--duration-base) ease-(--ease-out-soft) group-hover:translate-x-1" />
      )}
    </Link>
  );
}
