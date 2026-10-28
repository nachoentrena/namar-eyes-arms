/**
 * Central site configuration.
 * `costCalculatorHref` currently points to the contact form. When the
 * cost calculator project is ready, replace it with its URL (internal route
 * or external link) and every "Quiero calcular mi importación" CTA will
 * follow it without touching the page.
 */
export const siteConfig = {
  siteUrl: "https://www.namar-global.com",
  whatsappNumber: "34609643134",
  email: "info@namar-global.com",
  costCalculatorHref: "/diagnostico",
  costCalculatorExternal: false,
  web3formsAccessKey: "14b22182-6dd9-4808-a579-71d8adbbc4ed",
  /* Zoho Bookings: reserva de videollamada gratuita de 30 minutos */
  bookingHref: "https://zbooking.us/R0iOz",
} as const;

export function whatsappHref(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
