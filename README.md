# Adhila Jamal — Portfolio

Personal portfolio built with React 19, TypeScript, Tailwind CSS v4 and Vite.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Editing content

All text (summary, experience, projects, skills, education, contact links) lives in
[`src/data/profile.ts`](src/data/profile.ts). Components read from it, so most updates
never touch JSX.

- **CV download:** put your PDF at `public/Adhila_Jamal_Resume.pdf`.
- **Project screenshots:** the project cards use code-drawn previews. To show real
  screenshots, add images to `public/` and render them in `ProjectMock` in
  [`src/components/Projects.tsx`](src/components/Projects.tsx).

## Structure

```
src/
  data/profile.ts          content
  hooks/                   useReveal (scroll-in animation), useActiveSection (nav highlight)
  components/              Nav, Hero, About, Projects, Experience, Skills, Contact, Section, Icon
  index.css                Tailwind theme tokens and shared component classes
```

## Deploy

Push to GitHub, then import the repo in [Vercel](https://vercel.com/new) or
[Netlify](https://app.netlify.com/start). Both detect Vite automatically
(build command `npm run build`, output directory `dist`).
