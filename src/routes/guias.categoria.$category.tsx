import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { GuiaCard } from "@/components/namar/guia-card";
import { GuiasBanner, GuiasShell } from "@/components/namar/guias-shell";
import { guiaCategories, categoryGuias } from "@/lib/guias";
import { siteConfig } from "@/lib/site-config";
export const Route = createFileRoute("/guias/categoria/$category")({
  loader: ({ params }) => {
    const category = guiaCategories.find((c) => c.slug === params.category);
    if (!category) throw notFound();
    return { category, list: categoryGuias(category.slug) };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.category.name}: guías de importación | NAMAR Global` : "Categoría no encontrada | NAMAR Global";
    const description = loaderData ? `${loaderData.category.subtitle}. Artículos prácticos del equipo de NAMAR Global para empresas de España y Colombia.` : "La categoría de guías que buscas no está disponible.";
    return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, ...(!loaderData ? [{ name: "robots", content: "noindex" }] : [])], links: loaderData ? [{ rel: "canonical", href: `${siteConfig.siteUrl}/guias/categoria/${loaderData.category.slug}` }] : [] };
  },
  component: CategoryPage,
});
function CategoryPage() {
  const { category, list } = Route.useLoaderData();
  return <GuiasShell><GuiasBanner title={category.name} subtitle={category.subtitle} /><div className="mx-auto max-w-6xl px-5 py-14 sm:px-6"><Link to="/guias" className="font-semibold text-gold-deep hover:underline">← Guías</Link>{list.length ? <div className="mt-8 grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{list.map((g) => <GuiaCard key={g.slug} guia={g} />)}</div> : <p className="mt-8 text-muted-foreground">Muy pronto publicaremos nuestra primera guía de {category.name.toLocaleLowerCase("es")}.</p>}</div></GuiasShell>;
}
