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

D["azure-hybrid-lab"]={"w":800,"h":360,
 "alt":LL("Infrastruktur des Azure Hybrid Labs: Ressourcengruppe rg-hybridlab mit NSG, Domänencontroller, Azure Files und Azure Virtual Desktop, synchronisiert mit Entra ID, getestet mit drei Benutzern","Infrastructure of the Azure hybrid lab: resource group rg-hybridlab with NSG, domain controller, Azure Files and Azure Virtual Desktop, synced with Entra ID, tested with three users"),
 "zones":[Z(20,20,530,320,LL("Azure · rg-hybridlab · vnet-hybridlab","Azure · rg-hybridlab · vnet-hybridlab"),"cloud"),
          Z(580,20,200,170,L("Microsoft Entra ID"),"corp")],
 "nodes":[N("nsg",40,60,190,"shield",L("NSG · nsg-dc"),LL(["RDP nur von meiner IP","Regeln für RDP und SMB"],["RDP only from my IP","Rules for RDP and SMB"])),
          N("dc",270,60,260,"server",L("vm-dc01 · Server 2025"),LL(["AD DS · DNS · corp.local","Entra Connect (Hash-Sync)"],["AD DS · DNS · corp.local","Entra Connect (hash sync)"])),
          N("files",40,250,190,"storage",L("Azure Files"),LL(["share-corp · Kerberos","RBAC und NTFS"],["share-corp · Kerberos","RBAC and NTFS"])),
          N("avd",270,250,260,"client",L("Azure Virtual Desktop"),LL(["hp-lab · ws-lab","sh-lab-0 in der Domäne"],["hp-lab · ws-lab","sh-lab-0 joined to the domain"])),
          N("entra",600,60,160,"cloud",L("Entra ID"),LL(["synchronisierte Benutzer","Gruppen"],["Synced users","Groups"])),
          N("user",600,260,160,"user",LL("Testbenutzer","Test users"),LL(["Alice · Bob · Charlie"],["Alice · Bob · Charlie"]))],
 "links":[K("nsg","dc",L("RDP"),fs="r",ts="l"),
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
 "nsg":(["Netzwerksicherheitsgruppe nsg-dc vor dem Domänencontroller","RDP nur von meiner eigenen öffentlichen IP-Adresse erlaubt","Fehler gelöst: falsche IP in der Regel korrigiert"],["Network security group nsg-dc in front of the domain controller","RDP allowed only from my own public IP address","Issue solved: corrected the wrong IP in the rule"]),
 "dc":(["vm-dc01 mit Windows Server 2025 in West Europe","AD DS und DNS für die Domäne corp.local, statische IP im Subnetz snet-dc","OU mit den Testbenutzern und einer Sicherheitsgruppe für den Dateizugriff","UPN-Suffix passend zum Tenant","Entra Connect mit Kennwort-Hash-Synchronisierung und OU-Filter"],["vm-dc01 with Windows Server 2025 in West Europe","AD DS and DNS for the corp.local domain, static IP in the snet-dc subnet","OU with the test users and a security group for file access","UPN suffix matching the tenant","Entra Connect with password hash sync and OU filtering"]),
 "files":(["Storage Account mit der Dateifreigabe share-corp","Anmeldung per Kerberos über AD DS statt Speicherschlüssel","Rechte über RBAC und NTFS auf die Sicherheitsgruppe","Test: Alice verbindet die Freigabe und legt Dateien an, Charlie wird abgewiesen"],["Storage account with the file share share-corp","Sign-in with Kerberos through AD DS instead of storage keys","Permissions via RBAC and NTFS on the security group","Test: Alice maps the share and creates files, Charlie is denied"]),
 "avd":(["Host Pool hp-lab (Pooled)","Desktop-Anwendungsgruppe für Alice und Bob","Arbeitsbereich ws-lab für den Web Client","Session Host sh-lab-0: Windows 11 Enterprise Multi-Session, in der Domäne corp.local","Fehler gelöst: DNS des VNet auf den Domänencontroller gestellt, damit der Beitritt klappt"],["Host pool hp-lab (pooled)","Desktop application group for Alice and Bob","Workspace ws-lab for the web client","Session host sh-lab-0: Windows 11 Enterprise multi-session, joined to corp.local","Issue solved: pointed the VNet DNS to the domain controller so the join works"]),
 "entra":(["Alice, Bob und Charlie aus dem AD synchronisiert","Ein Konto und ein Passwort für AD und Cloud","Eigenes Cloud-Administratorkonto für Entra Connect"],["Alice, Bob and Charlie synced from AD","One account and one password for AD and cloud","Dedicated cloud admin account for Entra Connect"]),
 "user":(["Alice: Zugriff auf Freigabe und virtuellen Desktop","Bob: Zugriff auf den virtuellen Desktop","Charlie: bewusst ohne Zugriff, als Gegenprobe","Anmeldung über den AVD Web Client getestet"],["Alice: access to the share and the virtual desktop","Bob: access to the virtual desktop","Charlie: deliberately without access, as a counter test","Sign-in through the AVD web client tested"])},
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

TARGET={}
TARGET["m365-support-lab"]={"w":900,"h":520,
 "alt":LL("Ziel-Infrastruktur des MD-102 Labs: Hyper-V Host mit Domänencontroller, Tunnel Gateway und fünf Windows 11 VMs, Microsoft 365 Tenant mit Entra ID, Intune, Intune Suite und Defender for Endpoint, Betrieb mit Handy, Jira und Graph","Target infrastructure of the MD-102 lab: Hyper-V host with domain controller, tunnel gateway and five Windows 11 VMs, Microsoft 365 tenant with Entra ID, Intune, Intune Suite and Defender for Endpoint, operations with phone, Jira and Graph"),
 "caption":LL("Ziel: geplanter Ausbau als Vorbereitung auf die Microsoft MD-102 (Endpoint Administrator).","Target: planned expansion as preparation for Microsoft MD-102 (Endpoint Administrator)."),
 "zones":[Z(20,20,330,480,LL("Hyper-V Host · eigenes Lab-Netz","Hyper-V host · own lab network"),"local"),
          Z(380,20,300,480,L("Microsoft 365 Tenant"),"cloud"),
          Z(710,20,170,480,LL("Betrieb","Operations"),"corp")],
 "nodes":[N("dc",40,58,290,"server",L("DC01 · Windows Server 2025"),LL(["AD DS · DNS · DHCP","Intune Connector · Cloud Sync"],["AD DS · DNS · DHCP","Intune Connector · Cloud Sync"])),
          N("tun",40,392,290,"net",L("TUN01 · Ubuntu"),LL(["Microsoft Tunnel Gateway"],["Microsoft Tunnel Gateway"])),
          N("l1",40,232,140,"client",L("LAB01"),LL(["Richtlinien"],["Policies"])),
          N("l2",190,232,140,"client",L("LAB02"),LL(["Autopilot"],["Autopilot"])),
          N("l3",40,312,140,"client",L("LAB03"),LL(["Updates"],["Updates"])),
          N("l4",190,312,140,"client",L("LAB04"),LL(["Hybrid Join"],["Hybrid join"])),
          N("kiosk",40,152,290,"client",L("WIN11-KIOSK"),LL(["Kiosk · geteiltes Gerät"],["Kiosk · shared device"])),
          N("entra",400,58,260,"cloud",L("Entra ID"),LL(["Gruppen · CA mit Compliance","Windows Hello · LAPS"],["Groups · CA with compliance","Windows Hello · LAPS"])),
          N("intune",400,152,260,"shield",L("Intune"),LL(["Autopilot · ESP · Updates","Win32 mit PSADT · App-Schutz"],["Autopilot · ESP · updates","Win32 with PSADT · app protection"])),
          N("suite",400,246,260,"app",L("Intune Suite"),LL(["EPM · Remote Help","Cloud PKI · Tunnel · Analytics"],["EPM · Remote Help","Cloud PKI · Tunnel · Analytics"])),
          N("mde",400,340,260,"shield",L("Defender for Endpoint"),LL(["EDR · ASR · Baselines","App Control for Business"],["EDR · ASR · baselines","App Control for Business"])),
          N("exo",400,434,260,"cloud",L("Exchange · Teams"),LL(["Lizenzen über Gruppen"],["Licenses through groups"])),
          N("phone",725,58,140,"client",LL("Handy","Phone"),LL(["BYOD · App-Schutz"],["BYOD · app protection"])),
          N("graph",725,152,140,"app",L("PowerShell"),LL(["Graph · Remediations"],["Graph · remediations"])),
          N("jira",725,246,140,"app",L("Jira"),LL(["Tickets · KB"],["Tickets · KB"]))],
 "links":[K("dc","entra",L("Cloud Sync"),fs="r",ts="l",fo=-8,to_=-8),
          K("l2","intune",L("Autopilot"),fs="r",ts="l",to_=10,mx=362),
          K("suite","tun",L("Tunnel"),fs="l",ts="r",mx=362,fo=12),
          K("intune","entra",LL("Compliance für CA","Compliance for CA"),fs="t",ts="b"),
          K("phone","intune",LL("App-Schutz","App protection"),fs="l",ts="r",to_=-10,mx=692),
          K("graph","intune",L("Graph API"),fs="l",ts="r",to_=12,mx=692)]}
TDET={
 "dc":(["Domäne für Hybrid Join mit Autopilot","Intune Connector für Active Directory","Entra Cloud Sync für die Benutzer","DHCP und DNS für das ganze Lab-Netz"],["Domain for hybrid join with Autopilot","Intune Connector for Active Directory","Entra Cloud Sync for the users","DHCP and DNS for the whole lab network"]),
 "tun":(["Microsoft Tunnel Gateway auf Ubuntu","VPN für Apps auf dem Handy, ohne volle Geräteverwaltung"],["Microsoft Tunnel Gateway on Ubuntu","VPN for apps on the phone, without full device management"]),
 "l1":(["Testgerät für Richtlinien und Baselines","Autopilot Reset"],["Test device for policies and baselines","Autopilot reset"]),
 "l2":(["Frisches Gerät nur über Autopilot ausgerollt","Namensvorlage und Enrollment Status Page","Vergleich mit Autopilot Device Preparation"],["Fresh device deployed only through Autopilot","Name template and enrollment status page","Comparison with Autopilot device preparation"]),
 "l3":(["Update Rings Pilot und Broad","Feature Updates, Expedite Updates und Autopatch","Delivery Optimization"],["Update rings pilot and broad","Feature updates, expedited updates and Autopatch","Delivery Optimization"]),
 "l4":(["Autopilot mit Hybrid Join in die Domäne","Ziel für Defender-Onboarding und Tests"],["Autopilot with hybrid join to the domain","Target for Defender onboarding and tests"]),
 "kiosk":(["Kiosk-Profil und geteiltes Gerät","Gerät für Empfang oder Produktion"],["Kiosk profile and shared device","Device for reception or production"]),
 "entra":(["Conditional Access verlangt ein konformes Gerät","Windows Hello for Business","Windows LAPS für lokale Admin-Passwörter","Intune-Rollen mit Scope Tags und Multi Admin Approval"],["Conditional Access requires a compliant device","Windows Hello for Business","Windows LAPS for local admin passwords","Intune roles with scope tags and multi admin approval"]),
 "intune":(["Autopilot mit Enrollment Status Page","Update Rings und Autopatch","Win32-Apps mit PSADT verpackt, Microsoft 365 Apps","App-Schutz und App-Konfiguration fürs Handy","ADMX-Import und Assignment Filter"],["Autopilot with enrollment status page","Update rings and Autopatch","Win32 apps packaged with PSADT, Microsoft 365 Apps","App protection and app configuration for the phone","ADMX import and assignment filters"]),
 "suite":(["Endpoint Privilege Management: Installieren ohne Admin-Rechte","Remote Help für den Support","Cloud PKI mit SCEP-Zertifikaten","Microsoft Tunnel für App-Schutz","Advanced Analytics und Device Query mit KQL"],["Endpoint Privilege Management: installing without admin rights","Remote Help for support","Cloud PKI with SCEP certificates","Microsoft Tunnel for app protection","Advanced Analytics and device query with KQL"]),
 "mde":(["Geräte in Defender for Endpoint onboarden","EDR, Attack Surface Reduction und Security Baselines","App Control for Business, zuerst im Audit-Modus","BitLocker mit Schlüsselrotation"],["Onboard devices to Defender for Endpoint","EDR, attack surface reduction and security baselines","App Control for Business, first in audit mode","BitLocker with key rotation"]),
 "exo":(["Lizenzen über Gruppen wie heute","Postfächer und Teams für alle Testbenutzer"],["Licenses through groups as today","Mailboxes and Teams for all test users"]),
 "phone":(["Eigenes Handy als BYOD","App-Schutz für Outlook und Teams","Conditional Access verlangt geschützte Apps"],["Own phone as BYOD","App protection for Outlook and Teams","Conditional Access requires protected apps"]),
 "graph":(["Berichte mit Microsoft Graph PowerShell","Remediation-Skripte und eigene Compliance per PowerShell"],["Reports with Microsoft Graph PowerShell","Remediation scripts and custom compliance with PowerShell"]),
 "jira":(["Jeder Fall als Ticket mit Ursache und Lösung","Wissensdatenbank für wiederkehrende Fälle"],["Every case as a ticket with cause and solution","Knowledge base for recurring cases"])}
for n in TARGET["m365-support-lab"]["nodes"]:
    if n["id"] in TDET:
        de,en=TDET[n["id"]]; n["details"]={"de":de,"en":en}

root=os.path.join(os.path.dirname(__file__),"..","projects")
for pid,d in D.items():
    p=os.path.join(root,pid+".js"); s=open(p,encoding="utf-8").read()
    s=re.sub(r'\n  diagram(Target)?: \{.*?\n  \},\n', '\n', s, flags=re.S)
    s=re.sub(r'\n  diagram(Target)?: \{.*?\n  \},\n', '\n', s, flags=re.S)
    js="  diagram: "+json.dumps(d,ensure_ascii=False,indent=2).replace("\n","\n  ")+",\n"
    if pid in TARGET:
        js+="  diagramTarget: "+json.dumps(TARGET[pid],ensure_ascii=False,indent=2).replace("\n","\n  ")+",\n"
    i=s.index("  text:")
    s=s[:i]+js+s[i:]
    open(p,"w",encoding="utf-8").write(s)
    print("ok",pid)
