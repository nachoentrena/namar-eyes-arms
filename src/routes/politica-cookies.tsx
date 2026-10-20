import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/namar/site-footer";
import { SiteHeader } from "@/components/namar/site-header";
import { siteConfig } from "@/lib/site-config";

const title = "Política de cookies | NAMAR Global";
const description = "Política de cookies de la web de NAMAR GLOBAL LIMITED.";

export const Route = createFileRoute("/politica-cookies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.siteUrl}/politica-cookies` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/politica-cookies` }],
  }),
  component: PoliticaCookiesPage,
});

function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-background pb-14 text-foreground sm:pb-0">
      <SiteHeader />
      <main className="px-5 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-4xl italic leading-tight text-navy sm:text-5xl">
            Política de cookies
          </h1>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-slate">
            <p>
              Esta web utiliza únicamente almacenamiento técnico del navegador necesario para su
              funcionamiento (por ejemplo, para recordar su idioma o el progreso de un formulario
              mientras lo completa).
            </p>
            <p>
              No utilizamos cookies de terceros con fines publicitarios. Si en el futuro se
              incorporan herramientas de análisis o marketing, esta política se actualizará y se
              solicitará su consentimiento cuando sea necesario.
            </p>
            <p>
              Puede eliminar el almacenamiento del navegador en cualquier momento desde la
              configuración de su navegador. Para cualquier duda, escríbanos a{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-navy underline">
                {siteConfig.email}
              </a>
              .
            </p>
            <p className="text-sm text-slate/70">Texto básico pendiente de revisión legal.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
