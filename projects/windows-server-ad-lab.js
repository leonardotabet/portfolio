window.PORTFOLIO_PROJECTS.push({
  id: "windows-server-ad-lab",
  order: 2,
  status: "done",

  title:    { de: "Windows-Server-Infrastruktur: AD DS, DNS, DHCP und GPO", en: "Windows Server infrastructure: AD DS, DNS, DHCP and GPO" },
  subtitle: { de: "Eine komplette Domäne von Grund auf, weitgehend per PowerShell aufgebaut.", en: "A complete domain built from scratch, largely with PowerShell." },
  context:  { de: "Praxis-Lab im Diplomlehrgang ICT System Engineer (SIW)", en: "Hands-on lab in the ICT System Engineer diploma program (SIW)" },
  period:   { de: "Oktober 2026", en: "October 2026" },

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
