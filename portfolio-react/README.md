# Software Developer Portfolio

Portfolio cá nhân dùng **React + TypeScript + TailwindCSS**, có:
- Intro splash “from Xofai with love” (Framer Motion fade + split-screen)
- Sidebar đóng/mở, điều hướng smooth scroll tới từng section
- Dark/Light mode + EN/VI i18n
- Projects (mở GitHub trong tab mới), Info cards (Social/GPA/Awards/English certs)
- Footer + Back-to-top

## Tech Stack
- React
- TypeScript
- Tailwind CSS (v4)
- Framer Motion
- lucide-react

## Install & Run
Trong thư mục `portfolio-react`:

```bash
npm install
npm run dev
```

## Folder Structure
- `src/components/`: components nhỏ (Sidebar, Button, ProjectCard, toggles, BackToTop, ...)
- `src/sections/`: các section lớn (IntroSplash, Personal/About, Info, Projects, Stacks, Contact, Footer)
- `src/hooks/`: i18n + theme/language hooks + smooth scroll
- `src/context/`: global state cho Theme và Language
- `src/content/siteData.ts`: dữ liệu cá nhân, social links, projects, stacks

## Customize Content
Chỉnh dữ liệu demo ở:
- `src/content/siteData.ts`

Chỉnh text EN/VI (menu + heading) ở:
- `src/hooks/useI18n.ts`

