// English copy for the dataset site. Every other language file has the same shape.
// Figures never live here: they come from data/ through `ctx` (ctx.F, ctx.n, ctx.money, ctx.date, ctx.region).

export default {
  siteName: "Telegram Gifts & Stars Dataset",
  short: "Dataset",
  licence: (cc) => `Data licensed under ${cc}: free to reuse, with credit to Gift Club and a link to this page.`,

  ui: {
    navLabel: "Dataset sections",
    langsLabel: "Languages",
    footerBy: (brand) => `An open dataset by ${brand}, the Telegram Mini App with gift boxes and games.`,
    moreLabel: "More from Gift Club",
    sourceOnGithub: "Source on GitHub",
    sisters: { dataset: "Telegram data", calculator: "Stars calculator", verifier: "Provably fair verifier" },
    updated: "Data updated",
    faqHeading: "Questions",
    relatedHeading: "Read next on Gift Club",
    downloadHeading: "Download",
    downloadNote: "CSV is UTF-8 with a header row. JSON is an array of the same rows.",
  },

  nav: {
    home: "Overview",
    stars: "Stars prices",
    premium: "Premium prices",
    collections: "Gift collections",
    limited: "Limited gifts",
  },

  home: {
    title: () => "Telegram Gifts & Stars Dataset: Prices, Supply (CSV, JSON)",
    description: ({ F, n }) =>
      `Open dataset of Telegram Stars and Premium prices by country, ${n(F.collectionCount)} collectible gift collections with issued counts and ${n(F.limitedCount)} limited gifts. CSV and JSON, CC BY 4.0.`,
    h1: "Telegram Gifts & Stars Dataset",
    lead: () =>
      "Dated, sourced figures on Telegram Stars, Telegram Premium and Telegram Gifts, as CSV and JSON you can download, chart or cite.",
    keywords: ["Telegram Stars", "Telegram Premium", "Telegram Gifts", "Fragment", "App Store", "dataset", "CSV", "JSON"],
    answer: ({ F, n, money, region }) =>
      `On Fragment a Telegram Star costs <strong>${money(F.fragmentUsd, "USD")}</strong> (1,000 Stars = ${money(F.fragmentUsd * 1000, "USD")}); in the US App Store 1,000 Stars cost ${money(F.us1000, "USD")}. ` +
      `Telegram Premium is cheapest in ${region(F.premiumCheapest.store)} (${F.premiumCheapest.monthly_as_printed} a month) of the ${n(F.premiumStores)} App Store countries read. ` +
      `${n(F.collectionCount)} collectible gift collections hold ${n(F.totalIssued)} items; the rarest, ${F.rarest.name}, has ${n(F.rarest.issued)}.`,
    insideHeading: "What's inside",
    cards: {
      stars: ({ F, n }) => `${n(F.starsRows)} App Store pack prices in ${n(F.storeCount)} countries, plus Fragment's flat rate.`,
      premium: ({ F, n }) => `Monthly and yearly Premium in ${n(F.premiumStores)} App Store countries, and gift prices in USD, Gram and Stars.`,
      collections: ({ F, n }) => `All ${n(F.collectionCount)} collectible collections by issued count, and the ${n(F.regularCount)} regular gifts.`,
      limited: ({ F, n }) => `${n(F.limitedCount)} limited and seasonal gifts with release date, Stars price and supply cap.`,
    },
    downloadHeading: "Download the files",
    downloadIntro: () =>
      "Every table on this site is a file in the repository's <code>data/</code> folder. Links below always serve the latest snapshot.",
    methodHeading: "How the data is collected",
    method: () => `<ul>
<li><strong>Prices are read, not converted.</strong> Each App Store price is the figure Apple prints on Telegram's listing in that country, in that country's currency, on the date in the <code>checked</code> column.</li>
<li><strong>Fragment</strong> (Telegram's own marketplace) prices come from fragment.com in US dollars.</li>
<li><strong>Issued counts</strong> of collectible gifts come from Fragment's gift pages. They are readings: a collection's count can still grow.</li>
<li><strong>Limited gifts</strong> come from the public log @GiftChanges, which began on 24 October 2024. Gifts sold before then have no release date.</li>
<li>Dollar estimates (<code>*_usd_estimate</code>) use the central-bank rates in <code>fx-rates.json</code>, never a live rate.</li>
</ul>`,
    citeHeading: "How to cite",
    citeIntro: "Credit Gift Club and link to this page. A plain citation:",
    citeLink: (brand) => `Writing about Telegram prices? The figures here also feed the guides on ${brand}.`,
    faq: ({ F, n, money }) => [
      {
        q: "Is this an official Telegram dataset?",
        a: "No. Gift Club reads Telegram's public sources (the App Store, Fragment, the Bot API and the public gift log) and records each figure with its date and source link. Telegram publishes no such list itself.",
      },
      {
        q: "Can I use the data in an article, app or research?",
        a: "Yes. The data is CC BY 4.0: reuse it anywhere, commercially too, as long as you credit Gift Club and link to this dataset.",
      },
      {
        q: "How much is one Telegram Star in dollars?",
        a: `${money(F.fragmentUsd, "USD")} on Fragment at any amount from ${n(F.fragmentMin)} Stars, and about ${money(F.us100 / 100, "USD")} in a 100-Star pack in the US App Store. A Star a channel earns pays out ${money(F.earnedUsd, "USD")}.`,
      },
      {
        q: "How often is it updated?",
        a: "Each table carries the date it was read. When a price or count changes, the row is re-read at its source and the date moves with it.",
      },
    ],
  },

  stars: {
    title: () => "Telegram Stars Prices by Country: App Store & Fragment (CSV)",
    description: ({ F, n }) =>
      `Telegram Stars pack prices in ${n(F.storeCount)} App Store countries in local currency, next to Fragment's flat $${F.fragmentUsd} per Star. Download as CSV or JSON.`,
    h1: "Telegram Stars prices by country",
    lead: ({ F, n }) => `${n(F.starsRows)} pack prices, read from Telegram's App Store listing in each country, next to Fragment's rate.`,
    keywords: ["Telegram Stars price", "Telegram Stars by country", "Fragment", "App Store", "CSV"],
    answer: ({ F, money }) =>
      `1,000 Telegram Stars cost <strong>${money(F.fragmentUsd * 1000, "USD")}</strong> on Fragment and <strong>${money(F.us1000, "USD")}</strong> in the US App Store. Fragment charges a flat ${money(F.fragmentUsd, "USD")} per Star; App Store packs carry the store's cut.`,
    usHeading: "United States: App Store vs Fragment",
    usCaption: (d) => `US App Store packs and the same amount on Fragment, read ${d}`,
    fragmentHeading: "Fragment's flat rate",
    fragmentText: ({ F, n, money }) =>
      `Fragment sells any amount from ${n(F.fragmentMin)} Stars at ${money(F.fragmentUsd, "USD")} a Star, paid in Gram (TON) or a stablecoin. The App Store sells fixed packs only and adds the store's cut, so the same Stars cost more there. A Star earned by a channel or bot withdraws at ${money(F.earnedUsd, "USD")}; bought Stars never withdraw.`,
    byCountryHeading: "App Store prices in every country",
    byCountryIntro: () =>
      "Apple lists only the ten most bought items per country, so a pack missing from a table was not among that country's ten. The Fragment column is in US dollars everywhere.",
    caption: (country, d) => `${country}, App Store, read ${d}`,
    cols: { stars: "Stars", price: "App Store price", perStar: "Per Star", fragment: "Fragment (USD)", appStoreUs: "App Store (US)", saving: "Fragment saves" },
    faq: ({ F, money }) => [
      {
        q: "Where are Telegram Stars cheapest?",
        a: `On Fragment, at ${money(F.fragmentUsd, "USD")} a Star in every country. Among App Store countries, compare the per-Star column: it differs a lot between currencies.`,
      },
      {
        q: "Why do App Store and Google Play prices differ from Fragment?",
        a: "The app stores take a cut and sell fixed packs; Fragment is Telegram's own marketplace and charges the same rate for any amount. Google Play publishes no price list, so this dataset has none.",
      },
      {
        q: "Are these prices converted with an exchange rate?",
        a: "No. Each App Store price is the store's own figure in its own currency. Only the Fragment column is in dollars.",
      },
    ],
  },

  premium: {
    title: () => "Telegram Premium Price by Country: App Store Data (CSV)",
    description: ({ F, n }) =>
      `Telegram Premium monthly and yearly prices in ${n(F.premiumStores)} App Store countries, plus gift prices on Fragment and in Stars. CSV and JSON, dated and sourced.`,
    h1: "Telegram Premium prices by country",
    lead: ({ F, n }) => `What Telegram Premium costs in ${n(F.premiumStores)} App Store countries, cheapest first.`,
    keywords: ["Telegram Premium price", "Telegram Premium by country", "App Store", "Fragment", "CSV"],
    answer: ({ F, money, region }) =>
      `Telegram Premium costs <strong>${money(F.premiumUs, "USD")} a month</strong> in the US App Store. Cheapest: ${region(F.premiumCheapest.store)}, ${F.premiumCheapest.monthly_as_printed} (about ${money(F.premiumCheapest.monthly_usd_estimate, "USD")}). Most expensive: ${region(F.premiumDearest.store)}, ${F.premiumDearest.monthly_as_printed}. As a gift, 12 months cost ${money(F.gift12.fragment_usd, "USD")} on Fragment or ${F.gift12.telegram_stars.toLocaleString("en-US")} Stars.`,
    tableHeading: "Monthly and yearly price in each country",
    tableIntro: () =>
      "Prices as Apple prints them in each country. The dollar column is an estimate at the central-bank rate of the day the prices were read; a dash means the plan was not among that country's ten listed items.",
    caption: (d) => `Telegram Premium in the App Store, cheapest first, read ${d}`,
    giftHeading: "Gifting Premium: Fragment and Stars",
    giftIntro: () =>
      "Premium can be bought as a gift on Fragment or sent for Stars inside Telegram. The Stars prices are fixed by Telegram's Bot API.",
    giftCaption: (d) => `Premium gift prices, read ${d}`,
    cols: { country: "Country", monthly: "Monthly", annual: "Yearly", prepaid: "3 months (gift)", usd: "Monthly in USD", months: "Months", fragmentUsd: "Fragment (USD)", fragmentGram: "Fragment (Gram)", stars: "Stars" },
    faq: ({ F, money, region }) => [
      {
        q: "Which country has the cheapest Telegram Premium?",
        a: `${region(F.premiumCheapest.store)}, at ${F.premiumCheapest.monthly_as_printed} a month (about ${money(F.premiumCheapest.monthly_usd_estimate, "USD")}), of the countries in this dataset.`,
      },
      {
        q: "How many Stars does a Premium gift cost?",
        a: `${F.gift3.telegram_stars.toLocaleString("en-US")} Stars for 3 months and ${F.gift12.telegram_stars.toLocaleString("en-US")} for 12 months, fixed by Telegram.`,
      },
      {
        q: "Why is there no Google Play column?",
        a: "Google Play shows prices only inside the app, on a signed-in device, so there is no public page to read and cite.",
      },
    ],
  },

  collections: {
    title: () => "Telegram Gift Collections: Issued Count of Every NFT Gift (CSV)",
    description: ({ F, n }) =>
      `All ${n(F.collectionCount)} Telegram collectible gift collections ranked by issued count, ${n(F.totalIssued)} items in total, plus the ${n(F.regularCount)} regular gifts with IDs and Stars prices.`,
    h1: "Telegram gift collections by issued count",
    lead: ({ F, n }) => `Every collectible (upgraded) gift collection on Fragment, fewest issued first: ${n(F.collectionCount)} collections.`,
    keywords: ["Telegram NFT gifts", "Telegram collectible gifts", "gift supply", "Fragment", "CSV"],
    answer: ({ F, n }) =>
      `The rarest Telegram gift collection is <strong>${F.rarest.name}</strong>, with ${n(F.rarest.issued)} items issued. All ${n(F.collectionCount)} collections together hold ${n(F.totalIssued)} collectible gifts.`,
    tableHeading: "Every collection, fewest issued first",
    tableIntro: () =>
      "The issued count is the number of items that exist in a collection on the day it was read. Counts can still rise, so treat them as readings, not caps.",
    caption: (d) => `Collectible gift collections on Fragment, read ${d}`,
    regularHeading: "Regular gifts and their IDs",
    regularIntro: ({ F, n }) =>
      `The ${n(F.regularCount)} regular gifts a bot can send with the Bot API's <code>sendGift</code>, from ${n(F.regularMin)} to ${n(F.regularMax)} Stars.`,
    regularCaption: "Regular Telegram gifts",
    cols: { rank: "#", name: "Collection", issued: "Issued", giftId: "Gift ID", stars: "Stars" },
    faq: ({ F, n }) => [
      {
        q: "What is the rarest Telegram gift?",
        a: `By issued count, ${F.rarest.name} (${n(F.rarest.issued)} items). Rarity inside a collection also depends on the model, backdrop and symbol a gift got when upgraded.`,
      },
      {
        q: "How many Telegram NFT gifts exist?",
        a: `${n(F.totalIssued)} across ${n(F.collectionCount)} collections on the day the counts were read.`,
      },
      {
        q: "Where do the counts come from?",
        a: "From Fragment, Telegram's own marketplace, which shows the issued count on each collection's page.",
      },
    ],
  },

  limited: {
    title: () => "Telegram Limited Gifts List: Dates, Prices, Supply (CSV)",
    description: ({ F, n }) =>
      `${n(F.limitedCount)} Telegram limited and seasonal gifts with release date, Stars price and supply cap, from the public gift log. Download as CSV or JSON.`,
    h1: "Telegram limited and seasonal gifts",
    lead: ({ F, n }) => `${n(F.limitedCount)} limited gifts, newest first, with the date each was released and how many were made.`,
    keywords: ["Telegram limited gifts", "Telegram seasonal gifts", "gift supply", "Telegram Stars", "CSV"],
    answer: ({ F, n, date }) =>
      `Telegram has released <strong>${n(F.limitedCount)} limited and seasonal gifts</strong>; ${n(F.cappedCount)} of them had a supply cap. The smallest cap was ${F.smallestCapped.name} (${n(F.smallestCapped.supply)}). The latest release in this dataset is from ${date(F.lastRelease)}.`,
    tableHeading: "Every limited gift, newest first",
    tableIntro: () =>
      "Stars is the price at release (or the minimum bid for an auction). A dash under supply means the log gave no cap, usually a seasonal gift.",
    caption: (d) => `Limited Telegram gifts, read ${d}`,
    beforeLog: "before 24 Oct 2024",
    premiumOnly: "Premium only",
    auction: "auction",
    sourceNote:
      "Source: the public log @GiftChanges (t.me/GiftChanges). Gift names are Telegram's own and stay in English in every language.",
    cols: { name: "Gift", released: "Released", stars: "Stars", supply: "Supply", notes: "Notes" },
    faq: ({ F, n }) => [
      {
        q: "What is a limited Telegram gift?",
        a: "A gift Telegram sells for a short time or in a fixed number. Once sold out it can only be bought from another user, and most can be upgraded into a collectible.",
      },
      {
        q: "Which limited gift had the smallest supply?",
        a: `${F.smallestCapped.name}, with ${n(F.smallestCapped.supply)} made.`,
      },
      {
        q: "Why do some gifts have no release date?",
        a: "The public log began on 24 October 2024. Gifts on sale before that day are listed without a date.",
      },
    ],
  },
};
