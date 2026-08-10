# PRD: The Jaipur Event Co — Landing Page

**Client:** The Jaipur Event Co (Event Management Company)
**Project Type:** Static Landing Page
**Timeline:** 1-2 weeks
**Maintained by:** Developer (you)
**Hosting:** Cloudflare Pages (free) → Custom domain (client provides)

---

## 1. Brand Analysis (from Instagram)

### Visual Identity
- **Color Palette:** Warm earthy tones — terracotta, gold, cream, deep maroon, sage green
- **Typography:** Elegant serif headings (editorial) + clean sans-serif body
- **Imagery Style:** High-end event photography — weddings, corporate, decor details, candid moments
- **Vibe:** Royal Rajasthani heritage meets modern luxury; sophisticated, intimate, curated

### Brand Keywords
`Royal` `Heritage` `Curated` `Intimate` `Luxury` `Authentic` `Timeless`

---

## 2. Site Map

```
/ (Home)
├── Hero Section
├── About / Philosophy
├── Services (3-4 cards)
├── Gallery (masonry, filterable by category)
├── Testimonials (2-3)
├── Contact / CTA
└── Footer
```

**Future pages (easy to add):**
- `/gallery` — expanded gallery with categories
- `/weddings` — wedding-specific portfolio
- `/corporate` — corporate events portfolio

---

## 3. Page Sections — Detailed Specs

### 3.1 Hero
- **Headline:** "Crafting Timeless Celebrations in the Pink City"
- **Subheadline:** "Jaipur's premier event design & management studio. Weddings • Corporate • Cultural"
- **CTA:** "View Our Work" → scrolls to Gallery
- **Secondary CTA:** "Plan Your Event" → scrolls to Contact
- **Background:** Full-screen hero image (best Instagram reel/photo), subtle parallax
- **Overlay:** Gradient (terracotta → transparent) for text readability

### 3.2 About / Philosophy
- **Tagline:** "Where Heritage Meets Celebration"
- **Copy:** 2-3 short paragraphs about their approach — bespoke design, local artisans, attention to detail
- **Visual:** 2-3 small accent images (hands arranging flowers, venue setup detail, team working)

### 3.3 Services
| Service | Icon | Short Description |
|---------|------|-------------------|
| Wedding Design & Management | 💍 | End-to-end: venue, decor, vendors, day-of coordination |
| Corporate & Brand Events | 🏢 | Conferences, launches, retreats — branded experiences |
| Cultural & Social Celebrations | 🎭 | Festivals, anniversaries, intimate gatherings |
| Decor & Styling | 🌸 | Floral, mandap, lighting, tablescapes — standalone or bundled |

- **Layout:** 4-card grid (2×2 mobile, 4×1 desktop)
- **Hover:** Subtle lift + gold accent border

### 3.4 Gallery (Core Feature)
- **Source:** Content collection (`src/content/gallery/`)
- **Categories:** `weddings`, `corporate`, `decor`, `cultural`
- **Display:** Masonry grid (CSS columns or grid-auto-flow: dense)
- **Filter:** Tab pills (All | Weddings | Corporate | Decor | Cultural)
- **Lightbox:** Click → full-screen viewer with prev/next, category badge
- **Adding photos later:** Drop `.jpg/.webp` in `src/content/gallery/{category}/` + `git push`
- **Image optimization:** Astro `<Image />` (auto WebP/AVIF, responsive sizes)

### 3.5 Testimonials
- **Format:** 2-3 cards, auto-rotate carousel (or static grid)
- **Content:** Client name, event type, quote, photo (optional)
- **Style:** Minimal, quote-mark accent in gold

### 3.6 Contact / CTA
- **Layout:** Split — left: copy + info, right: contact form (future) or direct links
- **Info:**
  - Phone: `+91 XXXXX XXXXX` (click-to-call)
  - WhatsApp: `+91 XXXXX XXXXX` (pre-filled message)
  - Email: `hello@thejaipureventco.com`
  - Address: Jaipur, Rajasthan (area only)
  - Instagram: `@thejaipureventco` (link)
- **CTA Button:** "Start Planning" → opens WhatsApp/email

### 3.7 Footer
- Logo + tagline
- Quick links: Home, Gallery, Contact
- Social icons (Instagram, WhatsApp, Email)
- Copyright + "Designed & Developed by [Your Name/Studio]"

---

## 4. Technical Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Framework** | Astro 5.x | Content collections, zero-JS default, fast builds |
| **Styling** | Tailwind CSS + CSS Variables | Utility-first, easy theming, small bundle |
| **Images** | Astro Assets + Sharp | Auto-optimization, responsive, WebP/AVIF |
| **Gallery Lightbox** | `glightbox` (lightweight, no deps) | 1.5kb gzipped, touch-friendly |
| **Icons** | `lucide-react` (tree-shaken) | Clean, consistent |
| **Deploy** | Cloudflare Pages | Free, global CDN, auto SSL, custom domain, Git push deploy |
| **Domain** | Client purchases (GoDaddy/Namecheap/Cloudflare) | Point nameservers to Cloudflare |

---

## 5. Content Strategy (Client-Editable Later)

### Content Collections Structure
```
src/content/
├── gallery/
│   ├── weddings/
│   │   ├── wedding-01.jpg
│   │   └── ...
│   ├── corporate/
│   ├── decor/
│   └── cultural/
├── testimonials/
│   ├── testimonial-01.md
│   └── ...
└── config.ts  # defines schema
```

### Adding Photos (Client/You Workflow)
1. Add optimized images to `src/content/gallery/{category}/`
2. Run `npm run build` locally to verify
3. `git add . && git commit -m "Add gallery images" && git push`
4. Cloudflare auto-deploys (~30 sec)

> **Note:** Client can send you photos via WhatsApp/Drive → you add + push. No CMS needed.

---

## 6. Performance & SEO Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | 100 |
| Lighthouse SEO | 100 |
| First Contentful Paint | < 1.2s |
| Largest Contentful Paint | < 2.0s |
| Cumulative Layout Shift | < 0.1 |
| Total Bundle Size (JS) | < 15kb gzipped |

### SEO Checklist
- [ ] Meta title/description per page
- [ ] Open Graph + Twitter cards (hero image)
- [ ] JSON-LD: `LocalBusiness` + `ImageGallery`
- [ ] Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`)
- [ ] Alt text for all images (auto from filename + category)
- [ ] Sitemap.xml + robots.txt (Astro integration)
- [ ] Canonical URLs

---

## 7. Accessibility

- WCAG 2.1 AA compliant
- Color contrast ratios (test terracotta/gold on cream)
- Focus-visible outlines (gold accent)
- Keyboard-navigable gallery lightbox
- Reduced motion respect (`prefers-reduced-motion`)
- Alt text: descriptive ("Bride in red lehenga at City Palace mandap")

---

## 8. Responsive Breakpoints

| Breakpoint | Width | Columns (Gallery) |
|------------|-------|-------------------|
| Mobile | < 640px | 1 |
| Tablet | 640–1024px | 2 |
| Desktop | 1024–1280px | 3 |
| Wide | > 1280px | 4 |

---

## 9. Development Phases

### Phase 1: Foundation (Day 1-2)
- [ ] Astro + Tailwind init
- [ ] Design tokens (colors, fonts, spacing)
- [ ] Base layout + header/footer components
- [ ] Cloudflare Pages repo + deploy pipeline

### Phase 2: Core Sections (Day 3-5)
- [ ] Hero + About
- [ ] Services grid
- [ ] Gallery content collection + masonry + lightbox
- [ ] Contact section

### Phase 3: Polish (Day 6-7)
- [ ] Testimonials
- [ ] SEO + JSON-LD + sitemap
- [ ] Image optimization verification
- [ ] Cross-browser testing
- [ ] Lighthouse audit

### Phase 4: Launch (Day 8)
- [ ] Custom domain DNS setup
- [ ] Final client review
- [ ] Go live
- [ ] Handoff doc (how to add photos)

---

## 10. Future Enhancements (Post-Launch)

- Blog/News section (Astro content collections)
- Inquiry form → Netlify Forms / Formspree / EmailJS
- Multi-language (Hindi/English) — `i18n` routing
- Admin panel (Cloudflare Workers + KV) for client self-serve gallery uploads
- Analytics: Plausible / Umami (privacy-friendly)

---

## 11. Estimated Effort

| Task | Hours |
|------|-------|
| Setup + Config | 3 |
| Components + Layout | 8 |
| Gallery System | 6 |
| Content Population | 4 |
| SEO + Performance | 3 |
| Testing + Deploy | 3 |
| **Total** | **~27 hrs** |

---

## 12. Handoff Deliverables

1. **GitHub Repo** — Full source, `.gitignore`, `README.md`
2. **Deploy Guide** — `DEPLOY.md` (Cloudflare Pages setup, custom domain)
3. **Content Guide** — `CONTENT.md` (how to add gallery images, update copy)
4. **Design Tokens** — `design-tokens.css` (colors, fonts, spacing reference)
5. **Access Credentials** — Cloudflare account (if you set up), domain registrar

---

## 13. Project Assets & Decision Checklist

| Item | Status | Decision / Notes |
| :--- | :--- | :--- |
| **Domain Registrar Choice** | ✅ **Resolved** | **Cloudflare Registrar** (At-cost renewal, free automated SSL, seamless Cloudflare Pages integration). |
| **Analytics Preference** | ✅ **Resolved** | **Cloudflare Web Analytics** (100% free, 0 KB performance impact, cookie-free / no GDPR banner required). *Optional: Umami for custom button click events.* |
| **Final Copy (Hero, About, Services)** | ❌ **Pending Client** | Needs approved text for Hero, Philosophy, and Service cards. |
| **20-30 Curated Photos** | ❌ **Pending Client** | High-res files categorized into: `weddings`, `corporate`, `decor`, `cultural`. |
| **Logo (SVG)** | ❌ **Pending Client** | Vector SVG format preferred for header & footer. |
| **Contact Details** | ❌ **Pending Client** | Phone, Email, WhatsApp number, and Jaipur location area. |
| **Testimonials (2-3)** | ❌ **Pending Client** | Quotes with client name & event type. |

---

*Generated: 2026-08-10*
*Project: The Jaipur Event Co — Landing Page*
*Status: Architecture & Hosting Plan Ready; Awaiting Client Assets*