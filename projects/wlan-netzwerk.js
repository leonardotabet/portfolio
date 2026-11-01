window.PORTFOLIO_PROJECTS.push({
  id: "wlan-netzwerk",
  order: 5,
  status: "done",

  title:    { de: "WLAN und Netzwerk im Betrieb", en: "Wi-Fi and network operations" },
  subtitle: { de: "Netzwerkbetrieb in einem Konzernnetz, vom WLAN bis zur Firewall-Anfrage.", en: "Network operations inside a group network, from Wi-Fi to firewall requests." },
  context:  { de: "Umgesetzt im Konzernumfeld, im Team", en: "Delivered within the corporate group, as part of the team" },
  period:   { de: "TODO: Zeitraum", en: "TODO: Period" },

  overview: {
    lead: { de: "Ich habe im IT Team eines Schweizer Uhrenunternehmens am Netzwerkbetrieb mitgearbeitet: WLAN, Switches und Firewall Anfragen im Konzernnetz.", en: "In the IT team of a Swiss watch company I worked on network operations: Wi-Fi, switches and firewall requests in the group network." },
    facts: [
      { value: "2", label: { de: "getrennte WLANs", en: "separate Wi-Fi networks" } },
      { value: "Cisco", label: { de: "Access Points und Switches", en: "access points and switches" } },
      { value: "TP-Link", label: { de: "Omada Controller fürs interne WLAN", en: "Omada controller for the internal Wi-Fi" } },
      { value: "Zyxel", label: { de: "Firewall für die Telefonie", en: "firewall for telephony" } }
    ],
    skills: {
      de: ["WLAN Betrieb für Mitarbeitende und Gäste", "Switches patchen und warten", "Firewall Anfragen begründen und dokumentieren", "Netzwerkfehler bis zur Ursache eingrenzen"],
      en: ["Wi-Fi operations for staff and guests", "Patching and maintaining switches", "Justifying and documenting firewall requests", "Tracing network faults to their cause"]
    }
  },
  text: {
    de: ["Im IT-Team eines Schweizer Uhrenunternehmens habe ich am Netzwerk mitgearbeitet. Im Konzernnetz laufen Cisco Access Points und Cisco Switches, das interne WLAN ausserhalb des Konzerns läuft auf TP-Link Omada, die Telefonie hinter einer Zyxel Firewall. Firewall-Freigaben liefen über das Netzwerkteam des Konzerns, also musste jede Anfrage sauber begründet und dokumentiert sein."],
    en: ["In the IT team of a Swiss watch company I worked on the network. The group network runs Cisco access points and Cisco switches, the internal Wi-Fi outside the group runs on TP-Link Omada, and telephony sits behind a Zyxel firewall. Firewall changes went through the group's network team, so every request had to be clearly justified and documented."]
  },
  points: {
    de: [
      "Getrennte WLANs für Mitarbeitende und Gäste",
      "Patchen und Wartung an den Cisco Switches im Netzwerkrack",
      "Firewall-Anfragen an das Netzwerkteam des Konzerns geschrieben",
      "Druckerprobleme im WLAN bis zur Ursache im Netzwerk eingegrenzt"
    ],
    en: [
      "Separate Wi-Fi networks for staff and guests",
      "Patching and maintenance on the Cisco switches in the network rack",
      "Firewall requests written for the group's network team",
      "Wi-Fi printing problems traced down to their cause in the network"
    ]
  },
  note: { de: "", en: "" },

  tools: ["Cisco Access Points", "Cisco Switches", "TP-Link Omada", "Zyxel Firewall", "DHCP", "VLAN", "Confluence"],

  images: []
});
