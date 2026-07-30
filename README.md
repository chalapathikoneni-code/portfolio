# Chalapathi Koneni — Professional Website

A static, editable professional website generated from Markdown and JSON.

## Build

```bash
npm install
npm run build
npm run check
```

The deployable site is generated in `_site/`. Cloudflare Pages can use `npm run build` as the build command and `_site` as the output directory.

## Content architecture

- `src/_data/evidence.json` — professional service and recognition
- `src/_data/research.json` — publications and accepted papers
- `src/_data/speaking.json` — talks and keynotes
- `src/_data/engineering.json` — engineering case studies
- `src/pages/home.md` — homepage narrative
- `src/assets/styles.css` — visual system

External links are labeled according to what they actually verify. Direct listings receive a small “Verified” marker on the service page; event and publisher links are not presented as proof of the role.
