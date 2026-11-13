// Deutscher Text der Datenseite. Gleiche Struktur wie en.mjs.

export default {
  siteName: "Telegram-Geschenke und -Sterne Datensatz",
  short: "Datensatz",
  licence: (cc) => `Daten unter ${cc}: frei nutzbar, mit Nennung von Gift Club und Link auf diese Seite.`,

  ui: {
    navLabel: "Bereiche des Datensatzes",
    langsLabel: "Sprachen",
    footerBy: (brand) => `Ein offener Datensatz von ${brand}, der Telegram Mini App mit Geschenkboxen und Spielen.`,
    moreLabel: "Mehr von Gift Club",
    sourceOnGithub: "Quelle auf GitHub",
    sisters: { dataset: "Telegram-Daten", calculator: "Sterne-Rechner", verifier: "Provably fair" },
    updated: "Daten aktualisiert",
    faqHeading: "Fragen",
    relatedHeading: "Weiterlesen bei Gift Club",
    downloadHeading: "Download",
    downloadNote: "Die CSV ist UTF-8 mit Kopfzeile. Das JSON ist ein Array mit denselben Zeilen.",
  },

  nav: {
    home: "Überblick",
    stars: "Sterne-Preise",
    premium: "Premium-Preise",
    collections: "Geschenk-Kollektionen",
    limited: "Limitierte Geschenke",
  },

  home: {
    title: () => "Telegram-Geschenke und -Sterne Datensatz: Preise (CSV, JSON)",
    description: ({ F, n }) =>
      `Offener Datensatz mit Telegram-Sterne- und Premium-Preisen nach Land, ${n(F.collectionCount)} Sammler-Geschenk-Kollektionen mit Auflage und ${n(F.limitedCount)} limitierten Geschenken. CSV und JSON, CC BY 4.0.`,
    h1: "Telegram-Geschenke und -Sterne Datensatz",
    lead: () =>
      "Datierte Zahlen mit Quelle zu Telegram-Sternen, Telegram Premium und Telegram-Geschenken, als CSV und JSON zum Herunterladen, Auswerten oder Zitieren.",
    keywords: ["Telegram-Sterne", "Telegram Premium", "Telegram-Geschenke", "Fragment", "App Store", "Datensatz", "CSV", "JSON"],
    answer: ({ F, n, money, region }) =>
      `Auf Fragment kostet ein Telegram-Stern <strong>${money(F.fragmentUsd, "USD")}</strong> (${n(1000)} Sterne = ${money(F.fragmentUsd * 1000, "USD")}); im US-App-Store kosten ${n(1000)} Sterne ${money(F.us1000, "USD")}. ` +
      `Telegram Premium ist am günstigsten in: ${region(F.premiumCheapest.store)} (${F.premiumCheapest.monthly_as_printed} im Monat), unter den ${n(F.premiumStores)} erfassten App-Store-Ländern. ` +
      `${n(F.collectionCount)} Sammler-Geschenk-Kollektionen umfassen ${n(F.totalIssued)} Stück; die seltenste, ${F.rarest.name}, hat ${n(F.rarest.issued)}.`,
    insideHeading: "Was drin ist",
    cards: {
      stars: ({ F, n }) => `${n(F.starsRows)} App-Store-Paketpreise in ${n(F.storeCount)} Ländern plus der Festpreis von Fragment.`,
      premium: ({ F, n }) => `Premium monatlich und jährlich in ${n(F.premiumStores)} App-Store-Ländern sowie Geschenkpreise in USD, Gram und Sternen.`,
      collections: ({ F, n }) => `Alle ${n(F.collectionCount)} Sammler-Kollektionen nach Auflage und die ${n(F.regularCount)} regulären Geschenke.`,
      limited: ({ F, n }) => `${n(F.limitedCount)} limitierte und saisonale Geschenke mit Erscheinungsdatum, Sternepreis und Auflagenlimit.`,
    },
    downloadHeading: "Dateien herunterladen",
    downloadIntro: () =>
      "Jede Tabelle dieser Seite ist eine Datei im Ordner <code>data/</code> des Repositorys. Die Links unten liefern immer den neuesten Stand.",
    methodHeading: "Wie die Daten erhoben werden",
    method: () => `<ul>
<li><strong>Preise werden abgelesen, nicht umgerechnet.</strong> Jeder App-Store-Preis ist die Zahl, die Apple auf der Telegram-Seite des jeweiligen Landes in dessen Währung anzeigt, am Datum der Spalte <code>checked</code>.</li>
<li><strong>Fragment</strong>-Preise (Telegrams eigener Marktplatz) stammen von fragment.com in US-Dollar.</li>
<li>Die <strong>Auflagen</strong> der Sammlergeschenke stammen von den Geschenkseiten auf Fragment. Es sind Messwerte: Die Auflage einer Kollektion kann noch wachsen.</li>
<li><strong>Limitierte Geschenke</strong> stammen aus dem öffentlichen Log @GiftChanges, das am 24. Oktober 2024 begann. Früher verkaufte Geschenke haben kein Erscheinungsdatum.</li>
<li>Dollar-Schätzungen (<code>*_usd_estimate</code>) nutzen die Zentralbankkurse aus <code>fx-rates.json</code>, nie einen Live-Kurs.</li>
</ul>`,
    citeHeading: "So zitierst du",
    citeIntro: "Nenne Gift Club und verlinke diese Seite. Eine einfache Quellenangabe:",
    citeLink: (brand) => `Du schreibst über Telegram-Preise? Dieselben Zahlen speisen auch die Ratgeber auf ${brand}.`,
    faq: ({ F, n, money }) => [
      {
        q: "Ist das ein offizieller Telegram-Datensatz?",
        a: "Nein. Gift Club liest die öffentlichen Quellen von Telegram (App Store, Fragment, Bot API und das öffentliche Geschenk-Log) und hält jede Zahl mit Datum und Quelllink fest. Telegram veröffentlicht keine solche Liste.",
      },
      {
        q: "Darf ich die Daten in einem Artikel, einer App oder einer Studie nutzen?",
        a: "Ja. Die Daten stehen unter CC BY 4.0: Nutze sie überall, auch kommerziell, solange du Gift Club nennst und diesen Datensatz verlinkst.",
      },
      {
        q: "Wie viel kostet ein Telegram-Stern in Dollar?",
        a: `${money(F.fragmentUsd, "USD")} auf Fragment bei jeder Menge ab ${n(F.fragmentMin)} Sternen und etwa ${money(F.us100 / 100, "USD")} in einem ${n(100)}-Sterne-Paket im US-App-Store. Ein von einem Kanal verdienter Stern wird mit ${money(F.earnedUsd, "USD")} ausgezahlt.`,
      },
      {
        q: "Wie oft wird aktualisiert?",
        a: "Jede Tabelle trägt das Datum, an dem sie gelesen wurde. Ändert sich ein Preis oder eine Zahl, wird die Zeile an der Quelle neu gelesen und das Datum wandert mit.",
      },
    ],
  },

  stars: {
    title: () => "Telegram-Sterne-Preise nach Land: App Store, Fragment (CSV)",
    description: ({ F, n, money }) =>
      `Telegram-Sterne-Paketpreise in ${n(F.storeCount)} App-Store-Ländern in Landeswährung, neben dem Festpreis von ${money(F.fragmentUsd, "USD")} pro Stern auf Fragment. Download als CSV oder JSON.`,
    h1: "Telegram-Sterne-Preise nach Land",
    lead: ({ F, n }) => `${n(F.starsRows)} Paketpreise, gelesen von Telegrams App-Store-Seite jedes Landes, neben dem Fragment-Preis.`,
    keywords: ["Telegram-Sterne Preis", "Telegram-Sterne nach Land", "Fragment", "App Store", "CSV"],
    answer: ({ F, n, money }) =>
      `${n(1000)} Telegram-Sterne kosten <strong>${money(F.fragmentUsd * 1000, "USD")}</strong> auf Fragment und <strong>${money(F.us1000, "USD")}</strong> im US-App-Store. Fragment verlangt pauschal ${money(F.fragmentUsd, "USD")} pro Stern; App-Store-Pakete enthalten die Provision des Stores.`,
    usHeading: "USA: App Store und Fragment",
    usCaption: (d) => `Pakete im US-App-Store und dieselbe Menge auf Fragment, gelesen am ${d}`,
    fragmentHeading: "Der Festpreis von Fragment",
    fragmentText: ({ F, n, money }) =>
      `Fragment verkauft jede Menge ab ${n(F.fragmentMin)} Sternen zu ${money(F.fragmentUsd, "USD")} pro Stern, bezahlt in Gram (TON) oder mit einem Stablecoin. Der App Store verkauft nur feste Pakete und schlägt die Provision des Stores obendrauf, deshalb kosten dieselben Sterne dort mehr. Ein von einem Kanal oder Bot verdienter Stern wird mit ${money(F.earnedUsd, "USD")} ausgezahlt; gekaufte Sterne lassen sich nicht auszahlen.`,
    byCountryHeading: "App-Store-Preise in jedem Land",
    byCountryIntro: () =>
      "Apple listet pro Land nur die zehn meistgekauften Artikel, ein in der Tabelle fehlendes Paket gehörte also nicht zu den zehn dieses Landes. Die Fragment-Spalte ist überall in US-Dollar.",
    caption: (country, d) => `${country}, App Store, gelesen am ${d}`,
    cols: { stars: "Sterne", price: "App-Store-Preis", perStar: "Pro Stern", fragment: "Fragment (USD)", appStoreUs: "App Store (USA)", saving: "Ersparnis auf Fragment" },
    faq: ({ F, money }) => [
      {
        q: "Wo sind Telegram-Sterne am günstigsten?",
        a: `Auf Fragment, zu ${money(F.fragmentUsd, "USD")} pro Stern in jedem Land. Vergleiche unter den App-Store-Ländern die Spalte „Pro Stern“: Sie unterscheidet sich je nach Währung stark.`,
      },
      {
        q: "Warum weichen App-Store- und Google-Play-Preise von Fragment ab?",
        a: "App-Stores behalten eine Provision und verkaufen feste Pakete; Fragment ist Telegrams eigener Marktplatz und verlangt für jede Menge denselben Preis. Google Play veröffentlicht keine Preisliste, deshalb enthält dieser Datensatz keine.",
      },
      {
        q: "Sind diese Preise mit einem Wechselkurs umgerechnet?",
        a: "Nein. Jeder App-Store-Preis ist die Zahl des Stores in seiner eigenen Währung. Nur die Fragment-Spalte ist in Dollar.",
      },
    ],
  },

  premium: {
    title: () => "Telegram-Premium-Preis nach Land: App-Store-Daten (CSV)",
    description: ({ F, n }) =>
      `Monatliche und jährliche Telegram-Premium-Preise in ${n(F.premiumStores)} App-Store-Ländern sowie Geschenkpreise auf Fragment und in Sternen. CSV und JSON, mit Datum und Quelle.`,
    h1: "Telegram-Premium-Preise nach Land",
    lead: ({ F, n }) => `Was Telegram Premium in ${n(F.premiumStores)} App-Store-Ländern kostet, das günstigste zuerst.`,
    keywords: ["Telegram-Premium Preis", "Telegram Premium nach Land", "App Store", "Fragment", "CSV"],
    answer: ({ F, n, money, region }) =>
      `Telegram Premium kostet im US-App-Store <strong>${money(F.premiumUs, "USD")} im Monat</strong>. Am günstigsten: ${region(F.premiumCheapest.store)}, ${F.premiumCheapest.monthly_as_printed} (etwa ${money(F.premiumCheapest.monthly_usd_estimate, "USD")}). Am teuersten: ${region(F.premiumDearest.store)}, ${F.premiumDearest.monthly_as_printed}. Als Geschenk kosten 12 Monate ${money(F.gift12.fragment_usd, "USD")} auf Fragment oder ${n(F.gift12.telegram_stars)} Sterne.`,
    tableHeading: "Monats- und Jahrespreis in jedem Land",
    tableIntro: () =>
      "Preise so, wie Apple sie im jeweiligen Land anzeigt. Die Dollar-Spalte ist eine Schätzung zum Zentralbankkurs des Tages, an dem die Preise gelesen wurden; ein Strich bedeutet, dass der Tarif nicht unter den zehn gelisteten Artikeln des Landes war.",
    caption: (d) => `Telegram Premium im App Store, das günstigste zuerst, gelesen am ${d}`,
    giftHeading: "Premium verschenken: Fragment und Sterne",
    giftIntro: () =>
      "Premium lässt sich als Geschenk auf Fragment kaufen oder in Telegram mit Sternen verschicken. Die Sternepreise legt Telegrams Bot API fest.",
    giftCaption: (d) => `Premium-Geschenkpreise, gelesen am ${d}`,
    cols: { country: "Land", monthly: "Monatlich", annual: "Jährlich", prepaid: "3 Monate (Geschenk)", usd: "Monatlich in USD", months: "Monate", fragmentUsd: "Fragment (USD)", fragmentGram: "Fragment (Gram)", stars: "Sterne" },
    faq: ({ F, n, money, region }) => [
      {
        q: "In welchem Land ist Telegram Premium am günstigsten?",
        a: `Unter den Ländern dieses Datensatzes: ${region(F.premiumCheapest.store)}, ${F.premiumCheapest.monthly_as_printed} im Monat (etwa ${money(F.premiumCheapest.monthly_usd_estimate, "USD")}).`,
      },
      {
        q: "Wie viele Sterne kostet ein Premium-Geschenk?",
        a: `${n(F.gift3.telegram_stars)} Sterne für 3 Monate und ${n(F.gift12.telegram_stars)} für 12 Monate, von Telegram festgelegt.`,
      },
      {
        q: "Warum gibt es keine Google-Play-Spalte?",
        a: "Google Play zeigt Preise nur in der App auf einem angemeldeten Gerät, es gibt also keine öffentliche Seite, die man lesen und zitieren könnte.",
      },
    ],
  },

  collections: {
    title: () => "Telegram-Geschenk-Kollektionen: Auflage jedes NFT-Geschenks (CSV)",
    description: ({ F, n }) =>
      `Alle ${n(F.collectionCount)} Sammlergeschenk-Kollektionen von Telegram nach Auflage, ${n(F.totalIssued)} Stück insgesamt, plus die ${n(F.regularCount)} regulären Geschenke mit IDs und Sternepreisen.`,
    h1: "Telegram-Geschenk-Kollektionen nach Auflage",
    lead: ({ F, n }) => `Jede Sammlergeschenk-Kollektion (aufgewertet) auf Fragment, die kleinste Auflage zuerst: ${n(F.collectionCount)} Kollektionen.`,
    keywords: ["Telegram-NFT-Geschenke", "Telegram-Sammlergeschenke", "Geschenkauflage", "Fragment", "CSV"],
    answer: ({ F, n }) =>
      `Die seltenste Telegram-Geschenk-Kollektion ist <strong>${F.rarest.name}</strong> mit ${n(F.rarest.issued)} ausgegebenen Stück. Alle ${n(F.collectionCount)} Kollektionen zusammen umfassen ${n(F.totalIssued)} Sammlergeschenke.`,
    tableHeading: "Jede Kollektion, die kleinste Auflage zuerst",
    tableIntro: () =>
      "Die Auflage ist die Zahl der Stücke, die am Tag des Lesens in einer Kollektion existieren. Sie kann noch steigen, nimm sie also als Messwert, nicht als Obergrenze.",
    caption: (d) => `Sammlergeschenk-Kollektionen auf Fragment, gelesen am ${d}`,
    regularHeading: "Reguläre Geschenke und ihre IDs",
    regularIntro: ({ F, n }) =>
      `Die ${n(F.regularCount)} regulären Geschenke, die ein Bot mit <code>sendGift</code> der Bot API senden kann, von ${n(F.regularMin)} bis ${n(F.regularMax)} Sternen.`,
    regularCaption: "Reguläre Telegram-Geschenke",
    cols: { rank: "Nr.", name: "Kollektion", issued: "Auflage", giftId: "Geschenk-ID", stars: "Sterne" },
    faq: ({ F, n }) => [
      {
        q: "Was ist das seltenste Telegram-Geschenk?",
        a: `Nach Auflage ${F.rarest.name} (${n(F.rarest.issued)} Stück). Die Seltenheit innerhalb einer Kollektion hängt außerdem von Modell, Hintergrund und Symbol ab, die ein Geschenk beim Aufwerten bekam.`,
      },
      {
        q: "Wie viele Telegram-NFT-Geschenke gibt es?",
        a: `${n(F.totalIssued)} in ${n(F.collectionCount)} Kollektionen am Tag des Lesens.`,
      },
      {
        q: "Woher stammen die Zahlen?",
        a: "Von Fragment, Telegrams eigenem Marktplatz, der die Auflage auf der Seite jeder Kollektion zeigt.",
      },
    ],
  },

  limited: {
    title: () => "Limitierte Telegram-Geschenke: Daten, Preise, Auflage (CSV)",
    description: ({ F, n }) =>
      `${n(F.limitedCount)} limitierte und saisonale Telegram-Geschenke mit Erscheinungsdatum, Sternepreis und Auflagenlimit aus dem öffentlichen Geschenk-Log. Download als CSV oder JSON.`,
    h1: "Limitierte und saisonale Telegram-Geschenke",
    lead: ({ F, n }) => `${n(F.limitedCount)} limitierte Geschenke, die neuesten zuerst, mit Erscheinungsdatum und Stückzahl.`,
    keywords: ["limitierte Telegram-Geschenke", "saisonale Telegram-Geschenke", "Geschenkauflage", "Telegram-Sterne", "CSV"],
    answer: ({ F, n, date }) =>
      `Telegram hat <strong>${n(F.limitedCount)} limitierte und saisonale Geschenke</strong> veröffentlicht; ${n(F.cappedCount)} davon hatten ein Auflagenlimit. Das kleinste Limit hatte ${F.smallestCapped.name} (${n(F.smallestCapped.supply)}). Die jüngste Veröffentlichung in diesem Datensatz stammt vom ${date(F.lastRelease)}.`,
    tableHeading: "Jedes limitierte Geschenk, die neuesten zuerst",
    tableIntro: () =>
      "Sterne ist der Preis zum Erscheinen (oder das Mindestgebot bei einer Auktion). Ein Strich bei der Auflage bedeutet, dass das Log kein Limit nannte, meist bei einem saisonalen Geschenk.",
    caption: (d) => `Limitierte Telegram-Geschenke, gelesen am ${d}`,
    beforeLog: "vor 24. Okt. 2024",
    premiumOnly: "Nur Premium",
    auction: "Auktion",
    sourceNote:
      "Quelle: das öffentliche Log @GiftChanges (t.me/GiftChanges). Die Geschenknamen stammen von Telegram und bleiben in allen Sprachen englisch.",
    cols: { name: "Geschenk", released: "Erschienen", stars: "Sterne", supply: "Auflage", notes: "Hinweise" },
    faq: ({ F, n }) => [
      {
        q: "Was ist ein limitiertes Telegram-Geschenk?",
        a: "Ein Geschenk, das Telegram nur kurze Zeit oder in fester Stückzahl verkauft. Ist es ausverkauft, gibt es das nur noch von anderen Nutzern, und die meisten lassen sich zu einem Sammlerstück aufwerten.",
      },
      {
        q: "Welches limitierte Geschenk hatte die kleinste Auflage?",
        a: `${F.smallestCapped.name} mit ${n(F.smallestCapped.supply)} Stück.`,
      },
      {
        q: "Warum haben manche Geschenke kein Erscheinungsdatum?",
        a: "Das öffentliche Log begann am 24. Oktober 2024. Geschenke, die vorher im Verkauf waren, stehen ohne Datum in der Liste.",
      },
    ],
  },
};
