# <img src="https://raw.githubusercontent.com/jojin1709/iconyx/main/src/app/icon.svg" width="32" height="32" align="center" /> Iconyx — Free SVG Icon CDN

**Developed by JOJIN JOHN**

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-yellow.svg?style=flat-square&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/jojin1709)

Iconyx is a hand-crafted collection of 174 clean, vector SVG icons designed for modern web applications. The project functions as an instant, zero-setup CDN website so developers can drop beautiful icons into their websites with a single line of HTML code.

Website URL: **https://iconyx-cdn.vercel.app**

---

## ✨ Premium Developer Tools & Exporters

Iconyx is equipped with high-fidelity design tools, custom asset builders, and cross-framework exporters:

* 🛠️ **Universal Exporters Drawer:** copy customizable codes for React, Vue 3, Svelte, Tailwind CSS inline, React Native, custom Web Components, CSS Mask-image rules, and Base64 Data URIs.
* ⚡ **Command Palette Search:** press `/` or `Ctrl + K` to open a spotlight glassmorphic command search bar. Matching keywords are highlighted dynamically.
* 🎨 **Style Family Canvas:** compare default Outline, Dotted, 3D Fluency (gradients), and Liquid Glass style families side-by-side.
* 🎭 **SVG Path Morphing CSS Generator:** select two vector assets (like chevron-up and chevron-down) to compile matching path morphing CSS keyframes.
* 🗜️ **Client Path Minifier:** drag-and-drop or upload custom SVGs, optimize path precision, reduce decimal floats, and monitor compression metrics.
* 📦 **Multiselection Collectors:** select multiple icons across categories and download custom ZIP directories, structured JSON mappings, or bundled SVG Sprite Sheets.
* 🔠 **SVG to Webfont Compiler:** convert custom selections into CSS icon webfont mappings (`.woff2` compatible).
* 📈 **Latency Status Purger:** monitor CDN edge node ping fluctuations and purge jsDelivr cache.

---

## ⚡ Quick Start (No Install Needed)

You do **not** need to install this package locally or run npm commands. Just copy the URL of the icon you want and use it directly.

### 1. HTML Image Tag
```html
<img src="https://cdn.jsdelivr.net/gh/jojin1709/iconyx@main/public/icons/ui/search.svg" width="24" height="24" alt="Search" />
```

### 2. CSS Background Mask (Color Customizable)
```css
.search-icon {
  width: 24px;
  height: 24px;
  background-color: #7c3aed; /* Set any custom color here */
  mask: url("https://cdn.jsdelivr.net/gh/jojin1709/iconyx@main/public/icons/ui/search.svg") no-repeat center;
  -webkit-mask: url("https://cdn.jsdelivr.net/gh/jojin1709/iconyx@main/public/icons/ui/search.svg") no-repeat center;
}
```

### 3. Next.js Image Component
```jsx
import Image from 'next/image';

<Image 
  src="https://cdn.jsdelivr.net/gh/jojin1709/iconyx@main/public/icons/ui/search.svg" 
  width={24} 
  height={24} 
  alt="Search" 
/>
```

### 4. NPM Package Installation
```bash
npm install iconyx
```
Inside React/Next.js/Vite:
```tsx
import { SearchIcon, HomeIcon } from 'iconyx';

function App() {
  return <SearchIcon size={24} color="#8b5cf6" />;
}
```

---

## 🛠️ Packaging & Publishing Workflow (For Library Maintainers)

If you are modifying, adding new icons, or compiling the package distribution local build:

### 1. Compile the distribution package assets (ESM, CJS, Types):
```bash
npm run build:package
```

### 2. Push compiled updates to the npm registry:
```bash
npm publish
```

---

## 📁 Icon Categories & Style Families

Iconyx features 174 icons organized across 15 semantic categories and style sub-families:

### Semantic Categories & Styles
- **UI:** Controls, sliders, settings, badges, and state indicators
- **Arrows:** Navigation directions, chevron pointers, and loops
- **Navigation:** Location pointers, compass, themes, and layouts
- **Communication:** Mail, message bubbles, alerts, and bells
- **Files:** Document states, folders, download/upload, and trash
- **Media:** Play, pause, volume, cameras, and microphones
- **Social:** GitHub, Twitter X, LinkedIn, Discord, and Telegram
- **Devices:** Smartphones, laptops, monitors, tablets, and headphones
- **Commerce:** Shopping carts, bags, credit cards, tags, and wallets
- **Weather:** Sun, moon, clouds, rain, snow, wind, and thermometers
- **Data:** Charts, databases, servers, and cloud actions
- **Design:** Layers, crops, scissors, and design tools
- **Dotted:** Styled dotted outlines for wireframes and clean vector layout designs
- **3D Fluency:** Gradients, shadows, and radial fills for a visual pop
- **Liquid Glass:** Glassmorphic translucent layers with soft backdrops

---

## 🚀 CDN Hosting Details
- **Provider:** jsDelivr (Global multi-CDN delivery)
- **Edge Cache Locations:** 750+ PoPs worldwide
- **Pricing:** 100% Free Forever
- **License:** MIT License (Use in personal & commercial projects)
