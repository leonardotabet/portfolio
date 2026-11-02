window.PORTFOLIO_PROJECTS.push({
  id: "azure-hybrid-lab",
  order: 4,
  status: "done",

  title:    { de: "Azure Hybrid Lab", en: "Azure hybrid lab" },
  subtitle: { de: "Lokales Active Directory und Microsoft Cloud, verbunden wie im Konzern und in vielen Firmen.", en: "On-premises Active Directory and the Microsoft cloud, connected as in my corporate group and many companies." },
  context:  { de: "Praxis-Lab zur Konzernumgebung", en: "Hands-on lab mirroring the corporate environment" },
  period:   { de: "2025 bis 2026", en: "2025 to 2026" },

  overview: {
    lead: { de: "Ich habe ein lokales Active Directory mit Entra ID und Azure verbunden, wie es im Konzern und in vielen KMU läuft, inklusive Dateiablage und virtuellen Desktops.", en: "I connected an on-premises Active Directory with Entra ID and Azure, the way it runs in my corporate group and many SMEs, including file storage and virtual desktops." },
    facts: [
      { value: "Hybrid", label: { de: "AD und Entra ID verbunden", en: "AD and Entra ID connected" } },
      { value: "1", label: { de: "Domänencontroller in Azure", en: "domain controller in Azure" } },
      { value: "Azure Files", label: { de: "mit AD Anmeldung und RBAC", en: "with AD sign-in and RBAC" } },
      { value: "AVD", label: { de: "Session Host in der Domäne", en: "domain-joined session host" } }
    ],
    skills: {
      de: ["Hybride Identität mit Entra Connect", "Azure Grundlagen: VNet, NSG, VMs", "Azure Files und Virtual Desktop", "Active Directory und DNS", "Typische Fehler selbst lösen"],
      en: ["Hybrid identity with Entra Connect", "Azure basics: VNet, NSG, VMs", "Azure Files and Virtual Desktop", "Active Directory and DNS", "Solving typical issues myself"]
    }
  },
  diagram: {
    "w": 800,
    "h": 400,
    "alt": {
      "de": "Infrastruktur des Azure Hybrid Labs: Azure VNet mit Bastion, Domänencontroller, Azure Files und Azure Virtual Desktop, synchronisiert mit Entra ID",
      "en": "Infrastructure of the Azure hybrid lab: Azure VNet with Bastion, domain controller, Azure Files and Azure Virtual Desktop, synced with Entra ID"
    },
    "zones": [
      {
        "x": 20,
        "y": 20,
        "w": 530,
        "h": 360,
        "label": {
          "de": "Azure · Ressourcengruppe · VNet mit NSG",
          "en": "Azure · resource group · VNet with NSG"
        },
        "tone": "cloud"
      },
      {
        "x": 580,
        "y": 20,
        "w": 200,
        "h": 170,
        "label": {
          "de": "Microsoft Entra ID",
          "en": "Microsoft Entra ID"
        },
        "tone": "corp"
      }
    ],
    "nodes": [
      {
        "id": "bastion",
        "x": 40,
        "y": 60,
        "w": 190,
        "kind": "shield",
        "title": {
          "de": "Azure Bastion",
          "en": "Azure Bastion"
        },
        "lines": {
          "de": [
            "RDP im Browser",
            "kein offener RDP-Port"
          ],
          "en": [
            "RDP in the browser",
            "no open RDP port"
          ]
        },
        "details": {
          "de": [
            "Zugriff auf die Server per RDP direkt im Browser",
            "Kein offener RDP-Port im Internet",
            "NSG-Regel für den Zugriff geprüft und korrigiert"
          ],
          "en": [
            "Access to the servers with RDP directly in the browser",
            "No open RDP port on the internet",
            "NSG rule for access checked and corrected"
          ]
        }
      },
      {
        "id": "dc",
        "x": 290,
        "y": 60,
        "w": 240,
        "kind": "server",
        "title": {
          "de": "DC01 · Windows Server 2025",
          "en": "DC01 · Windows Server 2025"
        },
        "lines": {
          "de": [
            "AD DS · DNS · corp.local",
            "Entra Connect (Hash-Sync)"
          ],
          "en": [
            "AD DS · DNS · corp.local",
            "Entra Connect (hash sync)"
          ]
        },
        "details": {
          "de": [
            "Windows Server 2025 mit AD DS und DNS für corp.local",
            "Statische IP im eigenen Subnetz",
            "OU für Benutzer, Testbenutzer und eine Sicherheitsgruppe für den Dateizugriff",
            "UPN-Suffix passend zum Tenant",
            "Entra Connect mit Kennwort-Hash-Synchronisierung und OU-Filter"
          ],
          "en": [
            "Windows Server 2025 with AD DS and DNS for corp.local",
            "Static IP in its own subnet",
            "OU for users, test users and a security group for file access",
            "UPN suffix matching the tenant",
            "Entra Connect with password hash sync and OU filtering"
          ]
        }
      },
      {
        "id": "files",
        "x": 40,
        "y": 250,
        "w": 190,
        "kind": "storage",
        "title": {
          "de": "Azure Files",
          "en": "Azure Files"
        },
        "lines": {
          "de": [
            "Kerberos über AD DS",
            "Rechte per RBAC"
          ],
          "en": [
            "Kerberos through AD DS",
            "Permissions via RBAC"
          ]
        },
        "details": {
          "de": [
            "Anmeldung per Kerberos über AD DS statt Speicherschlüssel",
            "Rechte per RBAC auf die Sicherheitsgruppe",
            "Getestet: Mitglieder der Gruppe erreichen die Freigabe, andere nicht"
          ],
          "en": [
            "Sign-in with Kerberos through AD DS instead of storage keys",
            "Permissions via RBAC on the security group",
            "Tested: group members reach the share, others do not"
          ]
        }
      },
      {
        "id": "avd",
        "x": 290,
        "y": 250,
        "w": 240,
        "kind": "client",
        "title": {
          "de": "Azure Virtual Desktop",
          "en": "Azure Virtual Desktop"
        },
        "lines": {
          "de": [
            "Host Pool · Workspace",
            "Session Host in der Domäne"
          ],
          "en": [
            "Host pool · workspace",
            "Domain-joined session host"
          ]
        },
        "details": {
          "de": [
            "Host Pool, Arbeitsbereich und ein Session Host",
            "Session Host ist der Domäne beigetreten",
            "DNS des VNet auf den Domänencontroller gestellt, damit der Beitritt klappt"
          ],
          "en": [
            "Host pool, workspace and one session host",
            "The session host is joined to the domain",
            "VNet DNS pointed to the domain controller so the join works"
          ]
        }
      },
      {
        "id": "entra",
        "x": 600,
        "y": 60,
        "w": 160,
        "kind": "cloud",
        "title": {
          "de": "Entra ID",
          "en": "Entra ID"
        },
        "lines": {
          "de": [
            "synchronisierte Benutzer",
            "Gruppen"
          ],
          "en": [
            "Synced users",
            "Groups"
          ]
        },
        "details": {
          "de": [
            "Benutzer aus der gefilterten OU werden synchronisiert",
            "Gruppen für den Zugriff",
            "Eigenes Cloud-Administratorkonto für Entra Connect"
          ],
          "en": [
            "Users from the filtered OU are synced",
            "Groups for access",
            "Dedicated cloud admin account for Entra Connect"
          ]
        }
      },
      {
        "id": "user",
        "x": 600,
        "y": 260,
        "w": 160,
        "kind": "user",
        "title": {
          "de": "Benutzer",
          "en": "User"
        },
        "lines": {
          "de": [
            "ein Konto, ein Passwort"
          ],
          "en": [
            "one account, one password"
          ]
        },
        "details": {
          "de": [
            "Ein Konto und ein Passwort vom lokalen AD bis in die Cloud",
            "Anmeldung am virtuellen Desktop und Zugriff auf die Dateifreigabe"
          ],
          "en": [
            "One account and one password from on-premises AD to the cloud",
            "Sign-in to the virtual desktop and access to the file share"
          ]
        }
      }
    ],
    "links": [
      {
        "from": "bastion",
        "to": "dc",
        "label": {
          "de": "Verwaltung",
          "en": "Admin access"
        },
        "fs": "r",
        "ts": "l"
      },
      {
        "from": "dc",
        "to": "entra",
        "label": {
          "de": "Sync",
          "en": "Sync"
        },
        "fs": "r",
        "ts": "l"
      },
      {
        "from": "avd",
        "to": "dc",
        "label": {
          "de": "Domänenbeitritt",
          "en": "Domain join"
        },
        "fs": "t",
        "ts": "b"
      },
      {
        "from": "avd",
        "to": "files",
        "label": {
          "de": "Kerberos",
          "en": "Kerberos"
        },
        "fs": "l",
        "ts": "r"
      },
      {
        "from": "user",
        "to": "avd",
        "label": {
          "de": "Anmeldung",
          "en": "Sign-in"
        },
        "fs": "l",
        "ts": "r"
      },
      {
        "from": "entra",
        "to": "user",
        "label": {
          "de": "Identität",
          "en": "Identity"
        },
        "fs": "b",
        "ts": "t"
      }
    ]
  },
  text: {
    de: [
      "Hybrides Active Directory mit Entra ID und Azure ist in meinem Konzern im Einsatz. Im Lab habe ich eine solche Umgebung Schritt für Schritt selbst aufgebaut, wie sie auch viele Schweizer KMU nutzen: ein Domänencontroller mit Active Directory, synchronisiert mit Entra ID, dazu Dateiablage und virtuelle Desktops aus Azure. Das Ergebnis ist eine hybride Identität von Ende zu Ende: ein Benutzer, ein Passwort, vom lokalen Active Directory bis in die Cloud."
    ],
    en: [
      "Hybrid Active Directory with Entra ID and Azure is in use in my corporate group. In the lab I built such an environment myself, step by step, like the ones many Swiss SMEs run: a domain controller with Active Directory synced to Entra ID, plus file storage and virtual desktops from Azure. The result is an end-to-end hybrid identity: one user, one password, from on-premises Active Directory to the cloud."
    ]
  },
  points: { de: [], en: [] },

  sections: [
    {
      title: { de: "Was ich daraus kann", en: "What I can do now" },
      text: {
        de: "Aus dem Lab ist ein fester Ablauf geworden, den ich jederzeit wieder aufbauen kann:",
        en: "The lab turned into a repeatable process that I can rebuild at any time:"
      },
      points: {
        de: [
          "Azure Grundlagen aufbauen: Ressourcengruppe, VNet, NSG und VMs bereitstellen",
          "Einen Domänencontroller aufsetzen: Active Directory, DNS, OUs, Benutzer und Gruppen",
          "Hybride Identität einrichten: Entra Connect mit Kennwort-Hash-Synchronisierung, inklusive UPN-Suffix",
          "Azure Files mit AD-Anmeldung (Kerberos) und RBAC absichern und den Zugriff testen",
          "Azure Virtual Desktop mit einem Session Host betreiben, der der Domäne beigetreten ist",
          "Typische Fehler selbst lösen: öffentliche IP in der NSG, DNS im VNet, vCPU-Kontingent, Anmeldung bei Entra Connect",
          "Ressourcen kostenbewusst betreiben: VMs deallokieren, ungenutzte öffentliche IPs entfernen, Disks auf Standard-HDD umstellen"
        ],
        en: [
          "Build the Azure basics: deploy a resource group, VNet, NSG and VMs",
          "Set up a domain controller: Active Directory, DNS, OUs, users and groups",
          "Configure hybrid identity: Entra Connect with password hash sync, including the UPN suffix",
          "Secure Azure Files with AD sign-in (Kerberos) and RBAC, and test the access",
          "Run Azure Virtual Desktop with a domain-joined session host",
          "Solve typical issues myself: public IP in the NSG, DNS in the VNet, vCPU quota, Entra Connect sign-in",
          "Run resources cost-consciously: deallocate VMs, remove unused public IPs, switch disks to Standard HDD"
        ]
      }
    },
    {
      title: { de: "Teil 1: Windows Server in Azure", en: "Part 1: Windows Server in Azure" },
      points: {
        de: [
          "Eigene Ressourcengruppe mit VM, Netzwerkkarte, virtuellem Netzwerk und Netzwerksicherheitsgruppe",
          "VM mit Trusted Launch in einer festen Verfügbarkeitszone",
          "Statische private IP-Adresse, damit Dienste wie DNS und DHCP eine feste Adresse haben",
          "Sicherer Zugriff über Azure Bastion per RDP im Browser, ohne offenen RDP-Port im Internet",
          "Serverrollen AD DS, DNS, DHCP, Datei- und Speicherdienste, Druckdienste und Webserver (IIS) installiert, alle ohne Fehler"
        ],
        en: [
          "A dedicated resource group with the VM, network interface, virtual network and network security group",
          "VM with Trusted Launch in a fixed availability zone",
          "A static private IP address, so services such as DNS and DHCP have a fixed address",
          "Secure access through Azure Bastion with RDP in the browser, without an open RDP port on the internet",
          "Server roles AD DS, DNS, DHCP, File and Storage Services, Print Services and Web Server (IIS) installed, all healthy"
        ]
      }
    },
    {
      title: { de: "Teil 2: Hybride Identität, Azure Files und Azure Virtual Desktop", en: "Part 2: Hybrid identity, Azure Files and Azure Virtual Desktop" },
      points: {
        de: [
          "Domänencontroller mit Windows Server 2025, AD DS und DNS für die Domäne corp.local, statische IP im eigenen Subnetz",
          "Organisationseinheit für die Benutzer, Testbenutzer und eine Sicherheitsgruppe für den Dateizugriff, UPN-Suffix passend zum Tenant",
          "Entra Connect mit Kennwort-Hash-Synchronisierung und OU-Filter, damit nur die gewünschten Benutzer in die Cloud kommen",
          "Azure Files mit Kerberos-Anmeldung über AD DS statt Speicherschlüssel, Rechte über RBAC auf die Sicherheitsgruppe",
          "Zugriffssteuerung getestet: Benutzer in der Gruppe erreichen die Freigabe, Benutzer ausserhalb nicht",
          "Azure Virtual Desktop mit Host Pool, Arbeitsbereich und einem Session Host, der der Domäne beigetreten ist"
        ],
        en: [
          "Domain controller with Windows Server 2025, AD DS and DNS for the corp.local domain, static IP in its own subnet",
          "An organizational unit for users, test users and a security group for file access, UPN suffix matching the tenant",
          "Entra Connect with password hash sync and OU filtering, so only the intended users are synced to the cloud",
          "Azure Files with Kerberos sign-in through AD DS instead of storage keys, permissions via RBAC on the security group",
          "Access control tested: users in the group reach the share, users outside it do not",
          "Azure Virtual Desktop with a host pool, workspace and a domain-joined session host"
        ]
      }
    },
    {
      title: { de: "Fehlersuche, die ich gelöst habe", en: "Troubleshooting I solved" },
      points: {
        de: [
          "Kein Zugriff auf die VM: In der NSG-Regel war eine falsche öffentliche IP freigegeben, Regel auf die richtige Adresse korrigiert",
          "Session Host konnte der Domäne nicht beitreten: DNS des virtuellen Netzwerks auf den Domänencontroller umgestellt, danach klappte der Beitritt",
          "Domänenbeitritt erst im UPN-Format (benutzer@corp.local) akzeptiert",
          "Entra Connect verlangte ein natives Cloud-Administratorkonto des Tenants, angelegt und erfolgreich verbunden",
          "vCPU-Kontingent der Region ausgeschöpft: Ressourcen bereinigt und den Session Host passend dimensioniert"
        ],
        en: [
          "No access to the VM: the NSG rule allowed the wrong public IP, corrected the rule to the right address",
          "The session host could not join the domain: pointed the virtual network's DNS to the domain controller, after which the join succeeded",
          "Domain join only accepted the UPN format (user@corp.local)",
          "Entra Connect required a native cloud admin account of the tenant, created it and connected successfully",
          "Regional vCPU quota reached: cleaned up resources and sized the session host to fit"
        ]
      }
    },
    {
      title: { de: "Nächster Ausbau", en: "Next expansion" },
      points: {
        de: [
          "GPO-Migration nach Intune: bestehende Gruppenrichtlinien mit Group Policy Analytics auswerten und in den Settings Catalog überführen",
          "Hybrid Join der Clients, Intune-Registrierung und Compliance",
          "Vergleich GPO und Intune dokumentieren"
        ],
        en: [
          "GPO migration to Intune: analyze existing group policies with Group Policy Analytics and move them to the Settings Catalog",
          "Hybrid join of the clients, Intune enrollment and compliance",
          "Document the comparison between GPO and Intune"
        ]
      }
    }
  ],
  note: { de: "", en: "" },

  tools: ["Microsoft Azure", "Windows Server 2025", "AD DS", "DNS", "Entra Connect", "Azure Files", "Azure Virtual Desktop", "Azure Bastion", "Group Policy"],

  images: [
    { src: "images/azure-hybrid-lab/01-vm-erstellen.webp", alt: { de: "VM-Erstellung im Azure-Portal", en: "VM creation in the Azure portal" }, caption: { de: "Teil 1: VM mit Verfügbarkeitszone und Trusted Launch", en: "Part 1: VM with availability zone and Trusted Launch" } },
    { src: "images/azure-hybrid-lab/02-deployment.webp", alt: { de: "Abgeschlossenes Deployment mit allen Ressourcen", en: "Completed deployment with all resources" }, caption: { de: "Teil 1: VM, Netzwerkkarte, IP, NSG und VNet bereitgestellt", en: "Part 1: VM, network interface, IP, NSG and VNet provisioned" } },
    { src: "images/azure-hybrid-lab/03-bastion.webp", alt: { de: "Verbindung über Azure Bastion", en: "Connection through Azure Bastion" }, caption: { de: "Teil 1: Zugriff über Azure Bastion per RDP im Browser", en: "Part 1: Access through Azure Bastion with RDP in the browser" } },
    { src: "images/azure-hybrid-lab/04-server-manager.webp", alt: { de: "Server Manager Dashboard", en: "Server Manager dashboard" }, caption: { de: "Teil 1: Server Manager nach der ersten Anmeldung", en: "Part 1: Server Manager after the first sign-in" } },
    { src: "images/azure-hybrid-lab/05-serverrollen.webp", alt: { de: "Assistent zum Hinzufügen von Serverrollen", en: "Add Roles and Features wizard" }, caption: { de: "Teil 1: Serverrollen AD DS, DHCP, DNS, Druckdienste und IIS", en: "Part 1: Server roles AD DS, DHCP, DNS, Print Services and IIS" } },
    { src: "images/azure-hybrid-lab/06-rollen-aktiv.webp", alt: { de: "Alle Rollen im Server Manager aktiv", en: "All roles active in Server Manager" }, caption: { de: "Teil 1: Alle Rollen aktiv und ohne Fehler", en: "Part 1: All roles active and healthy" } }
  ]
});
