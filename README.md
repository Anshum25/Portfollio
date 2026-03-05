<div align="center">

# ✦ AD — Portfolio

**Websites That Make Clients Say _"YES!"_**

A high-end, meticulously crafted portfolio website inspired by [anshumdev.com](https://anshumdev.com) — built with React, GSAP, Framer Motion, and an obsessive attention to detail.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.2-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://gsap.com)

</div>

---

## ⚡ Overview

This isn't just a portfolio — it's a *statement*. Every pixel, animation, and interaction is designed to communicate premium quality and creative confidence. Built as a pixel-perfect recreation of one of the web's most visually striking portfolio sites.

<br>

## 🎨 Features

### ✦ Design & Visual
- **Ultra-condensed typography** — Custom-scaled Outfit 900 headings mimicking the Lektorat-Condensed aesthetic
- **Tentang Nanti script font** — Custom `.otf` font loaded via `@font-face` for signature handwritten accents
- **Hero gradient** — Smooth beige → coral gradient with parallax portrait imagery
- **Dark / Light sections** — Alternating color schemes that create visual rhythm and depth
- **Glassmorphism navbar** — Frosted glass effect on scroll with smooth transparency transitions

### ✦ Interactions & Animation
- **🎯 "YES!" Cursor Trail** — Interactive text particles spawn at cursor position with randomized scale, rotation, and gravity-based falling animation with fade-out
- **Custom cursor** — Dual-layer cursor (ring + dot) with mix-blend-mode and hover scaling
- **Scroll-triggered reveals** — Elements animate into view with staggered, eased transitions via Framer Motion
- **Parallax scrolling** — Hero portrait moves with scroll depth using `useScroll` + `useTransform`
- **Rolling nav links** — Text rolls up on hover with cubic-bezier easing
- **Page transitions** — Smooth enter/exit animations between routes with `AnimatePresence`
- **Smooth scroll** — Lenis-powered buttery smooth scrolling experience
- **FAQ accordion** — Animated expand/collapse with rotating `+` icon

### ✦ Architecture
- **5 fully designed pages** — Home, Portfolio, Process, About, Contact
- **Component-driven** — Modular, reusable React components
- **Responsive** — Mobile-first design with adaptive layouts, cursor effects gracefully disabled on touch devices
- **Client-side routing** — React Router v7 with animated transitions

<br>

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 |
| **Build Tool** | Vite 7.3 |
| **Styling** | Tailwind CSS 4.2 + Vanilla CSS |
| **Animation** | Framer Motion 12 + GSAP 3.14 |
| **Smooth Scroll** | Lenis |
| **Routing** | React Router DOM 7 |
| **Fonts** | Google Fonts (Inter, Outfit) + Custom OTF (Tentang Nanti) |
| **Linting** | ESLint 9 |

<br>

## 📁 Project Structure

```
PortFollio/
├── public/
│   ├── fonts/              # Custom font files (.otf)
│   └── images/             # Portfolio images, hero portrait
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx    # Dual-layer custom cursor with hover states
│   │   ├── Footer.jsx          # Site-wide footer
│   │   ├── MobileMenu.jsx      # Fullscreen mobile navigation overlay
│   │   ├── Navbar.jsx          # Glassmorphism nav with rolling link hover
│   │   ├── SmoothScroll.jsx    # Lenis smooth scroll wrapper
│   │   └── YesTrail.jsx        # Interactive "YES!" cursor trail effect
│   ├── layouts/
│   │   └── Layout.jsx          # Root layout (Navbar + Footer + Outlet)
│   ├── pages/
│   │   ├── Home.jsx            # Hero, portfolio cards, testimonials, FAQ
│   │   ├── Portfolio.jsx       # Full portfolio showcase
│   │   ├── Process.jsx         # Step-by-step work process
│   │   ├── About.jsx           # Personal story & background
│   │   └── Contact.jsx         # Contact form & info
│   ├── App.jsx                 # Routes + AnimatePresence
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles, design tokens, animations
├── index.html
├── vite.config.js
└── package.json
```

<br>

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/Anshum25/FriendO-.git
cd PortFollio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at **`http://localhost:5173`**

### Build for Production

```bash
npm run build
npm run preview
```

<br>

## 🎭 Design Tokens

The design system is built on carefully chosen tokens defined in `index.css`:

```css
--color-beige: #F2EDE4       /* Primary background */
--color-coral: #E8533E       /* Accent / CTA color */
--color-dark: #1A1A1A        /* Text / dark sections */
--color-cream: #F5F0E8       /* Secondary background */
--color-gold-tape: #D4B96A   /* Decorative accents */

--font-heading: 'Outfit'     /* Ultra-condensed headings */
--font-body: 'Inter'         /* Clean body text */
--font-script: 'Tentang Nanti One'  /* Signature script */
```

<br>

## 🖱️ The "YES!" Trail Effect

One of the standout features — an interactive cursor trail that spawns "YES!" text elements at the cursor position across the hero section:

- **Spawns every 45ms** for dense, organic trails
- **Randomized** scale (1.3×–2.3×), rotation (±30°), and position offset
- **Physics-based animation** — text falls downward with ease-in gravity (`progress²`)
- **Delayed fade** — stays visible for 20% of duration, then fades with acceleration
- **Auto-cleanup** — elements are removed from DOM after animation completes
- **Mobile-aware** — disabled on touch devices for performance

<br>

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

<br>

## 📄 License

This project is private and not licensed for redistribution.

---

<div align="center">

**Built with ☕ and an unhealthy attention to detail.**

*Inspired by [anshumdev.com](https://anshumdev.com)*

</div>
