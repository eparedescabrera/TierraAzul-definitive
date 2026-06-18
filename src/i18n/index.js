import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      common: {
        company: 'Tierra Azul 1981',
        tagline: 'Agricultura, frescura y exportación sostenible',
        readMore: 'Ver más',
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
        gallery: 'Galería',
        quality: 'Calidad',
        social: 'Responsabilidad Social',
        contact: 'Contacto',
        privacy: 'Privacidad',
      },
      topbar: {
        location: 'Pilas de Canjel, Puntarenas, Costa Rica.',
        email: 'waju@grupopenca.com',
        phone: '+506 45002389',
        schedule: 'Lun - Vie 8:00 AM - 4:00 PM',
      },
      hero: {
        slides: [
          {
            eyebrow: 'Desde 1981',
            title: 'Agroexportación con identidad, calidad y visión internacional',
            text: 'Cultivamos melón y sandía bajo procesos responsables, trazables y orientados a mercados exigentes.',
          },
          {
            eyebrow: 'Frescura natural',
            title: 'Productos seleccionados para llegar en condiciones óptimas',
            text: 'Integramos campo, control de calidad y logística para preservar sabor, textura y confianza.',
          },
          {
            eyebrow: 'Compromiso sostenible',
            title: 'Crecimiento agrícola con respeto por las personas y el entorno',
            text: 'Trabajamos con una cultura corporativa enfocada en sostenibilidad, seguridad y mejora continua.',
          },
        ],
      },
      home: {
        introTitle: 'Una empresa agrícola preparada para el mercado global',
        introText: 'Tierra Azul 1981 combina experiencia en campo, selección técnica y vocación exportadora para entregar frutas frescas con estándares internacionales.',
        pillars: ['Calidad exportación', 'Producción sostenible', 'Logística confiable'],
        galleryTitle: 'Galería corporativa',
        video: {
          eyebrow: 'YouTube',
          title: 'Visualización de nuestra empresa',
          text: 'Conozca Tierra Azul 1981 en video: instalaciones, operaciones y el compromiso que respalda nuestra producción agrícola.',
          channel: 'Visitar canal de YouTube',
        },
      },
      pages: {
        empresa: {
          title: 'Empresa',
          subtitle: 'Tradición agrícola, evolución técnica y compromiso exportador.',
          originTitle: 'Cómo nació la empresa',
          origin:
            'Tierra Azul 1981, S.A. Su nombre corresponde a la ubicación de la empresa, ya que se encuentra en una de las zonas azules del mundo, con capital 100% costarricense, produce frutas para promover el bienestar social y económico de la Península de Nicoya, ¡con gran éxito! Nuestra empresa está comprometida con la producción de frutas de alta calidad, teniendo en cuenta la responsabilidad social y ambiental; nuestro equipo de trabajo cumple anualmente con las acreditaciones internacionales de buenas prácticas agrícolas y de manufactura.',
          missionTitle: 'Misión',
          mission:
            'Mejorar continuamente nuestros recursos humanos y los procesos para producir melones y sandías de la más alta calidad, de acuerdo con los estándares de calidad de nuestros clientes.',
          visionTitle: 'Visión',
          vision:
            'Ser una empresa líder en la producción de melón y sandía en Costa Rica, convertirnos en una empresa eficiente e innovadora en sus procesos, con reconocimiento internacional de la calidad de nuestro producto.',
          commitmentTitle: 'Compromiso corporativo',
          commitment:
            'Producción responsable, calidad exportadora y desarrollo sostenible para la Península de Nicoya y nuestros mercados internacionales.',
        },
        estrategia: {
          title: 'Estrategia',
          subtitle: 'Crecimiento responsable con visión de largo plazo.',
          body: 'Nuestra estrategia se basa en calidad constante, eficiencia operativa, relaciones comerciales duraderas y adaptación a los requerimientos de cada mercado.',
        },
        calidad: {
          title: 'Calidad',
          subtitle: 'Control, trazabilidad y selección en cada etapa.',
          body: 'Aplicamos criterios de inspección, manejo higiénico, selección visual y seguimiento documental para garantizar fruta fresca, segura y consistente.',
        },
        social: {
          title: 'Responsabilidad Social',
          subtitle: 'Agricultura que cuida a las personas y al entorno.',
          body: 'Promovemos prácticas responsables en campo, bienestar laboral, uso eficiente de recursos y una relación equilibrada con nuestras comunidades.',
          wasteCollection: {
            badge: 'Medio ambiente',
            title: 'Recolección de basura comunitaria',
            intro:
              'Nuestro equipo participa activamente en jornadas de limpieza y recolección de residuos en zonas agrícolas y comunidades cercanas, promoviendo entornos más limpios y saludables.',
            galleryAlt: 'Jornada de recolección de basura',
            teamTitle: 'Responsables del programa',
            teamSubtitle: 'Colaboradores que lideran las acciones de limpieza y cuidado ambiental.',
            team: [
              {
                name: 'José Ramírez',
                role: 'Coordinador ambiental',
                bio: 'Organiza jornadas de recolección y sensibilización en campo y comunidades.',
              },
              {
                name: 'Sofía Vargas',
                role: 'Líder de voluntariado',
                bio: 'Coordina equipos de trabajo y seguimiento de zonas intervenidas.',
              },
              {
                name: 'Miguel Castro',
                role: 'Supervisor de campo',
                bio: 'Supervisa la correcta disposición de residuos y el cumplimiento de protocolos.',
              },
            ],
          },
        },
        privacidad: {
          title: 'Privacidad',
          subtitle: 'Protección de datos y comunicación transparente.',
          body: 'Los datos enviados mediante formularios se utilizan exclusivamente para responder solicitudes comerciales o informativas. No compartimos información personal con terceros sin autorización.',
        },
      },
      products: {
        title: 'Productos',
        subtitle: 'Frutas frescas con calidad de exportación',
        melon: {
          name: 'Melón',
          text: 'Melón seleccionado por calibre, dulzor, textura y resistencia para operaciones internacionales.',
        },
        watermelon: {
          name: 'Sandía',
          text: 'Sandía fresca, firme y jugosa, preparada para cadenas de suministro que exigen consistencia.',
        },
      },
      gallery: {
        title: 'Galería',
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
        lastName: 'Apellidos',
        email: 'Correo electrónico',
        message: 'Mensaje',
        document: 'Documento adjunto',
        documentAction: 'Seleccionar archivo PDF o DOC',
        documentHint: 'Formatos permitidos: PDF, DOC o DOCX. Máximo 5 MB.',
        send: 'Enviar',
        success: 'Mensaje enviado correctamente',
        error: 'No se pudo enviar el mensaje',
        validation: {
          nameInvalid: 'Ingrese un nombre válido (mínimo 2 letras, solo letras).',
          lastNameInvalid: 'Ingrese apellidos válidos (mínimo 2 letras, solo letras).',
          emailInvalid: 'Ingrese un correo electrónico válido.',
          documentInvalid: 'Solo se permiten archivos PDF, DOC o DOCX.',
          documentSize: 'El archivo no debe superar 5 MB.',
        },
        mapTitle: 'Ubicación corporativa',
        hoursTitle: 'Horario de atención',
        hoursOpen: 'Abierto',
        hoursClosed: 'Cerrado',
        scheduleDays: 'Lun - Vie',
        departmentsTitle: 'Contacto por departamento',
        departmentsSubtitle: 'Comuníquese directamente con el área que necesite.',
        personLabel: 'Responsable',
        emailLabel: 'Correo electrónico',
        departments: {
          humanResources: {
            name: 'Recursos humanos',
            person: 'María Fernández',
            email: 'rrhh@tierraazul1981.com',
          },
          logistics: {
            name: 'Logística',
            person: 'Carlos Méndez',
            email: 'logistica@tierraazul1981.com',
          },
          environmental: {
            name: 'Gestión ambiental',
            person: 'Ana Solís',
            email: 'ambiental@tierraazul1981.com',
          },
          generalManagement: {
            name: 'Gerencia general',
            person: 'Roberto Paredes',
            email: 'waju@grupopenca.com',
          },
          adminAccounting: {
            name: 'Administración - Contabilidad',
            person: 'Laura Jiménez',
            email: 'administracion@tierraazul1981.com',
          },
        },
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
        location: 'Pilas de Canjel, Puntarenas, Costa Rica.',
        email: 'waju@grupopenca.com',
        phone: '+506 45002389',
        schedule: 'Mon - Fri 8:00 AM - 4:00 PM',
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
        video: {
          eyebrow: 'YouTube',
          title: 'Company overview video',
          text: 'Discover Tierra Azul 1981 on video: our facilities, operations and the commitment behind our agricultural production.',
          channel: 'Visit YouTube channel',
        },
      },
      pages: {
        empresa: {
          title: 'Company',
          subtitle: 'Agricultural tradition, technical evolution and export commitment.',
          originTitle: 'How the company was born',
          origin:
            'Tierra Azul 1981, S.A. Its name reflects the location of the company, situated in one of the blue zones of the world. With 100% Costa Rican capital, it produces fruit to promote the social and economic wellbeing of the Nicoya Peninsula with great success. Our company is committed to high-quality fruit production, with social and environmental responsibility; our team annually meets international accreditations for good agricultural and manufacturing practices.',
          missionTitle: 'Mission',
          mission:
            'Continuously improve our human resources and processes to produce melons and watermelons of the highest quality, according to our clients quality standards.',
          visionTitle: 'Vision',
          vision:
            'To be a leading melon and watermelon production company in Costa Rica, becoming an efficient and innovative company in its processes, with international recognition for the quality of our product.',
          commitmentTitle: 'Corporate commitment',
          commitment:
            'Responsible production, export quality and sustainable development for the Nicoya Peninsula and our international markets.',
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
          wasteCollection: {
            badge: 'Environment',
            title: 'Community waste collection',
            intro:
              'Our team actively participates in cleanup and waste collection days in agricultural areas and nearby communities, promoting cleaner and healthier environments.',
            galleryAlt: 'Waste collection activity',
            teamTitle: 'Program leaders',
            teamSubtitle: 'Team members who lead cleanup actions and environmental care.',
            team: [
              {
                name: 'Jose Ramirez',
                role: 'Environmental coordinator',
                bio: 'Organizes collection days and awareness activities in the field and communities.',
              },
              {
                name: 'Sofia Vargas',
                role: 'Volunteer leader',
                bio: 'Coordinates work teams and follow-up in intervened areas.',
              },
              {
                name: 'Miguel Castro',
                role: 'Field supervisor',
                bio: 'Supervises proper waste disposal and compliance with protocols.',
              },
            ],
          },
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
        lastName: 'Last name',
        email: 'Email',
        message: 'Message',
        document: 'Attached document',
        documentAction: 'Select PDF or DOC file',
        documentHint: 'Allowed formats: PDF, DOC or DOCX. Maximum 5 MB.',
        send: 'Send',
        success: 'Message sent successfully',
        error: 'The message could not be sent',
        validation: {
          nameInvalid: 'Enter a valid name (at least 2 letters, letters only).',
          lastNameInvalid: 'Enter a valid last name (at least 2 letters, letters only).',
          emailInvalid: 'Enter a valid email address.',
          documentInvalid: 'Only PDF, DOC or DOCX files are allowed.',
          documentSize: 'The file must not exceed 5 MB.',
        },
        mapTitle: 'Corporate location',
        hoursTitle: 'Business hours',
        hoursOpen: 'Open',
        hoursClosed: 'Closed',
        scheduleDays: 'Mon - Fri',
        departmentsTitle: 'Department contacts',
        departmentsSubtitle: 'Reach the area you need directly.',
        personLabel: 'Contact person',
        emailLabel: 'Email',
        departments: {
          humanResources: {
            name: 'Human Resources',
            person: 'Maria Fernandez',
            email: 'rrhh@tierraazul1981.com',
          },
          logistics: {
            name: 'Logistics',
            person: 'Carlos Mendez',
            email: 'logistica@tierraazul1981.com',
          },
          environmental: {
            name: 'Environmental Management',
            person: 'Ana Solis',
            email: 'ambiental@tierraazul1981.com',
          },
          generalManagement: {
            name: 'General Management',
            person: 'Roberto Paredes',
            email: 'waju@grupopenca.com',
          },
          adminAccounting: {
            name: 'Administration - Accounting',
            person: 'Laura Jimenez',
            email: 'administracion@tierraazul1981.com',
          },
        },
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
        close: 'Schließen',
      },
      nav: {
        home: 'Startseite',
        about: 'Über uns',
        company: 'Unternehmen',
        strategy: 'Strategie',
        products: 'Produkte',
        gallery: 'Galerie',
        quality: 'Qualität',
        social: 'Soziale Verantwortung',
        contact: 'Kontakt',
        privacy: 'Datenschutz',
      },
      topbar: {
        location: 'Pilas de Canjel, Puntarenas, Costa Rica.',
        email: 'waju@grupopenca.com',
        phone: '+506 45002389',
        schedule: 'Mo - Fr 8:00 AM - 4:00 PM',
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
        video: {
          eyebrow: 'YouTube',
          title: 'Unternehmensvideo',
          text: 'Lernen Sie Tierra Azul 1981 im Video kennen: Anlagen, Ablaufe und das Engagement hinter unserer landwirtschaftlichen Produktion.',
          channel: 'YouTube-Kanal besuchen',
        },
      },
      pages: {
        empresa: {
          title: 'Unternehmen',
          subtitle: 'Landwirtschaftliche Tradition, technische Entwicklung und Exportverpflichtung.',
          originTitle: 'Wie das Unternehmen entstand',
          origin:
            'Tierra Azul 1981, S.A. Der Name entspricht dem Standort des Unternehmens in einer der blauen Zonen der Welt. Mit 100% costa-ricanischem Kapital produziert es Fruchte, um das soziale und wirtschaftliche Wohlbefinden der Nicoya-Halbinsel erfolgreich zu fordern. Unser Unternehmen ist der Produktion hochwertiger Fruchte verpflichtet und berucksichtigt soziale und okologische Verantwortung; unser Team erfullt jahrlich internationale Akkreditierungen fur gute landwirtschaftliche und verarbeitende Praktiken.',
          missionTitle: 'Mission',
          mission:
            'Unsere Humanressourcen und Prozesse kontinuierlich verbessern, um Melonen und Wassermelonen von hochster Qualitat gemass den Qualitatsstandards unserer Kunden zu produzieren.',
          visionTitle: 'Vision',
          vision:
            'Ein fuhrendes Unternehmen in der Melonen- und Wassermelonenproduktion in Costa Rica zu sein, effizient und innovativ in seinen Prozessen zu werden und international fur die Qualitat unseres Produkts anerkannt zu werden.',
          commitmentTitle: 'Unternehmensverpflichtung',
          commitment:
            'Verantwortungsvolle Produktion, Exportqualitat und nachhaltige Entwicklung fur die Nicoya-Halbinsel und unsere internationalen Markte.',
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
          wasteCollection: {
            badge: 'Umwelt',
            title: 'Gemeinschaftliche Mullsammlung',
            intro:
              'Unser Team beteiligt sich aktiv an Reinigungs- und Mullsammelaktionen in landwirtschaftlichen Gebieten und nahegelegenen Gemeinden.',
            galleryAlt: 'Mullsammelaktion',
            teamTitle: 'Verantwortliche des Programms',
            teamSubtitle: 'Mitarbeiter, die Reinigungsaktionen und Umweltschutz leiten.',
            team: [
              {
                name: 'Jose Ramirez',
                role: 'Umweltkoordinator',
                bio: 'Organisiert Sammelaktionen und Sensibilisierung im Feld und in Gemeinden.',
              },
              {
                name: 'Sofia Vargas',
                role: 'Freiwilligenleiterin',
                bio: 'Koordiniert Arbeitsteams und Nachverfolgung in bearbeiteten Gebieten.',
              },
              {
                name: 'Miguel Castro',
                role: 'Feldaufsicht',
                bio: 'Uberwacht ordnungsgemasse Mullentsorgung und Einhaltung der Protokolle.',
              },
            ],
          },
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
        lastName: 'Nachname',
        email: 'E-Mail',
        message: 'Nachricht',
        document: 'Angehängtes Dokument',
        documentAction: 'PDF- oder DOC-Datei auswählen',
        documentHint: 'Erlaubte Formate: PDF, DOC oder DOCX. Maximal 5 MB.',
        send: 'Senden',
        success: 'Nachricht erfolgreich gesendet',
        error: 'Die Nachricht konnte nicht gesendet werden',
        validation: {
          nameInvalid: 'Geben Sie einen gültigen Namen ein (mindestens 2 Buchstaben, nur Buchstaben).',
          lastNameInvalid: 'Geben Sie einen gültigen Nachnamen ein (mindestens 2 Buchstaben, nur Buchstaben).',
          emailInvalid: 'Geben Sie eine gültige E-Mail-Adresse ein.',
          documentInvalid: 'Nur PDF-, DOC- oder DOCX-Dateien sind erlaubt.',
          documentSize: 'Die Datei darf 5 MB nicht überschreiten.',
        },
        mapTitle: 'Unternehmensstandort',
        hoursTitle: 'Geschäftszeiten',
        hoursOpen: 'Geöffnet',
        hoursClosed: 'Geschlossen',
        scheduleDays: 'Mo - Fr',
        departmentsTitle: 'Kontakt nach Abteilung',
        departmentsSubtitle: 'Wenden Sie sich direkt an die benotigte Abteilung.',
        personLabel: 'Ansprechpartner',
        emailLabel: 'E-Mail',
        departments: {
          humanResources: {
            name: 'Personalwesen',
            person: 'Maria Fernandez',
            email: 'rrhh@tierraazul1981.com',
          },
          logistics: {
            name: 'Logistik',
            person: 'Carlos Mendez',
            email: 'logistica@tierraazul1981.com',
          },
          environmental: {
            name: 'Umweltmanagement',
            person: 'Ana Solis',
            email: 'ambiental@tierraazul1981.com',
          },
          generalManagement: {
            name: 'Geschäftsführung',
            person: 'Roberto Paredes',
            email: 'waju@grupopenca.com',
          },
          adminAccounting: {
            name: 'Verwaltung - Buchhaltung',
            person: 'Laura Jimenez',
            email: 'administracion@tierraazul1981.com',
          },
        },
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
        location: 'Pilas de Canjel, Puntarenas, Costa Rica.',
        email: 'waju@grupopenca.com',
        phone: '+506 45002389',
        schedule: 'Ma - Vr 8:00 AM - 4:00 PM',
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
        video: {
          eyebrow: 'YouTube',
          title: 'Bedrijfsvideo',
          text: 'Ontdek Tierra Azul 1981 in video: onze faciliteiten, werkwijze en de toewijding achter onze landbouwproductie.',
          channel: 'Bezoek YouTube-kanaal',
        },
      },
      pages: {
        empresa: {
          title: 'Bedrijf',
          subtitle: 'Agrarische traditie, technische evolutie en exportbetrokkenheid.',
          originTitle: 'Hoe het bedrijf ontstond',
          origin:
            'Tierra Azul 1981, S.A. De naam komt overeen met de locatie van het bedrijf, gelegen in een van de blauwe zones ter wereld. Met 100% Costa Ricaans kapitaal produceert het fruit om het sociale en economische welzijn van het Nicoya-schiereiland te bevorderen, met groot succes. Ons bedrijf is toegewijd aan de productie van fruit van hoge kwaliteit, met sociale en milieuverantwoordelijkheid; ons team voldoet jaarlijks aan internationale accreditaties voor goede landbouw- en productiepraktijken.',
          missionTitle: 'Missie',
          mission:
            'Onze menselijke middelen en processen continu verbeteren om meloenen en watermeloenen van de hoogste kwaliteit te produceren, volgens de kwaliteitsnormen van onze klanten.',
          visionTitle: 'Visie',
          vision:
            'Een toonaangevend bedrijf zijn in de productie van meloen en watermeloen in Costa Rica, een efficient en innovatief bedrijf worden in zijn processen, met internationale erkenning voor de kwaliteit van ons product.',
          commitmentTitle: 'Bedrijfsengagement',
          commitment:
            'Verantwoorde productie, exportkwaliteit en duurzame ontwikkeling voor het Nicoya-schiereiland en onze internationale markten.',
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
          wasteCollection: {
            badge: 'Milieu',
            title: 'Gemeenschappelijke afvalinzameling',
            intro:
              'Ons team neemt actief deel aan opruim- en afvalinzamelingsdagen in landbouwgebieden en nabijgelegen gemeenschappen.',
            galleryAlt: 'Afvalinzamelingsactiviteit',
            teamTitle: 'Verantwoordelijken van het programma',
            teamSubtitle: 'Medewerkers die opruimacties en milieuzorg leiden.',
            team: [
              {
                name: 'Jose Ramirez',
                role: 'Milieu-coordinator',
                bio: 'Organiseert inzamelingsdagen en bewustwording op het veld en in gemeenschappen.',
              },
              {
                name: 'Sofia Vargas',
                role: 'Vrijwilligersleider',
                bio: 'Coördineert werkteams en opvolging in aangepakte gebieden.',
              },
              {
                name: 'Miguel Castro',
                role: 'Veldsupervisor',
                bio: 'Houdt toezicht op correcte afvalverwerking en naleving van protocollen.',
              },
            ],
          },
        },
        privacidad: {
          title: 'Privacy',
          subtitle: 'Gegevensbescherming en transparante communicatie.',
          body: 'Gegevens die via formulieren worden verzonden, worden uitsluitend gebruikt om commerciële of informatieve vragen te beantwoorden. Wij delen geen persoonlijke gegevens zonder toestemming.',
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
        subtitle: 'Laten we commerciële kansen bespreken',
        formTitle: 'Bericht verzenden',
        name: 'Naam',
        lastName: 'Achternaam',
        email: 'E-mail',
        message: 'Bericht',
        document: 'Bijgevoegd document',
        documentAction: 'Selecteer PDF- of DOC-bestand',
        documentHint: 'Toegestane formaten: PDF, DOC of DOCX. Maximaal 5 MB.',
        send: 'Verzenden',
        success: 'Bericht succesvol verzonden',
        error: 'Het bericht kon niet worden verzonden',
        validation: {
          nameInvalid: 'Voer een geldige voornaam in (minimaal 2 letters, alleen letters).',
          lastNameInvalid: 'Voer een geldige achternaam in (minimaal 2 letters, alleen letters).',
          emailInvalid: 'Voer een geldig e-mailadres in.',
          documentInvalid: 'Alleen PDF-, DOC- of DOCX-bestanden zijn toegestaan.',
          documentSize: 'Het bestand mag niet groter zijn dan 5 MB.',
        },
        mapTitle: 'Bedrijfslocatie',
        hoursTitle: 'Openingstijden',
        hoursOpen: 'Open',
        hoursClosed: 'Gesloten',
        scheduleDays: 'Ma - Vr',
        departmentsTitle: 'Contact per afdeling',
        departmentsSubtitle: 'Neem rechtstreeks contact op met de gewenste afdeling.',
        personLabel: 'Contactpersoon',
        emailLabel: 'E-mail',
        departments: {
          humanResources: {
            name: 'Human Resources',
            person: 'Maria Fernandez',
            email: 'rrhh@tierraazul1981.com',
          },
          logistics: {
            name: 'Logistiek',
            person: 'Carlos Mendez',
            email: 'logistica@tierraazul1981.com',
          },
          environmental: {
            name: 'Milieubeheer',
            person: 'Ana Solis',
            email: 'ambiental@tierraazul1981.com',
          },
          generalManagement: {
            name: 'Algemeen Management',
            person: 'Roberto Paredes',
            email: 'waju@grupopenca.com',
          },
          adminAccounting: {
            name: 'Administratie - Boekhouding',
            person: 'Laura Jimenez',
            email: 'administracion@tierraazul1981.com',
          },
        },
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
