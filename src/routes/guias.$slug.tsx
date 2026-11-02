import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { GuiaCard } from "@/components/namar/guia-card";
import { SiteFooter } from "@/components/namar/site-footer";
import { SiteHeader } from "@/components/namar/site-header";
import { formatGuiaDate, guias, sortedGuias } from "@/lib/guias";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/guias/$slug")({
  loader: ({ params }) => {
    const guia = guias.find((g) => g.slug === params.slug);
    if (!guia) throw notFound();
    const related = sortedGuias()
      .filter((g) => g.slug !== guia.slug)
      .slice(0, 2);
    return { guia, related };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Guía no encontrada | NAMAR Global" }, { name: "robots", content: "noindex" }] };
    }
    const { guia } = loaderData;
    const url = `${siteConfig.siteUrl}/guias/${params.slug}`;
    const image = guia.image.startsWith("http") ? guia.image : `${siteConfig.siteUrl}${guia.image}`;
    return {
      meta: [
        { title: guia.metaTitle },
        { name: "description", content: guia.metaDescription },
        { property: "og:title", content: guia.metaTitle },
        { property: "og:description", content: guia.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:image", content: image },
        { name: "twitter:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guia.title,
            datePublished: guia.date,
            image,
            author: { "@type": "Person", name: guia.author },
            publisher: { "@type": "Organization", name: "NAMAR Global" },
          }),
        },
      ],
    };
  },
  component: GuiaPage,
  notFoundComponent: GuiaMissing,
  errorComponent: GuiaMissing,
});

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background pb-14 text-foreground sm:pb-0">
      <SiteHeader />
      <main className="px-5 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-32">{children}</main>
      <SiteFooter />
    </div>
  );
}

function GuiaMissing() {
  return (
    <Shell>
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-4xl text-navy">Guía no encontrada</h1>
        <Link to="/guias" className="mt-6 inline-flex font-semibold text-navy underline decoration-gold underline-offset-[6px]">
          Ver todas las guías
        </Link>
      </div>
    </Shell>
  );
}

function GuiaPage() {
  const { guia, related } = Route.useLoaderData();
  return (
    <Shell>
      <article className="mx-auto max-w-3xl">
        <Link to="/guias" className="text-sm font-semibold text-gold-deep hover:underline">
          ← Guías
        </Link>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-navy sm:text-5xl">{guia.title}</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          <time dateTime={guia.date}>{formatGuiaDate(guia.date)}</time> · Por {guia.author}
        </p>
        <img
          src={guia.image}
          alt={guia.imageAlt}
          className="mt-8 aspect-[3/2] w-full rounded-3xl object-cover"
        />
        <div className="mt-10 space-y-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {guia.intro?.map((p, i) => <p key={i}>{p}</p>)}
          {guia.sections.map((s) => (
            <section key={s.heading} className="space-y-3">
              <h2 className="font-serif text-2xl text-navy sm:text-3xl">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-sand p-6 sm:p-8">
          <p className="font-serif text-2xl text-navy">¿Quieres aplicarlo a tu importación?</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/diagnostico"
              className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full bg-gold px-6 font-semibold text-gold-foreground transition-colors hover:bg-navy hover:text-navy-foreground"
            >
              Diagnóstico gratuito
            </Link>
            <a
              href={siteConfig.bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full border-[1.5px] border-navy px-6 font-semibold text-navy transition-colors hover:bg-navy hover:text-navy-foreground"
            >
              Agendar una llamada
            </a>
          </div>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="mx-auto mt-16 max-w-6xl">
          <h2 className="font-serif text-3xl text-navy">Otras guías</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {related.map((g) => (
              <GuiaCard key={g.slug} guia={g} />
            ))}
          </div>
        </section>
      ) : null}
    </Shell>
  );
}
