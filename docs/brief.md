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

## Väidete tabel

| Väide | Allikas | Liik | Kuidas täpsustada |
|---|---|---|---|
| Tunniplaani kursused ei ole värvide järgi eristatud. | Tunniplaani vaatlus [4] | allikast teadaolev | – |
| Tunniplaani tekst on väike ja sama suurusega päeva-, nädala- ja kuuvaates. | Tunniplaani vaatlus | allikast teadaolev | – |
| Ainefiltri otsing võimaldab otsida aine nimetuse järgi. | Tunniplaani vaatlus | allikast teadaolev | – |
| Ainefiltri otsing ei kuva sisestatud teksti visuaalselt. | Tunniplaani vaatlus | allikast teadaolev | – |
| Ainefiltri otsing võib aeglase sisestamise korral anda vale tulemuse. | Tunniplaani vaatlus | allikast teadaolev | Korrata otsingut erineva sisestamiskiirusega |
| Filtri sulgemisel lisatakse valimata nimi filtrisse. | Tunniplaani vaatlus | allikast teadaolev | Kontrollida filtri käitumist |
| Õppejõu filtris esineb sarnane otsingu- ja valikuprobleem. | Tunniplaani vaatlus | allikast teadaolev | Kontrollida filtri käitumist |
| Kuu vaade ilma filtrita kuvab väga pika tabeli. | Tunniplaani vaatlus | allikast teadaolev | – |
| Kuupäeva kohal oleva checkbox'i funktsioon ei ole arusaadav. | Tunniplaani vaatlus | allikast teadaolev | – |
| Tunniplaani tabeli päis ei joondu alumise tabeliga. | Tunniplaani vaatlus | allikast teadaolev | – |
| Vaatevaliku nuppudel puudub aktiivse valiku visuaalne indikaator. | Tunniplaani vaatlus | allikast teadaolev | – |
| Tunniplaani tabeli read on ühevärvilised ja raskesti eristatavad. | Tunniplaani vaatlus | allikast teadaolev | – |
| Tunniplaani sihtrühm ei ole kasutajale selgelt määratletud. | Tunniplaani vaatlus | allikast teadaolev | Uurida tunniplaani sihtrühma |
| Kuuvaate loogika ei vasta alati kalendrikuule. | Tunniplaani vaatlus | allikast teadaolev | Kontrollida erinevaid kuupäevavalikuid |
| Tunniplaani vaadet ei saa järjehoidjasse lisada, jagada ega uues vahelehes avada. | Tunniplaani vaatlus | allikast teadaolev | – |
| Ekraanilugeja käsitleb nuppe linkidena. | Tunniplaani vaatlus | allikast teadaolev | Testida erinevate ekraanilugejatega |
| Lühendite KTD, KVÜ, LO ja RIF tähendused ei ole ilma hiirega vihjet avamata nähtavad. | Tunniplaani vaatlus | allikast teadaolev | – |
| Ruumide nimekirjas on segamini füüsilised ruumid, platvormid ja asukohad. | Tunniplaani vaatlus | allikast teadaolev | – |
| Ruumide nimetamise loogika on ebaühtlane ja osa nimesid on kärbitud. | Tunniplaani vaatlus | allikast teadaolev | – |
| Kuupäevamuudatused rakenduvad alles pärast „Otsi“ vajutamist. | Tunniplaani vaatlus | allikast teadaolev | – |
| „Kuni“ kõrval oleva checkbox'i eemaldamine muudab otsingu loogikat. | Tunniplaani vaatlus | allikast teadaolev | – |
| Tunniplaani põhilehel puudub h1-pealkiri ja selge struktuur. | Tunniplaani vaatlus | allikast teadaolev | – |
| Start-linkide pildil puudub alt-tekst. | Tunniplaani vaatlus | allikast teadaolev | Kontrollida HTML-i ja ekraanilugejaga |
| Tööriistaribal kasutatakse ainult ikoone, ilma tekstiliste siltideta. | Tunniplaani vaatlus | allikast teadaolev | – |
| Abiinfo on peidetud title-vihjetesse, mis ilmuvad hiirega liikudes. | Tunniplaani vaatlus | allikast teadaolev | Kontrollida klaviatuuri ja mobiili kasutust |
| Teemavahetuse nupp ei ole visuaalselt selgelt nupuna äratuntav. | Tunniplaani vaatlus | allikast teadaolev | – |
| Tunniplaan võiks sisaldada kodutööde tähtaegu. | Kasutaja ettepanek | disainiidee | Küsida teistelt õppuritelt |
| Kodutööde tähtajad võiks olla kasutaja poolt lisatavad. | Kasutaja ettepanek | disainiidee | Uurida vajadust ja tehnilisi võimalusi |
| Tunnile vajutades võiks avaneda detailne infoaken. | Kasutaja ettepanek | disainiidee | Testida prototüübiga |
| Detailvaates võiks näha aine järgmisi toimumisaegu. | Kasutaja ettepanek | disainiidee | Uurida andmete kättesaadavust |
| Kuuvaade võiks olla Google Calendari laadne. | Kasutaja ettepanek | disainiidee | Testida alternatiivseid kuuvaateid |
| Tunni detailvaates võiks olla Moodle'i ja ÕIS-i ainekaardi lingid. | Kasutaja ettepanek | disainiidee | Uurida linkide kättesaadavust |
| Tunniplaan võiks toetada Google'i, iOS-i ja Outlooki kalendreid. | Kasutaja ettepanek | disainiidee | Uurida kalendrite integreerimise võimalusi |

## 5 kõige olulisemat heuristikute analüüsi tähelepanekut

| Väide | Allikas | Liik | Kuidas täpsustada |
|---|---|---|---|
| Kasutaja ei näe selgelt, milline tunniplaani vaade (päev, nädal, kuu) on aktiivne. | Heuristikute analüüs[1] | Probleem | Aktiivne vaade peaks olema visuaalselt selgelt eristatud. |
| Ruumide loendis on segamini füüsilised ruumid, veebiplatvormid ja muud asukohad. | Heuristikute analüüs[1] | Probleem | Ruumide ja asukohtade nimetused ning kategooriad tuleks muuta ühtseks ja arusaadavaks. |
| Filtri sulgemisel võib õpetaja nimi lisanduda ka siis, kui kasutaja seda ei valinud. | Heuristikute analüüs[1] | Probleem | Filtri valimine ja rakendamine peaks olema kasutaja kontrolli all ning valimata filtreid ei tohiks rakendada. |
| Tunniplaani värvid, nimetused ja ruumide kirjapilt ei ole järjepidevad. | Heuristikute analüüs[1] | Probleem | Kasutada ühtset värvi-, nimetamis- ja vormindussüsteemi. |
| Tunniplaani tekst on väike ning kursused pole piisavalt eristatavad. | Heuristikute analüüs[1] | Probleem | Suurendada teksti loetavust ning eristada kursusi värvi või muu visuaalse tunnuse abil. |

## Allikad

### UX ja kasutatavus

1. Nielsen Norman Group. *10 Usability Heuristics for User Interface Design.*
   - https://www.nngroup.com/articles/ten-usability-heuristics/
   - https://github.com/tluhk/kasutajaliideste-disain/blob/main/materjalid/01-10-jn-heuristikut.md

   Kasutatud heuristilise analüüsi ja kasutatavuse põhimõtete põhjendamiseks.

### Ligipääsetavus

2. W3C. *Web Content Accessibility Guidelines (WCAG) 2.2.*
   https://www.w3.org/TR/WCAG/

   Kasutatud ligipääsetavuse nõuete, sh kontrastsuse, klaviatuuriga
   navigeerimise ja kasutajaliidese komponentide hindamiseks.

3. W3C Web Accessibility Initiative. *WCAG 2 Overview.*
   https://www.w3.org/WAI/standards-guidelines/wcag/

   Kasutatud WCAG standardi ja selle versioonide selgitamiseks.

### Tunniplaani vaatlus

4. Tallinna Ülikooli Haapsalu kolledži tunniplaan
   https://start.hk.tlu.ee/sahtelbeta/tunniplaan/index.php

   Kasutatud analüüsiks ja kuvatõmmiste tegemiseks.

## Viidete kasutamine

Allikatele viidatakse tekstis numbriliselt, näiteks [1], [2].

