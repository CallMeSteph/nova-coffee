export const contactFields = ["name", "email", "subject", "message"] as const;

export type ContactField = (typeof contactFields)[number];
export type ContactMessage = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;

export const maxLengths: Record<ContactField, number> = {
  name: 100,
  email: 254,
  subject: 150,
  message: 4000,
};

const requiredErrors: Record<ContactField, string> = {
  name: "Escribe tu nombre.",
  email: "Escribe tu correo electrónico.",
  subject: "Escribe un asunto.",
  message: "Escribe tu mensaje.",
};

/* One @, no spaces, and a dotted domain without empty labels. */
const emailPattern = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;

export function validateField(
  field: ContactField,
  value: string,
): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return requiredErrors[field];
  if (trimmed.length > maxLengths[field]) {
    return `Usa ${maxLengths[field]} caracteres como máximo.`;
  }
  if (field === "email" && !emailPattern.test(trimmed)) {
    return "Revisa el correo: debe tener un formato como nombre@dominio.com.";
  }
  return undefined;
}

export function validateContact(message: ContactMessage): ContactErrors {
  const errors: ContactErrors = {};
  for (const field of contactFields) {
    const error = validateField(field, message[field]);
    if (error) errors[field] = error;
  }
  return errors;
}
