import type { ReactNode } from "react";
import { SiteHeader } from "@/components/namar/site-header";
import { SiteFooter } from "@/components/namar/site-footer";
import ship from "@/assets/namar-hero-barco.webp.asset.json";

export function GuiasShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground"><SiteHeader /><main className="pt-[72px]">{children}</main><SiteFooter /></div>;
}
export function GuiasBanner({ title, subtitle }: { title: string; subtitle: string }) {
  return <header className="relative isolate flex min-h-[290px] items-center justify-center overflow-hidden bg-navy px-5 py-14 text-center text-navy-foreground">
    <img src={ship.url} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover grayscale" />
    <div className="absolute inset-0 -z-10 bg-navy/95" />
    <div className="max-w-3xl"><h1 className="font-serif text-[42px] leading-tight sm:text-5xl">{title}</h1><p className="mt-5 text-lg">{subtitle}</p></div>
  </header>;
}
