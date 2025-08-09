## Product Requirements Document (PRD)

Project: KaffeeRad Berlin — Website Refactor (Beta → Next Level)
Version: 1.0
Owner: TBD
Date: 2025-08-09

---

### 1) Background & Problem Statement
KaffeeRad Berlin’s current website needs a focused, modern refresh. The new site should be minimal and stylish, fast, accessible, and easy to maintain. Content should be concise, with strong visuals and a clear narrative about the brand and offering.

---

### 2) Objectives (Goals)
- Minimal, stylish brand presence that feels premium and warm.
- Lightning-fast performance with excellent Core Web Vitals.
- Clear information architecture and frictionless navigation.
- Strong mobile-first design; desktop refinement after mobile.
- SEO-ready with proper technical foundations and content structure.
- GDPR-compliant analytics and consent management.
- Easy content updates (light CMS or content pipeline) without developer involvement for routine edits.
- Stable and automated deployment with preview environments.

---

### 3) Non-Goals
- Full e-commerce (beyond basic inquiries/lead capture).
- Complex app features or logged-in experiences.
- Heavy third-party scripts or bloated design systems.

---

### 4) Target Audience
- Primary: Local Berlin customers, coffee aficionados, event organizers.
- Secondary: Partners, press, job applicants.

---

### 5) Brand & Design Principles
- Minimal and stylish: ample whitespace, restrained palette, strong typography, subtle motion.
- Human and warm: photography-first, microcopy that’s friendly and succinct.
- Content-first design: text and imagery drive layout; no ornamental UI flourishes.
- Accessibility as a baseline: sufficient contrast, keyboard support, visible focus states.

---

### 6) Scope (MVP)
Pages/Sections:
- Home: concise hero, value proposition, highlights (products/services), featured imagery.
- About: brand story, values, team snapshot.
- Menu/Offerings: concise curated list, seasonal items, pricing approach (if applicable).
- Events/Booking: simple lead form (name, email, phone optional, date, volume, notes).
- Locations/Contact: map embed or static map preview, hours, contact details, social links.
- Gallery (optional): small, optimized grid; lazy-loaded, responsive images.
- Blog/News (optional, later): lightweight MDX posts for announcements.
- Legal: Impressum, Datenschutz (GDPR), Cookie policy.

Components:
- Header with compact navigation and logo; sticky on mobile optional.
- Footer with essential links, contact, and social.
- Lightweight UI elements (buttons, form fields, cards) with consistent spacing scale.

---

### 7) Information Architecture
Top-level nav: Home, About, Offerings, Events, Contact
Footer: Legal (Impressum, Datenschutz), Social, Email, Address

---

### 8) Content Strategy
- Tone: friendly, confident, concise; bilingual if needed (DE primary, EN optional phase 2).
- Copy length: short paragraphs (≤80 words), scannable bullets, descriptive headings.
- Imagery: authentic, high-res but weight-optimized; WebP/AVIF; defined art direction.
- Content ownership: designate an editor; define change SLAs and publishing workflow.

---

### 9) UX Flows
- Lead/Booking flow: User submits Events/Booking form → thank-you page → confirmation email → internal notification to ops/CRM.
- Contact flow: Contact page form → confirmation → internal notification.
- Map/location: Quick-glance location card; click to open preferred maps app.

---

### 10) Accessibility (WCAG 2.2 AA)
- Keyboard navigable, logical tab order, visible focus states.
- Color contrast: pass AA across text and UI elements.
- Forms: labeled inputs, error messages with ARIA, success states.
- Media: alt text on images, reduced motion preference respected.

---

### 11) Performance Targets (Core Web Vitals)
- LCP ≤ 1.8s (p75 mobile)
- CLS ≤ 0.1
- INP ≤ 200ms
- TTFB ≤ 0.8s (on target hosting)
- Page weight budgets: ≤ 150KB JS, ≤ 50KB CSS, critical path minimal; images lazy-loaded
- Use next-gen image formats (AVIF/WebP), responsive sizes, and caching with immutable hashes.

---

### 12) SEO & Social
- Semantic HTML, structured headings, clean URLs.
- Metadata: titles, descriptions, canonical, Open Graph, Twitter cards.
- Schema.org: LocalBusiness, Organization.
- Sitemap.xml, robots.txt; 301 redirects if URLs change.
- Fast pages, minimal script footprint; avoid render-blocking.

---

### 13) Internationalization (Optional — Phase 2)
- German primary, English optional. Default to DE with language toggle.
- URL strategy: `/` for DE, `/en/` for English.
- Localize nav, form labels, metadata.

---

### 14) Legal & Privacy
- Pages: Impressum, Datenschutz, Cookie policy.
- Consent: Minimal cookie usage; defer non-essential scripts until consent.
- Analytics: privacy-friendly (see below), IP anonymization, DNT respected.

---

### 15) Analytics & Monitoring
- Analytics: Plausible or Matomo (self-hosted optional) with cookieless mode.
- Error monitoring: Sentry (frontend) with sampling.
- Logging: server-side request logging (host/platform-level).
- KPIs: sessions, conversion on lead forms, top content, CWV real-user metrics.

---

### 16) Integrations & Automations
- Forms → Email/CRM via n8n workflows hosted at `https://ct012n8n.grapco.eu` (confirm workflow IDs and triggers).
- Email: transactional confirmations via provider (e.g., Postmark/SES) triggered by n8n or server actions.
- Optional: newsletter provider integration.

---

### 17) Tech Stack Recommendation
Primary (performance-first, minimal CMS overhead):
- Framework: Next.js (App Router) or Astro
  - If Next.js: React Server Components, `next/image`, `next/font`.
  - If Astro: islands architecture for minimal JS.
- Styling: Tailwind CSS + CSS variables for theme tokens.
- Content: MDX + Contentlayer (flat Markdown repo workflow) for pages/news.
- Forms: server actions (Next) or simple API routes → n8n webhook.
- Hosting: Vercel (Next) or Vercel/Netlify (Astro).
- CI/CD: GitHub Actions + platform previews.

Alternate (headless CMS):
- CMS: Sanity/Contentful with minimal content types.
- Same hosting and CI/CD as above.

Decision drivers: editorial autonomy vs. complexity, localization needs, and performance budget.

---

### 18) Architecture & Dev Guidelines
- SSR/SSG hybrid with static generation for marketing pages; ISR where needed.
- Image pipeline: optimized, responsive, lazy-loaded.
- Minimal client-side JS; avoid heavy UI libs.
- ESM-only, strict TypeScript; ESLint/Prettier enforced.
- Environment config via `.env` with safe defaults and typed accessors.

---

### 19) Deployment & Environments
- Branching: `main` (production), `dev` (staging), feature branches.
- Previews: auto for every PR; share URLs with stakeholders.
- Envs: local, staging, production. Protect production deploys with approvals.
- Env vars: analytics keys, Sentry DSN, n8n webhook URL(s), site URL.

---

### 20) Migration Plan
- Inventory current pages/content; map to new IA.
- Rewrite/trim copy to minimal style; select imagery.
- Build new components/pages; migrate content.
- Set up redirects; verify SEO.
- Soft launch to staging; QA; fix; go-live.

---

### 21) Acceptance Criteria
- Design: matches approved Figma (or equivalent) within agreed tolerances.
- Performance: meets or beats targets in Lighthouse CI and real-user data where available.
- Accessibility: WCAG 2.2 AA checks pass (automated + manual sampling).
- SEO: metadata present, schema valid, sitemap/robots served, no major crawl issues.
- Content: all MVP pages populated and reviewed; legal pages present.
- Forms: leads delivered to inbox/CRM via n8n with confirmation emails.
- CI/CD: automated previews, green pipeline, reproducible builds.

---

### 22) Timeline & Milestones (Example)
- Week 1: IA, copy draft, visual direction, tech choice finalized.
- Week 2–3: Build core layout, components, Home/About/Offerings.
- Week 4: Events/Booking, Contact, Legal, analytics, Sentry, n8n integration.
- Week 5: Content pass, performance tuning, accessibility/SEO, redirects.
- Week 6: Stakeholder review, fixes, production launch.

---

### 23) Risks & Mitigations
- Scope creep → clear MVP, backlog non-critical items.
- Asset bloat → strict image/process budgets, linting on bundle sizes.
- SEO regressions → redirect plan, pre/post launch audits.
- Content delays → parallelize build with placeholder copy, define owner early.

---

### 24) Open Questions
- Final domain confirmation (provided URL appears as `kaffeerad.berlin` vs `kaffeerad.berlin.de` — confirm canonical).
- Languages: DE only or DE/EN?
- CMS or MDX-only?
- Newsletter integration needed?
- Photography assets availability and rights?
