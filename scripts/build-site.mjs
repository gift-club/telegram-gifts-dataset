// Builds the GitHub Pages site in docs/ from data/ and site/content/<lang>.mjs.
// Run: node scripts/build-site.mjs
import { cpSync, existsSync, readFileSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import {
  LANGS, MAIN_SITE, ORGANIZATION, breadcrumbs, esc, faqHtml, faqPage, fmtNum, pageUrl, table, writeSite,
} from "./site-kit.mjs";
import { links } from "../site/links.mjs";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const DOCS = `${ROOT}docs`;
const read = (f) => JSON.parse(readFileSync(`${ROOT}data/${f}`, "utf8"));

const stars = read("stars-app-store-prices.json");
const fragment = read("stars-fragment.json");
const premium = read("premium-app-store-prices.json");
const premiumGift = read("premium-gift-prices.json");
const collections = read("gift-collections.json");
const limited = read("limited-gifts.json");
const regular = read("regular-gifts.json");

const REPO = "https://github.com/gift-club/telegram-gifts-dataset";
const site = {
  /** The release date: the sitemap lastmod of pages without their own data date. */
  updated: "2026-11-12",
  base: "https://gift-club.github.io/telegram-gifts-dataset",
  root: "/telegram-gifts-dataset/",
  repo: REPO,
  langs: LANGS,
  sisterKey: "dataset",
  name: {},
  short: {},
  licence: {},
  nav: [
    { key: "home", path: "" },
    { key: "stars", path: "stars-prices/" },
    { key: "premium", path: "premium-prices/" },
    { key: "collections", path: "gift-collections/" },
    { key: "limited", path: "limited-gifts/" },
  ],
};

const content = {};
for (const lang of LANGS) {
  if (!existsSync(`${ROOT}site/content/${lang}.mjs`)) {
    console.warn(`No site/content/${lang}.mjs: skipping ${lang}`);
    continue;
  }
  content[lang] = (await import(`../site/content/${lang}.mjs`)).default;
  site.name[lang] = content[lang].siteName;
  site.short[lang] = content[lang].short;
  site.licence[lang] = content[lang].licence(`<a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>`);
}

// ---------------------------------------------------------------------------------------
// Figures every language quotes, computed once from the data.

const latest = (rows, key) => rows.reduce((d, r) => (r[key] > d ? r[key] : d), "");
const STARS_CHECKED = latest(stars, "checked");
const PREMIUM_CHECKED = premium[0].checked;
const COLLECTIONS_CAPTURED = collections[0].captured;
const LIMITED_CAPTURED = limited[0].captured;
const UPDATED = [STARS_CHECKED, PREMIUM_CHECKED, COLLECTIONS_CAPTURED, LIMITED_CAPTURED].sort().at(-1);

const usPack = (n) => stars.find((r) => r.store === "us" && r.stars === n);
const premiumByUsd = [...premium].sort((a, b) => a.monthly_usd_estimate - b.monthly_usd_estimate);
const totalIssued = collections.reduce((s, r) => s + r.issued, 0);
const capped = limited.filter((g) => g.supply !== null);
const smallestCapped = [...capped].sort((a, b) => a.supply - b.supply)[0];
const lastRelease = latest(limited, "release_date");

const F = {
  fragmentUsd: fragment.fragment.usd_per_star,
  fragmentMin: fragment.fragment.min_stars,
  earnedUsd: fragment.creator_payout.usd_per_star,
  us1000: usPack(1000).price,
  us100: usPack(100).price,
  storeCount: new Set(stars.map((r) => r.store)).size,
  starsRows: stars.length,
  premiumStores: premium.length,
  premiumUs: premium.find((r) => r.store === "us").monthly,
  premiumCheapest: premiumByUsd[0],
  premiumDearest: premiumByUsd.at(-1),
  gift3: premiumGift.find((r) => r.months === 3),
  gift12: premiumGift.find((r) => r.months === 12),
  collectionCount: collections.length,
  totalIssued,
  rarest: collections[0],
  limitedCount: limited.length,
  cappedCount: capped.length,
  smallestCapped,
  lastRelease,
  regularCount: regular.length,
  regularMin: Math.min(...regular.map((r) => r.stars)),
  regularMax: Math.max(...regular.map((r) => r.stars)),
};

// ---------------------------------------------------------------------------------------

const regionName = (lang, code) => {
  const name = new Intl.DisplayNames([lang], { type: "region" }).of(code.toUpperCase()) ?? code;
  // Gift Club writes russia in lower case in every language.
  return code === "ru" ? name.toLocaleLowerCase(lang) : name;
};

/** A price in its currency. Sub-unit prices keep up to four decimals ($0.015, $0.0199). */
const money = (lang, value, currency) => {
  const whole = ["IDR", "KZT"].includes(currency) && value >= 1 || (currency === "RUB" && Number.isInteger(value));
  return new Intl.NumberFormat(lang === "uk" ? "uk-UA" : lang, {
    style: "currency",
    currency,
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: whole ? 0 : value < 1 ? 4 : 2,
  }).format(value);
};

const date = (lang, iso) =>
  new Intl.DateTimeFormat(lang === "uk" ? "uk-UA" : lang, { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`),
  );

const FILES = [
  ["stars-app-store-prices", ["csv", "json"]],
  ["stars-fragment", ["json"]],
  ["premium-app-store-prices", ["csv", "json"]],
  ["premium-gift-prices", ["csv", "json"]],
  ["gift-collections", ["csv", "json"]],
  ["limited-gifts", ["csv", "json"]],
  ["regular-gifts", ["csv", "json"]],
  ["fx-rates", ["json"]],
];

const fileUrl = (name, ext) => `${site.base}/data/${name}.${ext}`;

const distribution = (names) =>
  FILES.filter(([n]) => names.includes(n)).flatMap(([n, exts]) =>
    exts.map((ext) => ({
      "@type": "DataDownload",
      name: `${n}.${ext}`,
      encodingFormat: ext === "csv" ? "text/csv" : "application/json",
      contentUrl: fileUrl(n, ext),
    })),
  );

const dataset = ({ lang, path, name, description, keywords, files, modified, temporal }) => ({
  "@context": "https://schema.org",
  "@type": "Dataset",
  "@id": `${pageUrl(site, "en", path)}#dataset`,
  name,
  description,
  url: pageUrl(site, lang, path),
  inLanguage: lang,
  sameAs: REPO,
  license: "https://creativecommons.org/licenses/by/4.0/",
  isAccessibleForFree: true,
  creator: ORGANIZATION,
  publisher: ORGANIZATION,
  keywords,
  dateModified: modified,
  ...(temporal ? { temporalCoverage: temporal } : {}),
  distribution: distribution(files),
});

const related = (c, lang, keys) => {
  const items = keys.map((k) => links(lang, k)).filter(Boolean);
  if (!items.length) return "";
  return `<h2>${esc(c.ui.relatedHeading)}</h2>\n<ul>${items
    .map((l) => `<li><a href="${l.url}">${esc(l.title)}</a>${l.note ? ` — ${esc(l.note)}` : ""}</li>`)
    .join("")}</ul>`;
};

const downloads = (c, names) =>
  `<p>${FILES.filter(([n]) => names.includes(n))
    .map(([n, exts]) => `<code>${n}</code> ${exts.map((e) => `<a href="${site.root}data/${n}.${e}" download>${e.toUpperCase()}</a>`).join(" · ")}`)
    .join("<br>")}</p><p class="meta">${c.ui.downloadNote}</p>`;

const crumbs = (c, lang, path, name) =>
  breadcrumbs([
    { name: c.siteName, url: pageUrl(site, lang, "") },
    ...(path ? [{ name, url: pageUrl(site, lang, path) }] : []),
  ]);

const pages = [];
const BUILT = LANGS.filter((l) => content[l]);
site.langs = BUILT;

for (const lang of BUILT) {
  const c = content[lang];
  const n = (x, d = 0) => fmtNum(lang, x, d);
  // n.of(count, { one, few, many }): the number plus the noun in the form the language needs after it.
  const plural = new Intl.PluralRules(lang === "uk" ? "uk-UA" : lang);
  n.of = (x, forms) => `${n(x)} ${forms[plural.select(x)] ?? forms.many}`;
  const ctx = { n, money: (v, cur) => money(lang, v, cur), date: (d) => date(lang, d), region: (code) => regionName(lang, code), F };

  // --- Home --------------------------------------------------------------------------
  {
    const h = c.home;
    const cards = site.nav
      .filter((x) => x.path)
      .map((x) => `<a class="card" href="${site.root}${lang === "en" ? "" : `${lang}/`}${x.path}" style="text-decoration:none"><h3>${esc(c.nav[x.key])}</h3><p>${esc(h.cards[x.key](ctx))}</p></a>`)
      .join("");
    const body = `
<div class="answer"><p>${h.answer(ctx)}</p></div>
<h2>${esc(h.insideHeading)}</h2>
<div class="cards">${cards}</div>
<h2>${esc(h.downloadHeading)}</h2>
<p>${h.downloadIntro(ctx)}</p>
${downloads(c, FILES.map(([name]) => name))}
<h2>${esc(h.methodHeading)}</h2>
${h.method(ctx)}
<h2>${esc(h.citeHeading)}</h2>
<p>${h.citeIntro}</p>
<pre><code>Gift Club (${UPDATED.slice(0, 4)}). Telegram Gifts &amp; Stars Dataset (snapshot ${UPDATED}). ${site.base}/</code></pre>
<pre><code>@misc{giftclub_telegram_gifts_dataset,
  author = {{Gift Club}},
  title = {Telegram Gifts and Stars Dataset},
  year = {${UPDATED.slice(0, 4)}},
  note = {Snapshot ${UPDATED}},
  howpublished = {\\url{${site.base}/}}
}</code></pre>
<p>${h.citeLink(`<a href="${MAIN_SITE}${lang === "en" ? "" : `/${lang}`}/">Gift Club</a>`)}</p>
${related(c, lang, ["statistics", "calculator", "premiumPrice"])}
${faqHtml(c.ui.faqHeading, h.faq(ctx))}
`;
    pages.push({
      path: "",
      lang,
      title: h.title(ctx),
      description: h.description(ctx),
      h1: h.h1,
      lead: h.lead(ctx),
      updated: UPDATED,
      body,
      jsonLd: [
        dataset({
          lang, path: "", name: "Telegram Gifts and Stars Dataset", description: h.description(ctx),
          keywords: h.keywords, files: FILES.map(([name]) => name), modified: UPDATED, temporal: `2024-10-24/${UPDATED}`,
        }),
        crumbs(c, lang, "", ""),
        faqPage(h.faq(ctx)),
      ],
    });
  }

  // --- Stars prices ------------------------------------------------------------------
  {
    const p = c.stars;
    const byStore = new Map();
    for (const r of stars) (byStore.get(r.store) ?? byStore.set(r.store, []).get(r.store)).push(r);
    const stores = [...byStore.keys()].sort((a, b) => regionName(lang, a).localeCompare(regionName(lang, b), lang));
    const sections = stores
      .map((code) => {
        const rows = byStore.get(code);
        return `<h3 id="${code}">${esc(regionName(lang, code))} <span class="meta">(${rows[0].currency})</span></h3>${table({
          caption: p.caption(regionName(lang, code), date(lang, rows[0].checked)),
          headers: [p.cols.stars, p.cols.price, p.cols.perStar, p.cols.fragment],
          num: [0, 1, 2, 3],
          rows: rows.map((r) => [
            n(r.stars),
            esc(money(lang, r.price, r.currency)),
            esc(money(lang, r.price_per_star, r.currency)),
            esc(money(lang, r.stars * F.fragmentUsd, "USD")),
          ]),
        })}`;
      })
      .join("\n");
    const usTable = table({
      caption: p.usCaption(date(lang, usPack(100).checked)),
      headers: [p.cols.stars, p.cols.appStoreUs, p.cols.fragment, p.cols.saving],
      num: [0, 1, 2, 3],
      rows: stars
        .filter((r) => r.store === "us")
        .map((r) => [n(r.stars), esc(money(lang, r.price, "USD")), esc(money(lang, r.stars * F.fragmentUsd, "USD")), `${n((1 - (r.stars * F.fragmentUsd) / r.price) * 100)} %`]),
    });
    const body = `
<div class="answer"><p>${p.answer(ctx)}</p></div>
<h2>${esc(p.usHeading)}</h2>
${usTable}
<h2>${esc(p.fragmentHeading)}</h2>
<p>${p.fragmentText(ctx)}</p>
<h2>${esc(p.byCountryHeading)}</h2>
<p>${p.byCountryIntro(ctx)}</p>
<p class="meta">${stores.map((code) => `<a href="#${code}">${esc(regionName(lang, code))}</a>`).join(" · ")}</p>
${sections}
<h2>${esc(c.ui.downloadHeading)}</h2>
${downloads(c, ["stars-app-store-prices", "stars-fragment", "fx-rates"])}
${related(c, lang, ["calculator", "starsPrice"])}
${faqHtml(c.ui.faqHeading, p.faq(ctx))}
`;
    pages.push({
      path: "stars-prices/",
      lang,
      title: p.title(ctx),
      description: p.description(ctx),
      h1: p.h1,
      lead: p.lead(ctx),
      updated: STARS_CHECKED,
      body,
      jsonLd: [
        dataset({ lang, path: "stars-prices/", name: "Telegram Stars prices by country", description: p.description(ctx), keywords: p.keywords, files: ["stars-app-store-prices", "stars-fragment", "fx-rates"], modified: STARS_CHECKED }),
        crumbs(c, lang, "stars-prices/", c.nav.stars),
        faqPage(p.faq(ctx)),
      ],
    });
  }

  // --- Premium prices ----------------------------------------------------------------
  {
    const p = c.premium;
    const rows = premiumByUsd.map((r) => [
      esc(regionName(lang, r.store)),
      esc(r.monthly_as_printed),
      r.annual_as_printed ? esc(r.annual_as_printed) : "—",
      r.prepaid_3_months_as_printed ? esc(r.prepaid_3_months_as_printed) : "—",
      `≈ ${esc(money(lang, r.monthly_usd_estimate, "USD"))}`,
    ]);
    const gift = table({
      caption: p.giftCaption(date(lang, PREMIUM_CHECKED)),
      headers: [p.cols.months, p.cols.fragmentUsd, p.cols.fragmentGram, p.cols.stars],
      num: [0, 1, 2, 3],
      rows: premiumGift.map((r) => [n(r.months), esc(money(lang, r.fragment_usd, "USD")), `${n(r.fragment_gram, 2)} GRAM`, `${n(r.telegram_stars)} ⭐`]),
    });
    const body = `
<div class="answer"><p>${p.answer(ctx)}</p></div>
<h2>${esc(p.tableHeading)}</h2>
<p>${p.tableIntro(ctx)}</p>
${table({ caption: p.caption(date(lang, PREMIUM_CHECKED)), headers: [p.cols.country, p.cols.monthly, p.cols.annual, p.cols.prepaid, p.cols.usd], num: [1, 2, 3, 4], rows })}
<h2>${esc(p.giftHeading)}</h2>
<p>${p.giftIntro(ctx)}</p>
${gift}
<h2>${esc(c.ui.downloadHeading)}</h2>
${downloads(c, ["premium-app-store-prices", "premium-gift-prices", "fx-rates"])}
${related(c, lang, ["premiumPrice", "premiumFree"])}
${faqHtml(c.ui.faqHeading, p.faq(ctx))}
`;
    pages.push({
      path: "premium-prices/",
      lang,
      title: p.title(ctx),
      description: p.description(ctx),
      h1: p.h1,
      lead: p.lead(ctx),
      updated: PREMIUM_CHECKED,
      body,
      jsonLd: [
        dataset({ lang, path: "premium-prices/", name: "Telegram Premium prices by country", description: p.description(ctx), keywords: p.keywords, files: ["premium-app-store-prices", "premium-gift-prices", "fx-rates"], modified: PREMIUM_CHECKED }),
        crumbs(c, lang, "premium-prices/", c.nav.premium),
        faqPage(p.faq(ctx)),
      ],
    });
  }

  // --- Gift collections --------------------------------------------------------------
  {
    const p = c.collections;
    const body = `
<div class="answer"><p>${p.answer(ctx)}</p></div>
<h2>${esc(p.tableHeading)}</h2>
<p>${p.tableIntro(ctx)}</p>
${table({
  caption: p.caption(date(lang, COLLECTIONS_CAPTURED)),
  headers: [p.cols.rank, p.cols.name, p.cols.issued],
  num: [0, 2],
  rows: collections.map((r) => [n(r.rank), `<a href="${esc(r.fragment_url)}" rel="nofollow noopener">${esc(r.name)}</a>`, n(r.issued)]),
})}
<h2>${esc(p.regularHeading)}</h2>
<p>${p.regularIntro(ctx)}</p>
${table({
  caption: p.regularCaption,
  headers: [p.cols.name, p.cols.giftId, p.cols.stars],
  num: [2],
  rows: [...regular].sort((a, b) => a.stars - b.stars).map((r) => [esc(r.name), `<code>${esc(r.id)}</code>`, `${n(r.stars)} ⭐`]),
})}
<h2>${esc(c.ui.downloadHeading)}</h2>
${downloads(c, ["gift-collections", "regular-gifts"])}
${related(c, lang, ["rarest", "giftsHub"])}
${faqHtml(c.ui.faqHeading, p.faq(ctx))}
`;
    pages.push({
      path: "gift-collections/",
      lang,
      title: p.title(ctx),
      description: p.description(ctx),
      h1: p.h1,
      lead: p.lead(ctx),
      updated: COLLECTIONS_CAPTURED,
      body,
      jsonLd: [
        dataset({ lang, path: "gift-collections/", name: "Telegram collectible gift collections and issued counts", description: p.description(ctx), keywords: p.keywords, files: ["gift-collections", "regular-gifts"], modified: COLLECTIONS_CAPTURED }),
        crumbs(c, lang, "gift-collections/", c.nav.collections),
        faqPage(p.faq(ctx)),
      ],
    });
  }

  // --- Limited gifts -----------------------------------------------------------------
  {
    const p = c.limited;
    const rows = [...limited].reverse().map((g) => [
      esc(g.name),
      g.release_date ? `<time datetime="${g.release_date}">${g.release_date}</time>` : esc(p.beforeLog),
      g.stars === null ? "—" : `${n(g.stars)} ⭐`,
      g.supply === null ? "—" : n(g.supply),
      [g.premium_only ? p.premiumOnly : "", g.auction ? p.auction : ""].filter(Boolean).join(", ") || "",
    ]);
    const body = `
<div class="answer"><p>${p.answer(ctx)}</p></div>
<h2>${esc(p.tableHeading)}</h2>
<p>${p.tableIntro(ctx)}</p>
${table({ caption: p.caption(date(lang, LIMITED_CAPTURED)), headers: [p.cols.name, p.cols.released, p.cols.stars, p.cols.supply, p.cols.notes], num: [2, 3], rows })}
<p class="meta">${p.sourceNote}</p>
<h2>${esc(c.ui.downloadHeading)}</h2>
${downloads(c, ["limited-gifts"])}
${related(c, lang, ["limited", "freeGifts"])}
${faqHtml(c.ui.faqHeading, p.faq(ctx))}
`;
    pages.push({
      path: "limited-gifts/",
      lang,
      title: p.title(ctx),
      description: p.description(ctx),
      h1: p.h1,
      lead: p.lead(ctx),
      updated: LIMITED_CAPTURED,
      body,
      jsonLd: [
        dataset({ lang, path: "limited-gifts/", name: "Telegram limited and seasonal gifts", description: p.description(ctx), keywords: p.keywords, files: ["limited-gifts"], modified: LIMITED_CAPTURED, temporal: `2024-10-24/${LIMITED_CAPTURED}` }),
        crumbs(c, lang, "limited-gifts/", c.nav.limited),
        faqPage(p.faq(ctx)),
      ],
    });
  }
}

rmSync(DOCS, { recursive: true, force: true });
const ui = Object.fromEntries(BUILT.map((l) => [l, { ...content[l].ui, nav: content[l].nav }]));
const count = writeSite(DOCS, site, pages, ui);
cpSync(`${ROOT}data`, `${DOCS}/data`, { recursive: true });
console.log(`Built ${count} pages into docs/`);
