import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/context/ToastContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Iconyx — Free Icon CDN",
  description:
    "129 beautiful, free SVG icons delivered via a global CDN. Copy a single URL and drop icons into any project — no download, no setup.",
  keywords: ["icons", "svg", "cdn", "free icons", "icon library", "web icons"],
  openGraph: {
    title: "Iconyx — Free Icon CDN",
    description: "129 beautiful, free SVG icons delivered via a global CDN.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
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
