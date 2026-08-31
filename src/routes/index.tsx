import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import heroPort from "@/assets/hero-port.jpg";
import onTheGround from "@/assets/on-the-ground.jpg";
import qualityControl from "@/assets/quality-control.jpg";
import worldMap from "@/assets/world-map.jpg";
import { ContactForm } from "@/components/namar/contact-form";
import { MobileCta } from "@/components/namar/mobile-cta";
import { Reveal } from "@/components/namar/reveal";
import { ServicesCarousel } from "@/components/namar/services-carousel";
import { SiteHeader } from "@/components/namar/site-header";
import { WhatsAppFloat } from "@/components/namar/whatsapp-float";

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
  }),
  component: Index,
});

function Index() {
  const { t } = useTranslation();

  const clarity = t("landing.clarity", { returnObjects: true }) as Array<{
    label: string;
    text: string;
  }>;
  const problems = t("landing.problems", { returnObjects: true }) as string[];
  const services = t("landing.services", { returnObjects: true }) as Array<{
    n: string;
    title: string;
    text: string;
  }>;
  const objections = t("landing.objections", { returnObjects: true }) as Array<{
    q: string;
    a: string;
  }>;
  const steps = t("landing.steps", { returnObjects: true }) as Array<{
    n: string;
    title: string;
    text: string;
  }>;
  const differentiators = t("landing.differentiators", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;
  const profiles = t("landing.profiles", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;
  const stats = t("landing.stats", { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;
  const startSteps = t("landing.startSteps", { returnObjects: true }) as Array<{
    n: string;
    title: string;
    text: string;
  }>;
  const faqs = t("landing.faqs", { returnObjects: true }) as Array<{
    q: string;
    a: string;
  }>;
  const testimonialFields = t("landing.testimonialsFields", { returnObjects: true }) as string[];
  const footerCountries = t("landing.footerCountries", { returnObjects: true }) as string[];

  return (
    <div className="bg-background font-sans text-navy">
      <SiteHeader />
      <MobileCta />
      <WhatsAppFloat />

      <main className="pb-16 sm:pb-0">
        <section id="inicio" className="px-6 pb-20 pt-32 lg:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 border border-gold/25 bg-gold/10 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-gold">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-gold" />
                </span>
                {t("landing.heroBadge")}
              </div>
              <h1 className="font-serif text-5xl italic leading-[0.95] sm:text-6xl lg:text-8xl">
                {t("landing.heroTitle")}
                <span className="mt-4 block font-sans text-4xl font-bold not-italic sm:text-5xl lg:text-7xl">
                  {t("landing.heroSubtitle")}
                </span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate sm:text-xl">
                {t("landing.heroDescription")}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="bg-navy px-8 py-4 text-xs font-bold uppercase tracking-widest text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
                >
                  {t("landing.heroPrimaryCta")}
                </a>
                <a
                  href="#proceso"
                  className="border border-border px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-navy hover:text-navy-foreground"
                >
                  {t("landing.heroSecondaryCta")}
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

        <section className="overflow-hidden bg-navy px-6 py-24 text-navy-foreground lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">
            <Reveal className="space-y-8">
              <h2 className="text-4xl font-bold lg:text-5xl">{t("landing.problemTitle")}</h2>
              <p className="text-lg text-navy-foreground/60">{t("landing.problemIntro")}</p>
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
              <p className="pt-4 font-serif text-2xl italic text-gold">{t("landing.problemQuote")}</p>
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

        <section id="servicios" className="px-6 py-24 lg:py-32">
          <Reveal className="mx-auto mb-16 max-w-7xl text-center">
            <h2 className="text-4xl font-bold lg:text-6xl">{t("landing.servicesTitle")}</h2>
            <div className="mx-auto mt-6 h-1 w-24 bg-gold" />
          </Reveal>

          <Reveal>
            <ServicesCarousel items={services} />
          </Reveal>
        </section>

        <section className="bg-sand px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="text-4xl font-bold lg:text-5xl">{t("landing.objectionsTitle")}</h2>
              <p className="mt-6 text-lg text-slate">{t("landing.objectionsIntro")}</p>
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

        <section id="proceso" className="px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="text-center text-4xl font-bold lg:text-5xl">
                {t("landing.processTitle")}
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
                {t("landing.processQuote")}
              </p>
            </Reveal>
          </div>
        </section>

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
                <h2 className="text-4xl font-bold lg:text-5xl">{t("landing.onTheGroundTitle")}</h2>
                <p className="mt-6 text-lg text-navy-foreground/70">{t("landing.onTheGroundText")}</p>
                <a
                  href="#contacto"
                  className="mt-10 inline-block bg-gold px-8 py-4 text-xs font-bold uppercase tracking-widest text-gold-foreground transition-colors hover:bg-navy-foreground"
                >
                  {t("landing.onTheGroundCta")}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="nosotros" className="px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-3xl">
              <h2 className="text-4xl font-bold lg:text-6xl">{t("landing.whyTitle")}</h2>
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
              <p className="font-serif text-4xl italic lg:text-6xl">{t("landing.quote")}</p>
            </Reveal>
          </div>
        </section>

        <section id="perfiles" className="bg-sand px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <h2 className="text-4xl font-bold lg:text-5xl">{t("landing.profilesTitle")}</h2>
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
                {t("landing.profilesQuote")}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-24 lg:py-32">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
            <Reveal className="flex-1">
              <h2 className="text-4xl font-bold">{t("landing.mapTitle")}</h2>
              <p className="mt-6 text-lg text-slate">{t("landing.mapText")}</p>
              <div className="mt-10 flex flex-col gap-4">
                <div className="flex items-center gap-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold">
                    {t("landing.mapChinaSpain")}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {t("landing.mapSpain")}
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold">
                    {t("landing.mapChinaColombia")}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {t("landing.mapColombia")}
                  </span>
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

        <section className="px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <h2 className="text-4xl font-bold lg:text-5xl">{t("landing.testimonialsTitle")}</h2>
              <p className="mt-4 max-w-2xl text-slate">{t("landing.testimonialsIntro")}</p>
            </Reveal>
            <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
              {[0, 1, 2].map((slot) => (
                <Reveal key={slot} delay={slot * 60} className="bg-background p-10">
                  <div className="space-y-3 text-xs uppercase tracking-widest text-slate/60">
                    {testimonialFields.map((field) => (
                      <p key={field}>{field}</p>
                    ))}
                  </div>
                  <p className="mt-6 font-serif text-lg italic text-slate/50">
                    {t("landing.testimonialsPlaceholder")}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sand px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <h2 className="text-4xl font-bold lg:text-5xl">{t("landing.startTitle")}</h2>
              <p className="mt-6 max-w-2xl text-lg text-slate">{t("landing.startIntro")}</p>
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

        <section id="faq" className="px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="text-center text-4xl font-bold lg:text-5xl">{t("landing.faqTitle")}</h2>
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

        <section className="px-6 pb-24">
          <Reveal className="relative mx-auto max-w-5xl overflow-hidden border border-border p-10 text-center sm:p-16">
            <div className="pointer-events-none absolute -right-32 -top-32 size-64 rounded-full bg-gold/5" />
            <h2 className="relative z-10 text-4xl font-bold lg:text-5xl">
              {t("landing.ctaFinalTitle")}
            </h2>
            <p className="relative z-10 mx-auto mt-8 max-w-2xl text-lg text-slate sm:text-xl">
              {t("landing.ctaFinalText")}
            </p>
            <div className="relative z-10 mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="#contacto"
                className="bg-navy px-10 py-5 text-xs font-bold uppercase tracking-widest text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                {t("landing.ctaFinalPrimary")}
              </a>
              <a
                href="#contacto"
                className="border border-border px-10 py-5 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-navy hover:text-navy-foreground"
              >
                {t("landing.ctaFinalSecondary")}
              </a>
            </div>
          </Reveal>
        </section>

        <section id="contacto" className="bg-sand px-6 py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-4xl font-bold lg:text-5xl">{t("contact.title")}</h2>
              <p className="mt-6 max-w-md text-lg text-slate">{t("contact.description")}</p>
              <div className="mt-12 border-t border-border pt-8">
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate">
                  {t("contact.prefer")}
                </p>
                <a
                  href="https://wa.me/8618217760619?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-3 text-lg font-semibold transition-colors hover:text-gold"
                >
                  {t("contact.chat")}
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
            {footerCountries.map((country) => (
              <span key={country}>{country}</span>
            ))}
          </div>
          <div className="text-xs text-slate/60">
            {t("landing.footerText", { year: new Date().getFullYear() })}
          </div>
        </div>
      </footer>
    </div>
  );
}
