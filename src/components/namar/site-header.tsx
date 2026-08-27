import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#nosotros", label: "Por qué NAMAR" },
  { href: "#perfiles", label: "Para quién" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
          <a
            href="#contacto"
            className="hidden bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-widest text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground sm:inline-block"
          >
            Habla con un experto
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
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
            <li>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-2 block bg-navy px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest text-navy-foreground"
              >
                Habla con un experto
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
