// Veri sitesinin Türkçe metni. Yapısı en.mjs ile aynı.

export default {
  siteName: "Telegram Hediyeleri ve Yıldızları Veri Seti",
  short: "Veri seti",
  licence: (cc) => `Veriler ${cc} lisanslıdır: Gift Club'a atıf yapıp bu sayfaya bağlantı verdiğin sürece serbestçe kullanabilirsin.`,

  ui: {
    navLabel: "Veri seti bölümleri",
    langsLabel: "Diller",
    footerBy: (brand) => `Hediye kasaları ve oyunlar sunan Telegram Mini App'i ${brand} tarafından hazırlanan açık veri seti.`,
    moreLabel: "Gift Club'dan daha fazlası",
    sourceOnGithub: "Kaynak GitHub'da",
    sisters: { dataset: "Telegram verileri", calculator: "Yıldız hesaplayıcı", verifier: "Provably fair" },
    updated: "Veriler güncellendi",
    faqHeading: "Sorular",
    relatedHeading: "Gift Club'da okumaya devam et",
    downloadHeading: "İndir",
    downloadNote: "CSV, başlık satırlı UTF-8'dir. JSON, aynı satırlardan oluşan bir dizidir.",
  },

  nav: {
    home: "Genel bakış",
    stars: "Yıldız fiyatları",
    premium: "Premium fiyatları",
    collections: "Hediye koleksiyonları",
    limited: "Sınırlı hediyeler",
  },

  home: {
    title: () => "Telegram Hediyeleri ve Yıldızları Veri Seti: fiyat (CSV, JSON)",
    description: ({ F, n }) =>
      `Ülkelere göre Telegram Yıldız ve Premium fiyatlarını, basım adetleriyle ${n(F.collectionCount)} koleksiyon hediye koleksiyonunu ve ${n(F.limitedCount)} sınırlı hediyeyi içeren açık veri seti. CSV ve JSON, CC BY 4.0.`,
    h1: "Telegram Hediyeleri ve Yıldızları Veri Seti",
    lead: () =>
      "Telegram Yıldızları, Telegram Premium ve Telegram hediyeleri hakkında tarihli, kaynaklı rakamlar: CSV ve JSON olarak indirebilir, grafiğe dökebilir ya da kaynak gösterebilirsin.",
    keywords: ["Telegram Yıldızları", "Telegram Premium", "Telegram hediyeleri", "Fragment", "App Store", "veri seti", "CSV", "JSON"],
    answer: ({ F, n, money, region }) =>
      `Fragment'te bir Telegram Yıldızı <strong>${money(F.fragmentUsd, "USD")}</strong> (${n(1000)} Yıldız = ${money(F.fragmentUsd * 1000, "USD")}), ABD App Store'da ise ${n(1000)} Yıldız ${money(F.us1000, "USD")}. ` +
      `Telegram Premium, incelenen ${n(F.premiumStores)} App Store ülkesi arasında en ucuz şurada: ${region(F.premiumCheapest.store)} (aylık ${F.premiumCheapest.monthly_as_printed}). ` +
      `${n(F.collectionCount)} koleksiyon hediye koleksiyonunda toplam ${n(F.totalIssued)} parça var; en nadir olan ${F.rarest.name} koleksiyonunda ${n(F.rarest.issued)} parça bulunuyor.`,
    insideHeading: "İçinde neler var",
    cards: {
      stars: ({ F, n }) => `${n(F.storeCount)} ülkede ${n(F.starsRows)} App Store paket fiyatı ve Fragment'in sabit fiyatı.`,
      premium: ({ F, n }) => `${n(F.premiumStores)} App Store ülkesinde aylık ve yıllık Premium ile USD, Gram ve Yıldız cinsinden hediye fiyatları.`,
      collections: ({ F, n }) => `Basım adedine göre tüm ${n(F.collectionCount)} koleksiyon ve ${n(F.regularCount)} normal hediye.`,
      limited: ({ F, n }) => `Çıkış tarihi, Yıldız fiyatı ve basım sınırıyla ${n(F.limitedCount)} sınırlı ve sezonluk hediye.`,
    },
    downloadHeading: "Dosyaları indir",
    downloadIntro: () =>
      "Bu sitedeki her tablo, deponun <code>data/</code> klasöründe bir dosyadır. Aşağıdaki bağlantılar her zaman en güncel sürümü verir.",
    methodHeading: "Veriler nasıl toplanıyor",
    method: () => `<ul>
<li><strong>Fiyatlar çevrilmez, okunur.</strong> Her App Store fiyatı, Apple'ın o ülkede Telegram'ın sayfasında o ülkenin para biriminde gösterdiği rakamdır; tarih <code>checked</code> sütunundadır.</li>
<li><strong>Fragment</strong> (Telegram'ın kendi pazar yeri) fiyatları fragment.com'dan ABD doları olarak alınır.</li>
<li>Koleksiyon hediyelerin <strong>basım adetleri</strong> Fragment'in hediye sayfalarından gelir. Bunlar okumadır: bir koleksiyonun adedi hâlâ artabilir.</li>
<li><strong>Sınırlı hediyeler</strong>, 24 Ekim 2024'te başlayan herkese açık @GiftChanges kaydından gelir. Daha önce satılan hediyelerin çıkış tarihi yoktur.</li>
<li>Dolar tahminleri (<code>*_usd_estimate</code>), <code>fx-rates.json</code> içindeki merkez bankası kurlarını kullanır, anlık kuru asla.</li>
</ul>`,
    citeHeading: "Nasıl kaynak gösterilir",
    citeIntro: "Gift Club'ı an ve bu sayfaya bağlantı ver. Basit bir örnek:",
    citeLink: (brand) => `Telegram fiyatları hakkında mı yazıyorsun? Buradaki rakamlar ${brand} rehberlerini de besliyor.`,
    faq: ({ F, n, money }) => [
      {
        q: "Bu resmî bir Telegram veri seti mi?",
        a: "Hayır. Gift Club, Telegram'ın herkese açık kaynaklarını (App Store, Fragment, Bot API ve herkese açık hediye kaydı) okur ve her rakamı tarihi ile kaynak bağlantısıyla kaydeder. Telegram böyle bir liste yayımlamaz.",
      },
      {
        q: "Verileri makalede, uygulamada ya da araştırmada kullanabilir miyim?",
        a: "Evet. Veriler CC BY 4.0 lisanslıdır: Gift Club'a atıf yapıp bu veri setine bağlantı verdiğin sürece ticari olanlar dahil her yerde kullanabilirsin.",
      },
      {
        q: "Bir Telegram Yıldızı kaç dolar?",
        a: `Fragment'te en az ${n(F.fragmentMin)} Yıldız olmak üzere her miktarda ${money(F.fragmentUsd, "USD")}; ABD App Store'da ${n(100)} Yıldızlık pakette yaklaşık ${money(F.us100 / 100, "USD")}. Bir kanalın kazandığı Yıldız ${money(F.earnedUsd, "USD")} olarak ödenir.`,
      },
      {
        q: "Ne sıklıkla güncelleniyor?",
        a: "Her tabloda okunduğu tarih yer alır. Bir fiyat ya da adet değiştiğinde satır kaynağından yeniden okunur ve tarih de onunla birlikte ilerler.",
      },
    ],
  },

  stars: {
    title: () => "Ülkelere göre Telegram Yıldız fiyatları: App Store (CSV)",
    description: ({ F, n, money }) =>
      `${n(F.storeCount)} App Store ülkesinde yerel para biriminde Telegram Yıldız paket fiyatları ve Fragment'in Yıldız başına sabit ${money(F.fragmentUsd, "USD")} fiyatı. CSV veya JSON olarak indir.`,
    h1: "Ülkelere göre Telegram Yıldız fiyatları",
    lead: ({ F, n }) => `Her ülkenin App Store'daki Telegram sayfasından okunan ${n(F.starsRows)} paket fiyatı, Fragment fiyatının yanında.`,
    keywords: ["Telegram Yıldız fiyatı", "ülkelere göre Telegram Yıldızları", "Fragment", "App Store", "CSV"],
    answer: ({ F, n, money }) =>
      `${n(1000)} Telegram Yıldızı Fragment'te <strong>${money(F.fragmentUsd * 1000, "USD")}</strong>, ABD App Store'da <strong>${money(F.us1000, "USD")}</strong>. Fragment, Yıldız başına sabit ${money(F.fragmentUsd, "USD")} alır; App Store paketlerine mağazanın payı dahildir.`,
    usHeading: "Amerika Birleşik Devletleri: App Store ve Fragment",
    usCaption: (d) => `ABD App Store paketleri ve Fragment'te aynı miktar, okuma tarihi: ${d}`,
    fragmentHeading: "Fragment'in sabit fiyatı",
    fragmentText: ({ F, n, money }) =>
      `Fragment, en az ${n(F.fragmentMin)} Yıldız olmak üzere her miktarı Yıldız başına ${money(F.fragmentUsd, "USD")} fiyatla satar; ödeme Gram (TON) ya da bir stablecoin ile yapılır. App Store yalnızca sabit paketler satar ve mağaza payını ekler, bu yüzden aynı Yıldızlar orada daha pahalıdır. Bir kanal ya da botun kazandığı Yıldız ${money(F.earnedUsd, "USD")} olarak çekilir; satın alınan Yıldızlar çekilemez.`,
    byCountryHeading: "Her ülkede App Store fiyatları",
    byCountryIntro: () =>
      "Apple her ülkede yalnızca en çok satın alınan on ögeyi listeler; bu yüzden tabloda eksik olan bir paket o ülkenin ilk onunda yer almamıştır. Fragment sütunu her yerde ABD dolarıdır.",
    caption: (country, d) => `${country}, App Store, okuma tarihi: ${d}`,
    cols: { stars: "Yıldız", price: "App Store fiyatı", perStar: "Yıldız başına", fragment: "Fragment (USD)", appStoreUs: "App Store (ABD)", saving: "Fragment tasarrufu" },
    faq: ({ F, money }) => [
      {
        q: "Telegram Yıldızları en ucuz nerede?",
        a: `Fragment'te: her ülkede Yıldız başına ${money(F.fragmentUsd, "USD")}. App Store ülkeleri arasında “Yıldız başına” sütununu karşılaştır: para birimleri arasında çok değişiyor.`,
      },
      {
        q: "App Store ve Google Play fiyatları neden Fragment'ten farklı?",
        a: "Uygulama mağazaları pay alır ve sabit paketler satar; Fragment, Telegram'ın kendi pazar yeridir ve her miktar için aynı fiyatı uygular. Google Play fiyat listesi yayımlamadığı için bu veri setinde yer almıyor.",
      },
      {
        q: "Bu fiyatlar döviz kuruyla mı çevrildi?",
        a: "Hayır. Her App Store fiyatı, mağazanın kendi para birimindeki kendi rakamıdır. Yalnızca Fragment sütunu dolar cinsindendir.",
      },
    ],
  },

  premium: {
    title: () => "Ülkelere göre Telegram Premium fiyatı: App Store (CSV)",
    description: ({ F, n }) =>
      `${n(F.premiumStores)} App Store ülkesinde aylık ve yıllık Telegram Premium fiyatları ile Fragment ve Yıldız cinsinden hediye fiyatları. CSV ve JSON, tarihli ve kaynaklı.`,
    h1: "Ülkelere göre Telegram Premium fiyatları",
    lead: ({ F, n }) => `Telegram Premium ${n(F.premiumStores)} App Store ülkesinde ne kadar, en ucuzdan başlayarak.`,
    keywords: ["Telegram Premium fiyatı", "ülkelere göre Telegram Premium", "App Store", "Fragment", "CSV"],
    answer: ({ F, n, money, region }) =>
      `Telegram Premium ABD App Store'da <strong>aylık ${money(F.premiumUs, "USD")}</strong>. En ucuz: ${region(F.premiumCheapest.store)}, ${F.premiumCheapest.monthly_as_printed} (yaklaşık ${money(F.premiumCheapest.monthly_usd_estimate, "USD")}). En pahalı: ${region(F.premiumDearest.store)}, ${F.premiumDearest.monthly_as_printed}. Hediye olarak 12 ay Fragment'te ${money(F.gift12.fragment_usd, "USD")} ya da ${n(F.gift12.telegram_stars)} Yıldız.`,
    tableHeading: "Her ülkede aylık ve yıllık fiyat",
    tableIntro: () =>
      "Fiyatlar, Apple'ın her ülkede gösterdiği hâliyle verilmiştir. Dolar sütunu, fiyatların okunduğu günün merkez bankası kuruyla yapılmış bir tahmindir; tire, planın o ülkenin listelenen on ögesi arasında olmadığı anlamına gelir.",
    caption: (d) => `App Store'da Telegram Premium, en ucuzdan başlayarak, okuma tarihi: ${d}`,
    giftHeading: "Premium hediye etmek: Fragment ve Yıldız",
    giftIntro: () =>
      "Premium, Fragment'ten hediye olarak alınabilir ya da Telegram içinde Yıldızla gönderilebilir. Yıldız fiyatlarını Telegram'ın Bot API'si belirler.",
    giftCaption: (d) => `Premium hediye fiyatları, okuma tarihi: ${d}`,
    cols: { country: "Ülke", monthly: "Aylık", annual: "Yıllık", prepaid: "3 ay (hediye)", usd: "Aylık (USD)", months: "Ay", fragmentUsd: "Fragment (USD)", fragmentGram: "Fragment (Gram)", stars: "Yıldız" },
    faq: ({ F, n, money, region }) => [
      {
        q: "Telegram Premium en ucuz hangi ülkede?",
        a: `Bu veri setindeki ülkeler arasında: ${region(F.premiumCheapest.store)}, aylık ${F.premiumCheapest.monthly_as_printed} (yaklaşık ${money(F.premiumCheapest.monthly_usd_estimate, "USD")}).`,
      },
      {
        q: "Premium hediyesi kaç Yıldız?",
        a: `3 ay için ${n(F.gift3.telegram_stars)} Yıldız, 12 ay için ${n(F.gift12.telegram_stars)} Yıldız; fiyatları Telegram belirler.`,
      },
      {
        q: "Neden Google Play sütunu yok?",
        a: "Google Play fiyatları yalnızca uygulamanın içinde, oturum açılmış bir cihazda gösterir; bu yüzden okunup kaynak gösterilebilecek herkese açık bir sayfa yok.",
      },
    ],
  },

  collections: {
    title: () => "Telegram hediye koleksiyonları: her NFT hediyenin adedi (CSV)",
    description: ({ F, n }) =>
      `Telegram'ın tüm ${n(F.collectionCount)} koleksiyon hediye koleksiyonu basım adedine göre sıralı, toplam ${n(F.totalIssued)} parça; ayrıca ${n(F.regularCount)} normal hediye, kimlikleri ve Yıldız fiyatlarıyla.`,
    h1: "Basım adedine göre Telegram hediye koleksiyonları",
    lead: ({ F, n }) => `Fragment'teki her koleksiyon (yükseltilmiş) hediye koleksiyonu, en az basılandan başlayarak: ${n(F.collectionCount)} koleksiyon.`,
    keywords: ["Telegram NFT hediyeleri", "Telegram koleksiyon hediyeleri", "hediye basım adedi", "Fragment", "CSV"],
    answer: ({ F, n }) =>
      `En nadir Telegram hediye koleksiyonu <strong>${F.rarest.name}</strong>; ${n(F.rarest.issued)} parça basıldı. ${n(F.collectionCount)} koleksiyonun tamamında ${n(F.totalIssued)} koleksiyon hediye var.`,
    tableHeading: "Her koleksiyon, en az basılandan başlayarak",
    tableIntro: () =>
      "Basım adedi, bir koleksiyonda okuma günü mevcut olan parça sayısıdır. Hâlâ artabilir; bu yüzden üst sınır değil, okuma olarak değerlendir.",
    caption: (d) => `Fragment'teki koleksiyon hediye koleksiyonları, okuma tarihi: ${d}`,
    regularHeading: "Normal hediyeler ve kimlikleri",
    regularIntro: ({ F, n }) =>
      `Bir botun Bot API'nin <code>sendGift</code> yöntemiyle gönderebildiği ${n(F.regularCount)} normal hediye; fiyatları ${n(F.regularMin)} ile ${n(F.regularMax)} Yıldız arasında.`,
    regularCaption: "Normal Telegram hediyeleri",
    cols: { rank: "#", name: "Koleksiyon", issued: "Basım", giftId: "Hediye kimliği", stars: "Yıldız" },
    faq: ({ F, n }) => [
      {
        q: "En nadir Telegram hediyesi hangisi?",
        a: `Basım adedine göre ${F.rarest.name} (${n(F.rarest.issued)} parça). Bir koleksiyon içindeki nadirlik, hediyenin yükseltilirken aldığı modele, arka plana ve sembole de bağlıdır.`,
      },
      {
        q: "Kaç Telegram NFT hediyesi var?",
        a: `Okuma günü ${n(F.collectionCount)} koleksiyonda toplam ${n(F.totalIssued)}.`,
      },
      {
        q: "Adetler nereden geliyor?",
        a: "Telegram'ın kendi pazar yeri Fragment'ten; her koleksiyonun sayfasında basım adedi gösterilir.",
      },
    ],
  },

  limited: {
    title: () => "Telegram sınırlı hediyeler listesi: tarih, fiyat, adet (CSV)",
    description: ({ F, n }) =>
      `Herkese açık hediye kaydından ${n(F.limitedCount)} Telegram sınırlı ve sezonluk hediyesi: çıkış tarihi, Yıldız fiyatı ve basım sınırı. CSV veya JSON olarak indir.`,
    h1: "Telegram sınırlı ve sezonluk hediyeleri",
    lead: ({ F, n }) => `En yeniden başlayarak ${n(F.limitedCount)} sınırlı hediye; çıkış tarihi ve kaç tane üretildiği ile.`,
    keywords: ["Telegram sınırlı hediyeler", "Telegram sezonluk hediyeler", "hediye basım adedi", "Telegram Yıldızları", "CSV"],
    answer: ({ F, n, date }) =>
      `Telegram <strong>${n(F.limitedCount)} sınırlı ve sezonluk hediye</strong> çıkardı; bunların ${n(F.cappedCount)} tanesinin basım sınırı vardı. En küçük sınır ${F.smallestCapped.name} hediyesindeydi (${n(F.smallestCapped.supply)}). Bu veri setindeki son çıkış tarihi: ${date(F.lastRelease)}.`,
    tableHeading: "Her sınırlı hediye, en yeniden başlayarak",
    tableIntro: () =>
      "Yıldız, çıkıştaki fiyattır (müzayedede asgari tekliftir). Adet sütunundaki tire, kayıtta sınır belirtilmediği anlamına gelir; genellikle sezonluk hediyelerde olur.",
    caption: (d) => `Telegram sınırlı hediyeleri, okuma tarihi: ${d}`,
    beforeLog: "24 Eki 2024 öncesi",
    premiumOnly: "Yalnızca Premium",
    auction: "müzayede",
    sourceNote:
      "Kaynak: herkese açık @GiftChanges kaydı (t.me/GiftChanges). Hediye adları Telegram'a aittir ve her dilde İngilizce kalır.",
    cols: { name: "Hediye", released: "Çıkış", stars: "Yıldız", supply: "Adet", notes: "Notlar" },
    faq: ({ F, n }) => [
      {
        q: "Telegram'da sınırlı hediye nedir?",
        a: "Telegram'ın kısa süreliğine ya da sabit sayıda sattığı hediye. Tükendikten sonra yalnızca başka bir kullanıcıdan alınabilir; çoğu koleksiyon hediyeye yükseltilebilir.",
      },
      {
        q: "Hangi sınırlı hediyenin adedi en azdı?",
        a: `${F.smallestCapped.name}; ${n(F.smallestCapped.supply)} adet üretildi.`,
      },
      {
        q: "Bazı hediyelerin neden çıkış tarihi yok?",
        a: "Herkese açık kayıt 24 Ekim 2024'te başladı. O günden önce satışta olan hediyeler tarihsiz listelenir.",
      },
    ],
  },
};
