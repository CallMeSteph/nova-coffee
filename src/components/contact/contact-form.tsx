"use client";

import { useSyncExternalStore } from "react";
import { FormField } from "@/components/contact/form-field";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { contactTransport } from "@/lib/contact/transport";
import { useContactForm, type ContactStatus } from "@/lib/contact/use-contact-form";
import { maxLengths } from "@/lib/contact/validate";

const fields = [
  { name: "name", label: "Nombre", autoComplete: "name", className: "sm:col-span-1" },
  {
    name: "email",
    label: "Correo electrónico",
    type: "email",
    autoComplete: "email",
    className: "sm:col-span-1",
  },
  { name: "subject", label: "Asunto", autoComplete: "off", className: "sm:col-span-2" },
  {
    name: "message",
    label: "Mensaje",
    multiline: true,
    autoComplete: "off",
    className: "sm:col-span-2",
  },
] as const;

const statusMessages: Record<ContactStatus, string | null> = {
  idle: null,
  invalid: "Revisa los campos señalados antes de enviar.",
  sending: "Enviando tu mensaje…",
  success: "Mensaje enviado. Gracias por escribirnos.",
  error:
    "No hemos podido enviar tu mensaje. Lo que has escrito sigue aquí: inténtalo de nuevo en unos minutos.",
  unavailable:
    "Tu mensaje no se ha enviado: el envío todavía no está disponible. Lo que has escrito sigue aquí.",
};

const noSubscription = () => () => {};

export function ContactForm() {
  const { values, errors, status, change, blur, submit } =
    useContactForm(contactTransport);
  // Until React can handle the submit, the browser would do a native one and
  // reload the page with the message lost.
  const hydrated = useSyncExternalStore(
    noSubscription,
    () => true,
    () => false,
  );
  const sending = status === "sending";
  const statusMessage = statusMessages[status];

  return (
    <form
      method="post"
      noValidate
      onSubmit={submit}
      aria-labelledby="contact-form-title"
      aria-busy={sending}
    >
      {!contactTransport && (
        <p className="mb-12 max-w-[30rem] border-l border-terracotta pl-5 text-sm leading-relaxed text-ink-muted">
          Formulario en preparación: todavía no envía mensajes.
        </p>
      )}
      <noscript>
        <p className="mb-12 text-sm text-ink-muted">
          Este formulario necesita JavaScript para funcionar.
        </p>
      </noscript>

      <p className="text-sm text-ink-muted">Todos los campos son obligatorios.</p>

      <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {fields.map((field) => (
          <FormField
            key={field.name}
            {...field}
            id={`contact-${field.name}`}
            value={values[field.name]}
            error={errors[field.name]}
            maxLength={maxLengths[field.name]}
            readOnly={sending}
            onChange={(value) => change(field.name, value)}
            onBlur={() => blur(field.name)}
          />
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-9">
        {/* aria-disabled while sending keeps keyboard focus on the button. */}
        <button
          type="submit"
          disabled={!hydrated}
          aria-disabled={sending || undefined}
          className="group inline-flex h-13 shrink-0 cursor-pointer items-center justify-center gap-3 self-start rounded-full bg-espresso px-[min(1.75rem,8.75vw)] text-sm font-medium tracking-[0.01em] text-cream transition-[background-color,opacity] duration-(--duration-base) ease-(--ease-out-soft) hover:bg-roast disabled:cursor-default aria-disabled:cursor-progress aria-disabled:opacity-60 sm:self-center"
        >
          {sending ? "Enviando…" : "Enviar mensaje"}
          <ArrowIcon className="transition-transform duration-(--duration-base) ease-(--ease-out-soft) group-hover:translate-x-1" />
        </button>

        {/* Always mounted, so changes are announced. */}
        <div role="status" aria-live="polite" className="min-h-6">
          {statusMessage && (
            <p
              data-status={status}
              className="max-w-[28rem] border-l border-terracotta pl-5 text-sm leading-relaxed text-espresso data-[status=sending]:border-sand data-[status=success]:border-espresso"
            >
              {statusMessage}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
