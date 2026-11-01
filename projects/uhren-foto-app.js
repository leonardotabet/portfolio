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
