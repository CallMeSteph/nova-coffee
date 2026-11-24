/**
 * Facts shown on /contacto. NOVA COFFEE is a fictional brand, so there are no
 * real channels to list: never add invented phones, emails, addresses or
 * social profiles here.
 */
export type ProjectFact = {
  label: string;
  text: string;
};

export const projectFacts: ProjectFact[] = [
  { label: "Marca", text: "NOVA COFFEE, una marca ficticia." },
  { label: "Proyecto", text: "Pieza conceptual de portafolio." },
  { label: "Creado por", text: "CallMeSteph" },
  { label: "Local y horario", text: "Sin local físico ni horario de atención." },
  { label: "Canales", text: "Sin teléfono, correo ni redes sociales." },
];
