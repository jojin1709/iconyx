<div align="center">

<img src="https://raw.githubusercontent.com/jojin1709/iconyx/main/src/app/icon.svg" alt="Iconyx" width="80" height="80">

# Iconyx — Free SVG Icon CDN

254 hand-crafted vector icons for modern web applications. Zero setup. Global CDN. One line of code.

<a href="https://iconyx-cdn.vercel.app"><img src="https://img.shields.io/badge/Website-iconyx--cdn.vercel.app-7c3aed?style=for-the-badge" alt="Website"></a>
<a href="https://www.npmjs.com/package/iconyx"><img src="https://img.shields.io/npm/v/iconyx?style=for-the-badge&logo=npm&color=cb3837" alt="npm"></a>
<a href="https://github.com/jojin1709/iconyx/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"></a>
<a href="https://www.buymeacoffee.com/jojin1709"><img src="https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-yellow?style=for-the-badge&logo=buy-me-a-coffee" alt="Donate"></a>

---

</div>

## What is Iconyx?

Iconyx is a hand-crafted collection of **254 clean, vector SVG icons** designed for modern web applications. It functions as an instant, zero-setup CDN website so developers can drop beautiful icons into their websites with a single line of HTML code.

No installs. No build steps. Just copy a URL and use it.

> [!TIP]
> **Try it now:** open [iconyx-cdn.vercel.app](https://iconyx-cdn.vercel.app), search for any icon, and copy the CDN link. It works everywhere — HTML, React, Vue, Tailwind, and more.

---

## Table of Contents

- [What is Iconyx?](#what-is-iconyx)
- [Quick Start](#quick-start)
- [Developer Tools](#developer-tools)
- [Icon Categories](#icon-categories)
- [Style Families](#style-families)
- [NPM Package](#npm-package)
- [CDN Details](#cdn-details)
- [License](#license)
- [Author](#author)

---

## Quick Start

You do **not** need to install anything. Just copy the URL of the icon you want and use it directly.

### HTML Image Tag

```html
<img src="https://cdn.jsdelivr.net/gh/jojin1709/iconyx@main/public/icons/ui/search.svg" width="24" height="24" alt="Search" />
```

### CSS Background Mask (Color Customizable)

```css
.search-icon {
  width: 24px;
  height: 24px;
  background-color: #7c3aed;
  mask: url("https://cdn.jsdelivr.net/gh/jojin1709/iconyx@main/public/icons/ui/search.svg") no-repeat center;
  -webkit-mask: url("https://cdn.jsdelivr.net/gh/jojin1709/iconyx@main/public/icons/ui/search.svg") no-repeat center;
}
```

### Next.js / React

```jsx
import Image from 'next/image';

<Image
  src="https://cdn.jsdelivr.net/gh/jojin1709/iconyx@main/public/icons/ui/search.svg"
  width={24}
  height={24}
  alt="Search"
/>
```

### NPM Package

```bash
npm install iconyx
```

```tsx
import { SearchIcon, HomeIcon } from 'iconyx';

function App() {
  return <SearchIcon size={24} color="#8b5cf6" />;
}
```

---

## Developer Tools

Iconyx is equipped with high-fidelity design tools, custom asset builders, and cross-framework exporters:

| Tool | Description |
| --- | --- |
| **Universal Exporters** | Copy customizable code for React, Vue 3, Svelte, Tailwind CSS, React Native, Web Components, CSS Mask, and Base64. |
| **Command Palette** | Press `/` or `Ctrl+K` to open a glassmorphic search bar with dynamic keyword highlighting. |
| **Style Families** | Compare Outline, Dotted, 3D Fluency, and Liquid Glass styles side-by-side. |
| **SVG Path Morphing** | Select two icons to generate CSS keyframe morphing animations. |
| **SVG Path Minifier** | Drag-and-drop SVG optimization with path precision and compression metrics. |
| **Multi-Select Export** | Select multiple icons and download as ZIP, JSON, or SVG Sprite Sheet. |
| **Webfont Compiler** | Convert icon selections into CSS webfont mappings (`.woff2` compatible). |
| **CDN Status & Purge** | Monitor jsDelivr edge latency and purge cache on demand. |

---

## Icon Categories

254 icons organized across **15 semantic categories**:

| Category | Icons | Description |
| --- | --- | --- |
| **UI** | 49 | Controls, sliders, settings, badges, and state indicators |
| **Arrows** | 15 | Navigation directions, chevrons, and loops |
| **Navigation** | 18 | Location, compass, themes, and layout controls |
| **Communication** | 11 | Mail, message bubbles, alerts, and bells |
| **Files** | 14 | Documents, folders, download/upload, and trash |
| **Media** | 10 | Play, pause, volume, cameras, and microphones |
| **Social** | 17 | GitHub, Twitter X, LinkedIn, Discord, Telegram, and more |
| **Devices** | 15 | Smartphones, laptops, monitors, tablets, and headphones |
| **Commerce** | 12 | Shopping carts, bags, credit cards, tags, and wallets |
| **Weather** | 11 | Sun, moon, clouds, rain, snow, wind, and thermometers |
| **Data** | 12 | Charts, databases, servers, and cloud actions |
| **Design** | 10 | Layers, crops, scissors, and design tools |
| **Dotted** | 20 | Styled dotted outlines for wireframes and clean layouts |
| **3D Fluency** | 19 | Gradients, shadows, and radial fills for visual depth |
| **Liquid Glass** | 20 | Glassmorphic translucent layers with soft backdrops |

---

## Style Families

Every icon is available in four visual styles:

| Style | Description |
| --- | --- |
| **Outline** | Clean, minimal line icons — the default |
| **Dotted** | Dotted stroke variants for wireframes and playful UIs |
| **3D Fluency** | Gradient-filled with shadows for a dimensional pop |
| **Liquid Glass** | Frosted glass translucent layers with soft blurs |

---

## NPM Package

The `iconyx` npm package provides tree-shakable React components:

```bash
npm install iconyx
```

```tsx
import { SearchIcon, HomeIcon, BellIcon } from 'iconyx';

function App() {
  return (
    <div>
      <SearchIcon size={24} color="#8b5cf6" />
      <HomeIcon size={20} />
      <BellIcon size={20} color="#ef4444" />
    </div>
  );
}
```

---

## CDN Details

| Detail | Value |
| --- | --- |
| **Provider** | jsDelivr (Global multi-CDN delivery) |
| **Edge Locations** | 750+ PoPs worldwide |
| **Pricing** | 100% Free Forever |
| **Uptime** | 99.9% SLA |

---

## License

Iconyx is licensed under the [MIT License](LICENSE). Use freely in personal and commercial projects.

---

## Author

**Developed by [Jojin John](https://www.linkedin.com/in/jojin-john-74386b34a/)**

<a href="https://www.buymeacoffee.com/jojin1709"><img src="https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-yellow?style=flat-square&logo=buy-me-a-coffee" alt="Donate"></a>

<p align="center">
  <b>Built for developers who ship fast.</b>
</p>
