import type { Metadata } from "next";
import { privacyConfig as c } from "@/config/privacy";
import { breadcrumbJsonLd } from "@/config/seo";

export const metadata: Metadata = {
  title: "Adatkezelési tájékoztató",
  description: `${c.companyFullName} adatkezelési tájékoztatója. Tudnivalók a személyes adatok kezeléséről, az érintettek jogairól és az adatfeldolgozókról.`,
  openGraph: {
    url: "https://idopontfoglalom.hu/adatkezelesi-tajekoztato",
    type: "website",
    locale: "hu_HU",
    siteName: "IdőpontFoglalóm",
  },
  alternates: {
    canonical: "https://idopontfoglalom.hu/adatkezelesi-tajekoztato",
  },
};

export default function PrivacyPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "IdőpontFoglalóm", url: "https://idopontfoglalom.hu" },
    { name: "Adatkezelési tájékoztató", url: "https://idopontfoglalom.hu/adatkezelesi-tajekoztato" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <main className="flex-1 px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-border bg-background p-8 shadow-sm sm:p-12">
          <header className="mb-8">
            <h1 className="font-heading text-3xl font-bold sm:text-4xl">
              Adatkezelési tájékoztató
            </h1>
          </header>

          <div className="privacy-content space-y-8 text-sm leading-relaxed text-foreground/90 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_h4]:text-sm [&_h4]:font-semibold [&_h4]:mt-4 [&_h4]:mb-1 [&_p]:mt-2 [&_a]:text-accent [&_a]:underline [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:mt-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ul]:mt-2 [&_address]:not-italic [&_address]:mt-3 [&_address]:leading-relaxed">

            <h2>Bevezetés</h2>
            <p>
              A/Az {c.companyFullName} ({c.companyAddress}, adószám: {c.taxNumber}) (a továbbiakban: Szolgáltató, adatkezelő) alá veti magát a következő szabályzatnak: A természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról, valamint a 95/46/EK rendelet hatályon kívül helyezéséről (általános adatvédelmi rendelet) AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETE (2016. április 27.) szerint az alábbi tájékoztatást adjuk. Jelen adatvédelmi szabályzat az alábbi oldalak/mobil alkalmazások adatkezelését szabályozza: <a href={c.siteUrl}>{c.siteUrl}</a> Az adatkezelési tájékoztató elérhető az alábbi oldalról: <a href={c.privacyUrl}>{c.privacyUrl}</a> A szabályzat módosításai a fenti címen történő közzététellel lépnek hatályba.
            </p>

            <h2>Az adatkezelő elérhetőségei</h2>
            <p>Név: {c.companyLegalName}</p>
            <p>Székhely: {c.companyRegisteredAddress}</p>
            <p>E-mail cím: <a href={`mailto:${c.email}`}>{c.email}</a></p>
            <p>Telefonszám: {c.phoneRaw}</p>

            <h2>Fogalom meghatározások</h2>
            <p>1. „személyes adat": azonosított vagy azonosítható természetes személyre („érintett") vonatkozó bármely információ; azonosítható az a természetes személy, aki közvetlen vagy közvetett módon, különösen valamely azonosító, például név, szám, helymeghatározó adat, online azonosító vagy a természetes személy testi, fiziológiai, genetikai, szellemi, gazdasági, kulturális vagy szociális azonosságára vonatkozó egy vagy több tényező alapján azonosítható;</p>
            <p>2. „adatkezelés": a személyes adatokon vagy adatállományokon automatizált vagy nem automatizált módon végzett bármely művelet vagy műveletek összessége, így a gyűjtés, rögzítés, rendszerezés, tagolás, tárolás, átalakítás vagy megváltoztatás, lekérdezés, betekintés, felhasználás, közlés továbbítás, terjesztés vagy egyéb módon történő hozzáférhetővé tétel útján, összehangolás vagy összekapcsolás, korlátozás, törlés, illetve megsemmisítés;</p>
            <p>3. „adatkezelő": az a természetes vagy jogi személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv, amely a személyes adatok kezelésének céljait és eszközeit önállóan vagy másokkal együtt meghatározza; ha az adatkezelés céljait és eszközeit az uniós vagy a tagállami jog határozza meg, az adatkezelőt vagy az adatkezelő kijelölésére vonatkozó különös szempontokat az uniós vagy a tagállami jog is meghatározhatja;</p>
            <p>4. „adatfeldolgozó": az a természetes vagy jogi személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv, amely az adatkezelő nevében személyes adatokat kezel;</p>
            <p>5. „címzett": az a természetes vagy jogi személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv, akivel vagy amellyel a személyes adatot közlik, függetlenül attól, hogy harmadik fél-e. Azon közhatalmi szervek, amelyek egy egyedi vizsgálat keretében az uniós vagy a tagállami joggal összhangban férhetnek hozzá személyes adatokhoz, nem minősülnek címzettnek; az említett adatok e közhatalmi szervek általi kezelése meg kell, hogy feleljen az adatkezelés céljainak megfelelően az alkalmazandó adatvédelmi szabályoknak;</p>
            <p>6. „az érintett hozzájárulása": az érintett akaratának önkéntes, konkrét és megfelelő tájékoztatáson alapuló és egyértelmű kinyilvánítása, amellyel az érintett nyilatkozat vagy a megerősítést félreérthetetlenül kifejező cselekedet útján jelzi, hogy beleegyezését adja az őt érintő személyes adatok kezeléséhez;</p>
            <p>7. „adatvédelmi incidens": a biztonság olyan sérülése, amely a továbbított, tárolt vagy más módon kezelt személyes adatok véletlen vagy jogellenes megsemmisítését, elvesztését, megváltoztatását, jogosulatlan közlését vagy az azokhoz való jogosulatlan hozzáférést eredményezi.</p>
            <p>8. „profilalkotás": személyes adatok automatizált kezelésének bármely olyan formája, amelynek során a személyes adatokat valamely természetes személyhez fűződő bizonyos személyes jellemzők értékelésére, különösen a munkahelyi teljesítményhez, gazdasági helyzethez, egészségi állapothoz, személyes preferenciákhoz, érdeklődéshez, megbízhatósághoz, viselkedéshez, tartózkodási helyhez vagy mozgáshoz kapcsolódó jellemzők elemzésére vagy előrejelzésére használják.</p>

            <section>
              <h2>A személyes adatok kezelésére vonatkozó elvek</h2>
              <p>A személyes adatok:</p>
              <ol>
                <li>kezelését jogszerűen és tisztességesen, valamint az érintett számára átlátható módon kell végezni („jogszerűség, tisztességes eljárás és átláthatóság");</li>
                <li>gyűjtése csak meghatározott, egyértelmű és jogszerű célból történjen, és azokat ne kezeljék ezekkel a célokkal össze nem egyeztethető módon; a 89. cikk (1) bekezdésének megfelelően nem minősül az eredeti céllal össze nem egyeztethetőnek a közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból történő további adatkezelés („célhoz kötöttség");</li>
                <li>az adatkezelés céljai szempontjából megfelelőek és relevánsak kell, hogy legyenek, és a szükségesre kell korlátozódniuk („adattakarékosság");</li>
                <li>pontosnak és szükség esetén naprakésznek kell lenniük; minden észszerű intézkedést meg kell tenni annak érdekében, hogy az adatkezelés céljai szempontjából pontatlan személyes adatokat haladéktalanul töröljék vagy helyesbítsék („pontosság");</li>
                <li>tárolásának olyan formában kell történnie, amely az érintettek azonosítását csak a személyes adatok kezelése céljainak eléréséhez szükséges ideig teszi lehetővé; a személyes adatok ennél hosszabb ideig történő tárolására csak akkor kerülhet sor, amennyiben a személyes adatok kezelésére a 89. cikk (1) bekezdésének megfelelően közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból kerül majd sor, az e rendeletben az érintettek jogainak és szabadságainak védelme érdekében előírt megfelelő technikai és szervezési intézkedések végrehajtására is figyelemmel („korlátozott tárolhatóság");</li>
                <li>kezelését oly módon kell végezni, hogy megfelelő technikai vagy szervezési intézkedések alkalmazásával biztosítva legyen a személyes adatok megfelelő biztonsága, az adatok jogosulatlan vagy jogellenes kezelésével, véletlen elvesztésével, megsemmisítésével vagy károsodásával szembeni védelmet is ideértve („integritás és bizalmas jelleg").</li>
              </ol>
              <p>Az adatkezelő felelős a fentiek megfeleléséért, továbbá képesnek kell lennie e megfelelés igazolására („elszámoltathatóság"). Az adatkezelő nyilatkozik, hogy adatkezelése a jelen pontban foglalt alapelveknek megfelelően történik.</p>
            </section>

            <section>
              <h2>Értékesítés/szolgáltatás igénybevételéhez kapcsolódó adatkezelés</h2>
              <h3>1. Az adatgyűjtés ténye, a kezelt adatok köre és az adatkezelés célja</h3>
              <PrivacyTable
                headers={["Személyes adat", "Az adatkezelés célja", "Jogalap"]}
                rows={[
                  ["Vezeték- és keresztnév", "A kapcsolatfelvételhez, a szabályszerű számla kiállításához szükséges.", "a GDPR 6. cikk (1) bekezdés b) pontja"],
                  ["E-mail cím", "Kapcsolattartás. Üzenetek, számlák küldése.", "a GDPR 6. cikk (1) bekezdés b) pontja"],
                  ["Számlázási név és cím", "A szabályszerű számla kiállítása, továbbá a szerződés létrehozása, tartalmának meghatározása, módosítása, teljesítésének figyelemmel kísérése, az abból származó díjak számlázása, valamint az azzal kapcsolatos követelések érvényesítése.", "a GDPR 6. cikk (1) bekezdés c) pontja – jogi kötelezettség: a számvitelről szóló 2000. évi C. törvény 169. § (2) bekezdése"],
                ]}
              />
              <p><strong>2. Az érintettek köre:</strong> A weboldalon vásárló valamennyi érintett.</p>
              <p><strong>3. Az adatkezelés időtartama, az adatok törlésének határideje:</strong> Ha a GDPR 17. cikk (1) bekezdésében foglalt feltételek valamelyike fennáll, úgy az érintett törlési kérelméig tart. Az érintett által megadott bármely személyes adat törléséről az adatkezelő a GDPR 19. cikke alapján, elektronikus úton tájékoztatja az érintettet. Ha az érintett törlési kérelme kiterjed az általa megadott e-mail címre is, akkor az adatkezelő a tájékoztatást követően az e-mail címet is törli. Kivéve a számviteli bizonylatok esetében, hiszen a számvitelről szóló 2000. évi C. törvény 169. § (2) bekezdése alapján 8 évig meg kell őrizni ezeket az adatokat. Az érintett szerződéses adatai a polgárjogi elévülési idő leteltével törölhetőek az érintett törlési kérelme alapján. A könyvviteli elszámolást közvetlenül és közvetetten alátámasztó számviteli bizonylatot (ideértve a főkönyvi számlákat, az analitikus, illetve részletező nyilvántartásokat is), legalább 8 évig kell olvasható formában, a könyvelési feljegyzések hivatkozása alapján visszakereshető módon megőrizni.</p>
              <p><strong>4. Az adatok megismerésére jogosult lehetséges adatkezelők személye, a személyes adatok címzettjei:</strong> A személyes adatokat az adatkezelő sales és marketing munkatársai kezelhetik, a fenti alapelvek tiszteletben tartásával.</p>
              <p><strong>5. Az érintettek adatkezeléssel kapcsolatos jogainak ismertetése:</strong> Az érintett kérelmezheti az adatkezelőtől a rá vonatkozó személyes adatokhoz való hozzáférést, azok helyesbítését, törlését vagy kezelésének korlátozását, és az érintettnek joga van az adathordozhatósághoz, továbbá a hozzájárulás bármely időpontban történő visszavonásához.</p>
              <p><strong>6. A személyes adatokhoz való hozzáférést, azok törlését, módosítását, vagy kezelésének korlátozását, az adatok hordozhatóságát az alábbi módokon tudja az érintett kezdeményezni:</strong></p>
              <ContactList />
              <p><strong>7. Az adatkezelés jogalapja:</strong></p>
              <ol>
                <li>a GDPR 6. cikk (1) bekezdés b) és c) pontja,</li>
                <li>az elektronikus kereskedelmi szolgáltatásokról és információs társadalommal összefüggő szolgáltatásokról szóló 2001. évi CVIII. törvény (Elker tv.) 13/A. § (3) bekezdése,</li>
                <li>a számviteli jogszabályoknak megfelelő számla kiállítása esetén a GDPR 6. cikk (1) bekezdés c) pontja,</li>
                <li>a szerződésből eredő követelések érvényesítése esetén a Polgári Törvénykönyvről szóló 2013. évi V. törvény 6:21. §-a szerint 5 év, a 6:22. § szerinti elévülési szabályokkal.</li>
              </ol>
              <p><strong>8. Tájékoztatás:</strong> Az adatkezelés a szerződés teljesítéséhez szükséges; az érintett köteles a személyes adatokat megadni, hogy a rendelést teljesíteni tudjuk. Az adatszolgáltatás elmaradása azzal a következménnyel jár, hogy a rendelést nem tudjuk feldolgozni.</p>
            </section>

            <section>
              <h2>Panaszkezeléssel kapcsolatos adatkezelés</h2>
              <h3>1. Az adatgyűjtés ténye, a kezelt adatok köre és az adatkezelés célja</h3>
              <PrivacyTable
                headers={["Személyes adat", "Az adatkezelés célja", "Jogalap"]}
                rows={[
                  ["Vezeték- és keresztnév", "Azonosítás, kapcsolattartás.", "GDPR 6. cikk (1) bekezdés c) pontja – jogi kötelezettség: a fogyasztóvédelemről szóló 1997. évi CLV. törvény 17/A. § (7) bekezdése"],
                  ["E-mail cím", "Kapcsolattartás.", "GDPR 6. cikk (1) bekezdés c) pontja – jogi kötelezettség: a fogyasztóvédelemről szóló 1997. évi CLV. törvény 17/A. § (7) bekezdése"],
                  ["Számlázási név és cím", "Azonosítás, a megrendelt termékekkel/szolgáltatásokkal kapcsolatosan felmerülő minőségi kifogások, kérdések és problémák kezelése.", "GDPR 6. cikk (1) bekezdés c) pontja – jogi kötelezettség: a fogyasztóvédelemről szóló 1997. évi CLV. törvény 17/A. § (7) bekezdése"],
                ]}
              />
              <p><strong>2. Az érintettek köre:</strong> A weboldalon vásárló és minőségi kifogással élő, panaszt tevő valamennyi érintett.</p>
              <p><strong>3. Az adatkezelés időtartama, az adatok törlésének határideje:</strong> A kifogásról felvett jegyzőkönyv, átirat és az arra adott válasz másolati példányait a fogyasztóvédelemről szóló 1997. évi CLV. törvény 17/A. § (7) bekezdése alapján 3 évig kell megőrizni.</p>
              <p><strong>4. Az adatok megismerésére jogosult lehetséges adatkezelők személye, a személyes adatok címzettjei:</strong> A személyes adatokat az adatkezelő, továbbá az arra feljogosított munkatársai kezelhetik, a fenti alapelvek tiszteletben tartásával.</p>
              <p><strong>5. Az érintettek adatkezeléssel kapcsolatos jogainak ismertetése:</strong> Az érintett kérelmezheti az adatkezelőtől a rá vonatkozó személyes adatokhoz való hozzáférést, azok helyesbítését, törlését vagy kezelésének korlátozását, és joga van az adathordozhatósághoz, valamint a hozzájárulás bármely időpontban történő visszavonásához.</p>
              <p><strong>6. A személyes adatokhoz való hozzáférést, azok törlését, módosítását, vagy kezelésének korlátozását, az adatok hordozhatóságát az alábbi módokon tudja érintett kezdeményezni:</strong></p>
              <ContactList />
              <p><strong>7. Tájékoztatás:</strong> A személyes adatok szolgáltatása jogi kötelezettségen alapul. A szerződés megkötésének és a panasz megfelelő kezelésének előfeltétele a szükséges adatok kezelése; az adatszolgáltatás elmaradása esetén a beérkezett panaszt nem tudjuk feldolgozni.</p>
            </section>

            <section>
              <h2>Címzettek, akikkel a személyes adatokat közlik</h2>
              <p>„Címzett": az a természetes vagy jogi személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv, akivel vagy amellyel a személyes adatot közlik, függetlenül attól, hogy harmadik fél-e.</p>
              <h3>1. Adatfeldolgozók</h3>
              <p>Az adatkezelő a saját adatkezelési tevékenységeinek elősegítése, valamint az érintettel kötött szerződésből és a jogszabályokból eredő kötelezettségei teljesítése érdekében adatfeldolgozókat vesz igénybe. Az adatkezelő kizárólag olyan adatfeldolgozókkal működik együtt, akik megfelelő garanciákat nyújtanak a GDPR követelményeinek való megfelelésre, illetve az érintetti jogok védelmét biztosító technikai és szervezési intézkedések alkalmazására. Az adatfeldolgozó és az adatkezelő vagy az adatfeldolgozó irányítása alatt eljáró, a személyes adatokhoz hozzáféréssel rendelkező személy a személyes adatokat kizárólag az adatkezelő utasításai alapján kezeli. Az adatfeldolgozó tevékenységéért az adatkezelő felel. Az adatfeldolgozó csak akkor tartozik felelősséggel az adatkezelés által okozott károkért, ha a GDPR-ben meghatározott, kifejezetten rá vonatkozó kötelezettségeket megszegte, vagy az adatkezelő jogszerű utasításaival ellentétesen járt el. Az adatfeldolgozó az adatok kezelésével kapcsolatban érdemi döntéshozatali joggal nem rendelkezik. Az adatkezelő az informatikai háttér biztosítására tárhely-szolgáltatót vehet igénybe adatfeldolgozóként.</p>
              <h3>2. Egyes adatfeldolgozók</h3>
              <PrivacyTable
                headers={["Adatfeldolgozói tevékenység", "Név, cím, elérhetőség"]}
                rows={c.processors.map((p) => [
                  p.activity,
                  `${p.name}\n${p.address}\n${p.email}`,
                ])}
              />
              <p>„Harmadik fél": az a természetes vagy jogi személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv, amely nem azonos az érintettel, az adatkezelővel, az adatfeldolgozóval vagy azokkal a személyekkel, akik az adatkezelő vagy adatfeldolgozó közvetlen irányítása alatt a személyes adatok kezelésére felhatalmazást kaptak.</p>
              <h3>3. Könyvelő</h3>
              <p className="font-medium">Adatfeldolgozó az adatkezelő által alkalmazott könyvelő vállalkozás:</p>
              <p>{c.accountant.name}</p>
              <p>{c.accountant.email} {c.accountant.address}</p>
              <p>Magyar adószám: {c.accountant.taxId} Nyilvántartási szám: {c.accountant.registrationNumber}</p>
              <p className="mt-2">Az Adatfeldolgozó igénybevételére a számla szabályszerű kiállításának ellenőrzése és a számviteli bizonylatok megőrzése miatt kerül sor.</p>
              <p>Az Adatfeldolgozó az alábbi adatokat kapja meg: Számlázási név, lakcím/székhely, adószám, e-mail cím (amennyiben az a számlán szerepel).</p>

              <h3>4. Adattovábbítás harmadik fél részére</h3>
              <p>A harmadik fél adatkezelők a saját nevükben, a saját adatvédelmi szabályzatuknak megfelelően kezelik az általunk közölt személyes adatokat. Az adatok harmadik félnek átadásra nem kerülnek.</p>
            </section>

            <section>
              <h2>Ügyfélkapcsolatok és egyéb adatkezelések</h2>
              <ol>
                <li>Amennyiben a szolgáltatások igénybevétele során kérdés merül fel vagy probléma adódik, az érintett a honlapon feltüntetett csatornákon (telefon, e-mail, közösségi oldalak stb.) keresztül felveheti a kapcsolatot az adatkezelővel.</li>
                <li>Az adatkezelő a beérkezett e-maileket, üzeneteket, telefonon vagy közösségi felületen megadott adatokat az érintett nevével, e-mail címével és bármely önként megadott adattal együtt legfeljebb 2 évig őrzi, ezt követően törli.</li>
                <li>Az ebben a tájékoztatóban nem szereplő adatkezelésekről az adat felvételekor nyújtunk információt.</li>
                <li>Kivételes hatósági megkeresésre vagy jogszabályi felhatalmazás alapján más szervek megkeresésére az adatkezelő köteles tájékoztatást adni, adatot közölni vagy iratot átadni.</li>
                <li>A Szolgáltató ezen esetekben a megkereső részére, amennyiben az a pontos célt és az adatok körét megjelölte, személyes adatot csak annyit és olyan mértékben ad ki, amely a megkeresés céljának megvalósításához elengedhetetlenül szükséges.</li>
              </ol>
            </section>

            <section>
              <h2>Az érintettek jogai</h2>

              <h3>1. Hozzáférés joga</h3>
              <p>Ön jogosult arra, hogy az adatkezelőtől visszajelzést kapjon arra vonatkozóan, hogy személyes adatainak kezelése folyamatban van-e, és ha ilyen adatkezelés folyamatban van, jogosult arra, hogy a személyes adatokhoz és a rendeletben felsorolt információkhoz hozzáférést kapjon.</p>

              <h3>2. Helyesbítéshez való jog</h3>
              <p>Ön jogosult arra, hogy kérésére az adatkezelő indokolatlan késedelem nélkül helyesbítse az Önre vonatkozó pontatlan személyes adatokat. Figyelembe véve az adatkezelés célját, Ön jogosult arra, hogy kérje a hiányos személyes adatok kiegészítését.</p>

              <h3>3. Törléshez való jog</h3>
              <p>Ön jogosult arra, hogy kérésére az adatkezelő indokolatlan késedelem nélkül törölje az Önre vonatkozó személyes adatokat, az adatkezelő pedig köteles arra, hogy Önre vonatkozó személyes adatokat indokolatlan késedelem nélkül törölje meghatározott feltételek esetén.</p>

              <h3>4. Elfeledtetéshez való jog</h3>
              <p>Ha az adatkezelő nyilvánosságra hozta a személyes adatot, és azt törölni köteles, az elérhető technológia és a megvalósítás költségeinek figyelembevételével megteszi az észszerűen elvárható lépéseket annak érdekében, hogy tájékoztassa az adatokat kezelő adatkezelőket, hogy Ön kérelmezte a szóban forgó személyes adatokra mutató linkek vagy e személyes adatok másolatának, illetve másodpéldányának törlését.</p>

              <h3>5. Adatkezelés korlátozásának joga</h3>
              <p>Ön jogosult arra, hogy kérésére az adatkezelő korlátozza az adatkezelést, ha az alábbi feltételek valamelyike teljesül: Ön vitatja a személyes adatok pontosságát, ez esetben a korlátozás arra az időtartamra vonatkozik, amely lehetővé teszi, hogy az adatkezelő ellenőrizze a személyes adatok pontosságát; az adatkezelés jogellenes, és Ön ellenzi az adatok törlését, és ehelyett kéri azok felhasználásának korlátozását; az adatkezelőnek már nincs szüksége a személyes adatokra adatkezelés céljából, de Ön igényli azokat jogi igények előterjesztéséhez, érvényesítéséhez vagy védelméhez; Ön tiltakozott az adatkezelés ellen; ez esetben a korlátozás arra az időtartamra vonatkozik, amíg megállapításra nem kerül, hogy az adatkezelő jogos indokai elsőbbséget élveznek-e Ön jogos indokaival szemben.</p>

              <h3>6. Adathordozhatósághoz való jog</h3>
              <p>Ön jogosult arra, hogy az Önre vonatkozó, általa egy adatkezelő rendelkezésére bocsátott személyes adatokat tagolt, széles körben használt, géppel olvasható formátumban megkapja, továbbá jogosult arra, hogy ezeket az adatokat egy másik adatkezelőnek továbbítsa anélkül, hogy ezt akadályozná az az adatkezelő, amelynek a személyes adatokat a rendelkezésére bocsátotta.</p>

              <h3>7. Tiltakozáshoz való jog</h3>
              <p>A jogos érdeken, illetve a közhatalmi jogosítványon, mint jogalapokon alapuló adatkezelések esetében Ön jogosult arra, hogy a saját helyzetével kapcsolatos okokból bármikor tiltakozzon személyes adatainak a kezelése ellen, ideértve az említett rendelkezéseken alapuló profilalkotást is.</p>

              <h3>8. Tiltakozás közvetlen üzletszerzés esetén</h3>
              <p>Ha a személyes adatok kezelése közvetlen üzletszerzés érdekében történik, Ön jogosult arra, hogy bármikor tiltakozzon az Önre vonatkozó személyes adatok e célból történő kezelése ellen, ideértve a profilalkotást is, amennyiben az a közvetlen üzletszerzéshez kapcsolódik. Ha Ön tiltakozik a személyes adatok közvetlen üzletszerzés érdekében történő kezelése ellen, akkor a személyes adatok a továbbiakban e célból nem kezelhetők.</p>

              <h3>9. Automatizált döntéshozatal tilalma</h3>
              <p>Ön jogosult arra, hogy ne terjedjen ki Önre az olyan, kizárólag automatizált adatkezelésen alapuló döntés hatálya, amely Önre nézve joghatással járna vagy Önt hasonlóképpen jelentős mértékben érintené. Az előző bekezdés nem alkalmazandó abban az esetben, ha a döntés: Ön és az adatkezelő közötti szerződés megkötése vagy teljesítése érdekében szükséges; meghozatalát az adatkezelőre alkalmazandó olyan uniós vagy tagállami jog teszi lehetővé, amely Ön jogainak és szabadságainak, valamint jogos érdekeinek védelmét szolgáló megfelelő intézkedéseket is megállapít; vagy Ön kifejezett hozzájárulásán alapul.</p>

              <h3>Intézkedési határidő</h3>
              <p>Az adatkezelő indokolatlan késedelem nélkül, de legkésőbb a kérelem beérkezésétől számított 1 hónapon belül tájékoztatja az érintettet a kérelem nyomán hozott intézkedésekről. Szükség esetén ez a határidő további 2 hónappal meghosszabbítható; a hosszabbításról 1 hónapon belül értesítést küldünk, megjelölve a késedelem okát.</p>
              <p>Amennyiben az adatkezelő nem tesz intézkedést, erről legkésőbb 1 hónapon belül értesíti az érintettet, feltüntetve az elmaradás okát és azt, hogy panaszt tehet a felügyeleti hatóságnál, illetve bírósági jogorvoslattal élhet.</p>
            </section>

            <section>
              <h2>Az adatkezelés biztonsága</h2>
              <p>Az adatkezelő és az adatfeldolgozó, figyelembe véve a tudomány és technológia állását, a megvalósítás költségeit, az adatkezelés jellegét, hatókörét, körülményeit és céljait, továbbá a természetes személyek jogaira és szabadságaira jelentett kockázat súlyosságát, megfelelő technikai és szervezési intézkedéseket hajt végre a kockázatnak megfelelő adatbiztonság garantálására.</p>
              <ol>
                <li>A személyes adatok titkosításának alkalmazása.</li>
                <li>A rendszerek és szolgáltatások folyamatos bizalmasságának, integritásának, rendelkezésre állásának és ellenálló képességének biztosítása.</li>
                <li>Fizikai vagy műszaki incidens esetén az adatokhoz való hozzáférés és rendelkezésre állás mielőbbi helyreállítása.</li>
                <li>Az adatbiztonsági intézkedések rendszeres tesztelésére, felmérésére és értékelésére szolgáló eljárások működtetése.</li>
                <li>A papír alapú adatok illetéktelen hozzáférés elleni védelme megfelelő tárolással; az elektronikus adatok központi jogosultságkezelő rendszerrel történő védelme.</li>
                <li>A tárolási mód megválasztása oly módon, hogy a törlések az előírt határidőkben visszaállíthatatlanul végrehajthatók legyenek.</li>
                <li>Papír alapú adathordozók megsemmisítése iratmegsemmisítővel vagy erre szakosodott szolgáltató bevonásával; elektronikus adathordozók fizikai megsemmisítése vagy biztonságos, visszaállíthatatlan törlése.</li>
              </ol>

              <h3>A papír alapon kezelt adatok védelme</h3>
              <ul>
                <li>Dokumentumok biztonságos, zárható, száraz helyiségben történő tárolása.</li>
                <li>Digitalizálás esetén az elektronikus dokumentumokra irányadó szabályok érvényesítése.</li>
                <li>Az adatkezelést végző munkatárs távolléte esetén az adathordozók elzárása vagy a helyiség lezárása.</li>
                <li>Személyes adatokhoz csak jogosult személyek férhetnek hozzá, harmadik fél nem.</li>
                <li>Az épület és helyiségek tűzvédelmi, vagyonvédelmi berendezésekkel ellátottak.</li>
              </ul>

              <h3>Informatikai védelem</h3>
              <ul>
                <li>Az adatkezeléshez használt számítógépek, mobil eszközök és adathordozók a szolgáltató tulajdonában állnak.</li>
                <li>A számítógépes rendszerek naprakész vírusvédelemmel rendelkeznek.</li>
                <li>Rendszeres adatmentés és archiválás történik a digitális adatok biztonságáért.</li>
                <li>A központi szerverhez csak megfelelő jogosultsággal rendelkező, kijelölt személyek férhetnek hozzá.</li>
                <li>A számítógépes adatok eléréséhez felhasználónév és jelszó szükséges.</li>
              </ul>
            </section>

            <section>
              <h2>Az érintett tájékoztatása az adatvédelmi incidensről</h2>
              <p>Amennyiben az adatvédelmi incidens valószínűsíthetően magas kockázattal jár a természetes személyek jogaira és szabadságaira nézve, az adatkezelő indokolatlan késedelem nélkül értesíti az érintettet.</p>
              <p>A tájékoztatásnak jól érthetően tartalmaznia kell:</p>
              <ul>
                <li>az incidens jellegének leírását;</li>
                <li>az adatvédelmi tisztviselő vagy további tájékoztatást nyújtó kapcsolattartó nevét és elérhetőségeit;</li>
                <li>az incidensből eredő valószínű következményeket;</li>
                <li>az incidens orvoslására tett vagy tervezett intézkedéseket, beleértve az esetleges káros következmények enyhítésére tett lépéseket.</li>
              </ul>
              <p>Nem szükséges az érintett tájékoztatása, ha:</p>
              <ul>
                <li>az adatokat megfelelő technikai és szervezési intézkedések védik (például titkosítás), így azok illetéktelenek számára értelmezhetetlenek;</li>
                <li>az adatkezelő olyan további intézkedéseket tett, amelyek biztosítják, hogy a magas kockázat a továbbiakban nem valósul meg;</li>
                <li>a tájékoztatás aránytalan erőfeszítést igényelne, ilyen esetben nyilvános közlemény vagy egyéb hasonló, hatékony tájékoztatás alkalmazandó.</li>
              </ul>
              <p>Ha az érintett értesítése elmaradt, a felügyeleti hatóság, a kockázat mérlegelése után, elrendelheti az érintett tájékoztatását.</p>

              <h3>Adatvédelmi incidens bejelentése a hatóságnak</h3>
              <p>Az adatkezelő az incidenst indokolatlan késedelem nélkül, de legkésőbb 72 órán belül bejelenti az illetékes felügyeleti hatóságnak, kivéve, ha az incidens nem jár kockázattal a természetes személyek jogaira és szabadságaira nézve. A 72 órás határidő túllépése esetén a bejelentéshez indokolást kell csatolni.</p>
            </section>

            <section>
              <h2>Felülvizsgálat kötelező adatkezelés esetén</h2>
              <p>Ha a kötelező adatkezelés időtartamát vagy a szükségesség felülvizsgálatát jogszabály nem határozza meg, az adatkezelő az adatkezelés megkezdésétől számított legalább háromévente felülvizsgálja, hogy a kezelt személyes adat szükséges-e az adatkezelési cél megvalósításához.</p>
              <p>A felülvizsgálat körülményeit és eredményét az adatkezelő dokumentálja, a dokumentációt 10 évig megőrzi, és a Nemzeti Adatvédelmi és Információszabadság Hatóság kérésére rendelkezésre bocsátja.</p>
            </section>

            <section>
              <h2>Panasztételi lehetőség</h2>
              <p>Az adatkezelő esetleges jogsértése ellen panaszt a Nemzeti Adatvédelmi és Információszabadság Hatóságnál lehet tenni:</p>
              <address>
                Nemzeti Adatvédelmi és Információszabadság Hatóság<br />
                1055 Budapest, Falk Miksa utca 9-11.<br />
                Levelezési cím: 1363 Budapest, Pf. 9.<br />
                Telefon: +36 1 391 1400<br />
                Fax: +36 1 391 1410<br />
                E-mail: <a href="mailto:ugyfelszolgalat@naih.hu">ugyfelszolgalat@naih.hu</a>
              </address>
            </section>

            <section>
              <h2>Zárszó</h2>
              <p>A tájékoztató összeállítása során az alábbi jogszabályok, ajánlások szolgáltak alapul:</p>
              <ul>
                <li>A természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról, valamint a 95/46/EK rendelet hatályon kívül helyezéséről (általános adatvédelmi rendelet) AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETE (GDPR)(2016. április 27.);</li>
                <li>2011. évi CXII. törvény – az információs önrendelkezési jogról és az információszabadságról (Infotv.);</li>
                <li>2001. évi CVIII. törvény – az elektronikus kereskedelmi szolgáltatásokról (különösen 13/A. §);</li>
                <li>2008. évi XLVII. törvény – a fogyasztókkal szembeni tisztességtelen kereskedelmi gyakorlat tilalmáról;</li>
                <li>2008. évi XLVIII. törvény – a gazdasági reklámtevékenység feltételeiről (6. §);</li>
                <li>2005. évi XC. törvény – az elektronikus információszabadságról;</li>
                <li>2003. évi C. törvény – az elektronikus hírközlésről (155. §);</li>
                <li>16/2011. sz. vélemény a viselkedésalapú online reklám EASA/IAB ajánlásáról;</li>
                <li>A Nemzeti Adatvédelmi és Információszabadság Hatóság ajánlásai az előzetes tájékoztatás adatvédelmi követelményeiről.</li>
              </ul>
              <p>{c.effectiveCity}, {c.effectiveDate}</p>
            </section>

          </div>
        </div>
      </div>
    </main>
    </>
  );
}

function PrivacyTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} className="border border-border bg-muted px-4 py-2 text-left font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="border border-border px-4 py-2 whitespace-pre-line">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ContactList() {
  return (
    <ul>
      <li>postai úton a {c.companyAddress} címen,</li>
      <li>e-mail útján a <a href={`mailto:${c.email}`}>{c.email}</a> e-mail címen,</li>
      <li>telefonon a {c.phone} számon.</li>
    </ul>
  );
}
