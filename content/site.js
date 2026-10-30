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
      "Der Pfad zeigt meinen Werdegang auf einen Blick: unten der Anfang, oben das Aktuelle. Alle Stationen mit Details stehen im Lebenslauf."
    ],
    en: [
      "I have worked in industry, in my own business and in IT operations. Along the way I realized that technical work suits me best. I deliberately carry the experience from industry and client work with me.",
      "The path shows my background at a glance: the start at the bottom, the present at the top. Every step in detail is in my CV."
    ]
  },

  skills: [
    {
      title: { de: "Microsoft 365, Identität und Geräte", en: "Microsoft 365, identity and devices" },
      items: [
        { label: "Entra ID", match: ["entra"] },
        { label: "Microsoft 365", match: ["microsoft 365", "sharepoint", "teams"] },
        { label: "Exchange Online", match: ["exchange online"] },
        { label: "Conditional Access", match: ["conditional access"] },
        { label: "Intune", match: ["intune"] },
        { label: "Windows 11", match: ["windows 11"] }
      ]
    },
    {
      title: { de: "Server und Netzwerk", en: "Servers and networking" },
      items: [
        { label: "Windows Server", match: ["windows server"] },
        { label: "Active Directory", match: ["ad ds", "active directory"] },
        { label: "DNS", match: ["dns"] },
        { label: "DHCP", match: ["dhcp"] },
        { label: "Group Policy", match: ["group policy", "gpo"] },
        { label: { de: "WLAN", en: "Wi-Fi" }, match: ["wlan", "wi-fi"] },
        { label: "VLAN", match: ["vlan"] },
        { label: "Firewall", match: ["firewall"] }
      ]
    },
    {
      title: { de: "Cloud und Virtualisierung", en: "Cloud and virtualization" },
      items: [
        { label: "Microsoft Azure", match: ["azure"] },
        { label: "Entra Connect", match: ["entra connect"] },
        { label: "Azure Files", match: ["azure files"] },
        { label: "Azure Virtual Desktop", match: ["azure virtual desktop"] },
        { label: "Hyper-V", match: ["hyper-v"] }
      ]
    },
    {
      title: { de: "Automatisierung und Service", en: "Automation and service" },
      items: [
        { label: "PowerShell", match: ["powershell"] },
        { label: "Power Apps", match: ["power apps", "power app"] },
        { label: "Power Automate", match: ["power automate"] },
        { label: "Jira Service Management", match: ["jira"] },
        { label: "Confluence", match: ["confluence"] },
        { label: { de: "ITIL-Prozesse", en: "ITIL processes" }, cert: "A+" }
      ]
    }
  ],

  // oldest first, rendered newest on top
  path: [
    {
      when: { de: "2018 bis 2022", en: "2018 to 2022" },
      tag: { de: "Industrie", en: "Industry" },
      title: { de: "Kunststofftechnologe EFZ", en: "Plastics technologist, Swiss VET diploma" },
      text: { de: "Grossanlagen im 24/7-Betrieb. Störungen eingrenzen und beheben, damit die Produktion weiterläuft.", en: "Large production lines running 24/7. Isolating and fixing faults so production keeps running." }
    },
    {
      when: { de: "2023 bis 2025", en: "2023 to 2025" },
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

  // CV dialog in "Über mich", newest first
  cv: {
    profile: {
      de: "IT-Supporter im Konzernumfeld mit Praxis im 1st und 2nd Level Support: Windows Clients, Microsoft 365 mit Teams und SharePoint, Netzwerk und Telefonie. Kenntnisse in Exchange Online, Entra ID und Intune. Strukturierte Eskalation und saubere Dokumentation in Confluence. Abschluss als Dipl. ICT System Engineer SIW im Januar 2027.",
      en: "IT supporter in a corporate group with hands-on 1st and 2nd level support: Windows clients, Microsoft 365 with Teams and SharePoint, networking and telephony. Knowledge of Exchange Online, Entra ID and Intune. Structured escalation and clear documentation in Confluence. Graduating as Diploma ICT System Engineer SIW in January 2027."
    },
    experience: [
      {
        when: { de: "Aug. 2026 bis heute", en: "Aug 2026 to present" },
        role: { de: "IT-Support Specialist (50%)", en: "IT support specialist (50%)" },
        org: { de: "Schweizer Uhrenunternehmen im Konzernumfeld", en: "Swiss watch company within a corporate group" },
        points: {
          de: [
            "1st und 2nd Level Support für Windows Clients und Microsoft 365, vor Ort und remote",
            "Netzwerk mit VLAN, DHCP, Firewall und WLAN (Omada)",
            "Zugriffe über Entra ID Gruppen, Rollen und Berechtigungen im Dynamics 365 ERP",
            "Asset und Lifecycle Management der Geräte, Eskalation an das NOC des Konzerns",
            "Power Platform Projekt mit Power Apps und Power Automate, inklusive Schulung und Dokumentation in Confluence"
          ],
          en: [
            "1st and 2nd level support for Windows clients and Microsoft 365, on site and remote",
            "Networking with VLAN, DHCP, firewall and Wi-Fi (Omada)",
            "Access through Entra ID groups, roles and permissions in the Dynamics 365 ERP",
            "Asset and lifecycle management of devices, escalation to the group NOC",
            "Power Platform project with Power Apps and Power Automate, including user training and documentation in Confluence"
          ]
        }
      },
      {
        when: { de: "Feb. 2026 bis Juli 2026", en: "Feb 2026 to Jul 2026" },
        role: { de: "Praktikum IT Management", en: "IT management internship" },
        org: { de: "Schweizer Uhrenunternehmen im Konzernumfeld", en: "Swiss watch company within a corporate group" },
        points: {
          de: [
            "Die gesamte IT während einer Abwesenheit selbständig betreut, vom Anwender-Support bis zur Infrastruktur",
            "1st und 2nd Level Support für Drucker, Netzwerk, WLAN und Innovaphone Telefonie",
            "Telefonie-Ausfall über Ports und Subnetze eingegrenzt und behoben",
            "ERP-System (AX auf Hyper-V) ohne Datenverlust wiederhergestellt",
            "Tickets und Changes über die Prozesse des Konzerns eskaliert, nach ITIL",
            "Netzwerkinfrastruktur mit WLAN und Firewall unterhalten, Dokumentation in Confluence"
          ],
          en: [
            "Ran the entire IT on my own during an absence, from user support to infrastructure",
            "1st and 2nd level support for printers, network, Wi-Fi and Innovaphone telephony",
            "Isolated and fixed a phone system outage through ports and subnets",
            "Restored the ERP system (AX on Hyper-V) without data loss",
            "Escalated tickets and changes through the group processes, following ITIL",
            "Maintained the network infrastructure with Wi-Fi and firewall, documentation in Confluence"
          ]
        },
        note: { de: "Arbeitszeugnis: Erwartungen durchgehend übertroffen", en: "Reference letter: expectations exceeded throughout" }
      },
      {
        when: { de: "Apr. 2025 bis Nov. 2025", en: "Apr 2025 to Nov 2025" },
        role: { de: "Mechaniker im 24/7 Schichtbetrieb", en: "Mechanic in 24/7 shift operation" },
        org: { de: "Industrieunternehmen in der Zentralschweiz", en: "Manufacturing company in central Switzerland" },
        points: {
          de: [
            "Produktionsanlagen eingerichtet, umgestellt und bis zur Erststückprüfung in Betrieb genommen",
            "Störungen behoben, defekte Teile ersetzt und repariert",
            "Schichtübergaben verantwortet, ruhig und sicher auch unter Druck",
            "Start der IT-Weiterbildung parallel zur Arbeit"
          ],
          en: [
            "Set up and changed over production lines and brought them into operation up to first article inspection",
            "Fixed faults, replaced and repaired defective parts",
            "Handled shift handovers, calm and reliable under pressure",
            "Started my IT education alongside work"
          ]
        }
      },
      {
        when: { de: "Aug. 2023 bis März 2025", en: "Aug 2023 to Mar 2025" },
        role: { de: "Selbständig: B2B E-Mail-Automatisierung", en: "Self-employed: B2B email automation" },
        org: { de: "Eigenes Unternehmen", en: "Own business" },
        points: {
          de: [
            "Kampagnen für Unternehmenskunden mit Instantly.ai automatisiert",
            "Domains und Mailversand eingerichtet: SMTP und DNS mit CNAME, SPF, DKIM und DMARC",
            "Direkter Kundenkontakt von der Anfrage bis zur Umsetzung"
          ],
          en: [
            "Automated campaigns for business clients with Instantly.ai",
            "Set up domains and mail delivery: SMTP and DNS with CNAME, SPF, DKIM and DMARC",
            "Direct client contact from the first request to delivery"
          ]
        }
      }
    ],
    education: [
      {
        when: { de: "Mai 2025 bis Jan. 2027", en: "May 2025 to Jan 2027" },
        role: { de: "Dipl. ICT System Engineer SIW", en: "Diploma ICT System Engineer SIW" },
        org: { de: "SIW Höhere Fachschule, berufsbegleitend", en: "SIW college of higher education, part-time" },
        points: {
          de: ["Systemtechnik mit Windows Server, Active Directory und Azure", "Netzwerktechnik und IT-Sicherheit", "Projektmanagement"],
          en: ["Systems engineering with Windows Server, Active Directory and Azure", "Networking and IT security", "Project management"]
        },
        note: { de: "Bestätigung der Schule: bisher sehr gute Leistungen", en: "Confirmed by the school: very good results so far" }
      },
      {
        when: { de: "Aug. 2018 bis Juli 2022", en: "Aug 2018 to Jul 2022" },
        role: { de: "Kunststofftechnologe EFZ", en: "Plastics technologist, Swiss VET diploma" },
        org: { de: "Berufslehre in der Industrie", en: "Apprenticeship in industry" },
        points: {
          de: ["Grossanlagen im 24/7 Betrieb eingerichtet und betreut", "Störungen eingegrenzt und behoben, damit die Produktion weiterläuft"],
          en: ["Set up and ran large production lines operating 24/7", "Isolated and fixed faults so production keeps running"]
        }
      }
    ],
    languages: [
      { de: "Deutsch: Muttersprache", en: "German: native" },
      { de: "Englisch: fliessend", en: "English: fluent" }
    ],
    extras: [
      { de: "Führerausweis Kat. B", en: "Driving licence, category B" },
      { de: "Referenzen auf Anfrage", en: "References on request" }
    ]
  },

  contactIntro: { de: "Ich antworte auf Deutsch oder Englisch.", en: "I reply in German or English." },

  ui: {
    skip: { de: "Zum Inhalt springen", en: "Skip to content" },
    navProjects: { de: "Projekte", en: "Projects" },
    navCerts: { de: "Zertifikate", en: "Certifications" },
    navSkills: { de: "Kenntnisse", en: "Skills" },
    navAbout: { de: "Über mich", en: "About me" },
    skillsTitle: { de: "Kenntnisse", en: "Skills" },
    skillsIntro: { de: "Ein Klick auf eine Kenntnis zeigt die Projekte und die Stationen im Lebenslauf, in denen ich sie eingesetzt habe.", en: "Click a skill to see the projects and the roles in my CV where I used it." },
    skillFilter: { de: "Projekte mit", en: "Projects with" },
    skillReset: { de: "Alle anzeigen", en: "Show all" },
    skillHint: { de: "Passende Projekte zeigen", en: "Show matching projects" },
    skillCertHint: { de: "Belegt durch CompTIA A+: Betriebsabläufe nach ITIL", en: "Backed by CompTIA A+: ITIL-aligned operational procedures" },
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
    cvOpen: { de: "Lebenslauf ansehen", en: "View CV" },
    cvTitle: { de: "Lebenslauf", en: "Curriculum vitae" },
    cvExperience: { de: "Berufserfahrung", en: "Work experience" },
    cvEducation: { de: "Aus- und Weiterbildung", en: "Education" },
    cvCerts: { de: "Zertifikate", en: "Certifications" },
    cvSkills: { de: "Kenntnisse", en: "Skills" },
    cvLanguages: { de: "Sprachen", en: "Languages" },
    cvMore: { de: "Weiteres", en: "Other" },
    cvHits: { de: "Markiert: Stationen mit", en: "Highlighted: roles involving" },
    cvInCv: { de: "Im Lebenslauf", en: "In my CV" },
    cvSkillHint: { de: "Im Lebenslauf zeigen", en: "Show in my CV" },
    cvCertHint: { de: "Zum Zertifikat", en: "Go to certification" },
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
