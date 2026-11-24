import { useRef, useState, type FormEvent } from "react";
import type { ContactTransport } from "@/lib/contact/transport";
import {
  contactFields,
  trimContact,
  validateContact,
  validateField,
  type ContactErrors,
  type ContactField,
  type ContactMessage,
} from "@/lib/contact/validate";

export type ContactStatus =
  | "idle"
  | "invalid"
  | "sending"
  | "success"
  | "error"
  /** Valid, but there is no transport to send it with. */
  | "unavailable";

const emptyMessage: ContactMessage = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function useContactForm(transport: ContactTransport | null) {
  const [values, setValues] = useState(emptyMessage);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<ContactStatus>("idle");
  const sending = useRef(false);

  function change(field: ContactField, value: string) {
    if (sending.current) return;
    setValues((current) => ({ ...current, [field]: value }));
    // A field already marked wrong is re-checked as it is being corrected.
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: validateField(field, value) }));
    }
    setStatus("idle");
  }

  function blur(field: ContactField) {
    // Leaving an untouched field empty is not an error until submit.
    if (!values[field] || sending.current) return;
    setErrors((current) => ({
      ...current,
      [field]: validateField(field, values[field]),
    }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;

    const form = event.currentTarget;
    const nextErrors = validateContact(values);
    setErrors(nextErrors);

    const firstInvalid = contactFields.find((field) => nextErrors[field]);
    if (firstInvalid) {
      setStatus("invalid");
      const control = form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`);
      // Centred, because the sticky header can cover a field the browser
      // considers already in view.
      control?.focus({ preventScroll: true });
      control?.scrollIntoView({ block: "center" });
      return;
    }

    if (!transport) {
      setStatus("unavailable");
      return;
    }

    sending.current = true;
    setStatus("sending");
    try {
      await transport(trimContact(values));
      setValues(emptyMessage);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      sending.current = false;
    }
  }

  return { values, errors, status, change, blur, submit };
}
