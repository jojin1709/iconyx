import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/context/ToastContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Iconyx — Free Open Source SVG Icon CDN",
  description:
    "Discover 160+ beautiful, free open-source vector SVG icons delivered via a lightning-fast global CDN. Perfect for web design, apps, and developer projects. Developed by Jojin John.",
  keywords: ["free icons", "svg icons", "icon cdn", "open source icons", "vector icons", "web icons", "developer tools", "jojin john"],
  authors: [{ name: "Jojin John" }],
  verification: {
    google: "rRe1XC1rRsDKwu4oxGIKBjn3BQPFZZVcZ8VfTGS37dU",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Iconyx — Free Open Source SVG Icon CDN",
    description: "160+ beautiful, free open-source vector SVG icons delivered via a global CDN. Developed by Jojin John.",
    url: "https://iconyx-cdn.vercel.app",
    siteName: "Iconyx",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iconyx — Free Open Source SVG Icon CDN",
    description: "160+ beautiful, free open-source vector SVG icons delivered via a global CDN. Developed by Jojin John.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Rich Search Snippet schema (JSON-LD Structured Data)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Iconyx",
    "description": "160+ free open-source SVG vector icons served via a global jsDelivr CDN.",
    "url": "https://iconyx-cdn.vercel.app",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "author": {
      "@type": "Person",
      "name": "Jojin John",
      "jobTitle": "Developer",
      "url": "https://www.linkedin.com/in/jojin-john-74386b34a/"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="jojin1709"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#7c3aed"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
          async
        />
      </head>
      <body>
        <ThemeProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
