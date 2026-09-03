import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      nav: {
        services: "Servicios",
        process: "Cómo trabajamos",
        costs: "Costes",
        team: "Equipo",
        routes: "Rutas",
        faq: "FAQ",
        contact: "Contacto",
      },
      header: {
        cta: "Quiero analizar mi importación",
        menuOpen: "Abrir menú",
        menuClose: "Cerrar menú",
        language: "Idioma",
        languageEs: "Español",
        languageEn: "English",
      },
      whatsapp: {
        message: "Hola, quiero analizar una importación desde China. ¿Podemos hablar?",
      },
      contact: {
        title: "Cuéntanos qué quieres importar.",
        description:
          "El primer paso es entender tres cosas: qué producto, en qué cantidades y hacia dónde (España o Colombia). Con eso valoramos la operación y te decimos con claridad qué es viable, qué riesgos hay y cómo lo abordaríamos.",
        prefer: "¿Prefieres hablar directamente?",
        chat: "Escríbenos por WhatsApp",
        promise: "Respondemos con una valoración clara, sin compromiso.",
        form: {
          name: "Nombre",
          company: "Empresa",
          email: "Email",
          phone: "WhatsApp / Teléfono",
          country: "País de destino",
          countrySpain: "España",
          countryColombia: "Colombia",
          countryOther: "Otro",
          product: "¿Qué quieres importar?",
          volume: "Cantidad aproximada",
          message: "Mensaje",
          submit: "Enviar y analizar mi importación",
          namePlaceholder: "Tu nombre",
          companyPlaceholder: "Nombre de la empresa",
          emailPlaceholder: "email@empresa.com",
          phonePlaceholder: "+34 / +57 ...",
          productPlaceholder: "Ej: maquinaria, textil, componentes",
          volumePlaceholder: "Ej: 1 contenedor / 500 unidades",
          messagePlaceholder:
            "¿Ya tienes proveedor? ¿Es tu primera importación? Cuéntanos en qué punto estás.",
          sentTitle: "Gracias por escribirnos.",
          sentText:
            "Hemos recibido tu consulta. Revisaremos producto, cantidades y destino y te contactaremos con una primera valoración.",
          sentButton: "Enviar otra consulta",
        },
      },
      landing: {
        heroBadge: "8 años viviendo y trabajando en China",
        heroTitle: "Tu proveedor está en China.",
        heroSubtitle: "Tu tranquilidad también.",
        heroDescription:
          "NAMAR Global representa tus intereses directamente sobre el terreno. Encontramos proveedores, negociamos, verificamos, controlamos y coordinamos tu importación desde China a España o Colombia.",
        heroPrimaryCta: "Quiero analizar mi importación",
        heroSecondaryCta: "Cómo trabajamos",
        heroMicro: "Simulamos los costes de tu importación en 24 horas.",
        heroQuote:
          "“Somos los ojos y brazos de nuestros clientes en China. Protegemos su compra y reducimos el riesgo de importar.”",

        authorityLabel: "Por qué NAMAR es distinto",
        authorityTitle: "8 años sobre el terreno cambian la forma de importar.",
        authorityText:
          "NAMAR no gestiona China desde un despacho en Europa. Estamos físicamente aquí: hablando con proveedores en su idioma, visitando fábricas, revisando producción y resolviendo incidencias en el momento en que ocurren, no semanas después por correo.",
        authorityPoints: [
          {
            label: "Qué hacemos",
            text: "Gestionamos tu importación desde China de principio a fin: buscamos y verificamos la fábrica, negociamos, controlamos la calidad y coordinamos el envío hasta España o Colombia.",
          },
          {
            label: "Para quién",
            text: "Para PYMEs, emprendedores y empresas de España y Colombia que compran en China, ya sea por primera vez o desde hace años y quieren dejar de improvisar.",
          },
          {
            label: "Cómo lo hacemos",
            text: "Con presencia física en China. Vamos a la fábrica, hablamos el idioma y resolvemos en origen, antes de que el problema viaje en el contenedor.",
          },
        ],
        authorityLink: "Descubre cómo trabajamos",

        problemTitle: "Importar desde China no debería ser un salto de fe.",
        problemIntro:
          "La mayoría de los problemas de una importación no aparecen en destino: aparecen en origen, meses antes, cuando nadie está mirando. Así los convertimos en decisiones controladas.",
        problemColumns: { risk: "Riesgo", action: "Qué hacemos", result: "Resultado" },
        problems: [
          {
            risk: "Proveedor desconocido",
            action: "Verificamos la fábrica, sus antecedentes y si realmente fabrica o intermedia.",
            result: "Compras con mayor seguridad.",
          },
          {
            risk: "Calidad incierta",
            action: "Controlamos muestras y producción antes del embarque, cuando aún se puede corregir.",
            result: "Recibes lo acordado.",
          },
          {
            risk: "Costes ocultos",
            action: "Calculamos el coste real puesto en tu almacén: arancel, transporte, impuestos y despacho.",
            result: "Sabes cuánto te costará importar.",
          },
          {
            risk: "Problemas en origen",
            action: "Estamos sobre el terreno para ir, mirar, hablar con el responsable y resolver.",
            result: "Alguien actúa cuando tú no puedes.",
          },
          {
            risk: "Aduanas y certificaciones",
            action: "Revisamos documentación y requisitos de entrada en España o Colombia antes de comprar.",
            result: "Tu mercancía no se queda parada.",
          },
        ],
        problemQuote: "Ahí es donde entra NAMAR Global.",

        servicesLabel: "Nuestros servicios",
        servicesTitle: "Un único proceso de control, de la fábrica a tu almacén.",
        servicesIntro:
          "No ofrecemos servicios sueltos. Cada fase protege la siguiente, y tú tienes un único interlocutor durante toda la operación.",
        phases: [
          { key: "find", label: "Encontramos" },
          { key: "verify", label: "Verificamos" },
          { key: "negotiate", label: "Negociamos" },
          { key: "control", label: "Controlamos" },
          { key: "ship", label: "Enviamos" },
        ],
        services: [
          { n: "01", phase: "Encontramos", title: "Búsqueda de proveedores en China", text: "Localizamos y analizamos proveedores adaptados a tu producto, tu volumen y tu presupuesto. No te damos una lista: te damos opciones contrastadas." },
          { n: "02", phase: "Verificamos", title: "Verificación y auditoría de fábricas", text: "Comprobamos quién está realmente detrás del proveedor, si es fabricante o intermediario, y evaluamos su capacidad y fiabilidad. Si hace falta, vamos a la fábrica." },
          { n: "03", phase: "Negociamos", title: "Negociación con el proveedor", text: "Negociamos precios, cantidades, plazos, condiciones de pago y especificaciones en el idioma y los códigos del mercado local." },
          { n: "04", phase: "Controlamos", title: "Control de calidad en origen", text: "Supervisamos muestras y producción para que la mercancía cumpla lo acordado antes de salir de China, cuando todavía se puede corregir." },
          { n: "05", phase: "Enviamos", title: "Logística internacional", text: "Coordinamos el transporte desde la fábrica hasta España o Colombia, eligiendo la operativa e incoterm que mejor encajan con tu producto." },
          { n: "06", phase: "Enviamos", title: "Aduanas y certificaciones", text: "Gestionamos o coordinamos documentación, despacho aduanero y las certificaciones necesarias para que tu producto entre sin sorpresas." },
          { n: "07", phase: "Controlamos", title: "Seguimiento de la operación", text: "Acompañamos el proceso completo para detectar incidencias y resolverlas en origen antes de que se conviertan en costes para ti." },
          { n: "08", phase: "Encontramos", title: "Cálculo de costes de importación", text: "En 24 horas te entregamos un informe con la simulación del coste total: producto, arancel, IVA, transporte, despacho, documentación, seguro y entrega. Sabrás el precio real en tu almacén antes de comprometer un solo euro." },
        ],

        costLabel: "Simulación de costes",
        costTitle: "¿Cuánto te costará realmente importar desde China?",
        costText:
          "Antes de comprar, calcula el coste real de llevar tu mercancía hasta España o Colombia. Te ayudamos a estimarlo en 24 horas.",
        costItems: [
          "Precio del producto y condiciones de compra",
          "Arancel e impuestos de importación",
          "Transporte internacional y seguro",
          "Despacho aduanero y documentación",
          "Entrega final hasta tu almacén",
        ],
        costCta: "Quiero calcular mi importación",
        costNote: "Recibes un informe claro con el coste estimado puesto en destino.",

        objectionsTitle: "Importar desde China, simple.",
        objectionsIntro: "Estas son las dudas que nos llegan cada semana. Así las resolvemos.",
        objections: [
          { q: "“He encontrado un proveedor, pero no sé si fiarme.”", a: "Verificamos quién es realmente: si fabrica o subcontrata, qué capacidad tiene y con qué clientes trabaja. Si hace falta, vamos a la fábrica y te contamos lo que hemos visto." },
          { q: "“No sé qué documentación necesita mi producto.”", a: "Revisamos contigo los requisitos de tu producto antes de comprar: documentación comercial, certificaciones y requisitos de entrada en España o Colombia. Es mucho más barato saberlo antes que con la mercancía parada." },
          { q: "“Tengo miedo a que la calidad no sea la acordada.”", a: "Definimos con el proveedor unas especificaciones claras y las comprobamos en origen. Un defecto detectado en China se corrige; detectado en tu almacén, se paga." },
          { q: "“No sé qué opción de transporte me conviene.”", a: "Según producto, volumen, peso y urgencia, la operativa cambia y el margen también. Te proponemos la ruta y el incoterm que tienen sentido para tu caso, no el estándar." },
          { q: "“Ya importo, pero quiero dejar de improvisar.”", a: "Revisamos tu operativa actual, tus proveedores y tus costes, y profesionalizamos el proceso con un único interlocutor en origen." },
        ],

        processTitle: "Así convertimos una importación compleja en un proceso controlado.",
        processQuote: "Tú te ocupas de hacer crecer tu negocio. Nosotros nos ocupamos de China.",
        processCta: "Quiero analizar mi importación",
        steps: [
          { n: "01", title: "Entendemos tu proyecto", text: "Analizamos qué quieres comprar, cantidades, presupuesto, destino y en qué punto estás." },
          { n: "02", title: "Buscamos proveedores", text: "Localizamos proveedores adecuados en China y descartamos los que no encajan." },
          { n: "03", title: "Verificamos y negociamos", text: "Comprobamos el proveedor sobre el terreno y negociamos las condiciones." },
          { n: "04", title: "Controlamos la producción", text: "Supervisamos la calidad y el cumplimiento de lo acordado antes del embarque." },
          { n: "05", title: "Gestionamos la logística", text: "Coordinamos transporte, documentación y proceso aduanero hasta España o Colombia." },
          { n: "06", title: "Recibes tu mercancía", text: "Tu producto llega a destino con el proceso controlado de principio a fin." },
        ],

        onTheGroundTitle: "No necesitas viajar a China. Nosotros ya estamos allí.",
        onTheGroundText:
          "Ir a la fábrica, mirar la producción, hablar con el responsable y decir que algo no está bien. Eso no se hace por correo: se hace estando.",
        onTheGroundCta: "Quiero analizar mi importación",

        teamLabel: "Las personas detrás de NAMAR",
        teamTitle: "No gestionamos China desde un despacho en Europa. Vivimos aquí.",
        teamText:
          "Detrás de NAMAR Global hay personas con nombre que llevan años viviendo y trabajando en China. Cuando hablas con nosotros, hablas con quien va a la fábrica, negocia con el proveedor y sigue tu operación de cerca.",
        team: [
          { name: "Nacho", role: "NAMAR Global · Sobre el terreno en China", initials: "N" },
          { name: "María", role: "NAMAR Global · Sobre el terreno en China", initials: "M" },
        ],
        teamPhotoPlaceholder: "Foto real en China",
        teamNote: "Hablas directamente con nosotros. Sin call centers ni intermediarios.",

        whyTitle: "Tu equipo en China, sin necesidad de estar en China.",
        differentiators: [
          { title: "8 años en China", text: "Experiencia real viviendo, trabajando y operando sobre el terreno." },
          { title: "Presencia física", text: "Estamos en China para comprobar, negociar y resolver en persona." },
          { title: "Comunicación directa", text: "Idioma, cultura y conocimiento del mercado local, sin intermediarios." },
          { title: "Menos riesgo", text: "Reducimos la incertidumbre de comprar a proveedores desconocidos." },
          { title: "Control de principio a fin", text: "No desaparecemos después de encontrar al proveedor." },
          { title: "Un único interlocutor", text: "Centralizamos la operación: no coordinas agentes, proveedores y transitarios por tu cuenta." },
        ],
        quote: "“Somos tus ojos y brazos en China.”",

        profilesTitle: "¿Es para ti?",
        profiles: [
          { title: "PYMEs", text: "Empresas que quieren empezar o mejorar sus importaciones desde China con menos riesgo." },
          { title: "Emprendedores", text: "Personas con un producto o proyecto que necesitan un equipo en origen para hacerlo realidad." },
          { title: "Empresas que ya importan", text: "Negocios que quieren reducir riesgos, conocer sus costes reales y profesionalizar su proceso." },
          { title: "Empresas que quieren empezar en China", text: "Negocios que necesitan un socio local para dar sus primeros pasos con garantías." },
        ],
        profilesQuote: "No necesitas tener experiencia importando desde China. Necesitas tener a alguien que sí la tenga.",

        routesLabel: "Rutas en las que trabajamos",
        routesTitle: "Importar desde China a España y a Colombia.",
        routesText:
          "No trabajamos “el mundo”. Trabajamos dos rutas que conocemos bien, con sus aduanas, sus requisitos y su operativa logística. Eso nos permite anticipar problemas en lugar de descubrirlos.",
        routes: [
          {
            from: "China",
            to: "España",
            title: "Importar desde China a España",
            text: "Búsqueda de proveedores, control de calidad en origen y coordinación logística y aduanera hasta tu almacén en España, con los requisitos de entrada en la UE revisados antes de comprar.",
            tags: ["Proveedores verificados", "Requisitos UE", "Aduanas España"],
          },
          {
            from: "China",
            to: "Colombia",
            title: "Importar desde China a Colombia",
            text: "Representación en origen para empresas colombianas: verificación de fábricas, negociación, control de calidad y coordinación del envío y la documentación hasta Colombia.",
            tags: ["Proveedores verificados", "Documentación de importación", "Aduanas Colombia"],
          },
        ],
        routesNote: "¿Otro destino? Cuéntanoslo y valoramos si podemos ayudarte.",

        proofLabel: "Prueba operativa",
        proofTitle: "Lo que puedes esperar de trabajar con NAMAR.",
        proofIntro:
          "Publicaremos aquí testimonios reales de clientes cuando podamos hacerlo con nombre y empresa. Mientras tanto, esto es lo que sí podemos prometerte.",
        proof: [
          { title: "Presencia real sobre el terreno", text: "8 años viviendo y trabajando en China. Visitamos fábricas y hablamos con proveedores en persona, no solo por correo." },
          { title: "Proceso definido y documentado", text: "Cada operación sigue las mismas fases: encontrar, verificar, negociar, controlar y enviar. Sabes en qué punto está tu importación." },
          { title: "Cobertura España y Colombia", text: "Conocemos los requisitos, la documentación y la operativa logística de las dos rutas en las que trabajamos." },
          { title: "Acompañamiento de principio a fin", text: "No desaparecemos tras presentarte un proveedor. Seguimos la operación hasta que la mercancía llega a tu almacén." },
        ],

        startTitle: "Empezar es simple.",
        startIntro: "No necesitas tenerlo todo decidido para hablar con nosotros. Con saber qué producto te interesa, es suficiente para empezar.",
        startSteps: [
          { n: "01", title: "Nos cuentas qué quieres importar", text: "Producto, cantidad aproximada y destino. Por formulario o por WhatsApp." },
          { n: "02", title: "Analizamos tu caso", text: "Revisamos tu proyecto y te decimos con claridad qué es viable, qué riesgos hay y cuánto te costaría." },
          { n: "03", title: "Empezamos a operar", text: "Definimos el alcance del trabajo y arrancamos en China. Tú sigues la operación con un único interlocutor." },
        ],

        faqTitle: "Preguntas frecuentes al importar desde China",
        faqs: [
          { q: "¿Hay un pedido mínimo para trabajar con NAMAR?", a: "No fijamos un mínimo cerrado: el pedido mínimo suele marcarlo el fabricante y varía según producto y sector. Lo que sí hacemos es valorar contigo si la operación tiene sentido económico antes de empezar." },
          { q: "¿Cómo verificáis a un proveedor en China?", a: "Comprobamos su identidad legal, si es fabricante o intermediario, su capacidad productiva y sus referencias. Cuando la operación lo requiere, visitamos la fábrica y te contamos lo que hemos visto." },
          { q: "¿Cómo funciona el control de calidad?", a: "Acordamos con el proveedor unas especificaciones claras y las comprobamos en origen sobre muestras y producción, antes del embarque. Así un defecto se corrige en China y no se descubre en tu almacén." },
          { q: "¿Cuánto cuesta importar desde China?", a: "Depende del producto, el volumen, el transporte y el destino. Por eso simulamos el coste total de tu importación en 24 horas: producto, arancel, impuestos, transporte, despacho y entrega, para que decidas con el número real." },
          { q: "¿Qué opción de transporte me conviene?", a: "Marítimo, aéreo o multimodal: la respuesta cambia según producto, volumen, peso y urgencia. Te proponemos la operativa y el incoterm que encajan con tu caso, no el estándar." },
          { q: "¿Os encargáis de las aduanas?", a: "Gestionamos o coordinamos la documentación y el despacho aduanero en España o Colombia, y revisamos los requisitos de entrada antes de comprar para evitar mercancía retenida." },
          { q: "¿Y las certificaciones que exige mi producto?", a: "Identificamos con antelación qué certificaciones necesita tu producto para entrar en España o Colombia y las coordinamos con el proveedor antes de producir." },
          { q: "¿Cuánto tarda una importación desde China?", a: "Depende del tiempo de producción del proveedor, del tipo de transporte y del despacho aduanero. Al analizar tu caso te damos una estimación realista para tu producto y ruta, sin promesas genéricas." },
          { q: "¿Qué ocurre si algo sale mal?", a: "Estamos sobre el terreno para actuar: hablamos con el proveedor, vamos a la fábrica si es necesario y buscamos la solución en origen. Tienes un único interlocutor que te informa y te propone opciones, no un correo sin respuesta." },
          { q: "¿Tengo que viajar a China?", a: "No es necesario. NAMAR actúa como tu representación sobre el terreno: verificamos, negociamos y controlamos en tu nombre." },
        ],

        footerTagline: "Tu equipo en China. Importación desde China a España y Colombia.",
        footerCountries: ["España", "China", "Colombia"],
        footerText: "© {year} NAMAR Global. Gestión de importaciones desde China.",
        mobileCta: "Analizar mi importación",
      },
    },
  },
  en: {
    translation: {
      nav: {
        services: "Services",
        process: "How we work",
        costs: "Costs",
        team: "Team",
        routes: "Routes",
        faq: "FAQ",
        contact: "Contact",
      },
      header: {
        cta: "Analyze my import",
        menuOpen: "Open menu",
        menuClose: "Close menu",
        language: "Language",
        languageEs: "Español",
        languageEn: "English",
      },
      whatsapp: {
        message: "Hello, I want to analyze an import from China. Can we talk?",
      },
      contact: {
        title: "Tell us what you want to import.",
        description:
          "The first step is understanding three things: which product, in what quantities, and where to (Spain or Colombia). With that we assess the operation and tell you clearly what is viable, what risks exist, and how we would approach it.",
        prefer: "Do you prefer to talk directly?",
        chat: "Chat on WhatsApp",
        promise: "We reply with a clear assessment, no strings attached.",
        form: {
          name: "Name",
          company: "Company",
          email: "Email",
          phone: "WhatsApp / Phone",
          country: "Destination country",
          countrySpain: "Spain",
          countryColombia: "Colombia",
          countryOther: "Other",
          product: "What do you want to import?",
          volume: "Approximate quantity",
          message: "Message",
          submit: "Send and analyze my import",
          namePlaceholder: "Your name",
          companyPlaceholder: "Company name",
          emailPlaceholder: "name@company.com",
          phonePlaceholder: "+34 / +57 ...",
          productPlaceholder: "e.g. machinery, textiles, components",
          volumePlaceholder: "e.g. 1 container / 500 units",
          messagePlaceholder:
            "Do you already have a supplier? Is this your first import? Tell us where you stand.",
          sentTitle: "Thank you for getting in touch.",
          sentText:
            "We have received your inquiry. We will review product, quantities, and destination and get back to you with a first assessment.",
          sentButton: "Send another inquiry",
        },
      },
      landing: {
        heroBadge: "8 years living and working in China",
        heroTitle: "Your supplier is in China.",
        heroSubtitle: "So is your peace of mind.",
        heroDescription:
          "NAMAR Global represents your interests directly on the ground. We find suppliers, negotiate, verify, control, and coordinate your import from China to Spain or Colombia.",
        heroPrimaryCta: "Analyze my import",
        heroSecondaryCta: "How we work",
        heroMicro: "We simulate your import costs within 24 hours.",
        heroQuote:
          "“We are our clients' eyes and arms in China. We protect their purchase and reduce the risk of importing.”",

        authorityLabel: "Why NAMAR is different",
        authorityTitle: "8 years on the ground change the way you import.",
        authorityText:
          "NAMAR does not manage China from an office in Europe. We are physically here: speaking with suppliers in their language, visiting factories, reviewing production, and solving issues the moment they happen, not weeks later by email.",
        authorityPoints: [
          {
            label: "What we do",
            text: "We manage your import from China end to end: we find and verify the factory, negotiate, control quality, and coordinate shipping to Spain or Colombia.",
          },
          {
            label: "For whom",
            text: "For SMEs, entrepreneurs, and companies in Spain and Colombia buying from China, whether for the first time or for years and ready to stop improvising.",
          },
          {
            label: "How we do it",
            text: "With a physical presence in China. We go to the factory, speak the language, and solve issues at the source before the problem travels in the container.",
          },
        ],
        authorityLink: "See how we work",

        problemTitle: "Importing from China should not be a leap of faith.",
        problemIntro:
          "Most import problems do not show up at destination: they appear at the source, months earlier, when nobody is looking. This is how we turn them into controlled decisions.",
        problemColumns: { risk: "Risk", action: "What we do", result: "Result" },
        problems: [
          { risk: "Unknown supplier", action: "We verify the factory, its background, and whether it really manufactures or resells.", result: "You buy with greater confidence." },
          { risk: "Uncertain quality", action: "We control samples and production before shipment, while it can still be corrected.", result: "You receive what was agreed." },
          { risk: "Hidden costs", action: "We calculate the real landed cost: duties, freight, taxes, and clearance.", result: "You know what importing will cost." },
          { risk: "Problems at origin", action: "We are on the ground to go, look, speak with the manager, and solve it.", result: "Someone acts when you cannot." },
          { risk: "Customs and certifications", action: "We review documentation and entry requirements for Spain or Colombia before you buy.", result: "Your goods do not get stuck." },
        ],
        problemQuote: "This is where NAMAR Global comes in.",

        servicesLabel: "Our services",
        servicesTitle: "One single control process, from the factory to your warehouse.",
        servicesIntro:
          "We do not sell isolated services. Each phase protects the next, and you have a single point of contact throughout the operation.",
        phases: [
          { key: "find", label: "We find" },
          { key: "verify", label: "We verify" },
          { key: "negotiate", label: "We negotiate" },
          { key: "control", label: "We control" },
          { key: "ship", label: "We ship" },
        ],
        services: [
          { n: "01", phase: "We find", title: "Supplier sourcing in China", text: "We locate and analyze suppliers that fit your product, volume, and budget. We don't give you a list: we give you vetted options." },
          { n: "02", phase: "We verify", title: "Factory verification and audit", text: "We check who is really behind the supplier, whether it is a manufacturer or intermediary, and assess capacity and reliability. If needed, we go to the factory." },
          { n: "03", phase: "We negotiate", title: "Supplier negotiation", text: "We negotiate prices, quantities, lead times, payment terms, and specifications in the language and codes of the local market." },
          { n: "04", phase: "We control", title: "Quality control at origin", text: "We supervise samples and production so the goods meet what was agreed before leaving China, while it can still be corrected." },
          { n: "05", phase: "We ship", title: "International logistics", text: "We coordinate transport from the factory to Spain or Colombia, choosing the operation and incoterm that best fit your product." },
          { n: "06", phase: "We ship", title: "Customs and certifications", text: "We manage or coordinate documentation, customs clearance, and the certifications needed so your product enters without surprises." },
          { n: "07", phase: "We control", title: "Operations tracking", text: "We accompany the entire process to detect issues and resolve them at origin before they become costs for you." },
          { n: "08", phase: "We find", title: "Import cost calculation", text: "Within 24 hours we deliver a report simulating the total cost: product, duties, VAT, freight, clearance, documentation, insurance, and delivery. You know the real landed price before committing a single euro." },
        ],

        costLabel: "Cost simulation",
        costTitle: "What will importing from China really cost you?",
        costText:
          "Before you buy, calculate the real cost of bringing your goods to Spain or Colombia. We help you estimate it within 24 hours.",
        costItems: [
          "Product price and purchase terms",
          "Duties and import taxes",
          "International freight and insurance",
          "Customs clearance and documentation",
          "Final delivery to your warehouse",
        ],
        costCta: "Calculate my import",
        costNote: "You receive a clear report with the estimated landed cost.",

        objectionsTitle: "Importing from China, simplified.",
        objectionsIntro: "These are the doubts we receive every week. This is how we solve them.",
        objections: [
          { q: "“I found a supplier, but I don't know whether to trust them.”", a: "We verify who they truly are: whether they manufacture or subcontract, what capacity they have, and which clients they work with. If necessary, we go to the factory and tell you what we saw." },
          { q: "“I don't know what documentation my product needs.”", a: "We review your product requirements with you before buying: commercial documentation, certifications, and entry requirements for Spain or Colombia. It is much cheaper to know beforehand than with goods stuck in customs." },
          { q: "“I'm afraid the quality won't match what was agreed.”", a: "We define clear specifications with the supplier and verify them at the source. A defect detected in China is corrected; one detected at your warehouse is paid for." },
          { q: "“I don't know which shipping option suits me.”", a: "Depending on product, volume, weight, and urgency, the operation changes and so does the margin. We propose the route and incoterm that make sense for your case, not the default." },
          { q: "“I already import, but I want to stop improvising.”", a: "We review your current operations, suppliers, and costs and professionalize the process with a single point of contact at origin." },
        ],

        processTitle: "This is how we turn a complex import into a controlled process.",
        processQuote: "You focus on growing your business. We take care of China.",
        processCta: "Analyze my import",
        steps: [
          { n: "01", title: "We understand your project", text: "We analyze what you want to buy, quantities, budget, destination, and where you stand." },
          { n: "02", title: "We source suppliers", text: "We find suitable suppliers in China and discard those that do not fit." },
          { n: "03", title: "We verify and negotiate", text: "We check the supplier on the ground and negotiate the terms." },
          { n: "04", title: "We control production", text: "We monitor quality and compliance with what was agreed before shipment." },
          { n: "05", title: "We manage logistics", text: "We coordinate transport, documentation, and customs to Spain or Colombia." },
          { n: "06", title: "You receive your goods", text: "Your product arrives at destination with the process controlled from start to finish." },
        ],

        onTheGroundTitle: "You don't need to travel to China. We are already there.",
        onTheGroundText:
          "Going to the factory, looking at production, speaking with the manager, and saying something is wrong. That is not done by email: it is done in person.",
        onTheGroundCta: "Analyze my import",

        teamLabel: "The people behind NAMAR",
        teamTitle: "We don't manage China from an office in Europe. We live here.",
        teamText:
          "Behind NAMAR Global are people with names who have spent years living and working in China. When you talk to us, you talk to the person who goes to the factory, negotiates with the supplier, and follows your operation closely.",
        team: [
          { name: "Nacho", role: "NAMAR Global · On the ground in China", initials: "N" },
          { name: "María", role: "NAMAR Global · On the ground in China", initials: "M" },
        ],
        teamPhotoPlaceholder: "Real photo in China",
        teamNote: "You speak directly with us. No call centers, no intermediaries.",

        whyTitle: "Your team in China, without needing to be in China.",
        differentiators: [
          { title: "8 years in China", text: "Real experience living, working, and operating on the ground." },
          { title: "Physical presence", text: "We are in China to verify, negotiate, and solve issues in person." },
          { title: "Direct communication", text: "Language, culture, and local market knowledge, without intermediaries." },
          { title: "Lower risk", text: "We reduce the uncertainty of buying from unknown suppliers." },
          { title: "Control from start to finish", text: "We don't disappear after finding the supplier." },
          { title: "A single point of contact", text: "We centralize the operation: you don't coordinate agents, suppliers, and forwarders on your own." },
        ],
        quote: "“We are your eyes and arms in China.”",

        profilesTitle: "Is it for you?",
        profiles: [
          { title: "SMEs", text: "Companies that want to start or improve their imports from China with less risk." },
          { title: "Entrepreneurs", text: "People with a product or project who need a team at origin to make it happen." },
          { title: "Businesses already importing", text: "Companies that want to reduce risk, know their real costs, and professionalize their process." },
          { title: "Businesses starting in China", text: "Companies that need a local partner to take their first steps safely." },
        ],
        profilesQuote: "You don't need experience importing from China. You need someone who has it.",

        routesLabel: "Routes we work",
        routesTitle: "Importing from China to Spain and to Colombia.",
        routesText:
          "We don't work “the world”. We work two routes we know well, with their customs, requirements, and logistics. That lets us anticipate problems instead of discovering them.",
        routes: [
          {
            from: "China",
            to: "Spain",
            title: "Importing from China to Spain",
            text: "Supplier sourcing, quality control at origin, and logistics and customs coordination to your warehouse in Spain, with EU entry requirements reviewed before you buy.",
            tags: ["Verified suppliers", "EU requirements", "Spanish customs"],
          },
          {
            from: "China",
            to: "Colombia",
            title: "Importing from China to Colombia",
            text: "Representation at origin for Colombian companies: factory verification, negotiation, quality control, and coordination of shipping and documentation to Colombia.",
            tags: ["Verified suppliers", "Import documentation", "Colombian customs"],
          },
        ],
        routesNote: "Another destination? Tell us and we will assess whether we can help.",

        proofLabel: "Operational proof",
        proofTitle: "What you can expect from working with NAMAR.",
        proofIntro:
          "We will publish real client testimonials here once we can do so with name and company. In the meantime, this is what we can promise you.",
        proof: [
          { title: "Real presence on the ground", text: "8 years living and working in China. We visit factories and speak with suppliers in person, not only by email." },
          { title: "Defined, documented process", text: "Every operation follows the same phases: find, verify, negotiate, control, and ship. You know where your import stands." },
          { title: "Spain and Colombia coverage", text: "We know the requirements, documentation, and logistics of the two routes we work." },
          { title: "Support from start to finish", text: "We don't disappear after introducing a supplier. We follow the operation until the goods reach your warehouse." },
        ],

        startTitle: "Getting started is simple.",
        startIntro: "You don't need to have everything figured out to talk to us. Knowing which product interests you is enough to begin.",
        startSteps: [
          { n: "01", title: "Tell us what you want to import", text: "Product, approximate quantity, and destination. By form or WhatsApp." },
          { n: "02", title: "We analyze your case", text: "We review your project and tell you clearly what is viable, what risks exist, and what it would cost." },
          { n: "03", title: "We start operating", text: "We define the scope of work and start in China. You follow the operation with a single point of contact." },
        ],

        faqTitle: "Frequently asked questions about importing from China",
        faqs: [
          { q: "Is there a minimum order to work with NAMAR?", a: "We don't set a fixed minimum: the minimum order is usually set by the manufacturer and varies by product and sector. What we do is assess with you whether the operation makes economic sense before starting." },
          { q: "How do you verify a supplier in China?", a: "We check its legal identity, whether it is a manufacturer or intermediary, its production capacity, and references. When the operation requires it, we visit the factory and tell you what we saw." },
          { q: "How does quality control work?", a: "We agree clear specifications with the supplier and verify them at origin on samples and production, before shipment. That way a defect is corrected in China and not discovered at your warehouse." },
          { q: "How much does importing from China cost?", a: "It depends on product, volume, transport, and destination. That is why we simulate your total import cost within 24 hours: product, duties, taxes, freight, clearance, and delivery, so you decide with the real number." },
          { q: "Which transport option suits me?", a: "Sea, air, or multimodal: the answer changes with product, volume, weight, and urgency. We propose the operation and incoterm that fit your case, not the default." },
          { q: "Do you handle customs?", a: "We manage or coordinate documentation and customs clearance in Spain or Colombia, and review entry requirements before you buy to avoid held goods." },
          { q: "What about the certifications my product requires?", a: "We identify in advance which certifications your product needs to enter Spain or Colombia and coordinate them with the supplier before production." },
          { q: "How long does an import from China take?", a: "It depends on the supplier's production time, the type of transport, and customs clearance. When we analyze your case we give you a realistic estimate for your product and route, without generic promises." },
          { q: "What happens if something goes wrong?", a: "We are on the ground to act: we talk to the supplier, go to the factory if necessary, and look for the solution at origin. You have a single point of contact who informs you and proposes options, not an unanswered email." },
          { q: "Do I have to travel to China?", a: "Not necessary. NAMAR acts as your representation on the ground: we verify, negotiate, and control on your behalf." },
        ],

        footerTagline: "Your team in China. Imports from China to Spain and Colombia.",
        footerCountries: ["Spain", "China", "Colombia"],
        footerText: "© {year} NAMAR Global. Import management from China.",
        mobileCta: "Analyze my import",
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
