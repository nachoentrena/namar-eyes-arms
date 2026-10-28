import { createFileRoute } from "@tanstack/react-router";

import { DiagnosticoWizard } from "@/components/namar/diagnostico-wizard";
import { MobileCta } from "@/components/namar/mobile-cta";
import { SiteFooter } from "@/components/namar/site-footer";
import { SiteHeader } from "@/components/namar/site-header";
import { siteConfig } from "@/lib/site-config";

const title = "Diagnóstico de viabilidad de importación | NAMAR Global";
const description =
  "Cuéntanos tu proyecto y el equipo de NAMAR Global te enviará una evaluación preliminar de viabilidad de tu importación desde China en 24h laborables.";

export const Route = createFileRoute("/diagnostico")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${siteConfig.siteUrl}/og-image.png` },
      { name: "twitter:image", content: `${siteConfig.siteUrl}/og-image.png` },
      { property: "og:locale", content: "es_ES" },
      { property: "og:url", content: `${siteConfig.siteUrl}/diagnostico` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/diagnostico` }],
  }),
  component: DiagnosticoPage,
});

function DiagnosticoPage() {
  return (
    <div className="min-h-screen bg-background pb-14 text-foreground sm:pb-0">
      <SiteHeader />
      <main className="px-5 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-widest text-gold">
            NAMAR Global
          </p>
          <h1 className="mt-3 font-serif text-4xl italic leading-tight text-navy sm:text-5xl">
            Diagnóstico de viabilidad de importación
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Cuéntenos su proyecto y el equipo de NAMAR GLOBAL le enviará una evaluación preliminar
            de viabilidad en 24h laborables. Si no conoce algún dato técnico, marque «No lo
            sé»: para eso estamos. Tiempo estimado: 8–10 minutos.
          </p>
          <div className="mt-10">
            <DiagnosticoWizard />
          </div>
        </div>
      </main>
      <SiteFooter />
      <MobileCta />
    </div>
  );
}
