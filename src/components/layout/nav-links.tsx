"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/config/site";

/**
 * Desktop navigation. Client only to read the pathname for aria-current;
 * every route is static, so this resolves during prerender (no Suspense needed).
 */
export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-9">
      {mainNav.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className="group relative inline-flex items-start gap-1.5 py-2 text-sm text-espresso/75 transition-colors duration-(--duration-base) hover:text-espresso aria-[current=page]:text-espresso"
            >
              <span
                aria-hidden="true"
                className="pt-px text-[0.6rem] tabular-nums tracking-wider text-roast"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0.5 h-px origin-left scale-x-0 bg-espresso transition-transform duration-(--duration-base) ease-(--ease-out-soft) group-hover:scale-x-100 group-aria-[current=page]:scale-x-100"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
