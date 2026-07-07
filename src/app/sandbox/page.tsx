import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SandboxBrowser from '@/components/SandboxBrowser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SVG Sandbox — Iconyx',
  description: 'Test, design, customize, and preview custom SVG path codes in real-time inside the browser playground.',
};

export default function SandboxPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h1 className="heading-md" style={{ marginBottom: '0.5rem' }}>SVG Sandbox</h1>
            <p style={{ color: 'var(--text-secondary)' }}>
              Upload or paste custom SVG paths to inspect, style, and export code.
            </p>
          </div>
          <SandboxBrowser />
        </div>
      </main>
      <Footer />
    </div>
  );
}
