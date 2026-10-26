import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import { siteConfig, whatsappHref } from "@/lib/site-config";

export function SiteFooter() {
  const { t } = useTranslation();
  const countries = t("landing.footerCountries", { returnObjects: true }) as string[];

  return (
    <footer className="bg-navy-deep px-5 py-10 pb-24 text-navy-foreground sm:px-6 sm:py-12 sm:pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <img
              src="/brand/imagotipo-blanco.png"
              alt="NAMAR Global"
              width={1012}
              height={1037}
              className="h-auto w-[110px]"
            />
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-on-navy-muted">
              {t("landing.footerTagline")}
            </p>
            <div className="mt-4 flex gap-5 text-[11px] font-bold uppercase tracking-[0.14em] text-on-navy-muted">
              {countries.map((country) => (
                <span key={country}>{country}</span>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-gold">
              {t("landing.footerContactTitle")}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-on-navy-muted">
              <li>
                <a
                  href={whatsappHref(t("whatsapp.message"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  WhatsApp +34 609 64 31 34
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-gold">
              {t("landing.footerLegalTitle")}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-on-navy-muted">
              <li>
                <Link to="/aviso-legal" className="transition-colors hover:text-gold">
                  {t("landing.footerLegalNotice")}
                </Link>
              </li>
              <li>
                <Link to="/politica-privacidad" className="transition-colors hover:text-gold">
                  {t("landing.footerPrivacy")}
                </Link>
              </li>
              <li>
                <Link to="/politica-cookies" className="transition-colors hover:text-gold">
                  {t("landing.footerCookies")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-navy-foreground/15 pt-6 text-center text-xs leading-relaxed text-on-navy-muted/70">
          {t("landing.footerLegalLine", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
