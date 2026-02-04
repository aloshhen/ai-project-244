# WEBSITE Project

> 🤖 Этот проект был автоматически сгенерирован с помощью AI Constructor Bot

## 📝 Описание

Create a high-end architectural portfolio website named "MONOLITH". 
Style: Digital Brutalism. Strict grid, massive typography, raw aesthetics.

DESIGN RULES (Strict):
1. Color Palette: Use ONLY standard Tailwind colors. No custom hex codes in CSS.
   - Backgrounds: bg-stone-50 (light) and bg-zinc-950 (dark).
   - Text: text-zinc-900 and text-stone-200.
   - Borders: Thin, sharp lines border-zinc-300.
2. Typography: Use a sans-serif font. Headings must be uppercase and massive (text-6xl to text-9xl).
3. Layout: Asymmetric grid. Lots of negative space (whitespace).

TECHNICAL CONSTRAINTS (Crucial for Build):
- Scroll: NEVER use overflow: hidden on the body or html. Use min-h-screen for sections, never fixed height: 100vh. The page must scroll naturally on Desktop and Mobile.
- Icons: Use ONLY <SafeIcon name="..." /> (e.g., 'arrow-down-right', 'plus', 'menu').
- Images: Use placeholder images from Unsplash (architecture, concrete, minimalism).

SECTIONS:

1. HERO:
   - A split screen or full-width layout.
   - Huge Headline: "FORM FOLLOWS FICTION".
   - Subtext: "Radical structures for the post-digital era."
   - A single, sharp button: "EXPLORE [ + ]".

2. PROJECT INDEX (The List):
   - Instead of a grid of images, create a strict typographic list of projects (e.g., "01. THE VOID HOUSE", "02. SILENT TOWER").
   - Interaction: When hovering over a project name, a preview image should appear subtly (or the text shifts right).
   - Use border-b between items to look like a technical document.

3. PHILOSOPHY:
   - A section with a dark background (bg-zinc-950).
   - White text in 2 columns. Left column: "OUR MANIFESTO". Right column: A dense block of text about sustainability and raw materials.

4. FOOTER:
   - Massive footer.
   - Large email link that spans the full width.
   - A grid of technical details (Copyright, Coordinates, Socials).

Performance:
- Use framer-motion for simple reveal animations (fade-in, slide-up).
- Ensure the site feels heavy but fast.

## 🚀 Технологии

- Next.js (для SSR и удобной маршрутизации)  
- Tailwind CSS (строгое соблюдение цветовой палитры и утилит)  
- Framer Motion (для анимаций)  
- TypeScript (для типобезопасности)  
- Unsplash API (или статические placeholder-изображения)  
- React Icons (или кастомный компонент `<SafeIcon />`)

## 📁 Структура проекта

- `package.json`
- `index.html`
- `vite.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `src/main.jsx`
- `src/index.css`
- `src/App.jsx`
- `src/components/IconRegistry.tsx`
- `src/components/SafeIcon.tsx`
- `src/globals.css`
- `vercel.json`
- `.gitignore`
- `README.md`

## 🛠️ Установка

```bash
npm install
```

## ▶️ Запуск

```bash
npm start
# или
npm run dev
```

## 📋 План разработки

1.

## 📄 Лицензия

MIT

## 🤖 Создано с помощью

[AI Constructor Bot](https://t.me/construct_ai_bot) - Telegram бот для автоматической генерации проектов с помощью AI
