import type { Officer } from "@/types/content";

/**
 * 2026–2027 executive board, from the chapter's organizational-structure
 * graphic. Vice-chiefs and committee members are intentionally left out of
 * the homepage preview.
 *
 * TODO(human): add consented officer photos as `photo` paths. Cards fall
 * back to a monogram badge until then.
 */
export const officers: Officer[] = [
  {
    name: "Jan Michael C. Goseng",
    role: "Chapter Leader",
    roleShort: "Leader",
    department: "Executive",
    tier: "executive",
  },
  {
    name: "Venedict E. Mendoza",
    role: "Chapter Co-Leader",
    roleShort: "Co-Leader",
    department: "Executive",
    tier: "executive",
  },
  {
    name: "Allyson Kate T. Laus",
    role: "Executive Secretary",
    roleShort: "Exec. Secretary",
    department: "Secretariat",
    tier: "chief",
  },
  {
    name: "Lian Joy O. Salguero",
    role: "Chief Finance Officer",
    roleShort: "CFO",
    department: "Finance",
    tier: "chief",
  },
  {
    name: "Patrick Jake M. Estrella",
    role: "Chief Relations Officer",
    roleShort: "CRO",
    department: "Relations",
    tier: "chief",
  },
  {
    name: "Divine Nazareth G. De Jesus",
    role: "Chief Operations Officer",
    roleShort: "COO",
    department: "Operations",
    tier: "chief",
  },
  {
    name: "John Benedict R. Horario",
    role: "Chief Creatives Officer",
    roleShort: "CCO",
    department: "Creatives",
    tier: "chief",
  },
  {
    name: "John Benedict G. Bigael",
    role: "Chief Marketing Officer",
    roleShort: "CMO",
    department: "Marketing",
    tier: "chief",
  },
  {
    name: "Julian Manuelle S. De Leon",
    role: "Chief Technology Officer",
    roleShort: "CTO",
    department: "Technology",
    tier: "chief",
  },
];

export const departments = [
  "Executive",
  "Secretariat",
  "Finance",
  "Relations",
  "Operations",
  "Creatives",
  "Marketing",
  "Technology",
] as const;
