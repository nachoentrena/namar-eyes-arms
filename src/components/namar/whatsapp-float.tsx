import { MessageCircle } from "lucide-react";

import { useTranslation } from "react-i18next";

const WHATSAPP_NUMBER = "8618217760619";
const WHATSAPP_MESSAGE = "Hola, me gustaría recibir más información";

export function WhatsAppFloat() {
  const { t } = useTranslation();
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("whatsapp.message", { defaultValue: WHATSAPP_MESSAGE }))}`;

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-lg shadow-emerald-500/30 transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-200"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
