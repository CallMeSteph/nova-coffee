import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** Typographic wordmark: serif "NOVA" over a tracked sans "COFFEE". */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name}, ir al inicio`}
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span className="font-display text-[1.65rem] tracking-[0.08em] transition-colors duration-(--duration-base) group-hover:text-roast">
        NOVA
      </span>
      <span className="mt-1 pl-[0.15em] text-[0.56rem] font-medium tracking-[0.52em] text-roast">
        COFFEE
      </span>
    </Link>
  );
}
