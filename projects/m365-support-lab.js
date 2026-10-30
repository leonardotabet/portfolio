window.PORTFOLIO_PROJECTS.push({
  id: "m365-support-lab",
  order: 1,
  status: "progress",

  title:    { de: "Microsoft 365 Support Lab", en: "Microsoft 365 support lab" },
  subtitle: { de: "Ein Firmen-Tenant mit den Abläufen eines Service Desks, vom Onboarding bis zum Ticket.", en: "A company tenant with real service desk workflows, from onboarding to tickets." },
  context:  { de: "Praxis-Lab zur Konzernumgebung", en: "Hands-on lab mirroring the corporate environment" },
  period:   { de: "TODO: Zeitraum", en: "TODO: Period" },

  text: {
    de: ["Microsoft 365 und Intune sind in meinem Konzern täglich im Einsatz. In diesem Lab baue ich die Administration dahinter selbst auf: ein Microsoft 365 Tenant von Grund auf, mit den typischen Abläufen eines Service Desks für neue Mitarbeitende, Geräte, Zugriffsregeln, Austritte und Tickets."],
    en: ["Microsoft 365 and Intune are in daily use in my corporate group. In this lab I build the administration behind them myself: a Microsoft 365 tenant from scratch, with the typical service desk workflows for new staff, devices, access rules, leavers and tickets."]
  },
  points: {
    de: [
      "Fünf Testbenutzer in dynamischen Gruppen, Lizenzen werden über Gruppen zugewiesen",
      "Eine virtuelle Windows 11 Maschine (Hyper-V), die Entra ID beitritt und sich in Intune registriert",
      "Compliance-Richtlinie, Konfigurationsprofil und App-Zuweisung in Intune",
      "GPO-Migration nach Intune: Gruppenrichtlinien mit Group Policy Analytics auswerten und im Settings Catalog als Richtlinien umsetzen",
      "MFA, Self-Service-Kennwortzurücksetzung und eine Conditional-Access-Richtlinie im Modus „Nur Bericht“",
      "Offboarding in der richtigen Reihenfolge: Anmeldung sperren, Postfach sichern, Gerät zurücksetzen, Lizenz entfernen",
      "Ein Jira Service Management Projekt mit Anfragetypen, Warteschlangen und Eskalationsvorlage"
    ],
    en: [
      "Five test users in dynamic groups, with licenses assigned by group",
      "A Windows 11 virtual machine (Hyper-V) that joins Entra ID and enrolls in Intune",
      "A compliance policy, a configuration profile and an app assignment in Intune",
      "GPO migration to Intune: analyze group policies with Group Policy Analytics and rebuild them as Settings Catalog policies",
      "MFA, self-service password reset and a Conditional Access policy in report-only mode",
      "Offboarding in the right order: block sign-in, secure the mailbox, wipe the device, remove the license",
      "A Jira Service Management project with request types, queues and an escalation template"
    ]
  },
  note: {
    de: "Wird laufend erweitert: Zu jedem Baustein kommen Screenshots und eine kurze Beschreibung dazu.",
    en: "Continuously extended: each building block gets screenshots and a short write-up."
  },

  tools: ["Entra ID", "Intune", "Microsoft 365 Admin Center", "Exchange Online", "Conditional Access", "Group Policy Analytics", "Jira Service Management", "Hyper-V"],

  images: []
});
