import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/namar/site-footer";
import { SiteHeader } from "@/components/namar/site-header";
import { siteConfig } from "@/lib/site-config";

const title = "Política de cookies | NAMAR Global";
const description =
  "Política de cookies de la web de NAMAR GLOBAL LIMITED: qué cookies usamos y cómo gestionarlas.";

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
          <div className="mt-8 space-y-8 text-base leading-relaxed text-muted-foreground">
            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">1. Qué son las cookies</h2>
              <p>
                Las cookies y tecnologías similares (como el almacenamiento local del navegador) son
                pequeños archivos o espacios de memoria que los sitios web guardan en su dispositivo
                para funcionar correctamente, recordar preferencias o elaborar estadísticas de uso.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">2. Qué utilizamos en esta web</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-navy">Técnicas (necesarias):</strong> almacenamiento del
                  navegador imprescindible para el funcionamiento de la web, como recordar su idioma,
                  su elección en el banner de cookies o el progreso del formulario de diagnóstico
                  mientras lo completa. No requieren consentimiento.
                </li>
                <li>
                  <strong className="text-navy">Chat de asistencia (terceros):</strong> utilizamos un
                  servicio de chat con asistente virtual (Chatbase) que puede instalar cookies o
                  almacenamiento propio para mantener la conversación. Este servicio solo se carga si
                  usted acepta las cookies en el banner.
                </li>
              </ul>
              <p>
                No utilizamos cookies publicitarias ni de seguimiento con fines de marketing. Si en el
                futuro incorporamos herramientas de análisis o publicidad, actualizaremos esta
                política y solicitaremos de nuevo su consentimiento.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">3. Cómo gestionar su consentimiento</h2>
              <p>
                Al visitar la web por primera vez se muestra un banner donde puede aceptar o rechazar
                las cookies no necesarias. Puede cambiar su decisión en cualquier momento eliminando
                los datos del sitio desde la configuración de su navegador y recargando la página; el
                banner volverá a mostrarse.
              </p>
              <p>
                También puede configurar su navegador para bloquear o eliminar las cookies. Tenga en
                cuenta que bloquear las técnicas puede impedir que algunas funciones de la web
                funcionen correctamente.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">4. Más información</h2>
              <p>
                Para cualquier duda sobre el uso de cookies en esta web, puede escribirnos a{" "}
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-navy underline">
                  {siteConfig.email}
                </a>
                . Responsable: NAMAR GLOBAL LIMITED (Hong Kong, Nº 81199545).
              </p>
              <p className="text-sm text-muted-foreground/70">Última actualización: octubre de 2026.</p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
