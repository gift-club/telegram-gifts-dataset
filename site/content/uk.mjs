// Український текст сайту з даними. Форма та сама, що в en.mjs.

export default {
  siteName: "Датасет подарунків і зірок Telegram",
  short: "Датасет",
  licence: (cc) => `Дані під ліцензією ${cc}: можна вільно використовувати, вказавши Gift Club і посилання на цю сторінку.`,

  ui: {
    navLabel: "Розділи датасету",
    langsLabel: "Мови",
    footerBy: (brand) => `Відкритий датасет від ${brand}, міні-застосунку Telegram з кейсами та іграми.`,
    moreLabel: "Ще від Gift Club",
    sourceOnGithub: "Вихідний код на GitHub",
    sisters: { dataset: "Дані Telegram", calculator: "Калькулятор зірок", verifier: "Доказово чесно" },
    updated: "Дані оновлено",
    faqHeading: "Запитання",
    relatedHeading: "Читай далі на Gift Club",
    downloadHeading: "Завантажити",
    downloadNote: "CSV у кодуванні UTF-8 з рядком заголовків. JSON: масив тих самих рядків.",
  },

  nav: {
    home: "Огляд",
    stars: "Ціни на зірки",
    premium: "Ціни на Premium",
    collections: "Колекції подарунків",
    limited: "Лімітовані подарунки",
  },

  home: {
    title: () => "Датасет подарунків і зірок Telegram: ціни, наклад (CSV, JSON)",
    description: ({ F, n }) =>
      `Відкритий датасет: ціни на зірки та Premium у Telegram за країнами, ${n.of(F.collectionCount, { one: "колекція", few: "колекції", many: "колекцій" })} подарунків із накладом і ${n.of(F.limitedCount, { one: "лімітований подарунок", few: "лімітовані подарунки", many: "лімітованих подарунків" })}. CSV і JSON, CC BY 4.0.`,
    h1: "Датасет подарунків і зірок Telegram",
    lead: () =>
      "Цифри про зірки, Telegram Premium і подарунки Telegram з датою та джерелом, у CSV і JSON: можна завантажити, збудувати графік або послатися.",
    keywords: ["Telegram Stars", "Telegram Premium", "подарунки Telegram", "Fragment", "App Store", "датасет", "CSV", "JSON"],
    answer: ({ F, n, money, region }) =>
      `На Fragment одна зірка Telegram коштує <strong>${money(F.fragmentUsd, "USD")}</strong> (${n(1000)} зірок = ${money(F.fragmentUsd * 1000, "USD")}), а в американському App Store ${n(1000)} зірок коштують ${money(F.us1000, "USD")}. ` +
      `Telegram Premium найдешевший у країні: ${region(F.premiumCheapest.store)}, ${F.premiumCheapest.monthly_as_printed} на місяць (із ${n(F.premiumStores)} країн App Store у вибірці). ` +
      `У ${n(F.collectionCount)} колекціях колекційних подарунків ${n(F.totalIssued)} штук; найрідкісніша, ${F.rarest.name}, випущена накладом ${n(F.rarest.issued)}.`,
    insideHeading: "Що всередині",
    cards: {
      stars: ({ F, n }) => `${n.of(F.starsRows, { one: "ціна", few: "ціни", many: "цін" })} на пакети зірок в App Store у ${n(F.storeCount)} країнах і фіксований курс Fragment.`,
      premium: ({ F, n }) => `Місячна й річна ціна Premium у ${n(F.premiumStores)} країнах App Store та ціни подарунків у доларах, Gram і зірках.`,
      collections: ({ F, n }) => `Усі ${n.of(F.collectionCount, { one: "колекція", few: "колекції", many: "колекцій" })} колекційних подарунків за накладом і ${n.of(F.regularCount, { one: "звичайний подарунок", few: "звичайні подарунки", many: "звичайних подарунків" })}.`,
      limited: ({ F, n }) => `${n.of(F.limitedCount, { one: "лімітований чи сезонний подарунок", few: "лімітовані й сезонні подарунки", many: "лімітованих і сезонних подарунків" })}: дата виходу, ціна в зірках і обмеження накладу.`,
    },
    downloadHeading: "Завантажити файли",
    downloadIntro: () =>
      "Кожна таблиця на сайті лежить файлом у теці <code>data/</code> репозиторію. Посилання нижче завжди ведуть на свіжий знімок.",
    methodHeading: "Як збираються дані",
    method: () => `<ul>
<li><strong>Ціни зчитуються, а не перераховуються.</strong> Кожна ціна App Store: це сума, яку Apple друкує на сторінці Telegram у цій країні, у валюті цієї країни, на дату з колонки <code>checked</code>.</li>
<li>Ціни <strong>Fragment</strong> (маркетплейсу самого Telegram) беруться з fragment.com у доларах США.</li>
<li><strong>Наклад</strong> колекційних подарунків береться зі сторінок подарунків на Fragment. Це заміри: наклад колекції може ще зростати.</li>
<li><strong>Лімітовані подарунки</strong> беруться з відкритого журналу @GiftChanges, який ведеться з 24 жовтня 2024 року. У подарунків, проданих раніше, дати виходу немає.</li>
<li>Оцінки в доларах (<code>*_usd_estimate</code>) рахуються за курсами центральних банків із <code>fx-rates.json</code>, а не за поточним курсом.</li>
</ul>`,
    citeHeading: "Як цитувати",
    citeIntro: "Вкажи Gift Club і дай посилання на цю сторінку. Простий варіант:",
    citeLink: (brand) => `Пишеш про ціни Telegram? Ці самі цифри лежать в основі посібників на ${brand}.`,
    faq: ({ F, n, money }) => [
      {
        q: "Це офіційний датасет Telegram?",
        a: "Ні. Gift Club зчитує відкриті джерела Telegram (App Store, Fragment, Bot API і публічний журнал подарунків) і записує кожну цифру з датою та посиланням на джерело. Сам Telegram такого списку не публікує.",
      },
      {
        q: "Чи можна використовувати дані в статті, застосунку або дослідженні?",
        a: "Так. Дані під CC BY 4.0: використовуй де завгодно, зокрема й комерційно, якщо вказуєш Gift Club і даєш посилання на цей датасет.",
      },
      {
        q: "Скільки коштує одна зірка Telegram у доларах?",
        a: `${money(F.fragmentUsd, "USD")} на Fragment за будь-якої кількості від ${n(F.fragmentMin)} зірок і близько ${money(F.us100 / 100, "USD")} у пакеті зі ${n(100)} зірок в американському App Store. Зірка, зароблена каналом, виводиться по ${money(F.earnedUsd, "USD")}.`,
      },
      {
        q: "Як часто дані оновлюються?",
        a: "У кожної таблиці вказано дату заміру. Коли змінюється ціна або наклад, рядок перечитується з джерела, і дата зсувається разом із ним.",
      },
    ],
  },

  stars: {
    title: () => "Ціни на зірки Telegram за країнами: App Store, Fragment (CSV)",
    description: ({ F, n, money }) =>
      `Ціни на пакети зірок Telegram у ${n(F.storeCount)} країнах App Store в місцевій валюті та фіксовані ${money(F.fragmentUsd, "USD")} за зірку на Fragment. Завантажити в CSV або JSON.`,
    h1: "Ціни на зірки Telegram за країнами",
    lead: ({ F, n }) => `${n.of(F.starsRows, { one: "ціна", few: "ціни", many: "цін" })} на пакети зі сторінки Telegram в App Store кожної країни, поруч із курсом Fragment.`,
    keywords: ["ціна зірок Telegram", "зірки Telegram за країнами", "Fragment", "App Store", "CSV"],
    answer: ({ F, n, money }) =>
      `${n(1000)} зірок Telegram коштують <strong>${money(F.fragmentUsd * 1000, "USD")}</strong> на Fragment і <strong>${money(F.us1000, "USD")}</strong> в американському App Store. Fragment бере фіксовані ${money(F.fragmentUsd, "USD")} за зірку, а в пакетах App Store вже закладена комісія магазину.`,
    usHeading: "США: App Store і Fragment",
    usCaption: (d) => `Пакети в американському App Store і та сама кількість на Fragment, замір: ${d}`,
    fragmentHeading: "Фіксований курс Fragment",
    fragmentText: ({ F, n, money }) =>
      `Fragment продає будь-яку кількість від ${n(F.fragmentMin)} зірок по ${money(F.fragmentUsd, "USD")} за зірку, оплата в Gram (TON) або стейблкоїні. App Store продає лише готові пакети й додає комісію магазину, тому ті самі зірки там дорожчі. Зірка, зароблена каналом або ботом, виводиться по ${money(F.earnedUsd, "USD")}, а куплені зірки не виводяться.`,
    byCountryHeading: "Ціни App Store в кожній країні",
    byCountryIntro: () =>
      "Apple показує лише десять найпопулярніших позицій у кожній країні, тож пакета, якого немає в таблиці, не було в десятці цієї країни. Колонка Fragment скрізь у доларах США.",
    caption: (country, d) => `${country}, App Store, замір: ${d}`,
    cols: { stars: "Зірки", price: "Ціна в App Store", perStar: "За зірку", fragment: "Fragment (USD)", appStoreUs: "App Store (США)", saving: "Економія на Fragment" },
    faq: ({ F, money }) => [
      {
        q: "Де зірки Telegram найдешевші?",
        a: `На Fragment: ${money(F.fragmentUsd, "USD")} за зірку в будь-якій країні. Серед країн App Store дивись колонку «За зірку»: між валютами вона сильно різниться.`,
      },
      {
        q: "Чому ціни в App Store і Google Play відрізняються від Fragment?",
        a: "Магазини застосунків беруть комісію й продають готові пакети, а Fragment, маркетплейс самого Telegram, бере один курс за будь-якої кількості. Google Play не публікує прайс-лист, тому його в датасеті немає.",
      },
      {
        q: "Ціни перераховано за курсом валют?",
        a: "Ні. Кожна ціна App Store: це цифра самого магазину в його валюті. У доларах лише колонка Fragment.",
      },
    ],
  },

  premium: {
    title: () => "Ціна Telegram Premium за країнами: дані App Store (CSV)",
    description: ({ F, n }) =>
      `Місячна й річна ціна Telegram Premium у ${n(F.premiumStores)} країнах App Store, а також ціни подарунків на Fragment і в зірках. CSV і JSON, з датою та джерелом.`,
    h1: "Ціни на Telegram Premium за країнами",
    lead: ({ F, n }) => `Скільки коштує Telegram Premium у ${n(F.premiumStores)} країнах App Store, від дешевих до дорогих.`,
    keywords: ["ціна Telegram Premium", "Telegram Premium за країнами", "App Store", "Fragment", "CSV"],
    answer: ({ F, n, money, region }) =>
      `Telegram Premium коштує <strong>${money(F.premiumUs, "USD")} на місяць</strong> в американському App Store. Найдешевше: ${region(F.premiumCheapest.store)}, ${F.premiumCheapest.monthly_as_printed} (близько ${money(F.premiumCheapest.monthly_usd_estimate, "USD")}). Найдорожче: ${region(F.premiumDearest.store)}, ${F.premiumDearest.monthly_as_printed}. У подарунок 12 місяців коштують ${money(F.gift12.fragment_usd, "USD")} на Fragment або ${n(F.gift12.telegram_stars)} зірок.`,
    tableHeading: "Місячна й річна ціна в кожній країні",
    tableIntro: () =>
      "Ціни в тому вигляді, як їх друкує Apple в кожній країні. Колонка в доларах: оцінка за курсом центрального банку на день заміру; риска означає, що тарифу не було серед десяти позицій цієї країни.",
    caption: (d) => `Telegram Premium в App Store, від дешевих до дорогих, замір: ${d}`,
    giftHeading: "Premium у подарунок: Fragment і зірки",
    giftIntro: () =>
      "Premium можна купити в подарунок на Fragment або надіслати за зірки всередині Telegram. Ціни в зірках задає Bot API Telegram.",
    giftCaption: (d) => `Ціни подарункового Premium, замір: ${d}`,
    cols: { country: "Країна", monthly: "На місяць", annual: "На рік", prepaid: "3 місяці (подарунок)", usd: "На місяць у USD", months: "Місяців", fragmentUsd: "Fragment (USD)", fragmentGram: "Fragment (Gram)", stars: "Зірки" },
    faq: ({ F, n, money, region }) => [
      {
        q: "У якій країні Telegram Premium найдешевший?",
        a: `Серед країн датасету: ${region(F.premiumCheapest.store)}, ${F.premiumCheapest.monthly_as_printed} на місяць (близько ${money(F.premiumCheapest.monthly_usd_estimate, "USD")}).`,
      },
      {
        q: "Скільки зірок коштує подарунковий Premium?",
        a: `${n(F.gift3.telegram_stars)} зірок за 3 місяці та ${n(F.gift12.telegram_stars)} за 12 місяців, ціни задає Telegram.`,
      },
      {
        q: "Чому немає колонки Google Play?",
        a: "Google Play показує ціни лише всередині застосунку, на пристрої з виконаним входом, тому публічної сторінки, яку можна прочитати й процитувати, немає.",
      },
    ],
  },

  collections: {
    title: () => "Колекції подарунків Telegram: наклад кожного NFT-подарунка (CSV)",
    description: ({ F, n }) =>
      `Усі ${n.of(F.collectionCount, { one: "колекція", few: "колекції", many: "колекцій" })} колекційних подарунків Telegram за накладом, разом ${n.of(F.totalIssued, { one: "штука", few: "штуки", many: "штук" })}, і ${n.of(F.regularCount, { one: "звичайний подарунок", few: "звичайні подарунки", many: "звичайних подарунків" })} з ID та цінами в зірках.`,
    h1: "Колекції подарунків Telegram за накладом",
    lead: ({ F, n }) => `Усі колекції колекційних (покращених) подарунків на Fragment, від найменшого накладу: ${n.of(F.collectionCount, { one: "колекція", few: "колекції", many: "колекцій" })}.`,
    keywords: ["NFT-подарунки Telegram", "колекційні подарунки Telegram", "наклад подарунків", "Fragment", "CSV"],
    answer: ({ F, n }) =>
      `Найрідкісніша колекція подарунків Telegram: <strong>${F.rarest.name}</strong>, випущено ${n.of(F.rarest.issued, { one: "штука", few: "штуки", many: "штук" })}. У всіх ${n(F.collectionCount)} колекціях разом ${n.of(F.totalIssued, { one: "колекційний подарунок", few: "колекційні подарунки", many: "колекційних подарунків" })}.`,
    tableHeading: "Усі колекції, від найменшого накладу",
    tableIntro: () =>
      "Наклад: скільки предметів існує в колекції на день заміру. Він ще може зростати, тож вважай його заміром, а не межею.",
    caption: (d) => `Колекції колекційних подарунків на Fragment, замір: ${d}`,
    regularHeading: "Звичайні подарунки та їхні ID",
    regularIntro: ({ F, n }) =>
      `${n.of(F.regularCount, { one: "звичайний подарунок", few: "звичайні подарунки", many: "звичайних подарунків" })}, які бот може надіслати методом <code>sendGift</code> з Bot API, ціною від ${n(F.regularMin)} до ${n(F.regularMax)} зірок.`,
    regularCaption: "Звичайні подарунки Telegram",
    cols: { rank: "№", name: "Колекція", issued: "Наклад", giftId: "ID подарунка", stars: "Зірки" },
    faq: ({ F, n }) => [
      {
        q: "Який подарунок Telegram найрідкісніший?",
        a: `За накладом: ${F.rarest.name} (${n.of(F.rarest.issued, { one: "штука", few: "штуки", many: "штук" })}). Рідкісність усередині колекції залежить ще від моделі, тла та візерунка, які дісталися подарунку під час покращення.`,
      },
      {
        q: "Скільки всього NFT-подарунків Telegram?",
        a: `${n(F.totalIssued)} у ${n(F.collectionCount)} колекціях на день заміру.`,
      },
      {
        q: "Звідки взято наклади?",
        a: "З Fragment, маркетплейсу самого Telegram: на сторінці кожної колекції вказано випущений наклад.",
      },
    ],
  },

  limited: {
    title: () => "Лімітовані подарунки Telegram: дати, ціни, наклад (CSV)",
    description: ({ F, n }) =>
      `${n.of(F.limitedCount, { one: "лімітований чи сезонний подарунок", few: "лімітовані й сезонні подарунки", many: "лімітованих і сезонних подарунків" })} Telegram: дата виходу, ціна в зірках і обмеження накладу з відкритого журналу. Завантажити в CSV або JSON.`,
    h1: "Лімітовані та сезонні подарунки Telegram",
    lead: ({ F, n }) => `${n.of(F.limitedCount, { one: "лімітований подарунок", few: "лімітовані подарунки", many: "лімітованих подарунків" })}, спочатку нові: дата виходу та скільки штук випущено.`,
    keywords: ["лімітовані подарунки Telegram", "сезонні подарунки Telegram", "наклад подарунків", "зірки Telegram", "CSV"],
    answer: ({ F, n, date }) =>
      `Telegram випустив <strong>${n.of(F.limitedCount, { one: "лімітований чи сезонний подарунок", few: "лімітовані й сезонні подарунки", many: "лімітованих і сезонних подарунків" })}</strong>, у ${n(F.cappedCount)} із них було обмеження накладу. Найменший наклад у подарунка ${F.smallestCapped.name} (${n(F.smallestCapped.supply)}). Останній вихід у датасеті: ${date(F.lastRelease)}.`,
    tableHeading: "Усі лімітовані подарунки, спочатку нові",
    tableIntro: () =>
      "Зірки: ціна на момент виходу (або мінімальна ставка на аукціоні). Риска в накладі означає, що журнал не вказав обмеження, зазвичай це сезонний подарунок.",
    caption: (d) => `Лімітовані подарунки Telegram, замір: ${d}`,
    beforeLog: "до 24 жовт. 2024",
    premiumOnly: "Лише для Premium",
    auction: "аукціон",
    sourceNote:
      "Джерело: відкритий журнал @GiftChanges (t.me/GiftChanges). Назви подарунків дані Telegram і лишаються англійськими всіма мовами.",
    cols: { name: "Подарунок", released: "Вихід", stars: "Зірки", supply: "Наклад", notes: "Примітки" },
    faq: ({ F, n }) => [
      {
        q: "Що таке лімітований подарунок Telegram?",
        a: "Подарунок, який Telegram продає недовго або обмеженим накладом. Після розпродажу його можна купити лише в іншого користувача, а більшість можна покращити до колекційного.",
      },
      {
        q: "У якого лімітованого подарунка найменший наклад?",
        a: `У ${F.smallestCapped.name}: випущено ${n(F.smallestCapped.supply)}.`,
      },
      {
        q: "Чому в деяких подарунків немає дати виходу?",
        a: "Відкритий журнал ведеться з 24 жовтня 2024 року. Подарунки, які продавалися раніше, вказано без дати.",
      },
    ],
  },
};
