window.PORTFOLIO_PROJECTS.push({
  id: "azure-hybrid-lab",
  order: 4,
  status: "done",
  lab: {
    step: 1,
    label: { de: "Start", en: "Start" },
    thought: {
      de: "Viele Schweizer KMU arbeiten hybrid: Active Directory im Haus, Microsoft 365 in der Cloud. Ich wollte verstehen, wie ein Benutzer mit einem Passwort vom AD bis in die Cloud kommt. Darum Entra Connect mit Kennwort-Hash-Synchronisierung und OU-Filter, damit nur die gewünschten Konten synchronisieren. Für die Dateifreigabe habe ich Kerberos statt Speicherschlüssel gewählt, weil die Rechte so an Gruppen hängen und nicht an einem geteilten Schlüssel.",
      en: "Many Swiss SMEs work hybrid: Active Directory on site, Microsoft 365 in the cloud. I wanted to understand how one user with one password gets from AD into the cloud. So I chose Entra Connect with password hash sync and an OU filter, so only the intended accounts sync. For the file share I chose Kerberos instead of a storage key, because access then follows groups, not a shared key."
    }
  },

  title:    { de: "Azure Hybrid Lab", en: "Azure hybrid lab" },
  subtitle: { de: "Active Directory in Azure, synchronisiert mit Entra ID, mit Dateifreigabe und virtuellen Desktops.", en: "Active Directory in Azure, synced with Entra ID, with a file share and virtual desktops." },
  context:  { de: "Praxisprojekt Cloud Engineering mit Microsoft Azure", en: "Hands-on cloud engineering project with Microsoft Azure" },
  period:   { de: "2025 bis 2026", en: "2025 to 2026" },

  overview: {
    lead: { de: "Ich habe in Azure selbständig eine hybride Umgebung geplant und aufgebaut: Domänencontroller, Synchronisierung mit Entra ID, Dateifreigabe mit AD-Anmeldung und virtuelle Desktops, und jeden Zugriff mit Testbenutzern geprüft.", en: "I planned and built a hybrid environment in Azure on my own: domain controller, sync with Entra ID, a file share with AD sign-in and virtual desktops, and checked every access with test users." },
    facts: [
      { value: "1", label: { de: "Domäne corp.local in Azure", en: "corp.local domain in Azure" } },
      { value: "3", label: { de: "Testbenutzer synchronisiert", en: "test users synced" } },
      { value: "1", label: { de: "Session Host in der Domäne", en: "domain-joined session host" } },
      { value: "5", label: { de: "Fehlerfälle selbst gelöst", en: "issues solved myself" } }
    ],
    skills: {
      de: ["Hybride Identität mit Entra Connect", "Azure Grundlagen: VNet, NSG, VMs", "Azure Files und Virtual Desktop", "Active Directory und DNS", "Typische Fehler selbst lösen"],
      en: ["Hybrid identity with Entra Connect", "Azure basics: VNet, NSG, VMs", "Azure Files and Virtual Desktop", "Active Directory and DNS", "Solving typical issues myself"]
    }
  },
  diagram: {
    "w": 800,
    "h": 360,
    "alt": {
      "de": "Infrastruktur des Azure Hybrid Labs: Ressourcengruppe rg-hybridlab mit NSG, Domänencontroller, Azure Files und Azure Virtual Desktop, synchronisiert mit Entra ID, getestet mit drei Benutzern",
      "en": "Infrastructure of the Azure hybrid lab: resource group rg-hybridlab with NSG, domain controller, Azure Files and Azure Virtual Desktop, synced with Entra ID, tested with three users"
    },
    "zones": [
      {
        "x": 20,
        "y": 20,
        "w": 530,
        "h": 320,
        "label": {
          "de": "Azure · rg-hybridlab · vnet-hybridlab",
          "en": "Azure · rg-hybridlab · vnet-hybridlab"
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
        "id": "nsg",
        "x": 40,
        "y": 60,
        "w": 190,
        "kind": "shield",
        "title": {
          "de": "NSG · nsg-dc",
          "en": "NSG · nsg-dc"
        },
        "lines": {
          "de": [
            "RDP nur von meiner IP",
            "Regeln für RDP und SMB"
          ],
          "en": [
            "RDP only from my IP",
            "Rules for RDP and SMB"
          ]
        },
        "details": {
          "de": [
            "Netzwerksicherheitsgruppe nsg-dc vor dem Domänencontroller",
            "RDP nur von meiner eigenen öffentlichen IP-Adresse erlaubt",
            "Fehler gelöst: falsche IP in der Regel korrigiert"
          ],
          "en": [
            "Network security group nsg-dc in front of the domain controller",
            "RDP allowed only from my own public IP address",
            "Issue solved: corrected the wrong IP in the rule"
          ]
        }
      },
      {
        "id": "dc",
        "x": 270,
        "y": 60,
        "w": 260,
        "kind": "server",
        "title": {
          "de": "vm-dc01 · Server 2025",
          "en": "vm-dc01 · Server 2025"
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
            "vm-dc01 mit Windows Server 2025 in West Europe",
            "AD DS und DNS für die Domäne corp.local, statische IP im Subnetz snet-dc",
            "OU mit den Testbenutzern und einer Sicherheitsgruppe für den Dateizugriff",
            "UPN-Suffix passend zum Tenant",
            "Entra Connect mit Kennwort-Hash-Synchronisierung und OU-Filter"
          ],
          "en": [
            "vm-dc01 with Windows Server 2025 in West Europe",
            "AD DS and DNS for the corp.local domain, static IP in the snet-dc subnet",
            "OU with the test users and a security group for file access",
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
            "share-corp · Kerberos",
            "RBAC und NTFS"
          ],
          "en": [
            "share-corp · Kerberos",
            "RBAC and NTFS"
          ]
        },
        "details": {
          "de": [
            "Storage Account mit der Dateifreigabe share-corp",
            "Anmeldung per Kerberos über AD DS statt Speicherschlüssel",
            "Rechte über RBAC und NTFS auf die Sicherheitsgruppe",
            "Test: Alice verbindet die Freigabe und legt Dateien an, Charlie wird abgewiesen"
          ],
          "en": [
            "Storage account with the file share share-corp",
            "Sign-in with Kerberos through AD DS instead of storage keys",
            "Permissions via RBAC and NTFS on the security group",
            "Test: Alice maps the share and creates files, Charlie is denied"
          ]
        }
      },
      {
        "id": "avd",
        "x": 270,
        "y": 250,
        "w": 260,
        "kind": "client",
        "title": {
          "de": "Azure Virtual Desktop",
          "en": "Azure Virtual Desktop"
        },
        "lines": {
          "de": [
            "hp-lab · ws-lab",
            "sh-lab-0 in der Domäne"
          ],
          "en": [
            "hp-lab · ws-lab",
            "sh-lab-0 joined to the domain"
          ]
        },
        "details": {
          "de": [
            "Host Pool hp-lab (Pooled)",
            "Desktop-Anwendungsgruppe für Alice und Bob",
            "Arbeitsbereich ws-lab für den Web Client",
            "Session Host sh-lab-0: Windows 11 Enterprise Multi-Session, in der Domäne corp.local",
            "Fehler gelöst: DNS des VNet auf den Domänencontroller gestellt, damit der Beitritt klappt"
          ],
          "en": [
            "Host pool hp-lab (pooled)",
            "Desktop application group for Alice and Bob",
            "Workspace ws-lab for the web client",
            "Session host sh-lab-0: Windows 11 Enterprise multi-session, joined to corp.local",
            "Issue solved: pointed the VNet DNS to the domain controller so the join works"
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
            "Alice, Bob und Charlie aus dem AD synchronisiert",
            "Ein Konto und ein Passwort für AD und Cloud",
            "Eigenes Cloud-Administratorkonto für Entra Connect"
          ],
          "en": [
            "Alice, Bob and Charlie synced from AD",
            "One account and one password for AD and cloud",
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
          "de": "Testbenutzer",
          "en": "Test users"
        },
        "lines": {
          "de": [
            "Alice · Bob · Charlie"
          ],
          "en": [
            "Alice · Bob · Charlie"
          ]
        },
        "details": {
          "de": [
            "Alice: Zugriff auf Freigabe und virtuellen Desktop",
            "Bob: Zugriff auf den virtuellen Desktop",
            "Charlie: bewusst ohne Zugriff, als Gegenprobe",
            "Anmeldung über den AVD Web Client getestet"
          ],
          "en": [
            "Alice: access to the share and the virtual desktop",
            "Bob: access to the virtual desktop",
            "Charlie: deliberately without access, as a counter test",
            "Sign-in through the AVD web client tested"
          ]
        }
      }
    ],
    "links": [
      {
        "from": "nsg",
        "to": "dc",
        "label": {
          "de": "RDP",
          "en": "RDP"
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
      "Für den Einstieg ins Cloud Engineering habe ich eine hybride Microsoft-Umgebung in Azure selbständig geplant, aufgebaut und dokumentiert, wie sie viele Schweizer KMU nutzen: ein Domänencontroller mit Active Directory, synchronisiert mit Entra ID, dazu eine Dateifreigabe mit AD-Anmeldung und virtuelle Desktops. Mit drei Testbenutzern habe ich geprüft, dass jeder genau die Zugriffe hat, die er haben soll. Das Ergebnis ist eine hybride Identität von Ende zu Ende: ein Benutzer, ein Passwort, vom Active Directory bis in die Cloud."
    ],
    en: [
      "As my start in cloud engineering I planned, built and documented a hybrid Microsoft environment in Azure on my own, like the ones many Swiss SMEs run: a domain controller with Active Directory synced to Entra ID, plus a file share with AD sign-in and virtual desktops. With three test users I checked that everyone has exactly the access they should have. The result is an end-to-end hybrid identity: one user, one password, from Active Directory to the cloud."
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
          "Ressourcengruppe rg-hybridlab mit VNet, Subnetz und NSG in West Europe, RDP nur von meiner eigenen IP-Adresse",
          "Domänencontroller vm-dc01 mit Windows Server 2025, AD DS und DNS für die Domäne corp.local, statische IP im eigenen Subnetz",
          "Organisationseinheit mit den Testbenutzern Alice, Bob und Charlie und einer Sicherheitsgruppe für den Dateizugriff, UPN-Suffix passend zum Tenant",
          "Entra Connect mit Kennwort-Hash-Synchronisierung und OU-Filter, damit nur die gewünschten Benutzer in die Cloud kommen",
          "Azure Files Freigabe share-corp mit Kerberos-Anmeldung über AD DS statt Speicherschlüssel, Rechte über RBAC und NTFS auf die Sicherheitsgruppe",
          "Zugriffssteuerung getestet: Alice verbindet die Freigabe ohne Speicherschlüssel und legt Dateien an, Charlie erhält bewusst keinen Zugriff",
          "Azure Virtual Desktop: Host Pool hp-lab (Pooled), Desktop-Anwendungsgruppe für Alice und Bob, Arbeitsbereich ws-lab und Session Host sh-lab-0 mit Windows 11 Enterprise Multi-Session in der Domäne",
          "Anmeldung über den AVD Web Client mit dem synchronisierten Konto getestet"
        ],
        en: [
          "Resource group rg-hybridlab with VNet, subnet and NSG in West Europe, RDP only from my own IP address",
          "Domain controller vm-dc01 with Windows Server 2025, AD DS and DNS for the corp.local domain, static IP in its own subnet",
          "An organizational unit with the test users Alice, Bob and Charlie and a security group for file access, UPN suffix matching the tenant",
          "Entra Connect with password hash sync and OU filtering, so only the intended users are synced to the cloud",
          "Azure Files share share-corp with Kerberos sign-in through AD DS instead of storage keys, permissions via RBAC and NTFS on the security group",
          "Access control tested: Alice maps the share without a storage key and creates files, Charlie deliberately gets no access",
          "Azure Virtual Desktop: host pool hp-lab (pooled), desktop application group for Alice and Bob, workspace ws-lab and session host sh-lab-0 with Windows 11 Enterprise multi-session joined to the domain",
          "Sign-in through the AVD web client with the synced account tested"
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
