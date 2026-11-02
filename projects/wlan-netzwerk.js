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
  diagram: {
    "w": 800,
    "h": 400,
    "alt": {
      "de": "Netzwerk im Betrieb: Konzernnetz mit Cisco Switches und Access Points, internes WLAN mit TP-Link Omada, Telefonie hinter einer Zyxel Firewall",
      "en": "Network operations: group network with Cisco switches and access points, internal Wi-Fi with TP-Link Omada, telephony behind a Zyxel firewall"
    },
    "zones": [
      {
        "x": 20,
        "y": 20,
        "w": 370,
        "h": 360,
        "label": {
          "de": "Konzernnetz",
          "en": "Group network"
        },
        "tone": "corp"
      },
      {
        "x": 420,
        "y": 20,
        "w": 360,
        "h": 200,
        "label": {
          "de": "Internes WLAN · ausserhalb Konzern",
          "en": "Internal Wi-Fi · outside the group"
        },
        "tone": "local"
      },
      {
        "x": 420,
        "y": 240,
        "w": 360,
        "h": 140,
        "label": {
          "de": "Telefonie",
          "en": "Telephony"
        },
        "tone": "neutral"
      }
    ],
    "nodes": [
      {
        "id": "sw",
        "x": 40,
        "y": 58,
        "w": 330,
        "kind": "net",
        "title": {
          "de": "Cisco Switches",
          "en": "Cisco Switches"
        },
        "lines": {
          "de": [
            "Netzwerkrack · Patchen und Wartung"
          ],
          "en": [
            "Network rack · patching and maintenance"
          ]
        },
        "details": {
          "de": [
            "Cisco Switches im Netzwerkrack",
            "Patchen und Wartung vor Ort"
          ],
          "en": [
            "Cisco switches in the network rack",
            "Patching and maintenance on site"
          ]
        }
      },
      {
        "id": "ap",
        "x": 40,
        "y": 166,
        "w": 155,
        "kind": "net",
        "title": {
          "de": "Cisco APs",
          "en": "Cisco APs"
        },
        "lines": {
          "de": [
            "WLAN im Konzern"
          ],
          "en": [
            "Group Wi-Fi"
          ]
        },
        "details": {
          "de": [
            "Cisco Access Points im Konzernnetz"
          ],
          "en": [
            "Cisco access points in the group network"
          ]
        }
      },
      {
        "id": "nt",
        "x": 215,
        "y": 166,
        "w": 155,
        "kind": "user",
        "title": {
          "de": "Netzwerkteam",
          "en": "Network team"
        },
        "lines": {
          "de": [
            "Firewall-Freigaben"
          ],
          "en": [
            "Firewall changes"
          ]
        },
        "details": {
          "de": [
            "Firewall-Freigaben laufen über das Netzwerkteam des Konzerns",
            "Jede Anfrage sauber begründet und dokumentiert"
          ],
          "en": [
            "Firewall changes go through the group's network team",
            "Every request clearly justified and documented"
          ]
        }
      },
      {
        "id": "me",
        "x": 40,
        "y": 290,
        "w": 330,
        "kind": "user",
        "title": {
          "de": "IT-Team vor Ort",
          "en": "On-site IT team"
        },
        "lines": {
          "de": [
            "Support · Anfragen · Doku in Confluence"
          ],
          "en": [
            "Support · requests · docs in Confluence"
          ]
        },
        "details": {
          "de": [
            "Netzwerk mit VLAN, DHCP, Firewall und WLAN betreut",
            "Druckerprobleme im WLAN bis zur Ursache im Netzwerk eingegrenzt",
            "Telefonie-Ausfall über Ports und Subnetze gelöst",
            "Dokumentation in Confluence"
          ],
          "en": [
            "Looked after the network with VLAN, DHCP, firewall and Wi-Fi",
            "Traced Wi-Fi printing problems to their cause in the network",
            "Solved a phone outage through ports and subnets",
            "Documentation in Confluence"
          ]
        }
      },
      {
        "id": "omada",
        "x": 440,
        "y": 58,
        "w": 320,
        "kind": "net",
        "title": {
          "de": "TP-Link Omada",
          "en": "TP-Link Omada"
        },
        "lines": {
          "de": [
            "Controller und Access Points"
          ],
          "en": [
            "Controller and access points"
          ]
        },
        "details": {
          "de": [
            "TP-Link Omada Controller mit Access Points",
            "Internes WLAN ausserhalb des Konzernnetzes"
          ],
          "en": [
            "TP-Link Omada controller with access points",
            "Internal Wi-Fi outside the group network"
          ]
        }
      },
      {
        "id": "s1",
        "x": 440,
        "y": 150,
        "w": 150,
        "kind": "client",
        "title": {
          "de": "Mitarbeitende",
          "en": "Staff"
        },
        "details": {
          "de": [
            "WLAN für Mitarbeitende, getrennt vom Gäste-WLAN"
          ],
          "en": [
            "Wi-Fi for staff, separated from the guest Wi-Fi"
          ]
        }
      },
      {
        "id": "s2",
        "x": 610,
        "y": 150,
        "w": 150,
        "kind": "client",
        "title": {
          "de": "Gäste",
          "en": "Guests"
        },
        "details": {
          "de": [
            "Eigenes WLAN für Gäste, getrennt vom Mitarbeitenden-WLAN"
          ],
          "en": [
            "Separate Wi-Fi for guests, separated from the staff Wi-Fi"
          ]
        }
      },
      {
        "id": "zy",
        "x": 440,
        "y": 278,
        "w": 150,
        "kind": "shield",
        "title": {
          "de": "Zyxel Firewall",
          "en": "Zyxel Firewall"
        },
        "lines": {
          "de": [
            "Ports · Subnetze"
          ],
          "en": [
            "Ports · subnets"
          ]
        },
        "details": {
          "de": [
            "Telefonie hinter einer Zyxel Firewall",
            "Ausfall über Ports und Subnetze eingegrenzt und gelöst"
          ],
          "en": [
            "Telephony behind a Zyxel firewall",
            "Outage narrowed down and solved through ports and subnets"
          ]
        }
      },
      {
        "id": "tel",
        "x": 610,
        "y": 278,
        "w": 150,
        "kind": "client",
        "title": {
          "de": "Telefone",
          "en": "Phones"
        },
        "lines": {
          "de": [
            "Telefonie"
          ],
          "en": [
            "Telephony"
          ]
        },
        "details": {
          "de": [
            "Telefone der Mitarbeitenden"
          ],
          "en": [
            "Phones of the employees"
          ]
        }
      }
    ],
    "links": [
      {
        "from": "sw",
        "to": "ap",
        "fs": "b",
        "ts": "t",
        "fo": -87
      },
      {
        "from": "me",
        "to": "nt",
        "label": {
          "de": "Firewall-Anfrage",
          "en": "Firewall request"
        },
        "fs": "t",
        "ts": "b",
        "fo": 87
      },
      {
        "from": "omada",
        "to": "s1",
        "label": {
          "de": "getrennte WLANs",
          "en": "separate SSIDs"
        },
        "fs": "b",
        "ts": "t",
        "fo": -85,
        "lx": 600,
        "ly": 133
      },
      {
        "from": "omada",
        "to": "s2",
        "fs": "b",
        "ts": "t",
        "fo": 85
      },
      {
        "from": "zy",
        "to": "tel",
        "fs": "r",
        "ts": "l"
      },
      {
        "from": "me",
        "to": "zy",
        "label": {
          "de": "Fehlersuche",
          "en": "Troubleshooting"
        },
        "fs": "r",
        "ts": "l",
        "fo": -12
      }
    ]
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
