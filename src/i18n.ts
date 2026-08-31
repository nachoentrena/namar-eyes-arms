import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        process: "Cómo trabajamos",
        about: "Por qué NAMAR",
        profiles: "Para quién",
        faq: "FAQ",
        contact: "Contacto",
      },
      header: {
        cta: "Habla con un experto",
        menuOpen: "Abrir menú",
        menuClose: "Cerrar menú",
        language: "Idioma",
        languageEs: "Español",
        languageEn: "English",
      },
      hero: {
        badge: "8 años sobre el terreno en China",
        title: "Importa desde China.",
        subtitle: "Nosotros nos encargamos del resto.",
        description:
          "Conectamos empresas de España y Colombia con proveedores fiables en China y gestionamos todo el proceso de importación, desde el sourcing y el control de calidad hasta la logística y las aduanas.",
        primaryCta: "Quiero importar desde China",
        secondaryCta: "Descubre cómo trabajamos",
      },
      whatsapp: {
        message: "Hola, me gustaría recibir más información",
      },
      contact: {
        title: "Cuéntanos tu proyecto",
        description:
          "Escríbenos con los detalles de lo que quieres importar. Te responderemos con una valoración clara de cómo podemos ayudarte desde origen.",
        prefer: "¿Prefieres hablar directamente?",
        chat: "Escríbenos por WhatsApp",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Services",
        process: "How we work",
        about: "Why NAMAR",
        profiles: "Who it's for",
        faq: "FAQ",
        contact: "Contact",
      },
      header: {
        cta: "Speak with an expert",
        menuOpen: "Open menu",
        menuClose: "Close menu",
        language: "Language",
        languageEs: "Español",
        languageEn: "English",
      },
      hero: {
        badge: "8 years on the ground in China",
        title: "Import from China.",
        subtitle: "We take care of the rest.",
        description:
          "We connect companies in Spain and Colombia with reliable suppliers in China and manage the entire import process, from sourcing and quality control to logistics and customs.",
        primaryCta: "I want to import from China",
        secondaryCta: "See how we work",
      },
      whatsapp: {
        message: "Hello, I would like to receive more information",
      },
      contact: {
        title: "Tell us about your project",
        description:
          "Write to us with the details of what you want to import. We will respond with a clear assessment of how we can help you from the source.",
        prefer: "Do you prefer to talk directly?",
        chat: "Chat on WhatsApp",
      },
    },
  },
} as const;

const getInitialLanguage = () => {
  if (typeof window === "undefined") {
    return "es";
  }

  const storedLanguage = window.localStorage.getItem("namar-language");
  if (storedLanguage === "es" || storedLanguage === "en") {
    return storedLanguage;
  }

  const browserLanguage = navigator.language || navigator.languages?.[0] || "es";
  return browserLanguage.toLowerCase().startsWith("en") ? "en" : "es";
};

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
});

if (typeof document !== "undefined") {
  document.documentElement.lang = i18n.language;
}

i18n.on("languageChanged", (language) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = language;
  }

  if (typeof window !== "undefined") {
    window.localStorage.setItem("namar-language", language);
  }
});

export default i18n;
