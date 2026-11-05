import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { GuiaCard } from "@/components/namar/guia-card";
import { GuiasShell, GuiasBanner } from "@/components/namar/guias-shell";
import { sortedGuias, guiaCategories, categoryGuias } from "@/lib/guias";
import { siteConfig } from "@/lib/site-config";

const title = "Guías para importar desde China | NAMAR Global";
const description = "Guías prácticas sobre proveedores, calidad, costes, pagos y aduanas para importar desde China a España y Colombia.";
export const Route = createFileRoute("/guias/")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: `${siteConfig.siteUrl}/guias` }], links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/guias` }] }),
  component: GuiasPage,
});
function GuiasPage() {
  const latest = sortedGuias().slice(0, 3);
  return <GuiasShell>
    <GuiasBanner title="Guías" subtitle="Navega por nuestras categorías:" />
    <nav aria-label="Categorías de guías" className="mx-auto grid max-w-6xl grid-cols-1 gap-x-6 gap-y-5 px-5 py-10 min-[360px]:grid-cols-2 sm:px-6 lg:grid-cols-4">
      {guiaCategories.map((category) => <Link key={category.slug} to="/guias/categoria/$category" params={{ category: category.slug }} className="flex items-center gap-3 text-[15px] font-medium text-navy hover:text-gold-deep"><span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground"><Check className="size-4" aria-hidden="true" /></span><span>{category.name}</span></Link>)}
    </nav>
    <div className="mx-auto max-w-6xl space-y-14 px-5 pb-14 pt-4 sm:px-6 sm:pb-20">
      <section><h2 className="font-serif text-2xl leading-snug sm:text-3xl">Nuestras últimas entradas:</h2>{latest.length ? <div className="mt-8 grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{latest.map((g) => <GuiaCard key={g.slug} guia={g} />)}</div> : <p className="mt-8 text-muted-foreground">Muy pronto publicaremos nuestra primera guía.</p>}</section>
      {guiaCategories.map((category) => {
        const list = categoryGuias(category.slug).slice(0, 3);
        if (!list.length) return null;
        return <section key={category.slug}><h2 className="font-serif text-2xl leading-snug sm:text-3xl">Todo lo que debes saber sobre {category.name.toLocaleLowerCase("es")}:</h2><p className="mt-3 text-muted-foreground">{category.subtitle}</p><div className="mt-8 grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{list.map((g) => <GuiaCard key={g.slug} guia={g} />)}</div></section>;
      })}
    </div>
  </GuiasShell>;
}
