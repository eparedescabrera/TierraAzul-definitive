import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      common: {
        company: 'Tierra Azul 1981',
        tagline: 'Agricultura, frescura y exportacion sostenible',
        readMore: 'Ver mas',
        contact: 'Contactar',
        viewProducts: 'Ver productos',
        all: 'Todos',
        close: 'Cerrar',
      },
      nav: {
        home: 'Inicio',
        about: 'Nosotros',
        company: 'Empresa',
        strategy: 'Estrategia',
        products: 'Productos',
        gallery: 'Galeria',
        quality: 'Calidad',
        social: 'Responsabilidad Social',
        contact: 'Contacto',
        privacy: 'Privacidad',
      },
      topbar: {
        email: 'info@tierraazul1981.com',
        phone: '+34 000 000 000',
        schedule: 'Lun - Vie 08:00 - 18:00',
      },
      hero: {
        slides: [
          {
            eyebrow: 'Desde 1981',
            title: 'Agroexportacion con identidad, calidad y vision internacional',
            text: 'Cultivamos melon y sandia bajo procesos responsables, trazables y orientados a mercados exigentes.',
          },
          {
            eyebrow: 'Frescura natural',
            title: 'Productos seleccionados para llegar en condiciones optimas',
            text: 'Integramos campo, control de calidad y logistica para preservar sabor, textura y confianza.',
          },
          {
            eyebrow: 'Compromiso sostenible',
            title: 'Crecimiento agricola con respeto por las personas y el entorno',
            text: 'Trabajamos con una cultura corporativa enfocada en sostenibilidad, seguridad y mejora continua.',
          },
        ],
      },
      home: {
        introTitle: 'Una empresa agricola preparada para el mercado global',
        introText: 'Tierra Azul 1981 combina experiencia en campo, seleccion tecnica y vocacion exportadora para entregar frutas frescas con estandares internacionales.',
        pillars: ['Calidad exportacion', 'Produccion sostenible', 'Logistica confiable'],
        galleryTitle: 'Galeria corporativa',
      },
      pages: {
        empresa: {
          title: 'Empresa',
          subtitle: 'Tradicion agricola, evolucion tecnica y compromiso exportador.',
          body: 'Somos una organizacion agricola especializada en productos frescos, con procesos ordenados desde el cultivo hasta la entrega final. Nuestra cultura une experiencia, tecnologia y una gestion cercana al cliente internacional.',
        },
        estrategia: {
          title: 'Estrategia',
          subtitle: 'Crecimiento responsable con vision de largo plazo.',
          body: 'Nuestra estrategia se basa en calidad constante, eficiencia operativa, relaciones comerciales duraderas y adaptacion a los requerimientos de cada mercado.',
        },
        calidad: {
          title: 'Calidad',
          subtitle: 'Control, trazabilidad y seleccion en cada etapa.',
          body: 'Aplicamos criterios de inspeccion, manejo higienico, seleccion visual y seguimiento documental para garantizar fruta fresca, segura y consistente.',
        },
        social: {
          title: 'Responsabilidad Social',
          subtitle: 'Agricultura que cuida a las personas y al entorno.',
          body: 'Promovemos practicas responsables en campo, bienestar laboral, uso eficiente de recursos y una relacion equilibrada con nuestras comunidades.',
        },
        privacidad: {
          title: 'Privacidad',
          subtitle: 'Proteccion de datos y comunicacion transparente.',
          body: 'Los datos enviados mediante formularios se utilizan exclusivamente para responder solicitudes comerciales o informativas. No compartimos informacion personal con terceros sin autorizacion.',
        },
      },
      products: {
        title: 'Productos',
        subtitle: 'Frutas frescas con calidad de exportacion',
        melon: {
          name: 'Melon',
          text: 'Melon seleccionado por calibre, dulzor, textura y resistencia para operaciones internacionales.',
        },
        watermelon: {
          name: 'Sandia',
          text: 'Sandia fresca, firme y jugosa, preparada para cadenas de suministro que exigen consistencia.',
        },
      },
      gallery: {
        title: 'Galeria',
        subtitle: 'Campo, producto y cultura corporativa',
        filters: {
          field: 'Campo',
          product: 'Producto',
          process: 'Proceso',
        },
      },
      contactPage: {
        title: 'Contacto',
        subtitle: 'Hablemos de oportunidades comerciales',
        formTitle: 'Enviar mensaje',
        name: 'Nombre',
        email: 'Correo electronico',
        message: 'Mensaje',
        send: 'Enviar',
        success: 'Mensaje enviado correctamente',
        error: 'No se pudo enviar el mensaje',
        mapTitle: 'Ubicacion corporativa',
        hoursTitle: 'Horario de atencion',
      },
      footer: {
        description: 'Empresa agroexportadora comprometida con frescura, sostenibilidad y calidad internacional.',
        links: 'Enlaces',
        contact: 'Contacto',
        youtube: 'YouTube',
        rights: 'Todos los derechos reservados.',
      },
    },
  },
  en: {
    translation: {
      common: {
        company: 'Tierra Azul 1981',
        tagline: 'Agriculture, freshness and sustainable export',
        readMore: 'Read more',
        contact: 'Contact',
        viewProducts: 'View products',
        all: 'All',
        close: 'Close',
      },
      nav: {
        home: 'Home',
        about: 'About us',
        company: 'Company',
        strategy: 'Strategy',
        products: 'Products',
        gallery: 'Gallery',
        quality: 'Quality',
        social: 'Social Responsibility',
        contact: 'Contact',
        privacy: 'Privacy',
      },
      topbar: {
        email: 'info@tierraazul1981.com',
        phone: '+34 000 000 000',
        schedule: 'Mon - Fri 08:00 - 18:00',
      },
      hero: {
        slides: [
          {
            eyebrow: 'Since 1981',
            title: 'Agro-exporting with identity, quality and international vision',
            text: 'We grow melon and watermelon through responsible, traceable processes for demanding markets.',
          },
          {
            eyebrow: 'Natural freshness',
            title: 'Selected products delivered in optimal condition',
            text: 'We integrate field work, quality control and logistics to preserve flavor, texture and trust.',
          },
          {
            eyebrow: 'Sustainable commitment',
            title: 'Agricultural growth that respects people and the environment',
            text: 'Our corporate culture focuses on sustainability, safety and continuous improvement.',
          },
        ],
      },
      home: {
        introTitle: 'An agricultural company ready for the global market',
        introText: 'Tierra Azul 1981 combines field experience, technical selection and export vocation to deliver fresh fruit with international standards.',
        pillars: ['Export quality', 'Sustainable production', 'Reliable logistics'],
        galleryTitle: 'Corporate gallery',
      },
      pages: {
        empresa: {
          title: 'Company',
          subtitle: 'Agricultural tradition, technical evolution and export commitment.',
          body: 'We are an agricultural organization specialized in fresh products, with orderly processes from cultivation to final delivery. Our culture combines experience, technology and close management for international clients.',
        },
        estrategia: {
          title: 'Strategy',
          subtitle: 'Responsible growth with a long-term vision.',
          body: 'Our strategy is based on consistent quality, operational efficiency, lasting commercial relationships and adaptation to each market requirement.',
        },
        calidad: {
          title: 'Quality',
          subtitle: 'Control, traceability and selection at every stage.',
          body: 'We apply inspection criteria, hygienic handling, visual selection and documentary tracking to guarantee fresh, safe and consistent fruit.',
        },
        social: {
          title: 'Social Responsibility',
          subtitle: 'Agriculture that cares for people and the environment.',
          body: 'We promote responsible field practices, labor wellbeing, efficient use of resources and balanced relationships with our communities.',
        },
        privacidad: {
          title: 'Privacy',
          subtitle: 'Data protection and transparent communication.',
          body: 'Data submitted through forms is used only to answer commercial or informational requests. We do not share personal information with third parties without authorization.',
        },
      },
      products: {
        title: 'Products',
        subtitle: 'Fresh fruit with export quality',
        melon: {
          name: 'Melon',
          text: 'Melon selected by size, sweetness, texture and resilience for international operations.',
        },
        watermelon: {
          name: 'Watermelon',
          text: 'Fresh, firm and juicy watermelon prepared for supply chains that demand consistency.',
        },
      },
      gallery: {
        title: 'Gallery',
        subtitle: 'Field, product and corporate culture',
        filters: {
          field: 'Field',
          product: 'Product',
          process: 'Process',
        },
      },
      contactPage: {
        title: 'Contact',
        subtitle: 'Let us discuss commercial opportunities',
        formTitle: 'Send message',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
        success: 'Message sent successfully',
        error: 'The message could not be sent',
        mapTitle: 'Corporate location',
        hoursTitle: 'Business hours',
      },
      footer: {
        description: 'Agro-export company committed to freshness, sustainability and international quality.',
        links: 'Links',
        contact: 'Contact',
        youtube: 'YouTube',
        rights: 'All rights reserved.',
      },
    },
  },
  de: {
    translation: {
      common: {
        company: 'Tierra Azul 1981',
        tagline: 'Landwirtschaft, Frische und nachhaltiger Export',
        readMore: 'Mehr erfahren',
        contact: 'Kontakt',
        viewProducts: 'Produkte ansehen',
        all: 'Alle',
        close: 'Schliessen',
      },
      nav: {
        home: 'Startseite',
        about: 'Uber uns',
        company: 'Unternehmen',
        strategy: 'Strategie',
        products: 'Produkte',
        gallery: 'Galerie',
        quality: 'Qualitat',
        social: 'Soziale Verantwortung',
        contact: 'Kontakt',
        privacy: 'Datenschutz',
      },
      topbar: {
        email: 'info@tierraazul1981.com',
        phone: '+34 000 000 000',
        schedule: 'Mo - Fr 08:00 - 18:00',
      },
      hero: {
        slides: [
          {
            eyebrow: 'Seit 1981',
            title: 'Agrarexport mit Identitat, Qualitat und internationaler Vision',
            text: 'Wir bauen Melonen und Wassermelonen mit verantwortungsvollen, ruckverfolgbaren Prozessen fur anspruchsvolle Markte an.',
          },
          {
            eyebrow: 'Naturliche Frische',
            title: 'Ausgewahlte Produkte in optimalem Zustand',
            text: 'Wir verbinden Feldarbeit, Qualitatskontrolle und Logistik, um Geschmack, Textur und Vertrauen zu bewahren.',
          },
          {
            eyebrow: 'Nachhaltiges Engagement',
            title: 'Landwirtschaftliches Wachstum mit Respekt fur Menschen und Umwelt',
            text: 'Unsere Unternehmenskultur konzentriert sich auf Nachhaltigkeit, Sicherheit und kontinuierliche Verbesserung.',
          },
        ],
      },
      home: {
        introTitle: 'Ein Landwirtschaftsunternehmen fur den globalen Markt',
        introText: 'Tierra Azul 1981 verbindet Felderfahrung, technische Auswahl und Exportorientierung, um frische Fruchte nach internationalen Standards zu liefern.',
        pillars: ['Exportqualitat', 'Nachhaltige Produktion', 'Zuverlassige Logistik'],
        galleryTitle: 'Unternehmensgalerie',
      },
      pages: {
        empresa: {
          title: 'Unternehmen',
          subtitle: 'Landwirtschaftliche Tradition, technische Entwicklung und Exportverpflichtung.',
          body: 'Wir sind ein Landwirtschaftsunternehmen fur frische Produkte mit geordneten Prozessen vom Anbau bis zur Lieferung. Unsere Kultur verbindet Erfahrung, Technologie und Nahe zu internationalen Kunden.',
        },
        estrategia: {
          title: 'Strategie',
          subtitle: 'Verantwortungsvolles Wachstum mit langfristiger Vision.',
          body: 'Unsere Strategie basiert auf konstanter Qualitat, operativer Effizienz, dauerhaften Handelsbeziehungen und Anpassung an Marktanforderungen.',
        },
        calidad: {
          title: 'Qualitat',
          subtitle: 'Kontrolle, Ruckverfolgbarkeit und Auswahl in jeder Phase.',
          body: 'Wir nutzen Inspektion, hygienische Handhabung, visuelle Auswahl und Dokumentation, um frische, sichere und konsistente Fruchte zu gewahrleisten.',
        },
        social: {
          title: 'Soziale Verantwortung',
          subtitle: 'Landwirtschaft, die Menschen und Umwelt schutzt.',
          body: 'Wir fordern verantwortungsvolle Feldpraktiken, Arbeitswohl, effiziente Ressourcennutzung und ausgewogene Beziehungen zu unseren Gemeinschaften.',
        },
        privacidad: {
          title: 'Datenschutz',
          subtitle: 'Datenschutz und transparente Kommunikation.',
          body: 'Uber Formulare gesendete Daten werden nur zur Beantwortung kommerzieller oder informativer Anfragen verwendet. Wir geben personenbezogene Daten nicht ohne Genehmigung weiter.',
        },
      },
      products: {
        title: 'Produkte',
        subtitle: 'Frische Fruchte in Exportqualitat',
        melon: {
          name: 'Melone',
          text: 'Melone ausgewahlt nach Kaliber, Susse, Textur und Widerstandsfahigkeit fur internationale Ablaufe.',
        },
        watermelon: {
          name: 'Wassermelone',
          text: 'Frische, feste und saftige Wassermelone fur Lieferketten mit hohen Konsistenzanforderungen.',
        },
      },
      gallery: {
        title: 'Galerie',
        subtitle: 'Feld, Produkt und Unternehmenskultur',
        filters: {
          field: 'Feld',
          product: 'Produkt',
          process: 'Prozess',
        },
      },
      contactPage: {
        title: 'Kontakt',
        subtitle: 'Sprechen wir uber Handelsmoglichkeiten',
        formTitle: 'Nachricht senden',
        name: 'Name',
        email: 'E-Mail',
        message: 'Nachricht',
        send: 'Senden',
        success: 'Nachricht erfolgreich gesendet',
        error: 'Die Nachricht konnte nicht gesendet werden',
        mapTitle: 'Unternehmensstandort',
        hoursTitle: 'Geschaftszeiten',
      },
      footer: {
        description: 'Agrarexportunternehmen mit Fokus auf Frische, Nachhaltigkeit und internationale Qualitat.',
        links: 'Links',
        contact: 'Kontakt',
        youtube: 'YouTube',
        rights: 'Alle Rechte vorbehalten.',
      },
    },
  },
  nl: {
    translation: {
      common: {
        company: 'Tierra Azul 1981',
        tagline: 'Landbouw, versheid en duurzame export',
        readMore: 'Meer bekijken',
        contact: 'Contact',
        viewProducts: 'Producten bekijken',
        all: 'Alles',
        close: 'Sluiten',
      },
      nav: {
        home: 'Home',
        about: 'Over ons',
        company: 'Bedrijf',
        strategy: 'Strategie',
        products: 'Producten',
        gallery: 'Galerij',
        quality: 'Kwaliteit',
        social: 'Maatschappelijke Verantwoordelijkheid',
        contact: 'Contact',
        privacy: 'Privacy',
      },
      topbar: {
        email: 'info@tierraazul1981.com',
        phone: '+34 000 000 000',
        schedule: 'Ma - Vr 08:00 - 18:00',
      },
      hero: {
        slides: [
          {
            eyebrow: 'Sinds 1981',
            title: 'Agro-export met identiteit, kwaliteit en internationale visie',
            text: 'Wij telen meloen en watermeloen met verantwoordelijke, traceerbare processen voor veeleisende markten.',
          },
          {
            eyebrow: 'Natuurlijke versheid',
            title: 'Geselecteerde producten in optimale conditie',
            text: 'Wij combineren veldwerk, kwaliteitscontrole en logistiek om smaak, textuur en vertrouwen te behouden.',
          },
          {
            eyebrow: 'Duurzame betrokkenheid',
            title: 'Agrarische groei met respect voor mens en milieu',
            text: 'Onze bedrijfscultuur richt zich op duurzaamheid, veiligheid en continue verbetering.',
          },
        ],
      },
      home: {
        introTitle: 'Een landbouwbedrijf klaar voor de wereldmarkt',
        introText: 'Tierra Azul 1981 combineert veldervaring, technische selectie en exportgerichtheid om vers fruit volgens internationale normen te leveren.',
        pillars: ['Exportkwaliteit', 'Duurzame productie', 'Betrouwbare logistiek'],
        galleryTitle: 'Bedrijfsgalerij',
      },
      pages: {
        empresa: {
          title: 'Bedrijf',
          subtitle: 'Agrarische traditie, technische evolutie en exportbetrokkenheid.',
          body: 'Wij zijn een landbouworganisatie gespecialiseerd in verse producten, met gestructureerde processen van teelt tot levering. Onze cultuur verbindt ervaring, technologie en nabijheid tot internationale klanten.',
        },
        estrategia: {
          title: 'Strategie',
          subtitle: 'Verantwoord groeien met langetermijnvisie.',
          body: 'Onze strategie is gebaseerd op constante kwaliteit, operationele efficientie, duurzame handelsrelaties en aanpassing aan marktvereisten.',
        },
        calidad: {
          title: 'Kwaliteit',
          subtitle: 'Controle, traceerbaarheid en selectie in elke fase.',
          body: 'Wij passen inspectie, hygienische behandeling, visuele selectie en documentatie toe om vers, veilig en consistent fruit te garanderen.',
        },
        social: {
          title: 'Maatschappelijke Verantwoordelijkheid',
          subtitle: 'Landbouw die zorgt voor mensen en omgeving.',
          body: 'Wij bevorderen verantwoord veldwerk, welzijn op het werk, efficient gebruik van middelen en evenwichtige relaties met onze gemeenschappen.',
        },
        privacidad: {
          title: 'Privacy',
          subtitle: 'Gegevensbescherming en transparante communicatie.',
          body: 'Gegevens die via formulieren worden verzonden, worden uitsluitend gebruikt om commerciele of informatieve vragen te beantwoorden. Wij delen geen persoonlijke gegevens zonder toestemming.',
        },
      },
      products: {
        title: 'Producten',
        subtitle: 'Vers fruit met exportkwaliteit',
        melon: {
          name: 'Meloen',
          text: 'Meloen geselecteerd op maat, zoetheid, textuur en sterkte voor internationale operaties.',
        },
        watermelon: {
          name: 'Watermeloen',
          text: 'Verse, stevige en sappige watermeloen voorbereid voor toeleveringsketens die consistentie vereisen.',
        },
      },
      gallery: {
        title: 'Galerij',
        subtitle: 'Veld, product en bedrijfscultuur',
        filters: {
          field: 'Veld',
          product: 'Product',
          process: 'Proces',
        },
      },
      contactPage: {
        title: 'Contact',
        subtitle: 'Laten we commerciele kansen bespreken',
        formTitle: 'Bericht verzenden',
        name: 'Naam',
        email: 'E-mail',
        message: 'Bericht',
        send: 'Verzenden',
        success: 'Bericht succesvol verzonden',
        error: 'Het bericht kon niet worden verzonden',
        mapTitle: 'Bedrijfslocatie',
        hoursTitle: 'Openingstijden',
      },
      footer: {
        description: 'Agro-exportbedrijf gericht op versheid, duurzaamheid en internationale kwaliteit.',
        links: 'Links',
        contact: 'Contact',
        youtube: 'YouTube',
        rights: 'Alle rechten voorbehouden.',
      },
    },
  },
};

const savedLanguage = localStorage.getItem('tierraAzulLanguage') || 'es';

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
