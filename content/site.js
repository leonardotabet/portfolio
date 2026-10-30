window.SITE = {
  name: "Leonardo Tabet",
  initials: "LT",

  photo: "images/foto.jpg",

  // split to keep simple scrapers away
  email: { user: "kontakt", domain: "leonardotabet.ch" },

  linkedin: "TODO: https://www.linkedin.com/in/DEIN-PROFIL/",
  cv: "TODO: cv/Leonardo_Tabet_Lebenslauf.pdf",
  location: { de: "Aargau, Schweiz", en: "Aargau, Switzerland" },

  pageTitle: {
    de: "Leonardo Tabet, IT Support und Systemtechnik",
    en: "Leonardo Tabet, IT support and systems engineering"
  },
  pageDescription: {
    de: "Leonardo Tabet aus dem Aargau. IT Support und Systemtechnik: Werdegang, Projekte und Zertifikate.",
    en: "Leonardo Tabet from Aargau, Switzerland. IT support and systems engineering: background, projects and certifications."
  },

  hero: {
    status: { de: "Offen für eine feste Stelle", en: "Open to a permanent role" },
    role: { de: "IT Support und Systemtechnik", en: "IT support and systems engineering" },
    intro: {
      de: [
        "Ich unterstütze Mitarbeitende bei Windows 11 und Microsoft 365 und betreue Endgeräte über ihren ganzen Lebenszyklus, von der Einrichtung bis zur Rückgabe. Intune und Conditional Access baue ich in einem eigenen Lab auf und dokumentiere es hier."
      ],
      en: [
        "I support staff with Windows 11 and Microsoft 365 and look after devices across their whole lifecycle, from setup to return. I am building Intune and Conditional Access in my own lab and document it here."
      ]
    },
    photoAlt: { de: "Porträt von Leonardo Tabet", en: "Portrait of Leonardo Tabet" },
    facts: [
      { label: { de: "Standort", en: "Location" }, value: { de: "Aargau, Schweiz", en: "Aargau, Switzerland" } },
      { label: { de: "Fliessende Sprachen", en: "Fluent languages" }, value: { de: "Deutsch und Englisch", en: "German and English" } },
      { label: { de: "Schwerpunkt", en: "Focus" }, value: { de: "Windows 11, Microsoft 365, Entra ID", en: "Windows 11, Microsoft 365, Entra ID" } },
      { label: { de: "Weiterbildung", en: "Education" }, value: { de: "Dipl. ICT System Engineer, Abschluss Januar 2027", en: "Diploma ICT System Engineer, due January 2027" } }
    ]
  },

  about: {
    de: [
      "Ich habe in der Industrie, als Selbständiger und im IT-Betrieb gearbeitet. Dabei wurde mir klar, dass mir die technische Arbeit am meisten liegt. Die Erfahrung aus Industrie und Kundenkontakt nehme ich bewusst mit.",
      "Der Pfad zeigt meinen Werdegang wie ein Lebenslauf: unten der Anfang, oben das Aktuelle."
    ],
    en: [
      "I have worked in industry, in my own business and in IT operations. Along the way I realized that technical work suits me best. I deliberately carry the experience from industry and client work with me.",
      "The path shows my background like a CV: the start at the bottom, the present at the top."
    ]
  },

  // oldest first, rendered newest on top
  path: [
    {
      when: { de: "TODO: Jahr bis Jahr", en: "TODO: year to year" },
      tag: { de: "Industrie", en: "Industry" },
      title: { de: "Kunststofftechnologe EFZ", en: "Plastics technologist, Swiss VET diploma" },
      text: { de: "Grossanlagen im 24/7-Betrieb. Störungen eingrenzen und beheben, damit die Produktion weiterläuft.", en: "Large production lines running 24/7. Isolating and fixing faults so production keeps running." }
    },
    {
      when: { de: "TODO: Jahr bis Jahr", en: "TODO: year to year" },
      tag: { de: "Selbständig", en: "Self-employed" },
      title: { de: "Eigenes Unternehmen, E-Mail-Automatisierung", en: "Own business, email automation" },
      text: { de: "Zwei Jahre B2B-Kampagnen mit direktem Kundenkontakt. Domains und DNS-Einträge selbst eingerichtet.", en: "Two years of B2B campaigns working directly with clients. Set up domains and DNS records myself." }
    },
    {
      when: { de: "2025", en: "2025" },
      tag: { de: "IT-Ausbildung", en: "IT training" },
      title: { de: "Start in der IT", en: "Starting in IT" },
      text: { de: "IT-Ausbildung neben der Arbeit als Mechaniker. Erste Labs zu Windows, Netzwerk und Cloud.", en: "IT training alongside work as a mechanic. First labs on Windows, networking and cloud." }
    },
    {
      when: { de: "2026", en: "2026" },
      tag: { de: "IT-Betrieb", en: "IT operations" },
      title: { de: "IT-Team eines Schweizer Uhrenunternehmens", en: "IT team of a Swiss watch company" },
      text: { de: "Endgeräte, Microsoft 365, Telefonie, WLAN und Power Apps. Alles in Confluence dokumentiert.", en: "Devices, Microsoft 365, phone system, Wi-Fi and Power Apps. Everything documented in Confluence." }
    },
    {
      when: { de: "2026 bis 2027", en: "2026 to 2027" },
      tag: { de: "Weiterbildung", en: "Education" },
      title: { de: "Dipl. ICT System Engineer", en: "Diploma ICT System Engineer" },
      text: { de: "CompTIA A+, Network+ und Microsoft AZ-900 bestanden, Security+ in Vorbereitung. Diplom im Januar 2027.", en: "Passed CompTIA A+, Network+ and Microsoft AZ-900, Security+ in preparation. Diploma in January 2027." }
    },
    {
      open: true,
      when: { de: "Nächster Schritt", en: "Next step" },
      tag: { de: "Offen", en: "Open" },
      title: { de: "IT-Betrieb und Systemtechnik", en: "IT operations and systems engineering" },
      text: { de: "Eine feste Stelle, in der ich Verantwortung übernehme und fachlich weiter wachse.", en: "A permanent role where I take on responsibility and keep growing." }
    }
  ],

  contactIntro: { de: "Ich antworte auf Deutsch oder Englisch.", en: "I reply in German or English." },

  ui: {
    skip: { de: "Zum Inhalt springen", en: "Skip to content" },
    navProjects: { de: "Projekte", en: "Projects" },
    navCerts: { de: "Zertifikate", en: "Certifications" },
    navAbout: { de: "Über mich", en: "About me" },
    navContact: { de: "Kontakt", en: "Contact" },
    ctaContact: { de: "Kontakt aufnehmen", en: "Get in touch" },
    ctaProjects: { de: "Projekte ansehen", en: "View projects" },
    projectsTitle: { de: "Projekte", en: "Projects" },
    projectsIntro: { de: "Die neuesten Projekte zuerst. Ein Klick öffnet Details und Screenshots.", en: "Latest projects first. One click opens details and screenshots." },
    certsTitle: { de: "Zertifikate", en: "Certifications" },
    certsIntro: { de: "Die neuesten Zertifikate zuerst. In den Details steht, was sie bestätigen, wie ich mich vorbereitet habe und was sie mir im Job bringen.", en: "Latest certifications first. The details show what they confirm, how I prepared and what they bring to my work." },
    aboutTitle: { de: "Über mich", en: "About me" },
    contactTitle: { de: "Kontakt", en: "Contact" },
    footer: { de: "Leonardo Tabet, 2026. Keine Cookies, kein Tracking.", en: "Leonardo Tabet, 2026. No cookies, no tracking." },
    labelStatus: { de: "Status", en: "Status" },
    labelContext: { de: "Rahmen", en: "Context" },
    labelPeriod: { de: "Zeitraum", en: "Period" },
    labelTools: { de: "Werkzeuge", en: "Tools" },
    labelDate: { de: "Datum", en: "Date" },
    labelIssuer: { de: "Aussteller", en: "Issuer" },
    labelSkills: { de: "Geprüfte Themen", en: "Exam topics" },
    labelConfirms: { de: "Was das Zertifikat bestätigt", en: "What it confirms" },
    labelDid: { de: "Was ich dafür getan habe", en: "What I did for it" },
    labelAtWork: { de: "Was es mir im Job bringt", en: "What it brings to my work" },
    statusProgress: { de: "In Arbeit", en: "In progress" },
    statusDone: { de: "Abgeschlossen", en: "Completed" },
    statusEnded: { de: "Abgeschlossen", en: "Completed" },
    certPassed: { de: "Bestanden", en: "Passed" },
    certProgress: { de: "In Vorbereitung", en: "In preparation" },
    certExpected: { de: "Abschluss erwartet", en: "Expected" },
    verifyLink: { de: "Bestätigung beim Aussteller ansehen", en: "View verification by the issuer" },
    cvLink: { de: "Lebenslauf (PDF)", en: "CV (PDF)" },
    details: { de: "Details ansehen", en: "View details" },
    close: { de: "Schliessen", en: "Close" },
    labelShots: { de: "Screenshots", en: "Screenshots" },
    pathTop: { de: "heute", en: "today" },
    pathBottom: { de: "Start", en: "start" },
    pathLabel: { de: "Werdegang als Pfad, neueste Station oben", en: "Career path, most recent step at the top" },
    editBanner: { de: "Bearbeitungsmodus: Gelbe Felder sind Platzhalter und für Besucher unsichtbar.", en: "Edit mode: yellow fields are placeholders and hidden from visitors." },
    todoScreenshots: { de: "TODO: Screenshots fehlen (Bilder nach images/ legen und in der Projektdatei eintragen)", en: "TODO: screenshots missing (put images in images/ and list them in the project file)" },
    todoVerify: { de: "TODO: Link zur Bestätigung fehlt", en: "TODO: verification link missing" }
  }
};
