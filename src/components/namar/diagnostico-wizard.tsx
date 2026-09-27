import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Loader2, Upload, X } from "lucide-react";

import { supabase } from "@/integrations/supabase/client";
import { countries } from "@/lib/countries";
import {
  attachDiagnosticoArchivos,
  submitDiagnostico,
} from "@/lib/diagnostico.functions";
import { whatsappHref } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Value = string | string[];
type Answers = Record<string, Value>;

const STORAGE_KEY = "namar-diagnostico-v1";

const MAX_FILES = 10;
const MAX_FILE_MB = 10;
const ACCEPTED = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const inputCls =
  "w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-slate/50 focus:border-navy focus:ring-1 focus:ring-gold";

const STEPS = [
  "Sus datos",
  "Su experiencia",
  "Su producto",
  "Requisitos",
  "Su proveedor",
  "Cantidades y plazos",
  "Marca y logística",
  "Su proyecto",
];

function Field({
  label,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy">
        {label}
        {required ? <span className="ml-1 text-gold">*</span> : null}
      </label>
      {hint ? <p className="mt-1 text-xs text-slate">{hint}</p> : null}
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-1.5 text-xs font-medium text-destructive">{error}</p> : null}
    </div>
  );
}

function Options({
  options,
  value,
  onSelect,
  cols = "sm:grid-cols-2",
}: {
  options: string[];
  value?: string;
  onSelect: (option: string) => void;
  cols?: string;
}) {
  return (
    <div className={cn("grid gap-2", cols)}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onSelect(option)}
          className={cn(
            "border px-4 py-3 text-left text-sm transition-colors",
            value === option
              ? "border-navy bg-navy font-medium text-navy-foreground"
              : "border-border bg-background text-slate hover:border-navy hover:text-navy",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function Chips({
  options,
  value,
  onToggle,
}: {
  options: string[];
  value?: string[];
  onToggle: (option: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const selected = value?.includes(option) ?? false;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onToggle(option)}
            className={cn(
              "border px-4 py-2 text-sm transition-colors",
              selected
                ? "border-navy bg-navy font-medium text-navy-foreground"
                : "border-border bg-background text-slate hover:border-navy hover:text-navy",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

const CATEGORIAS = [
  "Electrónica y tecnología",
  "Textil y calzado",
  "Hogar y decoración",
  "Maquinaria industrial",
  "Automoción y repuestos",
  "Juguetes y artículos infantiles",
  "Cosmética y cuidado personal",
  "Alimentación y bebidas",
  "Deporte y ocio",
  "Bisutería y accesorios",
  "Otro",
];

const MATERIALES = [
  "Plástico",
  "Metal",
  "Madera",
  "Vidrio o cerámica",
  "Tela o piel",
  "Cartón o papel",
  "No lo sé",
];

const REQUISITOS = [
  "Tiene enchufe o cable (electricidad)",
  "Tiene batería",
  "Tiene Wi-Fi o Bluetooth",
  "Contacto con alimentos o bebidas",
  "Se aplica sobre la piel o es cosmético",
  "Uso médico, sanitario o de protección",
  "Para niños menores de 14 años",
  "Contiene químicos, líquidos, gases, polvos, imanes, madera o materiales de origen animal",
  "Ninguna de las anteriores",
  "No lo sé",
];

const SERVICIOS = [
  "Encontrar proveedores",
  "Verificar proveedores",
  "Negociar precios",
  "Control de calidad",
  "Logística y aduanas",
  "Gestión completa",
];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function DiagnosticoWizard() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [codigo, setCodigo] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  // Restaurar progreso guardado (solo en cliente, tras hidratar).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as { step?: number; answers?: Answers };
      if (saved.answers && typeof saved.answers === "object") {
        setAnswers(saved.answers);
        if (typeof saved.step === "number" && saved.step >= 1 && saved.step <= 8) {
          setStep(saved.step);
        }
      }
    } catch {
      // ignorar
    }
  }, []);

  useEffect(() => {
    if (done) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, answers }));
    } catch {
      // ignorar
    }
  }, [step, answers, done]);

  const scrollToTop = useCallback(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const get = (key: string): string => {
    const value = answers[key];
    return typeof value === "string" ? value : "";
  };
  const getArr = (key: string): string[] => {
    const value = answers[key];
    return Array.isArray(value) ? value : [];
  };

  const set = (key: string, value: Value, clear: string[] = []) => {
    setAnswers((prev) => {
      const next = { ...prev, [key]: value };
      for (const k of clear) delete next[k];
      return next;
    });
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const toggle = (key: string, option: string, clear: string[] = []) => {
    setAnswers((prev) => {
      const current = Array.isArray(prev[key]) ? (prev[key] as string[]) : [];
      let next: string[];
      if (option === "Ninguna de las anteriores" || option === "No lo sé") {
        next = current.includes(option) ? [] : [option];
      } else {
        next = current.includes(option)
          ? current.filter((o) => o !== option)
          : [...current.filter((o) => o !== "Ninguna de las anteriores" && o !== "No lo sé"), option];
      }
      const result = { ...prev };
      if (next.length > 0) result[key] = next;
      else delete result[key];
      for (const k of clear) delete result[k];
      return result;
    });
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const addFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    const accepted: File[] = [];
    const rejected: string[] = [];
    for (const file of Array.from(incoming)) {
      if (!ACCEPTED.includes(file.type)) {
        rejected.push(`${file.name} (formato no permitido)`);
        continue;
      }
      if (file.size > MAX_FILE_MB * 1024 * 1024) {
        rejected.push(`${file.name} (más de ${MAX_FILE_MB} MB)`);
        continue;
      }
      accepted.push(file);
    }
    setFiles((prev) => {
      const combined = [...prev, ...accepted].slice(0, MAX_FILES);
      if (prev.length + accepted.length > MAX_FILES) {
        rejected.push(`Máximo ${MAX_FILES} archivos`);
      }
      return combined;
    });
    if (rejected.length > 0) {
      setErrors((prev) => ({ ...prev, archivos: rejected.join(" · ") }));
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.archivos;
        return next;
      });
    }
  };

  const validateStep = (target: number): boolean => {
    const e: Record<string, string> = {};
    const req = (key: string, message: string) => {
      const value = answers[key];
      const empty = value === undefined || value === "" || (Array.isArray(value) && value.length === 0);
      if (empty) e[key] = message;
    };

    if (target === 1) {
      req("nombre", "Por favor indíquenos su nombre.");
      if (!emailRe.test(get("email"))) e["email"] = "Por favor indíquenos un correo válido.";
      if (get("whatsapp").replace(/\D/g, "").length < 6)
        e["whatsapp"] = "Por favor indíquenos un número de WhatsApp válido.";
      req("pais", "Por favor seleccione el país de importación.");
      if (!get("ciudad").trim()) e["ciudad"] = "Por favor indíquenos su ciudad.";
      req("perfil", "Por favor seleccione una opción.");
      if (get("perfil") && get("perfil") !== "Emprendedor, aún sin empresa") {
        if (!get("empresa_cargo").trim())
          e["empresa_cargo"] = "Por favor indíquenos la empresa y su cargo.";
      }
    }
    if (target === 2) {
      req("experiencia", "Por favor seleccione una opción.");
      req("habilitado", "Por favor seleccione una opción.");
      req("agencia", "Por favor seleccione una opción.");
etiqueta: ;
    }
    if (target === 3) {
      if (!get("producto").trim()) e["producto"] = "Por favor indíquenos el producto.";
      if (!get("producto_desc").trim()) e["producto_desc"] = "Por favor descríbanos brevemente el producto.";
      req("categoria", "Por favor seleccione una categoría.");
      if (getArr("materiales").length === 0) e["materiales"] = "Por favor seleccione al menos un material.";
    }
    if (target === 4) {
      if (getArr("requisitos").length === 0)
        e["requisitos"] = "Por favor seleccione una opción (si no aplica, marque “Ninguna de las anteriores”).";
      const r = getArr("requisitos");
      if (r.includes("Tiene enchufe o cable (electricidad)")) req("voltaje", "Por favor seleccione el voltaje.");
      if (r.includes("Tiene batería")) {
        req("tipo_bateria", "Por favor seleccione el tipo de batería.");
        req("viaje_bateria", "Por favor indíquenos cómo viaja la batería.");
        if (getArr("docs_bateria").length === 0)
          e["docs_bateria"] = "Por favor seleccione al menos una opción.";
      }
      if (
        r.some(
          (x) =>
            [
              "Contacto con alimentos o bebidas",
              "Se aplica sobre la piel o es cosmético",
              "Uso médico, sanitario o de protección",
              "Para niños menores de 14 años",
              "Contiene químicos, líquidos, gases, polvos, imanes, madera o materiales de origen animal",
            ].includes(x),
        ) &&
        getArr("certificados").length === 0
      ) {
        e["certificados"] = "Por favor seleccione al menos una opción.";
      }
    }
    if (target === 5) {
      req("proveedor", "Por favor seleccione una opción.");
      if (get("proveedor") === "Sí, ya tengo proveedor") {
        if (!get("proveedor_info").trim())
          e["proveedor_info"] = "Por favor indíquenos el nombre o enlace del proveedor.";
        req("tipo_proveedor", "Por favor seleccione una opción.");
        req("pagado", "Por favor seleccione una opción.");
      }
    }
    if (target === 6) {
      const cantidad = Number(get("cantidad"));
      if (!get("cantidad") || Number.isNaN(cantidad) || cantidad <= 0)
        e["cantidad"] = "Por favor indíquenos una cantidad válida.";
      req("unidad", "Por favor seleccione la unidad.");
      req("presupuesto", "Por favor seleccione un presupuesto.");
      req("disponibilidad", "Por favor seleccione una opción.");
      req("compras12", "Por favor seleccione una opción.");
      req("cuando", "Por favor seleccione una opción.");
    }
    if (target === 7) {
      req("marca", "Por favor seleccione una opción.");
      if (
        get("marca") === "Tengo marca y quiero productos propios" ||
        get("marca") === "Tengo marca y quiero personalizar un producto existente"
      ) {
        if (getArr("personalizar").length === 0)
          e["personalizar"] = "Por favor seleccione al menos una opción.";
      }
      req("incoterm", "Por favor seleccione una opción.");
      req("transporte", "Por favor seleccione una opción.");
    }
    if (target === 8) {
      req("etapa", "Por favor seleccione la etapa de su proyecto.");
      if (getArr("servicios").length === 0)
        e["servicios"] = "Por favor seleccione al menos un servicio.";
      if (!get("como_conocio")) e["como_conocio"] = "Por favor seleccione una opción.";
      if (!get("acepta1")) e["acepta1"] = "Necesitamos su confirmación para enviar la evaluación.";
      if (!get("acepta2")) e["acepta2"] = "Debe aceptar la autorización de tratamiento de datos.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const goNext = () => {
    if (!validateStep(step)) {
      scrollToTop();
      return;
    }
    setErrors({});
    setStep((s) => Math.min(s + 1, 8));
    scrollToTop();
  };

  const goBack = () => {
    setErrors({});
    setStep((s) => Math.max(s - 1, 1));
    scrollToTop();
  };

  const submit = async () => {
    if (!validateStep(8)) {
      scrollToTop();
      return;
    }
    setSubmitting(true);
    setServerError(null);
    try {
      const res = await submitDiagnostico({
        data: { answers: { ...answers, empresa_web: honeypot }, honeypot },
      });
      const newCodigo = res.codigo;

      if (newCodigo && files.length > 0) {
        const paths: string[] = [];
        for (const [index, file] of files.entries()) {
          const path = `${newCodigo}/${index}-${file.name}`;
          const { error } = await supabase.storage
            .from("diagnosticos-archivos")
            .upload(path, file, { upsert: true });
          if (!error) paths.push(path);
        }
        if (paths.length > 0) {
          await attachDiagnosticoArchivos({ data: { codigo: newCodigo, archivos: paths } });
        }
      }

      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // ignorar
      }
      setCodigo(newCodigo);
      setDone(true);
      scrollToTop();
    } catch {
      setServerError(
        "Ocurrió un error al enviar el diagnóstico. Por favor inténtelo de nuevo o escríbanos directamente por WhatsApp.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="border border-border bg-background p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          Diagnóstico enviado
        </p>
        <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">
          ¡Gracias! Hemos recibido su solicitud.
        </h2>
        {codigo ? (
          <p className="mt-4 text-base text-slate">
            Su referencia es{" "}
            <span className="font-bold text-navy">{codigo}</span>. El equipo de NAMAR GLOBAL le
            enviará una evaluación preliminar de viabilidad en 24–48 horas hábiles al correo que nos
            indicó.
          </p>
        ) : (
          <p className="mt-4 text-base text-slate">
            El equipo de NAMAR GLOBAL le enviará una evaluación preliminar de viabilidad en 24–48
            horas hábiles.
          </p>
        )}
        <a
          href={whatsappHref(
            `Hola, acabo de enviar el diagnóstico ${codigo ?? ""}`.trim(),
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-navy px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
        >
          Escribirnos por WhatsApp
        </a>
      </div>
    );
  }

  const progressBar = ((step - 1) / 8) * 100;

  return (
    <div ref={topRef}>
      {/* Barra de progreso */}
      <div className="border border-border bg-background px-5 py-4 sm:px-8">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-widest text-navy">
            Paso {step} de 8
          </p>
          <p className="text-xs font-medium uppercase tracking-widest text-slate">{STEPS[step - 1]}</p>
        </div>
        <div className="mt-3 h-1 w-full bg-sand-strong">
          <div
            className="h-1 bg-gold transition-all duration-500"
            style={{ width: `${Math.max(progressBar, 4)}%` }}
          />
        </div>
      </div>

      <div className="border border-t-0 border-border bg-sand px-5 py-8 sm:px-8 sm:py-10">
        {serverError ? (
          <p className="mb-6 border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
            {serverError}
          </p>
        ) : null}

        {/* ─── PASO 1 ─────────────────────────────────────────── */}
        {step === 1 ? (
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Nombre y apellidos" required error={errors["nombre"]}>
                <input
                  className={inputCls}
                  value={get("nombre")}
                  onChange={(e) => set("nombre", e.target.value)}
                  placeholder="Su nombre"
                />
              </Field>
              <Field label="Correo electrónico" required error={errors["email"]}>
                <input
                  type="email"
                  className={inputCls}
                  value={get("email")}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="usted@empresa.com"
                />
              </Field>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field
                label="WhatsApp / Teléfono"
                required
                error={errors["whatsapp"]}
                hint="Con su prefijo de país, por ejemplo +34 600 000 000"
              >
                <input
                  type="tel"
                  className={inputCls}
                  value={get("whatsapp")}
                  onChange={(e) => set("whatsapp", e.target.value)}
                  placeholder="+34 600 000 000"
                />
              </Field>
              <Field label="País de importación" required error={errors["pais"]}>
                <select
                  className={inputCls}
                  value={get("pais")}
                  onChange={(e) => set("pais", e.target.value)}
                >
                  <option value="" disabled>
                    Seleccione un país
                  </option>
                  {countries.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Ciudad" required error={errors["ciudad"]}>
                <input
                  className={inputCls}
                  value={get("ciudad")}
                  onChange={(e) => set("ciudad", e.target.value)}
                  placeholder="Su ciudad"
                />
              </Field>
              <Field label="¿Cómo va a importar?" required error={errors["perfil"]}>
                <select
                  className={inputCls}
                  value={get("perfil")}
                  onChange={(e) =>
                    set(
                      "perfil",
                      e.target.value,
                      e.target.value === "Emprendedor, aún sin empresa" ? ["empresa_cargo"] : [],
                    )
                  }
                >
                  <option value="" disabled>
                    Seleccione una opción
                  </option>
                  <option>Emprendedor, aún sin empresa</option>
                  <option>Tengo una empresa propia</option>
                  <option>Compro para una empresa (empleado / representante)</option>
                  <option>Compro para revender</option>
                  <option>Otro</option>
                </select>
              </Field>
            </div>
            {get("perfil") && get("perfil") !== "Emprendedor, aún sin empresa" ? (
              <Field label="Empresa y cargo" required error={errors["empresa_cargo"]}>
                <input
                  className={inputCls}
                  value={get("empresa_cargo")}
                  onChange={(e) => set("empresa_cargo", e.target.value)}
                  placeholder="Nombre de la empresa y su cargo"
                />
              </Field>
            ) : null}
            <Field label="¿Por dónde prefiere que le contactemos?" error={errors["contacto_pref"]}>
              <Options
                options={["WhatsApp", "Correo electrónico", "Llamada telefónica"]}
                value={get("contacto_pref")}
                onSelect={(o) => set("contacto_pref", o)}
              />
            </Field>
          </div>
        ) : null}

        {/* ─── PASO 2 ─────────────────────────────────────────── */}
        {step === 2 ? (
          <div className="space-y-8">
            <Field label="¿Qué experiencia tiene importando?" required error={errors["experiencia"]}>
              <Options
                options={[
                  "Nunca he importado",
                  "1–2 importaciones",
                  "Importo ocasionalmente",
                  "Importo regularmente",
                ]}
                value={get("experiencia")}
                onSelect={(o) => set("experiencia", o)}
              />
            </Field>
            <Field
              label="¿Está dado de alta o habilitado para importar en su país?"
              required
              error={errors["habilitado"]}
            >
              <Options
                options={["Sí", "No", "No lo sé"]}
                value={get("habilitado")}
                onSelect={(o) => set("habilitado", o)}
              />
            </Field>
            <Field label="¿Tiene agente de aduanas propio?" required error={errors["agencia"]}>
              <Options
                options={["Sí", "No", "No lo sé"]}
                value={get("agencia")}
                onSelect={(o) =>
                  set("agencia", o, o === "Sí" ? [] : ["coordinar_agencia"])
                }
              />
            </Field>
            {get("agencia") === "Sí" ? (
              <Field
                label="¿Quién coordina con su agente de aduanas?"
                required
                error={errors["coordinar_agencia"]}
              >
                <Options
                  options={["Sí, yo me encargo", "Prefiero que NAMAR coordine con él"]}
                  value={get("coordinar_agencia")}
                  onSelect={(o) => set("coordinar_agencia", o)}
                />
              </Field>
            ) : null}
          </div>
        ) : null}

        {/* ─── PASO 3 ─────────────────────────────────────────── */}
        {step === 3 ? (
          <div className="space-y-6">
            <Field label="¿Qué producto quiere importar?" required error={errors["producto"]}>
              <input
                className={inputCls}
                value={get("producto")}
                onChange={(e) => set("producto", e.target.value)}
                placeholder="Por ejemplo: lámparas de mesa para hogar"
              />
            </Field>
            <Field
              label="Descríbanos brevemente el producto"
              required
              error={errors["producto_desc"]}
              hint="Uso, características, modelo o referencia si la conoce"
            >
              <textarea
                rows={4}
                className={inputCls}
                value={get("producto_desc")}
                onChange={(e) => set("producto_desc", e.target.value)}
                placeholder="Descripción del producto"
              />
            </Field>
            <Field label="Categoría del producto" required error={errors["categoria"]}>
              <select
                className={inputCls}
                value={get("categoria")}
                onChange={(e) => set("categoria", e.target.value)}
              >
                <option value="" disabled>
                  Seleccione una categoría
                </option>
                {CATEGORIAS.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </Field>
            <Field
              label="Enlaces de referencia"
              error={errors["enlaces"]}
              hint="Alibaba, web de la fábrica, fotos de referencia… (opcional)"
            >
              <textarea
                rows={2}
                className={inputCls}
                value={get("enlaces")}
                onChange={(e) => set("enlaces", e.target.value)}
                placeholder="https://…"
              />
            </Field>
            <Field
              label="¿De qué materiales está hecho?"
              required
              error={errors["materiales"]}
              hint="Seleccione todas las que correspondan"
            >
              <Chips
                options={MATERIALES}
                value={getArr("materiales")}
                onToggle={(o) => toggle("materiales", o)}
              />
            </Field>
            <Field
              label="Medidas y peso aproximados"
              error={errors["medidas"]}
              hint="Opcional"
            >
              <input
                className={inputCls}
                value={get("medidas")}
                onChange={(e) => set("medidas", e.target.value)}
                placeholder="Por ejemplo: 30 × 20 × 15 cm, 1,2 kg"
              />
            </Field>
            <Field
              label="Fotos, fichas técnicas o documentos"
              error={errors["archivos"]}
              hint={`Hasta ${MAX_FILES} archivos · ${MAX_FILE_MB} MB cada uno · JPG, PNG, WEBP, PDF, XLSX, XLS, DOCX`}
            >
              <label className="flex cursor-pointer flex-col items-center justify-center gap-2 border border-dashed border-border bg-background px-6 py-8 text-center transition-colors hover:border-navy">
                <Upload className="size-5 text-navy" />
                <span className="text-sm font-medium text-navy">
                  Haga clic para añadir archivos
                </span>
                <span className="text-xs text-slate">
                  {files.length > 0 ? `${files.length} de ${MAX_FILES} archivos añadidos` : "Opcional"}
                </span>
                <input
                  type="file"
                  multiple
                  className="hidden"
                  accept=".jpg,.jpeg,.png,.webp,.pdf,.xlsx,.xls,.docx"
                  onChange={(e) => addFiles(e.target.files)}
                />
              </label>
              {files.length > 0 ? (
                <ul className="mt-3 space-y-2">
                  {files.map((file, index) => (
                    <li
                      key={`${file.name}-${index}`}
                      className="flex items-center justify-between gap-3 border border-border bg-background px-4 py-2"
                    >
                      <span className="truncate text-sm text-slate">{file.name}</span>
                      <button
                        type="button"
                        aria-label={`Quitar ${file.name}`}
                        onClick={() => setFiles((prev) => prev.filter((_, i) => i !== index))}
                        className="shrink-0 text-slate hover:text-destructive"
                      >
                        <X className="size-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Field>
          </div>
        ) : null}

        {/* ─── PASO 4 ─────────────────────────────────────────── */}
        {step === 4 ? (
          <div className="space-y-8">
            <Field
              label="¿Su producto tiene alguna de estas características?"
              required
              error={errors["requisitos"]}
              hint="Seleccione todas las que correspondan. Si no aplica ninguna, marque “Ninguna de las anteriores”."
            >
              <Chips
                options={REQUISITOS}
                value={getArr("requisitos")}
                onToggle={(o) =>
                  toggle(
                    "requisitos",
                    o,
                    ["voltaje", "tipo_bateria", "viaje_bateria", "docs_bateria", "certificados"],
                  )
                }
              />
            </Field>
            {getArr("requisitos").includes("Tiene enchufe o cable (electricidad)") ? (
              <Field label="¿Qué voltaje necesita?" required error={errors["voltaje"]}>
                <Options
                  options={["110–120 V", "220–240 V", "Conmutable (110 / 220 V)", "No lo sé"]}
                  value={get("voltaje")}
                  onSelect={(o) => set("voltaje", o)}
                />
              </Field>
            ) : null}
            {getArr("requisitos").includes("Tiene batería") ? (
              <>
                <Field label="¿Qué tipo de batería lleva?" required error={errors["tipo_bateria"]}>
                  <Options
                    options={[
                      "Ion-litio",
                      "Polímero de litio",
                      "Plomo-ácido",
                      "Otra",
                      "No lo sé",
                    ]}
                    value={get("tipo_bateria")}
                    onSelect={(o) => set("tipo_bateria", o)}
                  />
                </Field>
                <Field
                  label="¿Cómo viaja la batería?"
                  required
                  error={errors["viaje_bateria"]}
                >
                  <Options
                    options={[
                      "Instalada en el producto",
                      "Con el producto, sin instalar",
                      "Envío solo las baterías",
                      "No lo sé",
                    ]}
                    value={get("viaje_bateria")}
                    onSelect={(o) => set("viaje_bateria", o)}
                  />
                </Field>
                <Field
                  label="¿Tiene documentos de la batería?"
                  required
                  error={errors["docs_bateria"]}
                  hint="Seleccione todas las que correspondan"
                >
                  <Chips
                    options={[
                      "Ficha de seguridad (MSDS)",
                      "Informe UN 38.3",
                      "Test summary",
                      "Ninguno",
                      "No lo sé",
                    ]}
                    value={getArr("docs_bateria")}
                    onToggle={(o) => toggle("docs_bateria", o)}
                  />
                </Field>
              </>
            ) : null}
            {getArr("requisitos").some((r) =>
              [
                "Contacto con alimentos o bebidas",
                "Se aplica sobre la piel o es cosmético",
                "Uso médico, sanitario o de protección",
                "Para niños menores de 14 años",
                "Contiene químicos, líquidos, gases, polvos, imanes, madera o materiales de origen animal",
              ].includes(r),
            ) ? (
              <Field
                label="¿Qué certificados necesita o tiene?"
                required
                error={errors["certificados"]}
                hint="Seleccione todas las que correspondan"
              >
                <Chips
                  options={["CE", "FDA", "RoHS", "Reach", "Otras", "No lo sé"]}
                  value={getArr("certificados")}
                  onToggle={(o) => toggle("certificados", o)}
                />
              </Field>
            ) : null}
            <Field
              label="¿Algo más que debamos saber sobre el producto?"
              error={errors["uso_especial"]}
              hint="Opcional"
            >
              <textarea
                rows={3}
                className={inputCls}
                value={get("uso_especial")}
                onChange={(e) => set("uso_especial", e.target.value)}
                placeholder="Cuéntenos cualquier detalle relevante"
              />
            </Field>
          </div>
        ) : null}

        {/* ─── PASO 5 ─────────────────────────────────────────── */}
        {step === 5 ? (
          <div className="space-y-8">
            <Field label="¿Ya tiene proveedor?" required error={errors["proveedor"]}>
              <Options
                options={[
                  "Sí, ya tengo proveedor",
                  "No, necesito que NAMAR lo busque",
                  "No estoy seguro",
                ]}
                value={get("proveedor")}
                onSelect={(o) =>
                  set(
                    "proveedor",
                    o,
                    o === "Sí, ya tengo proveedor" ? [] : ["proveedor_info", "tipo_proveedor", "pagado", "precio_objetivo"],
                  )
                }
              />
            </Field>
            {get("proveedor") === "Sí, ya tengo proveedor" ? (
              <>
                <Field
                  label="Nombre o enlace del proveedor"
                  required
                  error={errors["proveedor_info"]}
                >
                  <textarea
                    rows={2}
                    className={inputCls}
                    value={get("proveedor_info")}
                    onChange={(e) => set("proveedor_info", e.target.value)}
                    placeholder="Nombre de la fábrica, enlace de Alibaba, ciudad…"
                  />
                </Field>
                <Field
                  label="¿Con qué tipo de proveedor habla?"
                  required
                  error={errors["tipo_proveedor"]}
                >
                  <Options
                    options={["Fábrica directa", "Trading o intermediario", "No lo sé"]}
                    value={get("tipo_proveedor")}
                    onSelect={(o) => set("tipo_proveedor", o)}
                  />
                </Field>
                <Field label="¿Ha pagado algo ya?" required error={errors["pagado"]}>
                  <Options
                    options={["No, aún no he pagado", "Sí, un anticipo", "Sí, el pago completo"]}
                    value={get("pagado")}
                    onSelect={(o) => set("pagado", o)}
                  />
                </Field>
                <Field
                  label="¿Qué precio tiene o busca por unidad?"
                  error={errors["precio_objetivo"]}
                  hint="Opcional"
                >
                  <input
                    className={inputCls}
                    value={get("precio_objetivo")}
                    onChange={(e) => set("precio_objetivo", e.target.value)}
                    placeholder="Por ejemplo: 4,50 USD/unidad"
                  />
                </Field>
              </>
            ) : null}
          </div>
        ) : null}

        {/* ─── PASO 6 ─────────────────────────────────────────── */}
        {step === 6 ? (
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="¿Cuántas unidades quiere comprar?" required error={errors["cantidad"]}>
                <input
                  type="number"
                  min={1}
                  className={inputCls}
                  value={get("cantidad")}
                  onChange={(e) => set("cantidad", e.target.value)}
                  placeholder="Cantidad"
                />
              </Field>
              <Field label="Unidad" required error={errors["unidad"]}>
                <select
                  className={inputCls}
                  value={get("unidad")}
                  onChange={(e) => set("unidad", e.target.value)}
                >
                  <option value="" disabled>
                    Seleccione
                  </option>
                  {["Piezas", "Cajas", "Kilogramos", "Metros", "Contenedores"].map((u) => (
                    <option key={u}>{u}</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="Presupuesto estimado de compra" required error={errors["presupuesto"]}>
              <Options
                options={[
                  "Menos de 3.000 USD",
                  "3.000–15.000 USD",
                  "15.000–25.000 USD",
                  "25.000–50.000 USD",
                  "Más de 50.000 USD",
                  "Aún no lo he definido",
                ]}
                value={get("presupuesto")}
                onSelect={(o) => set("presupuesto", o)}
                cols="sm:grid-cols-3"
              />
            </Field>
            <Field
              label="¿El dinero para esta compra está disponible?"
              required
              error={errors["disponibilidad"]}
            >
              <Options
                options={[
                  "Sí, ya disponible",
                  "En menos de 3 meses",
                  "Depende de financiación o aprobación",
                  "No está definido",
                ]}
                value={get("disponibilidad")}
                onSelect={(o) => set("disponibilidad", o)}
              />
            </Field>
            <Field
              label="¿Cuánto ha importado en los últimos 12 meses?"
              required
              error={errors["compras12"]}
            >
              <Options
                options={[
                  "Nada",
                  "Menos de 10.000 USD",
                  "10.000–50.000 USD",
                  "50.000–150.000 USD",
                  "Más de 150.000 USD",
                  "No lo sé",
                ]}
                value={get("compras12")}
                onSelect={(o) => set("compras12", o)}
                cols="sm:grid-cols-3"
              />
            </Field>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="¿Cuándo quiere importar?" required error={errors["cuando"]}>
                <Options
                  options={[
                    "Lo antes posible",
                    "En 1–2 meses",
                    "En 3–6 meses",
                    "En más de 6 meses",
                    "Aún sin fecha",
                  ]}
                  value={get("cuando")}
                  onSelect={(o) => set("cuando", o)}
                />
              </Field>
              <Field label="Fecha límite" error={errors["fecha_limite"]} hint="Opcional">
                <input
                  type="date"
                  min={new Date().toISOString().slice(0, 10)}
                  className={inputCls}
                  value={get("fecha_limite")}
                  onChange={(e) => set("fecha_limite", e.target.value)}
                />
              </Field>
            </div>
          </div>
        ) : null}

        {/* ─── PASO 7 ─────────────────────────────────────────── */}
        {step === 7 ? (
          <div className="space-y-8">
            <Field label="¿Cómo encaja su marca en este proyecto?" required error={errors["marca"]}>
              <Options
                options={[
                  "Todavía sin marca",
                  "Tengo marca y quiero productos propios",
                  "Tengo marca y quiero personalizar un producto existente",
                  "Quiero comprar un producto que ya existe",
                ]}
                value={get("marca")}
                onSelect={(o) =>
                  set(
                    "marca",
                    o,
                    o === "Tengo marca y quiero productos propios" ||
                      o === "Tengo marca y quiero personalizar un producto existente"
                      ? []
                      : ["personalizar"],
                  )
                }
              />
            </Field>
            {get("marca") === "Tengo marca y quiero productos propios" ||
            get("marca") === "Tengo marca y quiero personalizar un producto existente" ? (
              <Field
                label="¿Qué quiere personalizar?"
                required
                error={errors["personalizar"]}
                hint="Seleccione todas las que correspondan"
              >
                <Chips
                  options={["Logo", "Etiqueta y packaging", "Color o material", "Diseño propio (OEM / ODM)", "Otro"]}
                  value={getArr("personalizar")}
                  onToggle={(o) => toggle("personalizar", o)}
                />
              </Field>
            ) : null}
            <Field
              label="Incoterm preferido"
              required
              error={errors["incoterm"]}
              hint="Si no lo sabe, marque “No lo sé”: lo definimos juntos"
            >
              <Options
                options={["No lo sé", "EXW", "FOB", "CIF", "DDP"]}
                value={get("incoterm")}
                onSelect={(o) => set("incoterm", o)}
                cols="sm:grid-cols-5"
              />
            </Field>
            <Field label="Transporte preferido" required error={errors["transporte"]}>
              <Options
                options={[
                  "No lo sé",
                  "Barco (marítimo)",
                  "Avión (aéreo)",
                  "Ferrocarril",
                  "Barco rápido o courier",
                ]}
                value={get("transporte")}
                onSelect={(o) => set("transporte", o)}
              />
            </Field>
          </div>
        ) : null}

        {/* ─── PASO 8 ─────────────────────────────────────────── */}
        {step === 8 ? (
          <div className="space-y-8">
            <Field label="¿En qué etapa está su proyecto?" required error={errors["etapa"]}>
              <Options
                options={[
                  "Solo tengo una idea",
                  "Estoy buscando proveedores",
                  "Ya tengo proveedores o cotizaciones",
                  "Ya tengo muestras",
                  "Estoy listo para comprar",
                  "Ya compré y necesito gestionar el envío",
                  "La mercancía ya está en tránsito",
                  "Importo regularmente y busco un partner en origen",
                ]}
                value={get("etapa")}
                onSelect={(o) => set("etapa", o)}
              />
            </Field>
            <Field
              label="¿Con qué quiere que le ayude NAMAR?"
              required
              error={errors["servicios"]}
              hint="Seleccione todas las que correspondan"
            >
              <Chips
                options={SERVICIOS}
                value={getArr("servicios")}
                onToggle={(o) => toggle("servicios", o)}
              />
            </Field>
            <Field
              label="¿Qué espera de este proyecto?"
              error={errors["expectativas"]}
              hint="Opcional"
            >
              <textarea
                rows={4}
                className={inputCls}
                value={get("expectativas")}
                onChange={(e) => set("expectativas", e.target.value)}
                placeholder="Cuéntenos en pocas palabras qué espera conseguir"
              />
            </Field>
            <Field label="¿Cómo conoció NAMAR?" required error={errors["como_conocio"]}>
              <Options
                options={[
                  "Google",
                  "Redes sociales (Instagram / Facebook)",
                  "WhatsApp",
                  "Recomendación de otra persona",
                  "Otro",
                ]}
                value={get("como_conocio")}
                onSelect={(o) => set("como_conocio", o)}
              />
            </Field>
            <div className="space-y-4">
              <label className="flex cursor-pointer items-start gap-3 text-sm text-slate">
                <input
                  type="checkbox"
                  className="mt-0.5 size-4 shrink-0 accent-[oklch(0.712_0.084_82)]"
                  checked={get("acepta1") === "sí"}
                  onChange={(e) => set("acepta1", e.target.checked ? "sí" : "")}
                />
                <span>
                  Sí, quiero la evaluación preliminar de viabilidad en 24–48 horas hábiles.
                </span>
              </label>
              {errors["acepta1"] ? (
                <p className="text-xs font-medium text-destructive">{errors["acepta1"]}</p>
              ) : null}
              <label className="flex cursor-pointer items-start gap-3 text-sm text-slate">
                <input
                  type="checkbox"
                  className="mt-0.5 size-4 shrink-0 accent-[oklch(0.712_0.084_82)]"
                  checked={get("acepta2") === "sí"}
                  onChange={(e) => set("acepta2", e.target.checked ? "sí" : "")}
                />
                <span>
                  Autorizo a NAMAR Global a tratar mis datos para evaluar y gestionar mi solicitud,
                  según la{" "}
                  <a href="/privacidad" className="font-semibold text-navy underline" target="_blank" rel="noopener noreferrer">
                    Política de privacidad
                  </a>
                  .
                </span>
              </label>
              {errors["acepta2"] ? (
                <p className="text-xs font-medium text-destructive">{errors["acepta2"]}</p>
              ) : null}
            </div>
            {/* Honeypot antispam: invisible para personas */}
            <div className="hidden" aria-hidden="true">
              <label>
                No rellene este campo
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </label>
            </div>
          </div>
        ) : null}

        {/* Navegación */}
        <div className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-6">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 1 || submitting}
            className="inline-flex items-center gap-2 border border-border px-5 py-3 text-xs font-semibold uppercase tracking-widest text-navy transition-colors hover:border-navy disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="size-4" />
            Anterior
          </button>
          {step < 8 ? (
            <button
              type="button"
              onClick={goNext}
              disabled={submitting}
              className="inline-flex items-center gap-2 bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-widest text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              Siguiente
              <ChevronRight className="size-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              disabled={submitting}
              className="inline-flex items-center gap-2 bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-widest text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Enviando…
                </>
              ) : (
                "Enviar diagnóstico"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
