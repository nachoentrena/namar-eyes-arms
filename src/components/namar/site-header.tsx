import { useLocation } from "@tanstack/react-router";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { getPreferredLanguage } from "@/i18n";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const { pathname } = useLocation();
  const home = pathname === "/" ? "" : "/";

  const links = [
    { href: `${home}#servicios`, label: t("nav.services") },
    { href: `${home}#costes`, label: t("nav.costs") },
    { href: `${home}#proceso`, label: t("nav.process") },
    { href: `${home}#equipo`, label: t("nav.team") },

    { href: `${home}#faq`, label: t("nav.faq") },
    { href: `${home}#contacto`, label: t("nav.contact") },
    { href: "/diagnostico", label: t("nav.diagnostico") },
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
    <header className="fixed inset-x-3 top-3 z-50 sm:inset-x-5 sm:top-4">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 rounded-[18px] border border-border bg-background/95 px-4 backdrop-blur-md sm:h-16 sm:px-5">
        <a href={`${home}#inicio`} className="flex items-center">
          <img
            src="/brand/logotipo-azul.png"
            alt="NAMAR Global"
            width={1012}
            height={350}
            className="h-9 w-auto sm:h-10"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-navy lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-gold-deep">
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
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-2 text-xs font-semibold uppercase tracking-widest text-navy"
            >
              <Globe className="size-4" />
              {i18n.language.startsWith("en") ? "EN" : "ES"}
            </button>

            {languageOpen ? (
              <div className="absolute right-0 top-full z-10 mt-2 min-w-32 overflow-hidden rounded-xl border border-border bg-background shadow-panel">
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
            href="/diagnostico"
            className="hidden min-h-12 items-center rounded-full bg-navy px-6 text-[15px] font-semibold text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground md:inline-flex"
          >
            {t("header.cta")}
          </a>
          <button
            type="button"
            aria-label={open ? t("header.menuClose") : t("header.menuOpen")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border lg:hidden"
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
        <nav className="mx-auto mt-2 max-h-[calc(100dvh-5rem)] max-w-7xl overflow-y-auto rounded-[18px] border border-border bg-background px-5 py-5 shadow-panel sm:px-6 lg:hidden">
          <ul className="flex flex-col gap-3.5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-0.5 text-base font-medium text-navy transition-colors hover:text-gold-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex items-center justify-between gap-3 border-t border-border pt-4">
              <span className="text-sm font-medium text-muted-foreground">
                {t("header.language")}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleChangeLanguage("es")}
                  className={cn(
                    "rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-widest",
                    i18n.language === "es" ? "border-navy bg-navy text-navy-foreground" : "border-border",
                  )}
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => handleChangeLanguage("en")}
                  className={cn(
                    "rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-widest",
                    i18n.language === "en" ? "border-navy bg-navy text-navy-foreground" : "border-border",
                  )}
                >
                  EN
                </button>
              </div>
            </li>
            <li>
              <a
                href="/diagnostico"
                onClick={() => setOpen(false)}
                className="mt-1 block min-h-12 rounded-full bg-navy px-6 py-3.5 text-center text-[15px] font-semibold text-navy-foreground"
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
