// Catalog data shared by the home page and the cart page.
// Studio photos on a green backdrop live in img/plants/*.webp;
// `floor` is the colour of each photo's bottom edge, so captions blend into it.
// Per-language texts live in `text[lang]`; badges are keys into STRINGS ("badge.*").
const PLANTS = [
  {
    id: "monstera", latin: "Monstera deliciosa", price: 49, img: "img/plants/monstera.webp", floor: "#05301e",
    tags: ["big"], badge: "hit", height: "60–80",
    text: {
      ru: {
        name: "Монстера",
        about: "Крупная тропическая лиана с резными листьями. Быстро растёт и создаёт эффект «джунглей» в лобби, зонах отдыха и open space.",
        light: "Яркий рассеянный", water: "Раз в 7–10 дней", level: "Средний",
      },
      et: {
        name: "Monstera",
        about: "Suur troopiline liaan lõhestunud lehtedega. Kasvab kiiresti ja loob fuajees, puhkealas ja avatud kontoris „džungli“ tunde.",
        light: "Ere hajus valgus", water: "Iga 7–10 päeva järel", level: "Keskmine",
      },
      en: {
        name: "Monstera",
        about: "A large tropical climber with split leaves. Grows fast and brings a “jungle” feel to lobbies, lounges and open-plan offices.",
        light: "Bright indirect", water: "Every 7–10 days", level: "Medium",
      },
    },
  },
  {
    id: "ficus", latin: "Ficus elastica", price: 59, img: "img/plants/ficus.webp", floor: "#0d472f",
    tags: ["big", "easy"], height: "80–100",
    text: {
      ru: {
        name: "Фикус каучуконосный",
        about: "Плотные глянцевые листья и строгий силуэт — отлично смотрится в переговорных и рядом с рабочими местами. Неприхотлив и хорошо очищает воздух.",
        light: "Рассеянный, полутень", water: "Раз в 7–10 дней", level: "Лёгкий",
      },
      et: {
        name: "Kummifiikus",
        about: "Tihedad läikivad lehed ja range siluett – sobib suurepäraselt nõupidamisruumidesse ja töökohtade juurde. Vähenõudlik ja puhastab hästi õhku.",
        light: "Hajus valgus, poolvari", water: "Iga 7–10 päeva järel", level: "Lihtne",
      },
      en: {
        name: "Rubber plant",
        about: "Dense glossy leaves and a clean silhouette — great for meeting rooms and next to desks. Undemanding and good at purifying the air.",
        light: "Indirect light, partial shade", water: "Every 7–10 days", level: "Easy",
      },
    },
  },
  {
    id: "calathea", latin: "Calathea rufibarba", price: 35, img: "img/plants/calathea.webp", floor: "#0e442c",
    tags: ["shade"], badge: "new", height: "50–60",
    text: {
      ru: {
        name: "Калатея",
        about: "Волнистые листья с бордовой изнанкой — яркий акцент для ресепшена. Любит влажный воздух, а вечером приподнимает и складывает листья.",
        light: "Полутень", water: "Раз в 5–7 дней", level: "Средний",
      },
      et: {
        name: "Kalatea",
        about: "Lainjad lehed bordoopunase alaküljega – värvikas aktsent vastuvõttu. Armastab niisket õhku ning tõstab õhtuti lehed üles ja voldib kokku.",
        light: "Poolvari", water: "Iga 5–7 päeva järel", level: "Keskmine",
      },
      en: {
        name: "Calathea",
        about: "Wavy leaves with burgundy undersides — a vivid accent for reception. Loves humid air and lifts and folds its leaves in the evening.",
        light: "Partial shade", water: "Every 5–7 days", level: "Medium",
      },
    },
  },
  {
    id: "sansevieria", latin: "Sansevieria trifasciata", price: 29, img: "img/plants/sansevieria.webp", floor: "#073220",
    tags: ["easy", "shade"], badge: "air", height: "40–50",
    text: {
      ru: {
        name: "Сансевиерия",
        about: "Почти неубиваемое растение: переносит тень, сухой воздух от кондиционеров и забытый полив. Идеальна для офисов без постоянного ухода.",
        light: "Любой, от тени до солнца", water: "Раз в 2–3 недели", level: "Очень лёгкий",
      },
      et: {
        name: "Sansevieeria",
        about: "Peaaegu hävimatu taim: talub varju, konditsioneeride kuiva õhku ja unustatud kastmist. Ideaalne kontoritesse, kus pidevat hooldust pole.",
        light: "Igasugune, varjust päikeseni", water: "Iga 2–3 nädala järel", level: "Väga lihtne",
      },
      en: {
        name: "Snake plant",
        about: "Practically indestructible: tolerates shade, dry air from air conditioning and forgotten watering. Ideal for offices without regular care.",
        light: "Any, from shade to sun", water: "Every 2–3 weeks", level: "Very easy",
      },
    },
  },
  {
    id: "aloe", latin: "Aloe juvenna", price: 15, img: "img/plants/aloe.webp", floor: "#062d1c",
    tags: ["easy"], height: "15–20",
    text: {
      ru: {
        name: "Алоэ",
        about: "Компактный суккулент для рабочего стола или подоконника. Запасает воду в листьях, поэтому спокойно переживёт отпуск владельца.",
        light: "Яркий, солнце", water: "Раз в 2–3 недели", level: "Очень лёгкий",
      },
      et: {
        name: "Aaloe",
        about: "Kompaktne sukulent töölauale või aknalauale. Talletab lehtedesse vett, nii et elab omaniku puhkuse rahulikult üle.",
        light: "Ere, päike", water: "Iga 2–3 nädala järel", level: "Väga lihtne",
      },
      en: {
        name: "Aloe",
        about: "A compact succulent for a desk or windowsill. Stores water in its leaves, so it easily survives its owner’s holiday.",
        light: "Bright, sun", water: "Every 2–3 weeks", level: "Very easy",
      },
    },
  },
  {
    id: "grass", latin: "Carex", price: 19, img: "img/plants/grass.webp", floor: "#042d1b",
    tags: ["easy", "shade"], height: "30–35",
    text: {
      ru: {
        name: "Декоративный злак",
        about: "Пушистая «шапка» узких полосатых листьев. Мягкий природный акцент для стеллажей, стоек ресепшена и столов в переговорных.",
        light: "Яркий рассеянный", water: "Раз в 5–7 дней", level: "Лёгкий",
      },
      et: {
        name: "Dekoratiiv­kõrreline", // soft hyphen: breaks as Dekoratiiv-/kõrreline on narrow cards
        about: "Kohev kitsaste triibuliste lehtede puhmas. Pehme looduslik aktsent riiulitele, vastuvõtuletile ja nõupidamislaudadele.",
        light: "Ere hajus valgus", water: "Iga 5–7 päeva järel", level: "Lihtne",
      },
      en: {
        name: "Ornamental grass",
        about: "A fluffy tuft of narrow striped leaves. A soft natural accent for shelves, reception desks and meeting tables.",
        light: "Bright indirect", water: "Every 5–7 days", level: "Easy",
      },
    },
  },
  {
    id: "gasteria", latin: "Gasteria carinata", price: 16, img: "img/plants/gasteria.webp", floor: "#04301f",
    tags: ["easy"], height: "10–15",
    text: {
      ru: {
        name: "Гастерия",
        about: "Медленнорастущий суккулент с плотными пятнистыми листьями. Долго сохраняет форму и подходит для небольших рабочих мест.",
        light: "Рассеянный, полутень", water: "Раз в 2–3 недели", level: "Очень лёгкий",
      },
      et: {
        name: "Gasteeria",
        about: "Aeglaselt kasvav sukulent tihedate täpiliste lehtedega. Hoiab kaua oma kuju ja sobib väikestele töökohtadele.",
        light: "Hajus valgus, poolvari", water: "Iga 2–3 nädala järel", level: "Väga lihtne",
      },
      en: {
        name: "Gasteria",
        about: "A slow-growing succulent with thick spotted leaves. Keeps its shape for a long time and suits small workspaces.",
        light: "Indirect light, partial shade", water: "Every 2–3 weeks", level: "Very easy",
      },
    },
  },
];

const plantById = (id) => PLANTS.find((p) => p.id === id);
