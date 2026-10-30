# leonardotabet.ch

Statische Portfolio-Seite, Deutsch und Englisch. Kein Build-Schritt, kein Tracking.

## Struktur

```
index.html, style.css, app.js   Layout und Logik
content/site.js                 Texte, Werdegang, Labels
content/index.js                welche Projekte und Zertifikate geladen werden
projects/*.js                   ein Projekt pro Datei
certificates/*.js               ein Zertifikat pro Datei
images/                         Foto und Screenshots (WebP)
fonts/                          Source Serif 4, IBM Plex Sans (selbst gehostet)
```

## Neuer Eintrag

1. `projects/_vorlage.js` bzw. `certificates/_vorlage.js` kopieren und ausfüllen (`de` und `en`).
2. Dateiname ohne `.js` in `content/index.js` eintragen.
3. Lokal `index.html` öffnen. Mit `index.html?edit` werden offene `TODO`-Felder markiert.

## Hosting

GitHub Pages aus `main`, Custom Domain über Infomaniak DNS (A, AAAA, CNAME für www), HTTPS erzwungen, DNSSEC aktiv.
