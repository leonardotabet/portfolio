# Builds the infrastructure diagrams and writes them into projects/*.js (key "diagram").
# Run: python3 tools/diagrams.py
import json, re, os
def L(de, en=None): return {"de": de, "en": en if en is not None else de}
def LL(de, en): return {"de": de, "en": en}
def Z(x,y,w,h,label,tone): return {"x":x,"y":y,"w":w,"h":h,"label":label,"tone":tone}
def N(id,x,y,w,kind,title,lines=None):
    n={"id":id,"x":x,"y":y,"w":w,"kind":kind,"title":title}
    if lines: n["lines"]=lines
    return n
def K(a,b,label=None,**kw):
    d={"from":a,"to":b}
    if label: d["label"]=label
    d.update(kw); return d

D={}

D["m365-support-lab"]={"w":800,"h":400,
 "alt":LL("Infrastruktur des Microsoft 365 Labs: Hyper-V VM, Microsoft 365 Tenant mit Entra ID, Intune und Exchange, Jira Service Desk","Infrastructure of the Microsoft 365 lab: Hyper-V VM, Microsoft 365 tenant with Entra ID, Intune and Exchange, Jira service desk"),
 "zones":[Z(20,20,220,210,LL("Hyper-V Host","Hyper-V host"),"local"),
          Z(270,20,290,360,L("Microsoft 365 Tenant"),"cloud"),
          Z(590,20,190,360,L("Service Desk"),"corp")],
 "nodes":[N("vm",40,58,180,"client",L("WIN11-LAB01"),LL(["Windows 11 Enterprise","vTPM · Checkpoints"],["Windows 11 Enterprise","vTPM · checkpoints"])),
          N("admin",40,290,180,"user",L("IT-Admin"),LL(["Admin Center · PowerShell"],["Admin centers · PowerShell"])),
          N("entra",290,58,240,"cloud",L("Entra ID"),LL(["Benutzer · dynamische Gruppen","MFA · SSPR · Conditional Access"],["Users · dynamic groups","MFA · SSPR · Conditional Access"])),
          N("intune",290,168,240,"shield",L("Intune"),LL(["Compliance · Konfiguration","Registrierung · Firmengerät"],["Compliance · configuration","Enrollment · corporate device"])),
          N("exo",290,278,240,"cloud",L("Exchange Online · Teams"),LL(["Postfächer · Shared Mailbox","Lizenzen über Gruppen"],["Mailboxes · shared mailbox","Licenses through groups"])),
          N("users",600,58,165,"user",LL("Mitarbeitende","Employees"),LL(["5 Testbenutzer"],["5 test users"])),
          N("jira",600,200,165,"app",L("Jira"),LL(["Service Management","Tickets · Queues · KB"],["Service Management","Tickets · queues · KB"]))],
 "links":[K("vm","entra",LL("Entra Join","Entra join"),fs="r",ts="l",fo=-10,to_=-10),
          K("vm","intune",LL("MDM-Registrierung","MDM enrollment"),fs="r",ts="l",fo=14,to_=-12,mx=255),
          K("admin","intune",LL("verwaltet","manages"),fs="r",ts="l",to_=14,mx=255),
          K("intune","entra",LL("Compliance für CA","Compliance for CA"),fs="t",ts="b"),
          K("users","entra",LL("Anmeldung + MFA","Sign-in + MFA"),fs="l",ts="r",fo=-6,to_=-12),
          K("users","jira",L("Ticket"),fs="b",ts="t"),
          K("jira","intune",LL("Support-Fall","Support case"),fs="l",ts="r",fo=6,to_=8)]}

D["windows-server-ad-lab"]={"w":800,"h":390,
 "alt":LL("Infrastruktur der Windows-Domäne: OPNsense Firewall, Domänencontroller DC01 und zwei Windows-Clients","Infrastructure of the Windows domain: OPNsense firewall, domain controller DC01 and two Windows clients"),
 "zones":[Z(20,96,760,280,LL("Lab-Netzwerk · Domäne siw.local","Lab network · siw.local domain"),"local")],
 "nodes":[N("inet",40,24,170,"cloud",L("Internet")),
          N("fw",40,190,170,"shield",L("OPNsense"),LL(["Firewall · Gateway","DHCP deaktiviert"],["Firewall · gateway","DHCP disabled"])),
          N("dc",280,168,240,"server",L("DC01 · Windows Server"),LL(["AD DS · DNS · DHCP","Gruppenrichtlinien","OUs: Benutzer · Computer · Gruppen"],["AD DS · DNS · DHCP","Group policies","OUs: users · computers · groups"])),
          N("c1",590,136,170,"client",L("Client 1"),LL(["Windows · Domänenmitglied"],["Windows · domain member"])),
          N("c2",590,270,170,"client",L("Client 2"),LL(["Windows · Domänenmitglied"],["Windows · domain member"]))],
 "links":[K("fw","inet",None,fs="t",ts="b"),
          K("dc","fw",L("Gateway"),fs="l",ts="r",to_=0,fo=-6),
          K("dc","c1",LL("DHCP · DNS","DHCP · DNS"),fs="r",ts="l",fo=-16),
          K("dc","c2",LL("Anmeldung · GPO","Sign-in · GPO"),fs="r",ts="l",fo=16)]}

D["azure-hybrid-lab"]={"w":800,"h":400,
 "alt":LL("Infrastruktur des Azure Hybrid Labs: Azure VNet mit Bastion, Domänencontroller, Azure Files und Azure Virtual Desktop, synchronisiert mit Entra ID","Infrastructure of the Azure hybrid lab: Azure VNet with Bastion, domain controller, Azure Files and Azure Virtual Desktop, synced with Entra ID"),
 "zones":[Z(20,20,530,360,LL("Azure · Ressourcengruppe · VNet mit NSG","Azure · resource group · VNet with NSG"),"cloud"),
          Z(580,20,200,170,L("Microsoft Entra ID"),"corp")],
 "nodes":[N("bastion",40,60,190,"shield",L("Azure Bastion"),LL(["RDP im Browser","kein offener RDP-Port"],["RDP in the browser","no open RDP port"])),
          N("dc",290,60,240,"server",L("DC01 · Windows Server 2025"),LL(["AD DS · DNS · corp.local","Entra Connect (Hash-Sync)"],["AD DS · DNS · corp.local","Entra Connect (hash sync)"])),
          N("files",40,250,190,"storage",L("Azure Files"),LL(["Kerberos über AD DS","Rechte per RBAC"],["Kerberos through AD DS","Permissions via RBAC"])),
          N("avd",290,250,240,"client",L("Azure Virtual Desktop"),LL(["Host Pool · Workspace","Session Host in der Domäne"],["Host pool · workspace","Domain-joined session host"])),
          N("entra",600,60,160,"cloud",L("Entra ID"),LL(["synchronisierte Benutzer","Gruppen"],["Synced users","Groups"])),
          N("user",600,260,160,"user",LL("Benutzer","User"),LL(["ein Konto, ein Passwort"],["one account, one password"]))],
 "links":[K("bastion","dc",LL("Verwaltung","Admin access"),fs="r",ts="l"),
          K("dc","entra",L("Sync"),fs="r",ts="l"),
          K("avd","dc",LL("Domänenbeitritt","Domain join"),fs="t",ts="b"),
          K("avd","files",L("Kerberos"),fs="l",ts="r"),
          K("user","avd",LL("Anmeldung","Sign-in"),fs="l",ts="r"),
          K("entra","user",LL("Identität","Identity"),fs="b",ts="t")]}

D["uhren-foto-app"]={"w":800,"h":360,
 "alt":LL("Ablauf der Foto-App: Power App im Versand, Ablage in SharePoint, Sicherung mit Power Automate, Zugriff über Teams und Entra ID Gruppen, Doku in Confluence","Flow of the photo app: Power App in shipping, storage in SharePoint, backup with Power Automate, access through Teams and Entra ID groups, documentation in Confluence"),
 "zones":[Z(20,20,200,320,LL("Versand","Shipping"),"corp"),
          Z(250,20,320,320,LL("Microsoft 365 im Konzern","Microsoft 365 in the group"),"cloud"),
          Z(600,20,180,320,LL("Dokumentation","Documentation"),"local")],
 "nodes":[N("team",40,58,160,"user",LL("Team Versand","Shipping team"),LL(["geschult"],["trained"])),
          N("app",40,190,160,"app",L("Power App"),LL(["Seriennummer per Kamera","Fotos aufnehmen"],["Serial number by camera","Take photos"])),
          N("sp",270,58,260,"storage",L("SharePoint"),LL(["Ablage pro Seriennummer"],["Storage per serial number"])),
          N("pa",270,158,260,"app",L("Power Automate"),LL(["automatische Sicherung"],["automatic backup"])),
          N("teams",270,258,260,"user",LL("Teams · Entra ID Gruppen","Teams · Entra ID groups"),LL(["Zugriff nur für Berechtigte"],["Access for authorized users only"])),
          N("conf",615,58,150,"app",L("Confluence"),LL(["Anleitung","Schulungsunterlagen"],["Guide","Training material"]))],
 "links":[K("team","app",LL("nutzt","uses"),fs="b",ts="t"),
          K("app","sp",L("Fotos","Photos"),fs="r",ts="l",mx=236),
          K("sp","pa",LL("neue Fotos","new photos"),fs="b",ts="t"),
          K("teams","sp",LL("Zugriff","Access"),fs="r",ts="r",to_=10,mx=552),
          K("conf","sp",LL("Doku","Docs"),fs="l",ts="r",to_=-12,mx=585,dashed=True)]}

D["wlan-netzwerk"]={"w":800,"h":400,
 "alt":LL("Netzwerk im Betrieb: Konzernnetz mit Cisco Switches und Access Points, internes WLAN mit TP-Link Omada, Telefonie hinter einer Zyxel Firewall","Network operations: group network with Cisco switches and access points, internal Wi-Fi with TP-Link Omada, telephony behind a Zyxel firewall"),
 "zones":[Z(20,20,370,360,LL("Konzernnetz","Group network"),"corp"),
          Z(420,20,360,200,LL("Internes WLAN · ausserhalb Konzern","Internal Wi-Fi · outside the group"),"local"),
          Z(420,240,360,140,LL("Telefonie","Telephony"),"neutral")],
 "nodes":[N("sw",40,58,330,"net",L("Cisco Switches"),LL(["Netzwerkrack · Patchen und Wartung"],["Network rack · patching and maintenance"])),
          N("ap",40,166,155,"net",L("Cisco APs"),LL(["WLAN im Konzern"],["Group Wi-Fi"])),
          N("nt",215,166,155,"user",LL("Netzwerkteam","Network team"),LL(["Firewall-Freigaben"],["Firewall changes"])),
          N("me",40,290,330,"user",LL("IT-Team vor Ort","On-site IT team"),LL(["Support · Anfragen · Doku in Confluence"],["Support · requests · docs in Confluence"])),
          N("omada",440,58,320,"net",L("TP-Link Omada"),LL(["Controller und Access Points"],["Controller and access points"])),
          N("s1",440,150,150,"client",LL("Mitarbeitende","Staff")),
          N("s2",610,150,150,"client",LL("Gäste","Guests")),
          N("zy",440,278,150,"shield",L("Zyxel Firewall"),LL(["Ports · Subnetze"],["Ports · subnets"])),
          N("tel",610,278,150,"client",LL("Telefone","Phones"),LL(["Telefonie"],["Telephony"]))],
 "links":[K("sw","ap",None,fs="b",ts="t",fo=-87),
          K("me","nt",LL("Firewall-Anfrage","Firewall request"),fs="t",ts="b",fo=87),
          K("omada","s1",LL("getrennte WLANs","separate SSIDs"),fs="b",ts="t",fo=-85,lx=600,ly=133),
          K("omada","s2",None,fs="b",ts="t",fo=85),
          K("zy","tel",None,fs="r",ts="l"),
          K("me","zy",LL("Fehlersuche","Troubleshooting"),fs="r",ts="l",fo=-12)]}

D["workstation-build"]={"w":800,"h":330,
 "alt":LL("Aufbau der Workstation: Hardware, Windows 11 Pro mit Hyper-V, Lab-VMs und Stabilitätstest","Workstation setup: hardware, Windows 11 Pro with Hyper-V, lab VMs and stability test"),
 "zones":[Z(20,20,760,290,L("Workstation · Ryzen 9 9900X · 64 GB DDR5"),"local")],
 "nodes":[N("hw",40,64,210,"server",L("Hardware"),LL(["12 Kerne · 24 Threads","64 GB DDR5-6000 (EXPO)","NVMe · Luftkühlung"],["12 cores · 24 threads","64 GB DDR5-6000 (EXPO)","NVMe · air cooling"])),
          N("win",290,64,210,"client",L("Windows 11 Pro"),LL(["Hyper-V Host","BIOS und EXPO eingerichtet"],["Hyper-V host","BIOS and EXPO set up"])),
          N("vms",550,64,210,"client",LL("Lab-VMs","Lab VMs"),LL(["Windows 11 für Intune","Checkpoints für Tests"],["Windows 11 for Intune","Checkpoints for testing"])),
          N("test",290,210,210,"shield",LL("Stabilitätstest","Stability test"),LL(["0 WHEA-Fehler","max. 84 °C bei 156 W"],["0 WHEA errors","max. 84 °C at 156 W"]))],
 "links":[K("hw","win",None,fs="r",ts="l",fo=-7.5),
          K("win","vms",L("Hyper-V"),fs="r",ts="l"),
          K("win","test",LL("OCCT · HWiNFO","OCCT · HWiNFO"),fs="b",ts="t")]}

DET={
"m365-support-lab":{
 "vm":(["Windows 11 Enterprise (Evaluation) als Hyper-V VM der Generation 2","Virtueller TPM und Secure Boot aktiv","Entra ID beigetreten und automatisch in Intune registriert","Als Unternehmensgerät eingetragen","Edge-Richtlinie WIN-Edge-Basics wirkt, geprüft in edge://policy","Checkpoints vor dem Setup und nach der Registrierung für schnelle Tests"],
       ["Windows 11 Enterprise (evaluation) as a generation 2 Hyper-V VM","Virtual TPM and Secure Boot enabled","Joined to Entra ID and enrolled in Intune automatically","Registered as a corporate device","Edge policy WIN-Edge-Basics applies, checked in edge://policy","Checkpoints before setup and after enrollment for quick tests"]),
 "admin":(["Arbeit in vier Admin Centern: Microsoft 365, Entra, Intune und Exchange","Notfallkonto Break Glass 01 ohne Lizenz, nur für Notfälle","Abfragen mit PowerShell und Microsoft Graph"],
          ["Working in four admin centers: Microsoft 365, Entra, Intune and Exchange","Emergency account Break Glass 01 without a license, for emergencies only","Queries with PowerShell and Microsoft Graph"]),
 "entra":(["Fünf Benutzer: Anna Muster, Ben Keller, Carla Rossi, Dario Meier, Eva Huber","Dynamische Sicherheitsgruppen nach Abteilung: SG-Finance und SG-IT","SG-LicensedStaff: dynamische Gruppe, über die die Lizenzen verteilt werden","SG-Win-Devices: dynamische Gerätegruppe für alle Windows-Geräte","SG-SSPR-Pilot: Gruppe für den Self-Service Passwort-Reset","MFA über die Microsoft-Standardrichtlinien, eigene Conditional-Access-Richtlinie CA001 im Modus «Nur Bericht»","Sign-in-Logs und Audit-Logs für die Fehlersuche"],
          ["Five users: Anna Muster, Ben Keller, Carla Rossi, Dario Meier, Eva Huber","Dynamic security groups by department: SG-Finance and SG-IT","SG-LicensedStaff: dynamic group that assigns the licenses","SG-Win-Devices: dynamic device group for all Windows devices","SG-SSPR-Pilot: group for self-service password reset","MFA through the Microsoft-managed policies, own Conditional Access policy CA001 in report-only mode","Sign-in logs and audit logs for troubleshooting"]),
 "intune":(["Automatische MDM-Registrierung bei Entra Join","Compliance-Richtlinie WIN-Compliance-Lab für Windows","Konfigurationsprofil WIN-Edge-Basics: Edge-Startseite per Richtlinie","Gerät als Unternehmensgerät geführt","Der Compliance-Status steht Conditional Access zur Verfügung"],
           ["Automatic MDM enrollment on Entra join","Compliance policy WIN-Compliance-Lab for Windows","Configuration profile WIN-Edge-Basics: Edge home page by policy","Device managed as a corporate device","The compliance status is available to Conditional Access"]),
 "exo":(["Microsoft 365 Business Premium","Lizenzen kommen automatisch über die Gruppe SG-LicensedStaff","Mit der Lizenz erhält jeder Benutzer Postfach, Teams und die Office-Apps","Getestet: Anna nutzt Teams auf dem Lab-Gerät"],
        ["Microsoft 365 Business Premium","Licenses arrive automatically through the SG-LicensedStaff group","With the license every user gets a mailbox, Teams and the Office apps","Tested: Anna uses Teams on the lab device"]),
 "users":(["Fünf Testbenutzer mit Abteilung, Funktion und Standort","Eva bewusst ohne Lizenz, als Support-Fall","Ben hat sein Passwort selbst über aka.ms/sspr zurückgesetzt, sichtbar im Audit-Log"],
          ["Five test users with department, job title and location","Eva deliberately without a license, as a support case","Ben reset his own password through aka.ms/sspr, visible in the audit log"]),
 "jira":(["Jira Service Management Projekt «IT Service Project»","Anfragetypen: Onboarding, Offboarding, Hardware, Anmeldeproblem, Passwort- und MFA-Hilfe","Zehn Tickets aus den Lab-Fällen, mit Ursache und Lösung","Priorität nach Auswirkung und Dringlichkeit","Jedes Ticket wird sofort bestätigt, auch bei niedriger Priorität"],
         ["Jira Service Management project \"IT Service Project\"","Request types: onboarding, offboarding, hardware, cannot sign in, password and MFA help","Ten tickets from the lab cases, with cause and solution","Priority by impact and urgency","Every ticket is acknowledged right away, even at low priority"])},
"windows-server-ad-lab":{
 "inet":(["Externe Namen über eine DNS-Weiterleitung des Domänencontrollers"],["External names through a DNS forwarder on the domain controller"]),
 "fw":(["OPNsense als Firewall und Gateway ins Internet","Eigener DHCP-Bereich deaktiviert, damit nur der Domänencontroller Adressen verteilt","Ursache eines falschen Gateways mit ipconfig /all gefunden"],
       ["OPNsense as firewall and gateway to the internet","Its own DHCP range disabled so only the domain controller hands out addresses","Found the cause of a wrong gateway with ipconfig /all"]),
 "dc":(["Domäne siw.local, Domänencontroller mit statischer IP","AD DS per PowerShell installiert, dcdiag: alle Kerntests bestanden","DNS: AD-integrierte Forward- und Reverse-Zone, automatische PTR-Einträge, Weiterleitung","DHCP: im AD autorisiert, Bereich mit Router, DNS und Domänenname, Reservation per MAC","OUs für Benutzer, Computer und Gruppen, Benutzer und Sicherheitsgruppen per PowerShell","Zwei Gruppenrichtlinien: Bildschirmsperre und Desktop-Darstellung auf der Benutzer-OU"],
       ["Domain siw.local, domain controller with a static IP","AD DS installed with PowerShell, dcdiag: all core tests passed","DNS: AD-integrated forward and reverse zones, automatic PTR records, forwarder","DHCP: authorized in AD, scope with router, DNS and domain name, reservation by MAC","OUs for users, computers and groups, users and security groups created with PowerShell","Two group policies: screen lock and desktop appearance on the users OU"]),
 "c1":(["Windows-Client in der Domäne","Beitritt mit Anmeldung im UPN-Format","In die richtige OU verschoben","Anmeldung mit Domänenkonto getestet, GPO mit gpresult /r nachgewiesen"],
       ["Windows client in the domain","Joined using the UPN sign-in format","Moved to the right OU","Sign-in with a domain account tested, GPO verified with gpresult /r"]),
 "c2":(["Windows-Client in der Domäne","Adresse per DHCP vom Domänencontroller","Gruppenrichtlinien greifen automatisch, geprüft mit gpresult /r"],
       ["Windows client in the domain","Address by DHCP from the domain controller","Group policies apply automatically, checked with gpresult /r"])},
"azure-hybrid-lab":{
 "bastion":(["Zugriff auf die Server per RDP direkt im Browser","Kein offener RDP-Port im Internet","NSG-Regel für den Zugriff geprüft und korrigiert"],
            ["Access to the servers with RDP directly in the browser","No open RDP port on the internet","NSG rule for access checked and corrected"]),
 "dc":(["Windows Server 2025 mit AD DS und DNS für corp.local","Statische IP im eigenen Subnetz","OU für Benutzer, Testbenutzer und eine Sicherheitsgruppe für den Dateizugriff","UPN-Suffix passend zum Tenant","Entra Connect mit Kennwort-Hash-Synchronisierung und OU-Filter"],
       ["Windows Server 2025 with AD DS and DNS for corp.local","Static IP in its own subnet","OU for users, test users and a security group for file access","UPN suffix matching the tenant","Entra Connect with password hash sync and OU filtering"]),
 "files":(["Anmeldung per Kerberos über AD DS statt Speicherschlüssel","Rechte per RBAC auf die Sicherheitsgruppe","Getestet: Mitglieder der Gruppe erreichen die Freigabe, andere nicht"],
          ["Sign-in with Kerberos through AD DS instead of storage keys","Permissions via RBAC on the security group","Tested: group members reach the share, others do not"]),
 "avd":(["Host Pool, Arbeitsbereich und ein Session Host","Session Host ist der Domäne beigetreten","DNS des VNet auf den Domänencontroller gestellt, damit der Beitritt klappt"],
        ["Host pool, workspace and one session host","The session host is joined to the domain","VNet DNS pointed to the domain controller so the join works"]),
 "entra":(["Benutzer aus der gefilterten OU werden synchronisiert","Gruppen für den Zugriff","Eigenes Cloud-Administratorkonto für Entra Connect"],
          ["Users from the filtered OU are synced","Groups for access","Dedicated cloud admin account for Entra Connect"]),
 "user":(["Ein Konto und ein Passwort vom lokalen AD bis in die Cloud","Anmeldung am virtuellen Desktop und Zugriff auf die Dateifreigabe"],
         ["One account and one password from on-premises AD to the cloud","Sign-in to the virtual desktop and access to the file share"])},
"uhren-foto-app":{
 "team":(["Das Versandteam fotografiert jede Uhr vor dem Versand","Von mir geschult, mit Anleitung in Confluence"],["The shipping team photographs every watch before shipping","Trained by me, with a guide in Confluence"]),
 "app":(["Power App liest die Seriennummer mit der Kamera","Fotos werden direkt der richtigen Uhr zugeordnet","Aufwand pro Uhr halbiert"],["The Power App reads the serial number with the camera","Photos are linked to the right watch right away","Effort per watch cut in half"]),
 "sp":(["Ablage pro Seriennummer in SharePoint","Ersetzt eine einzelne OneNote-Datei ohne Sicherung","Jedes Foto ist wiederauffindbar"],["Storage per serial number in SharePoint","Replaces a single OneNote file without backup","Every photo can be found again"]),
 "pa":(["Power Automate sichert neue Fotos automatisch","Keine manuelle Sicherung mehr nötig"],["Power Automate backs up new photos automatically","No more manual backups needed"]),
 "teams":(["Zugriff über Teams","Berechtigungen über Benutzergruppen in Entra ID","Nur berechtigte Personen sehen die Fotos"],["Access through Teams","Permissions through user groups in Entra ID","Only authorized people can see the photos"]),
 "conf":(["Dokumentation des neuen Ablaufs in Confluence","Grundlage für die Schulung des Teams"],["Documentation of the new process in Confluence","Basis for training the team"])},
"wlan-netzwerk":{
 "sw":(["Cisco Switches im Netzwerkrack","Patchen und Wartung vor Ort"],["Cisco switches in the network rack","Patching and maintenance on site"]),
 "ap":(["Cisco Access Points im Konzernnetz"],["Cisco access points in the group network"]),
 "nt":(["Firewall-Freigaben laufen über das Netzwerkteam des Konzerns","Jede Anfrage sauber begründet und dokumentiert"],["Firewall changes go through the group's network team","Every request clearly justified and documented"]),
 "me":(["Netzwerk mit VLAN, DHCP, Firewall und WLAN betreut","Druckerprobleme im WLAN bis zur Ursache im Netzwerk eingegrenzt","Telefonie-Ausfall über Ports und Subnetze gelöst","Dokumentation in Confluence"],["Looked after the network with VLAN, DHCP, firewall and Wi-Fi","Traced Wi-Fi printing problems to their cause in the network","Solved a phone outage through ports and subnets","Documentation in Confluence"]),
 "omada":(["TP-Link Omada Controller mit Access Points","Internes WLAN ausserhalb des Konzernnetzes"],["TP-Link Omada controller with access points","Internal Wi-Fi outside the group network"]),
 "s1":(["WLAN für Mitarbeitende, getrennt vom Gäste-WLAN"],["Wi-Fi for staff, separated from the guest Wi-Fi"]),
 "s2":(["Eigenes WLAN für Gäste, getrennt vom Mitarbeitenden-WLAN"],["Separate Wi-Fi for guests, separated from the staff Wi-Fi"]),
 "zy":(["Telefonie hinter einer Zyxel Firewall","Ausfall über Ports und Subnetze eingegrenzt und gelöst"],["Telephony behind a Zyxel firewall","Outage narrowed down and solved through ports and subnets"]),
 "tel":(["Telefone der Mitarbeitenden"],["Phones of the employees"])},
"workstation-build":{
 "hw":(["AMD Ryzen 9 9900X, 12 Kerne und 24 Threads","64 GB DDR5-6000 CL30, EXPO aktiv, Timings 30, 36, 36, 76","NVMe, mit GPT initialisiert und als NTFS Volume eingerichtet","Luftkühlung, gedämmtes Gehäuse, AM5 Plattform zum Aufrüsten"],
       ["AMD Ryzen 9 9900X, 12 cores and 24 threads","64 GB DDR5-6000 CL30, EXPO active, timings 30, 36, 36, 76","NVMe, initialised with GPT and set up as an NTFS volume","Air cooling, sound-dampened case, AM5 platform for upgrades"]),
 "win":(["Windows 11 Pro als Hyper-V Host","Ohne LAN eingerichtet: WLAN-Treiber im Setup vom USB-Stick geladen","BIOS 1681 mit EXPO-Profil"],
        ["Windows 11 Pro as Hyper-V host","Set up without LAN: Wi-Fi driver loaded from the USB stick during setup","BIOS 1681 with EXPO profile"]),
 "vms":(["Windows 11 VMs für das Microsoft 365 und MD-102 Lab","Genug Kerne und Arbeitsspeicher für mehrere VMs gleichzeitig","Checkpoints, um Tests in Minuten zurückzusetzen"],
        ["Windows 11 VMs for the Microsoft 365 and MD-102 lab","Enough cores and memory for several VMs at once","Checkpoints to roll tests back in minutes"]),
 "test":(["OCCT Speichertest ohne Fehler, WHEA-Zähler bei 0","CPU Volllast: maximal 84 °C bei rund 156 W","Nach dem Test: CPU 77 °C, VRM 49 °C, DIMM rund 66 °C","Werte als Referenz dokumentiert"],
         ["OCCT memory test without errors, WHEA counter at 0","CPU full load: 84 °C maximum at about 156 W","After the test: CPU 77 °C, VRM 49 °C, DIMMs about 66 °C","Values documented as a baseline"])}
}
for pid,m in DET.items():
    for n in D[pid]["nodes"]:
        if n["id"] in m:
            de,en=m[n["id"]]; n["details"]={"de":de,"en":en}

root=os.path.join(os.path.dirname(__file__),"..","projects")
for pid,d in D.items():
    p=os.path.join(root,pid+".js"); s=open(p,encoding="utf-8").read()
    s=re.sub(r'\n  diagram: \{.*?\n  \},\n', '\n', s, flags=re.S)
    js="  diagram: "+json.dumps(d,ensure_ascii=False,indent=2).replace("\n","\n  ")+",\n"
    i=s.index("  text:")
    s=s[:i]+js+s[i:]
    open(p,"w",encoding="utf-8").write(s)
    print("ok",pid)
