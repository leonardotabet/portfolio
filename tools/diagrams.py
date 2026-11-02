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
          N("intune",290,168,240,"shield",L("Intune"),LL(["Compliance · Konfiguration","Apps · Endpoint Security"],["Compliance · configuration","Apps · endpoint security"])),
          N("exo",290,278,240,"cloud",L("Exchange Online · Teams"),LL(["Postfächer · Shared Mailbox","Lizenzen über Gruppen"],["Mailboxes · shared mailbox","Licenses through groups"])),
          N("users",610,58,150,"user",LL("Mitarbeitende","Employees"),LL(["5 Testbenutzer"],["5 test users"])),
          N("jira",610,200,150,"app",L("Jira"),LL(["Service Management","Tickets · Queues · KB"],["Service Management","Tickets · queues · KB"]))],
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

root=os.path.join(os.path.dirname(__file__),"..","projects")
for pid,d in D.items():
    p=os.path.join(root,pid+".js"); s=open(p,encoding="utf-8").read()
    s=re.sub(r'\n  diagram: \{.*?\n  \},\n', '\n', s, flags=re.S)
    js="  diagram: "+json.dumps(d,ensure_ascii=False,indent=2).replace("\n","\n  ")+",\n"
    i=s.index("  text:")
    s=s[:i]+js+s[i:]
    open(p,"w",encoding="utf-8").write(s)
    print("ok",pid)
