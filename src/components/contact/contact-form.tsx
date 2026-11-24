"use client";

import { useSyncExternalStore } from "react";
import { FormField } from "@/components/contact/form-field";
import { ArrowIcon } from "@/components/ui/arrow-icon";
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
  invalid: "Revisa los campos señalados.",
  demo: "Los campos son válidos, pero esto es una demostración: tu mensaje no se ha enviado ni almacenado.",
};

const noSubscription = () => () => {};

export function ContactForm() {
  const { values, errors, status, change, blur, submit } = useContactForm();
  // Until React can handle the submit, the browser would do a native one and
  // reload the page with the message lost.
  const hydrated = useSyncExternalStore(
    noSubscription,
    () => true,
    () => false,
  );
  const statusMessage = statusMessages[status];

  return (
    <form
      method="post"
      noValidate
      onSubmit={submit}
      aria-labelledby="contact-form-title"
    >
      <p className="mb-12 max-w-[30rem] border-l border-terracotta pl-5 text-sm leading-relaxed text-ink-muted">
        Formulario de demostración: los mensajes no se envían ni se almacenan.
      </p>
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
            onChange={(value) => change(field.name, value)}
            onBlur={() => blur(field.name)}
          />
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-9">
        <button
          type="submit"
          disabled={!hydrated}
          className="group inline-flex h-13 shrink-0 cursor-pointer items-center justify-center gap-3 self-start rounded-full bg-espresso px-[min(1.75rem,8.75vw)] text-sm font-medium tracking-[0.01em] text-cream transition-[background-color,opacity] duration-(--duration-base) ease-(--ease-out-soft) hover:bg-roast disabled:cursor-default sm:self-center"
        >
          Probar formulario
          <ArrowIcon className="transition-transform duration-(--duration-base) ease-(--ease-out-soft) group-hover:translate-x-1" />
        </button>

        {/* Always mounted, so changes are announced. */}
        <div role="status" aria-live="polite" className="min-h-6">
          {statusMessage && (
            <p
              className="max-w-[28rem] border-l border-terracotta pl-5 text-sm leading-relaxed text-espresso"
            >
              {statusMessage}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
