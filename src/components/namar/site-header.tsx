import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { ContactDialog } from "./contact-dialog";

export function SiteHeader() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();
  const home = pathname === "/" ? "" : "/";

  const links = [
    { href: `${home}#servicios`, label: t("nav.services") },
    { href: `${home}#proceso`, label: t("nav.process") },
    { href: `${home}#costes`, label: t("nav.costs") },
    { href: `${home}#equipo`, label: t("nav.team") },
    { href: `${home}#faq`, label: t("nav.faq") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <ContactDialog>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-background transition-shadow",
        (scrolled || open) && "shadow-[0_4px_20px_-8px_color-mix(in_oklab,var(--navy)_25%,transparent)]",
      )}
    >
      <div className="mx-auto grid h-[72px] max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-5 sm:px-6">
        <a href={`${home}#inicio`} className="flex shrink-0 items-center py-2">
          <img
            src="/brand/logotipo-azul.png"
            alt="NAMAR Global"
            width={1012}
            height={350}
            className="h-9 w-auto sm:h-10"
          />
        </a>

        <nav className="hidden items-center justify-center gap-5 min-[1200px]:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[15px] font-medium text-navy underline-offset-[6px] decoration-gold decoration-1 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="col-start-3 flex items-center justify-end gap-3">
          <DialogTrigger asChild>
            <Button variant="outline" className="hidden h-11 rounded-full border-[1.5px] border-navy bg-transparent px-6 font-sans text-[15px] font-semibold text-navy shadow-none min-[1200px]:inline-flex">Contáctanos</Button>
          </DialogTrigger>
          <a
            href="/diagnostico"
            className="hidden min-h-11 items-center whitespace-nowrap rounded-full bg-navy px-6 text-[15px] font-semibold text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground min-[1200px]:inline-flex"
          >
            {t("header.cta")}
          </a>
          <button
            type="button"
            aria-label={open ? t("header.menuClose") : t("header.menuOpen")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border min-[1200px]:hidden"
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
        <nav className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-border bg-background px-5 py-5 sm:px-6 min-[1200px]:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-3.5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-0.5 text-base font-medium text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <DialogTrigger asChild>
                <Button variant="outline" onClick={() => setOpen(false)} className="h-12 w-full rounded-full border-[1.5px] border-navy bg-transparent px-6 font-sans text-[15px] font-semibold text-navy shadow-none">Contáctanos</Button>
              </DialogTrigger>
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
    </ContactDialog>
  );
}
