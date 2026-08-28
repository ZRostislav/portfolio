// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://yourusername.github.io',
  // По умолчанию '/', чтобы `npm run dev` и `npm run preview` сразу
  // работали на localhost без под-пути. Если будешь деплоить как
  // GitHub Project Pages (репозиторий НЕ вида username.github.io) —
  // раскомментируй строку ниже и подставь имя своего репозитория.
  // base: '/имя-репозитория',
  vite: {
    plugins: [tailwindcss()],
  },
});
