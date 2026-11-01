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
    { src: "images/m365-support-lab/10-dsregcmd-status.webp", alt: { de: "dsregcmd /status auf der VM, Gerätestatus", en: "dsregcmd /status on the VM, device state" }, caption: { de: "Lab 2: AzureAdJoined YES, Gerät mit TPM geschützt und Authentifizierung erfolgreich", en: "Lab 2: AzureAdJoined YES, device protected by TPM and authentication successful" } },
    { src: "images/m365-support-lab/11-dsregcmd-sso.webp", alt: { de: "dsregcmd /status auf der VM, SSO Status", en: "dsregcmd /status on the VM, SSO state" }, caption: { de: "Lab 2: Primary Refresh Token vorhanden, Anmeldung als Anna, Verwaltung über MDM", en: "Lab 2: Primary Refresh Token present, signed in as Anna, managed by MDM" } },
    { src: "images/m365-support-lab/12-intune-geraet.webp", alt: { de: "Gerätedetails im Intune Admin Center", en: "Device details in the Intune admin center" }, caption: { de: "Lab 2: Gerät in Intune compliant und als Corporate geführt, Primary User Anna", en: "Lab 2: device compliant in Intune and marked as corporate, primary user Anna" } },
    { src: "images/m365-support-lab/13-sg-win-devices.webp", alt: { de: "Mitglieder der Gerätegruppe SG-Win-Devices", en: "Members of the SG-Win-Devices device group" }, caption: { de: "Lab 2: dynamische Gerätegruppe nimmt die VM automatisch auf", en: "Lab 2: dynamic device group picks up the VM automatically" } },
    { src: "images/m365-support-lab/14-entra-geraete.webp", alt: { de: "Geräteliste im Entra Admin Center", en: "Device list in the Entra admin center" }, caption: { de: "Lab 2: Gerät ist Microsoft Entra joined, Besitzerin Anna, MDM Microsoft Intune, compliant", en: "Lab 2: device is Microsoft Entra joined, owner Anna, MDM Microsoft Intune, compliant" } },
    { src: "images/m365-support-lab/15-intune-geraete.webp", alt: { de: "Geräteliste im Intune Admin Center", en: "Device list in the Intune admin center" }, caption: { de: "Lab 2: von Intune verwaltet, Primary User Anna, compliant", en: "Lab 2: managed by Intune, primary user Anna, compliant" } },
    { src: "images/m365-support-lab/16-checkpoints.webp", alt: { de: "Hyper-V Manager mit zwei Checkpoints", en: "Hyper-V Manager with two checkpoints" }, caption: { de: "Checkpoints before-OOBE und after-enrollment als Wiederherstellungspunkte", en: "before-OOBE and after-enrollment checkpoints as restore points" } },
    { src: "images/m365-support-lab/17-edge-policy.webp", alt: { de: "Edge-Richtlinien auf der VM mit edge://policy", en: "Edge policies on the VM in edge://policy" }, caption: { de: "Lab 3: Konfigurationsprofil von Intune ist auf dem Gerät angekommen, Status OK", en: "Lab 3: configuration profile from Intune has reached the device, status OK" } },
    { src: "images/m365-support-lab/18-edge-startseite.webp", alt: { de: "Edge öffnet die per Intune gesetzte Startseite", en: "Edge opens the home page set by Intune" }, caption: { de: "Lab 3: Der Home-Knopf öffnet die Startseite aus dem Intune-Profil", en: "Lab 3: the Home button opens the home page from the Intune profile" } },
    { src: "images/m365-support-lab/19-compliance-policy.webp", alt: { de: "Compliance-Richtlinie im Intune Admin Center", en: "Compliance policy in the Intune admin center" }, caption: { de: "Lab 3: Compliance-Richtlinie WIN-Compliance-Lab für Windows 10 und 11 angelegt", en: "Lab 3: compliance policy WIN-Compliance-Lab created for Windows 10 and 11" } },
    { src: "images/m365-support-lab/20-conditional-access.webp", alt: { de: "Conditional Access Richtlinien im Entra Admin Center", en: "Conditional Access policies in the Entra admin center" }, caption: { de: "Lab 4: Conditional Access mit den von Microsoft verwalteten Richtlinien als Ausgangslage", en: "Lab 4: Conditional Access with the Microsoft-managed policies as the starting point" } },
    { src: "images/m365-support-lab/21-signin-logs.webp", alt: { de: "Anmeldeprotokoll im Entra Admin Center", en: "Sign-in logs in the Entra admin center" }, caption: { de: "Lab 4: Sign-in Log mit den Anmeldungen der Testbenutzerin und des Admins (IP-Adressen ausgeblendet)", en: "Lab 4: sign-in log with the sign-ins of the test user and the admin (IP addresses hidden)" } },
    { src: "images/m365-support-lab/22-passwort-reset.webp", alt: { de: "Self-Service Passwort-Reset im Entra Admin Center", en: "Self-service password reset in the Entra admin center" }, caption: { de: "Lab 4: Self-Service Passwort-Reset für die Pilotgruppe SG-SSPR-Pilot aktiviert", en: "Lab 4: self-service password reset enabled for the SG-SSPR-Pilot pilot group" } },
    { src: "images/m365-support-lab/23-audit-passwort-reset.webp", alt: { de: "Audit Log des Self-Service Passwort-Resets", en: "Audit log of the self-service password reset" }, caption: { de: "Lab 4: Ben setzt sein Passwort selbst zurück: Verifikation per Authenticator und erfolgreicher Reset im Audit Log", en: "Lab 4: Ben resets his own password: Authenticator verification and successful reset in the audit log" } }
  ]
});
