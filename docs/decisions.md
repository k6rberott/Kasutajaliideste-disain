# Minu enda kirjeldus suuna valiku põhjendamiseks:
Valisin suuna B, sest näen, et kui TI kasutab minu loodud moodboard'i, liigub disain palju rohkem selles suunas, mida ma ise oma peas ette kujutan. Ka mulle endale on suuna B visuaalne lahendus paremini mõistetav ja silmale meeldivam.

Lisaks tundub Codexi kasutamine ratsionaalsem, kuna see annab mulle Figma kaudu rohkem võimalusi disaini kujundada ja suunata. Figma enda TI-tööriista kasutades pean liiga palju arvestama TI krediitide kuluga, mistõttu jääb katsetamisruumi vähemaks.

Olen enda jaoks avastanud ka teatava hasardi – soovin teada, kas suudan ainult TI-tööriistu kasutades luua valmis tunniplaani rakenduse, mis vastaks nii minu enda kui ka tulevaste kasutajate vajadustele.

Praeguse plaani järgi soovin disainiprotsessi läbi viia Codexi abil ning kasutada koodi loomisel Figma Code Layerit. Nii saan katsetada erinevate TI-tööriistade koostööd ja leida enda jaoks kõige sobivama töövoo.

Loodan, et värvide ja funktsionaalsuse lisamine toob esile rohkem moodboardi olulisust.

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

### 8. 2026-11-25 Ainevärviriba toetab tunni äratundmist

**Otsus:** SUUND B mobiili- ja töölauavaate tunnikaart kasutab vasakus servas
4 px värviriba. Värv on seotud ainekoodiga ning aine nimi on alati nähtav.

**Põhjus:** riba aitab sama ainet kiiresti märgata. Nimi võimaldab ainet
tuvastada ka siis, kui värvitoone on raske eristada.

**Alternatiivid:** värvida terve kaart või kasutada ühtset kaardivärvi ilma ribata.
Kitsas riba säilitab ühetaolise tekstitausta ja annab ainele püsiva värvitähise.

**Allikas ja AI kasutus:** idee pärineb moodboard’i töölaua nädalavaatest.
Codex aitas valida viis tooni, siduda Figma ja CSS-i tokenid ning dokumenteerida
tunnikaardi kasutuse UI-kitis. Värvitoonid on kujundusotsus, mille mõju
tundide leidmisele saab kasutajatestiga hinnata.


## Kinnitatud kontroll

- Figma ID `3:4` tähistab lehte [04 Directions](https://www.figma.com/design/BLAGRRcDs6hnZ53Ovv4rfU/Tunniplaan---Indrek?node-id=3-4).
- React kuvab üht SUUND B nädalavaadet, mille paigutus kohandub ekraani laiusega. Edge’i 320 px kontrollis kuvati viis tunnikaarti ja külgkerimist ei tekkinud.

- SUUND B põhivaadete Figma kaadrilaiused jäävad 488 px mobiilis ja 1024 px töölaual. 320 px kasutatakse mobiilivaate paigutuse testiks. Kaadrite kõrgus kohandub sisuga.

## Lahtised küsimused

| Küsimus | Liik | Järgmine samm |
|---|---|---|
| Kas kaader `326:137` on otsuses nr 2 mainitud esmane laiem kavand? | disainiajalugu | Lehel `04 Directions` asuvad low-fidelity nädalavaade `326:137` ja praegune SUUND B töölauavaade `383:185`. Mõlemad on eraldi muudetavad kaadrid. Kinnitada varasema kirje seos kaadriga `326:137`. |
| Kas pärast tugevat värskendust kuvatakse sama SUUND B nädalavaade? | tehniline kontroll | Võrrelda lehe sisu enne ja pärast tugevat värskendust mobiili- ja töölaualaiusel. Senine 320 px kontroll hõlmas esmast laadimist. |
| Kas õppur on õige esmane sihtrühm? | kasutajauuring | Intervjueerida õppureid, õppejõude ja õppekorralduse töötajaid. |
| Kas mobiil on tunniplaani peamine kasutusseade? | kasutajauuring | Küsida kasutajatelt seadmekasutuse kohta ja testida prototüüpi telefonis. |
| Kust saada usaldusväärsed ruumi või õppetöö asukoha andmed? | andmed | Uurida tunniplaani teisi vaateid, andmeallikaid või API võimalust. |
| Kas ainevärviribad aitavad soovitud tunni kiiremini leida? | kasutatavuse test | Võrrelda sama tunniplaani ribadega ja ribadeta ning mõõta tunni leidmise aega ja eksimusi. Aine nimi jääb mõlemas nähtavaks. |
| Kas hiljem on vaja detailvaadet, Moodle'i ja ÕIS-i linke või kalendrisse eksporti? | funktsionaalsus | Valideerida vajadused kasutajauuringuga enne funktsioonide lisamist. |
| Kas README-sse on vaja Figma Make’i linki? | dokumentatsioon | Otsustada jagamiseks sobiva Make’i URL-i ja selle kasutusotstarbe põhjal. README viitab praegu Figma Designi failile. |
