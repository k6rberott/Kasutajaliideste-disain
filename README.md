# Tunniplaani rakendus

## Projekti kirjeldus

Rakendus on Reacti põhine tunniplaani kasutajaliides, mis võimaldab tunniplaani andmeid struktureeritult ja ligipääsetavalt kuvada.

Projekti arendamisel on lähtutud mobiilipõhisest disainist, semantilisest HTML-ist ning WCAG 2.2 AA ligipääsetavuse eesmärkidest.

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

- **React 18** võimaldab kasutajaliidese jagamist korduvkasutatavateks komponentideks.
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
- `dl`

Kujundus asub failis:

`src/styles/main.css`

Inline-stiile ei kasutata.

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

### Build'i eelvaade

```bash
npm run preview
```

## Projekti piirangud

Praeguses arendusversioonis ei kasutata:

- Backend'i
- Andmebaasi
- TypeScripti
- Ruutingut
- CSS-raamistikku

## Figma

Figma Make projekt ja arenduseelvaade:

[Lisa siia Figma Make projekti link]

## AI kasutamine

AI-d kasutati lähteinfo struktureerimiseks ja kasutajate ülesannete sõnastamiseks.

AI loodud väited kontrolliti tunniplaani, WAVE-i ja brauseri Inspect tööriista abil.

AI-d kasutati abivahendina, mitte lõpliku infoallikana. Rakenduse sisu ja tulemused kontrolliti arenduse käigus.
