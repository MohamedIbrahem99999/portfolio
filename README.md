# Mohamed Ibrahem — Portfolio (Angular + Bootstrap)

A dark, front-end-developer-themed portfolio built with **Angular 17** (standalone components)
and **Bootstrap 5**. Sections: Hero, Services, About, Skills, Experience, Portfolio (with live
demos of your real GitHub Pages projects), and Contact.

## Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
cd portfolio-angular
npm install
npm start
```

Then open **http://localhost:4200** in your browser.

## Build for deployment

```bash
npm run build
```

The production files land in `dist/portfolio/browser`. Upload that folder's contents to any
static host (GitHub Pages, Netlify, Vercel, etc.).

### Deploying to GitHub Pages

```bash
npm install -g angular-cli-ghpages
npm run build -- --base-href="/your-repo-name/"
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

## What's inside

- `src/app/app.component.ts` — all your content lives here: services, skills, experience
  (pulled from your CV), and your 6 real projects with their live-demo and GitHub links.
  Edit this file to update text, add projects, or tweak skill percentages.
- `src/styles.css` — the whole visual design system (colors, fonts, the "browser window"
  card style used for the portfolio pieces).
- `src/assets/profile.png` — your photo.
- `src/assets/Mohamed_Ibrahem_Front_End_Developer.pdf` — your CV, wired to the "Download CV"
  buttons.

## Notes

- The contact form opens the visitor's email client via a `mailto:` link (no backend attached).
  If you want it to actually send from the page, hook it up to a service like Formspree,
  EmailJS, or your own API endpoint in `submitContact()`.
- Bootstrap is used for the grid system, forms, and base utility classes; the dark theme and
  custom components (browser-frame cards, skill bars, timeline) are custom CSS on top of it.
