# Final Review — 9.5 Release

## Marketing review

- The homepage leads with engineering identity and a concrete problem statement.
- Engineering and research appear before professional service.
- Service is compact and functions as third-party credibility rather than the primary story.
- The hero, section rhythm, typography, and visual hierarchy were reviewed at desktop, tablet, and mobile widths.
- Copy was shortened and rewritten to sound like an experienced engineering leader rather than a credential inventory.

## Devil's-advocate review

- Public ranking numbers were removed.
- Direct official listings are distinguished from event pages and publisher pages.
- Unlinked roles do not display misleading “official source” buttons.
- NEXOTECH / ICATI uses the exact verified role: Technical Program Committee Chair.
- Columbia SAES uses the exact verified role: Track Chair.
- VLDB and ICDCS use direct committee listings.
- The homepage shows only four directly verified service highlights.
- Internal links pass validation across all 22 generated HTML pages.
- Responsive tests show no horizontal overflow at 1440px, 1024px, and 390px widths.
- Keyboard focus and reduced-motion support are included.

## Deployment

Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `_site`
- Node version: 18 or newer

The `_site` directory can also be deployed as a fully static site.
