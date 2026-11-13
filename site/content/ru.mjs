// Русский текст сайта с данными. Форма та же, что в en.mjs.

export default {
  siteName: "Датасет подарков и звёзд Telegram",
  short: "Датасет",
  licence: (cc) => `Данные под лицензией ${cc}: можно свободно использовать, указав Gift Club и ссылку на эту страницу.`,

  ui: {
    navLabel: "Разделы датасета",
    langsLabel: "Языки",
    footerBy: (brand) => `Открытый датасет от ${brand}, мини-приложения Telegram с кейсами и играми.`,
    moreLabel: "Ещё от Gift Club",
    sourceOnGithub: "Исходники на GitHub",
    sisters: { dataset: "Данные Telegram", calculator: "Калькулятор звёзд", verifier: "Доказуемо честно" },
    updated: "Данные обновлены",
    faqHeading: "Вопросы",
    relatedHeading: "Читай дальше на Gift Club",
    downloadHeading: "Скачать",
    downloadNote: "CSV в кодировке UTF-8 со строкой заголовков. JSON: массив тех же строк.",
  },

  nav: {
    home: "Обзор",
    stars: "Цены на звёзды",
    premium: "Цены на Premium",
    collections: "Коллекции подарков",
    limited: "Лимитированные подарки",
  },

  home: {
    title: () => "Датасет подарков и звёзд Telegram: цены, тираж (CSV, JSON)",
    description: ({ F, n }) =>
      `Открытый датасет: цены на звёзды и Premium в Telegram по странам, ${n.of(F.collectionCount, { one: "коллекция", few: "коллекции", many: "коллекций" })} подарков с тиражом и ${n.of(F.limitedCount, { one: "лимитированный подарок", few: "лимитированных подарка", many: "лимитированных подарков" })}. CSV и JSON, CC BY 4.0.`,
    h1: "Датасет подарков и звёзд Telegram",
    lead: () =>
      "Цифры о звёздах, Telegram Premium и подарках Telegram с датой и источником, в CSV и JSON: можно скачать, построить график или сослаться.",
    keywords: ["Telegram Stars", "Telegram Premium", "подарки Telegram", "Fragment", "App Store", "датасет", "CSV", "JSON"],
    answer: ({ F, n, money, region }) =>
      `На Fragment одна звезда Telegram стоит <strong>${money(F.fragmentUsd, "USD")}</strong> (${n(1000)} звёзд = ${money(F.fragmentUsd * 1000, "USD")}), а в американском App Store ${n(1000)} звёзд стоят ${money(F.us1000, "USD")}. ` +
      `Telegram Premium дешевле всего в стране: ${region(F.premiumCheapest.store)}, ${F.premiumCheapest.monthly_as_printed} в месяц (из ${n(F.premiumStores)} стран App Store в выборке). ` +
      `В ${n(F.collectionCount)} коллекциях коллекционных подарков ${n.of(F.totalIssued, { one: "штука", few: "штуки", many: "штук" })}; самая редкая, ${F.rarest.name}, выпущена тиражом ${n(F.rarest.issued)}.`,
    insideHeading: "Что внутри",
    cards: {
      stars: ({ F, n }) => `${n.of(F.starsRows, { one: "цена", few: "цены", many: "цен" })} на пакеты звёзд в App Store в ${n(F.storeCount)} странах и фиксированный курс Fragment.`,
      premium: ({ F, n }) => `Месячная и годовая цена Premium в ${n(F.premiumStores)} странах App Store и цены подарков в долларах, Gram и звёздах.`,
      collections: ({ F, n }) => `Все ${n.of(F.collectionCount, { one: "коллекция", few: "коллекции", many: "коллекций" })} коллекционных подарков по тиражу и ${n.of(F.regularCount, { one: "обычный подарок", few: "обычных подарка", many: "обычных подарков" })}.`,
      limited: ({ F, n }) => `${n.of(F.limitedCount, { one: "лимитированный или сезонный подарок", few: "лимитированных и сезонных подарка", many: "лимитированных и сезонных подарков" })}: дата выхода, цена в звёздах и ограничение тиража.`,
    },
    downloadHeading: "Скачать файлы",
    downloadIntro: () =>
      "Каждая таблица на сайте лежит файлом в папке <code>data/</code> репозитория. Ссылки ниже всегда ведут на свежий снимок.",
    methodHeading: "Как собираются данные",
    method: () => `<ul>
<li><strong>Цены читаются, а не пересчитываются.</strong> Каждая цена App Store: это сумма, которую Apple печатает на странице Telegram в этой стране, в валюте этой страны, на дату из колонки <code>checked</code>.</li>
<li>Цены <strong>Fragment</strong> (маркетплейса самого Telegram) берутся с fragment.com в долларах США.</li>
<li><strong>Тираж</strong> коллекционных подарков берётся со страниц подарков на Fragment. Это замеры: тираж коллекции может ещё расти.</li>
<li><strong>Лимитированные подарки</strong> берутся из открытого журнала @GiftChanges, который ведётся с 24 октября 2024 года. У подарков, проданных раньше, даты выхода нет.</li>
<li>Оценки в долларах (<code>*_usd_estimate</code>) считаются по курсам центральных банков из <code>fx-rates.json</code>, а не по текущему курсу.</li>
</ul>`,
    citeHeading: "Как цитировать",
    citeIntro: "Укажи Gift Club и дай ссылку на эту страницу. Простой вариант:",
    citeLink: (brand) => `Пишешь о ценах Telegram? Эти же цифры лежат в основе руководств на ${brand}.`,
    faq: ({ F, n, money }) => [
      {
        q: "Это официальный датасет Telegram?",
        a: "Нет. Gift Club читает открытые источники Telegram (App Store, Fragment, Bot API и публичный журнал подарков) и записывает каждую цифру с датой и ссылкой на источник. Сам Telegram такого списка не публикует.",
      },
      {
        q: "Можно использовать данные в статье, приложении или исследовании?",
        a: "Да. Данные под CC BY 4.0: используй где угодно, в том числе в коммерческих целях, если указываешь Gift Club и даёшь ссылку на этот датасет.",
      },
      {
        q: "Сколько стоит одна звезда Telegram в долларах?",
        a: `${money(F.fragmentUsd, "USD")} на Fragment при любом количестве от ${n(F.fragmentMin)} звёзд и около ${money(F.us100 / 100, "USD")} в пакете из ${n(100)} звёзд в американском App Store. Звезда, заработанная каналом, выводится по ${money(F.earnedUsd, "USD")}.`,
      },
      {
        q: "Как часто данные обновляются?",
        a: "У каждой таблицы указана дата замера. Когда меняется цена или тираж, строка перечитывается из источника, и дата сдвигается вместе с ней.",
      },
    ],
  },

  stars: {
    title: () => "Цены на звёзды Telegram по странам: App Store, Fragment (CSV)",
    description: ({ F, n, money }) =>
      `Цены на пакеты звёзд Telegram в ${n(F.storeCount)} странах App Store в местной валюте и фиксированные ${money(F.fragmentUsd, "USD")} за звезду на Fragment. Скачать в CSV или JSON.`,
    h1: "Цены на звёзды Telegram по странам",
    lead: ({ F, n }) => `${n.of(F.starsRows, { one: "цена", few: "цены", many: "цен" })} на пакеты со страницы Telegram в App Store каждой страны, рядом с курсом Fragment.`,
    keywords: ["цена звёзд Telegram", "звёзды Telegram по странам", "Fragment", "App Store", "CSV"],
    answer: ({ F, n, money }) =>
      `${n(1000)} звёзд Telegram стоят <strong>${money(F.fragmentUsd * 1000, "USD")}</strong> на Fragment и <strong>${money(F.us1000, "USD")}</strong> в американском App Store. Fragment берёт фиксированные ${money(F.fragmentUsd, "USD")} за звезду, а в пакетах App Store уже заложена комиссия магазина.`,
    usHeading: "США: App Store и Fragment",
    usCaption: (d) => `Пакеты в американском App Store и то же количество на Fragment, замер: ${d}`,
    fragmentHeading: "Фиксированный курс Fragment",
    fragmentText: ({ F, n, money }) =>
      `Fragment продаёт любое количество от ${n(F.fragmentMin)} звёзд по ${money(F.fragmentUsd, "USD")} за звезду, оплата в Gram (TON) или стейблкоине. App Store продаёт только готовые пакеты и добавляет комиссию магазина, поэтому те же звёзды там дороже. Звезда, заработанная каналом или ботом, выводится по ${money(F.earnedUsd, "USD")}, а купленные звёзды не выводятся.`,
    byCountryHeading: "Цены App Store в каждой стране",
    byCountryIntro: () =>
      "Apple показывает только десять самых покупаемых позиций в каждой стране, поэтому пакета, которого нет в таблице, не было в десятке этой страны. Колонка Fragment везде в долларах США.",
    caption: (country, d) => `${country}, App Store, замер: ${d}`,
    cols: { stars: "Звёзды", price: "Цена в App Store", perStar: "За звезду", fragment: "Fragment (USD)", appStoreUs: "App Store (США)", saving: "Экономия на Fragment" },
    faq: ({ F, money }) => [
      {
        q: "Где звёзды Telegram дешевле всего?",
        a: `На Fragment: ${money(F.fragmentUsd, "USD")} за звезду в любой стране. Среди стран App Store смотри колонку «За звезду»: между валютами она сильно различается.`,
      },
      {
        q: "Почему цены в App Store и Google Play отличаются от Fragment?",
        a: "Магазины приложений берут комиссию и продают готовые пакеты, а Fragment, маркетплейс самого Telegram, берёт один курс при любом количестве. Google Play не публикует прайс-лист, поэтому его в датасете нет.",
      },
      {
        q: "Цены пересчитаны по курсу валют?",
        a: "Нет. Каждая цена App Store: это цифра самого магазина в его валюте. В долларах только колонка Fragment.",
      },
    ],
  },

  premium: {
    title: () => "Цена Telegram Premium по странам: данные App Store (CSV)",
    description: ({ F, n }) =>
      `Месячная и годовая цена Telegram Premium в ${n(F.premiumStores)} странах App Store, а также цены подарков на Fragment и в звёздах. CSV и JSON, с датой и источником.`,
    h1: "Цены на Telegram Premium по странам",
    lead: ({ F, n }) => `Сколько стоит Telegram Premium в ${n(F.premiumStores)} странах App Store, от дешёвых к дорогим.`,
    keywords: ["цена Telegram Premium", "Telegram Premium по странам", "App Store", "Fragment", "CSV"],
    answer: ({ F, n, money, region }) =>
      `Telegram Premium стоит <strong>${money(F.premiumUs, "USD")} в месяц</strong> в американском App Store. Дешевле всего: ${region(F.premiumCheapest.store)}, ${F.premiumCheapest.monthly_as_printed} (около ${money(F.premiumCheapest.monthly_usd_estimate, "USD")}). Дороже всего: ${region(F.premiumDearest.store)}, ${F.premiumDearest.monthly_as_printed}. В подарок 12 месяцев стоят ${money(F.gift12.fragment_usd, "USD")} на Fragment или ${n(F.gift12.telegram_stars)} звёзд.`,
    tableHeading: "Месячная и годовая цена в каждой стране",
    tableIntro: () =>
      "Цены в том виде, как их печатает Apple в каждой стране. Колонка в долларах: оценка по курсу центрального банка на день замера; прочерк значит, что тарифа не было среди десяти позиций этой страны.",
    caption: (d) => `Telegram Premium в App Store, от дешёвых к дорогим, замер: ${d}`,
    giftHeading: "Premium в подарок: Fragment и звёзды",
    giftIntro: () =>
      "Premium можно купить в подарок на Fragment или отправить за звёзды внутри Telegram. Цены в звёздах задаёт Bot API Telegram.",
    giftCaption: (d) => `Цены подарочного Premium, замер: ${d}`,
    cols: { country: "Страна", monthly: "В месяц", annual: "В год", prepaid: "3 месяца (подарок)", usd: "В месяц в USD", months: "Месяцев", fragmentUsd: "Fragment (USD)", fragmentGram: "Fragment (Gram)", stars: "Звёзды" },
    faq: ({ F, n, money, region }) => [
      {
        q: "В какой стране Telegram Premium дешевле всего?",
        a: `Среди стран датасета: ${region(F.premiumCheapest.store)}, ${F.premiumCheapest.monthly_as_printed} в месяц (около ${money(F.premiumCheapest.monthly_usd_estimate, "USD")}).`,
      },
      {
        q: "Сколько звёзд стоит подарочный Premium?",
        a: `${n(F.gift3.telegram_stars)} звёзд за 3 месяца и ${n(F.gift12.telegram_stars)} за 12 месяцев, цены задаёт Telegram.`,
      },
      {
        q: "Почему нет колонки Google Play?",
        a: "Google Play показывает цены только внутри приложения, на устройстве с выполненным входом, поэтому публичной страницы, которую можно прочитать и процитировать, нет.",
      },
    ],
  },

  collections: {
    title: () => "Коллекции подарков Telegram: тираж каждого NFT-подарка (CSV)",
    description: ({ F, n }) =>
      `Все ${n.of(F.collectionCount, { one: "коллекция", few: "коллекции", many: "коллекций" })} коллекционных подарков Telegram по тиражу, всего ${n.of(F.totalIssued, { one: "штука", few: "штуки", many: "штук" })}, и ${n.of(F.regularCount, { one: "обычный подарок", few: "обычных подарка", many: "обычных подарков" })} с ID и ценами в звёздах.`,
    h1: "Коллекции подарков Telegram по тиражу",
    lead: ({ F, n }) => `Все коллекции коллекционных (улучшенных) подарков на Fragment, от самого малого тиража: ${n.of(F.collectionCount, { one: "коллекция", few: "коллекции", many: "коллекций" })}.`,
    keywords: ["NFT-подарки Telegram", "коллекционные подарки Telegram", "тираж подарков", "Fragment", "CSV"],
    answer: ({ F, n }) =>
      `Самая редкая коллекция подарков Telegram: <strong>${F.rarest.name}</strong>, выпущено ${n.of(F.rarest.issued, { one: "штука", few: "штуки", many: "штук" })}. Во всех ${n(F.collectionCount)} коллекциях вместе ${n.of(F.totalIssued, { one: "коллекционный подарок", few: "коллекционных подарка", many: "коллекционных подарков" })}.`,
    tableHeading: "Все коллекции, от самого малого тиража",
    tableIntro: () =>
      "Тираж: сколько предметов существует в коллекции на день замера. Он ещё может расти, поэтому считай его замером, а не пределом.",
    caption: (d) => `Коллекции коллекционных подарков на Fragment, замер: ${d}`,
    regularHeading: "Обычные подарки и их ID",
    regularIntro: ({ F, n }) =>
      `${n.of(F.regularCount, { one: "обычный подарок", few: "обычных подарка", many: "обычных подарков" })}, которые бот может отправить методом <code>sendGift</code> из Bot API, ценой от ${n(F.regularMin)} до ${n(F.regularMax)} звёзд.`,
    regularCaption: "Обычные подарки Telegram",
    cols: { rank: "№", name: "Коллекция", issued: "Тираж", giftId: "ID подарка", stars: "Звёзды" },
    faq: ({ F, n }) => [
      {
        q: "Какой подарок Telegram самый редкий?",
        a: `По тиражу: ${F.rarest.name} (${n.of(F.rarest.issued, { one: "штука", few: "штуки", many: "штук" })}). Редкость внутри коллекции зависит ещё от модели, фона и узора, которые достались подарку при улучшении.`,
      },
      {
        q: "Сколько всего NFT-подарков Telegram?",
        a: `${n(F.totalIssued)} в ${n(F.collectionCount)} коллекциях на день замера.`,
      },
      {
        q: "Откуда взяты тиражи?",
        a: "С Fragment, маркетплейса самого Telegram: на странице каждой коллекции указан выпущенный тираж.",
      },
    ],
  },

  limited: {
    title: () => "Лимитированные подарки Telegram: даты, цены, тираж (CSV)",
    description: ({ F, n }) =>
      `${n.of(F.limitedCount, { one: "лимитированный или сезонный подарок", few: "лимитированных и сезонных подарка", many: "лимитированных и сезонных подарков" })} Telegram: дата выхода, цена в звёздах и ограничение тиража из открытого журнала. Скачать в CSV или JSON.`,
    h1: "Лимитированные и сезонные подарки Telegram",
    lead: ({ F, n }) => `${n.of(F.limitedCount, { one: "лимитированный подарок", few: "лимитированных подарка", many: "лимитированных подарков" })}, сначала новые: дата выхода и сколько штук выпущено.`,
    keywords: ["лимитированные подарки Telegram", "сезонные подарки Telegram", "тираж подарков", "звёзды Telegram", "CSV"],
    answer: ({ F, n, date }) =>
      `Telegram выпустил <strong>${n.of(F.limitedCount, { one: "лимитированный или сезонный подарок", few: "лимитированных и сезонных подарка", many: "лимитированных и сезонных подарков" })}</strong>, у ${n(F.cappedCount)} из них было ограничение тиража. Самый малый тираж у подарка ${F.smallestCapped.name} (${n(F.smallestCapped.supply)}). Последний выход в датасете: ${date(F.lastRelease)}.`,
    tableHeading: "Все лимитированные подарки, сначала новые",
    tableIntro: () =>
      "Звёзды: цена на момент выхода (или минимальная ставка на аукционе). Прочерк в тираже значит, что журнал не указал ограничения, обычно это сезонный подарок.",
    caption: (d) => `Лимитированные подарки Telegram, замер: ${d}`,
    beforeLog: "до 24 окт. 2024",
    premiumOnly: "Только для Premium",
    auction: "аукцион",
    sourceNote:
      "Источник: открытый журнал @GiftChanges (t.me/GiftChanges). Названия подарков даны Telegram и остаются английскими на всех языках.",
    cols: { name: "Подарок", released: "Выход", stars: "Звёзды", supply: "Тираж", notes: "Примечания" },
    faq: ({ F, n }) => [
      {
        q: "Что такое лимитированный подарок Telegram?",
        a: "Подарок, который Telegram продаёт недолго или ограниченным тиражом. После распродажи его можно купить только у другого пользователя, а большинство можно улучшить до коллекционного.",
      },
      {
        q: "У какого лимитированного подарка самый малый тираж?",
        a: `У ${F.smallestCapped.name}: выпущено ${n(F.smallestCapped.supply)}.`,
      },
      {
        q: "Почему у некоторых подарков нет даты выхода?",
        a: "Открытый журнал ведётся с 24 октября 2024 года. Подарки, которые продавались раньше, указаны без даты.",
      },
    ],
  },
};
