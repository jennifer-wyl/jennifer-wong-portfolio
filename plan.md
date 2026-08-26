# Jennifer Wong — Portfolio Website: Implementation Plan

## Tech Stack

- **Vite + React 19 + TypeScript** — fast dev server with instant HMR for live preview/iteration, no need for SSR/routing since this is a single page.
- **Plain CSS with CSS variables** (no Tailwind, no CSS framework) — the brand calls for a small, deliberate design system (3 colors, 1 typeface, a handful of spacing steps). A utility framework or component library adds indirection for a page this size; hand-written CSS keeps the design system explicit and easy for you to tweak later (colors, spacing) without hunting through class names.
- **No backend** — the contact form will do local client-side validation and show the "I'll reach out within 24 hours" confirmation on submit. It won't actually send anywhere yet (no email service wired up). I'll stub the submit handler clearly so it's a one-line swap to POST to Formspree/a serverless function/etc. later — flag this to you at the end.
- **Static placeholder images** — solid-color/gradient placeholder blocks (styled divs) for property photos, not external placeholder image services (keeps the site fully offline/self-contained, no network dependency).

## File Structure

```
jennifer-wong-portfolio/
├── plan.md
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .gitignore
└── src/
    ├── main.tsx
    ├── index.css              # design tokens (colors, spacing, type) + global resets
    ├── App.tsx                # composes all sections in order
    ├── components/
    │   ├── Hero.tsx
    │   ├── FeaturedProperties.tsx
    │   ├── PropertyCard.tsx
    │   ├── About.tsx
    │   ├── Results.tsx
    │   ├── Testimonials.tsx
    │   ├── TestimonialCard.tsx
    │   ├── Contact.tsx
    │   └── Footer.tsx
    └── data/
        ├── properties.ts       # the 3 featured property records
        └── testimonials.ts     # the 3 testimonials
```

One component per section keeps each file short and makes revisions ("change the About copy," "restyle testimonials") a single-file edit.

## Design System

**Colors** (CSS custom properties on `:root`)
- `--charcoal: #2C3E50` — primary text, headings
- `--navy: #1A3A5C` — accents, buttons, links, icons
- `--cream: #F5F3F0` — section backgrounds (alternating with white)
- `--white: #FFFFFF`
- `--border: #E0DDD8` — subtle dividers (derived light neutral, not a named brand color)

**Typography**
- System sans-serif stack: `-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` — clean, no web font loading needed, matches "no fancy fonts."
- Scale: 2.5rem (h1) / 1.875rem (h2) / 1.25rem (h3) / 1rem (body) / 0.875rem (small/labels), all via CSS variables so the whole scale can shift in one place.
- Generous line-height (1.6 body, 1.2 headings).

**Spacing**
- 8px base unit, exposed as `--space-1` (8px) through `--space-8` (64px).
- Section vertical padding: `--space-8` (64px) desktop / `--space-6` (48px) mobile.
- Max content width: 1200px, centered, with `--space-4` (32px) horizontal gutters on mobile.

**Layout**
- Mobile-first: single column by default; `@media (min-width: 768px)` introduces multi-column grids (3-up property cards, 3-up stats, 3-up testimonials).
- No animations, no shadows-as-effects — flat, calm surfaces; one subtle border or hairline separator between sections at most.

## Implementation Sequence

1. Scaffold Vite + React + TS project in this folder, install deps.
2. Build `index.css` design tokens + resets (colors, type scale, spacing vars, box-sizing reset).
3. Build `data/properties.ts` and `data/testimonials.ts` with the exact content given.
4. Build components section by section, in page order: Hero → FeaturedProperties/PropertyCard → About → Results → Testimonials/TestimonialCard → Contact → Footer.
5. Wire them into `App.tsx` in order; hero CTA scrolls/links to `#contact`.
6. Contact form: controlled inputs (name, phone, property interest select, optional message), client-side required-field check, submit shows thank-you message in place of the form.
7. Responsive pass: verify mobile (375px), tablet (768px), desktop (1280px) breakpoints.
8. Start `npm run dev` and hand you the local preview URL.
9. Iterate on your feedback.

---

Once you approve this, I'll scaffold the project and start building.
