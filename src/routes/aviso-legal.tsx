import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/namar/site-footer";
import { SiteHeader } from "@/components/namar/site-header";
import { siteConfig } from "@/lib/site-config";

const title = "Aviso legal | NAMAR Global";
const description = "Aviso legal de la web de NAMAR GLOBAL LIMITED.";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.siteUrl}/aviso-legal` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/aviso-legal` }],
  }),
  component: AvisoLegalPage,
});

function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-background pb-14 text-foreground sm:pb-0">
      <SiteHeader />
      <main className="px-5 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-4xl italic leading-tight text-navy sm:text-5xl">
            Aviso legal
          </h1>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-slate">
            <p>
              <strong className="text-navy">Titular de la web.</strong> NAMAR GLOBAL LIMITED,
              sociedad registrada en Hong Kong, Nº 81199545, con domicilio en Room D5, 5/F, King
              Yip Factory Building, No. 59 King Yip Street, Kwun Tong, Hong Kong. Contacto:{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-navy underline">
                {siteConfig.email}
              </a>
              .
            </p>
            <p>
              <strong className="text-navy">Objeto.</strong> Esta web informa sobre los servicios
              de gestión de importaciones desde China que ofrece NAMAR GLOBAL LIMITED y permite a
              los visitantes solicitar una evaluación preliminar de su proyecto.
            </p>
            <p>
              <strong className="text-navy">Responsabilidad.</strong> La información publicada en
              esta web tiene carácter orientativo. Las evaluaciones preliminares no constituyen
              asesoramiento aduanero, fiscal ni legal vinculante; la viabilidad, costes, aranceles,
              impuestos, plazos, certificaciones y despacho aduanero dependen de autoridades,
              proveedores y terceros especialistas.
            </p>
            <p className="text-sm text-slate/70">Texto básico pendiente de revisión legal.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
