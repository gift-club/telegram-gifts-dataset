// Texte français du site de données. Même structure que en.mjs.

export default {
  siteName: "Jeu de données des cadeaux et Étoiles Telegram",
  short: "Dataset",
  licence: (cc) => `Données sous licence ${cc} : libres de réutilisation, en citant Gift Club et en liant cette page.`,

  ui: {
    navLabel: "Rubriques du dataset",
    langsLabel: "Langues",
    footerBy: (brand) => `Un dataset ouvert de ${brand}, la Mini App Telegram avec coffres à cadeaux et jeux.`,
    moreLabel: "Plus de Gift Club",
    sourceOnGithub: "Source sur GitHub",
    sisters: { dataset: "Données Telegram", calculator: "Calculateur d'Étoiles", verifier: "Provably fair" },
    updated: "Données mises à jour",
    faqHeading: "Questions",
    relatedHeading: "À lire ensuite sur Gift Club",
    downloadHeading: "Télécharger",
    downloadNote: "Le CSV est en UTF-8 avec une ligne d'en-tête. Le JSON est un tableau des mêmes lignes.",
  },

  nav: {
    home: "Aperçu",
    stars: "Prix des Étoiles",
    premium: "Prix de Premium",
    collections: "Collections de cadeaux",
    limited: "Cadeaux limités",
  },

  home: {
    title: () => "Dataset cadeaux et Étoiles Telegram : prix (CSV, JSON)",
    description: ({ F, n }) =>
      `Dataset ouvert : prix des Étoiles et de Premium Telegram par pays, ${n(F.collectionCount)} collections de cadeaux collector avec leur tirage et ${n(F.limitedCount)} cadeaux limités. CSV et JSON, CC BY 4.0.`,
    h1: "Jeu de données des cadeaux et Étoiles Telegram",
    lead: () =>
      "Des chiffres datés et sourcés sur les Étoiles, Telegram Premium et les cadeaux Telegram, en CSV et JSON à télécharger, à représenter en graphiques ou à citer.",
    keywords: ["Étoiles Telegram", "Telegram Premium", "cadeaux Telegram", "Fragment", "App Store", "dataset", "CSV", "JSON"],
    answer: ({ F, n, money, region }) =>
      `Sur Fragment, une Étoile Telegram coûte <strong>${money(F.fragmentUsd, "USD")}</strong> (${n(1000)} Étoiles = ${money(F.fragmentUsd * 1000, "USD")}) ; sur l'App Store américain, ${n(1000)} Étoiles coûtent ${money(F.us1000, "USD")}. ` +
      `Telegram Premium est le moins cher ici : ${region(F.premiumCheapest.store)} (${F.premiumCheapest.monthly_as_printed} par mois), parmi les ${n(F.premiumStores)} pays de l'App Store relevés. ` +
      `${n(F.collectionCount)} collections de cadeaux collector réunissent ${n(F.totalIssued)} pièces ; la plus rare, ${F.rarest.name}, en compte ${n(F.rarest.issued)}.`,
    insideHeading: "Ce que contient le dataset",
    cards: {
      stars: ({ F, n }) => `${n(F.starsRows)} prix de packs sur l'App Store dans ${n(F.storeCount)} pays, plus le tarif fixe de Fragment.`,
      premium: ({ F, n }) => `Premium au mois et à l'année dans ${n(F.premiumStores)} pays de l'App Store, et prix des cadeaux en USD, Gram et Étoiles.`,
      collections: ({ F, n }) => `Les ${n(F.collectionCount)} collections collector classées par tirage et les ${n(F.regularCount)} cadeaux classiques.`,
      limited: ({ F, n }) => `${n(F.limitedCount)} cadeaux limités et saisonniers avec date de sortie, prix en Étoiles et plafond de tirage.`,
    },
    downloadHeading: "Télécharger les fichiers",
    downloadIntro: () =>
      "Chaque tableau de ce site est un fichier du dossier <code>data/</code> du dépôt. Les liens ci-dessous servent toujours la dernière version.",
    methodHeading: "Comment les données sont collectées",
    method: () => `<ul>
<li><strong>Les prix sont relevés, pas convertis.</strong> Chaque prix de l'App Store est le chiffre qu'Apple affiche sur la fiche de Telegram dans ce pays, dans la devise de ce pays, à la date de la colonne <code>checked</code>.</li>
<li>Les prix de <strong>Fragment</strong> (la place de marché de Telegram) viennent de fragment.com, en dollars américains.</li>
<li>Les <strong>tirages</strong> des cadeaux collector viennent des pages de cadeaux de Fragment. Ce sont des relevés : le tirage d'une collection peut encore grimper.</li>
<li>Les <strong>cadeaux limités</strong> viennent du journal public @GiftChanges, ouvert le 24 octobre 2024. Les cadeaux vendus avant n'ont pas de date de sortie.</li>
<li>Les estimations en dollars (<code>*_usd_estimate</code>) utilisent les taux de banque centrale de <code>fx-rates.json</code>, jamais un taux en direct.</li>
</ul>`,
    citeHeading: "Comment citer",
    citeIntro: "Cite Gift Club et mets un lien vers cette page. Une citation simple :",
    citeLink: (brand) => `Tu écris sur les prix de Telegram ? Ces mêmes chiffres alimentent les guides de ${brand}.`,
    faq: ({ F, n, money }) => [
      {
        q: "S'agit-il d'un dataset officiel de Telegram ?",
        a: "Non. Gift Club lit les sources publiques de Telegram (l'App Store, Fragment, la Bot API et le journal public des cadeaux) et note chaque chiffre avec sa date et un lien vers la source. Telegram ne publie pas une telle liste.",
      },
      {
        q: "Puis-je utiliser les données dans un article, une appli ou une étude ?",
        a: "Oui. Les données sont sous CC BY 4.0 : réutilise-les partout, y compris commercialement, tant que tu cites Gift Club et que tu lies ce dataset.",
      },
      {
        q: "Combien vaut une Étoile Telegram en dollars ?",
        a: `${money(F.fragmentUsd, "USD")} sur Fragment pour toute quantité à partir de ${n(F.fragmentMin)} Étoiles, et environ ${money(F.us100 / 100, "USD")} dans un pack de ${n(100)} Étoiles sur l'App Store américain. Une Étoile gagnée par une chaîne est versée à ${money(F.earnedUsd, "USD")}.`,
      },
      {
        q: "À quelle fréquence est-il mis à jour ?",
        a: "Chaque tableau porte la date de son relevé. Quand un prix ou un chiffre change, la ligne est relue à sa source et la date avance avec elle.",
      },
    ],
  },

  stars: {
    title: () => "Prix des Étoiles Telegram par pays : App Store (CSV)",
    description: ({ F, n, money }) =>
      `Prix des packs d'Étoiles Telegram dans ${n(F.storeCount)} pays de l'App Store en devise locale, à côté du tarif fixe de ${money(F.fragmentUsd, "USD")} par Étoile sur Fragment. Téléchargement en CSV ou JSON.`,
    h1: "Prix des Étoiles Telegram par pays",
    lead: ({ F, n }) => `${n(F.starsRows)} prix de packs, relevés sur la fiche Telegram de l'App Store de chaque pays, à côté du tarif de Fragment.`,
    keywords: ["prix Étoiles Telegram", "Étoiles Telegram par pays", "Fragment", "App Store", "CSV"],
    answer: ({ F, n, money }) =>
      `${n(1000)} Étoiles Telegram coûtent <strong>${money(F.fragmentUsd * 1000, "USD")}</strong> sur Fragment et <strong>${money(F.us1000, "USD")}</strong> sur l'App Store américain. Fragment facture un tarif fixe de ${money(F.fragmentUsd, "USD")} par Étoile ; les packs de l'App Store incluent la commission du store.`,
    usHeading: "États-Unis : App Store et Fragment",
    usCaption: (d) => `Packs de l'App Store américain et même quantité sur Fragment, relevés le ${d}`,
    fragmentHeading: "Le tarif fixe de Fragment",
    fragmentText: ({ F, n, money }) =>
      `Fragment vend n'importe quelle quantité à partir de ${n(F.fragmentMin)} Étoiles à ${money(F.fragmentUsd, "USD")} l'Étoile, payables en Gram (TON) ou en stablecoin. L'App Store ne vend que des packs fixes et ajoute la commission du store, donc les mêmes Étoiles y coûtent plus cher. Une Étoile gagnée par une chaîne ou un bot se retire à ${money(F.earnedUsd, "USD")} ; les Étoiles achetées ne se retirent pas.`,
    byCountryHeading: "Prix de l'App Store dans chaque pays",
    byCountryIntro: () =>
      "Apple ne liste que les dix articles les plus achetés de chaque pays, donc un pack absent d'un tableau ne figurait pas parmi les dix de ce pays. La colonne Fragment est partout en dollars américains.",
    caption: (country, d) => `${country}, App Store, relevé le ${d}`,
    cols: { stars: "Étoiles", price: "Prix App Store", perStar: "Par Étoile", fragment: "Fragment (USD)", appStoreUs: "App Store (É.-U.)", saving: "Économie sur Fragment" },
    faq: ({ F, money }) => [
      {
        q: "Où les Étoiles Telegram sont-elles les moins chères ?",
        a: `Sur Fragment, à ${money(F.fragmentUsd, "USD")} l'Étoile dans tous les pays. Parmi les pays de l'App Store, compare la colonne « Par Étoile » : elle varie beaucoup d'une devise à l'autre.`,
      },
      {
        q: "Pourquoi les prix de l'App Store et de Google Play diffèrent-ils de Fragment ?",
        a: "Les stores d'applications prennent une commission et vendent des packs fixes ; Fragment est la place de marché de Telegram et applique le même tarif quelle que soit la quantité. Google Play ne publie pas de grille de prix, donc ce dataset n'en a pas.",
      },
      {
        q: "Ces prix sont-ils convertis avec un taux de change ?",
        a: "Non. Chaque prix de l'App Store est le chiffre du store dans sa propre devise. Seule la colonne Fragment est en dollars.",
      },
    ],
  },

  premium: {
    title: () => "Prix de Telegram Premium par pays : données App Store (CSV)",
    description: ({ F, n }) =>
      `Prix mensuels et annuels de Telegram Premium dans ${n(F.premiumStores)} pays de l'App Store, plus les prix des cadeaux sur Fragment et en Étoiles. CSV et JSON, datés et sourcés.`,
    h1: "Prix de Telegram Premium par pays",
    lead: ({ F, n }) => `Ce que coûte Telegram Premium dans ${n(F.premiumStores)} pays de l'App Store, du moins cher au plus cher.`,
    keywords: ["prix Telegram Premium", "Telegram Premium par pays", "App Store", "Fragment", "CSV"],
    answer: ({ F, n, money, region }) =>
      `Telegram Premium coûte <strong>${money(F.premiumUs, "USD")} par mois</strong> sur l'App Store américain. Le moins cher : ${region(F.premiumCheapest.store)}, ${F.premiumCheapest.monthly_as_printed} (environ ${money(F.premiumCheapest.monthly_usd_estimate, "USD")}). Le plus cher : ${region(F.premiumDearest.store)}, ${F.premiumDearest.monthly_as_printed}. En cadeau, 12 mois coûtent ${money(F.gift12.fragment_usd, "USD")} sur Fragment ou ${n(F.gift12.telegram_stars)} Étoiles.`,
    tableHeading: "Prix mensuel et annuel dans chaque pays",
    tableIntro: () =>
      "Prix tels qu'Apple les affiche dans chaque pays. La colonne en dollars est une estimation au taux de la banque centrale du jour du relevé ; un tiret signifie que l'offre ne figurait pas parmi les dix articles listés de ce pays.",
    caption: (d) => `Telegram Premium sur l'App Store, du moins cher au plus cher, relevé le ${d}`,
    giftHeading: "Offrir Premium : Fragment et Étoiles",
    giftIntro: () =>
      "Premium peut s'acheter en cadeau sur Fragment ou s'envoyer avec des Étoiles dans Telegram. Les prix en Étoiles sont fixés par la Bot API de Telegram.",
    giftCaption: (d) => `Prix de Premium en cadeau, relevés le ${d}`,
    cols: { country: "Pays", monthly: "Mensuel", annual: "Annuel", prepaid: "3 mois (cadeau)", usd: "Mensuel en USD", months: "Mois", fragmentUsd: "Fragment (USD)", fragmentGram: "Fragment (Gram)", stars: "Étoiles" },
    faq: ({ F, n, money, region }) => [
      {
        q: "Dans quel pays Telegram Premium est-il le moins cher ?",
        a: `Parmi les pays de ce dataset : ${region(F.premiumCheapest.store)}, à ${F.premiumCheapest.monthly_as_printed} par mois (environ ${money(F.premiumCheapest.monthly_usd_estimate, "USD")}).`,
      },
      {
        q: "Combien d'Étoiles coûte un cadeau Premium ?",
        a: `${n(F.gift3.telegram_stars)} Étoiles pour 3 mois et ${n(F.gift12.telegram_stars)} pour 12 mois, fixées par Telegram.`,
      },
      {
        q: "Pourquoi n'y a-t-il pas de colonne Google Play ?",
        a: "Google Play n'affiche les prix que dans l'appli, sur un appareil connecté : il n'existe donc aucune page publique à lire et à citer.",
      },
    ],
  },

  collections: {
    title: () => "Collections de cadeaux Telegram : tirage de chaque NFT (CSV)",
    description: ({ F, n }) =>
      `Les ${n(F.collectionCount)} collections de cadeaux collector de Telegram classées par tirage, ${n(F.totalIssued)} pièces au total, plus les ${n(F.regularCount)} cadeaux classiques avec ID et prix en Étoiles.`,
    h1: "Collections de cadeaux Telegram par tirage",
    lead: ({ F, n }) => `Toutes les collections de cadeaux collector (améliorés) sur Fragment, du plus petit tirage au plus grand : ${n(F.collectionCount)} collections.`,
    keywords: ["cadeaux NFT Telegram", "cadeaux collector Telegram", "tirage des cadeaux", "Fragment", "CSV"],
    answer: ({ F, n }) =>
      `La collection de cadeaux Telegram la plus rare est <strong>${F.rarest.name}</strong>, avec ${n(F.rarest.issued)} pièces émises. Les ${n(F.collectionCount)} collections réunies comptent ${n(F.totalIssued)} cadeaux collector.`,
    tableHeading: "Toutes les collections, du plus petit tirage au plus grand",
    tableIntro: () =>
      "Le tirage est le nombre de pièces qui existent dans une collection le jour du relevé. Il peut encore monter : vois-le comme un relevé, pas comme un plafond.",
    caption: (d) => `Collections de cadeaux collector sur Fragment, relevées le ${d}`,
    regularHeading: "Cadeaux classiques et leurs ID",
    regularIntro: ({ F, n }) =>
      `Les ${n(F.regularCount)} cadeaux classiques qu'un bot peut envoyer avec <code>sendGift</code> de la Bot API, de ${n(F.regularMin)} à ${n(F.regularMax)} Étoiles.`,
    regularCaption: "Cadeaux classiques de Telegram",
    cols: { rank: "N°", name: "Collection", issued: "Tirage", giftId: "ID du cadeau", stars: "Étoiles" },
    faq: ({ F, n }) => [
      {
        q: "Quel est le cadeau Telegram le plus rare ?",
        a: `Par tirage, ${F.rarest.name} (${n(F.rarest.issued)} pièces). La rareté au sein d'une collection dépend aussi du modèle, du fond et du symbole reçus par le cadeau lors de son amélioration.`,
      },
      {
        q: "Combien de cadeaux NFT Telegram existe-t-il ?",
        a: `${n(F.totalIssued)} répartis en ${n(F.collectionCount)} collections le jour du relevé.`,
      },
      {
        q: "D'où viennent les chiffres ?",
        a: "De Fragment, la place de marché de Telegram, qui affiche le tirage sur la page de chaque collection.",
      },
    ],
  },

  limited: {
    title: () => "Cadeaux limités Telegram : dates, prix, tirage (CSV)",
    description: ({ F, n }) =>
      `${n(F.limitedCount)} cadeaux Telegram limités et saisonniers avec date de sortie, prix en Étoiles et plafond de tirage, issus du journal public. Téléchargement en CSV ou JSON.`,
    h1: "Cadeaux Telegram limités et saisonniers",
    lead: ({ F, n }) => `${n(F.limitedCount)} cadeaux limités, les plus récents d'abord, avec leur date de sortie et le nombre d'exemplaires produits.`,
    keywords: ["cadeaux limités Telegram", "cadeaux saisonniers Telegram", "tirage des cadeaux", "Étoiles Telegram", "CSV"],
    answer: ({ F, n, date }) =>
      `Telegram a sorti <strong>${n(F.limitedCount)} cadeaux limités et saisonniers</strong> ; ${n(F.cappedCount)} d'entre eux avaient un plafond de tirage. Le plus petit plafond était celui de ${F.smallestCapped.name} (${n(F.smallestCapped.supply)}). La dernière sortie de ce dataset date du ${date(F.lastRelease)}.`,
    tableHeading: "Chaque cadeau limité, les plus récents d'abord",
    tableIntro: () =>
      "Les Étoiles sont le prix à la sortie (ou la mise minimale d'une enchère). Un tiret dans la colonne tirage signifie que le journal n'indiquait aucun plafond, en général pour un cadeau saisonnier.",
    caption: (d) => `Cadeaux Telegram limités, relevés le ${d}`,
    beforeLog: "avant le 24 oct. 2024",
    premiumOnly: "Premium uniquement",
    auction: "enchère",
    sourceNote:
      "Source : le journal public @GiftChanges (t.me/GiftChanges). Les noms des cadeaux sont ceux de Telegram et restent en anglais dans toutes les langues.",
    cols: { name: "Cadeau", released: "Sortie", stars: "Étoiles", supply: "Tirage", notes: "Notes" },
    faq: ({ F, n }) => [
      {
        q: "Qu'est-ce qu'un cadeau limité Telegram ?",
        a: "Un cadeau que Telegram vend pendant une courte période ou en quantité fixe. Une fois épuisé, on ne peut l'acheter qu'auprès d'un autre utilisateur, et la plupart peuvent être améliorés en objet collector.",
      },
      {
        q: "Quel cadeau limité a eu le plus petit tirage ?",
        a: `${F.smallestCapped.name}, avec ${n(F.smallestCapped.supply)} exemplaires.`,
      },
      {
        q: "Pourquoi certains cadeaux n'ont-ils pas de date de sortie ?",
        a: "Le journal public a commencé le 24 octobre 2024. Les cadeaux déjà en vente avant ce jour sont listés sans date.",
      },
    ],
  },
};
