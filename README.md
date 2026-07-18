# <img src="https://raw.githubusercontent.com/jojin1709/iconyx/main/src/app/icon.svg" width="32" height="32" align="center" /> Iconyx — Free SVG Icon CDN

**Developed by JOJIN JOHN**

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-yellow.svg?style=flat-square&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/jojin1709)

Iconyx is a hand-crafted collection of 174 clean, vector SVG icons designed for modern web applications. The project functions as an instant, zero-setup CDN website so developers can drop beautiful icons into their websites with a single line of HTML code.

Website URL: **https://iconyx-cdn.vercel.app**

---

## ✨ Features Added in v1.2.0

* 🎨 **New Visual Style Families**:
  * **Dotted**: Clean vector paths with dotted strokes (`stroke-dasharray="2 3"`).
  * **3D Fluency**: Rich gradients, multi-layer offsets, and shadow filters for a 3D bubble/tactile look.
  * **Liquid Glass**: Translucent, frosted glassmorphism elements with double-layer styling and blurs.
* 🗂 **Grouped Sidebar Browser Layout**: Replaced the horizontal filter bar with a responsive, sticky left sidebar browser grouping semantic Categories and visual Style Families.
* 🔍 **Smart Synonym-Matching Engine**: Search queries map semantic meanings (e.g. searching "delete", "bin", or "remove" correctly matches the "trash" icon).
* 💾 **Dynamic Custom Styled Downloads**: Export SVGs that dynamically output custom sizes, stroke-widths, and hex colors set in the live customization controls panel.
* ⏳ **Recently/Frequently Used Icons Row**: Local storage logs copy actions to display a quick-access row at the top of the grid view.

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

---

## 📁 Icon Categories & Style Families

Iconyx features 174 icons organized across semantic categories and style sub-families:

### Semantic Categories
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

### Visual Style Families
- **Dotted:** Styled dotted paths for wireframes and clean vector layout designs
- **3D Fluency:** Gradients, shadows, and radial fills for a visual pop
- **Liquid Glass:** Glassmorphic translucent layers with soft backdrops

---

## 🚀 CDN Hosting Details
- **Provider:** jsDelivr (Global multi-CDN delivery)
- **Edge Cache Locations:** 750+ PoPs worldwide
- **Pricing:** 100% Free Forever
- **License:** MIT License (Use in personal & commercial projects)
