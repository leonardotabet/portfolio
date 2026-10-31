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

  images: [
    { src: "images/m365-support-lab/01-windows-11-vm.webp", alt: { de: "Windows 11 VM in Hyper-V beim ersten Einrichtungsbildschirm", en: "Windows 11 VM in Hyper-V at the first setup screen" }, caption: { de: "Test-Laptop: Windows 11 Enterprise als VM in Hyper-V, bereit für die Intune-Anmeldung", en: "Test laptop: Windows 11 Enterprise as a VM in Hyper-V, ready for Intune enrollment" } },
    { src: "images/m365-support-lab/02-testbenutzer.webp", alt: { de: "Aktive Benutzer im Microsoft 365 Admin Center", en: "Active users in the Microsoft 365 admin center" }, caption: { de: "Lab 1: fünf Testbenutzer und ein Notfallkonto im Admin Center angelegt", en: "Lab 1: five test users and an emergency account created in the admin center" } },
    { src: "images/m365-support-lab/03-gruppen.webp", alt: { de: "Gruppenübersicht im Entra Admin Center", en: "Group overview in the Entra admin center" }, caption: { de: "Lab 1: drei dynamische Sicherheitsgruppen nach Abteilung", en: "Lab 1: three dynamic security groups by department" } },
    { src: "images/m365-support-lab/04-sg-finance.webp", alt: { de: "Mitglieder der Gruppe SG-Finance", en: "Members of the SG-Finance group" }, caption: { de: "SG-Finance: Anna und Ben kommen automatisch über die Abteilung", en: "SG-Finance: Anna and Ben join automatically through their department" } },
    { src: "images/m365-support-lab/05-sg-it.webp", alt: { de: "Mitglieder der Gruppe SG-IT", en: "Members of the SG-IT group" }, caption: { de: "SG-IT: Carla aus der IT-Abteilung", en: "SG-IT: Carla from the IT department" } },
    { src: "images/m365-support-lab/06-sg-licensed-staff.webp", alt: { de: "Mitglieder der Gruppe SG-LicensedStaff", en: "Members of the SG-LicensedStaff group" }, caption: { de: "SG-LicensedStaff: Finance, IT und Sales, ohne Marketing", en: "SG-LicensedStaff: Finance, IT and Sales, without Marketing" } },
    { src: "images/m365-support-lab/07-lizenzen.webp", alt: { de: "Benutzerliste mit Lizenzen", en: "User list with licenses" }, caption: { de: "Lizenzen kommen über die Gruppe, Eva bleibt bewusst ohne Lizenz", en: "Licenses arrive through the group, Eva stays unlicensed on purpose" } },
    { src: "images/m365-support-lab/08-anna-vm-teams.webp", alt: { de: "Anna in Teams und Outlook auf der Windows 11 VM", en: "Anna in Teams and Outlook on the Windows 11 VM" }, caption: { de: "Anmeldung als Testbenutzerin auf dem Test-Laptop mit Teams und Outlook", en: "Sign-in as the test user on the test laptop with Teams and Outlook" } },
    { src: "images/m365-support-lab/09-checkpoint.webp", alt: { de: "Hyper-V Manager mit Checkpoint before-OOBE", en: "Hyper-V Manager with the before-OOBE checkpoint" }, caption: { de: "Checkpoint before-OOBE als Wiederherstellungspunkt der Test-VM", en: "before-OOBE checkpoint as a restore point for the test VM" } }
  ]
});
