// Builds the grouped, human-readable rows for the internal notice email.
export type Fila = { campo: string; valor: string };
export type Grupo = { titulo: string; filas: Fila[] };

const LABELS: Record<string, string> = {
  nombre: "Nombre",
  email: "Email",
  whatsapp: "WhatsApp / teléfono",
  pais: "País",
  ciudad: "Ciudad",
  empresa_cargo: "Empresa y cargo",
  contacto_pref: "Contacto preferido",
  como_conocio: "Cómo nos conoció",
  experiencia: "Experiencia importando",
  habilitado: "Habilitado para importar",
  acepta1: "Acepta la política de privacidad",
  acepta2: "Acepta recibir comunicaciones",
  producto: "Producto",
  categoria: "Categoría",
  producto_desc: "Descripción del producto",
  enlaces: "Enlaces de referencia",
  medidas: "Medidas y peso",
  cantidad: "Cantidad",
  unidad: "Unidad",
  precio_objetivo: "Precio objetivo",
  requisitos: "Requisitos especiales",
  uso_especial: "Uso especial",
  tipo_bateria: "Tipo de batería",
  viaje_bateria: "Cómo viaja la batería",
  voltaje: "Voltaje",
  tipo_proveedor: "Tipo de proveedor",
  proveedor_info: "Información del proveedor",
  etapa: "Etapa del proyecto",
  pagado: "Pago realizado",
  presupuesto: "Presupuesto",
  compras12: "Compras en los últimos 12 meses",
  disponibilidad: "Disponibilidad del presupuesto",
  cuando: "Cuándo quiere comprar",
  fecha_limite: "Fecha límite",
  incoterm: "Incoterm",
  transporte: "Transporte",
  agencia: "Agencia de aduanas",
  coordinar_agencia: "Coordinar agencia",
  expectativas: "Expectativas",
  marca: "Marca",
  logo: "Logo",
  servicios: "Servicios",
  mensaje: "Mensaje",
};

const GRUPOS: [string, string[]][] = [
  ["Datos de contacto", ["nombre", "email", "whatsapp", "pais", "ciudad", "empresa_cargo", "contacto_pref", "como_conocio", "experiencia", "habilitado", "acepta1", "acepta2"]],
  ["Producto", ["producto", "categoria", "producto_desc", "enlaces", "medidas", "cantidad", "unidad", "precio_objetivo", "requisitos", "uso_especial", "tipo_bateria", "viaje_bateria", "voltaje"]],
  ["Proveedor y compra", ["tipo_proveedor", "proveedor_info", "etapa", "pagado", "presupuesto", "compras12", "disponibilidad", "cuando", "fecha_limite", "incoterm"]],
  ["Logística", ["transporte", "agencia", "coordinar_agencia"]],
];

export function labelFor(key: string): string {
  return LABELS[key] ?? (key.charAt(0).toUpperCase() + key.slice(1)).replace(/_/g, " ");
}

function toText(v: unknown): string {
  if (Array.isArray(v)) return v.join(", ");
  return v == null ? "" : String(v);
}

export function buildDiagnosticoGrupos(
  respuestas: Record<string, unknown>,
  resultado: { codigo: string; puntuacion: number; clasificacion: string; alerta: string | null; paquete: string },
): Grupo[] {
  const used = new Set<string>();
  const grupos: Grupo[] = GRUPOS.map(([titulo, keys]) => ({
    titulo,
    filas: keys.map((k) => {
      used.add(k);
      return { campo: labelFor(k), valor: toText(respuestas[k]) };
    }),
  }));
  const resto = Object.keys(respuestas).filter((k) => !used.has(k) && k !== "empresa_web");
  grupos.push({ titulo: "Proyecto con NAMAR", filas: resto.map((k) => ({ campo: labelFor(k), valor: toText(respuestas[k]) })) });
  grupos.push({
    titulo: "Resultado del diagnóstico",
    filas: [
      { campo: "Referencia", valor: resultado.codigo },
      { campo: "Puntuación", valor: String(resultado.puntuacion) },
      { campo: "Clasificación", valor: resultado.clasificacion },
      { campo: "Alerta", valor: resultado.alerta ?? "" },
      { campo: "Paquete sugerido", valor: resultado.paquete },
    ],
  });
  return grupos
    .map((g) => ({ ...g, filas: g.filas.filter((f) => f.valor.trim().length > 0) }))
    .filter((g) => g.filas.length > 0);
}

export function fechaChina(d = new Date()): string {
  const s = d.toLocaleString("es-ES", {
    timeZone: "Asia/Shanghai",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${s} (hora de China)`;
}

export function capitalizarNombre(nombre: string): string {
  const n = nombre.trim();
  return n ? n.charAt(0).toLocaleUpperCase("es-ES") + n.slice(1) : n;
}
