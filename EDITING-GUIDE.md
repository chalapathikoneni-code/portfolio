# Editing guide

You can make routine updates directly on GitHub using the pencil icon.

## Hide or show research

Open `src/_data/research.json`. Each item includes:

```json
"status": "published",
"public": true,
"verified": true
```

Only items with `public: true` and `verified: true` are shown. To hide an item, set `public` to `false`.

## Change professional-service order

Open `src/_data/service.json`. Update the numeric `order` field. The current intended order is VLDB, ICDM, RecSys, DSN, ICDCS, IEEE BigData.

## Add a service role

Copy one object in `src/_data/service.json`, change its fields, and set `visible` to `true`. Use only an official public URL.

## Edit a case study or note

Open the matching Markdown file under `src/case-studies`, `src/research`, or `src/notes`. Edit the text below the `---` front matter.

## Add a case study

1. Copy a Markdown file under `src/case-studies`.
2. Change the title, description, and permalink.
3. Add a matching entry to `src/_data/engineering.json`.

## Build and preview

```bash
npm run build
npm run serve
```

## Publish

```bash
git add .
git commit -m "Update website content"
git push origin main
```

Cloudflare Pages will build and deploy the site automatically.

## Public-safety rule

Publish only accepted, published, delivered, or officially verified work. Do not include confidential architecture, datasets, internal names, operational details, or unpublished research concepts.
