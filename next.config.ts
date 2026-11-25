import type { NextConfig } from "next";

/**
 * Inline scripts and styles are allowed because Next.js inlines its data in
 * static pages; nonces would force dynamic rendering. `data:` images are the
 * blur placeholders and the film grain.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // Production only: React needs `eval` in development. The image optimizer
      // is left out because it sends a stricter policy of its own.
      ...(process.env.NODE_ENV === "production"
        ? [
            {
              source: "/((?!_next/image).*)",
              headers: [
                { key: "Content-Security-Policy", value: contentSecurityPolicy },
              ],
            },
          ]
        : []),
    ];
  },
};

export default nextConfig;
