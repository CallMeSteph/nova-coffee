import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { StatusMessage } from "@/components/ui/status-message";
import { primaryCta } from "@/config/site";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

/** 404 page. Rendered inside the root layout, so it keeps header and footer. */
export default function NotFound() {
  return (
    <StatusMessage
      label="Error 404"
      title="Esta mesa"
      emphasis="está vacía"
      text="La página que buscas no existe o ha cambiado de lugar. Siempre puedes volver al inicio o echar un vistazo a la carta."
    >
      <ButtonLink href="/">Volver al inicio</ButtonLink>
      <ButtonLink href={primaryCta.href} variant="text">
        {primaryCta.label}
      </ButtonLink>
    </StatusMessage>
  );
}
