"use client";

import { useEffect } from "react";
import { projectCredit, projectNotice, siteConfig } from "@/config/site";

type GlobalErrorProps = {
  error: unknown;
  retry: () => void;
};

/* Self-contained: the global stylesheet and fonts are not available here. */
const styles = `
  * { box-sizing: border-box; }
  body {
    margin: 0;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    background: #f6f1e9;
    color: #2a1d16;
    font-family: ui-sans-serif, system-ui, sans-serif;
    line-height: 1.6;
  }
  main, header, footer {
    width: 100%;
    max-width: 90rem;
    margin: 0 auto;
    padding: 1.5rem clamp(1.25rem, 0.5rem + 3.5vw, 4rem);
  }
  header { font-family: ui-serif, Georgia, serif; letter-spacing: 0.08em; }
  main { flex: 1; padding-top: 4rem; padding-bottom: 4rem; }
  h1 {
    margin: 0;
    font: 400 clamp(2.5rem, 1.6rem + 3.6vw, 5.25rem) / 1.05 ui-serif, Georgia, serif;
    letter-spacing: -0.025em;
  }
  em { display: block; color: #6e4b36; }
  .rule { width: 2.5rem; height: 1px; margin: 3rem 0 2rem; background: #b3603f; }
  .text { max-width: 26rem; margin: 0 0 2.5rem; color: #6b5d52; }
  .actions { display: flex; flex-wrap: wrap; align-items: center; gap: 1rem 2.25rem; }
  button {
    min-height: 3.25rem;
    padding: 0.5rem 1.75rem;
    border: 0;
    border-radius: 999px;
    background: #2a1d16;
    color: #f6f1e9;
    font: inherit;
    font-size: 0.875rem;
    cursor: pointer;
  }
  button:hover { background: #6e4b36; }
  a {
    display: inline-flex;
    align-items: center;
    min-width: 44px;
    min-height: 44px;
    color: inherit;
    font-size: 0.875rem;
    text-underline-offset: 6px;
  }
  :focus-visible { outline: 2px solid #b3603f; outline-offset: 3px; }
  footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem 2rem;
    border-top: 1px solid #ddcdb6;
    color: #6b5d52;
    font-size: 0.875rem;
  }
  footer p { margin: 0; }
`;

/** Last resort, when the root layout itself fails. Replaces the whole page. */
export default function GlobalError({ error, retry }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang={siteConfig.locale}>
      <head>
        {/* Next's own viewport tag is unmounted along with the app. */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`Algo se ha enfriado · ${siteConfig.name}`}</title>
        <style>{styles}</style>
      </head>
      <body>
        <header>{siteConfig.name}</header>
        <main>
          <div role="alert">
            <h1>
              Algo se ha <em>enfriado</em>
            </h1>
            <div className="rule" aria-hidden="true" />
            <p className="text">
              No hemos podido mostrar el sitio. Inténtalo de nuevo o vuelve al
              inicio.
            </p>
          </div>
          <div className="actions">
            <button type="button" onClick={() => retry()}>
              Intentar de nuevo
            </button>
            {/* A full page load, on purpose: the app may be in a broken state. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/">Volver al inicio</a>
          </div>
        </main>
        <footer>
          <p>{projectNotice}</p>
          <p>{projectCredit}</p>
        </footer>
      </body>
    </html>
  );
}
