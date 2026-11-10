window.PORTFOLIO_PROJECTS.push({
  id: "windows-server-ad-lab",
  order: 2,
  status: "done",
  lab: {
    step: 3,
    label: { de: "Fundament der Firmenumgebung", en: "Foundation of a company network" },
    thought: {
      de: "Jede Firmenumgebung steht auf einer sauberen Domäne: ohne DNS keine Anmeldung, ohne DHCP keine Adressen. Ich habe vieles mit PowerShell gebaut, weil Skripte wiederholbar sind und gleich die Dokumentation liefern. Jeden Schritt prüfe ich mit dcdiag, nslookup und gpresult. Der zweite DHCP-Server auf der OPNsense hat mir gezeigt: bei Netzwerkfehlern zuerst ipconfig /all.",
      en: "Every company environment rests on a clean domain: no DNS, no sign-in; no DHCP, no addresses. I built much of it with PowerShell, because scripts are repeatable and double as documentation. I verify every step with dcdiag, nslookup and gpresult. The second DHCP server on the OPNsense taught me: with network faults, start with ipconfig /all."
    }
  },

  title:    { de: "Windows-Server-Infrastruktur: AD DS, DNS, DHCP und GPO", en: "Windows Server infrastructure: AD DS, DNS, DHCP and GPO" },
  subtitle: { de: "Eine komplette Domäne von Grund auf, weitgehend per PowerShell aufgebaut.", en: "A complete domain built from scratch, largely with PowerShell." },
  context:  { de: "Praxis-Lab im Diplomlehrgang ICT System Engineer (SIW)", en: "Hands-on lab in the ICT System Engineer diploma program (SIW)" },
  period:   { de: "Oktober 2026", en: "October 2026" },

  overview: {
    lead: { de: "Ich habe eine komplette Windows Domäne mit Domänencontroller, DNS, DHCP und Gruppenrichtlinien aufgebaut, weitgehend mit PowerShell, und jeden Schritt nachgewiesen.", en: "I built a complete Windows domain with a domain controller, DNS, DHCP and group policies, largely with PowerShell, and verified every step." },
    facts: [
      { value: "1", label: { de: "Domänencontroller", en: "domain controller" } },
      { value: "2", label: { de: "Clients in der Domäne", en: "clients joined to the domain" } },
      { value: "2", label: { de: "Gruppenrichtlinien aktiv", en: "group policies applied" } },
      { value: "4", label: { de: "Fehlerfälle gelöst", en: "issues solved" } }
    ],
    skills: {
      de: ["Domäne aufbauen: AD DS, DNS, DHCP", "Gruppenrichtlinien einsetzen", "Automatisieren mit PowerShell", "Fehlersuche mit dcdiag und gpresult", "Clients in die Domäne aufnehmen"],
      en: ["Building a domain: AD DS, DNS, DHCP", "Applying group policies", "Automating with PowerShell", "Troubleshooting with dcdiag and gpresult", "Joining clients to the domain"]
    }
  },
  diagram: {
    "w": 800,
    "h": 390,
    "alt": {
      "de": "Infrastruktur der Windows-Domäne: OPNsense Firewall, Domänencontroller DC01 und zwei Windows-Clients",
      "en": "Infrastructure of the Windows domain: OPNsense firewall, domain controller DC01 and two Windows clients"
    },
    "zones": [
      {
        "x": 20,
        "y": 96,
        "w": 760,
        "h": 280,
        "label": {
          "de": "Lab-Netzwerk · Domäne siw.local",
          "en": "Lab network · siw.local domain"
        },
        "tone": "local"
      }
    ],
    "nodes": [
      {
        "id": "inet",
        "x": 40,
        "y": 24,
        "w": 170,
        "kind": "cloud",
        "title": {
          "de": "Internet",
          "en": "Internet"
        },
        "details": {
          "de": [
            "Externe Namen über eine DNS-Weiterleitung des Domänencontrollers"
          ],
          "en": [
            "External names through a DNS forwarder on the domain controller"
          ]
        }
      },
      {
        "id": "fw",
        "x": 40,
        "y": 190,
        "w": 170,
        "kind": "shield",
        "title": {
          "de": "OPNsense",
          "en": "OPNsense"
        },
        "lines": {
          "de": [
            "Firewall · Gateway",
            "DHCP deaktiviert"
          ],
          "en": [
            "Firewall · gateway",
            "DHCP disabled"
          ]
        },
        "details": {
          "de": [
            "OPNsense als Firewall und Gateway ins Internet",
            "Eigener DHCP-Bereich deaktiviert, damit nur der Domänencontroller Adressen verteilt",
            "Ursache eines falschen Gateways mit ipconfig /all gefunden"
          ],
          "en": [
            "OPNsense as firewall and gateway to the internet",
            "Its own DHCP range disabled so only the domain controller hands out addresses",
            "Found the cause of a wrong gateway with ipconfig /all"
          ]
        }
      },
      {
        "id": "dc",
        "x": 280,
        "y": 168,
        "w": 240,
        "kind": "server",
        "title": {
          "de": "DC01 · Windows Server",
          "en": "DC01 · Windows Server"
        },
        "lines": {
          "de": [
            "AD DS · DNS · DHCP",
            "Gruppenrichtlinien",
            "OUs: Benutzer · Computer · Gruppen"
          ],
          "en": [
            "AD DS · DNS · DHCP",
            "Group policies",
            "OUs: users · computers · groups"
          ]
        },
        "details": {
          "de": [
            "Domäne siw.local, Domänencontroller mit statischer IP",
            "AD DS per PowerShell installiert, dcdiag: alle Kerntests bestanden",
            "DNS: AD-integrierte Forward- und Reverse-Zone, automatische PTR-Einträge, Weiterleitung",
            "DHCP: im AD autorisiert, Bereich mit Router, DNS und Domänenname, Reservation per MAC",
            "OUs für Benutzer, Computer und Gruppen, Benutzer und Sicherheitsgruppen per PowerShell",
            "Zwei Gruppenrichtlinien: Bildschirmsperre und Desktop-Darstellung auf der Benutzer-OU"
          ],
          "en": [
            "Domain siw.local, domain controller with a static IP",
            "AD DS installed with PowerShell, dcdiag: all core tests passed",
            "DNS: AD-integrated forward and reverse zones, automatic PTR records, forwarder",
            "DHCP: authorized in AD, scope with router, DNS and domain name, reservation by MAC",
            "OUs for users, computers and groups, users and security groups created with PowerShell",
            "Two group policies: screen lock and desktop appearance on the users OU"
          ]
        }
      },
      {
        "id": "c1",
        "x": 590,
        "y": 136,
        "w": 170,
        "kind": "client",
        "title": {
          "de": "Client 1",
          "en": "Client 1"
        },
        "lines": {
          "de": [
            "Windows · Domänenmitglied"
          ],
          "en": [
            "Windows · domain member"
          ]
        },
        "details": {
          "de": [
            "Windows-Client in der Domäne",
            "Beitritt mit Anmeldung im UPN-Format",
            "In die richtige OU verschoben",
            "Anmeldung mit Domänenkonto getestet, GPO mit gpresult /r nachgewiesen"
          ],
          "en": [
            "Windows client in the domain",
            "Joined using the UPN sign-in format",
            "Moved to the right OU",
            "Sign-in with a domain account tested, GPO verified with gpresult /r"
          ]
        }
      },
      {
        "id": "c2",
        "x": 590,
        "y": 270,
        "w": 170,
        "kind": "client",
        "title": {
          "de": "Client 2",
          "en": "Client 2"
        },
        "lines": {
          "de": [
            "Windows · Domänenmitglied"
          ],
          "en": [
            "Windows · domain member"
          ]
        },
        "details": {
          "de": [
            "Windows-Client in der Domäne",
            "Adresse per DHCP vom Domänencontroller",
            "Gruppenrichtlinien greifen automatisch, geprüft mit gpresult /r"
          ],
          "en": [
            "Windows client in the domain",
            "Address by DHCP from the domain controller",
            "Group policies apply automatically, checked with gpresult /r"
          ]
        }
      }
    ],
    "links": [
      {
        "from": "fw",
        "to": "inet",
        "fs": "t",
        "ts": "b"
      },
      {
        "from": "dc",
        "to": "fw",
        "label": {
          "de": "Gateway",
          "en": "Gateway"
        },
        "fs": "l",
        "ts": "r",
        "to_": 0,
        "fo": -6
      },
      {
        "from": "dc",
        "to": "c1",
        "label": {
          "de": "DHCP · DNS",
          "en": "DHCP · DNS"
        },
        "fs": "r",
        "ts": "l",
        "fo": -16
      },
      {
        "from": "dc",
        "to": "c2",
        "label": {
          "de": "Anmeldung · GPO",
          "en": "Sign-in · GPO"
        },
        "fs": "r",
        "ts": "l",
        "fo": 16
      }
    ]
  },
  text: {
    de: [
      "Ich habe eine Windows-Domäne aufgebaut, wie sie in vielen KMU läuft: ein Domänencontroller, der Anmeldung, Namensauflösung und Adressvergabe übernimmt, zwei Windows-Clients in der Domäne und Gruppenrichtlinien, die automatisch greifen. Jeden Schritt habe ich mit Werkzeugen wie dcdiag, nslookup, ipconfig und gpresult nachgewiesen."
    ],
    en: [
      "I built a Windows domain the way many small and medium companies run it: one domain controller handling sign-in, name resolution and address assignment, two Windows clients joined to the domain and group policies that apply automatically. I verified every step with tools such as dcdiag, nslookup, ipconfig and gpresult."
    ]
  },
  points: {
    de: [
      "Domänencontroller DC01 mit statischer IP, AD DS per PowerShell installiert und die Domäne siw.local erstellt. dcdiag: alle Kerntests bestanden",
      "DNS: AD-integrierte Forward- und Reverse-Zone, automatische PTR-Einträge, Weiterleitung für externe Namen, geprüft mit nslookup in beide Richtungen",
      "DHCP: Rolle installiert und im Active Directory autorisiert, Bereich mit Router, DNS-Server und Domänenname, feste Reservation per MAC-Adresse",
      "Struktur mit Organisationseinheiten für Benutzer, Computer und Gruppen. Benutzer und Sicherheitsgruppen per PowerShell angelegt",
      "Zwei Windows-Clients in die Domäne aufgenommen und in die richtige OU verschoben, Anmeldung mit Domänenkonten getestet",
      "Zwei Gruppenrichtlinien (Bildschirmsperre und Desktop-Darstellung) auf die Benutzer-OU verknüpft und mit gpresult /r nachgewiesen"
    ],
    en: [
      "Domain controller DC01 with a static IP, AD DS installed with PowerShell and the siw.local domain created. dcdiag: all core tests passed",
      "DNS: AD-integrated forward and reverse zones, automatic PTR records, a forwarder for external names, verified with nslookup in both directions",
      "DHCP: role installed and authorized in Active Directory, scope with router, DNS server and domain name, a fixed reservation by MAC address",
      "Organizational unit structure for users, computers and groups. Users and security groups created with PowerShell",
      "Two Windows clients joined to the domain and moved to the right OU, sign-in tested with domain accounts",
      "Two group policies (screen lock and desktop appearance) linked to the users OU and verified with gpresult /r"
    ]
  },

  sections: [
    {
      title: { de: "Fehlersuche, die ich gelöst habe", en: "Troubleshooting I solved" },
      points: {
        de: [
          "Zweiter DHCP-Server im Netz: Die Firewall (OPNsense) verteilte parallel Adressen, der Client bekam ein falsches Gateway und DNS. Mit ipconfig /all eingegrenzt, den DHCP-Bereich der Firewall deaktiviert, danach bezog der Client seine Adresse korrekt vom Domänencontroller",
          "Server-Manager-Modul nicht verfügbar: als Ursache die 32-Bit-PowerShell erkannt und mit der 64-Bit-Version gelöst",
          "Domänenbeitritt abgelehnt: mit der Anmeldung im UPN-Format (administrator@siw.local) erfolgreich durchgeführt",
          "Automatische PTR-Aktualisierung: die Einstellung am A-Record gefunden und aktiviert, damit Vorwärts- und Rückwärtsauflösung übereinstimmen"
        ],
        en: [
          "A second DHCP server on the network: the firewall (OPNsense) was handing out addresses in parallel, so the client received the wrong gateway and DNS. I narrowed it down with ipconfig /all, disabled the firewall's DHCP range, and the client then got its address correctly from the domain controller",
          "Server Manager module unavailable: identified the 32-bit PowerShell as the cause and solved it with the 64-bit version",
          "Domain join refused: completed it by signing in with the UPN format (administrator@siw.local)",
          "Automatic PTR updates: found and enabled the setting on the A record so that forward and reverse lookups match"
        ]
      }
    }
  ],
  note: { de: "", en: "" },

  tools: ["Windows Server", "PowerShell", "AD DS", "DNS", "DHCP", "Group Policy", "OPNsense"],

  images: [
    { src: "images/siw-ad-lab/01-dcdiag.webp", alt: { de: "dcdiag mit bestandenen Tests auf DC01", en: "dcdiag with passed tests on DC01" }, caption: { de: "dcdiag: Connectivity, Advertising, Replications, RidManager und Services bestanden", en: "dcdiag: Connectivity, Advertising, Replications, RidManager and Services passed" } },
    { src: "images/siw-ad-lab/02-dns-zonen.webp", alt: { de: "Liste der DNS-Zonen", en: "List of DNS zones" }, caption: { de: "AD-integrierte Forward- und Reverse-Zone", en: "AD-integrated forward and reverse zones" } },
    { src: "images/siw-ad-lab/03-dns-records.webp", alt: { de: "DNS-Einträge der Zone siw.local", en: "DNS records of the siw.local zone" }, caption: { de: "DNS-Einträge mit SRV-Records für LDAP und Kerberos und beiden Clients", en: "DNS records with SRV records for LDAP and Kerberos and both clients" } },
    { src: "images/siw-ad-lab/04-dhcp-optionen-reservation.webp", alt: { de: "DHCP-Optionen und Reservation in PowerShell", en: "DHCP options and reservation in PowerShell" }, caption: { de: "DHCP-Optionen und Reservation per PowerShell", en: "DHCP options and reservation with PowerShell" } },
    { src: "images/siw-ad-lab/05-client-ipconfig.webp", alt: { de: "ipconfig /all auf dem Client", en: "ipconfig /all on the client" }, caption: { de: "Client erhält Adresse, Gateway und DNS vom Domänencontroller", en: "The client receives address, gateway and DNS from the domain controller" } },
    { src: "images/siw-ad-lab/06-ad-benutzer.webp", alt: { de: "Benutzer in Active Directory Users and Computers", en: "Users in Active Directory Users and Computers" }, caption: { de: "OU-Struktur mit Benutzern", en: "OU structure with users" } },
    { src: "images/siw-ad-lab/07-ad-gruppen.webp", alt: { de: "Sicherheitsgruppen in Active Directory", en: "Security groups in Active Directory" }, caption: { de: "Sicherheitsgruppen für Mitarbeitende und IT", en: "Security groups for staff and IT" } },
    { src: "images/siw-ad-lab/08-anmeldung-client.webp", alt: { de: "whoami und hostname auf dem Client", en: "whoami and hostname on the client" }, caption: { de: "Anmeldung mit Domänenkonto auf PC-CLI01", en: "Sign-in with a domain account on PC-CLI01" } },
    { src: "images/siw-ad-lab/09-gpo-uebersicht.webp", alt: { de: "Group Policy Management mit verknüpften GPOs", en: "Group Policy Management with linked GPOs" }, caption: { de: "GPOs auf die Benutzer-OU verknüpft", en: "GPOs linked to the users OU" } },
    { src: "images/siw-ad-lab/10-gpresult.webp", alt: { de: "gpresult mit angewendeten Gruppenrichtlinien", en: "gpresult with applied group policies" }, caption: { de: "gpresult /r: beide GPOs angewendet", en: "gpresult /r: both GPOs applied" } }
  ]
});
