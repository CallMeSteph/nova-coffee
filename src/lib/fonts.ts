import { DM_Sans, Fraunces } from "next/font/google";

/**
 * Display serif for headlines. Variable font with optical size (opsz) and
 * softness (SOFT) axes, so large titles get finer contrast automatically.
 */
export const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  variable: "--font-fraunces",
  display: "swap",
});

/** Sans for body copy, navigation, buttons and UI text. */
export const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

/** Class names that expose both font CSS variables; apply on <html>. */
export const fontVariables = `${fraunces.variable} ${dmSans.variable}`;
