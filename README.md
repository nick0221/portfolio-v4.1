# NickDevs Portfolio

A modern, feature-rich personal portfolio website built with **Next.js 16**, **React 19**, and **Tailwind CSS 3**. Features an immersive animated ambient background, full dark/light theme support, and a polished UI with smooth motion animations.

**Live site:** [https://nickdevs.vercel.app](https://nickdevs.vercel.app)

---

## ✨ Features

### 🎨 Visual & Animation
- **Animated Ambient Background** — Multi-layered background with gradient orbs, floating code symbols, geometric shapes, constellation dots, and particles that drift and pulse
- **Dark / Light Theme** — Full theme support with localStorage persistence, system preference detection, and zero-flash inline script
- **Smooth Animations** — Framer Motion powered fade-ins, reveals, scale-ins, slides, and staggered reveal effects
- **Custom Scrollbar** — Styled scrollbar that matches the theme

### 🧭 Navigation
- **Floating Navigation Menu** — Scrollspy-driven floating menu that highlights the current section, with smooth anchor scrolling
- **Back to Top** — Floating button that appears on scroll

### 💼 Portfolio
- **Project Cards** — Rich project entries with cover images, tech stack badges, expandable descriptions, and live demo links
- **Image Gallery Modal** — Fullscreen modal with keyboard navigation (arrow keys + ESC), swipe support, and thumbnail dots
- **13 Projects** — Showcasing work across Laravel, Next.js, React, PHP, and more

### 🧩 Sections
- **Profile** — Personal info, profile picture, and social links (GitHub, LinkedIn, Email, CV download)
- **Experience** — Timeline with company details and responsibilities
- **Education** — Academic background with institution and degree info
- **Tech Stacks** — Categorized skills with interactive badge chips
- **Certifications** — Certification cards with issuer details
- **News & Publications** — News and publication entries (as featured sections)

### 🔧 Technical
- Fully responsive (mobile, tablet, desktop)
- TypeScript throughout
- SEO optimized with Open Graph and Twitter cards
- Vercel Analytics integration
- Optimized WebP images with Next.js Image component

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Analytics** | [Vercel Analytics](https://vercel.com/analytics) |
| **Fonts** | Geist (sans), PT Serif (serif) |

---

## Installation

```bash
# Clone the repository
git clone https://github.com/nick0221/portfolio-v4.1.git
cd portfolio-v4.1

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build for Production

```bash
npm run build
npm run start
```

Deploy to [Vercel](https://vercel.com/) or any Next.js-compatible hosting.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles, CSS variables, animations
│   ├── layout.tsx         # Root layout with ThemeProvider, footer, nav
│   └── page.tsx           # Main page with all sections
├── components/
│   ├── AmbientBackground  # Animated multi-layer background
│   ├── BackToTop          # Floating scroll-to-top button
│   ├── FloatingMenu       # Scrollspy floating navigation
│   ├── GalleryModal       # Fullscreen image gallery
│   ├── ThemeProvider      # Dark/light theme context provider
│   ├── motion/            # Animation wrappers (FadeIn, Reveal, ScaleIn, Slide, StaggerReveal)
│   ├── logo/              # NickDevs SVG logo (light + dark)
│   └── *-entry.tsx        # Section components (profile, experience, education, portfolio, etc.)
├── data/
│   ├── aboutme.ts         # Personal information
│   ├── portfolio.ts       # Portfolio project entries
│   ├── experience.ts      # Work experience
│   ├── education.ts       # Academic background
│   ├── technical-skills.ts # Skills by category
│   ├── certification.ts   # Certifications
│   ├── news.ts            # News entries
│   ├── publication.ts     # Publications
│   ├── section-order.ts   # Section ordering configuration
│   └── title-description.ts # Custom metadata
└── lib/
    └── constants.ts       # Shared constants (e.g., blur placeholder)
```

---

## Customization

All portfolio content is driven by data files in `src/data/`:

- **Projects** → `src/data/portfolio.ts`
- **Experience** → `src/data/experience.ts`
- **Skills** → `src/data/technical-skills.ts`
- **Personal Info** → `src/data/aboutme.ts`
- **Section Order** → `src/data/section-order.ts`
- **Metadata** → `src/data/title-description.ts`

Add project images to `public/project-images/{project-name}/` and reference them in the portfolio data.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Demo

Visit the live site: [https://nickdevs.vercel.app](https://nickdevs.vercel.app/)
