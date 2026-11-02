import { createFileRoute } from "@tanstack/react-router";

import { GuiaCard } from "@/components/namar/guia-card";
import { SiteFooter } from "@/components/namar/site-footer";
import { SiteHeader } from "@/components/namar/site-header";
import { sortedGuias } from "@/lib/guias";
import { siteConfig } from "@/lib/site-config";

const title = "Guías para importar desde China | NAMAR Global";
const description =
  "Lo que aprendemos cada día en fábricas y ferias en China, explicado para empresas de España y Colombia.";

export const Route = createFileRoute("/guias/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${siteConfig.siteUrl}/og-image.png` },
      { name: "twitter:image", content: `${siteConfig.siteUrl}/og-image.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: `${siteConfig.siteUrl}/guias` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/guias` }],
  }),
  component: GuiasPage,
});

function GuiasPage() {
  const list = sortedGuias();
  return (
    <div className="min-h-screen bg-background pb-14 text-foreground sm:pb-0">
      <SiteHeader />
      <main className="px-5 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-3xl">
            <h1 className="font-serif text-4xl leading-tight text-navy sm:text-5xl">
              Guías para importar desde China
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Lo que aprendemos cada día en fábricas y ferias en China, explicado para empresas de
              España y Colombia.
            </p>
          </header>
          {list.length === 0 ? (
            <p className="mt-10 rounded-3xl border border-border bg-card p-8 text-center text-base text-muted-foreground">
              Muy pronto publicaremos nuestra primera guía.
            </p>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((g) => (
                <GuiaCard key={g.slug} guia={g} />
              ))}
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
