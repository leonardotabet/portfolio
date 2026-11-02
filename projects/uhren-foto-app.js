window.PORTFOLIO_PROJECTS.push({
  id: "uhren-foto-app",
  order: 3,
  status: "done",

  title:    { de: "App für die Foto-Dokumentation von Uhren", en: "Watch photo documentation app" },
  subtitle: { de: "Ein manueller Ablauf, ersetzt durch eine App mit automatischer Sicherung.", en: "A manual process, replaced by an app with automatic backups." },
  context:  { de: "Umgesetzt im Konzernumfeld", en: "Delivered within the corporate group" },
  period:   { de: "TODO: Zeitraum", en: "TODO: Period" },

  overview: {
    lead: { de: "Ich habe einen manuellen Foto Ablauf bei einem Schweizer Uhrenunternehmen selbständig durch eine App mit automatischer Sicherung ersetzt und das Team geschult.", en: "I replaced a manual photo process at a Swiss watch company with an app with automatic backups, on my own, and trained the team." },
    facts: [
      { value: "50%", label: { de: "weniger Aufwand pro Uhr", en: "less effort per watch" } },
      { value: "Auto", label: { de: "Sicherung mit Power Automate", en: "backups with Power Automate" } },
      { value: "1", label: { de: "Power App mit Kamera", en: "Power App with camera" } },
      { value: "Team", label: { de: "geschult und dokumentiert", en: "trained and documented" } }
    ],
    skills: {
      de: ["Abläufe analysieren und neu aufbauen", "Power Apps und Power Automate", "SharePoint und Berechtigungen über Teams", "Schulung und Dokumentation in Confluence"],
      en: ["Analyzing and rebuilding processes", "Power Apps and Power Automate", "SharePoint and permissions through Teams", "Training and documentation in Confluence"]
    }
  },
  diagram: {
    "w": 800,
    "h": 360,
    "alt": {
      "de": "Ablauf der Foto-App: Power App im Versand, Ablage in SharePoint, Sicherung mit Power Automate, Zugriff über Teams und Entra ID Gruppen, Doku in Confluence",
      "en": "Flow of the photo app: Power App in shipping, storage in SharePoint, backup with Power Automate, access through Teams and Entra ID groups, documentation in Confluence"
    },
    "zones": [
      {
        "x": 20,
        "y": 20,
        "w": 200,
        "h": 320,
        "label": {
          "de": "Versand",
          "en": "Shipping"
        },
        "tone": "corp"
      },
      {
        "x": 250,
        "y": 20,
        "w": 320,
        "h": 320,
        "label": {
          "de": "Microsoft 365 im Konzern",
          "en": "Microsoft 365 in the group"
        },
        "tone": "cloud"
      },
      {
        "x": 600,
        "y": 20,
        "w": 180,
        "h": 320,
        "label": {
          "de": "Dokumentation",
          "en": "Documentation"
        },
        "tone": "local"
      }
    ],
    "nodes": [
      {
        "id": "team",
        "x": 40,
        "y": 58,
        "w": 160,
        "kind": "user",
        "title": {
          "de": "Team Versand",
          "en": "Shipping team"
        },
        "lines": {
          "de": [
            "geschult"
          ],
          "en": [
            "trained"
          ]
        },
        "details": {
          "de": [
            "Das Versandteam fotografiert jede Uhr vor dem Versand",
            "Von mir geschult, mit Anleitung in Confluence"
          ],
          "en": [
            "The shipping team photographs every watch before shipping",
            "Trained by me, with a guide in Confluence"
          ]
        }
      },
      {
        "id": "app",
        "x": 40,
        "y": 190,
        "w": 160,
        "kind": "app",
        "title": {
          "de": "Power App",
          "en": "Power App"
        },
        "lines": {
          "de": [
            "Seriennummer per Kamera",
            "Fotos aufnehmen"
          ],
          "en": [
            "Serial number by camera",
            "Take photos"
          ]
        },
        "details": {
          "de": [
            "Power App liest die Seriennummer mit der Kamera",
            "Fotos werden direkt der richtigen Uhr zugeordnet",
            "Aufwand pro Uhr halbiert"
          ],
          "en": [
            "The Power App reads the serial number with the camera",
            "Photos are linked to the right watch right away",
            "Effort per watch cut in half"
          ]
        }
      },
      {
        "id": "sp",
        "x": 270,
        "y": 58,
        "w": 260,
        "kind": "storage",
        "title": {
          "de": "SharePoint",
          "en": "SharePoint"
        },
        "lines": {
          "de": [
            "Ablage pro Seriennummer"
          ],
          "en": [
            "Storage per serial number"
          ]
        },
        "details": {
          "de": [
            "Ablage pro Seriennummer in SharePoint",
            "Ersetzt eine einzelne OneNote-Datei ohne Sicherung",
            "Jedes Foto ist wiederauffindbar"
          ],
          "en": [
            "Storage per serial number in SharePoint",
            "Replaces a single OneNote file without backup",
            "Every photo can be found again"
          ]
        }
      },
      {
        "id": "pa",
        "x": 270,
        "y": 158,
        "w": 260,
        "kind": "app",
        "title": {
          "de": "Power Automate",
          "en": "Power Automate"
        },
        "lines": {
          "de": [
            "automatische Sicherung"
          ],
          "en": [
            "automatic backup"
          ]
        },
        "details": {
          "de": [
            "Power Automate sichert neue Fotos automatisch",
            "Keine manuelle Sicherung mehr nötig"
          ],
          "en": [
            "Power Automate backs up new photos automatically",
            "No more manual backups needed"
          ]
        }
      },
      {
        "id": "teams",
        "x": 270,
        "y": 258,
        "w": 260,
        "kind": "user",
        "title": {
          "de": "Teams · Entra ID Gruppen",
          "en": "Teams · Entra ID groups"
        },
        "lines": {
          "de": [
            "Zugriff nur für Berechtigte"
          ],
          "en": [
            "Access for authorized users only"
          ]
        },
        "details": {
          "de": [
            "Zugriff über Teams",
            "Berechtigungen über Benutzergruppen in Entra ID",
            "Nur berechtigte Personen sehen die Fotos"
          ],
          "en": [
            "Access through Teams",
            "Permissions through user groups in Entra ID",
            "Only authorized people can see the photos"
          ]
        }
      },
      {
        "id": "conf",
        "x": 615,
        "y": 58,
        "w": 150,
        "kind": "app",
        "title": {
          "de": "Confluence",
          "en": "Confluence"
        },
        "lines": {
          "de": [
            "Anleitung",
            "Schulungsunterlagen"
          ],
          "en": [
            "Guide",
            "Training material"
          ]
        },
        "details": {
          "de": [
            "Dokumentation des neuen Ablaufs in Confluence",
            "Grundlage für die Schulung des Teams"
          ],
          "en": [
            "Documentation of the new process in Confluence",
            "Basis for training the team"
          ]
        }
      }
    ],
    "links": [
      {
        "from": "team",
        "to": "app",
        "label": {
          "de": "nutzt",
          "en": "uses"
        },
        "fs": "b",
        "ts": "t"
      },
      {
        "from": "app",
        "to": "sp",
        "label": {
          "de": "Fotos",
          "en": "Photos"
        },
        "fs": "r",
        "ts": "l",
        "mx": 236
      },
      {
        "from": "sp",
        "to": "pa",
        "label": {
          "de": "neue Fotos",
          "en": "new photos"
        },
        "fs": "b",
        "ts": "t"
      },
      {
        "from": "teams",
        "to": "sp",
        "label": {
          "de": "Zugriff",
          "en": "Access"
        },
        "fs": "r",
        "ts": "r",
        "to_": 10,
        "mx": 552
      },
      {
        "from": "conf",
        "to": "sp",
        "label": {
          "de": "Doku",
          "en": "Docs"
        },
        "fs": "l",
        "ts": "r",
        "to_": -12,
        "mx": 585,
        "dashed": true
      }
    ]
  },
  text: {
    de: [
      "In einem Schweizer Uhrenunternehmen wird jede Uhr vor dem Versand fotografiert. Die Fotos lagen in einer einzigen OneNote-Datei, ohne Sicherung und ohne klare Ablage.",
      "Ich habe den Ablauf selbständig neu geplant und umgesetzt. Eine Power App liest die Seriennummer mit der Kamera und speichert die Fotos in SharePoint. Power Automate erstellt die Sicherungen. Der Zugriff läuft über Teams und Benutzergruppen. Ich habe das Team geschult und die Dokumentation in Confluence geschrieben.",
      "Der Aufwand pro Uhr hat sich halbiert, und jedes Foto ist sicher abgelegt und wiederauffindbar."
    ],
    en: [
      "At a Swiss watch company, every watch is photographed before shipping. The photos were kept in a single OneNote file, with no backup and no clear structure.",
      "I planned and built a new process on my own. A Power App reads the serial number with the camera and saves the photos to SharePoint. Power Automate creates the backups. Access runs through Teams and user groups. I trained the team and wrote the documentation in Confluence.",
      "The effort per watch was cut in half, and every photo is now stored safely and easy to find."
    ]
  },
  points: { de: [], en: [] },
  note: { de: "", en: "" },

  tools: ["Power Apps", "Power Automate", "SharePoint", "Teams", "Entra ID", "Confluence"],

  images: []
});
