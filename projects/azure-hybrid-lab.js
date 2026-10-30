window.PORTFOLIO_PROJECTS.push({
  order: 4,
  status: "done",

  title:    { de: "Azure Hybrid Lab", en: "Azure hybrid lab" },
  subtitle: { de: "Server im Büro und Cloud, verbunden wie in vielen Firmen.", en: "An office server and the cloud, connected as in many companies." },
  context:  { de: "Eigenes Lab", en: "Own lab" },
  period:   { de: "TODO: Zeitraum", en: "TODO: Period" },

  text: {
    de: [
      "Ein Windows Server 2025 Domänencontroller mit AD DS und DNS für die Domäne corp.local, synchronisiert mit Entra ID über Entra Connect und Kennwort-Hash-Synchronisierung. Testbenutzer meldeten sich mit Kerberos an Azure Files an und arbeiteten auf Azure Virtual Desktop.",
      "Damit habe ich eine hybride Identität von Ende zu Ende umgesetzt: ein Benutzer, ein Passwort, vom lokalen Active Directory bis in die Cloud."
    ],
    en: [
      "A Windows Server 2025 domain controller with AD DS and DNS for the corp.local domain, synced to Entra ID with Entra Connect and password hash sync. Test users signed in to Azure Files with Kerberos and worked on Azure Virtual Desktop.",
      "This gave me a working end-to-end hybrid identity: one user, one password, from on-premises Active Directory to the cloud."
    ]
  },
  points: { de: [], en: [] },
  note: { de: "", en: "" },

  tools: ["Windows Server 2025", "AD DS", "DNS", "Entra Connect", "Azure Files", "Azure Virtual Desktop"],

  images: []
});
