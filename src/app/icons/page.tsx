import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IconBrowser from '@/components/IconBrowser';
import { totalIcons } from '@/lib/icons';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: `Browse ${totalIcons} Icons — Iconyx`,
  description: `Search and browse all ${totalIcons} free SVG icons across 9 categories. Copy CDN links instantly.`,
};

export default function IconsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <div style={{
          borderBottom: '1px solid var(--border)',
          padding: '2.5rem 0 2rem',
          background: 'var(--bg-surface)',
        }}>
          <div className="container">
            <h1 className="heading-md" style={{ marginBottom: '0.5rem' }}>
              Icon Library
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
              {totalIcons} free SVG icons — click any icon to get its CDN link, HTML snippet, color selection, or React components.
            </p>
          </div>
        </div>

        <Suspense fallback={
          <div className="container" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            Loading Icon Library...
          </div>
        }>
          <IconBrowser />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
