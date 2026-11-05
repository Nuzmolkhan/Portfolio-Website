<div align="center">

# Nuzmol Islam Khan — Data Analyst Portfolio

**A fast, dependency-free, data-driven portfolio website built with plain HTML, CSS and JavaScript.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#tech-stack)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](#tech-stack)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)](#tech-stack)
[![No build step](https://img.shields.io/badge/build-none-5EEAD4)](#getting-started)

</div>

---

## About

This is the personal portfolio of **Nuzmol Islam Khan**, a Computer Science & Engineering graduate from Green University of Bangladesh, based in Dhaka. He is looking for entry-level **Data Analyst, BI Analyst and SQL Analyst** roles.

The site presents end-to-end analytics projects (SQL, Python, Power BI, Excel) with the key finding of each one up front, plus skills, education, certifications and contact details.

The whole site is **content-driven**: every piece of text, number and link lives in a single file, `js/data.js`. Edit that file and the page updates itself. No framework, no bundler, no `npm install`.

## Features

- **Single source of content.** All sections are rendered from one `SITE_DATA` object in `js/data.js`.
- **Dark and light themes.** A toggle in the nav, remembered in `localStorage`, applied before first paint to avoid a theme flash.
- **Auto-calculated stats.** "Analytics Projects", "Dashboards Built" and "Tools & Technologies" are counted from the data, so they stay correct when you add items.
- **Auto-scrolling project slider.** It pauses on hover, focus and touch, and has prev/next arrows and dots.
- **Insight ticker.** A scrolling strip of headline results from the projects.
- **Polished interactions.** Scroll-spy navigation, reveal-on-scroll, count-up numbers, scroll progress bar, back-to-top button, card glow and a magnifier-style cursor follower on desktop.
- **Responsive and accessible.** Mobile navigation menu, semantic HTML, ARIA labels, and `prefers-reduced-motion` respected.
- **Downloadable CV.** The "Download CV" button points to a PDF in `assets/docs/`.

## Sections

| Section | What it shows |
| --- | --- |
| Home | Intro, role tags, bio, social links, photo |
| Ticker and stats | Headline results and auto-counted numbers |
| Skills | Tools and analytical skills (Python, SQL, Power BI, Excel, DAX, Power Query ...) |
| Projects | Slider of featured projects with screenshots, findings and links |
| What I Do | The five-step pipeline: clean, model, analyze, visualize, tell the story |
| About and Education | Short bio, quick facts and an education timeline |
| Credentials | Certifications and the Vice Chancellor's Award |
| Contact | Email, LinkedIn, WhatsApp, phone and location |

## Featured projects

| Project | Stack | Headline finding |
| --- | --- | --- |
| **Study Abroad Lead Funnel Analysis** | Python, SQL (DuckDB), Hex | 63% of leads drop off after consultation, the biggest leak and untracked |
| **Customer Churn Analysis** | Python, Statistics | Month-to-month churn is 21.8% vs 1.5% on two-year contracts |
| **Demand & Inventory Planning** | Excel, Supply Chain | 95.1% overall accuracy hid a category below 30% |
| **Employee Worklife Balance Analysis** | Excel, Power Query | Salary spend peaks at the 10-year service mark |
| **SQL Sales, Customer & Product Insights** | SQL Server, T-SQL | VIP / Regular / New segments and product tiers |

## Tech stack

- **HTML5**: a single `index.html` shell with empty containers.
- **CSS3**: custom properties for theming, grid and flexbox layout, no preprocessor.
- **Vanilla JavaScript (ES6)**: renders sections from data and handles all interactions. No libraries.
- **Fonts**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Inter](https://fonts.google.com/specimen/Inter) and [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono), loaded from Google Fonts.

## Project structure

```
portfolio/
├── index.html              # Page shell: section containers, nav, footer
├── css/
│   └── style.css           # All styles, dark/light theme tokens, responsive rules
├── js/
│   ├── data.js             # ALL site content (edit this to update the site)
│   └── script.js           # Rendering + interactions (theme, slider, scroll-spy ...)
├── assets/
│   ├── docs/               # CV (PDF)
│   └── images/
│       ├── profile/        # Photo and logo variants
│       └── projects/       # Project card images used by the site
└── docs/                   # README screenshots
```

> `assets/images/projects_ss/` (in the original working copy) holds raw project files, datasets and notebooks. It is not used by the website, so it can be removed or moved elsewhere to keep the repo light.

## Getting started

There is no build step. You only need a browser.

**Option 1: open the file**

```bash
git clone https://github.com/Nuzmolkhan/Portfolio-Website.git
cd Portfolio-Website/portfolio
# then double-click index.html
```

**Option 2: run a local server** (recommended, closer to production)

```bash
cd portfolio
python -m http.server 8000
# open http://localhost:8000
```

Any static server works (`npx serve`, VS Code Live Server, and so on).

## Customizing the content

Everything lives in `js/data.js`. Do not remove commas or quotation marks while editing.

| To change ... | Edit this key in `SITE_DATA` |
| --- | --- |
| Name, bio, email, social links, photo, CV path | `profile` |
| Scrolling headline strip | `ticker` |
| The stats bar | `quickStats` |
| Skills and tools | `skills` |
| Projects in the slider | `projects` |
| The "What I Do" pipeline | `whatIDo` |
| About text and quick facts | `about` |
| Education timeline | `education` |
| Certifications and award | `certifications`, `achievement` |

### Add a new project

Copy an existing item inside `projects` and edit it:

```js
{
  tag: "Python · SQL",
  title: "My New Project",
  dashboard: true,                       // counts toward "Dashboards Built"
  image: "assets/images/projects/my-new-project.png",
  description: "What the analysis did and found.",
  stat: "One headline number or finding",
  links: [
    { label: "Live Dashboard", url: "https://..." },
    { label: "GitHub",         url: "https://github.com/..." },
  ],
}
```

- `dashboard: true` adds to the **Dashboards Built** count.
- `countInStats: false` excludes a card (like "More Projects") from the **Analytics Projects** count.
- Put the project image in `assets/images/projects/`.

### Change the photo or CV

- Photo: drop a new image in `assets/images/profile/` and update `profile.photo`.
- CV: replace `assets/docs/Nuzmol_Islam_Khan_CV.pdf` (or update `profile.resume`).

### Change the theme colors

Colors are CSS variables at the top of `css/style.css` (`:root` for dark, `:root[data-theme="light"]` for light). Change `--accent`, `--bg`, `--grad` and so on to re-skin the whole site.

## Deployment

It is a static site, so it deploys anywhere. For example, **GitHub Pages**:

1. Make sure `index.html` is at the root of the published folder (move the contents of `portfolio/` to the repo root, or publish from that folder).
2. Go to **Settings → Pages**.
3. Under **Source**, choose the branch (for example `main`) and the folder.
4. Save. The site will be live at `https://<username>.github.io/<repo>/`.

Netlify, Vercel and Cloudflare Pages also work: no build command, publish directory is the folder that contains `index.html`.


## Roadmap

- [ ] Add more projects as they are completed
- [ ] Add a blog or case-study page for deeper write-ups
- [ ] Add Open Graph and Twitter meta tags for nicer link previews

## Contact

**Nuzmol Islam Khan** — Data Analyst, Dhaka, Bangladesh

- GitHub: [@Nuzmolkhan](https://github.com/Nuzmolkhan)
- LinkedIn: [linkedin.com/in/mdnuzmol](https://www.linkedin.com/in/mdnuzmol/)
- Email: [mdnuzmolislam30@gmail.com](mailto:mdnuzmolislam30@gmail.com)

## License

&copy; 2026 Nuzmol Islam Khan. All rights reserved. The code is shared to showcase this portfolio; please do not reuse the personal content, photos or project write-ups without permission.
