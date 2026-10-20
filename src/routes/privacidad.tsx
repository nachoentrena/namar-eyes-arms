import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/namar/site-footer";
import { SiteHeader } from "@/components/namar/site-header";
import { siteConfig } from "@/lib/site-config";

const title = "Política de privacidad | NAMAR Global";
const description =
  "Política de privacidad de NAMAR GLOBAL LIMITED: cómo tratamos los datos que nos facilita a través de esta web.";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.siteUrl}/privacidad` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/privacidad` }],
  }),
  component: PrivacidadPage,
});

function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-background pb-14 text-foreground sm:pb-0">
      <SiteHeader />
      <main className="px-5 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-4xl italic leading-tight text-navy sm:text-5xl">
            Política de privacidad
          </h1>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-slate">
            <p>
              <strong className="text-navy">Responsable del tratamiento.</strong> NAMAR GLOBAL
              LIMITED, sociedad registrada en Hong Kong, Nº 81199545, con domicilio en Room D5,
              5/F, King Yip Factory Building, No. 59 King Yip Street, Kwun Tong, Hong Kong.
              Contacto: {siteConfig.email}.
            </p>
            <p>
              <strong className="text-navy">Datos que recogemos.</strong> Los datos que usted nos
              facilita voluntariamente a través de los formularios de esta web (nombre, correo
              electrónico, teléfono, empresa, información sobre su proyecto de importación y los
              archivos que adjunte).
            </p>
            <p>
              <strong className="text-navy">Finalidad.</strong> Tratamos sus datos exclusivamente
              para evaluar su solicitud, preparar una evaluación preliminar de viabilidad y
              contactar con usted en relación con su proyecto.
            </p>
            <p>
              <strong className="text-navy">Base jurídica.</strong> Su consentimiento, otorgado al
              marcar la casilla de autorización y enviar el formulario.
            </p>
            <p>
              <strong className="text-navy">Conservación.</strong> Conservamos sus datos mientras
              sean necesarios para gestionar su solicitud y la relación comercial que pueda
              derivarse de ella.
            </p>
            <p>
              <strong className="text-navy">Destinatarios.</strong> No cedemos sus datos a terceros,
              salvo obligación legal o cuando sea imprescindible para la gestión de su proyecto
              (por ejemplo, proveedores o agentes logísticos), siempre con las garantías
              adecuadas.
            </p>
            <p>
              <strong className="text-navy">Sus derechos.</strong> Puede ejercer sus derechos de
              acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-navy underline">
                {siteConfig.email}
              </a>
              .
            </p>
            <p className="text-sm text-slate/70">
              Texto básico pendiente de revisión legal.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
