import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

type Value = string | string[] | number | undefined | null;

const answersSchema = z.record(z.string(), z.union([z.string(), z.array(z.string()), z.number()]));

const submitSchema = z.object({
  answers: answersSchema,
  honeypot: z.string().optional().default(""),
});

function str(answers: Record<string, Value>, key: string): string {
  const value = answers[key];
  return typeof value === "string" ? value.trim() : "";
}

function arr(answers: Record<string, Value>, key: string): string[] {
  const value = answers[key];
  return Array.isArray(value) ? value : [];
}

const ETAPA_SCORE: Record<string, number> = {
  "Solo tengo una idea": 0,
  "Estoy buscando proveedores": 8,
  "Ya tengo proveedores o cotizaciones": 15,
  "Ya tengo muestras": 20,
  "Estoy listo para comprar": 25,
  "Ya compré y necesito gestionar el envío": 25,
  "La mercancía ya está en tránsito": 25,
  "Importo regularmente y busco un partner en China": 20,
};

const PRESUPUESTO_SCORE: Record<string, number> = {
  "Menos de 3.000 USD": 3,
  "3.000–15.000 USD": 12,
  "15.000–25.000 USD": 18,
  "25.000–50.000 USD": 22,
  "Más de 50.000 USD": 25,
  "Aún no lo he definido": 0,
};

const CUANDO_SCORE: Record<string, number> = {
  "Lo antes posible": 20,
  "En 1–2 meses": 15,
  "En 3–6 meses": 8,
  "En más de 6 meses": 3,
  "Aún sin fecha": 0,
};

const DISPONIBILIDAD_SCORE: Record<string, number> = {
  "Sí, ya disponible": 10,
  "En menos de 3 meses": 6,
  "Depende de financiación o aprobación": 2,
  "No está definido": 0,
};

const COMPRAS_SCORE: Record<string, number> = {
  "Menos de 10.000 USD": 2,
  "10.000–50.000 USD": 5,
  "50.000–150.000 USD": 8,
  "Más de 150.000 USD": 10,
  "No lo sé": 0,
};

const HABILITADO_SCORE: Record<string, number> = {
  "Sí": 5,
  "Estoy en proceso": 3,
};

const EXPERIENCIA_SCORE: Record<string, number> = {
  "Importo regularmente": 5,
  "Importo ocasionalmente": 4,
  "1–2 importaciones": 3,
  "Nunca he importado": 0,
};

// Pregunta 20: situaciones que requieren revisión especializada.
const RIESGOS_REVISION = [
  "Tiene batería",
  "Tiene Wi-Fi o Bluetooth",
  "Contacto con alimentos o bebidas",
  "Se aplica sobre la piel o es cosmético",
  "Uso médico, sanitario o de protección",
  "Para niños menores de 14 años",
  "Contiene químicos, líquidos, gases, polvos, imanes, madera o materiales de origen animal",
];

const PAQUETE: Record<string, string> = {
  "Menos de 3.000 USD": "Lanzamiento",
  "3.000–15.000 USD": "Lanzamiento",
  "15.000–25.000 USD": "Base",
  "25.000–50.000 USD": "Protección 360°",
  "Más de 50.000 USD": "A medida",
  "Aún no lo he definido": "Por definir",
};

function score(answers: Record<string, Value>): number {
  return (
    (ETAPA_SCORE[str(answers, "etapa")] ?? 0) +
    (PRESUPUESTO_SCORE[str(answers, "presupuesto")] ?? 0) +
    (CUANDO_SCORE[str(answers, "cuando")] ?? 0) +
    (DISPONIBILIDAD_SCORE[str(answers, "disponibilidad")] ?? 0) +
    (COMPRAS_SCORE[str(answers, "compras12")] ?? 0) +
    (HABILITADO_SCORE[str(answers, "habilitado")] ?? 0) +
    (EXPERIENCIA_SCORE[str(answers, "experiencia")] ?? 0)
  );
}

function classify(answers: Record<string, Value>, points: number): string {
  const etapa = str(answers, "etapa");
  const presupuesto = str(answers, "presupuesto");
  const cuando = str(answers, "cuando");
  const pais = str(answers, "pais");
  const requisitos = arr(answers, "requisitos");

  if (etapa === "Solo tengo una idea" || (presupuesto === "Aún no lo he definido" && cuando === "Aún sin fecha")) {
    return "Exploratorio";
  }
  if (pais === "Otro" || requisitos.some((r) => r === "No lo sé" || RIESGOS_REVISION.includes(r))) {
    return "Revisión especializada";
  }
  if (points >= 70) return "Alta prioridad";
  if (points >= 40) return "Calificado";
  return "Exploratorio";
}

export const submitDiagnostico = createServerFn({ method: "POST" })
  .inputValidator((input) => submitSchema.parse(input))
  .handler(async ({ data }) => {
    const { answers, honeypot } = data;

    // Antispam: honeypot relleno → no se guarda nada.
    if (honeypot.trim().length > 0) {
      return { ok: true, codigo: null as string | null };
    }

    const parsed = answersSchema.parse(answers);
    const record: Record<string, Value> = { ...parsed };
    delete record.empresa_web;

    const email = str(record, "email");
    const nombre = str(record, "nombre");
    const producto = str(record, "producto");
    if (!nombre || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !producto) {
      throw new Error("Datos incompletos");
    }

    const points = score(record);
    const clasificacion = classify(record, points);
    const pagado = str(record, "pagado");
    const alerta =
      pagado === "Sí, un anticipo" ||
      pagado === "Sí, el pago completo" ||
      str(record, "etapa") === "La mercancía ya está en tránsito"
        ? "URGENTE"
        : null;
    const banderas = arr(record, "requisitos").filter((r) => r !== "Ninguna");
    const paquete = PAQUETE[str(record, "presupuesto")] ?? "Por definir";

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row, error } = await supabaseAdmin
      .from("diagnosticos")
      .insert({
        nombre,
        email,
        whatsapp: str(record, "whatsapp") || null,
        pais: str(record, "pais") || null,
        ciudad: str(record, "ciudad") || null,
        empresa: str(record, "empresa_cargo") || null,
        producto,
        categoria: str(record, "categoria") || null,
        etapa: str(record, "etapa") || null,
        presupuesto: str(record, "presupuesto") || null,
        respuestas: record,
        puntuacion: points,
        clasificacion,
        alerta,
        banderas,
        paquete_sugerido: paquete,
      })
      .select("codigo")
      .single();

    if (error || !row) {
      console.error("Error guardando diagnóstico", error);
      throw new Error("No se pudo guardar el diagnóstico");
    }

    return { ok: true, codigo: row.codigo as string };
  });

const attachSchema = z.object({
  codigo: z.string().regex(/^NAM-\d{4}-\d{4}$/),
  archivos: z.array(z.string().min(1)).max(10),
});

export const attachDiagnosticoArchivos = createServerFn({ method: "POST" })
  .inputValidator((input) => attachSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("diagnosticos")
      .update({ archivos: data.archivos })
      .eq("codigo", data.codigo);

    if (error) {
      console.error("Error adjuntando archivos", error);
      throw new Error("No se pudieron registrar los archivos");
    }

    return { ok: true };
  });
