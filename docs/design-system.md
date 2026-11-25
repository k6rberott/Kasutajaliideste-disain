# SUUND B disainisüsteem

Haapsalu kolledži tunniplaani prototüüp kuvab RIF 2 nädala- ja kuuvaadet.
Tunni aeg ja aine nimetus on mõlemas vaates kohe nähtavad.
Nädalavaade kuvab ka ainekoodi, õppejõudu ja asukohta.

[Figma UI-kit](https://www.figma.com/design/BLAGRRcDs6hnZ53Ovv4rfU/Tunniplaan---Indrek?node-id=383-2) · [Praktiline juhend](design-system-walkthrough.md) · [CSS-i tokenid](../src/styles/tokens.css)

## Värvid ja teemad

Figma ja CSS kasutavad samu tokeninimesid. Primitiiv määrab väärtuse ning
semantiline token seob selle kasutusrolliga. Figma värvitokenitel on režiimid
`Light` ja `Dark`. Veebis määrab režiimi juurelemendi `data-theme` atribuut.

| Token | Light | Dark | Kasutus |
|---|---|---|---|
| `color-page` | `#F0F0E9` | `#121B19` | Väline taust ja kuuvaate nädalavahetuse lahtrid |
| `color-view` | `#FDF8F3` | `#1B2824` | Tunniplaani pind |
| `color-lesson` | `#EAF0E8` | `#22332D` | Tunnikaardi põhitoon |
| `color-text` | `#2B4A4A` | `#EDF4ED` | Pealkirjad ja põhiinfo |
| `color-header-rule` | `#A7B9A1` | `#70877A` | Päise ja mobiili kuuvaate nädalate eraldusjoon |
| `color-theme-focus` | `#2B4A4A` | `#E3BC79` | Nuppude fookusrõngas |
| `color-college-accent` | `#A4D65E` | `#A4D65E` | HK roheline aktsent kolledži nime kõrval |

Kuu kuuel ainel on püsiv ainekoodiga seotud värv. `color-course-*` määrab
4 px vasaku värviriba. `color-lesson-tint-*` määrab tausta, kus tunnikaardi
põhitooniga on segatud 12% ainevärvi. Tunni nimetus jääb alati nähtavaks.
Kontrollitud tekstipaaride väikseim kontrast toonitud kaartidel on
heledas teemas 5,04 : 1 ja tumedas 5,52 : 1.

Esimesel avamisel järgib veeb seadme teemaeelistust. Päise nupp salvestab
kasutaja valiku brauserisse. Kuuikoon avab tumeda ja päikeseikoon heleda
teema. Nupu ligipääsetav nimi on „Tume teema” ja olekut näitab `aria-pressed`.

## Tüpograafia

Pealkiri „Tunniplaan” kasutab Playfair Displayd ning ülejäänud vaade Interit.
Veebis kasutatakse vastavalt Georgia või süsteemikirja, kui põhikiri puudub.
Figma seitse tekstistiili seovad kirjatüübi, stiili, suuruse ja reavahe
tüpograafiamuutujatega.

| Roll | Suurus ja reavahe | Paksus |
|---|---|---|
| Lehe pealkiri | Mobiilis 27/32 px, töölaual 32/38 px | 400 |
| Kolledži nimi ja päeva pealkiri | 13/18 px | 700 |
| Nädala tunni nimetus | 14/20 px | 700 |
| Nädala tunni kellaaeg | 16/20 px | 700 |
| Töölaua kuuvaate ainenimi ja kellaaeg | 12/18 px | 700 |
| Nädala ainekood, õppejõud ja asukoht | 11/18 px | 400 |

## Paigutus, vahed ja mõõdud

Vahed põhinevad 4 px skaalal. `space-1` on 4 px, `space-2` 8 px,
`space-3` 12 px, `space-4` 16 px ja `space-6` 24 px.
Korduvkasutatavate rollide jaoks kasutatakse neile viitavaid tokeneid,
näiteks tunnikaartide vahe `space-card-gap`.

- Figma mobiilikaader on 488 px ja töölauakaader 1024 px lai. Kitsast vaadet kontrollitakse 320 px laiusel.
- Nädalavaates on mobiilis päevad üksteise all. Alates 48 rem laiusest asuvad päevad kõrvuti.
- Kuuvaates on alla 64 rem laiusel õppepäevade loend, kus joon eraldab nähtavaid kalendrinädalaid. Alates 64 rem laiusest kuvatakse esmaspäevast algav seitsmeveeruline kalender. Tühjade lahtrite miinimumkõrgus on 40 px ja tundidega lahtrid kasvavad sisuga. Laupäev ja pühapäev eristuvad taustaga.
- Põhivaate raadius on 10 px ja tunnikaardi raadius 4 px. Raamid on 1 px.
- Teemanupp on 40 × 40 px, ikoon 20 × 20 px ja fookusjoon 2 px. Päise parempoolne 48 px sisevahe jätab nupule ruumi.

## Komponendid

| Figma komponent | Kasutus ja variandid |
|---|---|
| `schedule-header` | Kolledži nimi ja tunniplaani pealkiri koos kokkuvõtte, vaatevaliku ja teemanupuga. Mobiili- ja töölauavariant. |
| `week-context` | Rühm, periood ja tundide arv. Mobiilis vertikaalne, töölaual horisontaalne. |
| `schedule-day` | Ühe päeva pealkiri ja tunnikaartide loend. UI-kitis on kahe ja kolme tunni variandid. |
| `lesson-card` | Nädalavaate tunnikaart. Teadaoleva ja puuduva asukoha variant. |
| `month-lesson` | Kuuvaate kompaktne riba kellaaja, ainenime ja värviribaga. Mobiili- ja töölauavariant. |
| `view-switch` | „Nädal” ja „Kuu” koos aktiivset vaadet näitava olekuga. |
| `theme-toggle` | Kuu- või päikeseikoon mõlema teema tava- ja fookusolekus. |

Figma põhivaated kasutavad komponentide instantse ja Auto Layouti.
UI-kiti Patterns-jaotis näitab päise ja päevagrupi kasutust ning
kuukalendrit töölaual ja mobiilis.

## Ligipääsetavus

Põhivaates on üks `h1`. Päevad ja tunnid kasutavad `h2` ning `h3`
pealkirju. Kuupäevad ja kellaajad esitatakse masinloetava `dateTime`
väärtusega `time` elementides. Vaate- ja teemanupud on klaviatuuriga
kasutatavad, nähtava fookusega ja olekut näitava `aria-pressed` atribuudiga.

WCAG 2.2 AA on prototüübi ligipääsetavuse eesmärk. Muudatuste kontrollis
vaata üle tekstikontrast, fookus, teksti murdumine ja 320 px paigutus.
