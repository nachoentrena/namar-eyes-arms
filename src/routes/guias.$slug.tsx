import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { GuiaCard } from "@/components/namar/guia-card";
import { GuiasShell } from "@/components/namar/guias-shell";
import { formatGuiaDate, guias, guiaCategories, relatedGuias, guiaImageUrl } from "@/lib/guias";
import { siteConfig } from "@/lib/site-config";
export const Route = createFileRoute("/guias/$slug")({
  loader: ({ params }) => {
    const guia = guias.find((g) => g.slug === params.slug);
    if (!guia) throw notFound();
    const category = guiaCategories.find((c) => c.slug === guia.category);
    return { guia, category, related: relatedGuias(guia) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Guía no encontrada | NAMAR Global" }, { name: "description", content: "Esta guía no está disponible. Consulta las guías de importación de NAMAR Global." }, { property: "og:title", content: "Guía no encontrada | NAMAR Global" }, { property: "og:description", content: "Consulta nuestras guías para importar desde China." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }, { name: "robots", content: "noindex" }] };
    const { guia } = loaderData;
    const url = `${siteConfig.siteUrl}/guias/${guia.slug}`;
    const image = guiaImageUrl(guia.image);
    return { meta: [{ title: guia.metaTitle }, { name: "description", content: guia.metaDescription }, { property: "og:title", content: guia.metaTitle }, { property: "og:description", content: guia.metaDescription }, { property: "og:type", content: "article" }, { property: "og:image", content: image }, { name: "twitter:image", content: image }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: url }], links: [{ rel: "canonical", href: url }], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: guia.title, description: guia.metaDescription, datePublished: guia.date, image, mainEntityOfPage: url, author: { "@type": "Person", name: guia.author, jobTitle: guia.authorRole }, publisher: { "@type": "Organization", name: "NAMAR Global", url: siteConfig.siteUrl, logo: { "@type": "ImageObject", url: `${siteConfig.siteUrl}/brand/logotipo-azul.png` } } }) }, ...(guia.faq.length ? [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: guia.faq.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }] : [])] };
  },
  component: GuiaPage,
  notFoundComponent: GuiaMissing,
});
function GuiaMissing() {
  return <GuiasShell><div className="mx-auto max-w-3xl px-5 py-14 text-center"><h1 className="font-serif text-4xl text-navy">Guía no encontrada</h1><Link to="/guias" className="mt-6 inline-flex font-semibold text-gold-deep underline">Ver todas las guías</Link></div></GuiasShell>;
}
function GuiaPage() {
  const { guia, category, related } = Route.useLoaderData();
  return <GuiasShell><div className="px-5 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14">
    <article className="mx-auto max-w-[760px]">
      <nav aria-label="Ruta de la guía" className="flex flex-wrap items-center gap-2 text-sm text-gold-deep"><Link to="/guias" className="hover:underline">Guías</Link><span aria-hidden="true">›</span>{category ? <Link to="/guias/categoria/$category" params={{ category: category.slug }} className="hover:underline">{category.name}</Link> : null}</nav>
      <h1 className="mt-5 font-serif text-[32px] leading-snug text-navy sm:text-[42px]">{guia.title}</h1>
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Por {guia.author} · {guia.authorRole}<br /><time dateTime={guia.date}>{formatGuiaDate(guia.date)}</time> · {guia.readingTime} de lectura</p>
      <img src={guia.image} alt={guia.imageAlt} loading="lazy" width={1366} height={768} className="mt-8 aspect-video w-full rounded-lg object-contain" />
      <div className="guia-prose mt-10"><ReactMarkdown remarkPlugins={[remarkGfm]} components={{ p: ({ children }) => {
        const childrenArray = Array.isArray(children) ? children : [children];
        const first = childrenArray[0];
        const summary = typeof first === "object" && first !== null && "props" in first && String((first as { props: { children?: unknown } }).props.children).startsWith("En resumen");
        return <p className={summary ? "guia-summary" : undefined}>{children}</p>;
      }, table: ({ children }) => <div className="guia-table-scroll"><table>{children}</table></div> }} >{guia.body}</ReactMarkdown></div>
      <aside className="mt-12 rounded-lg bg-navy p-6 text-navy-foreground sm:p-8"><h2 className="font-serif text-2xl leading-snug sm:text-3xl">¿Quieres que lo revisemos <em className="text-gold">por ti</em>?</h2><p className="mt-5 leading-relaxed text-on-navy-muted">En NAMAR vivimos en Shanghái y somos tu equipo en China: comprobamos la documentación, confirmamos si fabrican y, si hace falta, vamos a la fábrica.</p><p className="mt-4 leading-relaxed text-on-navy-muted">Agenda una llamada gratuita de 30 minutos y cuéntanos qué proveedor estás valorando. Te respondemos en 24 h laborables.</p><Button asChild className="mt-6 min-h-12 w-full rounded-full bg-gold px-5 font-semibold text-gold-foreground shadow-none hover:bg-gold/90 sm:w-auto"><a href={siteConfig.bookingHref} target="_blank" rel="noopener noreferrer">Agendar llamada gratuita</a></Button></aside>
      <p className="mt-6 text-sm italic leading-relaxed text-muted-foreground">Esta guía es informativa y no sustituye el asesoramiento legal, fiscal o aduanero para tu caso concreto.</p>
    </article>
    {related.length ? <section className="mx-auto mt-14 max-w-6xl"><h2 className="font-serif text-3xl">Entradas relacionadas</h2><div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">{related.map((g) => <GuiaCard key={g.slug} guia={g} />)}</div></section> : null}
  </div></GuiasShell>;
}
