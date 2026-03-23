<div align="center">

# Mangalam HDPE Pipes & Coils — Product Landing Page

### A fully responsive, feature-rich product landing page built with pure HTML, CSS & Vanilla JavaScript — zero dependencies, zero frameworks.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![No Framework](https://img.shields.io/badge/No_Framework-100%25_Vanilla-brightgreen?style=for-the-badge)](https://github.com/murali317/Gushwork)
[![BIS Certified](https://img.shields.io/badge/Product-BIS%20%7C%20ISO%20%7C%20CE%20Certified-blue?style=for-the-badge)](https://github.com/murali317/Gushwork)

</div>

---

## 👉 Deployed Link: https://mangalamindia.netlify.app/

---

## Overview

This is a **high-performance product landing page** for **Mangalam HDPE Pipes & Coils**, a premium manufacturer of High-Density Polyethylene (HDPE) pipes for industrial, marine, and infrastructure applications. The page is purpose-built to convert visitors into qualified leads with a polished UI, interactive product experience, and a streamlined quote request flow.

The entire codebase is **pure HTML + CSS + Vanilla JS** — no build tools, no npm, no frameworks. Just open `index.html` and it works.

---

## Live Features

### UI & Interactivity
| Feature | Description |
|---|---|
| **Sticky Navigation** | Smart navbar that adds a shadow on scroll; collapses to a hamburger on mobile |
| **Sticky Price Header** | Reveals a secondary header with product name, price range, and CTA as user scrolls past the hero |
| **Hero Image Carousel** | Thumbnail-driven image carousel with active state tracking |
| **Zoom Lens** | Desktop hover zoom lens on the product image with a magnified preview panel (2.5× zoom, pixel-perfect) |
| **Dropdown Navigation** | Hoverable/clickable products dropdown in the navbar |
| **FAQ Accordion** | Smooth open/close accordion with animated chevron icons |
| **Applications Slider** | Horizontally scrollable card slider with prev/next navigation buttons |
| **Manufacturing Tabs** | Tabbed content panel showcasing each step of the production process |
| **Testimonials Marquee** | Auto-scrolling infinite testimonials strip with duplicated cards for a seamless loop |
| **Modal System** | Accessible modal dialogs for the datasheet download form and quote request form |
| **Catalogue Email Form** | Inline email capture form in the FAQ section |
| **Contact Form** | Full contact form with country code selector, name, email, and phone fields |
| **Scroll-Reveal Animations** | IntersectionObserver-powered fade-in animations on cards and sections |
| **Reduced Motion Support** | All animations respect `prefers-reduced-motion` for accessibility |

---

## Page Sections

```
┌─────────────────────────────────────────┐
│  Navbar (with sticky header on scroll)  │
├─────────────────────────────────────────┤
│  Hero — Product Carousel + Details      │
│           + Zoom Lens Preview           │
├─────────────────────────────────────────┤
│  Trust Banner — Client Logo Strip       │
├─────────────────────────────────────────┤
│  Technical Specifications Table         │
├─────────────────────────────────────────┤
│  Features Grid (6 cards)                │
├─────────────────────────────────────────┤
│  FAQ Accordion + Catalogue Email Form   │
├─────────────────────────────────────────┤
│  Versatile Applications Slider          │
├─────────────────────────────────────────┤
│  Manufacturing Process Tabs             │
├─────────────────────────────────────────┤
│  Testimonials Auto-Scroll Marquee       │
├─────────────────────────────────────────┤
│  Product Portfolio Cards                │
├─────────────────────────────────────────┤
│  Resources & Downloads                  │
├─────────────────────────────────────────┤
│  Contact CTA + Lead Capture Form        │
├─────────────────────────────────────────┤
│  Footer (columns, social links, legal)  │
└─────────────────────────────────────────┘
```

---

## Product at a Glance

| Parameter | Specification |
|---|---|
| Pipe Diameter Range | 20 mm – 1600 mm (3/4" to 63") |
| Pressure Ratings | PN 2.5, PN 4, PN 6, PN 8, PN 10, PN 12.5, PN 16 |
| Standard Dimension Ratio | SDR 33, SDR 26, SDR 21, SDR 17, SDR 13.6, SDR 11 |
| Operating Temperature | -40°C to +80°C |
| Service Life | 50+ Years (at 20°C, PN 10) |
| Material Density | 0.95 – 0.96 g/cm³ |
| Certification Standards | IS 5984, ISO 4427, ASTM D3035 |
| Joint Types | Butt Fusion, Electrofusion, Mechanical |
| Country of Origin | 🇮🇳 India |

---

## Tech Stack

```
project/
├── index.html      # Single-page layout — all 10 sections
├── styles.css      # Custom design system with CSS variables
├── script.js       # All interactivity — IIFE, strict mode, no deps
└── assets/
    ├── icons/      # Inline SVG icon assets
    └── images/     # Product, brand, and section illustrations (SVG)
```

### Design System (CSS Custom Properties)
The entire visual language is driven by a set of CSS variables defined in `:root`:

- **Colors**: `--clr-navy`, `--clr-navy-dark`, `--clr-blue-accent`, `--clr-orange` — brand-accurate
- **Typography**: `Plus Jakarta Sans` via Google Fonts, fluid size scale from `--fs-xs` to `--fs-4xl`
- **Spacing**: Consistent spacing tokens `--sp-1` through `--sp-16`
- **Radii & Shadows**: Centralized border-radius and shadow tokens for visual consistency

### JavaScript Architecture
- **IIFE + Strict Mode** — encapsulated, no global pollution
- **Passive scroll listeners** — no layout thrash on scroll events
- **IntersectionObserver** — efficient scroll-triggered reveals
- **Modal stack** — supports multiple modals, focus trapping, keyboard dismiss (`Esc`), and scroll-lock
- **Zero dependencies** — no jQuery, no Lodash, no external libraries

---

## Getting Started

No install. No build step. No terminal commands.

```bash
git clone https://github.com/murali317/Gushwork.git
cd Gushwork
# Open index.html in your browser
```

Or just drag `index.html` into any browser.

---

## Browser Support

Works in all modern browsers:

| Chrome | Firefox | Safari | Edge |
|:---:|:---:|:---:|:---:|
| ✅ | ✅ | ✅ | ✅ |

Uses standard Web APIs: `IntersectionObserver`, `matchMedia`, CSS custom properties, `scrollBy` with smooth behavior.

---

## Accessibility

- Semantic HTML5 landmark elements (`<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`)
- `aria-label`, `aria-expanded`, and `aria-hidden` attributes throughout
- Keyboard navigable modals with `Escape` to close
- `prefers-reduced-motion` media query respected for all animations
- Focus management on modal open

---

## License

This project is a client work / portfolio piece. All rights reserved.
