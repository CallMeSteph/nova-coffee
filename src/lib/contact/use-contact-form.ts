import { useState, type FormEvent } from "react";
import {
  contactFields,
  validateContact,
  validateField,
  type ContactErrors,
  type ContactField,
  type ContactMessage,
} from "@/lib/contact/validate";

export type ContactStatus =
  | "idle"
  | "invalid"
  /** Valid. Nothing is sent or stored: the form is a demonstration. */
  | "demo";

const emptyMessage: ContactMessage = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function useContactForm() {
  const [values, setValues] = useState(emptyMessage);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<ContactStatus>("idle");

  function change(field: ContactField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    // A field already marked wrong is re-checked as it is being corrected.
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: validateField(field, value) }));
    }
    setStatus("idle");
  }

  function blur(field: ContactField) {
    // Leaving an untouched field empty is not an error until submit.
    if (!values[field]) return;
    setErrors((current) => ({
      ...current,
      [field]: validateField(field, values[field]),
    }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

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

    setStatus("demo");
  }

  return { values, errors, status, change, blur, submit };
}
