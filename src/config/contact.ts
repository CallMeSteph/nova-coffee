/**
 * Contact channels shown on /contacto.
 *
 * PENDING CONFIGURATION: the business has not confirmed any of these yet.
 * Fill `entries` with real data only; a channel without entries is shown as
 * "Pendiente de configurar", and the page notice disappears once all have one.
 */
export type ContactEntry = {
  text: string;
  /** mailto:, tel: or an https URL. Leave out for plain text. */
  href?: string;
};

export type ContactChannel = {
  label: string;
  entries: ContactEntry[];
};

export const contactChannels: ContactChannel[] = [
  { label: "Correo electrónico", entries: [] },
  { label: "Teléfono", entries: [] },
  { label: "WhatsApp", entries: [] },
  { label: "Dirección", entries: [] },
  { label: "Horario", entries: [] },
  { label: "Redes sociales", entries: [] },
];

export const hasPendingChannels = contactChannels.some(
  (channel) => channel.entries.length === 0,
);
