import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import { siteConfig, whatsappHref } from "@/lib/site-config";

export function SiteFooter() {
  const { t } = useTranslation();
  const countries = t("landing.footerCountries", { returnObjects: true }) as string[];

  return (
    <footer className="border-t border-border bg-sand-strong px-5 py-10 pb-24 sm:px-6 sm:py-12 sm:pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-6 place-items-center bg-navy text-[10px] font-bold tracking-tighter text-navy-foreground">
                N
              </span>
              <span className="text-sm font-bold uppercase tracking-tight">
                Namar <span className="text-gold">Global</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-slate">
              {t("landing.footerTagline")}
            </p>
            <div className="mt-4 flex gap-5 text-[11px] font-bold uppercase tracking-widest text-slate">
              {countries.map((country) => (
                <span key={country}>{country}</span>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-navy">
              {t("landing.footerContactTitle")}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate">
              <li>
                <a
                  href={whatsappHref(t("whatsapp.message"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-navy"
                >
                  WhatsApp +34 609 64 31 34
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-navy"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-navy">
              {t("landing.footerLegalTitle")}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate">
              <li>
                <Link to="/aviso-legal" className="transition-colors hover:text-navy">
                  {t("landing.footerLegalNotice")}
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="transition-colors hover:text-navy">
                  {t("landing.footerPrivacy")}
                </Link>
              </li>
              <li>
                <Link to="/politica-cookies" className="transition-colors hover:text-navy">
                  {t("landing.footerCookies")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-center text-xs leading-relaxed text-slate/70">
          {t("landing.footerLegalLine", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
