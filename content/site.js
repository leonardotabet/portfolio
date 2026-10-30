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
        "Ich arbeite in der IT eines Schweizer Uhrenunternehmens im Konzernumfeld, mit Microsoft 365, Azure, hybridem Active Directory und Intune für iPhone und iPad. Dort unterstütze ich Mitarbeitende im 1st und 2nd Level und betreue Endgeräte über ihren ganzen Lebenszyklus. Die Administration dahinter baue ich zusätzlich in Praxis-Labs komplett selbst auf und dokumentiere sie hier."
      ],
      en: [
        "I work in IT at a Swiss watch company within an international corporate group, with Microsoft 365, Azure, hybrid Active Directory and Intune for iPhone and iPad. There I support staff at 1st and 2nd level and look after devices across their whole lifecycle. On top of that I build the administration behind it end to end in hands-on labs and document it here."
      ]
    },
    photoAlt: { de: "Porträt von Leonardo Tabet", en: "Portrait of Leonardo Tabet" },
    facts: [
      { label: { de: "Standort", en: "Location" }, value: { de: "Aargau, Schweiz", en: "Aargau, Switzerland" } },
      { label: { de: "Fliessende Sprachen", en: "Fluent languages" }, value: { de: "Deutsch und Englisch", en: "German and English" } },
      { label: { de: "Praxis", en: "Experience" }, value: { de: "Konzern-IT mit Microsoft 365, Azure und Intune", en: "Corporate IT with Microsoft 365, Azure and Intune" } },
      { label: { de: "Weiterbildung", en: "Education" }, value: { de: "Dipl. ICT System Engineer, Abschluss Januar 2027", en: "Diploma ICT System Engineer, due January 2027" } }
    ]
  },

  about: {
    de: [
      "Heute arbeite ich in der IT eines Konzerns, mit Microsoft 365, Azure, hybridem Active Directory und Intune im täglichen Einsatz. Davor war ich in der Industrie und als Selbständiger tätig. Die Erfahrung aus 24/7-Betrieb und Kundenkontakt nehme ich bewusst mit.",
      "Der Pfad zeigt, was hinter jeder Station steckt: unten der Anfang, oben das Aktuelle. Die Details zeigen, was ich dort gemacht habe und welche Projekte und Zertifikate es belegen."
    ],
    en: [
      "Today I work in IT within a corporate group, with Microsoft 365, Azure, hybrid Active Directory and Intune in daily use. Before that I worked in industry and ran my own business. I deliberately carry the experience from 24/7 operations and client work with me.",
      "The path shows what lies behind each step: the start at the bottom, the present at the top. The details show what I did there and which projects and certifications prove it."
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
        { label: { de: "Routing und Switching", en: "Routing and switching" }, match: ["router", "switch", "routing"] },
        { label: "VPN", match: ["vpn"] },
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
        { label: "Hyper-V", match: ["hyper-v"] },
        { label: "VMware", match: ["vmware"] }
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
  // detail: opens with "Details ansehen"; projects = project ids, certs = badges
  path: [
    {
      when: { de: "2018 bis 2022", en: "2018 to 2022" },
      tag: { de: "Industrie", en: "Industry" },
      title: { de: "Kunststofftechnologe EFZ", en: "Plastics technologist, Swiss VET diploma" },
      text: { de: "Grossanlagen im 24/7-Betrieb. Störungen eingrenzen und beheben, damit die Produktion weiterläuft.", en: "Large production lines running 24/7. Isolating and fixing faults so production keeps running." },
      detail: {
        did: {
          de: ["Produktionsanlagen eingerichtet, betreut und in Betrieb genommen", "Störungen an Maschinen und Peripherie eingegrenzt und behoben", "Berufslehre mit dem eidgenössischen Fähigkeitszeugnis abgeschlossen"],
          en: ["Set up, ran and commissioned production lines", "Isolated and fixed faults on machines and peripherals", "Completed the apprenticeship with the Swiss federal VET diploma"]
        },
        gain: {
          de: ["Systematische Fehlersuche: erst eingrenzen, dann gezielt beheben", "Ruhe in einem Betrieb, der nie stillstehen darf", "Saubere Übergaben, damit die nächste Schicht sofort weiterarbeiten kann"],
          en: ["Systematic troubleshooting: isolate first, then fix precisely", "Staying calm in an operation that must never stop", "Clean handovers so the next shift can continue right away"]
        },
        link: { de: "Genau so gehe ich heute an IT-Störungen heran.", en: "This is exactly how I approach IT incidents today." }
      }
    },
    {
      when: { de: "2023 bis 2025", en: "2023 to 2025" },
      tag: { de: "Selbständig", en: "Self-employed" },
      title: { de: "Eigenes Unternehmen, E-Mail-Automatisierung", en: "Own business, email automation" },
      text: { de: "B2B-Kampagnen mit direktem Kundenkontakt. Domains und DNS-Einträge selbst eingerichtet.", en: "B2B campaigns working directly with clients. Set up domains and DNS records myself." },
      detail: {
        did: {
          de: ["Kampagnen für Unternehmenskunden mit Instantly.ai automatisiert", "Domains und Mailversand eingerichtet: SMTP und DNS mit CNAME, SPF, DKIM und DMARC", "Kunden von der ersten Anfrage bis zur Umsetzung direkt betreut"],
          en: ["Automated campaigns for business clients with Instantly.ai", "Set up domains and mail delivery: SMTP and DNS with CNAME, SPF, DKIM and DMARC", "Looked after clients directly from the first request to delivery"]
        },
        gain: {
          de: ["DNS und E-Mail-Authentifizierung aus der Praxis", "Technik so erklären, dass Kunden sie verstehen", "Selbständig planen und Verantwortung für das Ergebnis tragen"],
          en: ["DNS and email authentication from hands-on practice", "Explaining technology so clients understand it", "Planning on my own and owning the result"]
        },
        link: { de: "Diese Website läuft auf meiner eigenen Domain, mit SPF, DKIM, DMARC, DNSSEC und HTTPS nach Best Practice.", en: "This website runs on my own domain, with SPF, DKIM, DMARC, DNSSEC and HTTPS set up following best practice." },
        certs: ["N+"]
      }
    },
    {
      when: { de: "2025", en: "2025" },
      tag: { de: "IT-Ausbildung", en: "IT training" },
      title: { de: "Start in der IT", en: "Starting in IT" },
      text: { de: "IT-Ausbildung neben der Arbeit als Mechaniker. Erste Labs zu Windows, Netzwerk und Cloud.", en: "IT training alongside work as a mechanic. First labs on Windows, networking and cloud." },
      detail: {
        did: {
          de: ["Weiterbildung zum Dipl. ICT System Engineer neben der Arbeit als Mechaniker im 24/7 Schichtbetrieb gestartet", "Anlagen eingerichtet, Störungen behoben und Schichtübergaben verantwortet", "Erste eigene Labs zu Windows Server, Netzwerk und Microsoft Azure aufgebaut"],
          en: ["Started the Diploma ICT System Engineer alongside working as a mechanic in 24/7 shifts", "Set up machines, fixed faults and handled shift handovers", "Built my first own labs on Windows Server, networking and Microsoft Azure"]
        },
        gain: {
          de: ["Neues schnell lernen und direkt im Lab anwenden", "Disziplin, Arbeit und Weiterbildung parallel zu stemmen"],
          en: ["Learning new topics fast and applying them right away in a lab", "The discipline to handle work and education side by side"]
        },
        projects: ["azure-hybrid-lab"],
        certs: ["AZ"]
      }
    },
    {
      when: { de: "2026", en: "2026" },
      tag: { de: "Konzern-IT", en: "Corporate IT" },
      title: { de: "IT im Konzernumfeld", en: "IT within a corporate group" },
      text: { de: "Schweizer Uhrenunternehmen in einem internationalen Konzern. Microsoft 365, Azure, hybrides Active Directory, Intune für iPhone und iPad, Netzwerk und Telefonie.", en: "Swiss watch company within an international corporate group. Microsoft 365, Azure, hybrid Active Directory, Intune for iPhone and iPad, networking and telephony." },
      detail: {
        did: {
          de: [
            "Gearbeitet in einer Konzernumgebung mit Microsoft 365, Azure, hybridem Active Directory und Intune für iPhone und iPad",
            "1st und 2nd Level Support für Windows Clients, Microsoft 365, mobile Geräte, Drucker und Telefonie, vor Ort und remote",
            "Die gesamte IT während einer Abwesenheit selbständig betreut, vom Anwender-Support bis zur Infrastruktur",
            "Netzwerk mit VLAN, DHCP, Firewall und WLAN betreut, Telefonie-Ausfall über Ports und Subnetze gelöst",
            "Zugriffe über Entra ID Gruppen und Berechtigungen im Dynamics 365 ERP verwaltet",
            "ERP-System auf Hyper-V ohne Datenverlust wiederhergestellt",
            "Tickets und Changes über die Prozesse des Konzerns eskaliert, nach ITIL",
            "Foto-Dokumentation der Uhren mit Power Apps, Power Automate und SharePoint neu aufgebaut, inklusive Schulung"
          ],
          en: [
            "Worked in a corporate environment with Microsoft 365, Azure, hybrid Active Directory and Intune for iPhone and iPad",
            "1st and 2nd level support for Windows clients, Microsoft 365, mobile devices, printers and telephony, on site and remote",
            "Ran the entire IT on my own during an absence, from user support to infrastructure",
            "Looked after the network with VLAN, DHCP, firewall and Wi-Fi, solved a phone outage through ports and subnets",
            "Managed access through Entra ID groups and permissions in the Dynamics 365 ERP",
            "Restored the ERP system on Hyper-V without data loss",
            "Escalated tickets and changes through the group processes, following ITIL",
            "Rebuilt the watch photo documentation with Power Apps, Power Automate and SharePoint, including training"
          ]
        },
        gain: {
          de: ["IT-Betrieb im Konzernumfeld mit klaren Prozessen", "Was ich im Betrieb erlebe, baue ich als Administrator im Praxis-Lab komplett selbst auf", "Verantwortung übernehmen, auch wenn niemand sonst da ist", "Dokumentation in Confluence, die das Team wirklich nutzt"],
          en: ["IT operations inside a corporate group with clear processes", "What I see in operations, I build end to end as an administrator in hands-on labs", "Taking responsibility, even when nobody else is around", "Documentation in Confluence that the team actually uses"]
        },
        note: { de: "Arbeitszeugnis: Erwartungen durchgehend übertroffen", en: "Reference letter: expectations exceeded throughout" },
        projects: ["uhren-foto-app", "wlan-netzwerk", "azure-hybrid-lab", "m365-support-lab"],
        certs: ["A+", "N+"]
      }
    },
    {
      when: { de: "2026 bis 2027", en: "2026 to 2027" },
      tag: { de: "Weiterbildung", en: "Education" },
      title: { de: "Dipl. ICT System Engineer", en: "Diploma ICT System Engineer" },
      text: { de: "CompTIA A+, Network+ und Microsoft AZ-900 bestanden, Security+ in Vorbereitung. Diplom im Januar 2027.", en: "Passed CompTIA A+, Network+ and Microsoft AZ-900, Security+ in preparation. Diploma in January 2027." },
      detail: {
        did: {
          de: ["Systemtechnik mit Windows Server 2022 und Windows Clients auf VMware, Active Directory, Gruppenrichtlinien und Azure", "IT-Betrieb mit Microsoft Intune und Entra ID", "Netzwerk-Technologien von DHCP, DNS und VPN bis zu Router, Switches und Sicherheit", "Projektmanagement und Kommunikation im Support", "Internationale Zertifikate im Lehrgang abgelegt, Security+ zusätzlich aus eigener Initiative"],
          en: ["Systems engineering with Windows Server 2022 and Windows clients on VMware, Active Directory, Group Policy and Azure", "IT operations with Microsoft Intune and Entra ID", "Network technologies from DHCP, DNS and VPN to routers, switches and security", "Project management and communication in support", "Earned international certifications within the program, Security+ on top on my own initiative"]
        },
        gain: {
          de: ["Infrastruktur von Grund auf planen, aufbauen und dokumentieren", "Theorie aus der Schule direkt in der Praxis umsetzen, im Betrieb und im Lab"],
          en: ["Planning, building and documenting infrastructure from scratch", "Turning theory from school straight into practice, at work and in the lab"]
        },
        note: { de: "Bestätigung der Schule: bisher sehr gute Leistungen", en: "Confirmed by the school: very good results so far" },
        projects: ["windows-server-ad-lab", "m365-support-lab"],
        certs: ["DIP", "S+"]
      }
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
    navSkills: { de: "Kenntnisse", en: "Skills" },
    navAbout: { de: "Über mich", en: "About me" },
    skillsTitle: { de: "Kenntnisse", en: "Skills" },
    skillsIntro: { de: "Ein Klick auf eine Kenntnis zeigt die Projekte und die Stationen im Werdegang, in denen ich sie eingesetzt habe.", en: "Click a skill to see the projects and the career steps where I used it." },
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
    details: { de: "Details ansehen", en: "View details" },
    close: { de: "Schliessen", en: "Close" },
    labelShots: { de: "Screenshots", en: "Screenshots" },
    pathDid: { de: "Was ich gemacht habe", en: "What I did" },
    pathGain: { de: "Was ich daraus mitnehme", en: "What I take from it" },
    pathProof: { de: "Belege", en: "Proof" },
    pathProjects: { de: "Projekte", en: "Projects" },
    pathCerts: { de: "Zertifikate", en: "Certifications" },
    pathInPath: { de: "Im Werdegang", en: "In my career path" },
    pathSkillHint: { de: "Im Werdegang zeigen", en: "Show in my career path" },
    pathHits: { de: "Stationen mit", en: "Steps involving" },
    pathTop: { de: "heute", en: "today" },
    pathBottom: { de: "Start", en: "start" },
    pathLabel: { de: "Werdegang als Pfad, neueste Station oben", en: "Career path, most recent step at the top" },
    editBanner: { de: "Bearbeitungsmodus: Gelbe Felder sind Platzhalter und für Besucher unsichtbar.", en: "Edit mode: yellow fields are placeholders and hidden from visitors." },
    todoScreenshots: { de: "TODO: Screenshots fehlen (Bilder nach images/ legen und in der Projektdatei eintragen)", en: "TODO: screenshots missing (put images in images/ and list them in the project file)" },
    todoVerify: { de: "TODO: Link zur Bestätigung fehlt", en: "TODO: verification link missing" }
  }
};
