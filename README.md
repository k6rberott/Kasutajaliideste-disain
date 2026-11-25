# Tunniplaani rakendus

## Projekti kirjeldus

Rakendus on Reacti põhine tunniplaani kasutajaliides, mis võimaldab tunniplaani andmeid struktureeritult ja ligipääsetavalt kuvada.

Projekti arendamisel on lähtutud mobiilipõhisest disainist, semantilisest HTML-ist ning WCAG 2.2 AA ligipääsetavuse eesmärkidest.

Praegune versioon on SUUND B prototüüp rühmale RIF 2.

- **Nädalavaade** avaneb vaikimisi ja kuvab 9.–15. novembri 2026 tunnid koos kellaaja, ainekoodi, õppejõu ja asukohaga.
- **Kuuvaade** kuvab novembri 2026 tunnid koos kellaaja ja aine nimetusega. Töölaual on seitsmeveeruline kalender, kitsal ekraanil nädalate kaupa eraldatud õppepäevade loend.
- **Hele ja tume teema** kasutavad samu värvirolle. Esimesel avamisel järgitakse seadme eelistust ning teemavahetuse nupuga tehtud valik salvestatakse brauserisse.

Andmed pärinevad Haapsalu kolledži ametlikust novembri CSV-ekspordist.
Prototüüp loeb repos olevat andmestikku failist `src/november-schedule.js`. [Ametlik CSV-eksport](https://start.hk.tlu.ee/sahtelbeta/tunniplaan/csv.php?search=01.11.2026/30.11.2026/1/2///)

## Tehnoloogiad

| Tehnoloogia | Kasutus |
|---|---|
| Node.js | Arendus- ja build-keskkond |
| React 18 | Kasutajaliidese komponentide ja tunniplaani andmete renderdamine |
| Vite 6 | Arendusserver ja production build |
| JavaScript + JSX | Rakenduse loogika ja Reacti komponentide kirjeldamine |
| CSS | Kasutajaliidese kujundamine |
| npm | Sõltuvuste ja skriptide haldamine |

### Tehnoloogiaraja põhjendus

- **React 18** võimaldab tunniplaaniandmeid deklaratiivselt kasutajaliideseks renderdada.
- **Vite 6** pakub kiiret arenduskeskkonda ja production build'i.
- **JavaScript ja JSX** võimaldavad rakenduse loogikat ning kasutajaliidest hallata ühes tehnoloogiarajas.
- **CSS** võimaldab kujundust kontrollida ilma CSS-raamistikuta.
- **Semantiline HTML5** toetab ligipääsetavust ja sisu tähenduslikku struktureerimist.

## Kasutatud HTML ja CSS

Rakenduses kasutatakse semantilisi HTML5 elemente, näiteks:

- `main`
- `section`
- `article`
- `header`
- `time`
- `button`

Kujundus on failis [main.css](src/styles/main.css). Värvid, tüpograafia ja paigutus
kasutavad [tokens.css](src/styles/tokens.css) muutujaid, mille nimed ja väärtused
vastavad Figma disainisüsteemile.


## Tööriistad ja taristu

- **Git** – versioonihaldus.
- **GitHub** – lähtekoodi hoidla ja remote `upstream`.
- **Figma Make** – arenduseelvaade, bootstrap, build'i kontroll ja staatiline deploy.
- **Bash** – `.figma/make/` elutsükliskriptide käivitamine.

## Ligipääsetavus

Rakenduse ligipääsetavuse eesmärk on **WCAG 2.2 AA**.

Arenduses lähtutakse järgmistest põhimõtetest:

- Semantiline HTML.
- Mobiilipõhine paigutus.
- Masinloetavad kuupäevad ja kellaajad.
- Selge ja loogiline sisustruktuur.
- Ligipääsetavuse kontrollimine WAVE-i ja brauseri Inspect tööriista abil.

## Arenduskeskkonna käivitamine

### Eeltingimused

- Node.js
- npm
- Git

### Paigaldamine

```bash
npm install
```

### Arendusserveri käivitamine

```bash
npm run dev
```

### Production build

```bash
npm run build
```

## Projekti piirangud

Praeguses arendusversioonis ei kasutata:

- Backend'i
- Andmebaasi
- TypeScripti
- Ruutingut
- CSS-raamistikku

## Figma Design

- [Tunniplaan – Indrek](https://www.figma.com/design/BLAGRRcDs6hnZ53Ovv4rfU/Tunniplaan---Indrek?node-id=0-1) sisaldab projekti analüüsi, kujundussuundi ja põhivaateid.
- [SUUND B UI-kit](https://www.figma.com/design/BLAGRRcDs6hnZ53Ovv4rfU/Tunniplaan---Indrek?node-id=383-2) koondab muutujate näidised, tekstistiilid, komponendid ja nende kasutusnäited.
- [Disainisüsteemi praktiline juhend](docs/design-system-walkthrough.md) selgitab süsteemi ülesehitust ja näitab, kuidas sama töö Figmas ning koodis ise läbi teha.

## AI kasutamine

AI-d kasutati lähteinfo struktureerimiseks ja kasutajate ülesannete sõnastamiseks.

AI loodud väited kontrolliti tunniplaani, WAVE-i ja brauseri Inspect tööriista abil.

AI-d kasutati abivahendina, mitte lõpliku infoallikana. Rakenduse sisu ja tulemused kontrolliti arenduse käigus.
