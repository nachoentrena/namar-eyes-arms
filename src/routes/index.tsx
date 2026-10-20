import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

import heroPort from "@/assets/hero-port.jpg";
import onTheGroundAsset from "@/assets/nacho-feria.jpg.asset.json";
import qualityControlAsset from "@/assets/ana-maria-fabrica.jpg.asset.json";
import teamPhotoAsset from "@/assets/equipo-canton-fair.jpg.asset.json";
const onTheGround = onTheGroundAsset.url;
const qualityControl = qualityControlAsset.url;
const teamPhoto = teamPhotoAsset.url;
import { ContactForm } from "@/components/namar/contact-form";
import { MobileCta } from "@/components/namar/mobile-cta";
import { Reveal } from "@/components/namar/reveal";
import { ServicesBlocks } from "@/components/namar/services-blocks";
import { SiteFooter } from "@/components/namar/site-footer";
import { SiteHeader } from "@/components/namar/site-header";
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

  const heroTrust = t("landing.heroTrust", { returnObjects: true }) as string[];
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
  const serviceGroups = t("landing.serviceGroups", { returnObjects: true }) as Array<{
    title: string;
    items: Array<{ title: string; text: string }>;
  }>;
  const costItems = t("landing.costItems", { returnObjects: true }) as string[];
  const steps = t("landing.steps", { returnObjects: true }) as Array<{
    n: string;
    title: string;
    text: string;
  }>;
  const team = t("landing.team", { returnObjects: true }) as Array<{
    initials: string;
    name: string;
    role: string;
    text: string;
    photo: string;
    alt: string;
    linkedin: string;
  }>;
  const differentiators = t("landing.differentiators", { returnObjects: true }) as Array<{
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

  const waHref = whatsappHref(t("whatsapp.message"));

  return (
    <div className="bg-background font-sans text-navy">
      <SiteHeader />
      <MobileCta />

      <main className="pb-14 sm:pb-0">
        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section
          id="inicio"
          className="relative flex min-h-[650px] overflow-hidden px-5 pb-12 pt-24 sm:min-h-[680px] sm:px-6 sm:pb-16 sm:pt-32 lg:min-h-[700px] lg:items-center lg:py-32"
        >
          <img
            src={heroPort}
            width={1200}
            height={1504}
            alt="Puerto de contenedores en China al atardecer con grúas portuarias"
            className="absolute inset-0 size-full object-cover object-[62%_center] sm:object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/75 to-navy/20 lg:bg-linear-to-r lg:from-navy lg:via-navy/80 lg:to-navy/10" />
          <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-between gap-10">
            <div className="max-w-3xl space-y-5 text-navy-foreground sm:space-y-7">
              <div className="inline-flex items-center gap-3 border border-gold/50 bg-navy/55 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gold backdrop-blur-sm sm:px-4 sm:py-2 sm:text-[11px]">
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
              <p className="max-w-xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg lg:text-xl">
                {t("landing.heroDescription")}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="/diagnostico"
                  className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-gold-foreground transition-colors hover:bg-navy-foreground sm:px-8 sm:py-4"
                >
                  {t("landing.heroPrimaryCta")}
                </a>
                <a
                  href="#proceso"
                  className="inline-flex items-center justify-center gap-2 border border-navy-foreground/55 bg-navy/25 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-navy-foreground backdrop-blur-sm transition-colors hover:border-gold hover:text-gold sm:px-8 sm:py-4"
                >
                  {t("landing.heroSecondaryCta")}
                </a>
              </div>
              <a
                href="#costes"
                className="group inline-flex items-center gap-3 border-l-2 border-gold pl-4 text-sm font-semibold text-navy-foreground transition-colors hover:text-gold"
              >
                <span className="grid size-6 shrink-0 place-items-center bg-gold/15 text-gold">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="min-w-0">{t("landing.heroMicro")}</span>
                <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
              <div className="flex flex-col gap-2 border-t border-navy-foreground/25 pt-4 text-[11px] font-bold uppercase tracking-widest text-navy-foreground/70 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:pt-5">
                {heroTrust.map((item, i) => (
                  <span key={item} className="flex items-center gap-4">
                    {i > 0 ? <span className="hidden text-gold sm:inline">·</span> : null}
                    {item}
                  </span>
                ))}
              </div>
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
              <p className="mt-4 max-w-2xl border-l-2 border-gold pl-4 text-sm font-semibold text-navy-foreground/85 sm:text-base">
                {t("landing.problemAudience")}
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
            <ServicesBlocks groups={serviceGroups} />
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
                  <p className="mt-1 text-sm font-bold text-gold">{t("landing.costFree")}</p>
                  <ul className="mt-4 space-y-3">
                    {costItems.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={3} />
                        <span className="text-navy-foreground/85">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs leading-relaxed text-navy-foreground/50">
                    {t("landing.costDisclaimer")}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
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
            <Reveal className="mt-10 border border-border bg-sand p-5 sm:mt-14 sm:p-8 lg:p-10">
              <h3 className="text-lg font-bold sm:text-2xl">{t("landing.startTitle")}</h3>
              <p className="mt-2 max-w-2xl text-[15px] text-slate sm:text-base">
                {t("landing.startIntro")}
              </p>
              <ol className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-3 sm:gap-6">
                {startSteps.map((step) => (
                  <li key={step.n} className="border-t-2 border-gold pt-3">
                    <span className="text-xs font-bold text-gold">{step.n}</span>
                    <h4 className="mt-1 text-sm font-bold sm:text-base">{step.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate">{step.text}</p>
                  </li>
                ))}
              </ol>
              <a href="/diagnostico" className={`${primaryBtn} mt-6 sm:mt-8`}>
                {t("landing.processCta")}
              </a>
            </Reveal>
          </div>
        </section>


        {/* ─── PERSONAS ─────────────────────────────────────────── */}
        <section id="equipo" className={section}>
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-3xl">
              <p className={eyebrow}>{t("landing.teamLabel")}</p>
              <h2 className={`mt-3 ${h2Serif}`}>{t("landing.teamTitle")}</h2>
              <p className={`mt-4 ${lead}`}>{t("landing.teamText")}</p>
            </Reveal>

            <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2 lg:gap-6">
              {team.map((person, i) => (
                <Reveal key={person.name} delay={i * 80}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-panel">
                    <div className="relative bg-sand">
                      <img
                        src={person.photo === "ana" ? qualityControl : onTheGround}
                        width={886}
                        height={1920}
                        loading="lazy"
                        alt={person.alt}
                        className="aspect-4/5 w-full object-cover object-[50%_14%] sm:aspect-3/2 sm:object-[50%_10%]"
                      />
                      <span className="absolute left-4 top-4 grid size-10 place-items-center bg-navy text-xs font-bold text-navy-foreground">
                        {person.initials}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h3 className="text-lg font-bold text-foreground sm:text-xl">{person.name}</h3>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-gold sm:text-xs">
                        {person.role}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {person.text}
                      </p>
                      {person.linkedin ? (
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navy hover:underline"
                        >
                          <Linkedin className="size-4" /> LinkedIn
                        </a>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={100} className="mx-auto mt-6 max-w-lg sm:mt-8">
              <figure className="overflow-hidden rounded-2xl border border-border bg-sand shadow-panel">
                <img
                  src={teamPhoto}
                  width={1600}
                  height={2133}
                  loading="lazy"
                  alt="Nacho y Ana María, de NAMAR Global, en la entrada de la Feria de Cantón (China Import and Export Fair)"
                  className="aspect-4/5 w-full object-cover object-[50%_42%]"
                />
                <figcaption className="border-t border-border bg-card px-4 py-3 text-xs text-muted-foreground sm:text-sm">
                  {t("landing.teamPhotoCaption")}
                </figcaption>
              </figure>
            </Reveal>

            <p className="mt-6 border-l-2 border-gold pl-4 text-sm font-semibold">
              {t("landing.teamNote")}
            </p>
          </div>
        </section>

        {/* ─── POR QUÉ NAMAR ────────────────────────────────────── */}
        <section id="nosotros" className={`bg-sand ${section}`}>
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-3xl">
              <h2 className={h2Sans}>{t("landing.whyTitle")}</h2>
            </Reveal>
            <div className="mt-8 grid gap-px border border-border bg-border sm:mt-12 md:grid-cols-2 lg:grid-cols-4">
              {differentiators.map((item, i) => (
                <Reveal key={item.title} delay={i * 60} className="bg-background p-5 sm:p-7 lg:p-9">
                  <span className="text-sm font-bold text-gold">{`0${i + 1}`}</span>
                  <h3 className="mt-3 text-base font-bold sm:mt-4 sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate sm:text-base">{item.text}</p>
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
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-3 inline-flex items-center gap-3 text-base font-semibold transition-colors hover:text-gold sm:text-lg"
                >
                  {siteConfig.email}
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

      <SiteFooter />
    </div>
  );
}
