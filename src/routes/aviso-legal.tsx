import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/namar/site-footer";
import { SiteHeader } from "@/components/namar/site-header";
import { siteConfig } from "@/lib/site-config";

const title = "Aviso legal | NAMAR Global";
const description =
  "Aviso legal de la web de NAMAR GLOBAL LIMITED: titular, condiciones de uso y responsabilidad.";

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
          <div className="mt-8 space-y-8 text-base leading-relaxed text-slate">
            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">1. Titular de la web</h2>
              <p>
                En cumplimiento del deber de información previsto en la Ley 34/2002, de Servicios de
                la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que
                esta web es titularidad de <strong className="text-navy">NAMAR GLOBAL LIMITED</strong>,
                sociedad registrada en Hong Kong con el número 81199545, con domicilio en Room D5,
                5/F, King Yip Factory Building, No. 59 King Yip Street, Kwun Tong, Hong Kong.
              </p>
              <p>
                Contacto:{" "}
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-navy underline">
                  {siteConfig.email}
                </a>{" "}
                · Teléfono: +34 609 64 31 34.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">2. Objeto</h2>
              <p>
                Esta web informa sobre los servicios de gestión y acompañamiento de importaciones
                desde China que ofrece NAMAR GLOBAL LIMITED a clientes en España y Colombia, y
                permite a los visitantes solicitar una evaluación preliminar de su proyecto o ponerse
                en contacto con nosotros.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">3. Condiciones de uso</h2>
              <p>
                El acceso y uso de esta web atribuye la condición de usuario e implica la aceptación
                de las presentes condiciones. El usuario se compromete a hacer un uso lícito,
                diligente y conforme a la buena fe de los contenidos y servicios, y a no utilizarlos
                para actividades ilegales o que puedan dañar el funcionamiento de la web.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">4. Propiedad intelectual</h2>
              <p>
                Todos los contenidos de esta web (textos, diseño, logotipos, imágenes y código) son
                titularidad de NAMAR GLOBAL LIMITED o de terceros que han autorizado su uso, y están
                protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su
                reproducción, distribución o transformación sin autorización expresa.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">5. Responsabilidad</h2>
              <p>
                La información publicada en esta web tiene carácter orientativo. Las evaluaciones
                preliminares de viabilidad y costes no constituyen asesoramiento aduanero, fiscal ni
                legal vinculante: la viabilidad, costes, aranceles, impuestos, plazos, certificaciones
                y despacho aduanero dependen de autoridades, proveedores y terceros especialistas, y
                se confirman en cada proyecto mediante propuesta detallada.
              </p>
              <p>
                NAMAR GLOBAL LIMITED no se responsabiliza de los daños que puedan derivarse del uso
                de la información de esta web ni de los contenidos de sitios de terceros enlazados
                desde ella.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">6. Enlaces a terceros</h2>
              <p>
                Esta web puede incluir enlaces a servicios externos (por ejemplo, WhatsApp). NAMAR
                GLOBAL LIMITED no controla ni responde de los contenidos ni de las políticas de
                privacidad de dichos servicios.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">7. Legislación aplicable</h2>
              <p>
                El uso de esta web se rige por la legislación aplicable al titular y, en lo que
                afecte a los usuarios residentes en España y Colombia, por las normas de protección
                de consumidores y de datos que resulten de aplicación. Para cualquier controversia,
                las partes se someterán a los juzgados y tribunales que correspondan conforme a
                derecho.
              </p>
              <p className="text-sm text-slate/70">Última actualización: octubre de 2026.</p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
