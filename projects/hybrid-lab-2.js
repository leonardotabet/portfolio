window.PORTFOLIO_PROJECTS.push({
  id: "hybrid-lab-2",
  order: 0,
  status: "progress",
  lab: {
    step: 5,
    label: { de: "Aktueller Stand", en: "Current state" },
    thought: {
      de: "Viele Firmen haben ihre Gruppenrichtlinien noch im Active Directory und verwalten Geräte zusätzlich mit Intune. Ich wollte sehen, wie man bestehende GPOs analysiert und gezielt nach Intune holt, statt sie von Hand nachzubauen. Gelernt habe ich: Ein hoher MDM-Wert heisst nicht, dass sich alles migrieren lässt. Credential Guard stand bei 100 %, die Einstellungen sind aber veraltet. Darum prüfe ich pro Einstellung und teste zuerst an einem Pilotgerät.",
      en: "Many companies still keep their group policies in Active Directory and manage devices with Intune as well. I wanted to see how to analyze existing GPOs and move selected settings to Intune instead of rebuilding them by hand. What I learned: a high MDM value does not mean everything can be migrated. Credential Guard showed 100%, but its settings are deprecated. So I check setting by setting and test on a pilot device first."
    }
  },

  title:    { de: "Hybrid Lab 2: Gruppenrichtlinien nach Intune", en: "Hybrid lab 2: group policy to Intune" },
  subtitle: { de: "Eine eigene Domäne mit der Microsoft Security Baseline, deren Einstellungen ich mit Group Policy analytics nach Intune migriert habe.", en: "My own domain with the Microsoft Security Baseline, whose settings I migrated to Intune with Group Policy analytics." },
  context:  { de: "Praxis-Lab zur Migration von Gruppenrichtlinien in die Cloud-Verwaltung", en: "Hands-on lab on moving group policies to cloud management" },
  period:   { de: "November 2026", en: "November 2026" },

  overview: {
    lead: { de: "Ich habe in Hyper-V eine Domäne mit Windows Server 2022 aufgebaut, die Microsoft Security Baseline für Windows 11 26H2 importiert und die Gruppenrichtlinien nach Intune übertragen. Zugewiesen habe ich sie einer Pilotgruppe mit einem Gerät und den Status im Portal geprüft.", en: "I built a domain with Windows Server 2022 in Hyper-V, imported the Microsoft Security Baseline for Windows 11 26H2 and moved the group policies to Intune. I assigned them to a pilot group with one device and checked the status in the portal." },
    facts: [
      { value: "6", label: { de: "Baseline-GPOs analysiert", en: "baseline GPOs analyzed" } },
      { value: "24", label: { de: "Einstellungen nach Intune migriert", en: "settings migrated to Intune" } },
      { value: "2", label: { de: "Settings-Katalog-Profile", en: "Settings catalog profiles" } },
      { value: "1", label: { de: "Pilotgerät mit Status Erfolgreich", en: "pilot device with status Succeeded" } }
    ],
    skills: {
      de: ["Active Directory aufbauen mit PowerShell", "GPOs importieren und exportieren", "Group Policy analytics und Migration", "Settings-Katalog-Profile in Intune", "Pilotgruppe und Zuweisung prüfen"],
      en: ["Building Active Directory with PowerShell", "Importing and exporting GPOs", "Group Policy analytics and migration", "Settings catalog profiles in Intune", "Checking a pilot group and assignment"]
    }
  },
  diagram: {
    "w": 800,
    "h": 390,
    "alt": {
      "de": "Infrastruktur des Hybrid Labs 2: Domänencontroller DC01 mit Baseline-GPOs, Export als XML, Group Policy analytics und Settings-Katalog-Profile in Intune, Zuweisung an eine Pilotgruppe mit einem Windows 11 Gerät",
      "en": "Infrastructure of hybrid lab 2: domain controller DC01 with baseline GPOs, XML export, Group Policy analytics and Settings catalog profiles in Intune, assigned to a pilot group with one Windows 11 device"
    },
    "zones": [
      {
        "x": 20,
        "y": 20,
        "w": 250,
        "h": 350,
        "label": {
          "de": "Hyper-V Host",
          "en": "Hyper-V host"
        },
        "tone": "local"
      },
      {
        "x": 300,
        "y": 20,
        "w": 480,
        "h": 350,
        "label": {
          "de": "Microsoft Intune · Tenant tabetlab",
          "en": "Microsoft Intune · tabetlab tenant"
        },
        "tone": "cloud"
      }
    ],
    "nodes": [
      {
        "id": "dc",
        "x": 40,
        "y": 64,
        "w": 210,
        "kind": "server",
        "title": {
          "de": "DC01",
          "en": "DC01"
        },
        "lines": {
          "de": [
            "Server 2022 · AD DS · DNS",
            "ad.leonardotabet.ch",
            "6 Baseline-GPOs importiert"
          ],
          "en": [
            "Server 2022 · AD DS · DNS",
            "ad.leonardotabet.ch",
            "6 baseline GPOs imported"
          ]
        },
        "details": {
          "de": [
            "Windows Server 2022 Evaluation als VM in Hyper-V",
            "Forest ad.leonardotabet.ch mit Install-ADDSForest, NetBIOS-Name LAB",
            "Eigene Subdomain statt .local, weil .local für mDNS reserviert ist",
            "Microsoft Windows 11 v26H2 Security Baseline per Skript importiert",
            "OU Test-Clients angelegt, die GPOs sind nicht verlinkt und dienen als Quelle für die Analyse"
          ],
          "en": [
            "Windows Server 2022 Evaluation as a VM in Hyper-V",
            "Forest ad.leonardotabet.ch with Install-ADDSForest, NetBIOS name LAB",
            "Own subdomain instead of .local, because .local is reserved for mDNS",
            "Microsoft Windows 11 v26H2 Security Baseline imported with a script",
            "OU Test-Clients created, the GPOs are not linked and serve as the source for the analysis"
          ]
        }
      },
      {
        "id": "cl",
        "x": 40,
        "y": 250,
        "w": 210,
        "kind": "client",
        "title": {
          "de": "WIN11-LAB01",
          "en": "WIN11-LAB01"
        },
        "lines": {
          "de": [
            "Windows 11 26H2",
            "Pilotgerät in Intune"
          ],
          "en": [
            "Windows 11 26H2",
            "Pilot device in Intune"
          ]
        },
        "details": {
          "de": [
            "Windows 11 26H2 als VM, in Entra ID eingebunden und in Intune verwaltet",
            "In Intune als DESKTOP-JRH58VT sichtbar, in Hyper-V heisst die VM WIN11-LAB01",
            "Beide Profile mit Status Erfolgreich"
          ],
          "en": [
            "Windows 11 26H2 as a VM, joined to Entra ID and managed in Intune",
            "Shown in Intune as DESKTOP-JRH58VT, the VM is called WIN11-LAB01 in Hyper-V",
            "Both profiles with status Succeeded"
          ]
        }
      },
      {
        "id": "gpa",
        "x": 320,
        "y": 64,
        "w": 210,
        "kind": "cloud",
        "title": {
          "de": "Group Policy analytics",
          "en": "Group Policy analytics"
        },
        "lines": {
          "de": [
            "XML-Import · MDM-Abdeckung",
            "Migrations-Assistent"
          ],
          "en": [
            "XML import · MDM coverage",
            "Migration wizard"
          ]
        },
        "details": {
          "de": [
            "Sechs GPOs mit Get-GPOReport als XML exportiert",
            "Import in Group Policy analytics, MDM-Abdeckung pro GPO",
            "Computer 91 %, Defender 77 %, BitLocker 85 %, Domain Security 28 %",
            "Credential Guard und User bei 100 %, aber veraltete Einstellungen sind nicht migrierbar"
          ],
          "en": [
            "Six GPOs exported as XML with Get-GPOReport",
            "Import into Group Policy analytics, MDM coverage per GPO",
            "Computer 91%, Defender 77%, BitLocker 85%, Domain Security 28%",
            "Credential Guard and User at 100%, but deprecated settings cannot be migrated"
          ]
        }
      },
      {
        "id": "prof",
        "x": 560,
        "y": 64,
        "w": 200,
        "kind": "shield",
        "title": {
          "de": "Settings-Katalog",
          "en": "Settings catalog"
        },
        "lines": {
          "de": [
            "2 Profile · 24 Einstellungen",
            "Computer · Defender"
          ],
          "en": [
            "2 profiles · 24 settings",
            "Computer · Defender"
          ]
        },
        "details": {
          "de": [
            "Hybrid Lab2 Baseline Pilot Computer: 19 von 148 Einstellungen",
            "Hybrid Lab2 Baseline Pilot Defender: 5 von 18 Einstellungen",
            "Nicht unterstützte Einstellungen sind im Assistenten gesperrt"
          ],
          "en": [
            "Hybrid Lab2 Baseline Pilot Computer: 19 of 148 settings",
            "Hybrid Lab2 Baseline Pilot Defender: 5 of 18 settings",
            "Unsupported settings are locked in the wizard"
          ]
        }
      },
      {
        "id": "grp",
        "x": 320,
        "y": 250,
        "w": 210,
        "kind": "user",
        "title": {
          "de": "Lab-Pilot-Clients",
          "en": "Lab-Pilot-Clients"
        },
        "lines": {
          "de": [
            "Entra Sicherheitsgruppe",
            "1 Gerät"
          ],
          "en": [
            "Entra security group",
            "1 device"
          ]
        },
        "details": {
          "de": [
            "Sicherheitsgruppe mit festen Mitgliedern",
            "Beide Profile nur dieser Gruppe zugewiesen",
            "Neue Richtlinien treffen zuerst nur das Pilotgerät"
          ],
          "en": [
            "Security group with assigned members",
            "Both profiles assigned to this group only",
            "New policies hit only the pilot device first"
          ]
        }
      }
    ],
    "links": [
      {
        "from": "dc",
        "to": "gpa",
        "label": {
          "de": "XML-Export",
          "en": "XML export"
        },
        "fs": "r",
        "ts": "l"
      },
      {
        "from": "gpa",
        "to": "prof",
        "label": {
          "de": "Migration",
          "en": "Migration"
        },
        "fs": "r",
        "ts": "l"
      },
      {
        "from": "prof",
        "to": "grp",
        "label": {
          "de": "Zuweisung",
          "en": "Assignment"
        },
        "fs": "b",
        "ts": "r"
      },
      {
        "from": "grp",
        "to": "cl",
        "label": {
          "de": "Richtlinien",
          "en": "Policies"
        },
        "fs": "l",
        "ts": "r"
      }
    ]
  },
  text: {
    de: ["Dieses Lab baut auf dem Entra ID und Intune Lab auf. Dort gab es nur die Cloud-Seite. Hier kommt die Domäne dazu: ein Domänencontroller mit der Microsoft Security Baseline, deren Gruppenrichtlinien ich analysiere und in Intune als Settings-Katalog-Profile übernehme.", "Ein Gerät testet die Profile zuerst. So sehe ich, was sich übertragen lässt und was nicht, bevor eine Richtlinie viele Geräte trifft."],
    en: ["This lab builds on the Entra ID and Intune lab, which only had the cloud side. Here the domain is added: a domain controller with the Microsoft Security Baseline, whose group policies I analyze and take over into Intune as Settings catalog profiles.", "One device tests the profiles first. That shows me what can be transferred and what cannot, before a policy reaches many devices."]
  },
  points: {
    de: [
      "Windows Server 2022 als VM in Hyper-V, Domäne ad.leonardotabet.ch mit Install-ADDSForest",
      "Microsoft Windows 11 v26H2 Security Baseline per Skript in die Domäne importiert, sechs GPOs",
      "GPOs mit Get-GPOReport als XML exportiert und in Group Policy analytics importiert",
      "Zwei Profile im Settings-Katalog: Computer mit 19 und Defender mit 5 Einstellungen",
      "Zuweisung an eine Entra Gruppe mit einem Pilotgerät, beide Profile mit Status Erfolgreich"
    ],
    en: [
      "Windows Server 2022 as a VM in Hyper-V, domain ad.leonardotabet.ch with Install-ADDSForest",
      "Microsoft Windows 11 v26H2 Security Baseline imported into the domain with a script, six GPOs",
      "GPOs exported as XML with Get-GPOReport and imported into Group Policy analytics",
      "Two Settings catalog profiles: Computer with 19 and Defender with 5 settings",
      "Assigned to an Entra group with one pilot device, both profiles with status Succeeded"
    ]
  },

  sections: [
    {
      title: { de: "Teil 1: Domäne und Baseline", en: "Part 1: Domain and baseline" },
      points: {
        de: [
          "Domänencontroller DC01 mit Windows Server 2022, AD DS und DNS in einem Schritt mit Install-ADDSForest",
          "Eigene Subdomain ad.leonardotabet.ch statt .local, weil .local für mDNS reserviert ist",
          "Die Warnung zur DNS-Delegierung gehört zu diesem Aufbau: die übergeordnete Zone läuft nicht auf Windows DNS",
          "Security Compliance Toolkit mit der Windows 11 v26H2 Security Baseline v2 geladen: Documentation, GP Reports, GPOs, Scripts und Templates",
          "Baseline-ADImport.ps1 aus dem Ordner Scripts gestartet, weil die Pfade im Skript relativ sind",
          "Ergebnis in der Gruppenrichtlinienverwaltung: sechs MSFT-GPOs für BitLocker, Computer, Credential Guard, Defender Antivirus, Domain Security und User",
          "Organisationseinheit Test-Clients angelegt, die GPOs sind nicht verlinkt und dienen als Quelle für die Analyse"
        ],
        en: [
          "Domain controller DC01 with Windows Server 2022, AD DS and DNS in one step with Install-ADDSForest",
          "Own subdomain ad.leonardotabet.ch instead of .local, because .local is reserved for mDNS",
          "The DNS delegation warning is expected here: the parent zone does not run on Windows DNS",
          "Security Compliance Toolkit with the Windows 11 v26H2 Security Baseline v2 downloaded: Documentation, GP Reports, GPOs, Scripts and Templates",
          "Started Baseline-ADImport.ps1 from the Scripts folder, because the paths in the script are relative",
          "Result in Group Policy Management: six MSFT GPOs for BitLocker, Computer, Credential Guard, Defender Antivirus, Domain Security and User",
          "Created the organizational unit Test-Clients; the GPOs are not linked and serve as the source for the analysis"
        ]
      }
    },
    {
      title: { de: "Teil 2: Export und Analyse", en: "Part 2: Export and analysis" },
      points: {
        de: [
          "Alle sechs GPOs mit Get-GPO und Get-GPOReport als XML nach C:\\GPO exportiert, Computer ist mit 265 KB der grösste Bericht",
          "Import der XML-Dateien in Intune unter Geräte, Windows, Group Policy analytics",
          "MDM-Abdeckung pro GPO: Credential Guard 100 %, User 100 %, Computer 91 %, BitLocker 85 %, Defender Antivirus 77 %, Domain Security 28 %",
          "Targeted in AD steht bei allen auf Nein, weil die GPOs nicht verlinkt sind",
          "Domain Security mit 28 % nicht migriert"
        ],
        en: [
          "Exported all six GPOs as XML to C:\\GPO with Get-GPO and Get-GPOReport; Computer is the largest report at 265 KB",
          "Imported the XML files into Intune under Devices, Windows, Group Policy analytics",
          "MDM coverage per GPO: Credential Guard 100%, User 100%, Computer 91%, BitLocker 85%, Defender Antivirus 77%, Domain Security 28%",
          "Targeted in AD shows No for all of them, because the GPOs are not linked",
          "Domain Security at 28% not migrated"
        ]
      }
    },
    {
      title: { de: "Teil 3: Migration und Pilotgruppe", en: "Part 3: Migration and pilot group" },
      points: {
        de: [
          "Entra Sicherheitsgruppe Lab-Pilot-Clients mit einem Gerät: Windows 11 26H2 als VM, in Intune sichtbar als DESKTOP-JRH58VT, in Hyper-V WIN11-LAB01",
          "Credential Guard: die Einstellungen zu Virtualization Based Security sind als Deprecated markiert und im Assistenten nicht wählbar, trotz 100 %",
          "Computer: 19 von 148 Einstellungen gewählt, darunter Audit-Richtlinien, Basic Authentication und unverschlüsselter Datenverkehr deaktiviert",
          "Defender Antivirus: 5 von 18 Einstellungen gewählt, darunter Echtzeitschutz, Verhaltensüberwachung und Block at First Sight",
          "Einstellungen ohne MDM-Unterstützung bleiben im Assistenten ausgegraut und gehen nicht in das Profil",
          "Profile Hybrid Lab2 Baseline Pilot Computer und Hybrid Lab2 Baseline Pilot Defender, beide nur der Gruppe Lab-Pilot-Clients zugewiesen",
          "Status auf dem Gerät: beide Profile Erfolgreich, ebenso das bestehende Profil WIN-Edge-Basics"
        ],
        en: [
          "Entra security group Lab-Pilot-Clients with one device: Windows 11 26H2 as a VM, shown in Intune as DESKTOP-JRH58VT, called WIN11-LAB01 in Hyper-V",
          "Credential Guard: the Virtualization Based Security settings are marked Deprecated and cannot be selected in the wizard, despite 100%",
          "Computer: 19 of 148 settings selected, including audit policies, Basic authentication and unencrypted traffic disabled",
          "Defender Antivirus: 5 of 18 settings selected, including real-time protection, behavior monitoring and Block at First Sight",
          "Settings without MDM support stay greyed out in the wizard and do not go into the profile",
          "Profiles Hybrid Lab2 Baseline Pilot Computer and Hybrid Lab2 Baseline Pilot Defender, both assigned only to the group Lab-Pilot-Clients",
          "Status on the device: both profiles Succeeded, as well as the existing profile WIN-Edge-Basics"
        ]
      }
    },
    {
      title: { de: "Meine Learnings", en: "My learnings" },
      points: {
        de: [
          "Group Policy analytics zeigt, wie viel sich übertragen lässt, bevor ich etwas im Tenant ändere. Den Prozentwert lese ich als Hinweis und öffne danach die einzelnen Einstellungen.",
          "100 % heisst nicht automatisch migrierbar: bei Credential Guard waren die Einstellungen veraltet. Nach Deprecated und Nein im Assistenten schaue ich, bevor ich ein Profil plane.",
          "Ich übertrage nur eine Auswahl, nicht die ganze Baseline. So bleibt jedes Profil überschaubar und ich weiss, was auf dem Gerät ankommt.",
          "Neue Profile gehen zuerst an eine Pilotgruppe mit einem Gerät. Erst wenn der Status stimmt, würde ich die Gruppe erweitern.",
          "Der Gerätename in Intune stammt aus Windows, nicht aus Hyper-V. Bei der Gruppenzuweisung suche ich darum nach dem Windows-Namen."
        ],
        en: [
          "Group Policy analytics shows how much can be transferred before I change anything in the tenant. I read the percentage as a hint and then open the individual settings.",
          "100% does not automatically mean migratable: the Credential Guard settings were deprecated. I look for Deprecated and No in the wizard before I plan a profile.",
          "I transfer a selection, not the whole baseline. That keeps each profile manageable and I know what arrives on the device.",
          "New profiles go to a pilot group with one device first. Only when the status is right would I extend the group.",
          "The device name in Intune comes from Windows, not from Hyper-V. For the group assignment I therefore search for the Windows name."
        ]
      }
    },
    {
      title: { de: "Fehlersuche, die ich gelöst habe", en: "Troubleshooting I solved" },
      points: {
        de: [
          "Server-VM startete nicht vom Installationsmedium: Bootreihenfolge in der Firmware der Gen 2 VM angepasst",
          "Die Meldung „Press any key to boot from CD or DVD“ kam zu schnell: die Taste per CIM-Skript an die laufende VM gesendet, so wie schon beim Client"
        ],
        en: [
          "The server VM did not boot from the installation media: adjusted the boot order in the firmware of the Gen 2 VM",
          "The message “Press any key to boot from CD or DVD” came too fast: sent the key to the running VM with a CIM script, as I had done for the client"
        ]
      }
    }
  ],
  note: {
    de: "Das Lab läuft weiter. Als Nächstes folgt Entra Connect mit Kennwort-Hash-Synchronisierung, damit ein Benutzer aus dem Active Directory auch in Entra ID erscheint. Bis dahin ist der Client nur in Entra ID eingebunden und kein Mitglied der Domäne, DC01 liefert die Richtlinien als Quelle für die Analyse.",
    en: "The lab continues. Next is Entra Connect with password hash sync, so that a user from Active Directory also appears in Entra ID. Until then the client is only joined to Entra ID and not a member of the domain; DC01 provides the policies as the source for the analysis."
  },

  tools: ["Hyper-V", "Windows Server 2022", "AD DS", "DNS", "Group Policy", "PowerShell", "Security Compliance Toolkit", "Intune", "Group Policy analytics", "Settings catalog", "Entra ID"],

  images: [
    { src: "images/hybrid-lab-2/01-forest-install.webp", alt: { de: "PowerShell mit Install-ADDSForest bei der Installation der neuen Gesamtstruktur", en: "PowerShell running Install-ADDSForest while installing the new forest" }, caption: { de: "Teil 1: Install-ADDSForest legt die Domäne an", en: "Part 1: Install-ADDSForest creates the domain" } },
    { src: "images/hybrid-lab-2/02-aduc.webp", alt: { de: "Active Directory Benutzer und Computer mit der Domäne ad.leonardotabet.ch und DC01 unter Domain Controllers", en: "Active Directory Users and Computers with the domain ad.leonardotabet.ch and DC01 under Domain Controllers" }, caption: { de: "Teil 1: Domäne ad.leonardotabet.ch mit DC01 als Domänencontroller", en: "Part 1: Domain ad.leonardotabet.ch with DC01 as domain controller" } },
    { src: "images/hybrid-lab-2/03-baseline-ordner.webp", alt: { de: "Entpackte Security Baseline mit den Ordnern Documentation, GP Reports, GPOs, Scripts und Templates", en: "Extracted security baseline with the folders Documentation, GP Reports, GPOs, Scripts and Templates" }, caption: { de: "Teil 1: Windows 11 v26H2 Security Baseline v2 aus dem Security Compliance Toolkit", en: "Part 1: Windows 11 v26H2 Security Baseline v2 from the Security Compliance Toolkit" } },
    { src: "images/hybrid-lab-2/04-import-skript.webp", alt: { de: "PowerShell ISE mit dem Skript Baseline-ADImport.ps1", en: "PowerShell ISE with the script Baseline-ADImport.ps1" }, caption: { de: "Teil 1: Baseline-ADImport.ps1 importiert alle GPOs mit Import-GPO", en: "Part 1: Baseline-ADImport.ps1 imports all GPOs with Import-GPO" } },
    { src: "images/hybrid-lab-2/05-gpmc-gpos.webp", alt: { de: "Gruppenrichtlinienverwaltung mit den importierten MSFT Windows 11 26H2 GPOs", en: "Group Policy Management with the imported MSFT Windows 11 26H2 GPOs" }, caption: { de: "Teil 1: Sechs MSFT-GPOs in der Gruppenrichtlinienverwaltung", en: "Part 1: Six MSFT GPOs in Group Policy Management" } },
    { src: "images/hybrid-lab-2/06-gpo-export.webp", alt: { de: "PowerShell mit dem Export der GPOs als XML und der Dateigrösse in KB", en: "PowerShell with the export of the GPOs as XML and the file size in KB" }, caption: { de: "Teil 2: Export der sechs GPOs als XML mit Get-GPOReport", en: "Part 2: Export of the six GPOs as XML with Get-GPOReport" } },
    { src: "images/hybrid-lab-2/08-gpa-analyse.webp", alt: { de: "Group Policy analytics in Intune mit der MDM-Abdeckung der sechs GPOs", en: "Group Policy analytics in Intune with the MDM coverage of the six GPOs" }, caption: { de: "Teil 2: MDM-Abdeckung pro GPO in Group Policy analytics", en: "Part 2: MDM coverage per GPO in Group Policy analytics" } },
    { src: "images/hybrid-lab-2/07-entra-gruppe.webp", alt: { de: "Neue Sicherheitsgruppe Lab-Pilot-Clients im Entra Admin Center", en: "New security group Lab-Pilot-Clients in the Entra admin center" }, caption: { de: "Teil 3: Sicherheitsgruppe Lab-Pilot-Clients für das Pilotgerät", en: "Part 3: Security group Lab-Pilot-Clients for the pilot device" } },
    { src: "images/hybrid-lab-2/09-migration-deprecated.webp", alt: { de: "Migrations-Assistent mit sieben Einstellungen, fünf davon als Deprecated markiert", en: "Migration wizard with seven settings, five of them marked Deprecated" }, caption: { de: "Teil 3: Credential Guard hat 100 %, die Einstellungen sind aber Deprecated", en: "Part 3: Credential Guard shows 100%, but the settings are Deprecated" } },
    { src: "images/hybrid-lab-2/10-migration-computer.webp", alt: { de: "Migrations-Assistent: 19 von 148 Einstellungen der Computer-GPO ausgewählt", en: "Migration wizard: 19 of 148 settings of the Computer GPO selected" }, caption: { de: "Teil 3: Computer-GPO, 19 von 148 Einstellungen ausgewählt", en: "Part 3: Computer GPO, 19 of 148 settings selected" } },
    { src: "images/hybrid-lab-2/11-migration-defender.webp", alt: { de: "Migrations-Assistent: 5 von 18 Einstellungen der Defender-GPO ausgewählt", en: "Migration wizard: 5 of 18 settings of the Defender GPO selected" }, caption: { de: "Teil 3: Defender-GPO, 5 von 18 Einstellungen ausgewählt", en: "Part 3: Defender GPO, 5 of 18 settings selected" } },
    { src: "images/hybrid-lab-2/12-zuweisung-erfolg.webp", alt: { de: "Zuweisungsstatus des Profils Hybrid Lab2 Baseline Pilot Computer mit einem Gerät auf Erfolg", en: "Assignment status of the profile Hybrid Lab2 Baseline Pilot Computer with one device on success" }, caption: { de: "Teil 3: Profil Computer, ein Gerät mit Zuweisungsstatus Erfolg", en: "Part 3: Computer profile, one device with assignment status Success" } },
    { src: "images/hybrid-lab-2/13-geraet-konfiguration.webp", alt: { de: "Gerätekonfiguration von DESKTOP-JRH58VT mit drei Profilen im Status Succeeded", en: "Device configuration of DESKTOP-JRH58VT with three profiles in status Succeeded" }, caption: { de: "Teil 3: Beide neuen Profile und WIN-Edge-Basics auf dem Gerät erfolgreich", en: "Part 3: Both new profiles and WIN-Edge-Basics succeeded on the device" } }
  ]
});
