import type { ContactMessage } from "@/lib/contact/validate";

/**
 * Delivers a message. Must resolve only once the message has really been
 * accepted for delivery, and reject otherwise: the form shows success on
 * resolve and an error on reject.
 */
export type ContactTransport = (message: ContactMessage) => Promise<void>;

/**
 * Not connected: the project has no backend, form service or mail integration.
 * Assign a function here (for example a Server Action that validates again on
 * the server) to enable sending. While it is null the form validates but never
 * reports a message as sent.
 */
export const contactTransport: ContactTransport | null = null;
