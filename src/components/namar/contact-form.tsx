import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";

const fieldClass =
  "w-full border border-border bg-sand px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-slate/70 focus:border-gold";

export function ContactForm() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-border bg-sand p-10 text-center">
        <p className="font-serif text-3xl italic text-navy">{t("contact.form.sentTitle")}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate">{t("contact.form.sentText")}</p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 border border-border px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-navy hover:text-navy-foreground"
        >
          {t("contact.form.sentButton")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
        <label htmlFor="telefono" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          {t("contact.form.phone")}
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          className={fieldClass}
          placeholder={t("contact.form.phonePlaceholder")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="pais" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          {t("contact.form.country")}
        </label>
        <select
          id="pais"
          name="pais"
          className={fieldClass}
          defaultValue={t("contact.form.countrySpain")}
        >
          <option>{t("contact.form.countrySpain")}</option>
          <option>{t("contact.form.countryColombia")}</option>
          <option>{t("contact.form.countryOther")}</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="producto" className="text-[11px] font-bold uppercase tracking-widest text-slate">
          {t("contact.form.product")}
        </label>
        <input
          id="producto"
          name="producto"
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
          name="volumen"
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
      <button
        type="submit"
        className="bg-navy px-8 py-4 text-xs font-bold uppercase tracking-widest text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground md:col-span-2"
      >
        {t("contact.form.submit")}
      </button>
    </form>
  );
}
