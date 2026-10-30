window.PORTFOLIO_PROJECTS.push({
  order: 6,
  status: "done",

  title:    { de: "Windows Server in Azure: VM, Bastion und Serverrollen", en: "Windows Server in Azure: VM, Bastion and server roles" },
  subtitle: { de: "Ein Windows Server in der Cloud, sicher erreichbar ohne offenen RDP-Port.", en: "A Windows server in the cloud, reachable securely without an open RDP port." },
  context:  { de: "Eigenes Lab", en: "Own lab" },
  period:   { de: "August 2025", en: "August 2025" },

  text: {
    de: [
      "Ich habe in Microsoft Azure eine virtuelle Maschine mit Windows Server 2022 aufgebaut und als Infrastrukturserver vorbereitet. Der Zugriff läuft über Azure Bastion direkt im Browser. So steht kein RDP-Port offen im Internet, wie es auch in Firmenumgebungen üblich ist."
    ],
    en: [
      "I built a Windows Server 2022 virtual machine in Microsoft Azure and prepared it as an infrastructure server. Access runs through Azure Bastion directly in the browser, so no RDP port is exposed to the internet, just as in company environments."
    ]
  },
  points: {
    de: [
      "Eigene Ressourcengruppe mit VM, Netzwerkkarte, virtuellem Netzwerk und Netzwerksicherheitsgruppe",
      "VM mit Trusted Launch in einer festen Verfügbarkeitszone, Image Windows Server 2022 Datacenter: Azure Edition",
      "Statische private IP-Adresse für den Server, damit Dienste wie DNS und DHCP eine feste Adresse haben",
      "Sicherer Zugriff über Azure Bastion per RDP im Browser",
      "Serverrollen AD DS, DNS, DHCP, Datei- und Speicherdienste, Druckdienste und Webserver (IIS) installiert, alle Rollen im Server Manager ohne Fehler"
    ],
    en: [
      "A dedicated resource group with the VM, network interface, virtual network and network security group",
      "VM with Trusted Launch in a fixed availability zone, image Windows Server 2022 Datacenter: Azure Edition",
      "A static private IP address for the server, so services such as DNS and DHCP have a fixed address",
      "Secure access through Azure Bastion with RDP in the browser",
      "Server roles AD DS, DNS, DHCP, File and Storage Services, Print Services and Web Server (IIS) installed, all roles healthy in Server Manager"
    ]
  },
  sections: [],
  note: { de: "", en: "" },

  tools: ["Microsoft Azure", "Windows Server 2022", "Azure Bastion", "Virtual Network", "NSG", "Server Manager"],

  images: [
    { src: "images/azure-server-lab/01-vm-erstellen.webp", alt: { de: "VM-Erstellung im Azure-Portal", en: "VM creation in the Azure portal" }, caption: { de: "VM mit Verfügbarkeitszone, Trusted Launch und Windows Server 2022", en: "VM with availability zone, Trusted Launch and Windows Server 2022" } },
    { src: "images/azure-server-lab/02-deployment.webp", alt: { de: "Abgeschlossenes Deployment mit allen Ressourcen", en: "Completed deployment with all resources" }, caption: { de: "Deployment: VM, Netzwerkkarte, IP, NSG und VNet bereitgestellt", en: "Deployment: VM, network interface, IP, NSG and VNet provisioned" } },
    { src: "images/azure-server-lab/03-bastion.webp", alt: { de: "Verbindung über Azure Bastion", en: "Connection through Azure Bastion" }, caption: { de: "Zugriff über Azure Bastion per RDP im Browser", en: "Access through Azure Bastion with RDP in the browser" } },
    { src: "images/azure-server-lab/04-server-manager.webp", alt: { de: "Server Manager Dashboard", en: "Server Manager dashboard" }, caption: { de: "Server Manager nach der ersten Anmeldung", en: "Server Manager after the first sign-in" } },
    { src: "images/azure-server-lab/05-serverrollen.webp", alt: { de: "Assistent zum Hinzufügen von Serverrollen", en: "Add Roles and Features wizard" }, caption: { de: "Auswahl der Serverrollen: AD DS, DHCP, DNS, Druckdienste und IIS", en: "Selecting server roles: AD DS, DHCP, DNS, Print Services and IIS" } },
    { src: "images/azure-server-lab/06-rollen-aktiv.webp", alt: { de: "Alle Rollen im Server Manager aktiv", en: "All roles active in Server Manager" }, caption: { de: "Alle Rollen aktiv und ohne Fehler", en: "All roles active and healthy" } }
  ]
});
