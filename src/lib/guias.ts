import { siteConfig } from "@/lib/site-config";

export const guiaCategories = [
  { slug: "proveedores", name: "Proveedores", subtitle: "Encontrar y verificar proveedores en China" },
  { slug: "negociacion", name: "Negociación", subtitle: "Precio, cantidades mínimas y condiciones" },
  { slug: "control-de-calidad", name: "Control de calidad", subtitle: "Calidad e inspecciones en origen" },
  { slug: "costes-e-impuestos", name: "Costes e impuestos", subtitle: "Cuánto cuesta importar desde China" },
  { slug: "pagos", name: "Pagos", subtitle: "Cómo pagar de forma segura" },
  { slug: "logistica", name: "Logística", subtitle: "Transporte internacional desde China" },
  { slug: "aduanas-y-requisitos", name: "Aduanas y requisitos", subtitle: "Trámites y requisitos en España y Colombia" },
  { slug: "ferias-en-china", name: "Ferias en China", subtitle: "Cómo aprovechar las ferias" },
] as const;

export type Guia = {
  slug: string; title: string; category: string; summary: string;
  author: string; authorRole: string; date: string; readingTime: string;
  image: string; imageAlt: string; metaTitle: string; metaDescription: string;
  published: boolean; body: string; faq: { question: string; answer: string }[];
  closingTitle?: string | undefined; closingDescription?: string | undefined; closingInvitation?: string | undefined; disclaimer?: string | undefined;
};
const covers = import.meta.glob<{ url: string }>("../assets/*.asset.json", { eager: true, import: "default" });
const files = import.meta.glob<string>("../content/guias/*.md", { eager: true, query: "?raw", import: "default" });

export function parseGuia(raw: string): Guia {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  const header = match?.[1];
  const content = match?.[2];
  if (header === undefined || content === undefined) throw new Error("La guía necesita un encabezado y contenido Markdown.");
  const data: Record<string, unknown> = {};
  for (const line of header.split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator < 1) continue;
    data[line.slice(0, separator).trim()] = JSON.parse(line.slice(separator + 1).trim());
  }
  const get = (key: string) => {
    const value = data[key];
    if (typeof value !== "string" || !value.trim()) throw new Error(`Falta ${key} en la guía.`);
    return value;
  };
  const category = get("category");
  if (!guiaCategories.some((c) => c.slug === category)) throw new Error(`Categoría desconocida: ${category}`);
  const imageName = get("image");
  const image = covers[`../assets/${imageName}.asset.json`]?.url ?? imageName;
  const body = content.trim();
  const faqBody = body.split("## Preguntas frecuentes")[1] ?? "";
  const faq = [...faqBody.matchAll(/\*\*([^\n]+[?])\*\*\s*\n([\s\S]*?)(?=\n\*\*|\n## |$)/g)].flatMap((m) => {
    const question = m[1];
    const answer = m[2];
    return question && answer ? [{ question, answer: answer.trim() }] : [];
  });
  const optional = (key: string) => typeof data[key] === "string" ? data[key] : undefined;
  return { slug: get("slug"), title: get("title"), category, summary: get("summary"), author: get("author"), authorRole: get("authorRole"), date: get("date"), readingTime: get("readingTime"), image, imageAlt: get("imageAlt"), metaTitle: get("metaTitle"), metaDescription: get("metaDescription"), published: data['published'] === true, body, faq, closingTitle: optional("closingTitle"), closingDescription: optional("closingDescription"), closingInvitation: optional("closingInvitation"), disclaimer: optional("disclaimer") };
}

export const guias: Guia[] = Object.values(files).map(parseGuia).filter((g) => g.published);
export const sortedGuias = () => [...guias].sort((a, b) => b.date.localeCompare(a.date));
export const categoryGuias = (category: string) => sortedGuias().filter((g) => g.category === category);
export const relatedGuias = (guia: Guia) => sortedGuias().filter((g) => g.slug !== guia.slug).sort((a, b) => Number(b.category === guia.category) - Number(a.category === guia.category)).slice(0, 3);
export const guiaImageUrl = (image: string) => image.startsWith("https://") ? image : new URL(image, siteConfig.siteUrl).href;
export const formatGuiaDate = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
