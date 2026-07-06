# <img src="https://raw.githubusercontent.com/jojin1709/iconyx/main/src/app/icon.svg" width="32" height="32" align="center" /> Iconyx — Free SVG Icon CDN

**Developed by JOJIN JOHN**

Iconyx is a hand-crafted collection of 160 clean, vector SVG icons designed for modern web applications. The project functions as an instant, zero-setup CDN website so developers can drop beautiful icons into their websites with a single line of HTML code.

Website URL: **https://iconyx-cdn.vercel.app**

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

## 📁 Icon Categories

Iconyx features 160 icons organized across 12 clean categories:
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

---

## 🚀 CDN Hosting Details
- **Provider:** jsDelivr (Global multi-CDN delivery)
- **Edge Cache Locations:** 750+ PoPs worldwide
- **Pricing:** 100% Free Forever
- **License:** MIT License (Use in personal & commercial projects)
