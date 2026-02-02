# Chimaobi.dev — Portfolio

Portfolio website for **Chimaobi David Ibe** (Software Engineer • Full‑stack Developer). Built with Next.js (App Router), TypeScript, and Tailwind CSS. Ready to deploy on Vercel.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and run

```bash
npm run build
npm start
```

## Resume PDF

The site links to a one‑page resume at `/resume.pdf`. Generate it with:

```bash
npm run generate-resume
```

This runs `node scripts/generate-resume-pdf.cjs`, which reads `scripts/resume-content.json` and writes `public/resume.pdf`. After changing resume content in `lib/content.ts`, update `scripts/resume-content.json` to match, then run `npm run generate-resume` again. Commit `public/resume.pdf` so the link works after deploy.

## Contact form

The contact form sends messages to your inbox via [Resend](https://resend.com). Messages are delivered to `cxxx2500@gmail.com` with the visitor's email set as the reply-to address.

1. Create a free account at [resend.com](https://resend.com) and get an API key.
2. Copy `.env.example` to `.env.local`.
3. Add your Resend API key: `RESEND_API_KEY=re_xxxxxxxxxxxx`.

Without this variable, the form will show an error when submitting; the mailto, phone, and LinkedIn links still work.

## Deploy on Vercel

1. Push this repo to GitHub (or connect your Git provider in Vercel).
2. In [Vercel](https://vercel.com), click **Add New Project** and import this repository.
3. Add environment variables (e.g. `RESEND_API_KEY`) in the project settings.
4. Deploy. Vercel will run `npm run build` and `npm start`.
5. In **Settings → Domains**, add your custom domain **chimaobi.dev** and follow the DNS instructions.

## OG image

The site uses a dynamic OG image (`app/opengraph-image.tsx`) with your name and title. You can add a static `public/og-image.png` (1200×630) as a fallback if needed.

## Project structure

- `app/` — Next.js App Router pages (Home, Projects, Resume, Contact), layout, robots, sitemap, opengraph-image
- `components/` — Header, Footer, Layout, ProjectCard, ContactForm
- `lib/` — `content.ts` (resume, projects, contact), `constants.ts` (site URL)
- `public/` — Static assets and `resume.pdf`
- `scripts/` — `generate-resume-pdf.cjs` (Node script) and `resume-content.json` for the resume PDF
