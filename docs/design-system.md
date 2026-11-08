# Tunniplaani disainisüsteem

See dokument kirjeldab tunniplaani prototüübis kasutatud kujundusväärtusi ja
komponente. Praegune lahendus on low fidelity, mistõttu kasutatakse ainult
halltoone ja lihtsaid geomeetrilisi elemente.

## Põhimõtted

- Kõige olulisem info — tunni aeg, aine ja asukoht — peab olema kiiresti leitav.
- Kujundus lähtub esmalt mobiilivaatest.
- Info hierarhia ei tohi sõltuda ainult värvist.
- Kasutajale nähtav tekst on eesti keeles.
- Komponendid peavad vastama WCAG 2.2 AA nõuetele.

## Värvid

| Nimetus | Väärtus | Kasutus |
|---|---|---|
| Tekst | `#202020` | Peamine tekst ja pealkirjad |
| Tugev raam | `#303030` | Vaate ja päevade eraldusjooned |
| Teisene tekst | `#494949` | Kuupäevad |
| Abitekst | `#525252` | Ainekood |
| Silt | `#555555` | Sildid ja ülatekst |
| Tavaline raam | `#5a5a5a` | Tunnikaardi raam ja sisemine eraldusjoon |
| Nõrk tekst | `#6a6a6a` | Ajavahemiku eraldusmärk |
| Lehe taust | `#e9e9e9` | Rakenduse väline taust |
| Kaardi taust | `#f4f4f4` | Tunnikaardi taust |
| Pinna taust | `#ffffff` | Tunniplaani põhivaade |

Low-fidelity vaates ei kasutata brändivärve ega ainepõhiseid värve.

## Tüpograafia

Põhikirjana kasutatakse süsteemifontide jada:

```css
Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
sans-serif
```

| Element | Suurus | Paksus | Reavahe |
|---|---:|---:|---:|
| Lehe pealkiri | `2rem` | vaikimisi rasvane | `1.15` |
| Päeva pealkiri | `1.25rem` | vaikimisi rasvane | vaikimisi |
| Tunni nimetus | `1rem` | vaikimisi rasvane | `1.35` |
| Kellaaeg | `0.9375rem` | `750` | `1.2` |
| Sisutekst | `0.875rem` | tavaline | `1.35` |
| Ainekood | `0.8125rem` | tavaline | vaikimisi |
| Silt ja ülatekst | `0.75rem` | `700` | vaikimisi |

## Vahed

Vahed põhinevad `0.125rem` sammudel. Eelistatud korduvkasutatavad väärtused:

| Väärtus | Kasutus |
|---:|---|
| `0.125rem` | Sildi ja väärtuse vahe |
| `0.25rem` | Aine nimetuse ja koodi vahe |
| `0.5rem` | Ülateksti ja pealkirja vahe |
| `0.625rem` | Päeva päise alumine vahe, detailide vahe |
| `0.75rem` | Tunnikaartide vahe |
| `1rem` | Tunnikaardi sisu ja mobiilivaate väline vahe |
| `1.25rem` | Vaate sektsioonide põhisisevahe |
| `1.5rem` | Päise ülemine sisevahe |
| `2rem` | Päevade vahe ja suure ekraani väline vahe |

## Raamid ja pinnad

- Põhivaate ja päeva eraldusjoon: `2px solid #303030`.
- Tunnikaardi raam: `1px solid #5a5a5a`.
- Tunnikaardil ei kasutata ümardatud nurki ega varju.
- Põhivaate maksimaalne laius on `42rem`.
- Mobiilivaate minimaalne toetatud laius on `320px`.

## Komponendid

### Tunniplaani päis

Sisaldab kolledži nime, lehe pealkirja, valitud rühma ja nädala kuupäevavahemikku.
Rühm ja nädal on staatiline kontekst, mitte interaktiivsed filtrid.

### Päevarühm

Koondab ühe päeva tunnid. Päeva nimi on pealkiri ja kuupäev on semantiline
`time` element. Päevi eristavad tugev joon ja piisav vertikaalne vahe.

### Tunnikaart

Tunnikaart koosneb kahest osast:

1. vasakul paiknev algus- ja lõpuaeg;
2. paremal aine nimetus, ainekood, õppejõud ja asukoht.

Tunnikaart kasutab semantilist `article` elementi. Õppejõud ja asukoht
esitatakse kirjeldusloendina. Kui asukohta allikas ei näita, kuvatakse
„Ei ole allikas näidatud”; puuduvat infot ei asendata oletusega.

## Ligipääsetavus

- Lehel on üks esimese taseme pealkiri.
- Pealkirjade tasemed kirjeldavad tunniplaani, päeva ja tunni hierarhiat.
- Kuupäevad ja kellaajad kasutavad masinloetava `dateTime` väärtusega `time`
  elemente.
- Halltoonide kontrasti tuleb kontrollida WCAG 2.2 AA järgi.
- Sisu peab säilima loetavana vähemalt `320px` laiusel ja teksti suurendamisel.
- Visuaalselt peidetud pealkiri annab nädala sektsioonile ekraanilugeja jaoks
  nimetuse.
