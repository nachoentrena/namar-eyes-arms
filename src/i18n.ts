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
        form: {
          name: "Nombre",
          company: "Empresa",
          email: "Email",
          phone: "WhatsApp / Teléfono",
          country: "País",
          countrySpain: "España",
          countryColombia: "Colombia",
          countryOther: "Otro",
          product: "¿Qué quieres importar?",
          volume: "Volumen aproximado",
          message: "Mensaje",
          submit: "Enviar consulta",
          namePlaceholder: "Tu nombre",
          companyPlaceholder: "Nombre de la empresa",
          emailPlaceholder: "email@empresa.com",
          phonePlaceholder: "+34 / +57 ...",
          productPlaceholder: "Ej: maquinaria, textil, componentes",
          volumePlaceholder: "Ej: 1 contenedor / 500 unidades",
          messagePlaceholder: "Cuéntanos qué necesitas y en qué punto está tu proyecto.",
          sentTitle: "Gracias por escribirnos.",
          sentText:
            "Hemos recibido tu consulta. Revisaremos tu proyecto y te contactaremos con los siguientes pasos.",
          sentButton: "Enviar otra consulta",
        },
      },
      landing: {
        heroBadge: "8 años sobre el terreno en China",
        heroTitle: "Importa desde China.",
        heroSubtitle: "Nosotros nos encargamos del resto.",
        heroDescription:
          "Conectamos empresas de España y Colombia con proveedores fiables en China y gestionamos todo el proceso de importación, desde el sourcing y el control de calidad hasta la logística y las aduanas.",
        heroPrimaryCta: "Quiero importar desde China",
        heroSecondaryCta: "Descubre cómo trabajamos",
        clarity: [
          {
            label: "Qué hacemos",
            text: "Gestionamos importaciones desde China: buscamos y verificamos la fábrica, negociamos, controlamos la calidad y movemos tu mercancía hasta tu almacén.",
          },
          {
            label: "Para quién",
            text: "Para PYMEs, emprendedores y empresas de España y Colombia que compran en China, ya sea por primera vez o desde hace años.",
          },
          {
            label: "Cómo lo hacemos",
            text: "Con presencia física en China. Vamos a la fábrica, hablamos el idioma y resolvemos en origen, antes de que el problema viaje en el contenedor.",
          },
        ],
        problemTitle: "Importar desde China no debería ser un salto de fe.",
        problemIntro:
          "La mayoría de los problemas de una importación no aparecen en destino: aparecen en origen, meses antes, cuando nadie está mirando.",
        problemQuote: "Ahí es donde entra NAMAR Global.",
        problems: [
          "No saber si el proveedor que has encontrado existe realmente o solo es un intermediario.",
          "Pagar un pedido y descubrir en destino que la calidad no es la acordada.",
          "Malentendidos técnicos por idioma, husos horarios y cultura empresarial distinta.",
          "Documentación incompleta, aranceles mal calculados y mercancía retenida en aduanas.",
          "Certificaciones que nadie te pidió hasta que era tarde.",
          "No tener a nadie en China que pueda ir, mirar y resolver.",
        ],
        servicesTitle: "Gestionamos tu importación de principio a fin.",
        services: [
          { n: "01", title: "Búsqueda de proveedores", text: "Encontramos y analizamos proveedores en China adaptados a tu producto, tu volumen y tu presupuesto. No te damos una lista: te damos opciones contrastadas." },
          { n: "02", title: "Verificación de fábricas", text: "Comprobamos quién está realmente detrás del proveedor, si es fabricante o intermediario, y evaluamos su capacidad y fiabilidad." },
          { n: "03", title: "Negociación", text: "Negociamos precios, cantidades, plazos y condiciones comerciales en el idioma y los códigos del mercado local." },
          { n: "04", title: "Control de calidad", text: "Supervisamos que la mercancía cumpla con las especificaciones acordadas antes de que salga de China, cuando todavía se puede corregir." },
          { n: "05", title: "Logística internacional", text: "Coordinamos el transporte desde la fábrica hasta el destino final, eligiendo la operativa que mejor encaja con tu producto." },
          { n: "06", title: "Aduanas y cumplimiento", text: "Gestionamos o coordinamos documentación, despacho aduanero, requisitos y certificaciones necesarias para tu operación." },
          { n: "07", title: "Seguimiento de la operación", text: "Acompañamos el proceso completo para detectar problemas y resolverlos antes de que se conviertan en costes para ti." },
          { n: "08", title: "Cálculo de costes", text: "En menos de 48 horas te entregamos un informe con la simulación del coste total de tu importación: producto, arancel, IVA, transporte, despacho aduanero, documentación, seguro y entrega final. Sabrás el precio real en tu almacén antes de comprometer un solo euro." },
        ],
        objectionsTitle: "Importar desde China, simple.",
        objectionsIntro: "Estas son las dudas que nos llegan cada semana. Así las resolvemos.",
        objections: [
          { q: "“He encontrado un proveedor, pero no sé si fiarme.”", a: "Verificamos quién es realmente: si fabrica o subcontrata, qué capacidad tiene y con qué clientes trabaja. Si hace falta, vamos a la fábrica y te contamos lo que hemos visto." },
          { q: "“No sé qué documentación necesita mi producto.”", a: "Revisamos contigo los requisitos de tu producto antes de comprar: documentación comercial, certificaciones y requisitos de entrada en España o Colombia. Es mucho más barato saberlo antes que con la mercancía parada." },
          { q: "“Tengo miedo a que la calidad no sea la acordada.”", a: "Definimos con el proveedor unas especificaciones claras y las comprobamos en origen. Un defecto detectado en China se corrige; detectado en tu almacén, se paga." },
          { q: "“No sé qué opción de transporte me conviene.”", a: "Según producto, volumen, peso y urgencia, la operativa cambia y el margen también. Te proponemos la ruta y el incoterm que tienen sentido para tu caso, no el estándar." },
          { q: "“Ya importo, pero quiero dejar de improvisar.”", a: "Revisamos tu operativa actual, tus proveedores y tus costes, y profesionalizamos el proceso con un único interlocutor en origen." },
        ],
        processTitle: "Así convertimos una importación compleja en un proceso sencillo.",
        processQuote: "Tú te ocupas de hacer crecer tu negocio. Nosotros nos ocupamos de China.",
        steps: [
          { n: "01", title: "Entendemos tu proyecto", text: "Analizamos qué quieres comprar, cantidades, presupuesto y necesidades." },
          { n: "02", title: "Buscamos proveedores", text: "Localizamos proveedores adecuados en China y descartamos los que no encajan." },
          { n: "03", title: "Verificamos y negociamos", text: "Comprobamos el proveedor sobre el terreno y negociamos las condiciones." },
          { n: "04", title: "Controlamos la producción", text: "Supervisamos la calidad y el cumplimiento de lo acordado antes del embarque." },
          { n: "05", title: "Gestionamos la logística", text: "Coordinamos transporte, documentación y proceso aduanero." },
          { n: "06", title: "Recibes tu mercancía", text: "Tu producto llega a destino con el proceso controlado de principio a fin." },
        ],
        onTheGroundTitle: "No necesitas viajar a China. Nosotros ya estamos allí.",
        onTheGroundText:
          "Ir a la fábrica, mirar la producción, hablar con el responsable y decir que algo no está bien. Eso no se hace por correo: se hace estando.",
        onTheGroundCta: "Habla con un experto",
        whyTitle: "Tu equipo en China, sin necesidad de estar en China.",
        differentiators: [
          { title: "8 años en China", text: "Experiencia real trabajando y operando sobre el terreno." },
          { title: "Presencia local", text: "Estamos físicamente en China para comprobar, negociar y resolver." },
          { title: "Comunicación directa", text: "Idioma, cultura y conocimiento del mercado local, sin intermediarios." },
          { title: "Menos riesgos", text: "Reducimos la incertidumbre de trabajar con proveedores desconocidos." },
          { title: "Control de principio a fin", text: "No desaparecemos después de encontrar al proveedor." },
          { title: "Un único interlocutor", text: "Centralizamos la operación: no coordinas agentes, proveedores y transitarios por tu cuenta." },
        ],
        quote: "“Somos tus ojos y brazos en China.”",
        profilesTitle: "¿Es para ti?",
        profiles: [
          { title: "PYMEs", text: "Empresas que quieren empezar o mejorar sus importaciones desde China." },
          { title: "Emprendedores", text: "Personas con un producto o proyecto que necesitan ayuda para hacerlo realidad." },
          { title: "Empresas que ya importan", text: "Negocios que quieren reducir riesgos, optimizar costes o profesionalizar su proceso." },
          { title: "Empresas que quieren empezar en China", text: "Negocios que necesitan un socio local para dar sus primeros pasos." },
        ],
        profilesQuote: "No necesitas tener experiencia importando desde China. Necesitas tener a alguien que sí la tenga.",
        mapTitle: "Conectamos mercados.",
        mapText: "Trabajamos entre China y los mercados de España y Colombia, conectando empresas con proveedores y coordinando las operaciones desde origen.",
        mapChinaSpain: "China",
        mapSpain: "España",
        mapChinaColombia: "China",
        mapColombia: "Colombia",
        stats: [
          { value: "8+", label: "Años en China" },
          { value: "3", label: "Mercados conectados" },
          { value: "360°", label: "Gestión integral" },
          { value: "1", label: "Único interlocutor" },
        ],
        testimonialsTitle: "Empresas que confían en nosotros",
        testimonialsIntro:
          "Estamos recopilando las experiencias de nuestros clientes en España y Colombia. Publicaremos aquí sus testimonios reales, con nombre, empresa, país y proyecto.",
        testimonialsPlaceholder: "Espacio reservado para el testimonio.",
        testimonialsFields: ["Nombre", "Empresa", "País", "Proyecto"],
        startTitle: "Empezar es simple.",
        startIntro: "No necesitas tenerlo todo decidido para hablar con nosotros. Con saber qué producto te interesa, es suficiente para empezar.",
        startSteps: [
          { n: "01", title: "Nos escribes", text: "Cuéntanos qué quieres importar, en qué cantidad y en qué punto estás. Por formulario o por WhatsApp." },
          { n: "02", title: "Analizamos tu caso", text: "Revisamos tu proyecto y te decimos con claridad qué es viable, qué riesgos hay y qué haría falta." },
          { n: "03", title: "Empezamos a operar", text: "Definimos el alcance del trabajo y arrancamos en China. Tú sigues la operación con un único interlocutor." },
        ],
        faqTitle: "Preguntas frecuentes",
        faqs: [
          { q: "¿Trabajáis únicamente con empresas que ya importan desde China?", a: "No. También ayudamos a empresas y emprendedores que quieren realizar su primera importación." },
          { q: "¿Podéis buscar proveedores?", a: "Sí. La búsqueda y evaluación de proveedores forma parte de nuestros servicios." },
          { q: "¿Podéis verificar una fábrica en China?", a: "Sí. Podemos realizar procesos de verificación y control directamente sobre el terreno." },
          { q: "¿Os encargáis del control de calidad?", a: "Sí. Podemos coordinar controles para comprobar que la mercancía cumple con las especificaciones acordadas." },
          { q: "¿Gestionáis el transporte?", a: "Sí. Coordinamos la logística internacional desde China hasta el destino." },
          { q: "¿Ayudáis con las aduanas y certificaciones?", a: "Sí. Gestionamos o coordinamos los procesos necesarios según las características de cada operación." },
          { q: "¿Tengo que viajar a China?", a: "No necesariamente. NAMAR puede actuar como tu representación sobre el terreno." },
          { q: "¿Trabajáis con España y Colombia?", a: "Sí. Actualmente nuestros mercados principales son España y Colombia." },
        ],
        ctaFinalTitle: "¿Quieres importar desde China sin hacerlo solo?",
        ctaFinalText: "Cuéntanos qué quieres importar y analizaremos cómo podemos ayudarte a convertirlo en una operación segura y controlada.",
        ctaFinalPrimary: "Habla con NAMAR Global",
        ctaFinalSecondary: "Solicitar una consulta",
        footerCountries: ["España", "China", "Colombia"],
        footerText: "© {year} NAMAR Global. Gestión estratégica de importaciones.",
        mobileCta: "Cuéntanos tu proyecto",
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
        form: {
          name: "Name",
          company: "Company",
          email: "Email",
          phone: "WhatsApp / Phone",
          country: "Country",
          countrySpain: "Spain",
          countryColombia: "Colombia",
          countryOther: "Other",
          product: "What do you want to import?",
          volume: "Approximate volume",
          message: "Message",
          submit: "Send inquiry",
          namePlaceholder: "Your name",
          companyPlaceholder: "Company name",
          emailPlaceholder: "name@company.com",
          phonePlaceholder: "+34 / +57 ...",
          productPlaceholder: "e.g. machinery, textiles, components",
          volumePlaceholder: "e.g. 1 container / 500 units",
          messagePlaceholder: "Tell us what you need and where your project stands.",
          sentTitle: "Thank you for getting in touch.",
          sentText:
            "We have received your inquiry. We will review your project and contact you with the next steps.",
          sentButton: "Send another inquiry",
        },
      },
      landing: {
        heroBadge: "8 years on the ground in China",
        heroTitle: "Import from China.",
        heroSubtitle: "We take care of the rest.",
        heroDescription:
          "We connect companies in Spain and Colombia with reliable suppliers in China and manage the entire import process, from sourcing and quality control to logistics and customs.",
        heroPrimaryCta: "I want to import from China",
        heroSecondaryCta: "See how we work",
        clarity: [
          {
            label: "What we do",
            text: "We manage imports from China: we search and verify the factory, negotiate, control quality, and move your goods to your warehouse.",
          },
          {
            label: "For whom",
            text: "For SMEs, entrepreneurs, and businesses in Spain and Colombia buying from China, whether they are new to it or have been doing it for years.",
          },
          {
            label: "How we do it",
            text: "With a physical presence in China. We go to the factory, speak the language, and solve the issue at the source before the problem travels with the container.",
          },
        ],
        problemTitle: "Importing from China should not be a leap of faith.",
        problemIntro:
          "Most import issues do not show up at destination: they appear at the source, months before, when nobody is looking.",
        problemQuote: "This is where NAMAR Global comes in.",
        problems: [
          "Not knowing if the supplier you found actually exists or is just an intermediary.",
          "Paying an order only to discover the product quality is not what was agreed.",
          "Technical misunderstandings caused by language, time zones, and different business culture.",
          "Incomplete documentation, miscalculated tariffs, and goods held at customs.",
          "Certificates nobody asked for until it was too late.",
          "Not having anyone in China who can go, inspect, and solve the problem.",
        ],
        servicesTitle: "We manage your import from start to finish.",
        services: [
          { n: "01", title: "Supplier sourcing", text: "We find and analyze suppliers in China that fit your product, volume, and budget. We don't give you a list: we give you well-vetted options." },
          { n: "02", title: "Factory verification", text: "We check who is really behind the supplier, whether it is a manufacturer or intermediary, and assess its capacity and reliability." },
          { n: "03", title: "Negotiation", text: "We negotiate prices, quantities, delivery times, and commercial terms in the language and codes of the local market." },
          { n: "04", title: "Quality control", text: "We ensure the goods meet the agreed specifications before they leave China, when issues can still be corrected." },
          { n: "05", title: "International logistics", text: "We coordinate transport from the factory to the final destination and choose the operation that best fits your product." },
          { n: "06", title: "Customs and compliance", text: "We manage or coordinate the documentation, customs clearance, requirements, and certifications needed for your operation." },
          { n: "07", title: "Operations tracking", text: "We accompany the entire process to detect problems and resolve them before they become costs for you." },
          { n: "08", title: "Cost calculation", text: "In less than 48 hours, we give you a report with a simulation of your total import cost: product, tariff, VAT, transport, customs clearance, documentation, insurance, and final delivery. You will know the real price at your warehouse before committing a single euro." },
        ],
        objectionsTitle: "Importing from China, simplified.",
        objectionsIntro: "These are the doubts we receive every week. This is how we solve them.",
        objections: [
          { q: "“I found a supplier, but I do not know whether to trust them.”", a: "We verify who they truly are: whether they manufacture or subcontract, what capacity they have, and which clients they work with. If necessary, we go to the factory and tell you what we saw." },
          { q: "“I do not know what documentation my product needs.”", a: "We review your product requirements with you before buying: commercial documentation, certifications, and import requirements for Spain or Colombia. It is much cheaper to know this before the goods are stuck in customs." },
          { q: "“I am afraid the quality will not match what was agreed.”", a: "We define clear specifications with the supplier and verify them at the source. A defect detected in China can be corrected; a defect detected at your warehouse is paid for." },
          { q: "“I do not know which shipping option is right for me.”", a: "Depending on the product, volume, weight, and urgency, the solution changes and so does the margin. We propose the route and incoterm that make sense for your case, not the standard one." },
          { q: "“I already import, but I want to stop improvising.”", a: "We review your current operations, suppliers, and costs and professionalize the process with a single point of contact at the source." },
        ],
        processTitle: "This is how we turn a complex import into a simple process.",
        processQuote: "You focus on growing your business. We take care of China.",
        steps: [
          { n: "01", title: "We understand your project", text: "We analyze what you want to buy, in what quantity, your budget, and your needs." },
          { n: "02", title: "We source suppliers", text: "We find suitable suppliers in China and discard those that do not fit the case." },
          { n: "03", title: "We verify and negotiate", text: "We check the supplier on the ground and negotiate the conditions." },
          { n: "04", title: "We control production", text: "We monitor quality and compliance before shipment." },
          { n: "05", title: "We manage logistics", text: "We coordinate transport, documentation, and customs processes." },
          { n: "06", title: "You receive your goods", text: "Your product arrives at destination with the process controlled from start to finish." },
        ],
        onTheGroundTitle: "You do not need to travel to China. We are already there.",
        onTheGroundText:
          "Going to the factory, looking at production, speaking with the manager, and saying something is wrong. That is not done by email: it is done in person.",
        onTheGroundCta: "Speak with an expert",
        whyTitle: "Your team in China without needing to be in China.",
        differentiators: [
          { title: "8 years in China", text: "Real experience working and operating on the ground." },
          { title: "Local presence", text: "We are physically in China to verify, negotiate, and solve problems." },
          { title: "Direct communication", text: "Language, culture, and local market knowledge without intermediaries." },
          { title: "Lower risk", text: "We reduce the uncertainty of working with unknown suppliers." },
          { title: "Control from start to finish", text: "We do not disappear after finding the supplier." },
          { title: "A single point of contact", text: "We centralize the operation: you do not coordinate agents, suppliers, and forwarders on your own." },
        ],
        quote: "“We are your eyes and arms in China.”",
        profilesTitle: "Is it for you?",
        profiles: [
          { title: "SMEs", text: "Companies that want to start or improve their imports from China." },
          { title: "Entrepreneurs", text: "People with a product or project who need help to make it happen." },
          { title: "Businesses already importing", text: "Companies that want to reduce risk, optimize costs, or professionalize their process." },
          { title: "Businesses starting in China", text: "Companies that need a local partner to take their first steps." },
        ],
        profilesQuote: "You do not need prior import experience from China. You need someone who does have it.",
        mapTitle: "We connect markets.",
        mapText: "We work between China and the markets of Spain and Colombia, connecting businesses with suppliers and coordinating operations from the source.",
        mapChinaSpain: "China",
        mapSpain: "Spain",
        mapChinaColombia: "China",
        mapColombia: "Colombia",
        stats: [
          { value: "8+", label: "Years in China" },
          { value: "3", label: "Connected markets" },
          { value: "360°", label: "End-to-end management" },
          { value: "1", label: "Single point of contact" },
        ],
        testimonialsTitle: "Companies that trust us",
        testimonialsIntro:
          "We are collecting the experiences of our clients in Spain and Colombia. We will publish their real testimonials here, with name, company, country, and project.",
        testimonialsPlaceholder: "Testimonial placeholder.",
        testimonialsFields: ["Name", "Company", "Country", "Project"],
        startTitle: "Getting started is simple.",
        startIntro: "You do not need to have everything figured out to speak with us. Knowing what product you are interested in is enough to begin.",
        startSteps: [
          { n: "01", title: "You write to us", text: "Tell us what you want to import, in what quantity, and where you are in the process. Through the form or WhatsApp." },
          { n: "02", title: "We analyze your case", text: "We review your project and clearly tell you what is viable, what risks exist, and what would be needed." },
          { n: "03", title: "We start operating", text: "We define the scope of work and start operating in China. You follow the process with a single point of contact." },
        ],
        faqTitle: "Frequently asked questions",
        faqs: [
          { q: "Do you only work with companies already importing from China?", a: "No. We also help companies and entrepreneurs who want to make their first import." },
          { q: "Can you find suppliers?", a: "Yes. Supplier search and evaluation are part of our services." },
          { q: "Can you verify a factory in China?", a: "Yes. We can carry out verification and control processes directly on the ground." },
          { q: "Do you handle quality control?", a: "Yes. We can coordinate checks to ensure the goods meet the agreed specifications." },
          { q: "Do you manage shipping?", a: "Yes. We coordinate international logistics from China to the destination." },
          { q: "Do you help with customs and certifications?", a: "Yes. We manage or coordinate the necessary processes according to each operation." },
          { q: "Do I have to travel to China?", a: "Not necessarily. NAMAR can act as your local representative on the ground." },
          { q: "Do you work with Spain and Colombia?", a: "Yes. Our main markets are Spain and Colombia." },
        ],
        ctaFinalTitle: "Do you want to import from China without doing it alone?",
        ctaFinalText: "Tell us what you want to import and we will analyze how we can help turn it into a safe and controlled operation.",
        ctaFinalPrimary: "Talk to NAMAR Global",
        ctaFinalSecondary: "Request a consultation",
        footerCountries: ["Spain", "China", "Colombia"],
        footerText: "© {year} NAMAR Global. Strategic import management.",
        mobileCta: "Tell us about your project",
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
