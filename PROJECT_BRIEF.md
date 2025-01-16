# Project Brief: Personal Portfolio

## The Human
- IT Support Specialist at Distributed (Nov 2023 - Present)
- Enterprise Infrastructure & SaaS Management
- Annual tools budget: £800k+, managing 300+ tools
- Previous: 5+ years in hospitality (Nando's 2017-2023)
- Education: BTEC Computing Science

## Core Tech Stack & Expertise
- Microsoft 365 & Azure/Entra ID
- Power Automate
- SharePoint administration
- Hardware asset management
- Salesforce & HubSpot
- Workday & Xero
- Enterprise tool management

## Project Structure
```
/
├── src/
│   ├── components/
│   │   ├── career/                # Career page components
│   │   │   ├── Header.astro      # Career page header
│   │   │   ├── JobCard.astro     # Job experience cards
│   │   │   └── TechStack.astro   # Tech stack grid
│   │   ├── projects/             # Projects page components
│   │   │   ├── Header.astro      # Projects header
│   │   │   └── ProjectCard.astro # Project preview cards
│   │   ├── react/                # React components
│   │   │   └── MacGyver.jsx      # MacBook serial decoder
│   │   ├── sections/             # Main components
│   │   │   └── Hero.astro        # Homepage hero section
│   │   └── global/               # Shared components
│   │       ├── Navigation.astro  # Site nav
│   │       └── Footer.astro      # Site footer
│   ├── layouts/
│   │   └── BaseLayout.astro      # Base page wrapper
│   └── pages/
│       ├── index.astro           # Homepage
│       ├── career.astro          # Career page
│       ├── projects.astro        # Projects showcase
│       └── projects/             # Individual project pages
│           └── macgyver.astro    # MacGyver tool page
├── public/
│   └── data/
│       └── tools-summary.json    # Tech stack data
└── astro.config.mjs              # Base: '/me' for GitHub Pages
```

## Key Files
- Homepage: Clean hero with tech badges at `src/pages/index.astro`
- Career page: Job history + Tech stack at `src/pages/career.astro`
- Projects page: Interactive tools at `src/pages/projects.astro`
- Navigation: Main nav with GitHub link at `src/components/global/Navigation.astro`
- Tools data: Live at `public/data/tools-summary.json`

## Projects
### MacGyver (MacBook Serial Decoder)
- Location: `src/components/react/MacGyver.jsx`
- Status: Live ✅
- Tech: React + Tailwind CSS
- Features:
  - Decodes 12-char MacBook serials
  - Shows factory location (Fremont, China variants)
  - Identifies manufacturing date (Year)
  - Model identification for various MacBooks
  - Supports both pre-2020 (C02) and new format serials
  - Modern M1/M2 chip model detection
  - Clean dark UI with error handling
  - Optimized for IT asset lookup
- Path: /me/projects/macgyver
- Using client:only="react" for hydration

## Style Notes
- Professional, not flashy
- Dark theme throughout
- Focus on enterprise tooling & scale
- No software engineering claims
- No marketing fluff

## Contact
Email: jharrison.huntley@outlook.com
GitHub: JHARRISON-HUNTLEY
Location: Newcastle-Under-Lyme, ST5 3UD