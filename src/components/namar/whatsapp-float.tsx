import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

import { whatsappHref } from "@/lib/site-config";

export function WhatsAppFloat() {
  const { t } = useTranslation();

  return (
    <a
      href={whatsappHref(t("whatsapp.message"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-20 right-4 z-50 inline-flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-lg shadow-emerald-500/30 transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-200 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
