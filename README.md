## KaffeeRad Berlin - Beta

A work-in-progress repository for the KaffeeRad Berlin beta. This repo will host the source code, configuration, and documentation for the public-facing site and related services.

> Project status: early beta (structure and content subject to change)
> Last updated: August 2025

---

### Overview
- **Goal**: Deliver a modern, fast, and accessible web presence for KaffeeRad Berlin with room for future integrations (content, analytics, automations).
- **Scope (initial)**: Marketing pages, contact, basic CMS integration (TBD), and deployment pipeline.
- **Audience**: Public visitors and internal editors/maintainers.

---

### Tech Stack
The concrete stack is still being finalized. Update this section once code is added.

- **Framework**: TBD (e.g., Next.js, Astro, SvelteKit, or other)
- **Styling**: TBD (e.g., Tailwind CSS, CSS Modules, or other)
- **Content**: TBD (e.g., local Markdown, Headless CMS)
- **CI/CD**: TBD (e.g., GitHub Actions)
- **Hosting**: TBD (e.g., Vercel, Netlify, Docker on VPS)

---

### Monorepo/Structure
Current repository structure is minimal. As code is introduced, consider the following layout:

```
/
├─ app/ or src/              # Application code (framework-dependent)
├─ public/                   # Static assets
├─ scripts/                  # Build/deploy/maintenance scripts
├─ .env.example              # Sample environment configuration
├─ .github/workflows/        # CI/CD pipelines
└─ README.md                 # You are here
```

---

### Getting Started (Local)
No application code has been committed yet. Once added, tailor these steps to your chosen stack.

1. Clone the repository
   - git clone <repo-url>
   - cd "kaffeerad.berlin beta"
2. Install dependencies (if using Node.js)
   - npm install or pnpm install or yarn install
3. Configure environment
   - Copy `.env.example` to `.env.local` and set values (see below)
4. Run the development server (example)
   - npm run dev or pnpm dev or yarn dev
5. Open the app
   - Visit http://localhost:3000 (or your configured port)

---

### Configuration
Create a `.env.local` (not committed) based on `.env.example`. Suggested keys to start with—adjust as needed:

```
# Application
NODE_ENV=development
SITE_URL=http://localhost:3000
PORT=3000

# Analytics / Monitoring (optional)
ANALYTICS_WRITE_KEY=
SENTRY_DSN=

# CMS (optional)
CMS_URL=
CMS_TOKEN=
```

Add or remove variables as the architecture solidifies.



### Development Conventions
- **Type safety**: Prefer strict typings if using TypeScript.
- **Formatting**: Configure Prettier/ESLint (or equivalents) and run them in CI.
- **Commits**: Consider Conventional Commits (e.g., feat:, fix:, docs:).
- **Branching**: Use short-lived feature branches; open PRs with clear scope and checklist.

---

### Testing
Add testing framework once stack is chosen. For example:
- Unit tests with Vitest/Jest
- E2E tests with Playwright/Cypress
- Lint in CI and fail builds on warnings/errors

---

### Deployment
Document the deployment targets and steps once hosting is selected. Include:
- Build command
- Environment variables required in production
- Preview environments
- Rollback strategy

---

### Accessibility & Performance
- Aim for WCAG AA
- Budget for Core Web Vitals (LCP, CLS, INP)
- Automate checks (e.g., Lighthouse CI) once the app exists

---

### Roadmap
- Define and lock the tech stack
- Bootstrap the app skeleton
- Set up CI (build, lint, test)
- Add content structure and initial pages
- Configure analytics/monitoring
- Establish deployment pipeline

---

### Contributing
1. Create a feature branch from `main`
2. Make focused edits and include tests when applicable
3. Run linters/tests locally
4. Open a PR with a clear description and checklist

---

### License
TBD. If uncertain, consider MIT or a custom license appropriate for the project.

---

### Maintainers
- Add names/contacts here once roles are assigned

If you have questions or need access to infrastructure (hosting, analytics, n8n, CMS), document the process here.
