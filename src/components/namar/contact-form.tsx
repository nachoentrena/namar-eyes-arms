import { useState, type FormEvent } from "react";

const fieldClass =
  "w-full border border-border bg-sand px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-slate/70 focus:border-gold";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-border bg-sand p-10 text-center">
        <p className="font-serif text-3xl italic text-navy">Gracias por escribirnos.</p>
        <p className="mt-4 text-sm leading-relaxed text-slate">
          Hemos recibido tu consulta. Revisaremos tu proyecto y te contactaremos con los siguientes
          pasos.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 border border-border px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-navy hover:text-navy-foreground"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="nombre" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          Nombre
        </label>
        <input id="nombre" name="nombre" required className={fieldClass} placeholder="Tu nombre" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="empresa" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          Empresa
        </label>
        <input id="empresa" name="empresa" className={fieldClass} placeholder="Nombre de la empresa" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={fieldClass}
          placeholder="email@empresa.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="telefono" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          WhatsApp / Teléfono
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          className={fieldClass}
          placeholder="+34 / +57 ..."
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="pais" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          País
        </label>
        <select id="pais" name="pais" className={fieldClass} defaultValue="España">
          <option>España</option>
          <option>Colombia</option>
          <option>Otro</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="producto" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          ¿Qué quieres importar?
        </label>
        <input
          id="producto"
          name="producto"
          className={fieldClass}
          placeholder="Ej: maquinaria, textil, componentes"
        />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="volumen" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          Volumen aproximado
        </label>
        <input
          id="volumen"
          name="volumen"
          className={fieldClass}
          placeholder="Ej: 1 contenedor / 500 unidades"
        />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="mensaje" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          className={fieldClass}
          placeholder="Cuéntanos qué necesitas y en qué punto está tu proyecto."
        />
      </div>
      <button
        type="submit"
        className="bg-navy px-8 py-4 text-xs font-bold uppercase tracking-widest text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground md:col-span-2"
      >
        Enviar consulta
      </button>
    </form>
  );
}
