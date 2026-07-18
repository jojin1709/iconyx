'use client';
import Link from 'next/link';

export default function NpmPlaygroundPage() {
  return (
    <div className="container" style={{ maxWidth: '800px', padding: '3rem 1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span className="badge badge-accent" style={{ marginBottom: '0.75rem' }}>NPM Distribution</span>
        <h1 className="heading-lg" style={{ marginBottom: '0.5rem' }}>Package Test Playground</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Verify, configure, and install the Iconyx npm package output inside your local bundlers.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Installation */}
        <div className="card" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            1. Installation Command
          </h2>
          <pre className="code-block" style={{ fontSize: '0.8rem', padding: '0.75rem 1rem' }}>
            npm install iconyx
          </pre>
        </div>

        {/* Integration guides */}
        <div className="card" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            2. Import Custom Components
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Imports compile directly to CommonJS and ES Modules with built-in TypeScript declarations.
          </p>

          <pre className="code-block" style={{ fontSize: '0.75rem', padding: '0.75rem 1rem', whiteSpace: 'pre-wrap', marginBottom: '1.25rem' }}>
{`// ES Module Imports (Vite, Next.js, Webpack)
import { SearchIcon, HomeIcon, SettingsIcon } from 'iconyx';

function App() {
  return (
    <div>
      <SearchIcon size={24} color="#8b5cf6" strokeWidth={2} />
      <HomeIcon size={24} color="#10b981" />
    </div>
  );
}`}
          </pre>

          <pre className="code-block" style={{ fontSize: '0.75rem', padding: '0.75rem 1rem', whiteSpace: 'pre-wrap' }}>
{`// CommonJS Imports (Node, Express)
const { SearchIcon } = require('iconyx');`}
          </pre>
        </div>

        {/* Local Verification stats */}
        <div className="card" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            3. Package Build Verification
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>ESM Package</span>
              <strong style={{ fontSize: '0.9rem', color: '#10b981' }}>✓ VALIDATED</strong>
            </div>
            <div style={{ padding: '1rem', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>CJS Package</span>
              <strong style={{ fontSize: '0.9rem', color: '#10b981' }}>✓ VALIDATED</strong>
            </div>
            <div style={{ padding: '1rem', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>D.TS Declarations</span>
              <strong style={{ fontSize: '0.9rem', color: '#10b981' }}>✓ VALIDATED</strong>
            </div>
          </div>
        </div>

      </div>

      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <Link href="/icons" className="btn-secondary" style={{ display: 'inline-flex' }}>
          Back to Library
        </Link>
      </div>

    </div>
  );
}
