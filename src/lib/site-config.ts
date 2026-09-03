/**
 * Central site configuration.
 * `costCalculatorHref` currently points to the contact form. When the
 * cost calculator project is ready, replace it with its URL (internal route
 * or external link) and every "Quiero calcular mi importación" CTA will
 * follow it without touching the page.
 */
export const siteConfig = {
  siteUrl: "https://namar-eyes-arms.lovable.app",
  whatsappNumber: "8618217760619",
  costCalculatorHref: "#contacto",
  costCalculatorExternal: false,
} as const;

export function whatsappHref(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
