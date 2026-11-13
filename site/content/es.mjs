// Texto en español del sitio de datos. Misma forma que en.mjs.

export default {
  siteName: "Dataset de regalos y Estrellas de Telegram",
  short: "Dataset",
  licence: (cc) => `Datos con licencia ${cc}: libres de reutilizar, citando a Gift Club y enlazando esta página.`,

  ui: {
    navLabel: "Secciones del dataset",
    langsLabel: "Idiomas",
    footerBy: (brand) => `Un dataset abierto de ${brand}, la Mini App de Telegram con cajas de regalos y juegos.`,
    moreLabel: "Más de Gift Club",
    sourceOnGithub: "Código en GitHub",
    sisters: { dataset: "Datos de Telegram", calculator: "Calculadora de Estrellas", verifier: "Provably fair" },
    updated: "Datos actualizados",
    faqHeading: "Preguntas",
    relatedHeading: "Sigue leyendo en Gift Club",
    downloadHeading: "Descargar",
    downloadNote: "El CSV es UTF-8 con fila de encabezado. El JSON es un array con las mismas filas.",
  },

  nav: {
    home: "Resumen",
    stars: "Precios de Estrellas",
    premium: "Precios de Premium",
    collections: "Colecciones de regalos",
    limited: "Regalos limitados",
  },

  home: {
    title: () => "Dataset de regalos y Estrellas de Telegram: precios (CSV, JSON)",
    description: ({ F, n }) =>
      `Dataset abierto con precios de Estrellas y Premium de Telegram por país, ${n(F.collectionCount)} colecciones de regalos coleccionables con su emisión y ${n(F.limitedCount)} regalos limitados. CSV y JSON, CC BY 4.0.`,
    h1: "Dataset de regalos y Estrellas de Telegram",
    lead: () =>
      "Cifras con fecha y fuente sobre las Estrellas, Telegram Premium y los regalos de Telegram, en CSV y JSON para descargar, graficar o citar.",
    keywords: ["Estrellas de Telegram", "Telegram Premium", "regalos de Telegram", "Fragment", "App Store", "dataset", "CSV", "JSON"],
    answer: ({ F, n, money, region }) =>
      `En Fragment una Estrella de Telegram cuesta <strong>${money(F.fragmentUsd, "USD")}</strong> (${n(1000)} Estrellas = ${money(F.fragmentUsd * 1000, "USD")}); en la App Store de EE. UU. ${n(1000)} Estrellas cuestan ${money(F.us1000, "USD")}. ` +
      `Telegram Premium es más barato en: ${region(F.premiumCheapest.store)} (${F.premiumCheapest.monthly_as_printed} al mes), entre los ${n(F.premiumStores)} países de la App Store leídos. ` +
      `${n(F.collectionCount)} colecciones de regalos coleccionables reúnen ${n(F.totalIssued)} piezas; la más rara, ${F.rarest.name}, tiene ${n(F.rarest.issued)}.`,
    insideHeading: "Qué incluye",
    cards: {
      stars: ({ F, n }) => `${n(F.starsRows)} precios de paquetes de la App Store en ${n(F.storeCount)} países, más la tarifa fija de Fragment.`,
      premium: ({ F, n }) => `Premium mensual y anual en ${n(F.premiumStores)} países de la App Store, y precios de regalos en USD, Gram y Estrellas.`,
      collections: ({ F, n }) => `Las ${n(F.collectionCount)} colecciones coleccionables por emisión y los ${n(F.regularCount)} regalos regulares.`,
      limited: ({ F, n }) => `${n(F.limitedCount)} regalos limitados y de temporada con fecha de lanzamiento, precio en Estrellas y tope de emisión.`,
    },
    downloadHeading: "Descargar los archivos",
    downloadIntro: () =>
      "Cada tabla de este sitio es un archivo de la carpeta <code>data/</code> del repositorio. Los enlaces de abajo siempre sirven la última versión.",
    methodHeading: "Cómo se recogen los datos",
    method: () => `<ul>
<li><strong>Los precios se leen, no se convierten.</strong> Cada precio de la App Store es la cifra que Apple muestra en la ficha de Telegram de ese país, en la moneda de ese país, en la fecha de la columna <code>checked</code>.</li>
<li>Los precios de <strong>Fragment</strong> (el marketplace de Telegram) salen de fragment.com en dólares estadounidenses.</li>
<li>Las <strong>emisiones</strong> de regalos coleccionables salen de las páginas de regalos de Fragment. Son lecturas: el número de una colección aún puede crecer.</li>
<li>Los <strong>regalos limitados</strong> salen del registro público @GiftChanges, que empezó el 24 de octubre de 2024. Los regalos vendidos antes no tienen fecha de lanzamiento.</li>
<li>Las estimaciones en dólares (<code>*_usd_estimate</code>) usan los tipos de cambio de bancos centrales de <code>fx-rates.json</code>, nunca un tipo en vivo.</li>
</ul>`,
    citeHeading: "Cómo citar",
    citeIntro: "Cita a Gift Club y enlaza esta página. Una cita sencilla:",
    citeLink: (brand) => `¿Escribes sobre precios de Telegram? Estas cifras también alimentan las guías de ${brand}.`,
    faq: ({ F, n, money }) => [
      {
        q: "¿Es un dataset oficial de Telegram?",
        a: "No. Gift Club lee las fuentes públicas de Telegram (la App Store, Fragment, la Bot API y el registro público de regalos) y anota cada cifra con su fecha y enlace a la fuente. Telegram no publica una lista así.",
      },
      {
        q: "¿Puedo usar los datos en un artículo, una app o una investigación?",
        a: "Sí. Los datos son CC BY 4.0: reutilízalos donde quieras, también con fines comerciales, siempre que cites a Gift Club y enlaces este dataset.",
      },
      {
        q: "¿Cuántos dólares cuesta una Estrella de Telegram?",
        a: `${money(F.fragmentUsd, "USD")} en Fragment en cualquier cantidad desde ${n(F.fragmentMin)} Estrellas, y unos ${money(F.us100 / 100, "USD")} en un paquete de ${n(100)} Estrellas de la App Store de EE. UU. Una Estrella ganada por un canal se retira a ${money(F.earnedUsd, "USD")}.`,
      },
      {
        q: "¿Cada cuánto se actualiza?",
        a: "Cada tabla lleva la fecha en que se leyó. Cuando cambia un precio o una cifra, la fila se vuelve a leer en su fuente y la fecha se mueve con ella.",
      },
    ],
  },

  stars: {
    title: () => "Precio de las Estrellas de Telegram por país: App Store (CSV)",
    description: ({ F, n, money }) =>
      `Precios de paquetes de Estrellas de Telegram en ${n(F.storeCount)} países de la App Store en moneda local, junto a la tarifa fija de ${money(F.fragmentUsd, "USD")} por Estrella de Fragment. Descarga en CSV o JSON.`,
    h1: "Precios de las Estrellas de Telegram por país",
    lead: ({ F, n }) => `${n(F.starsRows)} precios de paquetes, leídos de la ficha de Telegram en la App Store de cada país, junto a la tarifa de Fragment.`,
    keywords: ["precio Estrellas de Telegram", "Estrellas de Telegram por país", "Fragment", "App Store", "CSV"],
    answer: ({ F, n, money }) =>
      `${n(1000)} Estrellas de Telegram cuestan <strong>${money(F.fragmentUsd * 1000, "USD")}</strong> en Fragment y <strong>${money(F.us1000, "USD")}</strong> en la App Store de EE. UU. Fragment cobra una tarifa fija de ${money(F.fragmentUsd, "USD")} por Estrella; los paquetes de la App Store llevan la comisión de la tienda.`,
    usHeading: "Estados Unidos: App Store frente a Fragment",
    usCaption: (d) => `Paquetes de la App Store de EE. UU. y la misma cantidad en Fragment, leídos el ${d}`,
    fragmentHeading: "La tarifa fija de Fragment",
    fragmentText: ({ F, n, money }) =>
      `Fragment vende cualquier cantidad desde ${n(F.fragmentMin)} Estrellas a ${money(F.fragmentUsd, "USD")} cada una, pagadas en Gram (TON) o con una stablecoin. La App Store vende solo paquetes fijos y suma la comisión de la tienda, así que las mismas Estrellas cuestan más allí. Una Estrella ganada por un canal o un bot se retira a ${money(F.earnedUsd, "USD")}; las Estrellas compradas no se retiran.`,
    byCountryHeading: "Precios de la App Store en cada país",
    byCountryIntro: () =>
      "Apple solo lista los diez artículos más comprados de cada país, así que un paquete que falta en una tabla no estaba entre los diez de ese país. La columna de Fragment va en dólares estadounidenses en todos los casos.",
    caption: (country, d) => `${country}, App Store, leído el ${d}`,
    cols: { stars: "Estrellas", price: "Precio en la App Store", perStar: "Por Estrella", fragment: "Fragment (USD)", appStoreUs: "App Store (EE. UU.)", saving: "Ahorro en Fragment" },
    faq: ({ F, money }) => [
      {
        q: "¿Dónde son más baratas las Estrellas de Telegram?",
        a: `En Fragment, a ${money(F.fragmentUsd, "USD")} la Estrella en cualquier país. Entre los países de la App Store, compara la columna «Por Estrella»: cambia mucho de una moneda a otra.`,
      },
      {
        q: "¿Por qué los precios de la App Store y Google Play difieren de Fragment?",
        a: "Las tiendas de apps cobran una comisión y venden paquetes fijos; Fragment es el marketplace de Telegram y cobra la misma tarifa por cualquier cantidad. Google Play no publica lista de precios, así que este dataset no la incluye.",
      },
      {
        q: "¿Estos precios están convertidos con un tipo de cambio?",
        a: "No. Cada precio de la App Store es la cifra de la propia tienda en su moneda. Solo la columna de Fragment está en dólares.",
      },
    ],
  },

  premium: {
    title: () => "Precio de Telegram Premium por país: datos App Store (CSV)",
    description: ({ F, n }) =>
      `Precios mensuales y anuales de Telegram Premium en ${n(F.premiumStores)} países de la App Store, más precios de regalo en Fragment y en Estrellas. CSV y JSON, con fecha y fuente.`,
    h1: "Precios de Telegram Premium por país",
    lead: ({ F, n }) => `Cuánto cuesta Telegram Premium en ${n(F.premiumStores)} países de la App Store, del más barato al más caro.`,
    keywords: ["precio Telegram Premium", "Telegram Premium por país", "App Store", "Fragment", "CSV"],
    answer: ({ F, n, money, region }) =>
      `Telegram Premium cuesta <strong>${money(F.premiumUs, "USD")} al mes</strong> en la App Store de EE. UU. El más barato: ${region(F.premiumCheapest.store)}, ${F.premiumCheapest.monthly_as_printed} (unos ${money(F.premiumCheapest.monthly_usd_estimate, "USD")}). El más caro: ${region(F.premiumDearest.store)}, ${F.premiumDearest.monthly_as_printed}. Como regalo, 12 meses cuestan ${money(F.gift12.fragment_usd, "USD")} en Fragment o ${n(F.gift12.telegram_stars)} Estrellas.`,
    tableHeading: "Precio mensual y anual en cada país",
    tableIntro: () =>
      "Precios tal como Apple los muestra en cada país. La columna en dólares es una estimación al tipo de cambio del banco central del día de la lectura; un guion indica que el plan no estaba entre los diez artículos listados de ese país.",
    caption: (d) => `Telegram Premium en la App Store, del más barato al más caro, leído el ${d}`,
    giftHeading: "Regalar Premium: Fragment y Estrellas",
    giftIntro: () =>
      "Premium se puede comprar como regalo en Fragment o enviar con Estrellas dentro de Telegram. Los precios en Estrellas los fija la Bot API de Telegram.",
    giftCaption: (d) => `Precios de Premium como regalo, leídos el ${d}`,
    cols: { country: "País", monthly: "Mensual", annual: "Anual", prepaid: "3 meses (regalo)", usd: "Mensual en USD", months: "Meses", fragmentUsd: "Fragment (USD)", fragmentGram: "Fragment (Gram)", stars: "Estrellas" },
    faq: ({ F, n, money, region }) => [
      {
        q: "¿En qué país es más barato Telegram Premium?",
        a: `Entre los países de este dataset: ${region(F.premiumCheapest.store)}, a ${F.premiumCheapest.monthly_as_printed} al mes (unos ${money(F.premiumCheapest.monthly_usd_estimate, "USD")}).`,
      },
      {
        q: "¿Cuántas Estrellas cuesta un regalo de Premium?",
        a: `${n(F.gift3.telegram_stars)} Estrellas por 3 meses y ${n(F.gift12.telegram_stars)} por 12 meses, fijadas por Telegram.`,
      },
      {
        q: "¿Por qué no hay columna de Google Play?",
        a: "Google Play muestra los precios solo dentro de la app, en un dispositivo con sesión iniciada, así que no hay una página pública que leer y citar.",
      },
    ],
  },

  collections: {
    title: () => "Colecciones de regalos de Telegram: emisión de cada NFT (CSV)",
    description: ({ F, n }) =>
      `Las ${n(F.collectionCount)} colecciones de regalos coleccionables de Telegram ordenadas por emisión, ${n(F.totalIssued)} piezas en total, y los ${n(F.regularCount)} regalos regulares con ID y precio en Estrellas.`,
    h1: "Colecciones de regalos de Telegram por emisión",
    lead: ({ F, n }) => `Todas las colecciones de regalos coleccionables (mejorados) de Fragment, de menor a mayor emisión: ${n(F.collectionCount)} colecciones.`,
    keywords: ["regalos NFT de Telegram", "regalos coleccionables de Telegram", "emisión de regalos", "Fragment", "CSV"],
    answer: ({ F, n }) =>
      `La colección de regalos más rara de Telegram es <strong>${F.rarest.name}</strong>, con ${n(F.rarest.issued)} piezas emitidas. Las ${n(F.collectionCount)} colecciones juntas reúnen ${n(F.totalIssued)} regalos coleccionables.`,
    tableHeading: "Todas las colecciones, de menor a mayor emisión",
    tableIntro: () =>
      "La emisión es el número de piezas que existen en una colección el día de la lectura. Puede seguir subiendo, así que trátala como una lectura, no como un tope.",
    caption: (d) => `Colecciones de regalos coleccionables en Fragment, leídas el ${d}`,
    regularHeading: "Regalos regulares y sus ID",
    regularIntro: ({ F, n }) =>
      `Los ${n(F.regularCount)} regalos regulares que un bot puede enviar con <code>sendGift</code> de la Bot API, desde ${n(F.regularMin)} hasta ${n(F.regularMax)} Estrellas.`,
    regularCaption: "Regalos regulares de Telegram",
    cols: { rank: "N.º", name: "Colección", issued: "Emisión", giftId: "ID del regalo", stars: "Estrellas" },
    faq: ({ F, n }) => [
      {
        q: "¿Cuál es el regalo más raro de Telegram?",
        a: `Por emisión, ${F.rarest.name} (${n(F.rarest.issued)} piezas). La rareza dentro de una colección también depende del modelo, el fondo y el símbolo que recibió el regalo al mejorarse.`,
      },
      {
        q: "¿Cuántos regalos NFT de Telegram existen?",
        a: `${n(F.totalIssued)} repartidos en ${n(F.collectionCount)} colecciones el día de la lectura.`,
      },
      {
        q: "¿De dónde salen las cifras?",
        a: "De Fragment, el marketplace de Telegram, que muestra la emisión en la página de cada colección.",
      },
    ],
  },

  limited: {
    title: () => "Regalos limitados de Telegram: fechas, precios, emisión (CSV)",
    description: ({ F, n }) =>
      `${n(F.limitedCount)} regalos limitados y de temporada de Telegram con fecha de lanzamiento, precio en Estrellas y tope de emisión, del registro público. Descarga en CSV o JSON.`,
    h1: "Regalos limitados y de temporada de Telegram",
    lead: ({ F, n }) => `${n(F.limitedCount)} regalos limitados, los más nuevos primero, con la fecha de lanzamiento y cuántos se hicieron.`,
    keywords: ["regalos limitados de Telegram", "regalos de temporada de Telegram", "emisión de regalos", "Estrellas de Telegram", "CSV"],
    answer: ({ F, n, date }) =>
      `Telegram ha lanzado <strong>${n(F.limitedCount)} regalos limitados y de temporada</strong>; ${n(F.cappedCount)} tenían tope de emisión. El tope más bajo fue ${F.smallestCapped.name} (${n(F.smallestCapped.supply)}). El último lanzamiento de este dataset es del ${date(F.lastRelease)}.`,
    tableHeading: "Todos los regalos limitados, los más nuevos primero",
    tableIntro: () =>
      "Las Estrellas son el precio al lanzamiento (o la puja mínima en una subasta). Un guion en emisión indica que el registro no dio tope, normalmente un regalo de temporada.",
    caption: (d) => `Regalos limitados de Telegram, leídos el ${d}`,
    beforeLog: "antes del 24 oct 2024",
    premiumOnly: "Solo Premium",
    auction: "subasta",
    sourceNote:
      "Fuente: el registro público @GiftChanges (t.me/GiftChanges). Los nombres de los regalos son los de Telegram y se quedan en inglés en todos los idiomas.",
    cols: { name: "Regalo", released: "Lanzamiento", stars: "Estrellas", supply: "Emisión", notes: "Notas" },
    faq: ({ F, n }) => [
      {
        q: "¿Qué es un regalo limitado de Telegram?",
        a: "Un regalo que Telegram vende por poco tiempo o en cantidad fija. Una vez agotado, solo se puede comprar a otro usuario, y la mayoría se puede mejorar a coleccionable.",
      },
      {
        q: "¿Qué regalo limitado tuvo la menor emisión?",
        a: `${F.smallestCapped.name}, con ${n(F.smallestCapped.supply)} unidades.`,
      },
      {
        q: "¿Por qué algunos regalos no tienen fecha de lanzamiento?",
        a: "El registro público empezó el 24 de octubre de 2024. Los regalos a la venta antes de ese día aparecen sin fecha.",
      },
    ],
  },
};
