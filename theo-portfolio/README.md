# Theo Dinh · Portfolio

Personal portfolio site for Thanh (Theo) Dinh, IT student at York University.

Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Files

| File | What it holds |
| --- | --- |
| `index.html` | All page content: hero, about, projects, experience, skills, contact |
| `styles.css` | Colours, fonts and layout. Theme colours live in the `:root` block at the top |
| `script.js` | The "Copy email" button |

## Run it locally

Open `index.html` in a browser, or use the VS Code **Live Server** extension.

## Common edits

- **Add a project:** copy one `<article class="card">` block inside `<section id="work">` in `index.html`.
- **Add a job:** copy one `<div class="entry">` block inside `<section id="experience">`.
- **Change the accent colour:** edit `--accent` in `styles.css` (once for light mode, twice for dark mode).

## Publish on GitHub Pages

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/thanhzkda/theo-portfolio.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
The site goes live at `https://thanhzkda.github.io/theo-portfolio/`.
