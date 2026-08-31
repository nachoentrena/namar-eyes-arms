import { Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const links = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#servicios", label: t("nav.services") },
    { href: "#proceso", label: t("nav.process") },
    { href: "#nosotros", label: t("nav.about") },
    { href: "#perfiles", label: t("nav.profiles") },
    { href: "#faq", label: t("nav.faq") },
    { href: "#contacto", label: t("nav.contact") },
  ];

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
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="grid size-8 place-items-center bg-navy text-sm font-bold tracking-tighter text-navy-foreground">
            N
          </span>
          <span className="text-xl font-bold uppercase tracking-tight">
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
            className="hidden bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-widest text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground sm:inline-block"
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
        <nav className="border-t border-border bg-background px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-slate transition-colors hover:text-navy"
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
                className="mt-2 block bg-navy px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest text-navy-foreground"
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
