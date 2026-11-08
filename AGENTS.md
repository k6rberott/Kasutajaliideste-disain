# Tunniplaan – Indrek

Haapsalu kolledži tunniplaani uus kasutajaliides. Kursuse "Kasutajaliideste disain" projekt.

## Projekt
- Tehnoloogia: Node.js + Vite, [Vanilla HTML/CSS/JS | React | Lit]
- Käivitamine: `npm install`, `npm run dev`
- Kood ja stiilid: `src/`, CSS failis `src/styles/`, inline-stiile ei kasuta
- Kasutajaliidese keel: eesti keel

## Töökorraldus
- Enne tööd loe `docs/brief.md`. Kui sa seda ei näe, ütle seda ja ära alusta.
- Vasta mulle eesti keeles. Kood, kommentaarid ja nimed on inglise keeles.
- Kui muudatus puudutab rohkem kui kahte faili, näita enne plaani ja oota kinnitust.
- Pärast muudatust käivita `npm run dev` ja ütle, mida ma brauseris kontrollima pean.
- Ära commiti ise. Ütle, kui muudatus on commitimiseks valmis.
- Vastuse lõpus loetle eeldused, mida sa ise tegid.

## Reeglid
- Kasuta päris tunniplaani andmeid, mitte välja mõeldud tunde. Kui sa andmeid ei näe, ütle seda.
- Tunniplaan on aadressil https://start.hk.tlu.ee/sahtelbeta/tunniplaan/index.php
- Ära lisa funktsioone, mida lähteülesanne ei nõua.
- Ligipääsetavus: WCAG 2.2 AA (kontrast, klaviatuur, semantiline HTML).
- Koodis on nimed (klassid, muutujad, failid) inglise keeles, kasutajale nähtav tekst eesti keeles.

## Ära puutu
- `docs/design-notes.md` – kursuse läbiv küsimus, muudan ise
- `docs/directions/` – valminud suunad, ära muuda ega kustuta

## Korduvad tööd (paku välja, ära tee ilma loata)
- Kui üks terviklik samm on valmis, paku commiti ja selle sõnumit. Sõnum: inglise keeles, käskivas kõneviisis, kuni 50 märki ("Add day view with real timetable data").
- Kui muutsid käivitamist, tehnoloogiat või failistruktuuri, paku README uuendust.
- Kui tegime disainiotsuse, paku kirjet faili `docs/decisions.md`: otsus, põhjus, alternatiivid, allikas või eeldus.
- Kui lisasid korduvkasutatava komponendi või uue värvi, kirja või vahe väärtuse, paku selle lisamist faili `docs/design-system.md` ja olemasoleva väärtuse kasutamist uue asemel.
- Pärast kasutajaliidese muudatust paku ligipääsetavuse kontrolli: kontrast, klaviatuur, semantiline HTML, alt-tekstid.
- Enne commiti kontrolli, et muudatuses pole saladusi ega `.env` faili.

## Dokumendid
- `docs/brief.md` – lähteülesanne ja tunniplaani sisu
- `docs/moodboard.md` – märksõnad ja visuaalne karakter (loe ainult siis, kui ma palun)
- `docs/decisions.md` – otsuste logi
- `docs/design-system.md` – komponendid ja kujundusväärtused
- `docs/directions/` – kujundussuunad ja nende põhjendused