import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

import heroPort from "@/assets/hero-port.jpg";
import onTheGroundAsset from "@/assets/nacho-feria.jpg.asset.json";
import qualityControlAsset from "@/assets/ana-maria-fabrica.jpg.asset.json";
import teamPhotoAsset from "@/assets/equipo-canton-fair.jpg.asset.json";
import worldMap from "@/assets/world-map.jpg";
const onTheGround = onTheGroundAsset.url;
const qualityControl = qualityControlAsset.url;
const teamPhoto = teamPhotoAsset.url;
import { ContactForm } from "@/components/namar/contact-form";
import { MobileCta } from "@/components/namar/mobile-cta";
import { Reveal } from "@/components/namar/reveal";
import { ServicesCarousel } from "@/components/namar/services-carousel";
import { SiteHeader } from "@/components/namar/site-header";
import { WhatsAppFloat } from "@/components/namar/whatsapp-float";
import { siteConfig, whatsappHref } from "@/lib/site-config";

const title = "Importar desde China a España y Colombia | NAMAR Global";
const description =
  "Tu equipo en China: búsqueda y verificación de proveedores, negociación, control de calidad, logística y aduanas. 8 años sobre el terreno. Simulamos los costes de tu importación en 24 h.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "importar desde China, proveedores de China, sourcing China, control de calidad en China, importar desde China a España, importar desde China a Colombia, verificación de fábricas China, agente de compras China",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:url", content: `${siteConfig.siteUrl}/` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.siteUrl}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "NAMAR Global",
          url: `${siteConfig.siteUrl}/`,
          description,
          areaServed: [
            { "@type": "Country", name: "España" },
            { "@type": "Country", name: "Colombia" },
          ],
          knowsAbout: [
            "Importar desde China",
            "Sourcing en China",
            "Verificación de proveedores en China",
            "Control de calidad en China",
            "Logística internacional China-España",
            "Logística internacional China-Colombia",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const primaryBtn =
  "inline-flex items-center justify-center gap-2 bg-navy px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground sm:px-8 sm:py-4";
const secondaryBtn =
  "inline-flex items-center justify-center gap-2 border border-border px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-navy hover:text-navy-foreground sm:px-8 sm:py-4";
const goldBtn =
  "inline-flex items-center justify-center gap-2 bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-gold-foreground transition-colors hover:bg-navy-foreground sm:px-8 sm:py-4";
const eyebrow = "text-[11px] font-bold uppercase tracking-widest text-gold";

/* Shared responsive rhythm */
const section = "px-5 py-14 sm:px-6 sm:py-20 lg:py-28";
const h2Sans = "text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl";
const h2Serif = "font-serif text-4xl italic leading-[1.02] sm:text-5xl lg:text-6xl";
const lead = "text-base leading-relaxed text-slate sm:text-lg";

function Index() {
  const { t } = useTranslation();

  const authorityPoints = t("landing.authorityPoints", { returnObjects: true }) as Array<{
    label: string;
    text: string;
  }>;
  const problems = t("landing.problems", { returnObjects: true }) as Array<{
    risk: string;
    action: string;
    result: string;
  }>;
  const problemColumns = t("landing.problemColumns", { returnObjects: true }) as {
    risk: string;
    action: string;
    result: string;
  };
  const phases = t("landing.phases", { returnObjects: true }) as Array<{
    key: string;
    label: string;
  }>;
  const services = t("landing.services", { returnObjects: true }) as Array<{
    n: string;
    phase: string;
    title: string;
    text: string;
  }>;
  const costItems = t("landing.costItems", { returnObjects: true }) as string[];
  const objections = t("landing.objections", { returnObjects: true }) as Array<{
    q: string;
    a: string;
  }>;
  const steps = t("landing.steps", { returnObjects: true }) as Array<{
    n: string;
    title: string;
    text: string;
  }>;
  const team = t("landing.team", { returnObjects: true }) as Array<{
    name: string;
    role: string;
    initials: string;
  }>;
  const differentiators = t("landing.differentiators", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;
  const routes = t("landing.routes", { returnObjects: true }) as Array<{
    from: string;
    to: string;
    title: string;
    text: string;
    tags: string[];
  }>;
  const proof = t("landing.proof", { returnObjects: true }) as Array<{
    title: string;
    text: string;
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
  const footerCountries = t("landing.footerCountries", { returnObjects: true }) as string[];

  const waHref = whatsappHref(t("whatsapp.message"));

  return (
    <div className="bg-background font-sans text-navy">
      <SiteHeader />
      <MobileCta />
      <WhatsAppFloat />

      <main className="pb-14 sm:pb-0">
        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section id="inicio" className="px-5 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-32 lg:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-5 sm:space-y-7">
              <div className="inline-flex items-center gap-3 border border-gold/25 bg-gold/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gold sm:px-4 sm:py-2 sm:text-[11px]">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-gold" />
                </span>
                {t("landing.heroBadge")}
              </div>
              <h1 className="font-serif text-[2.625rem] italic leading-[1] sm:text-6xl lg:text-7xl xl:text-8xl">
                {t("landing.heroTitle")}
                <span className="mt-2 block font-sans text-[1.625rem] font-bold not-italic leading-tight sm:mt-3 sm:text-4xl lg:text-5xl xl:text-6xl">
                  {t("landing.heroSubtitle")}
                </span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-slate sm:text-lg lg:text-xl">
                {t("landing.heroDescription")}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a href="#contacto" className={primaryBtn}>
                  {t("landing.heroPrimaryCta")}
                </a>
                <a href="#proceso" className={secondaryBtn}>
                  {t("landing.heroSecondaryCta")}
                </a>
              </div>
              <a
                href="#costes"
                className="group inline-flex items-center gap-3 border-l-2 border-gold pl-4 text-sm font-semibold text-navy transition-colors hover:text-gold"
              >
                <span className="grid size-6 shrink-0 place-items-center bg-gold/15 text-gold">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="min-w-0">{t("landing.heroMicro")}</span>
                <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="relative mb-8 lg:mb-0">
              <img
                src={heroPort}
                width={1200}
                height={1504}
                alt="Puerto de contenedores en China al atardecer con grúas portuarias"
                className="aspect-4/3 w-full object-cover shadow-elevated sm:aspect-4/5"
              />
              <div className="absolute -bottom-6 left-0 max-w-[85%] border border-border bg-background p-4 shadow-panel sm:-bottom-8 sm:-left-8 sm:max-w-xs sm:p-8">
                <p className="font-serif text-sm italic leading-relaxed text-slate sm:text-base">
                  {t("landing.heroQuote")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── AUTORIDAD: 8 AÑOS ────────────────────────────────── */}
        <section className={`border-y border-border bg-sand ${section}`}>
          <div className="mx-auto max-w-7xl">
            <Reveal className="grid gap-6 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className={eyebrow}>{t("landing.authorityLabel")}</p>
                <h2 className={`mt-3 ${h2Serif}`}>{t("landing.authorityTitle")}</h2>
              </div>
              <div className="lg:col-span-7 lg:pt-10">
                <p className={`${lead} lg:text-xl`}>{t("landing.authorityText")}</p>
                <a
                  href="#proceso"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors hover:text-gold"
                >
                  {t("landing.authorityLink")}
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-px border border-border bg-border sm:mt-12 md:grid-cols-3">
              {authorityPoints.map((item, i) => (
                <Reveal key={item.label} delay={i * 60} className="bg-background p-5 sm:p-7 lg:p-9">
                  <p className={eyebrow}>{item.label}</p>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-slate sm:text-base">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROBLEMA: RIESGO → QUÉ HACEMOS → RESULTADO ───────── */}
        <section className="overflow-hidden bg-navy px-5 py-14 text-navy-foreground sm:px-6 sm:py-18 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-3xl">
              <h2 className={h2Sans}>{t("landing.problemTitle")}</h2>
              <p className="mt-2 max-w-2xl text-base text-navy-foreground/60 sm:mt-3 sm:text-lg">
                {t("landing.problemIntro")}
              </p>
            </Reveal>

            <div className="mt-5 grid gap-5 sm:mt-6 lg:grid-cols-12 lg:gap-10">
              <Reveal delay={80} className="lg:order-2 lg:col-span-4">
                <div className="relative overflow-hidden lg:h-full lg:min-h-[420px]">
                  <img
                    src={qualityControl}
                    width={886}
                    height={1575}
                    loading="lazy"
                    alt="Ana María, de NAMAR Global, revisando un producto junto al responsable de una fábrica"
                    className="aspect-[16/10] w-full object-cover object-[50%_28%] grayscale transition-all duration-700 hover:grayscale-0 sm:aspect-[2/1] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                  />
                </div>
              </Reveal>

              <Reveal className="lg:order-1 lg:col-span-8">
                <div className="hidden grid-cols-12 gap-6 border-b border-navy-foreground/15 pb-2 text-[11px] font-bold uppercase tracking-widest text-gold md:grid">
                  <span className="col-span-3">{problemColumns.risk}</span>
                  <span className="col-span-6">{problemColumns.action}</span>
                  <span className="col-span-3">{problemColumns.result}</span>
                </div>
                <ul className="divide-y divide-navy-foreground/10 border-t border-navy-foreground/15 md:border-t-0">
                  {problems.map((row, i) => (
                    <li
                      key={row.risk}
                      className="grid gap-1 py-3 md:grid-cols-12 md:items-start md:gap-6 md:py-4"
                    >
                      <div className="flex items-baseline gap-3 md:col-span-3">
                        <span className="text-xs font-bold text-gold">{`0${i + 1}`}</span>
                        <h3 className="text-base font-bold leading-snug sm:text-lg">{row.risk}</h3>
                      </div>
                      <p className="pl-7 text-[15px] leading-relaxed text-navy-foreground/75 sm:text-base md:col-span-6 md:pl-0">
                        <span className="mr-2 text-[10px] font-bold uppercase tracking-widest text-gold md:hidden">
                          {problemColumns.action} →
                        </span>
                        {row.action}
                      </p>
                      <p className="flex items-start gap-2 pl-7 text-[15px] font-semibold text-navy-foreground sm:text-base md:col-span-3 md:pl-0">
                        <Check className="mt-1 size-4 shrink-0 text-gold" strokeWidth={3} />
                        {row.result}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-serif text-xl italic text-gold sm:mt-5 sm:text-2xl lg:text-3xl">
                  {t("landing.problemQuote")}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── SERVICIOS COMO PROCESO DE CONTROL ────────────────── */}
        <section id="servicios" className={section}>
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-3xl">
              <p className={eyebrow}>{t("landing.servicesLabel")}</p>
              <h2 className={`mt-3 ${h2Sans}`}>{t("landing.servicesTitle")}</h2>
              <p className={`mt-4 ${lead}`}>{t("landing.servicesIntro")}</p>
            </Reveal>

            <Reveal className="mt-8 sm:mt-10">
              <ol className="flex flex-wrap gap-2 lg:grid lg:grid-cols-5 lg:gap-px lg:border lg:border-border lg:bg-border">
                {phases.map((phase, i) => (
                  <li
                    key={phase.key}
                    className="relative flex flex-1 items-center gap-2.5 border border-border bg-background px-3 py-2.5 lg:border-0 lg:px-6 lg:py-5"
                  >
                    <span className="grid size-6 shrink-0 place-items-center bg-navy text-[11px] font-bold text-navy-foreground lg:size-8 lg:text-xs">
                      {i + 1}
                    </span>
                    <span className="whitespace-nowrap text-[11px] font-bold uppercase tracking-widest lg:text-sm">
                      {phase.label}
                    </span>
                    {i < phases.length - 1 ? (
                      <ArrowRight className="absolute -right-2.5 top-1/2 z-10 hidden size-5 -translate-y-1/2 bg-background text-gold lg:block" />
                    ) : null}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <Reveal className="mt-8 sm:mt-10">
            <ServicesCarousel items={services} />
          </Reveal>
        </section>

        {/* ─── SIMULACIÓN DE COSTES ─────────────────────────────── */}
        <section id="costes" className="px-5 pb-14 sm:px-6 sm:pb-20 lg:pb-28">
          <Reveal className="relative mx-auto max-w-7xl overflow-hidden border border-navy bg-navy text-navy-foreground">
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-gold/10" />
            <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:gap-16 lg:p-16">
              <div className="lg:col-span-7">
                <p className={eyebrow}>{t("landing.costLabel")}</p>
                <h2 className={`mt-3 ${h2Serif}`}>{t("landing.costTitle")}</h2>
                <p className="mt-4 max-w-xl text-base text-navy-foreground/70 sm:text-lg">
                  {t("landing.costText")}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
                  <a
                    href={siteConfig.costCalculatorHref}
                    {...(siteConfig.costCalculatorExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={goldBtn}
                  >
                    {t("landing.costCta")}
                    <ArrowRight className="size-4" />
                  </a>
                  <p className="text-sm text-navy-foreground/60">{t("landing.costNote")}</p>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="border border-navy-foreground/15 bg-navy-foreground/5 p-5 sm:p-8">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-navy-foreground/50">
                    24 h
                  </p>
                  <ul className="mt-4 space-y-3">
                    {costItems.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={3} />
                        <span className="text-navy-foreground/85">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─── OBJECIONES ───────────────────────────────────────── */}
        <section className={`bg-sand ${section}`}>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className={h2Sans}>{t("landing.objectionsTitle")}</h2>
              <p className={`mt-3 ${lead}`}>{t("landing.objectionsIntro")}</p>
            </Reveal>
            <div className="mt-8 divide-y divide-border border-y border-border sm:mt-10">
              {objections.map((item, i) => (
                <Reveal key={item.q} delay={i * 40}>
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-semibold sm:py-5 sm:text-lg">
                      {item.q}
                      <span className="text-xl text-gold transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="pb-5 text-[15px] leading-relaxed text-slate sm:text-base">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROCESO ──────────────────────────────────────────── */}
        <section id="proceso" className={section}>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className={`text-center ${h2Sans}`}>{t("landing.processTitle")}</h2>
            </Reveal>
            <ol className="relative mt-10 space-y-7 before:absolute before:bottom-2 before:left-5 before:top-2 before:w-px before:bg-border sm:mt-14 sm:space-y-10 sm:before:left-6">
              {steps.map((step, i) => (
                <Reveal as="li" key={step.n} delay={i * 60} className="relative flex gap-4 sm:gap-8">
                  <span className="z-10 grid size-10 shrink-0 place-items-center border border-navy bg-background text-xs font-bold sm:size-12 sm:text-sm">
                    {step.n}
                  </span>
                  <div className="pt-1.5 sm:pt-2">
                    <h3 className="text-lg font-bold sm:text-xl">{step.title}</h3>
                    <p className="mt-1.5 text-[15px] text-slate sm:text-base">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal className="mt-10 text-center sm:mt-14">
              <p className="font-serif text-xl italic text-slate sm:text-2xl lg:text-3xl">
                {t("landing.processQuote")}
              </p>
              <a href="#contacto" className={`${primaryBtn} mt-6 sm:mt-8`}>
                {t("landing.processCta")}
              </a>
            </Reveal>
          </div>
        </section>

        {/* ─── SOBRE EL TERRENO ─────────────────────────────────── */}
        <section className="relative bg-navy lg:grid lg:grid-cols-2">
          <img
            src={onTheGround}
            width={886}
            height={1575}
            loading="lazy"
            alt="Nacho, de NAMAR Global, revisando productos con un proveedor en una feria en China"
            className="absolute inset-0 h-full w-full object-cover object-[50%_10%] lg:static lg:order-2 lg:h-[600px] lg:object-top"
          />
          <div className="absolute inset-0 bg-navy/75 lg:hidden" />
          <div className="relative flex min-h-[400px] items-center px-5 py-14 sm:min-h-[460px] sm:px-6 lg:order-1 lg:min-h-0 lg:py-0">
            <div className="ml-auto w-full max-w-[40rem] lg:pr-12">
              <div className="max-w-2xl text-navy-foreground">
                <h2 className={h2Sans}>{t("landing.onTheGroundTitle")}</h2>
                <p className="mt-4 text-base text-navy-foreground/70 sm:text-lg">
                  {t("landing.onTheGroundText")}
                </p>
                <a href="#contacto" className={`${goldBtn} mt-6 sm:mt-8`}>
                  {t("landing.onTheGroundCta")}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PERSONAS ─────────────────────────────────────────── */}
        <section id="equipo" className={section}>
          <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-12 lg:items-center lg:gap-16">
            <Reveal className="lg:order-2 lg:col-span-6">
              <p className={eyebrow}>{t("landing.teamLabel")}</p>
              <h2 className={`mt-3 ${h2Serif}`}>{t("landing.teamTitle")}</h2>
              <p className={`mt-4 ${lead}`}>{t("landing.teamText")}</p>
              <p className="mt-5 border-l-2 border-gold pl-4 text-sm font-semibold">
                {t("landing.teamNote")}
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5 sm:mt-8 sm:gap-6">
                {team.map((person) => (
                  <li key={person.name}>
                    <h3 className="text-lg font-bold sm:text-xl">{person.name}</h3>
                    <p className="mt-1 text-xs text-slate sm:text-sm">{person.role}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100} className="group lg:order-1 lg:col-span-6">
              <div className="relative overflow-hidden border border-border bg-sand">
                <img
                  src={teamPhoto}
                  width={1600}
                  height={2133}
                  loading="lazy"
                  alt="Nacho y Ana María, de NAMAR Global, en la entrada de la Feria de Cantón (China Import and Export Fair)"
                  className="aspect-4/5 w-full object-cover object-[50%_45%] sm:aspect-square lg:aspect-4/5"
                />
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─── POR QUÉ NAMAR ────────────────────────────────────── */}
        <section id="nosotros" className={`bg-sand ${section}`}>
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-3xl">
              <h2 className={h2Sans}>{t("landing.whyTitle")}</h2>
            </Reveal>
            <div className="mt-8 grid gap-px border border-border bg-border sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((item, i) => (
                <Reveal key={item.title} delay={i * 60} className="bg-background p-5 sm:p-7 lg:p-9">
                  <h3 className="text-base font-bold sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate sm:text-base">{item.text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10 text-center sm:mt-14">
              <p className="font-serif text-3xl italic sm:text-4xl lg:text-6xl">{t("landing.quote")}</p>
            </Reveal>
          </div>
        </section>

        {/* ─── RUTAS: ESPAÑA + COLOMBIA ─────────────────────────── */}
        <section id="rutas" className={`border-y border-border bg-background ${section}`}>
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-6">
                <p className={eyebrow}>{t("landing.routesLabel")}</p>
                <h2 className={`mt-3 ${h2Sans}`}>{t("landing.routesTitle")}</h2>
                <p className={`mt-4 ${lead}`}>{t("landing.routesText")}</p>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-6">
                <img
                  src={worldMap}
                  width={1200}
                  height={800}
                  loading="lazy"
                  alt="Mapa mundial minimalista con las rutas de importación desde China a España y Colombia"
                  className="mx-auto aspect-video w-full max-w-md object-contain mix-blend-multiply lg:max-w-none"
                />
              </Reveal>
            </div>

            <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
              {routes.map((route, i) => (
                <Reveal
                  key={route.to}
                  delay={i * 80}
                  className="flex flex-col border border-border bg-background p-5 shadow-panel sm:p-8 lg:p-10"
                >
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                    <span className="text-gold">{route.from}</span>
                    <span className="h-px flex-1 bg-border" />
                    <ArrowRight className="size-4 text-gold" />
                    <span className="h-px flex-1 bg-border" />
                    <span>{route.to}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold sm:mt-6 sm:text-2xl">{route.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate sm:text-base">
                    {route.text}
                  </p>
                  <ul className="mt-4 flex flex-nowrap gap-1.5 sm:mt-6 sm:gap-2">
                    {route.tags.map((tag) => (
                      <li
                        key={tag}
                        className="flex-1 border border-border bg-sand px-1.5 py-1 text-center text-[9px] font-semibold uppercase tracking-wide text-slate sm:px-2 sm:py-1.5 sm:text-[11px] sm:tracking-wider"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-5 text-sm text-slate sm:mt-8">{t("landing.routesNote")}</p>
            </Reveal>
          </div>
        </section>

        {/* ─── PRUEBA OPERATIVA (sustituye testimonios) ─────────── */}
        <section className={`bg-sand ${section}`}>
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-3xl">
              <p className={eyebrow}>{t("landing.proofLabel")}</p>
              <h2 className={`mt-3 ${h2Sans}`}>{t("landing.proofTitle")}</h2>
              <p className={`mt-4 ${lead}`}>{t("landing.proofIntro")}</p>
            </Reveal>
            <div className="mt-8 grid gap-px border border-border bg-border sm:mt-10 md:grid-cols-2 lg:grid-cols-4">
              {proof.map((item, i) => (
                <Reveal key={item.title} delay={i * 60} className="bg-background p-5 sm:p-7 lg:p-9">
                  <span className="text-sm font-bold text-gold">{`0${i + 1}`}</span>
                  <h3 className="mt-3 text-base font-bold sm:mt-4 sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate sm:text-base">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EMPEZAR ──────────────────────────────────────────── */}
        <section className={`bg-navy text-navy-foreground ${section}`}>
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <h2 className={h2Sans}>{t("landing.startTitle")}</h2>
              <p className="mt-3 max-w-2xl text-base text-navy-foreground/60 sm:text-lg">
                {t("landing.startIntro")}
              </p>
            </Reveal>
            <div className="mt-8 grid gap-px border border-navy-foreground/15 bg-navy-foreground/15 sm:mt-12 md:grid-cols-3">
              {startSteps.map((step, i) => (
                <Reveal key={step.n} delay={i * 60} className="bg-navy p-5 sm:p-7 lg:p-9">
                  <span className="text-sm font-bold text-gold">{step.n}</span>
                  <h3 className="mt-3 text-xl font-bold sm:mt-5 sm:text-2xl">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-navy-foreground/65 sm:mt-3 sm:text-base">
                    {step.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ──────────────────────────────────────────────── */}
        <section id="faq" className={section}>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className={`text-center ${h2Sans}`}>{t("landing.faqTitle")}</h2>
            </Reveal>
            <div className="mt-8 divide-y divide-border border-y border-border sm:mt-12">
              {faqs.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 30}>
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-semibold sm:py-5 sm:text-base">
                      {faq.q}
                      <span className="text-xl text-gold transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="pb-5 text-[15px] leading-relaxed text-slate sm:text-base">{faq.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTACTO (CTA final) ─────────────────────────────── */}
        <section id="contacto" className={`border-t border-border bg-sand ${section}`}>
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className={h2Serif}>{t("contact.title")}</h2>
              <p className={`mt-5 max-w-lg ${lead}`}>{t("contact.description")}</p>
              <p className="mt-4 border-l-2 border-gold pl-4 text-sm font-semibold">
                {t("contact.promise")}
              </p>
              <div className="mt-6 border-t border-border pt-5 sm:mt-10 sm:pt-8">
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate">
                  {t("contact.prefer")}
                </p>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-3 text-base font-semibold transition-colors hover:text-gold sm:text-lg"
                >
                  {t("contact.chat")}
                  <ArrowRight className="size-5" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={120} className="border border-border bg-background p-5 sm:p-8 lg:p-10">
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-sand-strong px-5 py-10 pb-24 sm:px-6 sm:py-12 sm:pb-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <span className="grid size-6 place-items-center bg-navy text-[10px] font-bold tracking-tighter text-navy-foreground">
                N
              </span>
              <span className="text-sm font-bold uppercase tracking-tight">
                Namar <span className="text-gold">Global</span>
              </span>
            </div>
            <p className="mt-2 text-xs text-slate">{t("landing.footerTagline")}</p>
          </div>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-slate sm:gap-8">
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
