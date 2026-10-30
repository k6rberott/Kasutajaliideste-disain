# Haapsalu Kolledži tunniplaan:

**Mis häirib/ei meeldi:**
- Kursustel võiks olla erinevad värvid - silma järgi on lihtsam soovitud kursust leida.
- Tekst on väike ja igas vaates sama suurusega - päev, nädal, kuu
- Aine filter võimaldab ka põhimõtteliselt teksti järgi otsimist. Visuaalselt trükkimist näha ei ole, aga see töötab. Kui sa sisestad tähed aeglaselt, siis peale lühikest pausi saad aine mis algab teise trükitud tähega, mitte otsingusõnaga kus need kaks tähte järjest on. Kokkuvõtvalt võiks seal olla tekstiväli, mis laseb nimetuse kaudu ainet otsida. Sama lugu õppejõududega. Mõlemal juhul, välja sulgedes, lisatakse sulle filtrisse viimati valitud nimi, isegi kui sa seda ei valinud.
- Kuu vaade ilma filtrita annab väga pika tabeli, kas see on üldse sellisel kujul kellelegi vajalik?
- Mida see checkbox kuupäeva kohal teeb?
- Tunniplaani tabeli päis ei kohandu alumise tabeliga.
- “Täna”, “Homme”, “Nädal” ja “Kuu” nuppudele vajutades ei ole mitte mingisugust indikaatorit, milline nupp hetkel valitud on.
- Kuna kõik tunniplaani tabeli read on ühte värvi, on raske erinevaid ridu kiire pilguga eristada.
- Kellele tunniplaan mõeldud on?
- Kuu filtri loogika arusaamatu - See ei tähenda alati kalendrikuud.
- vaadet ei saa järjehoidjasse panna, kaaslasele saata ega uues vahelehes avada;
- ekraanilugeja peab neid linkideks, kuigi need on tegelikult nupud;
- Lühendeid KTD, KVÜ, LO ja RIF ei selgitata. Juhendi järgi näeb täisnime ainult hiirega üle liikudes, mis telefonis ei tööta.
- Ruumide nimekirjas on segamini füüsilised ruumid, platvormid (Moodle, Teams, Zoom), terve ülikool („TLÜ“) ja staadion. Nimetamise loogika vahetub („Auditoorium 106“ vs „HNRK, Sadama 16 Haapsalu“) ja üks nimi on poolikuks lõigatud: „Haapsalu Kunstikool, Jaani 2 Haa“.
- Juhendi järgi rakenduvad kuupäevamuudatused alles pärast „Otsi“ vajutamist. „Kuni“ kõrval on linnuke, mille eemaldamine muudab otsingu loogikat. See käitumine ei ole intuitiivne.
- Põhilehel ei ole ühtegi pealkirja (h1) ega selget struktuuri.
- Start-linkide nupp on pilt, millel puudub alt-tekst, nii et ekraanilugeja jaoks on see tühi link.
- Tööriistaribal on ainult ikoonid, tekstisilte ei ole.
- Abiinfo on peidetud title-vihjetesse, mis ilmuvad ainult hiirega.
- Teemavahetuse nupu puhul ei ole arusaadav, et see üldse nupp on (asub paremapoolses menüüs all paremas nurgas, näeb välja nagu TÜ logo).

**Mis võiks juures olla:**
- Tunniplaanis võiks kajastuda jooksvalt ka kodutööde tähtajad. 
- Kui mitte vaike vaates, siis võiks vähemalt olla võimalus lisada need väljad.
- Tunnile vajutades võiks avaneda aken detailse infoga, kus on kirjas ka järgmised selle aine toimumise ajad kuni lõpuni.
- Kuu vaade võiks avaneda “google calendar” stiilis või midagi sellist.
- Lisaks ülemisele punktile, tunnile vajutades võiks avanevas infoaknas olla link ka moodle-le ja ÕIS-is aine ainekaardile.
- google kalendrile võiks lisaks iOS ja outlook kalendrid ka olla

# Heuristikud

Allpool on iga märkus seotud Nielseni heuristikaga. Esimesena on toodud peamine heuristika, sulgudes kõrvalised.

Heuristikad on nummerdatud järgmiselt:

1. **Süsteemi oleku nähtavus**
2. **Süsteemi ja reaalse maailma vastavus**
3. **Kasutaja kontroll ja vabadus**
4. **Järjepidevus ja standardid**
5. **Vigade ennetamine**
6. **Äratundmine meenutamise asemel**
7. **Paindlikkus ja kasutamise tõhusus**
8. **Esteetiline ja minimalistlik disain**
9. **Aita kasutajal vigu ära tunda, diagnoosida ja neist taastuda**
10. **Abi ja dokumentatsioon**

## Märkused ja heuristikad

| # | Märkus | Heuristika |
|---|---|---|
| 1 | Kursustel võiks olla erinevad värvid. | **6. Äratundmine meenutamise asemel** (8) |
| 2 | Tekst on väike ja igas vaates sama suurusega. | **8. Esteetiline ja minimalistlik disain** (7): visuaalne hierarhia puudub ja kasutaja ei saa vaadet kohandada. |
| 3 | Aine/õppejõu filtris on nähtamatu otsing, vale tulemus ja sulgedes lisatakse valimata nimi. | **1. Süsteemi oleku nähtavus** (trükitut ei näe), **5. Vigade ennetamine** (soovimatu nimi lisatakse filtrisse) (3, 7). |
| 4 | Kuu vaade ilma filtrita annab väga pika tabeli. | **8. Esteetiline ja minimalistlik disain** (7) |
| 5 | Mida teeb checkbox kuupäeva kohal? | **2. Süsteemi ja reaalse maailma vastavus** (6, 10) |
| 6 | Tabeli päis ei joondu alumise tabeliga. | **4. Järjepidevus ja standardid** (8) |
| 7 | Täna/Homme/Nädal/Kuu nuppudel pole valitud oleku indikaatorit. | **1. Süsteemi oleku nähtavus** |
| 8 | Kõik read on ühte värvi ja neid on raske eristada. | **8. Esteetiline ja minimalistlik disain** (6) |
| 9 | Kellele tunniplaan mõeldud on? | **2. Süsteemi ja reaalse maailma vastavus**: sihtrühm ja nende vajadused pole selged (8). |
| 10 | „Kuu“ ei tähenda alati kalendrikuud. | **2. Süsteemi ja reaalse maailma vastavus** (4) |
| 11 | Vaadet ei saa järjehoidjasse panna, jagada ega uues vahelehes avada. | **3. Kasutaja kontroll ja vabadus** (4: veebi tavakonventsioonid, 7: tõhusus) |
| 12 | Ekraanilugeja peab nuppe linkideks. | **4. Järjepidevus ja standardid** (HTML-semantika) |
| 13 | Lühendeid KTD, KVÜ, LO, RIF ei selgitata, täisnimi on näha vaid hiirega. | **2. Süsteemi ja reaalse maailma vastavus** (6, 10) |
| 14 | Ruumide nimekirjas on segamini ruumid, platvormid ja asukohad, nimetamise loogika vahetub ja üks nimi on poolikuks lõigatud. | **4. Järjepidevus ja standardid** (2, 8) |
| 15 | Kuupäevamuudatused rakenduvad alles pärast „Otsi“ vajutamist ja „Kuni“ linnuke muudab loogikat. | **1. Süsteemi oleku nähtavus** (5, 2) |
| 16 | Põhilehel pole h1-pealkirja ega selget struktuuri. | **4. Järjepidevus ja standardid** (8) |
| 17 | Start-linkide pildil puudub alt-tekst ja ekraanilugeja jaoks on see tühi link. | **4. Järjepidevus ja standardid** (WCAG) (6) |
| 18 | Tööriistaribal on ainult ikoonid, tekstisilte pole. | **6. Äratundmine meenutamise asemel** (2) |
| 19 | Abiinfo on peidetud title-vihjetesse, mis toimivad ainult hiirega. | **10. Abi ja dokumentatsioon** (7, 6) |

## Kokkuvõte

Kõige rohkem probleeme esineb **heuristikaga 4 (järjepidevus ja standardid)** ning heuristikatega **1 (süsteemi oleku nähtavus), 2 (süsteemi ja reaalse maailma vastavus) ja 8 (esteetiline ja minimalistlik disain)**.

**Heuristika 9 (aita kasutajal vigu ära tunda, diagnoosida ja neist taastuda)** ei ole ühegi märkuse peamine heuristika. Selle alla võiks paigutada punkti 3 selle osa, kus kasutaja ei saa soovimatult lisatud nime lihtsalt eemaldada, kui see nii on.

### Ligipääsetavus ja WCAG

Ligipääsetavusega seotud punktid (12, 16 ja 17) sobivad Nielseni raamistikku eelkõige heuristika 4 kaudu. Aruande jaoks tasub need lisaks siduda konkreetsete **WCAG-i edukriteeriumidega**, näiteks:

- **WCAG 1.1.1 – Mittetekstiline sisu:** piltidel peab olema sobiv tekstiline alternatiiv, kui see on vajalik nende eesmärgi mõistmiseks.
- **WCAG 1.3.1 – Teave ja seosed:** sisu struktuur ja seosed peavad olema programmiliselt kindlakstehtavad.
- **WCAG 4.1.2 – Nimi, roll, väärtus:** kasutajaliidese komponentide nimi ja roll peavad olema programmiliselt kindlakstehtavad ning nende olek ja väärtus vajaduse korral määratavad.