# Telegram Gifts & Stars Dataset

Open, dated and sourced data on **Telegram Stars**, **Telegram Premium** and **Telegram Gifts**, as CSV and JSON.

**Browse it:** https://gift-club.github.io/telegram-gifts-dataset/ (also in Русский, Українська, Español, Polski, Italiano, Türkçe, Deutsch and Français)

| File | What it holds |
| --- | --- |
| [`stars-app-store-prices`](data/stars-app-store-prices.csv) | Telegram Stars pack prices in the App Store, by country, in local currency |
| [`stars-fragment.json`](data/stars-fragment.json) | Fragment's flat price per Star and the creator payout rate |
| [`premium-app-store-prices`](data/premium-app-store-prices.csv) | Telegram Premium monthly and yearly prices by country |
| [`premium-gift-prices`](data/premium-gift-prices.csv) | Premium gift prices on Fragment (USD, Gram) and in Stars |
| [`gift-collections`](data/gift-collections.csv) | Every collectible (NFT) gift collection with its issued count, rarest first |
| [`limited-gifts`](data/limited-gifts.csv) | Limited and seasonal gifts: release date, Stars price, supply cap |
| [`regular-gifts`](data/regular-gifts.csv) | The regular gifts a bot can send, with gift ID and Stars price |
| [`fx-rates.json`](data/fx-rates.json) | Exchange rates behind the `*_usd_estimate` columns |

Every CSV has a JSON twin with the same rows. Every row carries the date it was read (`checked` or `captured`) and, where it applies, its source URL.

## Quick start

```python
import pandas as pd
base = "https://gift-club.github.io/telegram-gifts-dataset/data/"
stars = pd.read_csv(base + "stars-app-store-prices.csv")
print(stars[stars.stars == 1000][["country", "currency", "price"]])
```

```js
const base = "https://gift-club.github.io/telegram-gifts-dataset/data/";
const gifts = await fetch(base + "limited-gifts.json").then((r) => r.json());
console.log(gifts.filter((g) => g.supply !== null).sort((a, b) => a.supply - b.supply)[0]);
```

## How the data is collected

- **Prices are read, not converted.** Each App Store price is what Apple prints on Telegram's listing in that country, in that currency, on the `checked` date. Apple shows only the ten most bought items per country, so a missing pack was not in that country's ten.
- **Fragment** prices come from fragment.com, Telegram's own marketplace, in US dollars.
- **Issued counts** of collectible gifts come from Fragment's gift pages. They are readings, and a collection can still grow.
- **Limited gifts** come from the public log [@GiftChanges](https://t.me/s/GiftChanges), which began on 2024-10-24. Gifts sold before that have no `release_date`.
- **Dollar estimates** (`*_usd_estimate`) use the central-bank rates in `fx-rates.json`, never a live rate.
- No gift artwork is included: the art belongs to Telegram.

Google Play publishes no public price list, so there is no Google Play data.

## Licence and citation

Data: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Reuse it anywhere, commercially too, with credit to Gift Club and a link to the dataset. The build scripts are MIT.

> Gift Club (2026). *Telegram Gifts and Stars Dataset.* https://gift-club.github.io/telegram-gifts-dataset/

GitHub's "Cite this repository" button reads [`CITATION.cff`](CITATION.cff). The dataset is also described as a [Frictionless Data Package](datapackage.json).

## Rebuild the site

```bash
node scripts/build-site.mjs
```

Node 20 or newer, no dependencies. It writes `docs/`, which GitHub Pages serves.

---

Made by [Gift Club](https://giftclub.app/), the Telegram Mini App with gift boxes and games. More: [Telegram Stars calculator](https://github.com/gift-club/telegram-stars-calculator) · [Provably fair verifier](https://github.com/gift-club/provably-fair-verifier)
