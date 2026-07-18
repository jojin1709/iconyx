import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Iconyx',
  description: 'Privacy policy for the Iconyx SVG Icon CDN. We do not collect or track any personal user data.',
};

export default function PrivacyPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="heading-md" style={{ marginBottom: '1.5rem' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            Last Updated: July 2026
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            <section>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>1. Data Collection</h2>
              <p>
                Iconyx is a free SVG icon CDN. We do not require account registration, newsletter signups, or payment details. We do not collect, store, or share any personal identifier database records.
              </p>
            </section>

            <section>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>2. CDN Delivery & Logs</h2>
              <p>
                Icons are served via jsDelivr CDN. jsDelivr may process transient operational network logging details (such as IP addresses and User-Agent headers) strictly for security, rate-limiting protection, and geographical content delivery. We do not access or control these logs.
              </p>
            </section>

            <section>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>3. Browser Local Storage</h2>
              <p>
                The Iconyx website utilizes the browser&apos;s local storage (`localStorage`) to remember user-specific interface settings, such as your dark/light theme preference and your recently/frequently copied icons. This data is strictly sandboxed inside your local browser and is never transmitted to our servers.
              </p>
            </section>

            <section>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>4. Changes to This Policy</h2>
              <p>
                We reserve the right to modify this privacy statement at any time. Any changes will be reflected with an updated date at the top of this page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
