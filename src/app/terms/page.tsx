import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Iconyx',
  description: 'Terms of service for utilizing the Iconyx SVG Icon CDN.',
};

export default function TermsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="heading-md" style={{ marginBottom: '1.5rem' }}>Terms of Service</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            Last Updated: July 2026
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            <section>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>1. Acceptance of Terms</h2>
              <p>
                By accessing the Iconyx website or hotlinking assets from our CDN paths, you accept and agree to follow these Terms of Service. If you do not agree, please download the icons and host them on your own servers.
              </p>
            </section>

            <section>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>2. CDN License & Use</h2>
              <p>
                All icons are licensed under the MIT License. You may hotlink, download, copy, bundle, or distribute files for personal and commercial applications.
              </p>
            </section>

            <section>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>3. Fair CDN Usage Policy</h2>
              <p>
                Iconyx provides CDN files free of charge via jsDelivr. We do not impose rate limits. However, we ask that you do not perform automated scraping, DDoS attacks, or generate excessive load aimed at disrupting the network delivery.
              </p>
            </section>

            <section>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>4. Disclaimer of Warranty</h2>
              <p>
                Iconyx is provided &quot;as is&quot; without warranties of any kind. We do not guarantee continuous CDN uptime or availability of specific assets, though we strive to provide reliable and persistent URLs.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
