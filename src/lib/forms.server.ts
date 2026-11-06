// Server-only helpers shared by every public form: sanitising, rate limit, emails and Google Sheets log.
import { getRequestHeader, getRequestIP } from "@tanstack/react-start/server";
import type { EmailAttachment } from "@/lib/email-templates/send-email";

export const RATE_LIMIT_PER_HOUR = 5;

/** Removes HTML tags and control characters from user text. */
export function cleanText(value: string): string {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim();
}

export function requestPage(): string {
  return getRequestHeader("referer") ?? "";
}

// Límite suave en memoria (por instancia del servidor). La protección principal
// es el campo trampa del formulario y la regla de límite de peticiones de Cloudflare.
const envios = new Map<string, number[]>();

/** Returns true when the IP may submit; records the attempt. */
export async function checkRateLimit(formulario: string): Promise<boolean> {
  const ip = getRequestHeader("cf-connecting-ip") ?? getRequestIP({ xForwardedFor: true }) ?? "desconocida";
  const key = `${formulario}:${ip}`;
  const ahora = Date.now();
  const recientes = (envios.get(key) ?? []).filter((t) => ahora - t < 60 * 60 * 1000);
  if (recientes.length >= RATE_LIMIT_PER_HOUR) return false;
  recientes.push(ahora);
  envios.set(key, recientes);
  return true;
}

/** Código de referencia legible, p. ej. NAM-20261106-4F7K. */
export function nuevoCodigo(): string {
  const d = new Date();
  const fecha = `${d.getUTCFullYear()}${String(d.getUTCMonth() + 1).padStart(2, "0")}${String(d.getUTCDate()).padStart(2, "0")}`;
  const azar = crypto.randomUUID().replace(/-/g, "").slice(0, 4).toUpperCase();
  return `NAM-${fecha}-${azar}`;
}

/**
 * Añade una fila a la hoja de Google «Solicitudes web» mediante el webhook de Apps Script.
 * Opcional: si no está configurado, no hace nada. Nunca lanza errores.
 */
export async function registrarEnHoja(fila: Record<string, string | number>) {
  const url = process.env["SHEETS_WEBHOOK_URL"];
  if (!url) return;
  // Evita que Google Sheets interprete textos como fórmulas (p. ej. "+34 600…" o "=…").
  const segura: Record<string, string | number> = {};
  for (const [k, v] of Object.entries(fila)) {
    segura[k] = typeof v === "string" && /^[=+\-@]/.test(v) ? `'${v}` : v;
  }
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secreto: process.env["SHEETS_WEBHOOK_SECRET"] ?? "", fila: segura }),
    });
  } catch (error) {
    console.error("Error registrando en Google Sheets", error);
  }
}

type Grupo = { titulo: string; filas: { campo: string; valor: string }[] };

/** Sends the internal notice. Never throws. */
export async function sendAvisoInterno(opts: {
  id: string;
  tipo: "diagnostico" | "contacto";
  nombre: string;
  email: string;
  producto?: string;
  pais?: string;
  grupos: Grupo[];
  adjuntos?: EmailAttachment[];
  pagina: string;
}) {
  const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
  const { fechaChina } = await import("./aviso-format");
  const grupos = opts.grupos
    .map((g) => ({ ...g, filas: g.filas.filter((f) => f.valor.trim().length > 0) }))
    .filter((g) => g.filas.length > 0);
  try {
    await sendTemplateEmail("aviso-interno", "info@namar-global.com", {
      templateData: {
        tipo: opts.tipo,
        nombre: opts.nombre,
        producto: opts.producto,
        pais: opts.pais,
        grupos,
        archivos: (opts.adjuntos ?? []).map((a) => ({ nombre: a.filename })),
        fecha: fechaChina(),
        pagina: opts.pagina,
      },
      idempotencyKey: `aviso-interno-${opts.id}`,
      replyTo: opts.email,
      fromName: "NAMAR Global Web",
      fromLocalPart: "web",
      attachments: opts.adjuntos,
    });
  } catch (error) {
    console.error("Error enviando aviso interno", error);
  }
}

/** Sends the client confirmation. Never throws. */
export async function sendConfirmacionCliente(opts: { id: string; nombre: string; email: string }) {
  const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
  try {
    await sendTemplateEmail("confirmacion-cliente", opts.email, {
      templateData: { nombre: opts.nombre },
      idempotencyKey: `confirmacion-cliente-${opts.id}`,
      replyTo: "info@namar-global.com",
      fromName: "NAMAR Global",
      fromLocalPart: "info",
    });
  } catch (error) {
    console.error("Error enviando confirmación", error);
  }
}
