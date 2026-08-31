import { createFileRoute } from "@tanstack/react-router";

import heroPort from "@/assets/hero-port.jpg";
import onTheGround from "@/assets/on-the-ground.jpg";
import qualityControl from "@/assets/quality-control.jpg";
import worldMap from "@/assets/world-map.jpg";
import { ContactForm } from "@/components/namar/contact-form";
import { MobileCta } from "@/components/namar/mobile-cta";
import { Reveal } from "@/components/namar/reveal";
import { ServicesCarousel } from "@/components/namar/services-carousel";

import { SiteHeader } from "@/components/namar/site-header";

const title = "Importar desde China a España y Colombia | NAMAR Global";
const description =
  "Gestionamos tu importación desde China de principio a fin: búsqueda y verificación de proveedores, negociación, control de calidad, logística y aduanas. 8 años sobre el terreno.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "importar desde China, proveedores de China, sourcing China, agente de compras China, control de calidad China, búsqueda de proveedores China, importación China España, importación China Colombia, gestión de importaciones",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:url", content: "https://namar-eyes-arms.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://namar-eyes-arms.lovable.app/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

const clarity = [
  {
    label: "Qué hacemos",
    text: "Gestionamos importaciones desde China: buscamos y verificamos la fábrica, negociamos, controlamos la calidad y movemos tu mercancía hasta tu almacén.",
  },
  {
    label: "Para quién",
    text: "Para PYMEs, emprendedores y empresas de España y Colombia que compran en China, ya sea por primera vez o desde hace años.",
  },
  {
    label: "Cómo lo hacemos",
    text: "Con presencia física en China. Vamos a la fábrica, hablamos el idioma y resolvemos en origen, antes de que el problema viaje en el contenedor.",
  },
];

const problems = [
  "No saber si el proveedor que has encontrado existe realmente o solo es un intermediario.",
  "Pagar un pedido y descubrir en destino que la calidad no es la acordada.",
  "Malentendidos técnicos por idioma, husos horarios y cultura empresarial distinta.",
  "Documentación incompleta, aranceles mal calculados y mercancía retenida en aduanas.",
  "Certificaciones que nadie te pidió hasta que era tarde.",
  "No tener a nadie en China que pueda ir, mirar y resolver.",
];

const services = [
  {
    n: "01",
    title: "Búsqueda de proveedores",
    text: "Encontramos y analizamos proveedores en China adaptados a tu producto, tu volumen y tu presupuesto. No te damos una lista: te damos opciones contrastadas.",
  },
  {
    n: "02",
    title: "Verificación de fábricas",
    text: "Comprobamos quién está realmente detrás del proveedor, si es fabricante o intermediario, y evaluamos su capacidad y fiabilidad.",
  },
  {
    n: "03",
    title: "Negociación",
    text: "Negociamos precios, cantidades, plazos y condiciones comerciales en el idioma y los códigos del mercado local.",
  },
  {
    n: "04",
    title: "Control de calidad",
    text: "Supervisamos que la mercancía cumpla con las especificaciones acordadas antes de que salga de China, cuando todavía se puede corregir.",
  },
  {
    n: "05",
    title: "Logística internacional",
    text: "Coordinamos el transporte desde la fábrica hasta el destino final, eligiendo la operativa que mejor encaja con tu producto.",
  },
  {
    n: "06",
    title: "Aduanas y cumplimiento",
    text: "Gestionamos o coordinamos documentación, despacho aduanero, requisitos y certificaciones necesarias para tu operación.",
  },
  {
    n: "07",
    title: "Seguimiento de la operación",
    text: "Acompañamos el proceso completo para detectar problemas y resolverlos antes de que se conviertan en costes para ti.",
  },
  {
    n: "08",
    title: "Cálculo de costes",
    text: "En menos de 48 horas te entregamos un informe con la simulación del coste total de tu importación: producto, arancel, IVA, transporte, despacho aduanero, documentación, seguro y entrega final. Sabrás el precio real en tu almacén antes de comprometer un solo euro.",
  },
];


const objections = [
  {
    q: "“He encontrado un proveedor, pero no sé si fiarme.”",
    a: "Verificamos quién es realmente: si fabrica o subcontrata, qué capacidad tiene y con qué clientes trabaja. Si hace falta, vamos a la fábrica y te contamos lo que hemos visto.",
  },
  {
    q: "“No sé qué documentación necesita mi producto.”",
    a: "Revisamos contigo los requisitos de tu producto antes de comprar: documentación comercial, certificaciones y requisitos de entrada en España o Colombia. Es mucho más barato saberlo antes que con la mercancía parada.",
  },
  {
    q: "“Tengo miedo a que la calidad no sea la acordada.”",
    a: "Definimos con el proveedor unas especificaciones claras y las comprobamos en origen. Un defecto detectado en China se corrige; detectado en tu almacén, se paga.",
  },
  {
    q: "“No sé qué opción de transporte me conviene.”",
    a: "Según producto, volumen, peso y urgencia, la operativa cambia y el margen también. Te proponemos la ruta y el incoterm que tienen sentido para tu caso, no el estándar.",
  },
  {
    q: "“Ya importo, pero quiero dejar de improvisar.”",
    a: "Revisamos tu operativa actual, tus proveedores y tus costes, y profesionalizamos el proceso con un único interlocutor en origen.",
  },
];

const steps = [
  {
    n: "01",
    title: "Entendemos tu proyecto",
    text: "Analizamos qué quieres comprar, cantidades, presupuesto y necesidades.",
  },
  {
    n: "02",
    title: "Buscamos proveedores",
    text: "Localizamos proveedores adecuados en China y descartamos los que no encajan.",
  },
  {
    n: "03",
    title: "Verificamos y negociamos",
    text: "Comprobamos el proveedor sobre el terreno y negociamos las condiciones.",
  },
  {
    n: "04",
    title: "Controlamos la producción",
    text: "Supervisamos la calidad y el cumplimiento de lo acordado antes del embarque.",
  },
  {
    n: "05",
    title: "Gestionamos la logística",
    text: "Coordinamos transporte, documentación y proceso aduanero.",
  },
  {
    n: "06",
    title: "Recibes tu mercancía",
    text: "Tu producto llega a destino con el proceso controlado de principio a fin.",
  },
];

const differentiators = [
  { title: "8 años en China", text: "Experiencia real trabajando y operando sobre el terreno." },
  {
    title: "Presencia local",
    text: "Estamos físicamente en China para comprobar, negociar y resolver.",
  },
  {
    title: "Comunicación directa",
    text: "Idioma, cultura y conocimiento del mercado local, sin intermediarios.",
  },
  {
    title: "Menos riesgos",
    text: "Reducimos la incertidumbre de trabajar con proveedores desconocidos.",
  },
  {
    title: "Control de principio a fin",
    text: "No desaparecemos después de encontrar al proveedor.",
  },
  {
    title: "Un único interlocutor",
    text: "Centralizamos la operación: no coordinas agentes, proveedores y transitarios por tu cuenta.",
  },
];

const profiles = [
  { title: "PYMEs", text: "Empresas que quieren empezar o mejorar sus importaciones desde China." },
  {
    title: "Emprendedores",
    text: "Personas con un producto o proyecto que necesitan ayuda para hacerlo realidad.",
  },
  {
    title: "Empresas que ya importan",
    text: "Negocios que quieren reducir riesgos, optimizar costes o profesionalizar su proceso.",
  },
  {
    title: "Empresas que quieren empezar en China",
    text: "Negocios que necesitan un socio local para dar sus primeros pasos.",
  },
];

const stats = [
  { value: "8+", label: "Años en China" },
  { value: "3", label: "Mercados conectados" },
  { value: "360°", label: "Gestión integral" },
  { value: "1", label: "Único interlocutor" },
];

const startSteps = [
  {
    n: "01",
    title: "Nos escribes",
    text: "Cuéntanos qué quieres importar, en qué cantidad y en qué punto estás. Por formulario o por WhatsApp.",
  },
  {
    n: "02",
    title: "Analizamos tu caso",
    text: "Revisamos tu proyecto y te decimos con claridad qué es viable, qué riesgos hay y qué haría falta.",
  },
  {
    n: "03",
    title: "Empezamos a operar",
    text: "Definimos el alcance del trabajo y arrancamos en China. Tú sigues la operación con un único interlocutor.",
  },
];

const faqs = [
  {
    q: "¿Trabajáis únicamente con empresas que ya importan desde China?",
    a: "No. También ayudamos a empresas y emprendedores que quieren realizar su primera importación.",
  },
  {
    q: "¿Podéis buscar proveedores?",
    a: "Sí. La búsqueda y evaluación de proveedores forma parte de nuestros servicios.",
  },
  {
    q: "¿Podéis verificar una fábrica en China?",
    a: "Sí. Podemos realizar procesos de verificación y control directamente sobre el terreno.",
  },
  {
    q: "¿Os encargáis del control de calidad?",
    a: "Sí. Podemos coordinar controles para comprobar que la mercancía cumple con las especificaciones acordadas.",
  },
  {
    q: "¿Gestionáis el transporte?",
    a: "Sí. Coordinamos la logística internacional desde China hasta el destino.",
  },
  {
    q: "¿Ayudáis con las aduanas y certificaciones?",
    a: "Sí. Gestionamos o coordinamos los procesos necesarios según las características de cada operación.",
  },
  {
    q: "¿Tengo que viajar a China?",
    a: "No necesariamente. NAMAR puede actuar como tu representación sobre el terreno.",
  },
  {
    q: "¿Trabajáis con España y Colombia?",
    a: "Sí. Actualmente nuestros mercados principales son España y Colombia.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "NAMAR Global",
      description,
      areaServed: ["ES", "CO", "CN"],
      knowsLanguage: ["es", "zh", "en"],
      serviceType: [
        "Sourcing en China",
        "Búsqueda y verificación de proveedores",
        "Control de calidad",
        "Logística internacional",
        "Aduanas y cumplimiento",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

function Index() {
  return (
    <div className="bg-background font-sans text-navy">
      
      <SiteHeader />
      <MobileCta />

      <main className="pb-16 sm:pb-0">
        {/* HERO */}
        <section id="inicio" className="px-6 pb-20 pt-32 lg:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 border border-gold/25 bg-gold/10 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-gold">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-gold" />
                </span>
                8 años sobre el terreno en China
              </div>
              <h1 className="font-serif text-5xl italic leading-[0.95] sm:text-6xl lg:text-8xl">
                Importa desde China.
                <span className="mt-4 block font-sans text-4xl font-bold not-italic sm:text-5xl lg:text-7xl">
                  Nosotros nos encargamos del resto.
                </span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate sm:text-xl">
                Conectamos empresas de España y Colombia con proveedores fiables en China y
                gestionamos todo el proceso de importación, desde el sourcing y el control de
                calidad hasta la logística y las aduanas.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="bg-navy px-8 py-4 text-xs font-bold uppercase tracking-widest text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
                >
                  Quiero importar desde China
                </a>
                <a
                  href="#proceso"
                  className="border border-border px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-navy hover:text-navy-foreground"
                >
                  Descubre cómo trabajamos
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroPort}
                width={1200}
                height={1504}
                alt="Puerto de contenedores en China al atardecer con grúas portuarias"
                className="aspect-4/5 w-full object-cover shadow-elevated"
              />
              <div className="absolute -bottom-8 -left-4 max-w-xs border border-border bg-background p-8 shadow-panel sm:-left-8">
                <p className="font-serif text-base italic leading-relaxed text-slate">
                  “Somos los ojos y brazos de nuestros clientes en China, eliminando la
                  incertidumbre del comercio internacional.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLARIDAD: qué, para quién, cómo */}
        <section className="border-y border-border bg-sand px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
            {clarity.map((item, i) => (
              <Reveal key={item.label} delay={i * 60}>
                <p className="text-[11px] font-bold uppercase tracking-widest text-gold">
                  {item.label}
                </p>
                <p className="mt-4 leading-relaxed text-slate">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="overflow-hidden bg-navy px-6 py-24 text-navy-foreground lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">
            <Reveal className="space-y-8">
              <h2 className="text-4xl font-bold lg:text-5xl">
                Importar desde China no debería ser un salto de fe.
              </h2>
              <p className="text-lg text-navy-foreground/60">
                La mayoría de los problemas de una importación no aparecen en destino: aparecen en
                origen, meses antes, cuando nadie está mirando.
              </p>
              <ul className="space-y-5">
                {problems.map((problem, i) => (
                  <li
                    key={problem}
                    className="flex items-start gap-4 border-l-2 border-gold/30 py-1 pl-6"
                  >
                    <span className="pt-0.5 text-sm font-bold text-gold">{`0${i + 1}`}</span>
                    <p className="text-navy-foreground/80">{problem}</p>
                  </li>
                ))}
              </ul>
              <p className="pt-4 font-serif text-2xl italic text-gold">
                Ahí es donde entra NAMAR Global.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <img
                src={qualityControl}
                width={1008}
                height={1264}
                loading="lazy"
                alt="Inspectora de calidad midiendo una pieza mecánica en una fábrica china"
                className="aspect-3/4 w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </Reveal>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="px-6 py-24 lg:py-32">
          <Reveal className="mx-auto mb-16 max-w-7xl text-center">
            <h2 className="text-4xl font-bold lg:text-6xl">
              Gestionamos tu importación de principio a fin.
            </h2>
            <div className="mx-auto mt-6 h-1 w-24 bg-gold" />
          </Reveal>

          <Reveal>
            <ServicesCarousel items={services} />
          </Reveal>

        </section>

        {/* OBJECIONES */}
        <section className="bg-sand px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="text-4xl font-bold lg:text-5xl">Importar desde China, simple.</h2>
              <p className="mt-6 text-lg text-slate">
                Estas son las dudas que nos llegan cada semana. Así las resolvemos.
              </p>
            </Reveal>
            <div className="mt-14 divide-y divide-border border-y border-border">
              {objections.map((item, i) => (
                <Reveal key={item.q} delay={i * 40}>
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold">
                      {item.q}
                      <span className="text-xl text-gold transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="pb-6 leading-relaxed text-slate">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section id="proceso" className="px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="text-center text-4xl font-bold lg:text-5xl">
                Así convertimos una importación compleja en un proceso sencillo.
              </h2>
            </Reveal>
            <ol className="relative mt-20 space-y-12 before:absolute before:bottom-2 before:left-6 before:top-2 before:w-px before:bg-border">
              {steps.map((step, i) => (
                <Reveal as="li" key={step.n} delay={i * 60} className="relative flex gap-8">
                  <span className="z-10 grid size-12 shrink-0 place-items-center border border-navy bg-background text-sm font-bold">
                    {step.n}
                  </span>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 text-slate">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal>
              <p className="mt-20 text-center font-serif text-2xl italic text-slate lg:text-3xl">
                Tú te ocupas de hacer crecer tu negocio. Nosotros nos ocupamos de China.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SOBRE EL TERRENO */}
        <section className="relative">
          <img
            src={onTheGround}
            width={1600}
            height={1008}
            loading="lazy"
            alt="Responsable de NAMAR Global recorriendo una fábrica en China junto al gerente de producción"
            className="h-[520px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 flex items-center px-6">
            <div className="mx-auto w-full max-w-7xl">
              <div className="max-w-2xl text-navy-foreground">
                <h2 className="text-4xl font-bold lg:text-5xl">
                  No necesitas viajar a China. Nosotros ya estamos allí.
                </h2>
                <p className="mt-6 text-lg text-navy-foreground/70">
                  Ir a la fábrica, mirar la producción, hablar con el responsable y decir que algo
                  no está bien. Eso no se hace por correo: se hace estando.
                </p>
                <a
                  href="#contacto"
                  className="mt-10 inline-block bg-gold px-8 py-4 text-xs font-bold uppercase tracking-widest text-gold-foreground transition-colors hover:bg-navy-foreground"
                >
                  Habla con un experto
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* POR QUÉ NAMAR */}
        <section id="nosotros" className="px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-3xl">
              <h2 className="text-4xl font-bold lg:text-6xl">
                Tu equipo en China, sin necesidad de estar en China.
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((item, i) => (
                <Reveal key={item.title} delay={i * 60} className="bg-background p-10">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate">{item.text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-20 text-center">
              <p className="font-serif text-4xl italic lg:text-6xl">
                “Somos tus ojos y brazos en China.”
              </p>
            </Reveal>
          </div>
        </section>

        {/* PARA QUIÉN */}
        <section id="perfiles" className="bg-sand px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <h2 className="text-4xl font-bold lg:text-5xl">¿Es para ti?</h2>
            </Reveal>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {profiles.map((profile, i) => (
                <Reveal
                  key={profile.title}
                  delay={i * 60}
                  className="border-t-2 border-gold bg-background p-8 shadow-panel"
                >
                  <h3 className="text-xl font-bold">{profile.title}</h3>
                  <p className="mt-4 leading-relaxed text-slate">{profile.text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-16 max-w-3xl font-serif text-2xl italic text-slate">
                No necesitas tener experiencia importando desde China. Necesitas tener a alguien que
                sí la tenga.
              </p>
            </Reveal>
          </div>
        </section>

        {/* MAPA */}
        <section className="px-6 py-24 lg:py-32">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
            <Reveal className="flex-1">
              <h2 className="text-4xl font-bold">Conectamos mercados.</h2>
              <p className="mt-6 text-lg text-slate">
                Trabajamos entre China y los mercados de España y Colombia, conectando empresas con
                proveedores y coordinando las operaciones desde origen.
              </p>
              <div className="mt-10 flex flex-col gap-4">
                <div className="flex items-center gap-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold">China</span>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs font-bold uppercase tracking-widest">España</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold">China</span>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs font-bold uppercase tracking-widest">Colombia</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120} className="w-full flex-1">
              <img
                src={worldMap}
                width={1200}
                height={800}
                loading="lazy"
                alt="Mapa mundial minimalista con las rutas entre China, España y Colombia"
                className="aspect-video w-full object-contain"
              />
            </Reveal>
          </div>
        </section>

        {/* ESTADÍSTICAS */}
        <section className="bg-navy px-6 py-20 text-navy-foreground">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 text-center md:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 60}>
                <div className="text-5xl font-bold text-gold">{stat.value}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-navy-foreground/50">
                  {stat.label}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <h2 className="text-4xl font-bold lg:text-5xl">Empresas que confían en nosotros</h2>
              <p className="mt-4 max-w-2xl text-slate">
                Estamos recopilando las experiencias de nuestros clientes en España y Colombia.
                Publicaremos aquí sus testimonios reales, con nombre, empresa, país y proyecto.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
              {[0, 1, 2].map((slot) => (
                <Reveal key={slot} delay={slot * 60} className="bg-background p-10">
                  <div className="space-y-3 text-xs uppercase tracking-widest text-slate/60">
                    <p>Nombre</p>
                    <p>Empresa</p>
                    <p>País</p>
                    <p>Proyecto</p>
                  </div>
                  <p className="mt-6 font-serif text-lg italic text-slate/50">
                    Espacio reservado para el testimonio.
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CÓMO EMPEZAR */}
        <section className="bg-sand px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <h2 className="text-4xl font-bold lg:text-5xl">Empezar es simple.</h2>
              <p className="mt-6 max-w-2xl text-lg text-slate">
                No necesitas tenerlo todo decidido para hablar con nosotros. Con saber qué producto
                te interesa, es suficiente para empezar.
              </p>
            </Reveal>
            <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
              {startSteps.map((step, i) => (
                <Reveal key={step.n} delay={i * 60} className="bg-background p-10">
                  <span className="text-sm font-bold text-gold">{step.n}</span>
                  <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>
                  <p className="mt-4 leading-relaxed text-slate">{step.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="text-center text-4xl font-bold lg:text-5xl">Preguntas frecuentes</h2>
            </Reveal>
            <div className="mt-16 divide-y divide-border border-y border-border">
              {faqs.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 40}>
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-semibold">
                      {faq.q}
                      <span className="text-xl text-gold transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="pb-6 leading-relaxed text-slate">{faq.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-6 pb-24">
          <Reveal className="relative mx-auto max-w-5xl overflow-hidden border border-border p-10 text-center sm:p-16">
            <div className="pointer-events-none absolute -right-32 -top-32 size-64 rounded-full bg-gold/5" />
            <h2 className="relative z-10 text-4xl font-bold lg:text-5xl">
              ¿Quieres importar desde China sin hacerlo solo?
            </h2>
            <p className="relative z-10 mx-auto mt-8 max-w-2xl text-lg text-slate sm:text-xl">
              Cuéntanos qué quieres importar y analizaremos cómo podemos ayudarte a convertirlo en
              una operación segura y controlada.
            </p>
            <div className="relative z-10 mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="#contacto"
                className="bg-navy px-10 py-5 text-xs font-bold uppercase tracking-widest text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                Habla con NAMAR Global
              </a>
              <a
                href="#contacto"
                className="border border-border px-10 py-5 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-navy hover:text-navy-foreground"
              >
                Solicitar una consulta
              </a>
            </div>
          </Reveal>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="bg-sand px-6 py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-4xl font-bold lg:text-5xl">Cuéntanos tu proyecto</h2>
              <p className="mt-6 max-w-md text-lg text-slate">
                Escríbenos con los detalles de lo que quieres importar. Te responderemos con una
                valoración clara de cómo podemos ayudarte desde origen.
              </p>
              <div className="mt-12 border-t border-border pt-8">
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate">
                  ¿Prefieres hablar directamente?
                </p>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-3 text-lg font-semibold transition-colors hover:text-gold"
                >
                  Escríbenos por WhatsApp
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={120} className="border border-border bg-background p-8 sm:p-10">
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-sand-strong px-6 py-12 pb-24 sm:pb-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="grid size-6 place-items-center bg-navy text-[10px] font-bold tracking-tighter text-navy-foreground">
              N
            </span>
            <span className="text-sm font-bold uppercase tracking-tight">
              Namar <span className="text-gold">Global</span>
            </span>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate">
            <span>España</span>
            <span>China</span>
            <span>Colombia</span>
          </div>
          <div className="text-xs text-slate/60">
            © {new Date().getFullYear()} NAMAR Global. Gestión estratégica de importaciones.
          </div>
        </div>
      </footer>
    </div>
  );
}
