import { cn } from "@/lib/utils";

/** Thin editorial arrow. Decorative: always paired with visible text. */
export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
      className={cn("h-3 w-5 shrink-0", className)}
    >
      <path d="M0 6h18.5M13.5 1l5 5-5 5" />
    </svg>
  );
}
