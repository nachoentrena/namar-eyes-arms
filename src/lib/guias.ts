export type GuiaAutor = "Nacho" | "Ana María";

export type Guia = {
  slug: string;
  title: string;
  /** Meta title for Google (max ~60 chars). */
  metaTitle: string;
  /** Meta description for Google (max ~155 chars). */
  metaDescription: string;
  summary: string;
  /** ISO date, e.g. "2026-11-02". */
  date: string;
  author: GuiaAutor;
  /** Public path under /public, e.g. "/guias/mi-guia.jpg". Also used as share image. */
  image: string;
  imageAlt: string;
  intro?: string[];
  sections: { heading: string; paragraphs: string[] }[];
};

/** Add new guides here; they appear on /guias, get their own page and enter the sitemap. */
export const guias: Guia[] = [];

export const sortedGuias = () => [...guias].sort((a, b) => b.date.localeCompare(a.date));

export const formatGuiaDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
