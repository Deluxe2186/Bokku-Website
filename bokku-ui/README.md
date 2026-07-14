# bokku! Mart — Frontend

Frontend for **bokku! Mart**, a Nigerian hard-discount grocery store. Built with Next.js (App Router) and plain CSS Modules — no Tailwind or other CSS frameworks.

This is a **frontend-only** build. Backend integration (real authentication, order processing, product data from a database, etc.) is being handled separately — see [Backend Integration Notes](#backend-integration-notes) below for exactly where those hooks live.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Plain CSS Modules (`*.module.css`) — one file per component/page, no Tailwind
- **Icons:** react-icons
- **Fonts:** Space Grotesk & Inter (UI text), Anton (marketing headlines), Baloo 2 (logo) — loaded via `next/font/google`
- **State:** React Context (`CartContext`, `AuthContext`) with `localStorage` persistence — no external state library

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
src/
  app/
    page.js                    → Homepage
    layout.js                  → Root layout (fonts, providers, Navbar/Footer)
    globals.css                → Global tokens (brand colors, base styles)
    shop/                      → Shop page (category + search filtering)
    product/[slug]/            → Product detail page
    cart/                      → Cart page
    checkout/                  → Checkout page (requires sign-in)
    login/ , signup/           → Auth pages
    about/                     → About Us
    deals/                     → Deals & discounts
    locations/                 → Store locator
    work-with-us/              → Careers / partner inquiries
    components/                → Shared components (Navbar, Footer, ProductCard, HeroSlider, AuthForm)
  context/
    CartContext.js             → Cart state (add/remove/qty, localStorage-persisted)
    AuthContext.js             → Mock auth state (see note below)
  data/
    products.js                → Product & category data (placeholder — replace with real API data)
    stores.js                  → Store location data (placeholder)
```

## Features Built So Far

- Full commerce flow: **Shop → Product Detail → Cart → Checkout**
- Category filtering and search on the Shop page
- Cart persisted across sessions via `localStorage`
- Sign-in required at checkout, with redirect back to checkout after login
- Content pages: About, Deals, Store Locator, Work/Partner With Us
- Hero slider on the homepage: autoplay (pauses on hover), manual arrows, progress indicators

## Backend Integration Notes

Search the codebase for `NOTE for backend integration` comments — these mark every spot that currently fakes real functionality and needs to be wired up to actual API calls. The two main ones:

1. **`src/context/AuthContext.js`** — mock auth system. Users/passwords are currently stored in plain text in `localStorage`, which is **not secure** and must be replaced with real API-backed auth (hashed passwords, sessions/JWT, etc.) before launch.
2. **`src/app/checkout/page.js`** — order submission currently just simulates success and clears the cart. Needs to POST to a real orders endpoint.

Also replace the placeholder data sources once real endpoints exist:
- `src/data/products.js` — swap for real product data from the backend
- `src/data/stores.js` — swap for real store location data

## Known Placeholders (fix before launch)

- Product prices, descriptions, and images in `src/data/products.js` are sample data
- Store locations in `src/data/stores.js` are made up
- Stats on the About page (store count, customer count, etc.) are placeholder figures — replace with real numbers from the client
- Hero slider images (`src/app/components/HeroSlider.js`) should be real transparent PNG product cutouts for the intended "pop off the background" effect — currently a mix of stock photos and local images

## Commit Convention

Changes are committed in small, scoped commits following [Conventional Commits](https://www.conventionalcommits.org/) style, e.g.:

```
feat(cart): add quantity controls to cart page
fix(navbar): remove native border from search input
style(hero): enlarge headline text
refactor(home): extract ProductCard into shared component
```

## Environment Notes

- Local images should live in `public/images/` and be referenced as `/images/your-file.png` (no `../public` prefix)
- External image domains must be allow-listed in `next.config.mjs` under `images.remotePatterns` (Unsplash is currently allow-listed as an example)
