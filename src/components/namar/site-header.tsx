import { Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { getPreferredLanguage } from "@/i18n";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const links = [
    { href: "#servicios", label: t("nav.services") },
    { href: "#costes", label: t("nav.costs") },
    { href: "#proceso", label: t("nav.process") },
    { href: "#equipo", label: t("nav.team") },
    { href: "#rutas", label: t("nav.routes") },
    { href: "#faq", label: t("nav.faq") },
    { href: "#contacto", label: t("nav.contact") },
  ];

  // Switch to the visitor's preferred language only after the page has
  // hydrated, so server HTML (always "es") matches the first client render.
  useEffect(() => {
    const preferred = getPreferredLanguage();
    if (preferred !== i18n.language) {
      void i18n.changeLanguage(preferred);
    }
  }, [i18n]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleChangeLanguage = (language: "es" | "en") => {
    void i18n.changeLanguage(language);
    setLanguageOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-20">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="grid size-7 place-items-center bg-navy text-xs font-bold tracking-tighter text-navy-foreground sm:size-8 sm:text-sm">
            N
          </span>
          <span className="text-base font-bold uppercase tracking-tight sm:text-xl">
            Namar <span className="text-gold">Global</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-navy">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <button
              type="button"
              aria-label={t("header.language")}
              onClick={() => setLanguageOpen((value) => !value)}
              className="inline-flex items-center gap-2 border border-border bg-background px-3 py-2 text-xs font-semibold uppercase tracking-widest text-navy"
            >
              <Globe className="size-4" />
              {i18n.language.startsWith("en") ? "EN" : "ES"}
            </button>

            {languageOpen ? (
              <div className="absolute right-0 top-full z-10 mt-2 min-w-32 border border-border bg-background shadow-panel">
                <button
                  type="button"
                  onClick={() => handleChangeLanguage("es")}
                  className="block w-full border-b border-border px-4 py-2 text-left text-sm hover:bg-sand"
                >
                  {t("header.languageEs")}
                </button>
                <button
                  type="button"
                  onClick={() => handleChangeLanguage("en")}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-sand"
                >
                  {t("header.languageEn")}
                </button>
              </div>
            ) : null}
          </div>

          <a
            href="#contacto"
            className="hidden bg-navy px-5 py-3 text-xs font-semibold uppercase tracking-widest text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground md:inline-block"
          >
            {t("header.cta")}
          </a>
          <button
            type="button"
            aria-label={open ? t("header.menuClose") : t("header.menuOpen")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 flex-col items-center justify-center gap-1.5 border border-border lg:hidden"
          >
            <span
              className={cn(
                "block h-px w-5 bg-navy transition-transform",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-navy transition-transform",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {open ? (
        <nav className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background px-5 py-5 sm:px-6 lg:hidden">
          <ul className="flex flex-col gap-3.5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-0.5 text-base font-medium text-slate transition-colors hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex items-center justify-between gap-3 border-t border-border pt-4">
              <span className="text-sm font-medium text-slate">{t("header.language")}</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleChangeLanguage("es")}
                  className={cn(
                    "border px-3 py-2 text-xs font-semibold uppercase tracking-widest",
                    i18n.language === "es" ? "border-navy bg-navy text-navy-foreground" : "border-border",
                  )}
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => handleChangeLanguage("en")}
                  className={cn(
                    "border px-3 py-2 text-xs font-semibold uppercase tracking-widest",
                    i18n.language === "en" ? "border-navy bg-navy text-navy-foreground" : "border-border",
                  )}
                >
                  EN
                </button>
              </div>
            </li>
            <li>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-1 block bg-navy px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-widest text-navy-foreground"
              >
                {t("header.cta")}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
