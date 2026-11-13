// Testo italiano del sito dei dati. Stessa struttura di en.mjs.

export default {
  siteName: "Dataset dei regali e delle Stelle di Telegram",
  short: "Dataset",
  licence: (cc) => `Dati con licenza ${cc}: puoi riutilizzarli liberamente, citando Gift Club e linkando questa pagina.`,

  ui: {
    navLabel: "Sezioni del dataset",
    langsLabel: "Lingue",
    footerBy: (brand) => `Un dataset aperto di ${brand}, la Mini App di Telegram con casse regalo e giochi.`,
    moreLabel: "Altro da Gift Club",
    sourceOnGithub: "Sorgente su GitHub",
    sisters: { dataset: "Dati di Telegram", calculator: "Calcolatore di Stelle", verifier: "Provably fair" },
    updated: "Dati aggiornati",
    faqHeading: "Domande",
    relatedHeading: "Continua a leggere su Gift Club",
    downloadHeading: "Scarica",
    downloadNote: "Il CSV è in UTF-8 con riga di intestazione. Il JSON è un array con le stesse righe.",
  },

  nav: {
    home: "Panoramica",
    stars: "Prezzi delle Stelle",
    premium: "Prezzi di Premium",
    collections: "Collezioni di regali",
    limited: "Regali limitati",
  },

  home: {
    title: () => "Dataset regali e Stelle di Telegram: prezzi (CSV, JSON)",
    description: ({ F, n }) =>
      `Dataset aperto con i prezzi delle Stelle e di Premium di Telegram per paese, ${n(F.collectionCount)} collezioni di regali da collezione con le emissioni e ${n(F.limitedCount)} regali limitati. CSV e JSON, CC BY 4.0.`,
    h1: "Dataset dei regali e delle Stelle di Telegram",
    lead: () =>
      "Cifre datate e con fonte su Stelle, Telegram Premium e regali di Telegram, in CSV e JSON da scaricare, rappresentare in grafici o citare.",
    keywords: ["Stelle di Telegram", "Telegram Premium", "regali di Telegram", "Fragment", "App Store", "dataset", "CSV", "JSON"],
    answer: ({ F, n, money, region }) =>
      `Su Fragment una Stella di Telegram costa <strong>${money(F.fragmentUsd, "USD")}</strong> (${n(1000)} Stelle = ${money(F.fragmentUsd * 1000, "USD")}); nell'App Store statunitense ${n(1000)} Stelle costano ${money(F.us1000, "USD")}. ` +
      `Telegram Premium costa meno qui: ${region(F.premiumCheapest.store)} (${F.premiumCheapest.monthly_as_printed} al mese), tra i ${n(F.premiumStores)} paesi dell'App Store letti. ` +
      `${n(F.collectionCount)} collezioni di regali da collezione contano ${n(F.totalIssued)} pezzi; la più rara, ${F.rarest.name}, ne ha ${n(F.rarest.issued)}.`,
    insideHeading: "Cosa contiene",
    cards: {
      stars: ({ F, n }) => `${n(F.starsRows)} prezzi dei pacchetti dell'App Store in ${n(F.storeCount)} paesi, più la tariffa fissa di Fragment.`,
      premium: ({ F, n }) => `Premium mensile e annuale in ${n(F.premiumStores)} paesi dell'App Store e prezzi dei regali in USD, Gram e Stelle.`,
      collections: ({ F, n }) => `Tutte le ${n(F.collectionCount)} collezioni da collezione per emissione e i ${n(F.regularCount)} regali normali.`,
      limited: ({ F, n }) => `${n(F.limitedCount)} regali limitati e stagionali con data di uscita, prezzo in Stelle e tetto di emissione.`,
    },
    downloadHeading: "Scarica i file",
    downloadIntro: () =>
      "Ogni tabella di questo sito è un file nella cartella <code>data/</code> del repository. I link qui sotto servono sempre l'ultima versione.",
    methodHeading: "Come vengono raccolti i dati",
    method: () => `<ul>
<li><strong>I prezzi vengono letti, non convertiti.</strong> Ogni prezzo dell'App Store è la cifra che Apple mostra nella scheda di Telegram in quel paese, nella valuta di quel paese, alla data della colonna <code>checked</code>.</li>
<li>I prezzi di <strong>Fragment</strong> (il marketplace di Telegram) vengono da fragment.com in dollari statunitensi.</li>
<li>Le <strong>emissioni</strong> dei regali da collezione vengono dalle pagine dei regali di Fragment. Sono letture: il numero di una collezione può ancora crescere.</li>
<li>I <strong>regali limitati</strong> vengono dal registro pubblico @GiftChanges, iniziato il 24 ottobre 2024. I regali venduti prima non hanno data di uscita.</li>
<li>Le stime in dollari (<code>*_usd_estimate</code>) usano i cambi delle banche centrali in <code>fx-rates.json</code>, mai un cambio in tempo reale.</li>
</ul>`,
    citeHeading: "Come citare",
    citeIntro: "Cita Gift Club e linka questa pagina. Una citazione semplice:",
    citeLink: (brand) => `Scrivi dei prezzi di Telegram? Queste stesse cifre alimentano le guide di ${brand}.`,
    faq: ({ F, n, money }) => [
      {
        q: "È un dataset ufficiale di Telegram?",
        a: "No. Gift Club legge le fonti pubbliche di Telegram (l'App Store, Fragment, la Bot API e il registro pubblico dei regali) e annota ogni cifra con data e link alla fonte. Telegram non pubblica un elenco del genere.",
      },
      {
        q: "Posso usare i dati in un articolo, in un'app o in una ricerca?",
        a: "Sì. I dati sono CC BY 4.0: riutilizzali ovunque, anche a fini commerciali, purché citi Gift Club e linki questo dataset.",
      },
      {
        q: "Quanto costa in dollari una Stella di Telegram?",
        a: `${money(F.fragmentUsd, "USD")} su Fragment per qualsiasi quantità da ${n(F.fragmentMin)} Stelle, e circa ${money(F.us100 / 100, "USD")} in un pacchetto da ${n(100)} Stelle nell'App Store statunitense. Una Stella guadagnata da un canale viene pagata ${money(F.earnedUsd, "USD")}.`,
      },
      {
        q: "Ogni quanto viene aggiornato?",
        a: "Ogni tabella riporta la data in cui è stata letta. Quando cambia un prezzo o un numero, la riga viene riletta alla fonte e la data si sposta con lei.",
      },
    ],
  },

  stars: {
    title: () => "Prezzi delle Stelle di Telegram per paese: App Store (CSV)",
    description: ({ F, n, money }) =>
      `Prezzi dei pacchetti di Stelle di Telegram in ${n(F.storeCount)} paesi dell'App Store in valuta locale, accanto alla tariffa fissa di ${money(F.fragmentUsd, "USD")} a Stella di Fragment. Scarica in CSV o JSON.`,
    h1: "Prezzi delle Stelle di Telegram per paese",
    lead: ({ F, n }) => `${n(F.starsRows)} prezzi dei pacchetti, letti dalla scheda di Telegram nell'App Store di ogni paese, accanto alla tariffa di Fragment.`,
    keywords: ["prezzo Stelle di Telegram", "Stelle di Telegram per paese", "Fragment", "App Store", "CSV"],
    answer: ({ F, n, money }) =>
      `${n(1000)} Stelle di Telegram costano <strong>${money(F.fragmentUsd * 1000, "USD")}</strong> su Fragment e <strong>${money(F.us1000, "USD")}</strong> nell'App Store statunitense. Fragment applica una tariffa fissa di ${money(F.fragmentUsd, "USD")} a Stella; i pacchetti dell'App Store includono la commissione dello store.`,
    usHeading: "Stati Uniti: App Store e Fragment",
    usCaption: (d) => `Pacchetti dell'App Store statunitense e stessa quantità su Fragment, letti il ${d}`,
    fragmentHeading: "La tariffa fissa di Fragment",
    fragmentText: ({ F, n, money }) =>
      `Fragment vende qualsiasi quantità da ${n(F.fragmentMin)} Stelle a ${money(F.fragmentUsd, "USD")} l'una, pagabili in Gram (TON) o con una stablecoin. L'App Store vende solo pacchetti fissi e aggiunge la commissione dello store, quindi le stesse Stelle costano di più. Una Stella guadagnata da un canale o da un bot si ritira a ${money(F.earnedUsd, "USD")}; le Stelle acquistate non si ritirano.`,
    byCountryHeading: "Prezzi dell'App Store in ogni paese",
    byCountryIntro: () =>
      "Apple elenca solo i dieci articoli più acquistati di ogni paese, quindi un pacchetto assente da una tabella non era tra i dieci di quel paese. La colonna di Fragment è sempre in dollari statunitensi.",
    caption: (country, d) => `${country}, App Store, letto il ${d}`,
    cols: { stars: "Stelle", price: "Prezzo App Store", perStar: "Per Stella", fragment: "Fragment (USD)", appStoreUs: "App Store (USA)", saving: "Risparmio su Fragment" },
    faq: ({ F, money }) => [
      {
        q: "Dove costano meno le Stelle di Telegram?",
        a: `Su Fragment, a ${money(F.fragmentUsd, "USD")} la Stella in ogni paese. Tra i paesi dell'App Store, confronta la colonna «Per Stella»: cambia molto da una valuta all'altra.`,
      },
      {
        q: "Perché i prezzi di App Store e Google Play sono diversi da Fragment?",
        a: "Gli store di app trattengono una commissione e vendono pacchetti fissi; Fragment è il marketplace di Telegram e applica la stessa tariffa a qualsiasi quantità. Google Play non pubblica un listino, quindi questo dataset non lo include.",
      },
      {
        q: "Questi prezzi sono convertiti con un tasso di cambio?",
        a: "No. Ogni prezzo dell'App Store è la cifra dello store nella sua valuta. Solo la colonna di Fragment è in dollari.",
      },
    ],
  },

  premium: {
    title: () => "Prezzo di Telegram Premium per paese: dati App Store (CSV)",
    description: ({ F, n }) =>
      `Prezzi mensili e annuali di Telegram Premium in ${n(F.premiumStores)} paesi dell'App Store, più i prezzi dei regali su Fragment e in Stelle. CSV e JSON, con data e fonte.`,
    h1: "Prezzi di Telegram Premium per paese",
    lead: ({ F, n }) => `Quanto costa Telegram Premium in ${n(F.premiumStores)} paesi dell'App Store, dal più economico.`,
    keywords: ["prezzo Telegram Premium", "Telegram Premium per paese", "App Store", "Fragment", "CSV"],
    answer: ({ F, n, money, region }) =>
      `Telegram Premium costa <strong>${money(F.premiumUs, "USD")} al mese</strong> nell'App Store statunitense. Il più economico: ${region(F.premiumCheapest.store)}, ${F.premiumCheapest.monthly_as_printed} (circa ${money(F.premiumCheapest.monthly_usd_estimate, "USD")}). Il più caro: ${region(F.premiumDearest.store)}, ${F.premiumDearest.monthly_as_printed}. Come regalo, 12 mesi costano ${money(F.gift12.fragment_usd, "USD")} su Fragment o ${n(F.gift12.telegram_stars)} Stelle.`,
    tableHeading: "Prezzo mensile e annuale in ogni paese",
    tableIntro: () =>
      "Prezzi così come li mostra Apple in ogni paese. La colonna in dollari è una stima al cambio della banca centrale del giorno della lettura; un trattino indica che il piano non era tra i dieci articoli elencati di quel paese.",
    caption: (d) => `Telegram Premium nell'App Store, dal più economico, letto il ${d}`,
    giftHeading: "Regalare Premium: Fragment e Stelle",
    giftIntro: () =>
      "Premium si può acquistare come regalo su Fragment o inviare con le Stelle dentro Telegram. I prezzi in Stelle sono fissati dalla Bot API di Telegram.",
    giftCaption: (d) => `Prezzi di Premium come regalo, letti il ${d}`,
    cols: { country: "Paese", monthly: "Mensile", annual: "Annuale", prepaid: "3 mesi (regalo)", usd: "Mensile in USD", months: "Mesi", fragmentUsd: "Fragment (USD)", fragmentGram: "Fragment (Gram)", stars: "Stelle" },
    faq: ({ F, n, money, region }) => [
      {
        q: "In quale paese costa meno Telegram Premium?",
        a: `Tra i paesi di questo dataset: ${region(F.premiumCheapest.store)}, a ${F.premiumCheapest.monthly_as_printed} al mese (circa ${money(F.premiumCheapest.monthly_usd_estimate, "USD")}).`,
      },
      {
        q: "Quante Stelle costa un regalo Premium?",
        a: `${n(F.gift3.telegram_stars)} Stelle per 3 mesi e ${n(F.gift12.telegram_stars)} per 12 mesi, fissate da Telegram.`,
      },
      {
        q: "Perché non c'è una colonna Google Play?",
        a: "Google Play mostra i prezzi solo dentro l'app, su un dispositivo con accesso effettuato, quindi non esiste una pagina pubblica da leggere e citare.",
      },
    ],
  },

  collections: {
    title: () => "Collezioni di regali Telegram: emissione di ogni NFT (CSV)",
    description: ({ F, n }) =>
      `Tutte le ${n(F.collectionCount)} collezioni di regali da collezione di Telegram ordinate per emissione, ${n(F.totalIssued)} pezzi in totale, più i ${n(F.regularCount)} regali normali con ID e prezzi in Stelle.`,
    h1: "Collezioni di regali di Telegram per emissione",
    lead: ({ F, n }) => `Ogni collezione di regali da collezione (potenziati) su Fragment, dalla minore emissione: ${n(F.collectionCount)} collezioni.`,
    keywords: ["regali NFT di Telegram", "regali da collezione di Telegram", "emissione dei regali", "Fragment", "CSV"],
    answer: ({ F, n }) =>
      `La collezione di regali più rara di Telegram è <strong>${F.rarest.name}</strong>, con ${n(F.rarest.issued)} pezzi emessi. Tutte le ${n(F.collectionCount)} collezioni insieme contano ${n(F.totalIssued)} regali da collezione.`,
    tableHeading: "Ogni collezione, dalla minore emissione",
    tableIntro: () =>
      "L'emissione è il numero di pezzi esistenti in una collezione il giorno della lettura. Può ancora salire, quindi considerala una lettura, non un tetto.",
    caption: (d) => `Collezioni di regali da collezione su Fragment, lette il ${d}`,
    regularHeading: "Regali normali e i loro ID",
    regularIntro: ({ F, n }) =>
      `I ${n(F.regularCount)} regali normali che un bot può inviare con <code>sendGift</code> della Bot API, da ${n(F.regularMin)} a ${n(F.regularMax)} Stelle.`,
    regularCaption: "Regali normali di Telegram",
    cols: { rank: "N.", name: "Collezione", issued: "Emissione", giftId: "ID del regalo", stars: "Stelle" },
    faq: ({ F, n }) => [
      {
        q: "Qual è il regalo più raro di Telegram?",
        a: `Per emissione, ${F.rarest.name} (${n(F.rarest.issued)} pezzi). La rarità dentro una collezione dipende anche da modello, sfondo e simbolo ottenuti dal regalo al momento del potenziamento.`,
      },
      {
        q: "Quanti regali NFT di Telegram esistono?",
        a: `${n(F.totalIssued)} in ${n(F.collectionCount)} collezioni il giorno della lettura.`,
      },
      {
        q: "Da dove vengono i numeri?",
        a: "Da Fragment, il marketplace di Telegram, che mostra l'emissione nella pagina di ogni collezione.",
      },
    ],
  },

  limited: {
    title: () => "Regali limitati di Telegram: date, prezzi, emissione (CSV)",
    description: ({ F, n }) =>
      `${n(F.limitedCount)} regali limitati e stagionali di Telegram con data di uscita, prezzo in Stelle e tetto di emissione, dal registro pubblico. Scarica in CSV o JSON.`,
    h1: "Regali limitati e stagionali di Telegram",
    lead: ({ F, n }) => `${n(F.limitedCount)} regali limitati, dal più recente, con la data di uscita e quanti ne sono stati prodotti.`,
    keywords: ["regali limitati di Telegram", "regali stagionali di Telegram", "emissione dei regali", "Stelle di Telegram", "CSV"],
    answer: ({ F, n, date }) =>
      `Telegram ha rilasciato <strong>${n(F.limitedCount)} regali limitati e stagionali</strong>; ${n(F.cappedCount)} avevano un tetto di emissione. Il tetto più basso era di ${F.smallestCapped.name} (${n(F.smallestCapped.supply)}). L'ultima uscita in questo dataset è del ${date(F.lastRelease)}.`,
    tableHeading: "Ogni regalo limitato, dal più recente",
    tableIntro: () =>
      "Le Stelle sono il prezzo all'uscita (o l'offerta minima in un'asta). Un trattino sotto emissione indica che il registro non riportava un tetto, di solito per un regalo stagionale.",
    caption: (d) => `Regali limitati di Telegram, letti il ${d}`,
    beforeLog: "prima del 24 ott 2024",
    premiumOnly: "Solo Premium",
    auction: "asta",
    sourceNote:
      "Fonte: il registro pubblico @GiftChanges (t.me/GiftChanges). I nomi dei regali sono quelli di Telegram e restano in inglese in ogni lingua.",
    cols: { name: "Regalo", released: "Uscita", stars: "Stelle", supply: "Emissione", notes: "Note" },
    faq: ({ F, n }) => [
      {
        q: "Che cos'è un regalo limitato di Telegram?",
        a: "Un regalo che Telegram vende per poco tempo o in numero fisso. Una volta esaurito si può comprare solo da un altro utente, e la maggior parte si può potenziare in un regalo da collezione.",
      },
      {
        q: "Quale regalo limitato ha avuto la minore emissione?",
        a: `${F.smallestCapped.name}, con ${n(F.smallestCapped.supply)} esemplari.`,
      },
      {
        q: "Perché alcuni regali non hanno una data di uscita?",
        a: "Il registro pubblico è iniziato il 24 ottobre 2024. I regali in vendita prima di quel giorno sono elencati senza data.",
      },
    ],
  },
};
