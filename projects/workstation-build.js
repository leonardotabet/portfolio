window.PORTFOLIO_PROJECTS.push({
  id: "workstation-build",
  order: 6,
  status: "done",
  lab: {
    step: 2,
    label: { de: "Eigener Unterbau", en: "My own foundation" },
    thought: {
      de: "Für Labs zählen Kerne und Arbeitsspeicher, nicht Grafik: mehrere VMs laufen gleichzeitig. Darum 12 Kerne und 64 GB DDR5 auf AM5, damit ich später aufrüsten kann. Lokal statt in der Cloud, weil VMs dauerhaft laufen dürfen und ich mit Checkpoints jederzeit zum letzten guten Zustand zurückkomme. Jeden Messwert habe ich festgehalten, damit ich bei Problemen eine Referenz habe.",
      en: "For labs, cores and memory matter, not graphics: several VMs run at once. So 12 cores and 64 GB DDR5 on AM5, so I can upgrade later. Local instead of cloud, because VMs can run permanently and checkpoints bring me back to the last good state at any time. I recorded every measurement so I have a reference when something goes wrong."
    }
  },

  title:    { de: "Workstation für Hyper-V Labs: Aufbau, BIOS und Stabilitätstest", en: "Workstation for Hyper-V labs: build, BIOS and stability testing" },
  subtitle: { de: "Eine eigene Workstation von der Planung bis zum Messprotokoll, als Unterbau für meine Labs.", en: "My own workstation from planning to measurement log, as the foundation for my labs." },
  context:  { de: "Praxisprojekt, Unterbau für die Labs zur Konzernumgebung", en: "Hands-on project, foundation for the labs mirroring the corporate environment" },
  period:   { de: "Oktober 2026", en: "October 2026" },

  overview: {
    lead: { de: "Ich habe eine Workstation für meine Hyper-V Labs geplant, selbst aufgebaut und mit Stabilitäts- und Temperaturtests geprüft, und jeden Wert nachgewiesen.", en: "I planned a workstation for my Hyper-V labs, built it myself and checked it with stability and temperature tests, and verified every value." },
    facts: [
      { value: "12", label: { de: "Kerne, 24 Threads", en: "cores, 24 threads" } },
      { value: "64 GB", label: { de: "DDR5-6000 CL30 mit EXPO", en: "DDR5-6000 CL30 with EXPO" } },
      { value: "0", label: { de: "WHEA Hardwarefehler", en: "WHEA hardware errors" } },
      { value: "84 °C", label: { de: "CPU Maximum bei rund 156 W", en: "CPU maximum at about 156 W" } }
    ],
    skills: {
      de: ["Hardware planen und zusammenbauen", "BIOS und EXPO Profil einrichten", "Stabilität mit OCCT testen", "Sensordaten mit HWiNFO lesen", "Windows 11 ohne LAN einrichten"],
      en: ["Planning and assembling hardware", "Setting up BIOS and the EXPO profile", "Testing stability with OCCT", "Reading sensor data with HWiNFO", "Setting up Windows 11 without LAN"]
    }
  },
  diagram: {
    "w": 800,
    "h": 330,
    "alt": {
      "de": "Aufbau der Workstation: Hardware, Windows 11 Pro mit Hyper-V, Lab-VMs und Stabilitätstest",
      "en": "Workstation setup: hardware, Windows 11 Pro with Hyper-V, lab VMs and stability test"
    },
    "zones": [
      {
        "x": 20,
        "y": 20,
        "w": 760,
        "h": 290,
        "label": {
          "de": "Workstation · Ryzen 9 9900X · 64 GB DDR5",
          "en": "Workstation · Ryzen 9 9900X · 64 GB DDR5"
        },
        "tone": "local"
      }
    ],
    "nodes": [
      {
        "id": "hw",
        "x": 40,
        "y": 64,
        "w": 210,
        "kind": "server",
        "title": {
          "de": "Hardware",
          "en": "Hardware"
        },
        "lines": {
          "de": [
            "12 Kerne · 24 Threads",
            "64 GB DDR5-6000 (EXPO)",
            "NVMe · Luftkühlung"
          ],
          "en": [
            "12 cores · 24 threads",
            "64 GB DDR5-6000 (EXPO)",
            "NVMe · air cooling"
          ]
        },
        "details": {
          "de": [
            "AMD Ryzen 9 9900X, 12 Kerne und 24 Threads",
            "64 GB DDR5-6000 CL30, EXPO aktiv, Timings 30, 36, 36, 76",
            "NVMe, mit GPT initialisiert und als NTFS Volume eingerichtet",
            "Luftkühlung, gedämmtes Gehäuse, AM5 Plattform zum Aufrüsten"
          ],
          "en": [
            "AMD Ryzen 9 9900X, 12 cores and 24 threads",
            "64 GB DDR5-6000 CL30, EXPO active, timings 30, 36, 36, 76",
            "NVMe, initialised with GPT and set up as an NTFS volume",
            "Air cooling, sound-dampened case, AM5 platform for upgrades"
          ]
        }
      },
      {
        "id": "win",
        "x": 290,
        "y": 64,
        "w": 210,
        "kind": "client",
        "title": {
          "de": "Windows 11 Pro",
          "en": "Windows 11 Pro"
        },
        "lines": {
          "de": [
            "Hyper-V Host",
            "BIOS und EXPO eingerichtet"
          ],
          "en": [
            "Hyper-V host",
            "BIOS and EXPO set up"
          ]
        },
        "details": {
          "de": [
            "Windows 11 Pro als Hyper-V Host",
            "Ohne LAN eingerichtet: WLAN-Treiber im Setup vom USB-Stick geladen",
            "BIOS 1681 mit EXPO-Profil"
          ],
          "en": [
            "Windows 11 Pro as Hyper-V host",
            "Set up without LAN: Wi-Fi driver loaded from the USB stick during setup",
            "BIOS 1681 with EXPO profile"
          ]
        }
      },
      {
        "id": "vms",
        "x": 550,
        "y": 64,
        "w": 210,
        "kind": "client",
        "title": {
          "de": "Lab-VMs",
          "en": "Lab VMs"
        },
        "lines": {
          "de": [
            "Windows 11 für Intune",
            "Checkpoints für Tests"
          ],
          "en": [
            "Windows 11 for Intune",
            "Checkpoints for testing"
          ]
        },
        "details": {
          "de": [
            "Windows 11 VM für das Entra ID und Intune Lab",
            "Genug Kerne und Arbeitsspeicher für mehrere VMs gleichzeitig",
            "Checkpoints, um Tests in Minuten zurückzusetzen"
          ],
          "en": [
            "Windows 11 VM for the Entra ID and Intune lab",
            "Enough cores and memory for several VMs at once",
            "Checkpoints to roll tests back in minutes"
          ]
        }
      },
      {
        "id": "test",
        "x": 290,
        "y": 210,
        "w": 210,
        "kind": "shield",
        "title": {
          "de": "Stabilitätstest",
          "en": "Stability test"
        },
        "lines": {
          "de": [
            "0 WHEA-Fehler",
            "max. 84 °C bei 156 W"
          ],
          "en": [
            "0 WHEA errors",
            "max. 84 °C at 156 W"
          ]
        },
        "details": {
          "de": [
            "OCCT Speichertest ohne Fehler, WHEA-Zähler bei 0",
            "CPU Volllast: maximal 84 °C bei rund 156 W",
            "Nach dem Test: CPU 77 °C, VRM 49 °C, DIMM rund 66 °C",
            "Werte als Referenz dokumentiert"
          ],
          "en": [
            "OCCT memory test without errors, WHEA counter at 0",
            "CPU full load: 84 °C maximum at about 156 W",
            "After the test: CPU 77 °C, VRM 49 °C, DIMMs about 66 °C",
            "Values documented as a baseline"
          ]
        }
      }
    ],
    "links": [
      {
        "from": "hw",
        "to": "win",
        "fs": "r",
        "ts": "l",
        "fo": -7.5
      },
      {
        "from": "win",
        "to": "vms",
        "label": {
          "de": "Hyper-V",
          "en": "Hyper-V"
        },
        "fs": "r",
        "ts": "l"
      },
      {
        "from": "win",
        "to": "test",
        "label": {
          "de": "OCCT · HWiNFO",
          "en": "OCCT · HWiNFO"
        },
        "fs": "b",
        "ts": "t"
      }
    ]
  },
  text: {
    de: [
      "Meine Labs laufen auf Hyper-V und brauchen genug Kerne und Arbeitsspeicher für mehrere VMs gleichzeitig. Dafür habe ich eine Workstation selbst geplant: Ryzen 9 9900X mit 12 Kernen, 64 GB DDR5, gedämmtes Gehäuse und Luftkühlung, auf einer AM5 Plattform, die sich später aufrüsten lässt.",
      "Ich habe sie selbst aufgebaut, im BIOS eingerichtet und getestet. Jeden Wert habe ich mit einem Screenshot festgehalten, damit ich später vergleichen kann.",
      "Das Ergebnis ist ein leiser Host ohne Hardwarefehler als Grundlage für meine Labs."
    ],
    en: [
      "My labs run on Hyper-V and need enough cores and memory for several VMs at once. For that I planned a workstation myself: Ryzen 9 9900X with 12 cores, 64 GB DDR5, a sound-dampened case and air cooling, on an AM5 platform that can be upgraded later.",
      "I built it myself, set it up in the BIOS and tested it. I saved every value with a screenshot so that I can compare later.",
      "The result is a quiet host without hardware errors as the foundation for my labs."
    ]
  },
  points: {
    de: [
      "Komponenten nach Lab Anforderungen, Kompatibilität und Wartbarkeit ausgewählt (AM5, 12 Kerne, 64 GB DDR5, NVMe, Luftkühlung)",
      "Aufbau zuerst ausserhalb des Gehäuses getestet, danach Einbau mit Kabelmanagement",
      "BIOS Version 1681, EXPO Profil aktiv: DDR5-6000 mit Timings 30, 36, 36, 76, geprüft in HWiNFO",
      "Datenträger in der Datenträgerverwaltung mit GPT initialisiert und als NTFS Volume eingerichtet",
      "Speichertest mit OCCT ohne Fehler, WHEA Zähler bei 0",
      "CPU Volllast: maximal 84 °C bei rund 156 W. Nach dem Stabilitätstest: CPU 77 °C, VRM 49 °C, DIMM rund 66 °C (Maximum)",
      "Einstellungen und Messwerte als Referenz dokumentiert"
    ],
    en: [
      "Selected components for lab requirements, compatibility and maintainability (AM5, 12 cores, 64 GB DDR5, NVMe, air cooling)",
      "Bench test outside the case first, then installation with cable management",
      "BIOS version 1681, EXPO profile active: DDR5-6000 with timings 30, 36, 36, 76, checked in HWiNFO",
      "Initialised a drive in Disk Management with GPT and set it up as an NTFS volume",
      "Memory test with OCCT without errors, WHEA counter at 0",
      "CPU full load: 84 °C maximum at about 156 W. After the stability test: CPU 77 °C, VRM 49 °C, DIMMs about 66 °C (maximum)",
      "Documented settings and measured values as a baseline"
    ]
  },

  sections: [
    {
      title: { de: "Fehlersuche, die ich gelöst habe", en: "Troubleshooting I solved" },
      points: {
        de: [
          "Kein LAN am Aufstellort: Windows 11 musste ohne Netzwerk eingerichtet werden. Den WLAN Treiber (Realtek RTL8922AE) auf einem anderen Gerät heruntergeladen, auf den USB Stick kopiert und im Setup eingebunden, danach war das WLAN verfügbar",
          "Auffällige CPU Temperatur im Leerlauf: mit einem OCCT Volllasttest eingegrenzt. Bei voller Last blieb die CPU bei maximal 84 °C, damit ist der Kühlerkontakt bestätigt. Die Leerlaufwerte habe ich als Boost Verhalten der Plattform eingeordnet"
        ],
        en: [
          "No LAN at the location: Windows 11 had to be set up without a network. I downloaded the Wi-Fi driver (Realtek RTL8922AE) on another device, copied it to the USB stick and loaded it during setup, after which Wi-Fi was available",
          "Noticeable CPU temperature at idle: narrowed down with an OCCT full load test. Under full load the CPU stayed at 84 °C maximum, which confirms the cooler contact. I classified the idle values as boost behavior of the platform"
        ]
      }
    }
  ],
  note: { de: "", en: "" },

  tools: ["Hyper-V", "BIOS/UEFI", "EXPO", "OCCT", "HWiNFO", "Datenträgerverwaltung", "Windows 11 Pro"],

  images: [
    { src: "images/workstation-build/01-aufbau-board.webp", alt: { de: "Mainboard mit CPU und Arbeitsspeicher beim Aufbau ausserhalb des Gehäuses", en: "Motherboard with CPU and memory during the bench setup outside the case" }, caption: { de: "Aufbau ausserhalb des Gehäuses mit CPU und DDR5 auf dem ASUS TUF Gaming B850-Plus WiFi", en: "Bench setup outside the case with CPU and DDR5 on the ASUS TUF Gaming B850-Plus WiFi" } },
    { src: "images/workstation-build/02-waermeleitpaste.webp", alt: { de: "Wärmeleitpaste als Punkt auf dem Heatspreader der CPU", en: "Thermal paste dot on the CPU heat spreader" }, caption: { de: "Wärmeleitpaste als Punkt in der Mitte, Noctua Montagebügel montiert", en: "Thermal paste as a single dot in the centre, Noctua mounting brackets fitted" } },
    { src: "images/workstation-build/03-occt-cpu-ergebnis.webp", alt: { de: "OCCT Systeminformation mit Temperatur, Takt und Leistung der CPU", en: "OCCT system information with CPU temperature, clock and power" }, caption: { de: "OCCT nach dem CPU Test: Temperatur bis 84 °C, Takt bis 5047 MHz, Leistung bis 156 W", en: "OCCT after the CPU test: temperature up to 84 °C, clock up to 5047 MHz, power up to 156 W" } },
    { src: "images/workstation-build/04-hwinfo-speicherzeiten.webp", alt: { de: "HWiNFO Speicherzeiten und CPU Daten", en: "HWiNFO memory timings and CPU data" }, caption: { de: "HWiNFO: Speichertakt 3000 MHz (DDR5-6000), Timings 30, 36, 36, 76, EXPO aktiv", en: "HWiNFO: memory clock 3000 MHz (DDR5-6000), timings 30, 36, 36, 76, EXPO active" } },
    { src: "images/workstation-build/05-hwinfo-sensoren.webp", alt: { de: "HWiNFO Sensorübersicht nach dem Stabilitätstest", en: "HWiNFO sensor overview after the stability test" }, caption: { de: "HWiNFO Sensoren nach dem Stabilitätstest: CPU Paket 77 °C, VRM 49 °C, DIMM rund 66 °C (Maximum)", en: "HWiNFO sensors after the stability test: CPU package 77 °C, VRM 49 °C, DIMMs about 66 °C (maximum)" } },
    { src: "images/workstation-build/06-whea-null-fehler.webp", alt: { de: "HWiNFO Anzeige Windows Hardware Errors mit Gesamtfehler 0", en: "HWiNFO Windows Hardware Errors display with total errors 0" }, caption: { de: "Windows Hardware Errors (WHEA): Gesamtfehler 0", en: "Windows Hardware Errors (WHEA): total errors 0" } }
  ]
});
