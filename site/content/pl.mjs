// Polski tekst serwisu z danymi. Ta sama struktura co en.mjs.

export default {
  siteName: "Dataset prezentów i Gwiazdek Telegrama",
  short: "Dataset",
  licence: (cc) => `Dane na licencji ${cc}: możesz ich swobodnie używać, podając Gift Club i link do tej strony.`,

  ui: {
    navLabel: "Sekcje datasetu",
    langsLabel: "Języki",
    footerBy: (brand) => `Otwarty dataset od ${brand}, Mini App Telegrama ze skrzynkami z prezentami i grami.`,
    moreLabel: "Więcej od Gift Club",
    sourceOnGithub: "Kod na GitHubie",
    sisters: { dataset: "Dane Telegrama", calculator: "Kalkulator Gwiazdek", verifier: "Provably fair" },
    updated: "Dane zaktualizowano",
    faqHeading: "Pytania",
    relatedHeading: "Czytaj dalej na Gift Club",
    downloadHeading: "Pobierz",
    downloadNote: "CSV jest w UTF-8 z wierszem nagłówka. JSON to tablica tych samych wierszy.",
  },

  nav: {
    home: "Przegląd",
    stars: "Ceny Gwiazdek",
    premium: "Ceny Premium",
    collections: "Kolekcje prezentów",
    limited: "Prezenty limitowane",
  },

  home: {
    title: () => "Dataset prezentów i Gwiazdek Telegrama: ceny (CSV, JSON)",
    description: ({ F, n }) =>
      `Otwarty dataset z cenami Gwiazdek i Premium Telegrama według krajów, ${n.of(F.collectionCount, { one: "kolekcja", few: "kolekcje", many: "kolekcji" })} prezentów kolekcjonerskich z nakładem i ${n.of(F.limitedCount, { one: "prezent limitowany", few: "prezenty limitowane", many: "prezentów limitowanych" })}. CSV i JSON, CC BY 4.0.`,
    h1: "Dataset prezentów i Gwiazdek Telegrama",
    lead: () =>
      "Datowane liczby ze wskazanym źródłem o Gwiazdkach, Telegram Premium i prezentach Telegrama, w CSV i JSON: do pobrania, wykresów lub cytowania.",
    keywords: ["Gwiazdki Telegrama", "Telegram Premium", "prezenty Telegrama", "Fragment", "App Store", "dataset", "CSV", "JSON"],
    answer: ({ F, n, money, region }) =>
      `Na Fragment jedna Gwiazdka Telegrama kosztuje <strong>${money(F.fragmentUsd, "USD")}</strong> (${n(1000)} Gwiazdek = ${money(F.fragmentUsd * 1000, "USD")}); w amerykańskim App Store ${n(1000)} Gwiazdek kosztuje ${money(F.us1000, "USD")}. ` +
      `Telegram Premium jest najtańszy tu: ${region(F.premiumCheapest.store)} (${F.premiumCheapest.monthly_as_printed} miesięcznie), spośród ${n(F.premiumStores)} krajów App Store w danych. ` +
      `${n.of(F.collectionCount, { one: "kolekcja prezentów kolekcjonerskich liczy", few: "kolekcje prezentów kolekcjonerskich liczą", many: "kolekcji prezentów kolekcjonerskich liczy" })} razem ${n.of(F.totalIssued, { one: "sztuka", few: "sztuki", many: "sztuk" })}; najrzadsza, ${F.rarest.name}, ma ich ${n(F.rarest.issued)}.`,
    insideHeading: "Co jest w środku",
    cards: {
      stars: ({ F, n }) => `${n.of(F.starsRows, { one: "cena", few: "ceny", many: "cen" })} pakietów z App Store w ${n(F.storeCount)} krajach oraz stała stawka Fragment.`,
      premium: ({ F, n }) => `Premium miesięcznie i rocznie w ${n(F.premiumStores)} krajach App Store oraz ceny prezentów w USD, Gram i Gwiazdkach.`,
      collections: ({ F, n }) => `Wszystkie ${n.of(F.collectionCount, { one: "kolekcja", few: "kolekcje", many: "kolekcji" })} prezentów kolekcjonerskich według nakładu i ${n.of(F.regularCount, { one: "zwykły prezent", few: "zwykłe prezenty", many: "zwykłych prezentów" })}.`,
      limited: ({ F, n }) => `${n.of(F.limitedCount, { one: "prezent limitowany lub sezonowy", few: "prezenty limitowane i sezonowe", many: "prezentów limitowanych i sezonowych" })} z datą premiery, ceną w Gwiazdkach i limitem nakładu.`,
    },
    downloadHeading: "Pobierz pliki",
    downloadIntro: () =>
      "Każda tabela na tej stronie to plik w folderze <code>data/</code> repozytorium. Linki poniżej zawsze prowadzą do najnowszej wersji.",
    methodHeading: "Jak zbieramy dane",
    method: () => `<ul>
<li><strong>Ceny są odczytywane, a nie przeliczane.</strong> Każda cena z App Store to kwota, którą Apple podaje na stronie Telegrama w danym kraju, w walucie tego kraju, w dniu z kolumny <code>checked</code>.</li>
<li>Ceny z <strong>Fragment</strong> (własnego marketplace'u Telegrama) pochodzą z fragment.com w dolarach amerykańskich.</li>
<li><strong>Nakład</strong> prezentów kolekcjonerskich pochodzi ze stron prezentów na Fragment. To odczyty: nakład kolekcji może jeszcze rosnąć.</li>
<li><strong>Prezenty limitowane</strong> pochodzą z publicznego dziennika @GiftChanges, prowadzonego od 24 października 2024 r. Prezenty sprzedane wcześniej nie mają daty premiery.</li>
<li>Szacunki w dolarach (<code>*_usd_estimate</code>) używają kursów banków centralnych z <code>fx-rates.json</code>, nigdy kursu bieżącego.</li>
</ul>`,
    citeHeading: "Jak cytować",
    citeIntro: "Podaj Gift Club i link do tej strony. Prosty przykład:",
    citeLink: (brand) => `Piszesz o cenach w Telegramie? Te same liczby zasilają poradniki na ${brand}.`,
    faq: ({ F, n, money }) => [
      {
        q: "Czy to oficjalny dataset Telegrama?",
        a: "Nie. Gift Club odczytuje publiczne źródła Telegrama (App Store, Fragment, Bot API i publiczny dziennik prezentów) i zapisuje każdą liczbę z datą i linkiem do źródła. Telegram nie publikuje takiej listy.",
      },
      {
        q: "Czy mogę użyć danych w artykule, aplikacji lub badaniu?",
        a: "Tak. Dane są na licencji CC BY 4.0: używaj ich gdziekolwiek, także komercyjnie, o ile podasz Gift Club i link do tego datasetu.",
      },
      {
        q: "Ile dolarów kosztuje jedna Gwiazdka Telegrama?",
        a: `${money(F.fragmentUsd, "USD")} na Fragment przy dowolnej ilości od ${n(F.fragmentMin)} Gwiazdek i około ${money(F.us100 / 100, "USD")} w pakiecie ${n(100)} Gwiazdek w amerykańskim App Store. Gwiazdka zarobiona przez kanał jest wypłacana po ${money(F.earnedUsd, "USD")}.`,
      },
      {
        q: "Jak często dane są aktualizowane?",
        a: "Każda tabela ma datę odczytu. Gdy zmienia się cena lub nakład, wiersz jest odczytywany ponownie u źródła, a data przesuwa się razem z nim.",
      },
    ],
  },

  stars: {
    title: () => "Ceny Gwiazdek Telegrama według krajów: App Store (CSV)",
    description: ({ F, n, money }) =>
      `Ceny pakietów Gwiazdek Telegrama w ${n(F.storeCount)} krajach App Store w lokalnej walucie obok stałej stawki ${money(F.fragmentUsd, "USD")} za Gwiazdkę na Fragment. Pobierz jako CSV lub JSON.`,
    h1: "Ceny Gwiazdek Telegrama według krajów",
    lead: ({ F, n }) => `${n.of(F.starsRows, { one: "cena", few: "ceny", many: "cen" })} pakietów odczytanych ze strony Telegrama w App Store każdego kraju, obok stawki Fragment.`,
    keywords: ["cena Gwiazdek Telegrama", "Gwiazdki Telegrama według krajów", "Fragment", "App Store", "CSV"],
    answer: ({ F, n, money }) =>
      `${n(1000)} Gwiazdek Telegrama kosztuje <strong>${money(F.fragmentUsd * 1000, "USD")}</strong> na Fragment i <strong>${money(F.us1000, "USD")}</strong> w amerykańskim App Store. Fragment pobiera stałe ${money(F.fragmentUsd, "USD")} za Gwiazdkę; pakiety z App Store zawierają prowizję sklepu.`,
    usHeading: "Stany Zjednoczone: App Store a Fragment",
    usCaption: (d) => `Pakiety w amerykańskim App Store i ta sama ilość na Fragment, odczyt: ${d}`,
    fragmentHeading: "Stała stawka Fragment",
    fragmentText: ({ F, n, money }) =>
      `Fragment sprzedaje dowolną ilość od ${n(F.fragmentMin)} Gwiazdek po ${money(F.fragmentUsd, "USD")} za sztukę, płatne w Gram (TON) lub stablecoinie. App Store sprzedaje tylko gotowe pakiety i dolicza prowizję sklepu, więc te same Gwiazdki kosztują tam więcej. Gwiazdka zarobiona przez kanał lub bota jest wypłacana po ${money(F.earnedUsd, "USD")}; kupione Gwiazdki nie podlegają wypłacie.`,
    byCountryHeading: "Ceny App Store w każdym kraju",
    byCountryIntro: () =>
      "Apple pokazuje tylko dziesięć najczęściej kupowanych pozycji w kraju, więc pakietu brakującego w tabeli nie było w dziesiątce tego kraju. Kolumna Fragment jest zawsze w dolarach amerykańskich.",
    caption: (country, d) => `${country}, App Store, odczyt: ${d}`,
    cols: { stars: "Gwiazdki", price: "Cena w App Store", perStar: "Za Gwiazdkę", fragment: "Fragment (USD)", appStoreUs: "App Store (USA)", saving: "Oszczędność na Fragment" },
    faq: ({ F, money }) => [
      {
        q: "Gdzie Gwiazdki Telegrama są najtańsze?",
        a: `Na Fragment, po ${money(F.fragmentUsd, "USD")} za Gwiazdkę w każdym kraju. Wśród krajów App Store porównaj kolumnę „Za Gwiazdkę”: między walutami bardzo się różni.`,
      },
      {
        q: "Dlaczego ceny w App Store i Google Play różnią się od Fragment?",
        a: "Sklepy z aplikacjami pobierają prowizję i sprzedają gotowe pakiety; Fragment to marketplace Telegrama i stosuje tę samą stawkę przy dowolnej ilości. Google Play nie publikuje cennika, więc w datasecie go nie ma.",
      },
      {
        q: "Czy ceny są przeliczone po kursie walut?",
        a: "Nie. Każda cena z App Store to liczba podana przez sam sklep w jego walucie. Tylko kolumna Fragment jest w dolarach.",
      },
    ],
  },

  premium: {
    title: () => "Cena Telegram Premium według krajów: dane App Store (CSV)",
    description: ({ F, n }) =>
      `Miesięczne i roczne ceny Telegram Premium w ${n(F.premiumStores)} krajach App Store oraz ceny prezentów na Fragment i w Gwiazdkach. CSV i JSON, z datą i źródłem.`,
    h1: "Ceny Telegram Premium według krajów",
    lead: ({ F, n }) => `Ile kosztuje Telegram Premium w ${n(F.premiumStores)} krajach App Store, od najtańszego.`,
    keywords: ["cena Telegram Premium", "Telegram Premium według krajów", "App Store", "Fragment", "CSV"],
    answer: ({ F, n, money, region }) =>
      `Telegram Premium kosztuje <strong>${money(F.premiumUs, "USD")} miesięcznie</strong> w amerykańskim App Store. Najtaniej: ${region(F.premiumCheapest.store)}, ${F.premiumCheapest.monthly_as_printed} (około ${money(F.premiumCheapest.monthly_usd_estimate, "USD")}). Najdrożej: ${region(F.premiumDearest.store)}, ${F.premiumDearest.monthly_as_printed}. Jako prezent 12 miesięcy kosztuje ${money(F.gift12.fragment_usd, "USD")} na Fragment lub ${n(F.gift12.telegram_stars)} Gwiazdek.`,
    tableHeading: "Cena miesięczna i roczna w każdym kraju",
    tableIntro: () =>
      "Ceny tak, jak podaje je Apple w danym kraju. Kolumna w dolarach to szacunek po kursie banku centralnego z dnia odczytu; myślnik oznacza, że planu nie było wśród dziesięciu pozycji tego kraju.",
    caption: (d) => `Telegram Premium w App Store, od najtańszego, odczyt: ${d}`,
    giftHeading: "Premium w prezencie: Fragment i Gwiazdki",
    giftIntro: () =>
      "Premium można kupić w prezencie na Fragment albo wysłać za Gwiazdki w Telegramie. Ceny w Gwiazdkach ustala Bot API Telegrama.",
    giftCaption: (d) => `Ceny Premium jako prezentu, odczyt: ${d}`,
    cols: { country: "Kraj", monthly: "Miesięcznie", annual: "Rocznie", prepaid: "3 miesiące (prezent)", usd: "Miesięcznie w USD", months: "Miesiące", fragmentUsd: "Fragment (USD)", fragmentGram: "Fragment (Gram)", stars: "Gwiazdki" },
    faq: ({ F, n, money, region }) => [
      {
        q: "W którym kraju Telegram Premium jest najtańszy?",
        a: `Wśród krajów w tym datasecie: ${region(F.premiumCheapest.store)}, ${F.premiumCheapest.monthly_as_printed} miesięcznie (około ${money(F.premiumCheapest.monthly_usd_estimate, "USD")}).`,
      },
      {
        q: "Ile Gwiazdek kosztuje prezent Premium?",
        a: `${n(F.gift3.telegram_stars)} Gwiazdek za 3 miesiące i ${n(F.gift12.telegram_stars)} za 12 miesięcy, ceny ustala Telegram.`,
      },
      {
        q: "Dlaczego nie ma kolumny Google Play?",
        a: "Google Play pokazuje ceny tylko w aplikacji, na zalogowanym urządzeniu, więc nie ma publicznej strony, którą można odczytać i zacytować.",
      },
    ],
  },

  collections: {
    title: () => "Kolekcje prezentów Telegrama: nakład każdego NFT (CSV)",
    description: ({ F, n }) =>
      `Wszystkie ${n.of(F.collectionCount, { one: "kolekcja", few: "kolekcje", many: "kolekcji" })} prezentów kolekcjonerskich Telegrama według nakładu, razem ${n.of(F.totalIssued, { one: "sztuka", few: "sztuki", many: "sztuk" })}, oraz ${n.of(F.regularCount, { one: "zwykły prezent", few: "zwykłe prezenty", many: "zwykłych prezentów" })} z ID i cenami w Gwiazdkach.`,
    h1: "Kolekcje prezentów Telegrama według nakładu",
    lead: ({ F, n }) => `Każda kolekcja prezentów kolekcjonerskich (ulepszonych) na Fragment, od najmniejszego nakładu: ${n.of(F.collectionCount, { one: "kolekcja", few: "kolekcje", many: "kolekcji" })}.`,
    keywords: ["prezenty NFT Telegrama", "prezenty kolekcjonerskie Telegrama", "nakład prezentów", "Fragment", "CSV"],
    answer: ({ F, n }) =>
      `Najrzadsza kolekcja prezentów Telegrama to <strong>${F.rarest.name}</strong>, wyemitowano ${n.of(F.rarest.issued, { one: "sztuka", few: "sztuki", many: "sztuk" })}. ${n.of(F.collectionCount, { one: "Jedna kolekcja liczy", few: "kolekcje razem liczą", many: "kolekcji razem liczy" })} ${n.of(F.totalIssued, { one: "prezent kolekcjonerski", few: "prezenty kolekcjonerskie", many: "prezentów kolekcjonerskich" })}.`,
    tableHeading: "Każda kolekcja, od najmniejszego nakładu",
    tableIntro: () =>
      "Nakład to liczba sztuk istniejących w kolekcji w dniu odczytu. Może jeszcze rosnąć, więc traktuj go jako odczyt, a nie limit.",
    caption: (d) => `Kolekcje prezentów kolekcjonerskich na Fragment, odczyt: ${d}`,
    regularHeading: "Zwykłe prezenty i ich ID",
    regularIntro: ({ F, n }) =>
      `${n.of(F.regularCount, { one: "zwykły prezent", few: "zwykłe prezenty", many: "zwykłych prezentów" })}, które bot może wysłać metodą <code>sendGift</code> z Bot API, od ${n(F.regularMin)} do ${n(F.regularMax)} Gwiazdek.`,
    regularCaption: "Zwykłe prezenty Telegrama",
    cols: { rank: "Nr", name: "Kolekcja", issued: "Nakład", giftId: "ID prezentu", stars: "Gwiazdki" },
    faq: ({ F, n }) => [
      {
        q: "Który prezent Telegrama jest najrzadszy?",
        a: `Według nakładu: ${F.rarest.name} (${n.of(F.rarest.issued, { one: "sztuka", few: "sztuki", many: "sztuk" })}). Rzadkość w obrębie kolekcji zależy też od modelu, tła i symbolu, które prezent dostał przy ulepszeniu.`,
      },
      {
        q: "Ile jest prezentów NFT Telegrama?",
        a: `${n(F.totalIssued)} w ${n(F.collectionCount)} kolekcjach w dniu odczytu.`,
      },
      {
        q: "Skąd pochodzą nakłady?",
        a: "Z Fragment, marketplace'u Telegrama, który pokazuje nakład na stronie każdej kolekcji.",
      },
    ],
  },

  limited: {
    title: () => "Limitowane prezenty Telegrama: daty, ceny, nakład (CSV)",
    description: ({ F, n }) =>
      `${n.of(F.limitedCount, { one: "limitowany lub sezonowy prezent", few: "limitowane i sezonowe prezenty", many: "limitowanych i sezonowych prezentów" })} Telegrama z datą premiery, ceną w Gwiazdkach i limitem nakładu, z publicznego dziennika. Pobierz jako CSV lub JSON.`,
    h1: "Limitowane i sezonowe prezenty Telegrama",
    lead: ({ F, n }) => `${n.of(F.limitedCount, { one: "prezent limitowany", few: "prezenty limitowane", many: "prezentów limitowanych" })}, od najnowszych, z datą premiery i liczbą wyprodukowanych sztuk.`,
    keywords: ["limitowane prezenty Telegrama", "sezonowe prezenty Telegrama", "nakład prezentów", "Gwiazdki Telegrama", "CSV"],
    answer: ({ F, n, date }) =>
      `Telegram wydał <strong>${n.of(F.limitedCount, { one: "prezent limitowany lub sezonowy", few: "prezenty limitowane i sezonowe", many: "prezentów limitowanych i sezonowych" })}</strong>; ${n(F.cappedCount)} z nich miało limit nakładu. Najmniejszy limit miał ${F.smallestCapped.name} (${n(F.smallestCapped.supply)}). Ostatnia premiera w tym datasecie to ${date(F.lastRelease)}.`,
    tableHeading: "Każdy prezent limitowany, od najnowszych",
    tableIntro: () =>
      "Gwiazdki to cena w dniu premiery (lub minimalna oferta na aukcji). Myślnik w nakładzie oznacza, że dziennik nie podał limitu, zwykle przy prezencie sezonowym.",
    caption: (d) => `Limitowane prezenty Telegrama, odczyt: ${d}`,
    beforeLog: "przed 24 paź 2024",
    premiumOnly: "Tylko Premium",
    auction: "aukcja",
    sourceNote:
      "Źródło: publiczny dziennik @GiftChanges (t.me/GiftChanges). Nazwy prezentów pochodzą od Telegrama i w każdym języku pozostają po angielsku.",
    cols: { name: "Prezent", released: "Premiera", stars: "Gwiazdki", supply: "Nakład", notes: "Uwagi" },
    faq: ({ F, n }) => [
      {
        q: "Czym jest limitowany prezent Telegrama?",
        a: "Prezentem, który Telegram sprzedaje przez krótki czas lub w ustalonej liczbie. Po wyprzedaniu można go kupić tylko od innego użytkownika, a większość da się ulepszyć do kolekcjonerskiego.",
      },
      {
        q: "Który prezent limitowany miał najmniejszy nakład?",
        a: `${F.smallestCapped.name}, wyprodukowano ${n(F.smallestCapped.supply)}.`,
      },
      {
        q: "Dlaczego niektóre prezenty nie mają daty premiery?",
        a: "Publiczny dziennik zaczęto prowadzić 24 października 2024 r. Prezenty sprzedawane wcześniej są wymienione bez daty.",
      },
    ],
  },
};
