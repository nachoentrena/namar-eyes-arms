import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/namar/site-footer";
import { SiteHeader } from "@/components/namar/site-header";
import { siteConfig } from "@/lib/site-config";

const title = "Política de privacidad | NAMAR Global";
const description =
  "Política de privacidad de NAMAR GLOBAL LIMITED: cómo tratamos los datos que nos facilita a través de esta web, conforme al RGPD.";

export const Route = createFileRoute("/politica-privacidad")({
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
      { property: "og:url", content: `${siteConfig.siteUrl}/politica-privacidad` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/politica-privacidad` }],
  }),
  component: PoliticaPrivacidadPage,
});

const emailLink = (
  <a href={`mailto:${siteConfig.email}`} className="font-semibold text-navy underline">
    {siteConfig.email}
  </a>
);

function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-background pb-14 text-foreground sm:pb-0">
      <SiteHeader />
      <main className="px-5 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-4xl italic leading-tight text-navy sm:text-5xl">
            Política de privacidad
          </h1>
          <div className="mt-8 space-y-8 text-base leading-relaxed text-muted-foreground">
            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">1. Responsable del tratamiento</h2>
              <p>
                El responsable del tratamiento de sus datos personales es{" "}
                <strong className="text-navy">NAMAR GLOBAL LIMITED</strong>, sociedad registrada en
                Hong Kong con el número 81199545, con domicilio en Room D5, 5/F, King Yip Factory
                Building, No. 59 King Yip Street, Kwun Tong, Hong Kong.
              </p>
              <p>
                Contacto: {emailLink} · Teléfono: +34 609 64 31 34.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">2. Datos que recogemos</h2>
              <p>
                Recogemos únicamente los datos que usted nos facilita voluntariamente a través de
                los formularios de esta web o al contactar con nosotros: nombre, empresa (si
                procede), correo electrónico, teléfono o WhatsApp, país de destino y la información
                sobre su proyecto de importación, incluidos los archivos que decida adjuntar en el
                diagnóstico de viabilidad.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">3. Finalidad del tratamiento</h2>
              <p>
                Los datos facilitados a través de los formularios se utilizan exclusivamente para:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Responder a su solicitud de contacto o de información.</li>
                <li>
                  Valorar la viabilidad de su importación y preparar una evaluación preliminar de
                  costes y requisitos.
                </li>
                <li>
                  Gestionar la relación comercial que pueda derivarse de su solicitud, en caso de
                  que decida trabajar con nosotros.
                </li>
              </ul>
              <p>
                No utilizamos sus datos para enviar comunicaciones comerciales no solicitadas ni los
                empleamos con fines distintos de los aquí descritos.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">4. Base jurídica</h2>
              <p>
                La base legal para el tratamiento es su consentimiento, otorgado al marcar la
                casilla de aceptación de esta política y enviar el formulario, así como la aplicación
                de medidas precontractuales cuando nos solicita una evaluación de su proyecto.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">5. Conservación de los datos</h2>
              <p>
                Conservamos sus datos durante el tiempo necesario para atender su solicitud y, en su
                caso, mientras se mantenga la relación comercial. Cuando dejen de ser necesarios, se
                suprimirán o anonimizarán, salvo que una obligación legal exija su conservación.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">6. Destinatarios y transferencias</h2>
              <p>
                No cedemos sus datos a terceros con fines comerciales. Únicamente podrán comunicarse
                cuando sea imprescindible para gestionar su proyecto (por ejemplo, proveedores,
                agentes logísticos o despachos aduaneros) o por obligación legal.
              </p>
              <p>
                Al tratarse de una sociedad domiciliada en Hong Kong, el tratamiento puede implicar
                una transferencia internacional de datos. Aplicamos las garantías adecuadas para
                proteger su información conforme al Reglamento General de Protección de Datos
                (RGPD). Asimismo, el envío de los formularios se realiza a través de proveedores
                técnicos (servicio de correo de formularios y alojamiento web) que actúan como
                encargados del tratamiento con las garantías correspondientes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">7. Sus derechos</h2>
              <p>
                Conforme al RGPD y a la normativa española y colombiana de protección de datos,
                usted puede ejercer en cualquier momento sus derechos de:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-navy">Acceso:</strong> conocer qué datos suyos tratamos.
                </li>
                <li>
                  <strong className="text-navy">Rectificación:</strong> corregir datos inexactos o
                  incompletos.
                </li>
                <li>
                  <strong className="text-navy">Supresión:</strong> solicitar que eliminemos sus
                  datos cuando ya no sean necesarios.
                </li>
                <li>
                  <strong className="text-navy">Oposición y limitación:</strong> oponerse al
                  tratamiento o solicitar que se limite.
                </li>
                <li>
                  <strong className="text-navy">Portabilidad:</strong> recibir sus datos en un
                  formato estructurado.
                </li>
              </ul>
              <p>
                Para ejercer cualquiera de estos derechos, escríbanos a {emailLink} indicando su
                nombre y el derecho que desea ejercer. Responderemos a su solicitud en los plazos
                legalmente establecidos.
              </p>
              <p>
                Si considera que el tratamiento de sus datos no es conforme a la normativa, puede
                presentar una reclamación ante la Agencia Española de Protección de Datos
                (www.aepd.es) o ante la autoridad de control de su país.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">8. Seguridad</h2>
              <p>
                Aplicamos medidas técnicas y organizativas razonables para proteger sus datos frente
                a accesos no autorizados, pérdida o alteración. Los archivos adjuntos al diagnóstico
                se almacenan en un espacio privado de acceso restringido.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl italic text-navy">9. Cambios en esta política</h2>
              <p>
                Podemos actualizar esta política para adaptarla a cambios normativos o de
                funcionamiento de la web. La versión vigente será siempre la publicada en esta
                página, con fecha de última actualización: octubre de 2026.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
