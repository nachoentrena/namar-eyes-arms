import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { siteConfig } from "@/lib/site-config";
import { Link } from "@tanstack/react-router";


const fieldClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";

export function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
 function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { success?: boolean };
      if (response.ok && result.success) {
        form.reset();
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
      <div className="rounded-[24px] border border-border bg-card p-10 text-center">
        <p className="font-serif text-3xl text-navy">{t("contact.form.sentTitle")}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          ¡Gracias! Hemos recibido tu solicitud de importación y te contactaremos pronto.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 min-h-12 rounded-full border-[1.5px] border-navy px-6 py-3 text-[15px] font-semibold text-navy transition-colors hover:bg-navy hover:text-navy-foreground"
        >
          {t("contact.form.sentButton")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
      <p className="text-sm text-muted-foreground md:col-span-2">
        ¿Quieres una valoración completa?{" "}
        <Link to="/diagnostico" className="font-semibold text-navy underline underline-offset-4 decoration-gold">
          Haz el diagnóstico gratuito
        </Link>
      </p>
      <input type="hidden" name="access_key" value={siteConfig.web3formsAccessKey} />
      <input type="hidden" name="subject" value="Nueva solicitud de importación — NAMAR Global" />
      <input type="hidden" name="from_name" value="Web NAMAR Global" />
      <div className="flex flex-col gap-2">
        <label htmlFor="nombre" className="text-[13px] font-semibold text-muted-foreground">
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
        <label htmlFor="email" className="text-[13px] font-semibold text-muted-foreground">
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
        <label htmlFor="telefono" className="text-[13px] font-semibold text-muted-foreground">
          {t("contact.form.phone")}
        </label>
        <input
            id="telefono"
            name="whatsapp"
            type="tel"
            className={fieldClass}
            placeholder={t("contact.form.phonePlaceholder")}
          />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="mensaje" className="text-[13px] font-semibold text-muted-foreground">
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
        <p className="text-sm font-medium text-terracotta-deep md:col-span-2">
          Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo o escríbenos directamente por WhatsApp.
        </p>
      )}
      <div className="flex items-start gap-3 md:col-span-2">
        <input
          id="acepta_privacidad"
          name="acepta_privacidad"
          type="checkbox"
          required
          value="Sí"
          className="mt-0.5 size-4 shrink-0 accent-navy"
        />
        <label htmlFor="acepta_privacidad" className="text-xs leading-relaxed text-muted-foreground">
          He leído y acepto la{" "}
          <Link to="/politica-privacidad" target="_blank" className="font-semibold text-navy underline">
            política de privacidad
          </Link>
          .
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 min-h-12 rounded-full bg-navy px-8 py-3 text-[15px] font-semibold text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
      >
        {status === "sending" ? "Enviando..." : t("contact.form.submit")}
      </button>
      <p className="text-xs text-muted-foreground/70 md:col-span-2">
        Respondemos en un máximo de 24 h laborables.
      </p>
    </form>
  );
}
