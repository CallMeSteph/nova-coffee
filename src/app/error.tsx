"use client";

import { useEffect } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { StatusMessage } from "@/components/ui/status-message";

type ErrorPageProps = {
  error: unknown;
  retry: () => void;
};

/** Error boundary of the pages. Shows no technical detail to the visitor. */
export default function ErrorPage({ error, retry }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusMessage
      alert
      label="Error inesperado"
      title="Algo se ha"
      emphasis="enfriado"
      text="No hemos podido mostrar esta página. Inténtalo de nuevo o vuelve al inicio."
    >
      <button
        type="button"
        onClick={() => retry()}
        className="inline-flex min-h-13 cursor-pointer items-center justify-center rounded-full bg-espresso px-[min(1.75rem,8.75vw)] py-2 text-sm font-medium tracking-[0.01em] text-cream transition-[background-color] duration-(--duration-base) ease-(--ease-out-soft) hover:bg-roast"
      >
        Intentar de nuevo
      </button>
      <ButtonLink href="/" variant="text">
        Volver al inicio
      </ButtonLink>
    </StatusMessage>
  );
}
