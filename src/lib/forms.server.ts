// Server-only helpers shared by every public form: sanitising, rate limit and emails.
import { getRequestHeader, getRequestIP } from "@tanstack/react-start/server";

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

/** Returns true when the IP may submit; records the attempt. */
export async function checkRateLimit(formulario: string): Promise<boolean> {
  const ip = getRequestIP({ xForwardedFor: true }) ?? getRequestHeader("cf-connecting-ip") ?? "desconocida";
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count } = await supabaseAdmin
    .from("envios_formulario")
    .select("id", { count: "exact", head: true })
    .eq("ip", ip)
    .gte("created_at", since);
  if ((count ?? 0) >= RATE_LIMIT_PER_HOUR) return false;
  await supabaseAdmin.from("envios_formulario").insert({ ip, formulario });
  return true;
}

/** Sends internal notice + client confirmation. Never throws. */
export async function sendFormEmails(opts: {
  id: string;
  tipo: "diagnostico" | "contacto";
  nombre: string;
  email: string;
  producto?: string;
  filas: { campo: string; valor: string }[];
  pagina: string;
}) {
  const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
  const fecha = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" }) + " (hora de Madrid)";
  const filas = opts.filas.filter((f) => f.valor.trim().length > 0);
  try {
    await sendTemplateEmail("aviso-interno", "info@namar-global.com", {
      templateData: { tipo: opts.tipo, nombre: opts.nombre, producto: opts.producto, filas, fecha, pagina: opts.pagina },
      idempotencyKey: `aviso-interno-${opts.id}`,
      replyTo: opts.email,
      fromName: "NAMAR Global Web",
      fromLocalPart: "web",
    });
  } catch (error) {
    console.error("Error enviando aviso interno", error);
  }
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
