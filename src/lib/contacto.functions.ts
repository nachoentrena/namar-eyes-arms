import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const short = z.string().max(200).optional().default("");

const contactoSchema = z.object({
  nombre: z.string().trim().min(1).max(200),
  email: z.string().trim().max(200).regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
  empresa: short,
  whatsapp: short,
  pais_destino: z.enum(["", "España", "Colombia", "Otro"]).optional().default(""),
  producto: short,
  cantidad_aproximada: short,
  mensaje: z.string().max(2000).optional().default(""),
  acepta_privacidad: z.literal("Sí"),
  honeypot: z.string().optional().default(""),
});

export const submitContacto = createServerFn({ method: "POST" })
  .inputValidator((input) => contactoSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.honeypot.trim()) return { ok: true };
    const { cleanText, checkRateLimit, requestPage, sendFormEmails } = await import("./forms.server");
    if (!(await checkRateLimit("contacto"))) {
      throw new Error("Demasiados envíos. Inténtalo más tarde.");
    }
    const c = {
      nombre: cleanText(data.nombre),
      email: data.email.trim(),
      empresa: cleanText(data.empresa),
      whatsapp: cleanText(data.whatsapp),
      pais_destino: data.pais_destino,
      producto: cleanText(data.producto),
      cantidad_aproximada: cleanText(data.cantidad_aproximada),
      mensaje: cleanText(data.mensaje),
    };
    if (!c.nombre) throw new Error("Datos incompletos");
    const pagina = requestPage();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row, error } = await supabaseAdmin
      .from("contactos")
      .insert({
        ...Object.fromEntries(Object.entries(c).map(([k, v]) => [k, v || null])),
        nombre: c.nombre,
        email: c.email,
        pagina,
        datos: { ...c, acepta_privacidad: "Sí" },
      })
      .select("id")
      .single();
    if (error || !row) {
      console.error("Error guardando contacto", error);
      throw new Error("No se pudo guardar el contacto");
    }
    await sendFormEmails({
      id: row.id,
      tipo: "contacto",
      nombre: c.nombre,
      email: c.email,
      pagina,
      filas: [
        { campo: "Nombre", valor: c.nombre },
        { campo: "Email", valor: c.email },
        { campo: "Empresa / particular", valor: c.empresa },
        { campo: "WhatsApp / teléfono", valor: c.whatsapp },
        { campo: "País de destino", valor: c.pais_destino },
        { campo: "Producto", valor: c.producto },
        { campo: "Cantidad aproximada", valor: c.cantidad_aproximada },
        { campo: "Mensaje", valor: c.mensaje },
        { campo: "Acepta privacidad", valor: "Sí" },
      ],
    });
    return { ok: true };
  });
