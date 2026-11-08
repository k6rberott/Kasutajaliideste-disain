# Haapsalu Kolledži tunniplaani analüüs

## 1. Lähteolukord
Haapsalu Kolledži olemasolev tunniplaan võimaldab vaadata õppetöö ajakava ning filtreerida tunniplaani aine, õppejõu, ruumi ja kuupäeva järgi.

**Mis töötab:**
- Tunniplaani saab vaadata erinevates ajavaadetes.
- Olemas on aine, õppejõu ja ruumi filtrid.
- Kuupäevavahemiku kaudu saab tunniplaani otsida.
- Tunniplaan sisaldab õppetöö korraldamiseks vajalikku põhiinfot.

**Mis häirib või on segane:**
- Kasutajaliideses puudub visuaalne hierarhia.
- Filtrite käitumine ei ole alati intuitiivne.
- Valitud vaate ja süsteemi olek ei ole piisavalt nähtavad.
- Tabeli struktuur ja värvikasutus raskendavad kiiret info leidmist.
- Mobiilse kasutuse ja ligipääsetavuse probleemid.
- Lühendid, ikoonid ja abiteave ei ole piisavalt selged.
- Tunniplaani jagamine ja isiklikuks kasutamiseks salvestamine on piiratud.

**Mis võiks lisanduda:**
- Kursuste eristamine värvidega.
- Tunnile vajutades detailvaade.
- Moodle'i ja ÕIS-i lingid.
- Kodutööde tähtajad.
- Kalendrisse eksportimine või sünkroonimine.
- Google'i, Apple'i ja Outlooki kalendrite tugi.
- Google Calendari laadne kuuvaade.

## 2. Kasutajad
Praeguse analüüsi põhjal ei ole tunniplaani sihtrühm piisavalt selgelt määratletud.
| Kasutaja | Peamine vajadus |
|---|---|
| Haapsalu Kolledži õppur | Kontrollida õppepäevade ja sessioonide ajakava. Vaadata oma tunniplaani ja leida järgmine tund |
| Õppejõud | Vaadata oma tundide ajakava ja ruume |
| Õppekorralduse töötaja | Kontrollida tunniplaani ja õppetöö korraldust |

Edasises uuringus tuleks täpsustada, kas tunniplaan on mõeldud eelkõige õppuritele, õppejõududele või kõigile kolledži kasutajatele.

## 3. Ülesanded
Heuristilise analüüsi põhjal võiksid kasutaja ülesanded olla järgmised:
- Näen ühe pilguga tänaseid tunde ja ruume.
- Leian kiiresti konkreetse aine tunnid.
- Otsin tunniplaanist õppejõu nime.
- Näen, milline tunniplaani vaade on valitud.
- Eristan erinevaid aineid visuaalselt.
- Leian tunni täpse asukoha.
- Saan aru, mida tunniplaani filtrid ja ikoonid tähendavad.
- Näen tunnile vajutades selle detailset infot.
- Leian aine Moodle'i ja ÕIS-i lingid.
- Saan lisada tunniplaani oma kalendrisse.
- Saan tunniplaani jagada või salvestada.
- Näen õppetööga seotud kodutööde tähtaegu.

## 4. Kasutusolukorrad
| Kasutusolukord | Seade | Kasutaja vajadus |
|---|---|---|
| Enne tundi | Mobiil | Kontrollida tunni aega ja ruumi |
| Tundide vahel | Mobiil | Leida järgmine tund kiiresti |
| Kodus õppimist planeerides | Sülearvuti | Vaadata nädala või kuu tunniplaani |
| Õppejõu töö planeerimine | Sülearvuti | Vaadata oma tundide ajakava |
| Tunniplaani jagamine | Mobiil või arvuti | Saata ajakava kaaslasele |
| Kodutööde planeerimine | Mobiil või arvuti | Kontrollida tähtaegu |

Peamine kasutusolukord: õppur vaatab mobiiltelefonist kolledžis viibides kiiresti, millal ja kus toimub tema järgmine tund.

## 5. Piirangud
**Ligipääsetavus:**
- WCAG 2.2 AA.
- Ekraanilugejate tugi.
- Klaviatuuriga navigeerimine.
- Nuppude ja linkide korrektne semantika.
- Selged tekstilised nimetused ikoonidele.
- Piisav kontrastsus.
- Kohandatav tekstisuurus.
- Abiinfo ei tohi sõltuda ainult hiirega hover-efektist.

**Keeled:**
- Eesti keel.
- Inglise keel.
- Vajadusel vene keel.

**Ekraanid:**
- Mobiiltelefon.
- Tahvelarvuti.
- Sülearvuti.
- Suurem monitor.

**Kolledži kontekst:**
- Õpperühmad ja erinevad õppevormid.
- Õppejõudude tunniplaanid.
- Haapsalu Kolledži ruumid ja õppehooned.
- Moodle'i ja ÕIS-i kasutamine.
- Õppetöö muudatused ja kodutööde tähtajad.

**Andmed ja tehnika:**
- Tunniplaani andmete uuendamise sagedus.
- Tunniplaani andmete päritolu.
- Kalendritega integreerimise võimalused.
- Kasutaja autentimine.
- Olemasoleva tunniplaani tehnilised piirangud.

## 6. Põhikasutusjuhtum
**Õppur kontrollib kiiresti oma järgmise tunni aega ja ruumi**

**Kasutaja:** Haapsalu Kolledži õppur.

**Eesmärk:** leida võimalikult kiiresti järgmise tunni aeg, aine ja ruum.

**Kasutusolukord:** õppur on kolledžis, kasutab mobiiltelefoni ning tal on vähe aega.

**Tegevused:**
1. Avab tunniplaani.
2. Näeb tänast kuupäeva ja tunniplaani.
3. Leiab järgmise tunni.
4. Kontrollib aine nimetust, algusaega ja ruumi.
5. Vajadusel avab tunni detailse info.
Miks see on keskne?
- See on korduv ja igapäevane.
- Kasutaja vajab infot kiiresti.
- See on seotud tunniplaani kõige olulisema funktsiooniga.
- See võimaldab hinnata, kas tunniplaani põhiteave on piisavalt selge ja kergesti leitav.

## 7. Avatud küsimused
**Kasutajad:**
- Kes kasutab tunniplaani kõige rohkem?
- Kas õppurid kasutavad tunniplaani rohkem mobiilis või arvutis?
- Kas õppejõud vajavad sama tunniplaani lahendust?
- Kas tunniplaan peab olema kasutatav ilma sisse logimata?

**Funktsionaalsus:**
- Kas kodutööde tähtajad peaksid olema tunniplaani osa?
- Kas tunniplaan peab toetama kalendrisse eksportimist?
- Kas tunniplaanis peaks olema tunnimuudatuste teavitused?
- Kas kasutaja peaks saama aineid värvidega eristada?
- Kas kasutaja saab salvestada oma isikliku tunniplaani?
- Kas tunniplaan peab toetama jagamist?

**Tehnilised küsimused:**
- Kas olemasolev süsteem võimaldab kalendritega integreerimist?
- Kas tunniplaani andmed on saadaval API kaudu?
- Kas tunniplaani kasutajaliidest saab muuta või tuleb arvestada olemasoleva süsteemi piirangutega?

## 8. Heuristilise analüüsi peamised järeldused
Kõige olulisemad probleemivaldkonnad järgmised:
| Prioriteet | Probleemivaldkond | Mõju kasutajale |
|---|---|---|
| 1 | Süsteemi oleku nähtavus | Kasutaja ei saa aru, milline vaade või filter on aktiivne |
| 2 | Järjepidevus ja standardid | Kasutajaliidese käitumine ei ole etteaimatav |
| 3 | Süsteemi ja reaalse maailma vastavus | Lühendid, ikoonid ja filtrid on segased |
| 4 | Esteetiline ja minimalistlik disain | Info leidmine võtab rohkem aega |
| 5 | Ligipääsetavus | Osa kasutajaid ei saa tunniplaani mugavalt kasutada |

Heuristiline analüüs tuvastab kasutatavuse probleeme eksperdi vaatenurgast. See ei tõesta veel, et kõik probleemid mõjutavad kasutajaid samal määral. Seetõttu tuleks järgmises etapis kontrollida neid kasutajaintervjuude või kasutatavuse testimisega.

Esialgne disainisuund
Tunniplaani lahendus peaks lähtuma põhimõttest:
Kõige olulisem info peab olema nähtav ühe pilguga, ilma et kasutaja peaks seda otsima.

Sellest tulenevalt võiks esmane disain keskenduda:
- Tänase päeva vaatele.
- Järgmise tunni esiletõstmisele.
- Tunni algusaja, aine ja ruumi selgele esitamisele.
- Tunniplaani muudatuste nähtavusele.
- Mobiilse kasutuse mugavusele.
Järgmine samm: koostada prioriseeritud probleemide tabel, kus igale probleemile lisatakse heuristika, WCAG kriteerium, raskusaste ja konkreetne parandusettepanek.

## Väidete tabel

| **Väide** | **Allikas** | **Liik** | **Kuidas täpsustada** |
|---|---|---|---|
| Tunniplaanis on võimalik vaadata aineid, aegu ja ruume | tunniplaani vaatlus | allikast teadaolev | – |
| Tunniplaanis on olemas päeva-, nädala- ja kuuvaade | tunniplaani vaatlus | allikast teadaolev | – |
| Tunniplaanis on aine, õppejõu ja ruumi filtrid | tunniplaani vaatlus | allikast teadaolev | – |
| Ainefiltri otsing ei tööta alati ootuspäraselt | heuristiline analüüs | allikast teadaolev | testida erinevate otsingusõnadega |
| Filtri sulgemisel võib lisanduda soovimatu valik | heuristiline analüüs | allikast teadaolev | korrata probleemi kasutatavuse testis |
| Tunniplaani kuuvaade võib olla liiga pikk ja raskesti jälgitav | heuristiline analüüs | eksperdi hinnang | testida kasutajatega |
| Kasutajal on raske aru saada, milline vaade on aktiivne | heuristiline analüüs | eksperdi hinnang | testida vaate valimise ülesandega |
| Tunniplaani read on visuaalselt raskesti eristatavad | heuristiline analüüs | eksperdi hinnang | võrrelda erinevaid visuaalseid lahendusi |
| Kasutajad soovivad kursusi värvide järgi eristada | oma kogemus | eeldus | küsida õppuritelt |
| Tunniplaani kasutatakse peamiselt mobiiltelefonis | oma kogemus | eeldus | küsida õppuritelt ja õppejõududelt |
| Õppurid vajavad kiiret ülevaadet järgmise tunni ajast ja ruumist | UX-analüüs | eeldus | teha kasutajaintervjuusid |
| Tunnile vajutades peaks avanema detailne info | UX-analüüs | disainiidee | testida prototüübiga |
| Tunniplaan võiks sisaldada kodutööde tähtaegu | kasutaja ettepanek | disainiidee | uurida õppurite vajadusi |
| Tunniplaan võiks toetada Google'i, Apple'i ja Outlooki kalendreid | kasutaja ettepanek | disainiidee | uurida kalendrite kasutamist |
| Kasutajad soovivad tunniplaani jagada või järjehoidjasse lisada | heuristiline analüüs | eeldus | küsida õppuritelt |
| Tunniplaani värvide ja tekstisuuruse muutmine parandaks kasutatavust | UX-analüüs | eeldus | testida prototüübiga |
| Tunniplaan peab vastama WCAG 2.2 AA nõuetele | projekti piirang | nõue | kontrollida ligipääsetavuse auditiga |
| Moodle'i ja ÕIS-i lingid tunniplaani detailvaates oleksid kasulikud | kasutaja ettepanek | disainiidee | küsida õppuritelt |
| Tänase päeva vaade peaks olema tunniplaani avaleht | UX-analüüs | disainiotsus | testida prototüübiga |