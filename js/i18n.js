// UI strings in three languages + a tiny translation engine.
// Markup hooks:
//   data-i18n="key"            -> textContent
//   data-i18n-html="key"       -> innerHTML (only our own strings, e.g. with <br>)
//   data-i18n-attr="attr:key;attr2:key2"
// <body data-title="key" data-desc="key"> sets <title> and meta description.
const STRINGS = {
  ru: {
    "meta.title": "Зелёный офис — озеленение офисных помещений",
    "meta.desc": "Озеленение офисов под ключ: живые растения, фитостены и уход. 10 лет на рынке, 500+ проектов.",
    "meta.cartTitle": "Корзина — Зелёный офис",

    "nav.about": "О нас",
    "nav.why": "Почему мы",
    "nav.catalog": "Каталог",
    "nav.contacts": "Контакты",
    "header.region": "Эстония",
    "header.cart": "Корзина",
    "header.lang": "Язык",
    "brand": "Зелёный офис",
    "menu.open": "Открыть меню",
    "menu.close": "Закрыть меню",

    "hero.title": "Озеленение офисных помещений",
    "hero.text": "Создайте уютное рабочее пространство <br>с помощью нашего зеленого декора",
    "hero.cta": "Открыть каталог",
    "hero.alt": "Цветущий кактус в белом кашпо",

    "about.title": "Превращаем офисы в комфортные зоны для работы",
    "about.lead": "Даже деловая среда должна быть приятной, поэтому мы создаем уникальные проекты, которые способствуют продуктивной работе ваших сотрудников",
    "about.videoAlt": "Офис с фитостеной из живых растений",
    "about.play": "Смотреть видео",
    "stats.years": "лет",
    "stats.market": "на рынке",
    "stats.projects": "выполненных<br>проектов",
    "stats.clients": "довольных<br>клиентов",

    "why.title": "4 причины, почему с нами удобно<br>и надежно работать",
    "why.1.title": "Качество",
    "why.1.text": "Используем только лучшие растения, которые сохраняют свой вид на протяжении долгих лет",
    "why.2.title": "Скорость",
    "why.2.text": "Ценим ваше время и гарантируем быстрый результат, сохранив при этом высокое качество",
    "why.3.title": "Разнообразие",
    "why.3.text": "Предлагаем широкий выбор оформления с учетом ваших пожеланий и бюджета",
    "why.4.title": "Доступность",
    "why.4.text": "Готовы реализовать проект любой сложности в любом уголке страны",

    "catalog.eyebrow": "Каталог",
    "catalog.title": "Популярные растения",
    "catalog.text": "Хиты для офиса: неприхотливые, эффектные и проверенные в работе.<br>Добавьте понравившиеся в корзину — подберем кашпо и рассчитаем проект.",
    "filter.label": "Фильтр растений",
    "filter.all": "Все",
    "filter.easy": "Неприхотливые",
    "filter.shade": "Для тени",
    "filter.big": "Крупные",
    "badge.hit": "Хит",
    "badge.new": "Новинка",
    "badge.air": "Очищает воздух",
    "card.more": "Подробнее",
    "card.add": "Добавить в корзину: {name}",
    "card.open": "Подробнее: {name}",
    "plant.alt": "{name} в кашпо",
    "unit.cm": "см",

    "contact.title": "Обсудим детали проекта?",
    "contact.sub": "Свяжитесь с нами",
    "contact.toCart": "Перейти в корзину →",
    "form.name": "Имя",
    "form.phone": "Телефон",
    "form.email": "E-mail",
    "form.company": "Компания (необязательно)",
    "form.address": "Адрес доставки",
    "form.comment": "Комментарий",
    "form.send": "Отправить",
    "form.consent": "Нажимая на кнопку, я даю согласие на обработку данных",
    "form.error": "Проверьте имя и номер телефона",
    "form.ok": "Спасибо! Мы свяжемся с вами в ближайшее время.",

    "footer.about": "О нас",
    "footer.assortment": "Ассортимент",
    "footer.order": "Заказать",
    "footer.contacts": "Контакты",

    "pd.close": "Закрыть",
    "pd.prev": "Предыдущее растение",
    "pd.next": "Следующее растение",
    "care.light": "Свет",
    "care.water": "Полив",
    "care.height": "Высота",
    "care.level": "Уход",
    "pd.included": "В цену входят кашпо, дренаж и доставка по Эстонии. Первый месяц консультируем по уходу бесплатно.",
    "qty.label": "Количество",
    "qty.less": "Меньше",
    "qty.more": "Больше",
    "pd.buy": "В корзину",
    "pd.update": "Обновить корзину",
    "pd.order": "Оформить заказ →",
    "pd.inCart": "В корзине: {n} шт.",
    "pd.remove": "Убрать",

    "toast.added": "{name} — добавлено в корзину",
    "toast.removed": "{name} — удалено из корзины",
    "toast.qty": "{name} × {n} — в корзине",
    "toast.video": "Видео о наших проектах скоро появится",
    "toast.region": "Работаем по всей Эстонии",
    "summary.total": "Итого",

    "cart.title": "Корзина",
    "cart.back": "← Продолжить покупки",
    "cart.count": "Товаров: {n}",
    "cart.each": "{price} / шт.",
    "cart.remove": "Удалить: {name}",
    "cart.summary": "Ваш заказ",
    "cart.net": "Сумма без НДС",
    "cart.vat": "НДС 24%",
    "cart.delivery": "Доставка по Эстонии",
    "cart.free": "Бесплатно",
    "cart.total": "Итого с НДС",
    "cart.checkout": "Данные для заказа",
    "cart.submit": "Оформить заказ",
    "cart.error": "Заполните имя, телефон и адрес доставки",
    "cart.emailError": "Проверьте e-mail",
    "cart.empty.title": "Корзина пуста",
    "cart.empty.text": "Загляните в каталог — там самые популярные растения для офиса.",
    "cart.empty.cta": "Открыть каталог",
    "cart.done.title": "Спасибо за заказ!",
    "cart.done.text": "Заказ № {n} принят. Мы позвоним в течение рабочего дня, чтобы подтвердить детали и время доставки.",
    "cart.done.cta": "Вернуться на главную",
    "cart.suggest": "Вам может понравиться",
    "cart.addShort": "В корзину",
  },

  et: {
    "meta.title": "Roheline kontor — kontoriruumide haljastus",
    "meta.desc": "Kontorite haljastus võtmed kätte: elustaimed, rohelised seinad ja hooldus. 10 aastat turul, üle 500 projekti.",
    "meta.cartTitle": "Ostukorv — Roheline kontor",

    "nav.about": "Meist",
    "nav.why": "Miks meie",
    "nav.catalog": "Kataloog",
    "nav.contacts": "Kontakt",
    "header.region": "Eesti",
    "header.cart": "Ostukorv",
    "header.lang": "Keel",
    "brand": "Roheline kontor",
    "menu.open": "Ava menüü",
    "menu.close": "Sulge menüü",

    "hero.title": "Kontoriruumide haljastus",
    "hero.text": "Looge hubane tööruum <br>meie rohelise sisekujundusega",
    "hero.cta": "Ava kataloog",
    "hero.alt": "Õitsev kaktus valges potis",

    "about.title": "Muudame kontorid mugavaks töökeskkonnaks",
    "about.lead": "Ka töökeskkond peab olema meeldiv – seepärast loome unikaalseid lahendusi, mis toetavad teie töötajate produktiivsust",
    "about.videoAlt": "Kontor elustaimedest rohelise seinaga",
    "about.play": "Vaata videot",
    "stats.years": "aastat",
    "stats.market": "turul",
    "stats.projects": "teostatud<br>projekti",
    "stats.clients": "rahulolevaid<br>kliente",

    "why.title": "4 põhjust, miks meiega on<br>mugav ja kindel koostööd teha",
    "why.1.title": "Kvaliteet",
    "why.1.text": "Kasutame ainult parimaid taimi, mis säilitavad oma ilu pikkadeks aastateks",
    "why.2.title": "Kiirus",
    "why.2.text": "Hindame teie aega ja tagame kiire tulemuse ilma kvaliteedis järeleandmisi tegemata",
    "why.3.title": "Valikurikkus",
    "why.3.text": "Pakume laia valikut lahendusi vastavalt teie soovidele ja eelarvele",
    "why.4.title": "Kättesaadavus",
    "why.4.text": "Teostame igas keerukuses projekte üle kogu Eesti",

    "catalog.eyebrow": "Kataloog",
    "catalog.title": "Populaarsed taimed",
    "catalog.text": "Kontori lemmikud: vähenõudlikud, efektsed ja ajaproovile vastu pidanud.<br>Lisage meeldivad taimed ostukorvi – valime potid ja arvutame projekti hinna.",
    "filter.label": "Taimede filter",
    "filter.all": "Kõik",
    "filter.easy": "Vähenõudlikud",
    "filter.shade": "Varjutaluvad",
    "filter.big": "Suured",
    "badge.hit": "Hitt",
    "badge.new": "Uudis",
    "badge.air": "Puhastab õhku",
    "card.more": "Lähemalt",
    "card.add": "Lisa ostukorvi: {name}",
    "card.open": "Lähemalt: {name}",
    "plant.alt": "{name} potis",
    "unit.cm": "cm",

    "contact.title": "Arutame projekti detaile?",
    "contact.sub": "Võtke meiega ühendust",
    "contact.toCart": "Mine ostukorvi →",
    "form.name": "Nimi",
    "form.phone": "Telefon",
    "form.email": "E-post",
    "form.company": "Ettevõte (valikuline)",
    "form.address": "Tarneaadress",
    "form.comment": "Kommentaar",
    "form.send": "Saada",
    "form.consent": "Nupule vajutades nõustun isikuandmete töötlemisega",
    "form.error": "Kontrollige nime ja telefoninumbrit",
    "form.ok": "Aitäh! Võtame teiega peagi ühendust.",

    "footer.about": "Meist",
    "footer.assortment": "Tootevalik",
    "footer.order": "Telli",
    "footer.contacts": "Kontakt",

    "pd.close": "Sulge",
    "pd.prev": "Eelmine taim",
    "pd.next": "Järgmine taim",
    "care.light": "Valgus",
    "care.water": "Kastmine",
    "care.height": "Kõrgus",
    "care.level": "Hooldus",
    "pd.included": "Hinna sees on pott, drenaaž ja transport üle Eesti. Esimesel kuul nõustame hoolduse osas tasuta.",
    "qty.label": "Kogus",
    "qty.less": "Vähem",
    "qty.more": "Rohkem",
    "pd.buy": "Lisa ostukorvi",
    "pd.update": "Uuenda ostukorvi",
    "pd.order": "Vormista tellimus →",
    "pd.inCart": "Ostukorvis: {n} tk",
    "pd.remove": "Eemalda",

    "toast.added": "{name} lisati ostukorvi",
    "toast.removed": "{name} eemaldati ostukorvist",
    "toast.qty": "{name} × {n} on ostukorvis",
    "toast.video": "Video meie projektidest ilmub peagi",
    "toast.region": "Töötame üle kogu Eesti",
    "summary.total": "Kokku",

    "cart.title": "Ostukorv",
    "cart.back": "← Jätka ostlemist",
    "cart.count": "Tooteid: {n}",
    "cart.each": "{price} / tk",
    "cart.remove": "Eemalda: {name}",
    "cart.summary": "Teie tellimus",
    "cart.net": "Summa ilma käibemaksuta",
    "cart.vat": "Käibemaks 24%",
    "cart.delivery": "Transport üle Eesti",
    "cart.free": "Tasuta",
    "cart.total": "Kokku koos käibemaksuga",
    "cart.checkout": "Tellija andmed",
    "cart.submit": "Vormista tellimus",
    "cart.error": "Täitke nimi, telefon ja tarneaadress",
    "cart.emailError": "Kontrollige e-posti aadressi",
    "cart.empty.title": "Ostukorv on tühi",
    "cart.empty.text": "Vaadake kataloogi – seal on kontori populaarseimad taimed.",
    "cart.empty.cta": "Ava kataloog",
    "cart.done.title": "Täname tellimuse eest!",
    "cart.done.text": "Tellimus nr {n} on vastu võetud. Helistame tööpäeva jooksul, et kinnitada detailid ja tarneaeg.",
    "cart.done.cta": "Tagasi avalehele",
    "cart.suggest": "Võib-olla meeldib teile ka",
    "cart.addShort": "Ostukorvi",
  },

  en: {
    "meta.title": "Green Office — office greening and plant design",
    "meta.desc": "Turnkey office greening: live plants, green walls and care. 10 years on the market, 500+ projects.",
    "meta.cartTitle": "Cart — Green Office",

    "nav.about": "About",
    "nav.why": "Why us",
    "nav.catalog": "Catalog",
    "nav.contacts": "Contacts",
    "header.region": "Estonia",
    "header.cart": "Cart",
    "header.lang": "Language",
    "brand": "Green Office",
    "menu.open": "Open menu",
    "menu.close": "Close menu",

    "hero.title": "Greenery for modern offices",
    "hero.text": "Create a cosy workspace <br>with our green décor",
    "hero.cta": "Open catalog",
    "hero.alt": "Flowering cactus in a white pot",

    "about.title": "We turn offices into comfortable places to work",
    "about.lead": "Even a business environment should feel pleasant, so we create unique projects that help your team stay productive",
    "about.videoAlt": "Office with a living green wall",
    "about.play": "Watch video",
    "stats.years": "years",
    "stats.market": "on the market",
    "stats.projects": "completed<br>projects",
    "stats.clients": "happy<br>clients",

    "why.title": "4 reasons why we’re easy<br>and reliable to work with",
    "why.1.title": "Quality",
    "why.1.text": "We use only the best plants, which keep their look for many years",
    "why.2.title": "Speed",
    "why.2.text": "We value your time and deliver fast without compromising on quality",
    "why.3.title": "Variety",
    "why.3.text": "A wide choice of designs to match your wishes and budget",
    "why.4.title": "Availability",
    "why.4.text": "We deliver projects of any complexity anywhere in the country",

    "catalog.eyebrow": "Catalog",
    "catalog.title": "Popular plants",
    "catalog.text": "Office favourites: low-maintenance, striking and proven.<br>Add the ones you like to the cart — we’ll pick pots and price your project.",
    "filter.label": "Plant filter",
    "filter.all": "All",
    "filter.easy": "Low-maintenance",
    "filter.shade": "For shade",
    "filter.big": "Large",
    "badge.hit": "Bestseller",
    "badge.new": "New",
    "badge.air": "Purifies air",
    "card.more": "Details",
    "card.add": "Add to cart: {name}",
    "card.open": "Details: {name}",
    "plant.alt": "{name} in a pot",
    "unit.cm": "cm",

    "contact.title": "Shall we discuss your project?",
    "contact.sub": "Get in touch",
    "contact.toCart": "Go to cart →",
    "form.name": "Name",
    "form.phone": "Phone",
    "form.email": "Email",
    "form.company": "Company (optional)",
    "form.address": "Delivery address",
    "form.comment": "Comment",
    "form.send": "Send",
    "form.consent": "By clicking the button, I agree to the processing of my data",
    "form.error": "Please check your name and phone number",
    "form.ok": "Thank you! We’ll get back to you shortly.",

    "footer.about": "About",
    "footer.assortment": "Assortment",
    "footer.order": "Order",
    "footer.contacts": "Contacts",

    "pd.close": "Close",
    "pd.prev": "Previous plant",
    "pd.next": "Next plant",
    "care.light": "Light",
    "care.water": "Watering",
    "care.height": "Height",
    "care.level": "Care",
    "pd.included": "The price includes a pot, drainage and delivery across Estonia. Free care advice for the first month.",
    "qty.label": "Quantity",
    "qty.less": "Less",
    "qty.more": "More",
    "pd.buy": "Add to cart",
    "pd.update": "Update cart",
    "pd.order": "Checkout →",
    "pd.inCart": "In cart: {n}",
    "pd.remove": "Remove",

    "toast.added": "{name} added to cart",
    "toast.removed": "{name} removed from cart",
    "toast.qty": "{name} × {n} in cart",
    "toast.video": "A video about our projects is coming soon",
    "toast.region": "We work all over Estonia",
    "summary.total": "Total",

    "cart.title": "Cart",
    "cart.back": "← Continue shopping",
    "cart.count": "Items: {n}",
    "cart.each": "{price} each",
    "cart.remove": "Remove: {name}",
    "cart.summary": "Your order",
    "cart.net": "Subtotal excl. VAT",
    "cart.vat": "VAT 24%",
    "cart.delivery": "Delivery in Estonia",
    "cart.free": "Free",
    "cart.total": "Total incl. VAT",
    "cart.checkout": "Your details",
    "cart.submit": "Place order",
    "cart.error": "Please fill in your name, phone and delivery address",
    "cart.emailError": "Please check your email",
    "cart.empty.title": "Your cart is empty",
    "cart.empty.text": "Browse the catalog for the most popular office plants.",
    "cart.empty.cta": "Open catalog",
    "cart.done.title": "Thank you for your order!",
    "cart.done.text": "Order No. {n} has been received. We’ll call you within one business day to confirm the details and delivery time.",
    "cart.done.cta": "Back to home",
    "cart.suggest": "You may also like",
    "cart.addShort": "Add",
  },
};

const LANGS = ["en", "et", "ru"]; // English first: it is the default language
const LOCALES = { et: "et-EE", ru: "ru-RU", en: "en-IE" };
const LANG_KEY = "greenoffice.lang";

let lang = detectLang();

function detectLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (LANGS.includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {}
  // no browser-language guessing: the site always opens in English until the visitor picks another language
  return "en";
}

function t(key, vars) {
  let s = STRINGS[lang][key] ?? STRINGS.en[key] ?? key;
  if (vars) s = s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");
  return s;
}

// Localized plant fields (name, about, light, water, level)
const pt = (plant) => plant.text[lang];

const formatPrice = (n) =>
  new Intl.NumberFormat(LOCALES[lang], { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(n);

// Always with cents: used for the VAT breakdown in the cart
const formatMoney = (n) =>
  new Intl.NumberFormat(LOCALES[lang], { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

function applyI18n(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  root.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
  root.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      el.setAttribute(attr, t(key));
    });
  });
  document.documentElement.lang = lang;
  if (document.body.dataset.title) document.title = t(document.body.dataset.title);
  const desc = document.querySelector('meta[name="description"]');
  if (desc && document.body.dataset.desc) desc.content = t(document.body.dataset.desc);
  document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
}

function setLang(next) {
  if (!LANGS.includes(next) || next === lang) return;
  lang = next;
  try { localStorage.setItem(LANG_KEY, lang); } catch {}
  applyI18n();
  document.dispatchEvent(new CustomEvent("langchange"));
}
