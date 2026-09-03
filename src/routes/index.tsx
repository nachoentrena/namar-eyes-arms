import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
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
  "inline-flex items-center justify-center gap-2 bg-navy px-8 py-4 text-xs font-bold uppercase tracking-widest text-navy-foreground transition-colors hover:bg-gold hover:text-gold-foreground";
const secondaryBtn =
  "inline-flex items-center justify-center gap-2 border border-border px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-navy hover:text-navy-foreground";
const goldBtn =
  "inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-xs font-bold uppercase tracking-widest text-gold-foreground transition-colors hover:bg-navy-foreground";
const eyebrow = "text-[11px] font-bold uppercase tracking-widest text-gold";

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
  const profiles = t("landing.profiles", { returnObjects: true }) as Array<{
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

      <main className="pb-16 sm:pb-0">
        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section id="inicio" className="px-6 pb-20 pt-28 lg:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 border border-gold/25 bg-gold/10 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-gold">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-gold" />
                </span>
                {t("landing.heroBadge")}
              </div>
              <h1 className="font-serif text-5xl italic leading-[0.98] sm:text-6xl lg:text-7xl xl:text-8xl">
                {t("landing.heroTitle")}
                <span className="mt-3 block font-sans text-3xl font-bold not-italic leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                  {t("landing.heroSubtitle")}
                </span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate sm:text-xl">
                {t("landing.heroDescription")}
              </p>
              <div className="flex flex-wrap gap-4">
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
                {t("landing.heroMicro")}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="relative mb-10 lg:mb-0">
              <img
                src={heroPort}
                width={1200}
                height={1504}
                alt="Puerto de contenedores en China al atardecer con grúas portuarias"
                className="aspect-4/5 w-full object-cover shadow-elevated"
              />
              <div className="absolute -bottom-8 left-0 max-w-xs border border-border bg-background p-6 shadow-panel sm:-left-8 sm:p-8">
                <p className="font-serif text-base italic leading-relaxed text-slate">
                  {t("landing.heroQuote")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── AUTORIDAD: 8 AÑOS ────────────────────────────────── */}
        <section className="border-y border-border bg-sand px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className={eyebrow}>{t("landing.authorityLabel")}</p>
                <h2 className="mt-5 font-serif text-4xl italic leading-[1.05] lg:text-6xl">
                  {t("landing.authorityTitle")}
                </h2>
              </div>
              <div className="lg:col-span-7 lg:pt-12">
                <p className="text-lg leading-relaxed text-slate lg:text-xl">
                  {t("landing.authorityText")}
                </p>
                <a
                  href="#proceso"
                  className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors hover:text-gold"
                >
                  {t("landing.authorityLink")}
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
              {authorityPoints.map((item, i) => (
                <Reveal key={item.label} delay={i * 60} className="bg-background p-8 lg:p-10">
                  <p className={eyebrow}>{item.label}</p>
                  <p className="mt-4 leading-relaxed text-slate">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROBLEMA: RIESGO → QUÉ HACEMOS → RESULTADO ───────── */}
        <section className="overflow-hidden bg-navy px-6 py-24 text-navy-foreground lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-8">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                  {t("landing.problemTitle")}
                </h2>
                <p className="mt-6 max-w-2xl text-lg text-navy-foreground/60">
                  {t("landing.problemIntro")}
                </p>
              </Reveal>
              <Reveal delay={120} className="hidden lg:col-span-4 lg:block">
                <img
                  src={qualityControl}
                  width={1008}
                  height={1264}
                  loading="lazy"
                  alt="Inspectora de calidad midiendo una pieza mecánica en una fábrica china"
                  className="aspect-4/5 w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </Reveal>
            </div>

            <Reveal className="mt-14">
              <div className="hidden grid-cols-12 gap-6 border-b border-navy-foreground/15 pb-4 text-[11px] font-bold uppercase tracking-widest text-gold md:grid">
                <span className="col-span-3">{problemColumns.risk}</span>
                <span className="col-span-6">{problemColumns.action}</span>
                <span className="col-span-3">{problemColumns.result}</span>
              </div>
              <ul className="divide-y divide-navy-foreground/10">
                {problems.map((row, i) => (
                  <li
                    key={row.risk}
                    className="grid gap-3 py-6 md:grid-cols-12 md:items-start md:gap-6 md:py-7"
                  >
                    <div className="flex items-baseline gap-3 md:col-span-3">
                      <span className="text-xs font-bold text-gold">{`0${i + 1}`}</span>
                      <h3 className="text-lg font-bold leading-snug">{row.risk}</h3>
                    </div>
                    <p className="text-navy-foreground/75 md:col-span-6">
                      <span className="mr-2 text-[10px] font-bold uppercase tracking-widest text-gold md:hidden">
                        {problemColumns.action} →
                      </span>
                      {row.action}
                    </p>
                    <p className="flex items-start gap-2 font-semibold text-navy-foreground md:col-span-3">
                      <Check className="mt-1 size-4 shrink-0 text-gold" strokeWidth={3} />
                      {row.result}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-10 font-serif text-2xl italic text-gold lg:text-3xl">
                {t("landing.problemQuote")}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ─── SERVICIOS COMO PROCESO DE CONTROL ────────────────── */}
        <section id="servicios" className="px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-3xl">
              <p className={eyebrow}>{t("landing.servicesLabel")}</p>
              <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
                {t("landing.servicesTitle")}
              </h2>
              <p className="mt-6 text-lg text-slate">{t("landing.servicesIntro")}</p>
            </Reveal>

            <Reveal className="mt-14">
              <ol className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
                {phases.map((phase, i) => (
                  <li
                    key={phase.key}
                    className="relative flex items-center gap-3 bg-background px-5 py-5 lg:px-6"
                  >
                    <span className="grid size-8 shrink-0 place-items-center bg-navy text-xs font-bold text-navy-foreground">
                      {i + 1}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest lg:text-sm">
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

          <Reveal className="mt-12">
            <ServicesCarousel items={services} />
          </Reveal>
        </section>

        {/* ─── SIMULACIÓN DE COSTES ─────────────────────────────── */}
        <section id="costes" className="px-6 pb-24 lg:pb-32">
          <Reveal className="relative mx-auto max-w-7xl overflow-hidden border border-navy bg-navy text-navy-foreground">
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-gold/10" />
            <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
              <div className="lg:col-span-7">
                <p className={eyebrow}>{t("landing.costLabel")}</p>
                <h2 className="mt-5 font-serif text-4xl italic leading-[1.05] lg:text-6xl">
                  {t("landing.costTitle")}
                </h2>
                <p className="mt-6 max-w-xl text-lg text-navy-foreground/70">
                  {t("landing.costText")}
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
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
                <div className="border border-navy-foreground/15 bg-navy-foreground/5 p-6 sm:p-8">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-navy-foreground/50">
                    24 h
                  </p>
                  <ul className="mt-5 space-y-4">
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

        {/* ─── PROCESO ──────────────────────────────────────────── */}
        <section id="proceso" className="px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="text-center text-4xl font-bold leading-tight lg:text-5xl">
                {t("landing.processTitle")}
              </h2>
            </Reveal>
            <ol className="relative mt-20 space-y-12 before:absolute before:bottom-2 before:left-6 before:top-2 before:w-px before:bg-border">
              {steps.map((step, i) => (
                <Reveal as="li" key={step.n} delay={i * 60} className="relative flex gap-6 sm:gap-8">
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
            <Reveal className="mt-20 text-center">
              <p className="font-serif text-2xl italic text-slate lg:text-3xl">
                {t("landing.processQuote")}
              </p>
              <a href="#contacto" className={`${primaryBtn} mt-10`}>
                {t("landing.processCta")}
              </a>
            </Reveal>
          </div>
        </section>

        {/* ─── SOBRE EL TERRENO ─────────────────────────────────── */}
        <section className="relative">
          <img
            src={onTheGround}
            width={1600}
            height={1008}
            loading="lazy"
            alt="Responsable de NAMAR Global recorriendo una fábrica en China junto al gerente de producción"
            className="h-[560px] w-full object-cover sm:h-[520px]"
          />
          <div className="absolute inset-0 bg-navy/75" />
          <div className="absolute inset-0 flex items-center px-6">
            <div className="mx-auto w-full max-w-7xl">
              <div className="max-w-2xl text-navy-foreground">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                  {t("landing.onTheGroundTitle")}
                </h2>
                <p className="mt-6 text-lg text-navy-foreground/70">{t("landing.onTheGroundText")}</p>
                <a href="#contacto" className={`${goldBtn} mt-10`}>
                  {t("landing.onTheGroundCta")}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PERSONAS ─────────────────────────────────────────── */}
        <section id="equipo" className="px-6 py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <p className={eyebrow}>{t("landing.teamLabel")}</p>
              <h2 className="mt-5 font-serif text-4xl italic leading-[1.05] lg:text-6xl">
                {t("landing.teamTitle")}
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-slate">{t("landing.teamText")}</p>
              <p className="mt-8 border-l-2 border-gold pl-4 text-sm font-semibold">
                {t("landing.teamNote")}
              </p>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              {team.map((person, i) => (
                <Reveal key={person.name} delay={i * 80} className="group">
                  <div className="relative aspect-4/5 w-full overflow-hidden border border-border bg-sand">
                    {/* Replace this block with <img src=... alt=... /> when real photos are available */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 border border-dashed border-navy/15 m-4">
                      <span className="grid size-20 place-items-center border border-navy bg-background font-serif text-4xl italic">
                        {person.initials}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate/60">
                        {t("landing.teamPhotoPlaceholder")}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold">{person.name}</h3>
                  <p className="mt-1 text-sm text-slate">{person.role}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── POR QUÉ NAMAR ────────────────────────────────────── */}
        <section id="nosotros" className="bg-sand px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-3xl">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">{t("landing.whyTitle")}</h2>
            </Reveal>
            <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((item, i) => (
                <Reveal key={item.title} delay={i * 60} className="bg-background p-8 lg:p-10">
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

        {/* ─── PERFILES ─────────────────────────────────────────── */}
        <section id="perfiles" className="px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <h2 className="text-4xl font-bold lg:text-5xl">{t("landing.profilesTitle")}</h2>
            </Reveal>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

        {/* ─── RUTAS: ESPAÑA + COLOMBIA ─────────────────────────── */}
        <section id="rutas" className="border-y border-border bg-sand px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-6">
                <p className={eyebrow}>{t("landing.routesLabel")}</p>
                <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
                  {t("landing.routesTitle")}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-slate">{t("landing.routesText")}</p>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-6">
                <img
                  src={worldMap}
                  width={1200}
                  height={800}
                  loading="lazy"
                  alt="Mapa mundial minimalista con las rutas de importación desde China a España y Colombia"
                  className="aspect-video w-full object-contain mix-blend-multiply"
                />
              </Reveal>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {routes.map((route, i) => (
                <Reveal
                  key={route.to}
                  delay={i * 80}
                  className="flex flex-col border border-border bg-background p-8 shadow-panel lg:p-10"
                >
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                    <span className="text-gold">{route.from}</span>
                    <span className="h-px flex-1 bg-border" />
                    <ArrowRight className="size-4 text-gold" />
                    <span className="h-px flex-1 bg-border" />
                    <span>{route.to}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{route.title}</h3>
                  <p className="mt-4 flex-1 leading-relaxed text-slate">{route.text}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {route.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-border bg-sand px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-8 text-sm text-slate">{t("landing.routesNote")}</p>
            </Reveal>
          </div>
        </section>

        {/* ─── PRUEBA OPERATIVA (sustituye testimonios) ─────────── */}
        <section className="px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-3xl">
              <p className={eyebrow}>{t("landing.proofLabel")}</p>
              <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
                {t("landing.proofTitle")}
              </h2>
              <p className="mt-6 text-slate">{t("landing.proofIntro")}</p>
            </Reveal>
            <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {proof.map((item, i) => (
                <Reveal key={item.title} delay={i * 60} className="bg-background p-8 lg:p-10">
                  <span className="text-sm font-bold text-gold">{`0${i + 1}`}</span>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EMPEZAR ──────────────────────────────────────────── */}
        <section className="bg-navy px-6 py-24 text-navy-foreground lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <h2 className="text-4xl font-bold lg:text-5xl">{t("landing.startTitle")}</h2>
              <p className="mt-6 max-w-2xl text-lg text-navy-foreground/60">
                {t("landing.startIntro")}
              </p>
            </Reveal>
            <div className="mt-16 grid gap-px border border-navy-foreground/15 bg-navy-foreground/15 md:grid-cols-3">
              {startSteps.map((step, i) => (
                <Reveal key={step.n} delay={i * 60} className="bg-navy p-8 lg:p-10">
                  <span className="text-sm font-bold text-gold">{step.n}</span>
                  <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>
                  <p className="mt-4 leading-relaxed text-navy-foreground/65">{step.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ──────────────────────────────────────────────── */}
        <section id="faq" className="px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="text-center text-4xl font-bold leading-tight lg:text-5xl">
                {t("landing.faqTitle")}
              </h2>
            </Reveal>
            <div className="mt-16 divide-y divide-border border-y border-border">
              {faqs.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 30}>
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

        {/* ─── CONTACTO (CTA final) ─────────────────────────────── */}
        <section id="contacto" className="border-t border-border bg-sand px-6 py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-serif text-4xl italic leading-[1.05] lg:text-6xl">
                {t("contact.title")}
              </h2>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-slate">
                {t("contact.description")}
              </p>
              <p className="mt-6 border-l-2 border-gold pl-4 text-sm font-semibold">
                {t("contact.promise")}
              </p>
              <div className="mt-12 border-t border-border pt-8">
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate">
                  {t("contact.prefer")}
                </p>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-3 text-lg font-semibold transition-colors hover:text-gold"
                >
                  {t("contact.chat")}
                  <ArrowRight className="size-5" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={120} className="border border-border bg-background p-6 sm:p-10">
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-sand-strong px-6 py-12 pb-28 sm:pb-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
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
