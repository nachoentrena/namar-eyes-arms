import { useTranslation } from "react-i18next";

import { whatsappHref } from "@/lib/site-config";

export function MobileCta() {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex h-14 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md sm:hidden">
      <a
        href="#contacto"
        className="flex flex-1 items-center justify-center bg-navy px-4 text-[11px] font-bold uppercase tracking-widest text-navy-foreground"
      >
        {t("landing.mobileCta")}
      </a>
      <a
        href={whatsappHref(t("whatsapp.message"))}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-5 text-[11px] font-bold uppercase tracking-widest text-navy"
      >
        WhatsApp
      </a>
    </div>
  );
}
