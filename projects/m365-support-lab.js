window.PORTFOLIO_PROJECTS.push({
  id: "m365-support-lab",
  order: 1,
  status: "done",
  lab: {
    step: 4,
    label: { de: "Cloud-Verwaltung", en: "Cloud management" },
    thought: {
      de: "In meinem Konzern laufen die Identitäten in Entra ID und die Geräte in Intune, administriert wird zentral. Ich wollte verstehen, was hinter den Abläufen steckt, mit denen ich im Support zu tun habe. Darum habe ich die Admin-Seite selbst aufgebaut. Meine Grundsätze daraus: Lizenzen und Richtlinien über Gruppen statt einzeln, neue Zugriffsregeln zuerst im Modus „Nur Bericht“, und bei Anmeldeproblemen zuerst die Sign-in-Logs lesen, bevor ich etwas ändere.",
      en: "In my corporate group, identities run in Entra ID and devices in Intune, managed centrally. I wanted to understand what sits behind the workflows I deal with in support, so I built the admin side myself. My principles from it: licenses and policies via groups instead of one by one, new access rules in report-only mode first, and with sign-in problems read the sign-in logs before changing anything."
    }
  },

  title:    { de: "Entra ID und Intune Lab", en: "Entra ID and Intune lab" },
  subtitle: { de: "Ein Firmen-Tenant mit Entra ID und Intune: Benutzer, Geräte, Zugriffsregeln und Support Fälle.", en: "A company tenant with Entra ID and Intune: users, devices, access rules and support cases." },
  context:  { de: "Praxis-Lab zur Konzernumgebung, aus Sicht der Administration", en: "Hands-on lab mirroring the corporate environment, from the administrator's side" },
  period:   { de: "Oktober bis November 2026", en: "October to November 2026" },

  overview: {
    lead: { de: "Ich habe einen Microsoft 365 Tenant mit Entra ID und Intune aufgebaut: Benutzer und Gruppen, Lizenzen, ein verwaltetes Windows 11 Gerät und Zugriffsregeln. Typische Support Fälle vom Onboarding bis zum Offboarding habe ich als Tickets in Jira gelöst. Das Lab zeigt die Administration hinter der Umgebung, die ich im Konzern aus dem Support kenne.", en: "I built a Microsoft 365 tenant with Entra ID and Intune: users and groups, licenses, a managed Windows 11 device and access rules. I solved typical support cases from onboarding to offboarding as tickets in Jira. The lab shows the administration behind the environment I know from support in my corporate group." },
    facts: [
      { value: "5", label: { de: "Testbenutzer", en: "test users" } },
      { value: "1", label: { de: "Windows 11 Gerät in Intune", en: "Windows 11 device in Intune" } },
      { value: "10", label: { de: "Tickets im Service Desk", en: "tickets in the service desk" } },
      { value: "4", label: { de: "Admin Center im Einsatz", en: "admin centers in use" } }
    ],
    skills: {
      de: ["Onboarding und Offboarding", "Anmeldeprobleme mit Logs lösen", "Lizenzen und Gruppen verwalten", "Geräte in Intune verwalten", "Tickets sauber dokumentieren"],
      en: ["Onboarding and offboarding", "Solving sign-in problems with logs", "Managing licenses and groups", "Managing devices in Intune", "Documenting tickets cleanly"]
    }
  },
  diagram: {
    "w": 800,
    "h": 400,
    "alt": {
      "de": "Infrastruktur des Entra ID und Intune Labs: Hyper-V VM, Microsoft 365 Tenant mit Entra ID, Intune und Exchange, Jira Service Desk",
      "en": "Infrastructure of the Entra ID and Intune lab: Hyper-V VM, Microsoft 365 tenant with Entra ID, Intune and Exchange, Jira service desk"
    },
    "zones": [
      {
        "x": 20,
        "y": 20,
        "w": 220,
        "h": 210,
        "label": {
          "de": "Hyper-V Host",
          "en": "Hyper-V host"
        },
        "tone": "local"
      },
      {
        "x": 270,
        "y": 20,
        "w": 290,
        "h": 360,
        "label": {
          "de": "Microsoft 365 Tenant",
          "en": "Microsoft 365 Tenant"
        },
        "tone": "cloud"
      },
      {
        "x": 590,
        "y": 20,
        "w": 190,
        "h": 360,
        "label": {
          "de": "Service Desk",
          "en": "Service Desk"
        },
        "tone": "corp"
      }
    ],
    "nodes": [
      {
        "id": "vm",
        "x": 40,
        "y": 58,
        "w": 180,
        "kind": "client",
        "title": {
          "de": "WIN11-LAB01",
          "en": "WIN11-LAB01"
        },
        "lines": {
          "de": [
            "Windows 11 Enterprise",
            "vTPM · Checkpoints"
          ],
          "en": [
            "Windows 11 Enterprise",
            "vTPM · checkpoints"
          ]
        },
        "details": {
          "de": [
            "Windows 11 Enterprise (Evaluation) als Hyper-V VM der Generation 2",
            "Virtueller TPM und Secure Boot aktiv",
            "Entra ID beigetreten und automatisch in Intune registriert",
            "Als Unternehmensgerät eingetragen",
            "Edge-Richtlinie WIN-Edge-Basics wirkt, geprüft in edge://policy",
            "Checkpoints vor dem Setup und nach der Registrierung für schnelle Tests"
          ],
          "en": [
            "Windows 11 Enterprise (evaluation) as a generation 2 Hyper-V VM",
            "Virtual TPM and Secure Boot enabled",
            "Joined to Entra ID and enrolled in Intune automatically",
            "Registered as a corporate device",
            "Edge policy WIN-Edge-Basics applies, checked in edge://policy",
            "Checkpoints before setup and after enrollment for quick tests"
          ]
        }
      },
      {
        "id": "admin",
        "x": 40,
        "y": 290,
        "w": 180,
        "kind": "user",
        "title": {
          "de": "IT-Admin",
          "en": "IT-Admin"
        },
        "lines": {
          "de": [
            "Admin Center · PowerShell"
          ],
          "en": [
            "Admin centers · PowerShell"
          ]
        },
        "details": {
          "de": [
            "Arbeit in vier Admin Centern: Microsoft 365, Entra, Intune und Exchange",
            "Notfallkonto Break Glass 01 ohne Lizenz, nur für Notfälle",
            "Abfragen mit PowerShell und Microsoft Graph"
          ],
          "en": [
            "Working in four admin centers: Microsoft 365, Entra, Intune and Exchange",
            "Emergency account Break Glass 01 without a license, for emergencies only",
            "Queries with PowerShell and Microsoft Graph"
          ]
        }
      },
      {
        "id": "entra",
        "x": 290,
        "y": 58,
        "w": 240,
        "kind": "cloud",
        "title": {
          "de": "Entra ID",
          "en": "Entra ID"
        },
        "lines": {
          "de": [
            "Benutzer · dynamische Gruppen",
            "MFA · SSPR · Conditional Access"
          ],
          "en": [
            "Users · dynamic groups",
            "MFA · SSPR · Conditional Access"
          ]
        },
        "details": {
          "de": [
            "Fünf Benutzer: Anna Muster, Ben Keller, Carla Rossi, Dario Meier, Eva Huber",
            "Dynamische Sicherheitsgruppen nach Abteilung: SG-Finance und SG-IT",
            "SG-LicensedStaff: dynamische Gruppe, über die die Lizenzen verteilt werden",
            "SG-Win-Devices: dynamische Gerätegruppe für alle Windows-Geräte",
            "SG-SSPR-Pilot: Gruppe für den Self-Service Passwort-Reset",
            "MFA über die Microsoft-Standardrichtlinien, eigene Conditional-Access-Richtlinie CA001 im Modus «Nur Bericht»",
            "Sign-in-Logs und Audit-Logs für die Fehlersuche"
          ],
          "en": [
            "Five users: Anna Muster, Ben Keller, Carla Rossi, Dario Meier, Eva Huber",
            "Dynamic security groups by department: SG-Finance and SG-IT",
            "SG-LicensedStaff: dynamic group that assigns the licenses",
            "SG-Win-Devices: dynamic device group for all Windows devices",
            "SG-SSPR-Pilot: group for self-service password reset",
            "MFA through the Microsoft-managed policies, own Conditional Access policy CA001 in report-only mode",
            "Sign-in logs and audit logs for troubleshooting"
          ]
        }
      },
      {
        "id": "intune",
        "x": 290,
        "y": 168,
        "w": 240,
        "kind": "shield",
        "title": {
          "de": "Intune",
          "en": "Intune"
        },
        "lines": {
          "de": [
            "Compliance · Konfiguration",
            "Registrierung · Firmengerät"
          ],
          "en": [
            "Compliance · configuration",
            "Enrollment · corporate device"
          ]
        },
        "details": {
          "de": [
            "Automatische MDM-Registrierung bei Entra Join",
            "Compliance-Richtlinie WIN-Compliance-Lab für Windows",
            "Konfigurationsprofil WIN-Edge-Basics: Edge-Startseite per Richtlinie",
            "Gerät als Unternehmensgerät geführt",
            "Der Compliance-Status steht Conditional Access zur Verfügung"
          ],
          "en": [
            "Automatic MDM enrollment on Entra join",
            "Compliance policy WIN-Compliance-Lab for Windows",
            "Configuration profile WIN-Edge-Basics: Edge home page by policy",
            "Device managed as a corporate device",
            "The compliance status is available to Conditional Access"
          ]
        }
      },
      {
        "id": "exo",
        "x": 290,
        "y": 278,
        "w": 240,
        "kind": "cloud",
        "title": {
          "de": "Exchange Online · Teams",
          "en": "Exchange Online · Teams"
        },
        "lines": {
          "de": [
            "Postfächer · Shared Mailbox",
            "Lizenzen über Gruppen"
          ],
          "en": [
            "Mailboxes · shared mailbox",
            "Licenses through groups"
          ]
        },
        "details": {
          "de": [
            "Microsoft 365 Business Premium",
            "Lizenzen kommen automatisch über die Gruppe SG-LicensedStaff",
            "Mit der Lizenz erhält jeder Benutzer Postfach, Teams und die Office-Apps",
            "Getestet: Anna nutzt Teams auf dem Lab-Gerät"
          ],
          "en": [
            "Microsoft 365 Business Premium",
            "Licenses arrive automatically through the SG-LicensedStaff group",
            "With the license every user gets a mailbox, Teams and the Office apps",
            "Tested: Anna uses Teams on the lab device"
          ]
        }
      },
      {
        "id": "users",
        "x": 600,
        "y": 58,
        "w": 165,
        "kind": "user",
        "title": {
          "de": "Mitarbeitende",
          "en": "Employees"
        },
        "lines": {
          "de": [
            "5 Testbenutzer"
          ],
          "en": [
            "5 test users"
          ]
        },
        "details": {
          "de": [
            "Fünf Testbenutzer mit Abteilung, Funktion und Standort",
            "Eva bewusst ohne Lizenz, als Support-Fall",
            "Ben hat sein Passwort selbst über aka.ms/sspr zurückgesetzt, sichtbar im Audit-Log"
          ],
          "en": [
            "Five test users with department, job title and location",
            "Eva deliberately without a license, as a support case",
            "Ben reset his own password through aka.ms/sspr, visible in the audit log"
          ]
        }
      },
      {
        "id": "jira",
        "x": 600,
        "y": 200,
        "w": 165,
        "kind": "app",
        "title": {
          "de": "Jira",
          "en": "Jira"
        },
        "lines": {
          "de": [
            "Service Management",
            "Tickets · Queues · KB"
          ],
          "en": [
            "Service Management",
            "Tickets · queues · KB"
          ]
        },
        "details": {
          "de": [
            "Jira Service Management Projekt «IT Service Project»",
            "Anfragetypen: Onboarding, Offboarding, Hardware, Anmeldeproblem, Passwort- und MFA-Hilfe",
            "Zehn Tickets aus den Lab-Fällen, mit Ursache und Lösung",
            "Priorität nach Auswirkung und Dringlichkeit",
            "Jedes Ticket wird sofort bestätigt, auch bei niedriger Priorität"
          ],
          "en": [
            "Jira Service Management project \"IT Service Project\"",
            "Request types: onboarding, offboarding, hardware, cannot sign in, password and MFA help",
            "Ten tickets from the lab cases, with cause and solution",
            "Priority by impact and urgency",
            "Every ticket is acknowledged right away, even at low priority"
          ]
        }
      }
    ],
    "links": [
      {
        "from": "vm",
        "to": "entra",
        "label": {
          "de": "Entra Join",
          "en": "Entra join"
        },
        "fs": "r",
        "ts": "l",
        "fo": -10,
        "to_": -10
      },
      {
        "from": "vm",
        "to": "intune",
        "label": {
          "de": "MDM-Registrierung",
          "en": "MDM enrollment"
        },
        "fs": "r",
        "ts": "l",
        "fo": 14,
        "to_": -12,
        "mx": 255
      },
      {
        "from": "admin",
        "to": "intune",
        "label": {
          "de": "verwaltet",
          "en": "manages"
        },
        "fs": "r",
        "ts": "l",
        "to_": 14,
        "mx": 255
      },
      {
        "from": "intune",
        "to": "entra",
        "label": {
          "de": "Compliance für CA",
          "en": "Compliance for CA"
        },
        "fs": "t",
        "ts": "b"
      },
      {
        "from": "users",
        "to": "entra",
        "label": {
          "de": "Anmeldung + MFA",
          "en": "Sign-in + MFA"
        },
        "fs": "l",
        "ts": "r",
        "fo": -6,
        "to_": -12
      },
      {
        "from": "users",
        "to": "jira",
        "label": {
          "de": "Ticket",
          "en": "Ticket"
        },
        "fs": "b",
        "ts": "t"
      },
      {
        "from": "jira",
        "to": "intune",
        "label": {
          "de": "Support-Fall",
          "en": "Support case"
        },
        "fs": "l",
        "ts": "r",
        "fo": 6,
        "to_": 8
      }
    ]
  },
  text: {
    de: ["In meinem Konzern laufen Microsoft 365, Entra ID und Intune, administriert wird zentral. In diesem Lab habe ich die Administration dahinter selbst aufgebaut: ein Microsoft 365 Tenant von Grund auf, mit den typischen Abläufen eines Service Desks für neue Mitarbeitende, Geräte, Zugriffsregeln, Austritte und Tickets.", "So verstehe ich die Konzernumgebung von der Admin-Seite her, also warum Richtlinien, Gruppen und Zugriffe so aufgebaut sind. Das Lab ist abgeschlossen und mit Screenshots dokumentiert."],
    en: ["My corporate group runs Microsoft 365, Entra ID and Intune, managed centrally. In this lab I built the administration behind them myself: a Microsoft 365 tenant from scratch, with the typical service desk workflows for new staff, devices, access rules, leavers and tickets.", "This way I understand the corporate environment from the admin side, meaning why policies, groups and access are set up the way they are. The lab is complete and documented with screenshots."]
  },
  points: {
    de: [
      "Fünf Testbenutzer in dynamischen Gruppen, Lizenzen werden über Gruppen zugewiesen",
      "Eine virtuelle Windows 11 Maschine (Hyper-V), die Entra ID beitritt und sich in Intune registriert",
      "Compliance-Richtlinie, Konfigurationsprofil und App-Zuweisung in Intune",
      "MFA, Self-Service-Kennwortzurücksetzung und eine Conditional-Access-Richtlinie im Modus „Nur Bericht“",
      "Anmeldeprobleme mit Sign-in-Logs und Audit-Logs eingrenzen und Fehlercodes lesen",
      "Offboarding in der richtigen Reihenfolge: Anmeldung sperren, Postfach sichern, Gerät zurücksetzen, Lizenz entfernen",
      "Ein Jira Service Management Projekt mit Anfragetypen, Warteschlangen und Eskalationsvorlage"
    ],
    en: [
      "Five test users in dynamic groups, with licenses assigned by group",
      "A Windows 11 virtual machine (Hyper-V) that joins Entra ID and enrolls in Intune",
      "A compliance policy, a configuration profile and an app assignment in Intune",
      "MFA, self-service password reset and a Conditional Access policy in report-only mode",
      "Tracing sign-in problems with sign-in logs and audit logs and reading error codes",
      "Offboarding in the right order: block sign-in, secure the mailbox, wipe the device, remove the license",
      "A Jira Service Management project with request types, queues and an escalation template"
    ]
  },
  sections: [
    {
      title: { de: "Meine Learnings", en: "My learnings" },
      points: {
        de: [
          "Wenn sich jemand nicht anmelden kann, frage ich zuerst: wer, seit wann und was hat sich geändert. Danach öffne ich die Sign-in-Logs in Entra ID. Sie zeigen den Fehlercode und ob Conditional Access eine Rolle spielt. Ich behebe die Ursache, prüfe es mit dem Benutzer und schreibe die Lösung ins Ticket.",
          "Eine Kontosperre durch Smart Lockout (Fehler 50053) erkenne ich in den Logs. Die Sperre hebt der Benutzer selbst auf, indem er sein Passwort über Self-Service zurücksetzt. So spart der Service Desk Tickets.",
          "Lizenzen, Richtlinien und Apps weise ich Gruppen zu, nicht einzelnen Personen. Mit dynamischen Gruppen nach Abteilung läuft ein Onboarding fast von selbst, und ein Wechsel der Abteilung ändert die Rechte automatisch.",
          "Neue Zugriffsregeln teste ich zuerst: Conditional Access lief im Modus „Nur Bericht“, bevor sie jemanden aussperren kann. Den Gerätestatus prüfe ich in Intune und mit dsregcmd direkt auf dem Gerät.",
          "Wenn jemand das Unternehmen verlässt, sperre ich zuerst die Anmeldung und beende die Sessions. Danach setze ich den Firmenlaptop zurück, wandle das Postfach in ein Shared Mailbox um, gebe der vorgesetzten Person Zugriff auf OneDrive und entferne die Lizenz. Das Konto lösche ich zuletzt, wenn die Daten gesichert sind. Jeder Schritt kommt mit Uhrzeit ins Ticket.",
          "Jedes Ticket bestätige ich sofort, auch bei niedriger Priorität, und sende bei Bedarf den Workaround. Die Priorität bestimmt die Reihenfolge der Arbeit, nicht ob ich dem Benutzer antworte. Wenn der Workaround nicht klappt, erhöhe ich die Priorität.",
          "Vor jeder grösseren Änderung am Test-Laptop setze ich einen Checkpoint. So bin ich in Minuten wieder im letzten guten Zustand."
        ],
        en: [
          "When a user cannot sign in, I first ask who, since when and what changed. Then I open the sign-in logs in Entra ID. They show the error code and whether Conditional Access played a role. I fix the cause, check with the user, and write the solution into the ticket.",
          "I recognize an account lockout by smart lockout (error 50053) in the logs. The user lifts the lockout themselves by resetting the password through self-service. That saves the service desk tickets.",
          "I assign licenses, policies and apps to groups, not to individual people. With dynamic groups by department, onboarding almost runs by itself, and a change of department changes the access automatically.",
          "I test new access rules first: Conditional Access ran in report-only mode before it could lock anyone out. I check the device state in Intune and with dsregcmd directly on the device.",
          "When someone leaves, I block the sign-in and revoke the sessions first. Then I wipe the company laptop, convert the mailbox to a shared mailbox, give the manager access to OneDrive, and remove the license. I delete the account last, after the data is handled. Every step goes into the ticket with a time.",
          "I acknowledge every ticket quickly, even low priority ones, and send the workaround when there is one. Priority decides the order of the work, not whether I respond to the user. If the workaround fails, I raise the priority.",
          "Before every bigger change on the test laptop I set a checkpoint. That way I am back at the last good state in minutes."
        ]
      }
    },
    {
      title: { de: "Relevant für diese Stellen", en: "Relevant for these roles" },
      points: {
        de: [
          "ICT Support und Service Desk (1st und 2nd Level): Anmeldeprobleme mit Logs lösen, Passwort-Reset, Onboarding und Offboarding, Tickets mit Priorität und sauberer Dokumentation",
          "Junior System Engineer Microsoft 365 und Endpoint: Benutzer, Gruppen und Lizenzen, Geräte in Entra ID und Intune, Compliance-Richtlinie, Konfigurationsprofil und App-Zuweisung",
          "Junior Identity und Access Management: dynamische Gruppen, MFA, Self-Service-Passwortzurücksetzung, Conditional Access, Sign-in- und Audit-Logs"
        ],
        en: [
          "ICT support and service desk (1st and 2nd level): solving sign-in problems with logs, password reset, onboarding and offboarding, tickets with priority and clean documentation",
          "Junior system engineer Microsoft 365 and endpoint: users, groups and licenses, devices in Entra ID and Intune, compliance policy, configuration profile and app assignment",
          "Junior identity and access management: dynamic groups, MFA, self-service password reset, Conditional Access, sign-in and audit logs"
        ]
      }
    }
  ],

  tools: ["Entra ID", "Intune", "Microsoft 365 Admin Center", "Exchange Online", "Conditional Access", "Jira Service Management", "Hyper-V"],

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
    { src: "images/m365-support-lab/23-audit-passwort-reset.webp", alt: { de: "Audit Log des Self-Service Passwort-Resets", en: "Audit log of the self-service password reset" }, caption: { de: "Lab 4: Ben setzt sein Passwort selbst zurück: Verifikation per Authenticator und erfolgreicher Reset im Audit Log", en: "Lab 4: Ben resets his own password: Authenticator verification and successful reset in the audit log" } },
    { src: "images/m365-support-lab/24-jira-service-project.webp", alt: { de: "Jira Service Management Projekt IT Service Project", en: "Jira Service Management project IT Service Project" }, caption: { de: "Lab 7: Jira Service Management Projekt für den Service Desk angelegt", en: "Lab 7: Jira Service Management project set up for the service desk" } },
    { src: "images/m365-support-lab/25-jira-tickets.webp", alt: { de: "Jira Service Management mit zehn Tickets in der Queue", en: "Jira Service Management with ten tickets in the queue" }, caption: { de: "Lab 7: Zehn Tickets im Service Desk, Anfragetypen Onboarding, Offboarding, Hardware, Anmeldeproblem und Passwort-Hilfe", en: "Lab 7: Ten tickets in the service desk, request types onboarding, offboarding, hardware, cannot sign in and password help" } },
    { src: "images/m365-support-lab/26-signin-logs-sperre.webp", alt: { de: "Sign-in-Logs von Carla Rossi mit den Fehlercodes 50126 und 50053", en: "Sign-in logs of Carla Rossi with error codes 50126 and 50053" }, caption: { de: "Ticket IT-3: Carla kann sich nicht anmelden. Die Sign-in-Logs zeigen zuerst falsche Passwörter (50126), danach die Kontosperre durch Smart Lockout (50053)", en: "Ticket IT-3: Carla cannot sign in. The sign-in logs show wrong passwords first (50126), then the account lockout by smart lockout (50053)" } }
  ]
});
