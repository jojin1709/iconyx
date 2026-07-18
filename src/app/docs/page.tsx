import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CDN_BASE } from '@/lib/icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation — Iconyx',
  description: 'Learn how to use Iconyx icons via CDN in HTML, CSS, React, Next.js, and more.',
};

const SECTIONS = [
  { id: 'cdn', label: 'CDN URL Format' },
  { id: 'html', label: 'HTML Usage' },
  { id: 'css', label: 'CSS / Background' },
  { id: 'react', label: 'React & Next.js' },
  { id: 'npm', label: 'NPM Package Installation' },
  { id: 'publish', label: 'Build & Publish NPM' },
  { id: 'styling', label: 'Styling Tips' },
  { id: 'download', label: 'Download Icons' },
];

export default function DocsPage() {
  const exampleCdn = `${CDN_BASE}/ui/search.svg`;
  const examplePlay = `${CDN_BASE}/media/play.svg`;

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
            <h1 className="heading-md" style={{ marginBottom: '0.5rem' }}>Documentation</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
              Everything you need to start using Iconyx icons in your projects.
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: '3rem 1.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
            className="docs-layout"
          >
            <aside className="docs-sidebar" aria-label="Documentation sections">
              <nav>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem', padding: '0 0.75rem' }}>
                  On this page
                </p>
                {SECTIONS.map(s => (
                  <a key={s.id} href={`#${s.id}`} className="docs-nav-item">{s.label}</a>
                ))}
              </nav>
            </aside>

            <div>
              <section id="cdn" className="docs-section">
                <h2>CDN URL Format</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                  Iconyx icons are served via{' '}
                  <a href="https://www.jsdelivr.com" target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--text-accent)', textDecoration: 'underline' }}>
                    jsDelivr
                  </a>
                  {' '}— a free, fast, and reliable open-source CDN. No signup or API key needed.
                </p>

                <div className="code-block" style={{ marginBottom: '1rem' }}>
                  <span className="token-url">
                    {'https://cdn.jsdelivr.net/gh/jojin1709/iconyx@main/public/icons/{category}/{name}.svg'}
                  </span>
                </div>

                <h3>Live example</h3>
                <div className="code-block">
                  <span className="token-url">{exampleCdn}</span>
                </div>

                <div style={{
                  marginTop: '1rem', padding: '1rem 1.25rem',
                  background: 'rgba(124,58,237,0.08)', border: '1px solid var(--accent-border)',
                  borderRadius: 'var(--radius)', fontSize: '0.875rem', color: 'var(--text-secondary)',
                }}>
                  💡 <strong style={{ color: 'var(--text-accent)' }}>Tip:</strong> Add <code style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-primary)' }}>@latest</code> instead of <code style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-primary)' }}>@main</code> to always get the latest version.
                </div>
              </section>

              <section id="html" className="docs-section">
                <h2>HTML Usage</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                  Use icons as regular <code style={{ fontFamily: 'JetBrains Mono, monospace' }}>&lt;img&gt;</code> tags anywhere in your HTML. Works in every browser and framework.
                </p>

                <div className="code-block">
                  <span className="token-tag">{'<img'}</span>{'\n'}
                  {'  '}
                  <span className="token-attr">src</span>=<span className="token-str">&quot;{exampleCdn}&quot;</span>{'\n'}
                  {'  '}
                  <span className="token-attr">width</span>=<span className="token-str">&quot;24&quot;</span>{'\n'}
                  {'  '}
                  <span className="token-attr">height</span>=<span className="token-str">&quot;24&quot;</span>{'\n'}
                  {'  '}
                  <span className="token-attr">alt</span>=<span className="token-str">&quot;Search&quot;</span>{'\n'}
                  <span className="token-tag">{'/>'}</span>
                </div>
              </section>

              <section id="css" className="docs-section">
                <h2>CSS / Background</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                  To style SVG icon colors dynamically using CSS, load them as masks inside stylesheets:
                </p>

                 <div className="code-block">
                  <span className="token-tag">.search-icon</span>{' {'}{'\n'}
                  {'  '}
                  <span className="token-attr">width</span>: <span className="token-str">24px</span>;{'\n'}
                  {'  '}
                  <span className="token-attr">height</span>: <span className="token-str">24px</span>;{'\n'}
                  {'  '}
                  <span className="token-cmt">{"/* Custom color properties */"}</span>{'\n'}
                  {'  '}
                  <span className="token-attr">background-color</span>: <span className="token-str">#8b5cf6</span>;{'\n'}
                  {'  '}
                  <span className="token-attr">mask</span>: <span className="token-str">url(&quot;{exampleCdn}&quot;) no-repeat center</span>;{'\n'}
                  {'  '}
                  <span className="token-attr">-webkit-mask</span>: <span className="token-str">url(&quot;{exampleCdn}&quot;) no-repeat center</span>;{'\n'}
                  {'}'}
                </div>
              </section>

              <section id="react" className="docs-section">
                <h2>React & Next.js</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                  Load customizable inline SVGs inside standard React or Next.js components:
                </p>

                <div className="code-block">
                  <span className="token-tag">import </span>
                  <span className="token-attr">React </span>
                  <span className="token-tag">from </span>
                  <span className="token-str">&apos;react&apos;</span>;{'\n\n'}
                  <span className="token-tag">{'export function '}</span>
                  <span className="token-attr">SearchIcon</span>
                  {'({ size = 24, color = "currentColor" }) {'}{'\n'}
                  {'  return ('}{'\n'}
                  {'    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">'}{'\n'}
                  {'      <circle cx="11" cy="11" r="8" />'}{'\n'}
                  {'      <line x1="21" y1="21" x2="16.65" y2="16.65" />'}{'\n'}
                  {'    </svg>'}{'\n'}
                  {'  );'}{'\n'}
                  {'}'}
                </div>

                <h3>Next.js Image component</h3>
                <div className="code-block">
                  <span className="token-tag">import </span>
                  <span className="token-attr">Image </span>
                  <span className="token-tag">from </span>
                  <span className="token-str">&apos;next/image&apos;</span>;{'\n\n'}
                  <span className="token-tag">{'<Image'}</span>{'\n'}
                  {'  '}
                  <span className="token-attr">src</span>=<span className="token-str">&quot;{examplePlay}&quot;</span>{'\n'}
                  {'  '}
                  <span className="token-attr">width</span>=<span className="token-str">{'{24}'}</span>{'\n'}
                  {'  '}
                  <span className="token-attr">height</span>=<span className="token-str">{'{24}'}</span>{'\n'}
                  {'  '}
                  <span className="token-attr">alt</span>=<span className="token-str">&quot;Play&quot;</span>{'\n'}
                  <span className="token-tag">{'/>'}</span>
                </div>

                <div style={{
                  marginTop: '1rem', padding: '1rem 1.25rem',
                  background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)',
                  borderRadius: 'var(--radius)', fontSize: '0.875rem', color: 'var(--text-secondary)',
                }}>
                  ⚠️ <strong style={{ color: '#fbbf24' }}>Next.js note:</strong> Add{' '}
                  <code style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-primary)' }}>cdn.jsdelivr.net</code>
                  {' '}to <code style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-primary)' }}>next.config.ts</code> images.remotePatterns for the Next.js Image component.
                </div>
              </section>

              <section id="npm" className="docs-section">
                <h2>NPM Package Installation</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                  Developers can install and bundle the library as a dependency locally.
                </p>
                <div className="code-block">
                  npm install iconyx
                </div>
                <h3>Import components:</h3>
                <div className="code-block">
{`import { SearchIcon, HomeIcon } from 'iconyx';

function App() {
  return <SearchIcon size={24} color="#8b5cf6" />;
}`}
                </div>
              </section>

              <section id="publish" className="docs-section">
                <h2>Build & Publish NPM</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                  To compile your local icon manifests into standard JS modules and publish them to npm registry:
                </p>
                <h3>1. Compile package output (ESM, CJS, Types):</h3>
                <div className="code-block">
                  npm run build:package
                </div>
                <h3>2. Push modifications to the npm registry:</h3>
                <div className="code-block">
                  npm publish
                </div>
              </section>

              <section id="styling" className="docs-section">
                <h2>Styling Tips</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                  Since icons are stroke-based SVGs, they respond to CSS naturally.
                </p>
                <div className="code-block">
                  <span className="token-cmt">{'/* Hover color shift */'}</span>{'\n'}
                  <span className="token-tag">{'img.icon'}</span>{' { transition: filter 0.2s; }'}{'\n'}
                  <span className="token-tag">{'img.icon:hover'}</span>{' { filter: brightness(0) invert(1); }'}{'\n\n'}
                  <span className="token-cmt">{'/* Make white icon on dark bg */'}</span>{'\n'}
                  <span className="token-tag">{'img.icon-white'}</span>{' { filter: invert(1); }'}{'\n\n'}
                  <span className="token-cmt">{'/* Spin animation */'}</span>{'\n'}
                  <span className="token-tag">{'img.icon-spin'}</span>{' { animation: spin 1s linear infinite; }'}{'\n'}
                  {'@keyframes spin { to { transform: rotate(360deg); } }'}
                </div>
              </section>

              <section id="download" className="docs-section">
                <h2>Download Icons</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                  Prefer to self-host? You can download individual SVG files or clone the full repo.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div className="code-block">
                    <span className="token-cmt">{'# Download a single icon'}</span>{'\n'}
                    <span className="token-attr">curl</span>{' '}
                    <span className="token-str">{exampleCdn}</span>
                    {' -o search.svg'}
                  </div>
                  <div className="code-block">
                    <span className="token-cmt">{'# Clone the full repo'}</span>{'\n'}
                    <span className="token-attr">git clone</span>{' '}
                    <span className="token-str">https://github.com/jojin1709/iconyx.git</span>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  All icons are in <code style={{ fontFamily: 'JetBrains Mono, monospace' }}>public/icons/{'{category}'}/{'{name}'}.svg</code>.
                  Each file is a standard 24×24 SVG with <code style={{ fontFamily: 'JetBrains Mono, monospace' }}>currentColor</code> stroke.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .docs-layout { grid-template-columns: 1fr !important; }
          .docs-sidebar { position: static !important; display: none; }
        }
        .docs-section p code {
          background: var(--bg-elevated);
          padding: 0.1em 0.35em;
          border-radius: 4px;
          font-size: 0.875em;
          color: var(--text-accent);
        }
      `}</style>
    </div>
  );
}
