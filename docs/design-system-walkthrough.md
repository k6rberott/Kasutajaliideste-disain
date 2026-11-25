# SUUND B disainisüsteemi praktiline juhend

Juhend selgitab, mida Codex SUUND B tunniplaani disainisüsteemi loomisel tegi ja kuidas saad sama töö Figmas ning koodis ise läbi teha. Harjutamiseks tee Figma failist koopia. Nii saad muuta ka jagatud muutujaid ja peakomponente. [Figma UI-kit](https://www.figma.com/design/BLAGRRcDs6hnZ53Ovv4rfU/Tunniplaan---Indrek?node-id=383-2)

## Disainiotsused ja teostus

Indrek valis SUUND B ja oma moodboard’i rohelise suuna. Tema tagasiside põhjal lisandusid ainet eristavad värviribad, tume teema koos lülitiga ja HK roheline aktsent. Nädalavaade jäi detailseks avavaateks. Kuuvaade tehti kompaktseks ning seal kuvatakse tunni aeg ja ainenimi.

Codex rakendas need otsused Figma muutujate, tekstistiilide, komponentide ja Auto Layouti abil. Ta viis samad tokenid Reacti ja CSS-i, täiendas UI-kitti ning kontrollis värvikontrasti ja 320 px paigutust. Valikute põhjendused ja tagasiside põhjal tehtud parandused on kirjas [otsuste logis](decisions.md).

## 1. Loo värvimuutujad ja kasuta neid kaardil

**Mida Codex tegi.** Ta eraldas värviprimitiivid semantilistest tokenitest. Primitiiv sisaldab värvi toorväärtust. Semantiline token kirjeldab kasutuskohta. Näiteks `color-lesson-tint-hki5122` määrab veebiraamistike tunnikaardi tausta ja viitab heledas ning tumedas teemas eri primitiividele.

**Kuidas ise teha**

1. Ava Figmas **Local variables**. Loo või kasuta kogumikku **Color Primitives** ja lisa sinna kaks värvimuutujat, üks heleda ja teine tumeda tausta jaoks. Olemasolevas failis saad eeskujuks võtta `primitive-light-lesson-tint-hki5122` ja `primitive-dark-lesson-tint-hki5122`.
2. Ava **Color Tokens**, kus on režiimid **Light** ja **Dark**. Loo samanimeline semantiline token ühise rolli jaoks. Sea kummagi režiimi väärtuseks sobiva primitiivi viide ehk *alias*.
3. Vali kaardi instants ja seo selle **Fill** semantilise tokeniga. Vali kaadri värvirežiimiks kordamööda **Light** ja **Dark**. Kaardi taust peab muutuma koos režiimiga.
4. Kontrolli **Selection colors** alt, et kaardi taust näitab tokeni nime. Vaata üle ka tekstikontrast mõlemal taustal. [Kuma näidised ja kontrast Figmas](https://www.figma.com/design/BLAGRRcDs6hnZ53Ovv4rfU/Tunniplaan---Indrek?node-id=422-162)

## 2. Seo tekstistiil tüpograafiamuutujatega

**Mida Codex tegi.** Ta lõi seitse tekstistiili, mis kasutavad semantilisi muutujaid kirjatüübi, stiili, suuruse ja reavahe jaoks. Näiteks `SUUND B/Day` kasutab 13 px suurust ja 18 px reavahet.

**Kuidas ise teha**

1. Loo tüpograafiaprimitiivide kogumikku arvuline muutuja `primitive-font-size-day` väärtusega **13**. Loo tüpograafiatokenite kogumikku `font-size-day` ning seo see primitiiviga.
2. Loo või muuda tekstistiili. Seo fondi suurus tokeniga `font-size-day`. Sama võttega seo kirjatüüp, paksus või stiil ning reavahe vastavate muutujatega.
3. Rakenda tekstistiil päeva pealkirjale. Muuda harjutuskoopias primitiivi väärtust ja kontrolli, et stiili kasutav tekst muutuks kaasa. HTML-is tuleb päeva pealkirja tähendus elemendist `h2`. CSS määrab selle välimuse.

## 3. Ehita tunnikaart Auto Layoutiga

**Mida Codex tegi.** Ta ladus tunnikaardi sisu vertikaalselt ja sidus vahed ning sisevahed tokenitega. Kaardi instants täidab päevagrupi laiuse ja kasvab tekstiga. Päevagrupp omakorda kuulub põhivaate Auto Layouti.

**Kuidas ise teha**

1. Lisa kaardile kellaaeg, aine, ainekood, õppejõud ja asukoht. Vali tekstikihid ja vajuta **Shift+A**. Sea paigutuse suunaks **Vertical**.
2. Seo ridade vahe ja padding olemasolevate vahemuutujatega. Vali näiteks `space-1` 4 px vahe jaoks või `space-2` 8 px vahe jaoks.
3. Sea päevagruppi lisatud kaardi laius olekusse **Fill container** ja kõrgus olekusse **Hug contents**. Sea teksti laius samuti täitma konteinerit ning lase tekstikihi kõrgusel teksti järgi kasvada.
4. Pane päevagrupi pealkiri ja kaartide loend oma vertikaalsesse Auto Layouti. Anna põhivaate kaadrile **Fixed** laius. Projekti kaadrite laiused on mobiilis **488 px** ja töölaual **1024 px**.
5. Testi mobiilikaadri koopiat **320 px** laiusel. Kui laius on seotud muutujaga, eemalda ainult koopial laiuse seos enne mõõdu muutmist. Kontrolli, et pikk ainenimi murdub ja kaart kasvab ilma külgkerimiseta. Kasuta näiteks „Veebiraamistike rakendamine”. [Mobiili nädalavaade](https://www.figma.com/design/BLAGRRcDs6hnZ53Ovv4rfU/Tunniplaan---Indrek?node-id=383-139)

## 4. Tee kaart komponendiks ja kasuta instantse

**Mida Codex tegi.** Ta lõi UI-kitti korduvkasutatavad komponendid ja kasutas põhivaadetes nende instantse. Tunnikaardil on `location=known` ja `location=missing` variandid. Teemavahetuse nupul on heleda ja tumeda teema tava- ning fookusolekud.

**Kuidas ise teha**

1. Vali Auto Layoutiga kaart ja kasuta **Create component**. Lisa teine variant ja nimeta variandi omaduseks `location`. Määra väärtused `known` ja `missing`.
2. Lisa kellaajale, ainenimele ja teistele muutuvatele väljadele tekstiomadused. Seosta need vastavate tekstikihtidega. Pane peakomponendid lehele **05 UI-kit** ja lisa igaühele lühike kasutusjuhis.
3. Too kaart menüüst **Assets** päevagruppi. Sisesta instantsi omaduste kaudu tunni andmed ja vali asukohale sobiv variant.
4. Vali instantsil **Go to main component**. Muuda harjutuskomponendi sisevahet ja kontrolli, et muutus jõuab selle instantsideni. [Tunnikaardi komponendikomplekt](https://www.figma.com/design/BLAGRRcDs6hnZ53Ovv4rfU/Tunniplaan---Indrek?node-id=383-77)

## 5. Kasuta samu tokeneid veebis

**Mida Codex tegi.** Ta viis Figma tokenite nimed ja väärtused faili `src/styles/tokens.css`. Heledad semantilised väärtused on `:root` plokis ning tumedad väärtused plokis `:root[data-theme="dark"]`. Komponentide CSS kasutab `var(--tokeni-nimi)` viiteid.

**Kuidas ise teha**

1. Kontrolli Figma muutuja **Web code syntax** välja. Näiteks `color-lesson-tint-hki5122` vaste on `var(--color-lesson-tint-hki5122)`.
2. Lisa või leia CSS-is sama primitiiv ja semantiline token. Seo hele ja tume väärtus vastava primitiiviga. Arvulise paigutustokeni puhul kasuta sama mõõtu. Näiteks Figma 40 px vastab koodis tokenile `--size-control: 2.5rem`, kui brauseri juurkirjasuurus on 16 px.
3. Viita komponendi CSS-is semantilisele tokenile. SUUND B tunnikaart saab ainekoodi kaudu `--lesson-tint` väärtuse, mis osutab sellele ainele määratud taustatokenile.
4. Käivita `npm run dev` ja kontrolli mõlemat teemat ning nädala- ja kuuvaadet. Brauseri arendustööriistades vaata konkreetse kaardi arvutatud taustavärvi ja võrdle seda sama Figma kaardi värviga. [CSS-i tokenid](../src/styles/tokens.css) · [Vaadete CSS](../src/styles/main.css)

## Näita seminaril üht terviklikku näidet

Vali veebiraamistike tunnikaart. Näita järjest kaardi taustatokenit ja selle heledat ning tumedat viidet, kaardi Auto Layouti seadeid, tekstiomadust ning sama tokeni kasutust CSS-is. Põhjenda, miks kasutad ainevärvi nime kõrval ja miks kuuvaate kirje on nädalavaate kaardist kompaktsem.
