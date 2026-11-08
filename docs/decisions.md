# Vestluse olulised otsused ja lahtised küsimused

See dokument koondab tunniplaani prototüübi käigus tehtud otsused. Väited on
eristatud järgmiselt:

- **allikast teadaolev** – kontrollitud lähteülesandest, tunniplaanist, koodist
  või Figma failist;
- **eeldus** – tõenäoline, kuid kasutajauuringu või tehnilise kontrolliga veel
  kinnitamata;
- **otsus** – selle töö käigus teadlikult valitud lahendus.

## Allikast teadaolev

| Väide | Allikas | Miks see on oluline |
|---|---|---|
| Lähteülesande peamine kasutusolukord on õppur, kes kontrollib mobiilis kiiresti järgmise tunni aega ja ruumi. | `docs/brief.md` | Määrab prototüübi esmase infovajaduse ja mobiilse vaate prioriteedi. |
| Rakendus kasutab React 18, Vite 6, JavaScripti ja eraldi CSS-faili. | `package.json`, `src/`, `README.md` | Piiritleb tehnilise lahenduse ja välistab põhjendamata tehnoloogiamuudatused. |
| Prototüüp kuvab rühma RIF 2 nädalat 09.–15. november 2026. | Haapsalu Kolledži veebitunniplaan ja rakenduse andmed | Seob vaate konkreetse kontrollitud tunniplaaniga. |
| Kontrollitud nädalal on vaates viis tundi: kaks neljapäeval ja kolm reedel. | Haapsalu Kolledži veebitunniplaan | Väldib väljamõeldud tundide lisamist. |
| Tundide asukohti kasutatud allikas ei näidanud. | Haapsalu Kolledži veebitunniplaan | Puuduvat teavet ei tohi asendada oletusega. |
| Praegune rakenduskood renderdab ainult ühe mobiilse tunniplaanivaate. | `src/main.jsx` | Kinnitab, et ajaloolisi disainivaateid lõppkasutajale ei kuvata. |
| Figma node `3:4` sisaldab praegust mobiilset tunniplaanidisaini. | Figma kuvatõmmise kontroll vestluse käigus | Eristab praeguse disaini veel arhiveerimata esmasest disainist. |
| Kasutajaliides peab vastama WCAG 2.2 AA eesmärgile. | `docs/brief.md` ja projekti tööjuhised | Nõuab semantilist HTML-i, piisavat kontrasti ja klaviatuuriga kasutatavust. |

## Eeldused

| Eeldus | Põhjendus | Kuidas kontrollida |
|---|---|---|
| Mobiilivaade on õppuri peamise kasutusolukorra jaoks sobivaim. | Lähteülesanne kirjeldab kiiret kontrolli telefonist enne tundi või tundide vahel. | Kasutajaintervjuud ja kasutatavustestid õppuritega. |
| Õppur on prototüübi esmane sihtrühm. | Põhikasutusjuhtum keskendub õppurile, kuid lähteanalüüs ütleb, et lõplik sihtrühm pole veel kinnitatud. | Võrrelda õppurite, õppejõudude ja õppekorralduse töötajate vajadusi. |
| Varasemad disainid saab säilitada Figma lehel `04 Directions` rakenduskoodist sõltumatult. | Figma frame'id ja rakenduse renderdus on erinevad väljundid. | Kontrollida Figma failis, et kõik vajalikud ajaloo-frame'id on native elementidena olemas. |
| Kasutaja antud Figma link viib õigesse projekti ja node `3:4` asub lehel `04 Directions`. | Link ja node anti vestluses kasutaja poolt. | Kontrollida Figma faili lehestruktuuri muutmisõigusega Figma Designi sessioonis. |
| Ühe vaate kuvamine vähendab segadust võrreldes prototüübi tööetappide näitamisega rakenduses. | Ajaloolised vaated dubleerisid samu andmeid ja nägid välja nagu rakenduse funktsionaalsus. | Testida, kas kasutaja saab ühe vaatega kiiremini vajaliku info kätte. |

## Otsused

### 1. 2026-11-08 Rakenduses kuvatakse ainult viimane terviklik vaade

**Liik:** otsus

**Otsus:** rakenduskoodi jääb ainult viimasena loodud mobiilne tunniplaan.
Varasemaid ekraanivaateid, andmekontrolli loendit ega disaini põhjendusi
lõppkasutajale ei kuvata.

**Põhjus:** üks terviklik vaade hoiab rakenduse fookuse õppuri põhivajadusel ja
ei esita prototüübi tööetappe ekslikult rakenduse sisuna.

**Alternatiivid:** kuvada vaated üksteise all või lisada eraldi andmekontrolli
sektsioon. Need variandid dubleeriksid andmeid ja muudaksid vaate eesmärgi
ebaselgemaks.

### 2. 2026-11-08 Disainiajalugu säilitatakse ainult Figmas

**Liik:** otsus

**Otsus:** iga eelnev disain säilitatakse native Figma frame'ina lehel
`04 Directions`, kuid seda ei hoita rakenduse renderduskoodis.

**Põhjus:** Figma Directionsi leht dokumenteerib kujunduse arengut, samal ajal
kui rakendus peab näitama ainult kehtivat lahendust.

**Alternatiivid:** säilitada ajalugu Gitist taastatava JSX-i ja CSS-ina või
kuvada see rakenduses. Git säilitab küll koodiajaloo, kuid ei asenda kursuse jaoks
vajalikku visuaalset Figma ajalugu.

### 3. 2026-11-08 Prototüüp kasutab mobiilipõhist low-fidelity kujundust

**Liik:** otsus

**Otsus:** vaade kasutab halltoone, lihtsaid raame, kandilisi tunnikaarte ja
minimaalselt dekoratiivseid elemente.

**Põhjus:** low-fidelity vorm aitab hinnata infohierarhiat ja kasutatavust enne
lõpliku visuaalse stiili või brändivärvide valimist.

**Alternatiivid:** kasutada kohe brändivärve või ainepõhiseid värve. Need jäeti
praegusest etapist välja, sest nende vajadus ja tähendus pole veel testitud.

### 4. 2026-11-08 Kasutatakse ainult kontrollitud tunniplaaniandmeid

**Liik:** otsus

**Otsus:** kuvatakse ainult allikast kontrollitud tunnid, kuupäevad, kellaajad,
ainekoodid ja õppejõud. Asukoha puudumisel näidatakse teksti „Ei ole allikas
näidatud”.

**Põhjus:** kasutajale ei tohi esitada oletuslikku õppetöö asukohta.

**Alternatiivid:** jätta asukoha rida peitu või lisada oletatav ruum. Peitmine
võiks jätta mulje kuvamisveast ja oletuslik ruum oleks ebausaldusväärne.

### 5. 2026-11-08 Rühm ja nädal on praegu staatiline kontekst

**Liik:** otsus

**Otsus:** „RIF 2” ja „09.–15. november 2026” kuvatakse infona, mitte
interaktiivsete filtritena.

**Põhjus:** lähteülesanne nõuab ühe konkreetse nädala põhivaadet ega nõua
filtreerimise funktsionaalsust.

**Alternatiivid:** lisada rühma- ja nädalavalikud. Need oleksid praeguses etapis
põhjendamata lisafunktsioonid.

### 6. 2026-11-08 HTML-i struktuur peab kirjeldama sisu tähendust

**Liik:** otsus

**Otsus:** lehel kasutatakse üht `h1` pealkirja, päevade jaoks `h2`, tundide
jaoks `h3`, tundide jaoks `article`, kuupäevade ja kellaaegade jaoks `time` ning
õppejõu ja asukoha jaoks kirjeldusloendit.

**Põhjus:** semantiline struktuur toetab ekraanilugejaid ja vastab WCAG 2.2 AA
eesmärgile.

**Alternatiivid:** kasutada ainult visuaalseid `div` elemente. See muudaks sisu
abitehnoloogiate jaoks vähem arusaadavaks.

### 7. 2026-11-08 README dokumenteerib ainult olemasolevaid käske ja kontrollitud ulatust

**Liik:** otsus

**Otsus:** README-st eemaldati puuduv `npm run preview` käsk ning lisati
prototüübi ulatus, andmeallikas ja Figma Designi link.

**Põhjus:** dokumentatsioon ei tohi lubada käsku, mida `package.json` ei paku,
ning peab selgitama andmete päritolu.

**Alternatiivid:** lisada `preview` skript ainult README-ga vastavusse viimiseks.
Seda ei tehtud, sest projekti käivitamist ei olnud vaja muuta.

## Lahtised küsimused

| Küsimus | Liik | Järgmine samm |
|---|---|---|
| Kas esmane laiem disain on lehel `04 Directions` eraldiseisva native Figma frame'ina olemas? | tehniline kontroll | Avada Figma Designi muutmisõigusega sessioon ja kontrollida lehte. Vestluse Make-sessioonil puudus kirjutusühendus, seega frame'i loomist ei saanud kinnitada. |
| Kas node `3:4` kuulub kindlasti lehele `04 Directions`? | tehniline kontroll | Kontrollida Figma faili lehestruktuuri; kuvatõmmise põhjal sai kinnitada node'i sisu, mitte lehe nime. |
| Kas brauseri eelvaade näitab pärast tugevat värskendust ainult viimast vaadet? | tehniline kontroll | Teha eelvaates tugev värskendus. Serveri pakutud lähtekood sisaldas ainult üht `.mobile-frame` elementi. |
| Kas õppur on õige esmane sihtrühm? | kasutajauuring | Intervjueerida õppureid, õppejõude ja õppekorralduse töötajaid. |
| Kas mobiil on tunniplaani peamine kasutusseade? | kasutajauuring | Küsida kasutajatelt seadmekasutuse kohta ja testida prototüüpi telefonis. |
| Kust saada usaldusväärsed ruumi või õppetöö asukoha andmed? | andmed | Uurida tunniplaani teisi vaateid, andmeallikaid või API võimalust. |
| Kas tunnikaartide eristamiseks on vaja ainepõhiseid värve? | disain | Testida halltoonides ja värvilist varianti; värv ei tohi olla ainus eristamise viis. |
| Kas hiljem on vaja detailvaadet, Moodle'i ja ÕIS-i linke või kalendrisse eksporti? | funktsionaalsus | Valideerida vajadused kasutajauuringuga enne funktsioonide lisamist. |
| Kas README-s peaks Figma Designi lingi kõrval olema eraldi Figma Make'i link? | dokumentatsioon | Lisada link ainult siis, kui õige Make'i URL on teada ja avaldamiseks sobiv. |
