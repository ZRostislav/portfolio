const base = import.meta.env.BASE_URL;
function asset(path) {
  return `${base}${path.replace(/^\//, "")}`;
}

export const profile = {
  name: "Rostislav Zaluzhets",
  role: "WEB-разработчик, 20 лет.",
  location: "Бендеры, Молдова [ПМР]",
  tagline:
    "Я позиционирую себя как Frontend-разработчик и активно развиваюсь в Backend. Выпускник специальности «Информационные системы и программирование» с четырехлетним опытом обучения. С детства увлечен технологиями: создавал игры на Construct 1/2, владею пиксель-артом, а также имею большой опыт работы в Photoshop и программах для видеомонтажа. Очень люблю компьютеры 🙃",
  avatar: asset("images/avatar.jpg"),
  resumeUrl: asset("resume"),
};

export const about = {
  stats: [
    { value: "2+", label: "года опыта работы" },
    { value: "41+", label: "завершённых проектов" },
    { value: "1", label: "коммерческий проект" },
  ],
};

export const achievements = [
  {
    title:
      "Сертификация о прохождении тренинга «Школа Видео» - Алексей Радонец",
    description:
      "Прошел 6-дневный тренинг по созданию продающих видеопрезентаций в программе Vegas Pro и успешно выполнил все практические задания.",
    year: "2020",
  },
  {
    title: "Сертификат участника марафона «5 дней — 5 проектов на JavaScript»",
    description:
      "Result School, 5 дней интенсивного обучения с практическими заданиями и созданием 5 проектов на JavaScript.",
    year: "2023",
  },
  {
    title:
      "Сертификат участника видеороликов и анимаций «БЕНДЕРЫ - ЧИСТЫЙ ГОРОД!»",
    description:
      "Участие в создании видеороликов и анимационных фильмов, посвященных теме чистоты и экологии в городе Бендеры.",
    year: "2019",
  },
];

export const skills = [
  { name: "HTML", level: 100 },
  { name: "CSS/SCSS", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "SQL", level: 80 },
  { name: "Delphi/Pascal", level: 70 },
  { name: "Lua", level: 70 },
  { name: "TypeScript", level: 65 },
  { name: "Tailwind CSS", level: 60 },
  { name: "Bootstrap", level: 50 },
  { name: "PhaserJS", level: 55 },
  { name: "Angular", level: 50 },
  { name: "Python", level: 50 },
  { name: "Node.js", level: 45 },
  { name: "C#", level: 40 },
  { name: "PHP", level: 40 },
  { name: "React", level: 35 },
  { name: "Vite", level: 25 },
  { name: "Java", level: 25 },
  { name: "Astro", level: 20 },
];

export const stack = {
  languages: [
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "SCSS",
    "Python",
    "C#",
    "Java",
    "SQL",
    "Delphi/Pascal",
    "Lua",
    "PHP",
  ],
  frameworks: [
    "React",
    "Angular",
    "Astro",
    "Tailwind CSS",
    "Bootstrap",
    "PhaserJS",
    "Node.js",
    "Express",
    "Lucide Icons",
  ],
  tools: [
    "Git / GitHub",
    "Figma",
    "VS Code",
    "Vite",
    "Docker",
    "Node.js",
    "PostgreSQL",
    "Adobe Photoshop",
    "Vegas Pro",
    "Construct 1/2/3",
    "FreeCAD",
    "Unreal Engine 4",
    "PhaserJS",
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "Adobe Illustrator",
    "Postman",
    "Milanote",
    "Aseprite",
    "MySQL",
    "OBS Studio",
    "КОМПАС-3D",
    "Office",
    "DaVinci Resolve",
    "SerpApi",
  ],
};

export const projects = [
  {
    title: "GreenFind",
    description:
      "Дипломный проект. Поисковик, который почти ни в чём не уступает Google. Имеется отслеживание данных пользователей, голосовой ввод. Главная фишка — это фильтрация поиска.",
    image: asset("images/projects/project-7.webp"),
    tags: [
      "TypeScript",
      "HTML",
      "CSS",
      "MySQL",
      "Node.js",
      "Tailwind CSS",
      "Angular",
      "Express",
      "SerpApi",
    ],
    repoUrl: "https://github.com/ZRostislav/greenfind",
    liveUrl: "https://greenfind.vercel.app/",
  },
  {
    title: "Pint",
    description:
      "Первый большой проект для поступления в университет. Присутствует регистрация, БД и простые статичные данные. Сайт.",
    image: asset("images/projects/project-4.webp"),
    tags: ["JavaScript", "HTML", "CSS", "PHP"],
    repoUrl: "https://github.com/ZRostislav/Pint",
  },
  {
    title: "Camp",
    description:
      "Сайт менеджмента для лагеря. Один из моих лучших проектов. Тестовые данные: логин — testadmin, пароль — 1111.",
    image: asset("images/projects/project-8.webp"),
    tags: [
      "TypeScript",
      "HTML",
      "CSS",
      "PostgreSQL",
      "Node.js",
      "Tailwind CSS",
      "Angular",
      "Express",
    ],
    repoUrl: "https://github.com/ZRostislav/camp-frontend",
    liveUrl: "https://camp-frontend-tau.vercel.app/login",
  },
  {
    title: "AstroFacts",
    description:
      "Сайт для изучения астрономии. Содержит интересные факты о планетах, звездах и других объектах во Вселенной.",
    image: asset("images/projects/project-10.webp"),
    tags: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/ZRostislav/AstroFacts",
    liveUrl: "https://zrostislav.github.io/AstroFacts/",
  },
  {
    title: "ColorX",
    description:
      "Сайт для подбора цвета по картинке или по HEX-коду. Содержит интересные факты о цветах и их сочетаниях.",
    image: asset("images/projects/project-11.webp"),
    tags: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/ZRostislav/ColorX",
    liveUrl: "https://zrostislav.github.io/ColorX/",
  },
  {
    title: "Sword&Gold",
    description:
      "Проект в стиле фэнтези на тематику средневековья на базе Minecraft. Сайт.",
    image: asset("images/projects/project-3.webp"),
    tags: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/ZRostislav/Sword-Gold",
  },
  {
    title: "Lerning",
    description:
      "Простая аркада на Windows для изучения информатики в начальных классах.",
    image: asset("images/projects/placeholder.webp"),
    tags: ["Construct 1"],
  },
  {
    title: "Wiraned",
    description:
      "Простая аркада на Windows для изучения информатики в начальных классах.",
    image: asset("images/projects/placeholder.webp"),
    tags: ["Construct 1"],
  },
  {
    title: "CulturaPMR",
    description:
      "Первый коммерческий проект. Сайт для культурного центра в ПМР.",
    image: asset("images/projects/project-6.webp"),
    tags: [
      "TypeScript",
      "HTML",
      "CSS",
      "MySQL",
      "Node.js",
      "Tailwind CSS",
      "React",
      "Express",
    ],
    liveUrl: "https://mkkbendery.com/",
  },
  {
    title: "FilmLab",
    description: "Сайт для перевода пленки в цифровое изображение.",
    image: asset("images/projects/placeholder.webp"),
    tags: [
      "TypeScript",
      "HTML",
      "SCSS",
      "JavaScript",
      "Node.js",
      "MySQL",
      "Angular",
    ],
    repoUrl: "https://github.com/ZRostislav/filmLab",
  },
  {
    title: "Портфолио для Марии Бадичан",
    description: "Сайт-портфолио для Марии Бадичан — фотографа.",
    image: asset("images/projects/project-9.webp"),
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "lucide icons",
      "React",
      "Vite",
    ],
    repoUrl: "https://github.com/ZRostislav/photographer-portfolio-maria",
    liveUrl: "https://photographer-portfolio-maria.vercel.app/",
  },
  {
    title: "FlashDine",
    description: "Сайт для доставки еды и каталога продукции.",
    image: asset("images/projects/project-5.webp"),
    tags: [
      "TypeScript",
      "HTML",
      "CSS",
      "PostgreSQL",
      "Node.js",
      "Tailwind CSS",
      "Angular",
      "Express",
    ],
  },
  {
    title: "Танки",
    description: "Простая игра про танки на Windows.",
    image: asset("images/projects/placeholder.webp"),
    tags: ["Construct 1"],
  },
  {
    title: "Lefting",
    description: "Пиксельный кликер на Android.",
    image: asset("images/projects/project-1.webp"),
    tags: ["Construct 2"],
  },
  {
    title: "ADog",
    description: "Бот для Telegram на JS.",
    image: asset("images/projects/project-2.webp"),
    tags: ["JavaScript"],
    repoUrl: "https://github.com/ZRostislav/AmericanDogBot-Telegram",
  },
  {
    title: "Ramergam",
    description: "Платформер на Windows.",
    image: asset("images/projects/placeholder.webp"),
    tags: ["Construct 1"],
  },
];

export const projectsNote =
  "Это ещё не все проекты — про многие я пока не рассказал, но они есть.";

export const socials = [
  { label: "GitHub", url: "https://github.com/ZRostislav", icon: "github" },
  {
    label: "Telegram",
    url: "https://t.me/rostislav_zaluzhets",
    icon: "telegram",
  },
];

export const contact = {
  heading: "Открыт к предложениям и интересным проектам",
};
