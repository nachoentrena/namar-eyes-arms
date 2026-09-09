import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { siteConfig } from "@/lib/site-config";
import { countries } from "@/lib/countries";

const fieldClass =
  "w-full border border-border bg-sand px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-slate/70 focus:border-gold";

export function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [country, setCountry] = useState("");
  const [dialCode, setDialCode] = useState("");

  function handleCountryChange(event: ChangeEvent<HTMLSelectElement>) {
    const selected = event.target.value;
    setCountry(selected);
    const match = countries.find((c) => c.name === selected);
    setDialCode(match?.dial ?? "");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    const data = Object.fromEntries(new FormData(form));
    const digits = String(data["whatsapp"] ?? "").trim();
    if (digits) {
      data["whatsapp"] = `${dialCode} ${digits}`;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { success?: boolean };
      if (response.ok && result.success) {
        form.reset();
        setCountry("");
        setDialCode("");
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-border bg-sand p-10 text-center">
        <p className="font-serif text-3xl italic text-navy">{t("contact.form.sentTitle")}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate">
          ¡Gracias! Hemos recibido tu solicitud de importación y te contactaremos pronto.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 border border-border px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-navy hover:text-navy-foreground"
        >
          {t("contact.form.sentButton")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
      <input type="hidden" name="access_key" value={siteConfig.web3formsAccessKey} />
      <input type="hidden" name="subject" value="Nueva solicitud de importación — NAMAR Global" />
      <input type="hidden" name="from_name" value="Web NAMAR Global" />
      <div className="flex flex-col gap-2">
        <label htmlFor="nombre" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          {t("contact.form.name")}
        </label>
        <input
          id="nombre"
          name="nombre"
          required
          className={fieldClass}
          placeholder={t("contact.form.namePlaceholder")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="empresa" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          {t("contact.form.company")}
        </label>
        <input
          id="empresa"
          name="empresa"
          className={fieldClass}
          placeholder={t("contact.form.companyPlaceholder")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          {t("contact.form.email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={fieldClass}
          placeholder={t("contact.form.emailPlaceholder")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="pais" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          {t("contact.form.country")}
        </label>
        <select
          id="pais"
          name="pais_destino"
          className={fieldClass}
          value={country}
          onChange={handleCountryChange}
        >
          <option value="" disabled>
            Selecciona un país
          </option>
          {countries.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="telefono" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          {t("contact.form.phone")}
        </label>
        <div className="flex gap-2">
          <span className="flex w-20 shrink-0 items-center justify-center border border-border bg-sand px-2 text-sm font-semibold text-navy">
            {dialCode || "—"}
          </span>
          <input
            id="telefono"
            name="whatsapp"
            type="tel"
            className={fieldClass}
            placeholder={t("contact.form.phonePlaceholder")}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="producto" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          {t("contact.form.product")}
        </label>
        <input
          id="producto"
          name="producto"
          required
          className={fieldClass}
          placeholder={t("contact.form.productPlaceholder")}
        />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="volumen" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          {t("contact.form.volume")}
        </label>
        <input
          id="volumen"
          name="cantidad_aproximada"
          className={fieldClass}
          placeholder={t("contact.form.volumePlaceholder")}
        />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="mensaje" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          {t("contact.form.message")}
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          className={fieldClass}
          placeholder={t("contact.form.messagePlaceholder")}
        />
      </div>
      {status === "error" && (
        <p className="text-sm font-medium text-red-700 md:col-span-2">
          Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo o escríbenos directamente por WhatsApp.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 bg-navy px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground disabled:cursor-not-allowed disabled:opacity-60 sm:py-4 md:col-span-2"
      >
        {status === "sending" ? "Enviando..." : t("contact.form.submit")}
      </button>
    </form>
  );
}
