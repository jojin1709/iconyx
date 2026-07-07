import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';
import { icons, CATEGORIES, totalIcons, CDN_BASE } from '@/lib/icons';

// Curated hero icons — 24 for a 6×4 grid
const HERO_ICON_NAMES = [
  'search','heart','star','bell','home','mail',
  'github','download','settings','arrow-right','check-circle','lock',
  'play','camera','code','terminal','link','share',
  'bookmark','refresh','map-pin','upload','message-circle','filter',
];

const HERO_ICONS = HERO_ICON_NAMES
  .map(name => icons.find(i => i.name === name))
  .filter(Boolean);

// Float class cycles 1–6 for animation variety
const FLOAT_CLASSES = ['float-1','float-2','float-3','float-4','float-5','float-6'];

const FEATURE_CARDS = [
  {
    icon: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
    title: 'Global CDN',
    desc: 'Powered by jsDelivr — your icons are delivered from 750+ PoPs worldwide with near-zero latency.',
    accent: 'var(--accent)',
    delay: '0s',
  },
  {
    icon: `<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>`,
    title: 'One-Line Usage',
    desc: 'Drop a single <img> tag anywhere — HTML, React, Vue, plain CSS. No install or bundler needed.',
    accent: 'var(--cyan)',
    delay: '0.1s',
  },
  {
    icon: `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`,
    title: '100% Free Forever',
    desc: 'Open source under MIT. Host it yourself or use our CDN — always free, no rate limits or API keys.',
    accent: 'var(--emerald)',
    delay: '0.2s',
  },
  {
    icon: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
    title: 'currentColor Ready',
    desc: 'Stroke-based SVGs respond to CSS color. Resize, recolor, and animate with a single CSS property.',
    accent: 'var(--amber)',
    delay: '0.3s',
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ────────────────────────────────────────────────── */}
        <section style={{
          position: 'relative', overflow: 'hidden',
          padding: 'clamp(5rem, 12vw, 9rem) 0 clamp(4rem, 10vw, 7rem)',
          minHeight: '92vh', display: 'flex', alignItems: 'center',
        }}>
          {/* Animated dot grid bg */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 0,
            backgroundImage: 'radial-gradient(rgba(124,58,237,0.18) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          }}/>

          {/* Animated orbs */}
          <div className="orb orb-purple orb-animated-1" style={{
            width: 600, height: 600, top: '-150px', right: '-80px', opacity: 0.18,
          }}/>
          <div className="orb orb-blue orb-animated-2" style={{
            width: 450, height: 450, bottom: '-100px', left: '-100px', opacity: 0.14,
          }}/>
          <div className="orb orb-cyan" style={{
            width: 250, height: 250, top: '30%', left: '40%', opacity: 0.07,
          }}/>

          {/* Floating particles */}
          {[
            { top: '15%', left: '8%', delay: '0s', dur: '3.5s' },
            { top: '70%', left: '12%', delay: '1s', dur: '4.5s' },
            { top: '25%', right: '10%', delay: '0.5s', dur: '3s' },
            { top: '65%', right: '15%', delay: '2s', dur: '5s' },
            { top: '45%', left: '22%', delay: '1.5s', dur: '4s' },
            { top: '80%', right: '25%', delay: '0.8s', dur: '3.8s' },
          ].map((p, i) => (
            <div key={i} className="particle" style={{
              ...p,
              width: i % 2 === 0 ? '4px' : '3px',
              height: i % 2 === 0 ? '4px' : '3px',
              opacity: 0.4,
              animation: `twinkle ${p.dur} ease-in-out infinite ${p.delay}`,
            } as React.CSSProperties}/>
          ))}

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
              gap: '4rem', alignItems: 'center',
            }} className="hero-grid-layout">

              {/* ── Left: text ── */}
              <div>
                {/* Badge */}
                <div className="animate-fade-up" style={{ opacity: 0, animationDelay: '0.1s', animationFillMode: 'forwards', marginBottom: '1.5rem', display: 'inline-block' }}>
                  <span className="badge badge-green">
                    <svg width="7" height="7" viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="4"/></svg>
                    Free · Open Source · MIT License
                  </span>
                </div>

                {/* Heading */}
                <div className="animate-fade-up" style={{ opacity: 0, animationDelay: '0.2s', animationFillMode: 'forwards', marginBottom: '1.5rem' }}>
                  <h1 className="heading-xl" style={{ lineHeight: 1.05 }}>
                    Beautiful icons,
                    <br />
                    <span className="text-gradient-animated">instant CDN.</span>
                  </h1>
                </div>

                {/* Subtitle */}
                <div className="animate-fade-up" style={{ opacity: 0, animationDelay: '0.35s', animationFillMode: 'forwards', marginBottom: '2rem' }}>
                  <p style={{
                    fontSize: '1.125rem', lineHeight: 1.75,
                    color: 'var(--text-secondary)',
                    maxWidth: '480px',
                  }}>
                    {totalIcons} hand-crafted SVG icons across {CATEGORIES.length - 1} categories.
                    Copy one URL and use anywhere — no signup, no npm, no hassle.
                  </p>
                </div>

                {/* Quick start code */}
                <div className="animate-fade-up" style={{ opacity: 0, animationDelay: '0.45s', animationFillMode: 'forwards', marginBottom: '2rem' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    marginBottom: '0.5rem',
                    fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600,
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                  }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }}/>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }}/>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}/>
                    <span style={{ marginLeft: '0.4rem' }}>Quick start</span>
                  </div>
                  <div className="code-block">
                    <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>{`<!-- Drop in any HTML -->`}</span>{'\n'}
                    <span className="token-tag">{'<img '}</span>
                    <span className="token-attr">src</span>=<span className="token-str">&quot;{CDN_BASE}/ui/search.svg&quot;</span>
                    {'  '}
                    <span className="token-attr">width</span>=<span className="token-str">&quot;24&quot;</span>
                    <span className="token-tag">{' />'}</span>
                    <span className="cursor-blink" style={{ marginLeft: '2px' }}></span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="animate-fade-up" style={{ opacity: 0, animationDelay: '0.55s', animationFillMode: 'forwards' }}>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Link href="/icons" className="btn-primary" id="cta-browse-icons">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7"/>
                        <rect x="14" y="3" width="7" height="7"/>
                        <rect x="14" y="14" width="7" height="7"/>
                        <rect x="3" y="14" width="7" height="7"/>
                      </svg>
                      Browse {totalIcons} Icons
                    </Link>
                    <Link href="/docs" className="btn-secondary" id="cta-view-docs">
                      View Docs
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* ── Right: animated floating icon grid ── */}
              <div style={{ position: 'relative' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  gap: '0.65rem',
                  transform: 'rotate(-4deg) scale(0.93)',
                  transformOrigin: 'center center',
                }}>
                  {HERO_ICONS.map((icon, i) => icon && (
                    <div
                      key={icon.name}
                      className={`hero-icon-card ${FLOAT_CLASSES[i % 6]}`}
                      style={{
                        opacity: 0,
                        animation: `float-up 0.5s ease ${0.05 * i}s forwards, ` +
                          `${['float-bob','float-bob-alt','float-bob-slow','float-bob','float-bob-alt','float-bob-slow'][i % 6]} ` +
                          `${3.8 + (i % 4) * 0.5}s ease-in-out ${0.05 * i + 0.8}s infinite, ` +
                          `glow-pulse ${4.5 + (i % 5)}s ease-in-out ${0.3 * (i % 6)}s infinite`,
                      }}
                    >
                      <svg
                        width="20" height="20"
                        viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        aria-hidden="true"
                        dangerouslySetInnerHTML={{ __html: icon.svgContent }}
                      />
                    </div>
                  ))}
                </div>

                {/* Radial fade overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'radial-gradient(ellipse at center, transparent 20%, var(--bg-base) 85%)',
                  pointerEvents: 'none',
                }}/>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ─────────────────────────────────────────────── */}
        <section style={{
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          background: 'var(--bg-surface)',
        }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
            }}>
              {[
                { target: totalIcons, suffix: '', label: 'Free icons', color: 'var(--accent-light)' },
                { target: CATEGORIES.length - 1, suffix: '', label: 'Categories', color: 'var(--cyan)' },
                { target: 750, suffix: '+', label: 'CDN locations', color: 'var(--emerald)' },
                { target: 0, suffix: '', prefix: '$', label: 'Cost, forever', color: 'var(--amber)' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="stat-card"
                  style={{ borderRight: i < 3 ? '1px solid var(--border)' : undefined }}
                >
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    color={stat.color}
                    duration={1800}
                  />
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ──────────────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
                Everything you need.<br />
                <span className="text-gradient">Nothing you don&apos;t.</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', maxWidth: '500px', margin: '0 auto' }}>
                Built for developers who want great icons without the setup overhead.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}>
              {FEATURE_CARDS.map((feat) => (
                <div
                  key={feat.title}
                  className="feature-card animate-reveal"
                  style={{ animationDelay: feat.delay }}
                >
                  <div className="feature-icon" style={{
                    borderColor: `${feat.accent}33`,
                    background: `${feat.accent}15`,
                    color: feat.accent,
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      dangerouslySetInnerHTML={{ __html: feat.icon }}
                    />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.0625rem', marginBottom: '0.6rem' }}>
                    {feat.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.65 }}>
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Category preview ──────────────────────────────────── */}
        <section className="section" style={{
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}>
          <div className="container">
            <h2 className="heading-md" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              Browse by category
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '1rem',
            }}>
              {CATEGORIES.filter(c => c.id !== 'all').map((cat, ci) => {
                const catIcons = icons.filter(i => i.category === cat.id).slice(0, 4);
                return (
                  <Link
                    href={`/icons?category=${cat.id}`}
                    key={cat.id}
                    className="card animate-reveal"
                    style={{ padding: '1.25rem', textDecoration: 'none', animationDelay: `${ci * 0.07}s` }}
                    id={`category-${cat.id}`}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.875rem' }}>
                      {catIcons.map(icon => (
                        <div key={icon.name} style={{
                          width: '36px', height: '36px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)',
                        }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            style={{ color: 'var(--text-secondary)' }}
                            dangerouslySetInnerHTML={{ __html: icon.svgContent }}
                          />
                        </div>
                      ))}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                      {cat.emoji} {cat.label}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {icons.filter(i => i.category === cat.id).length} icons
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── How it works ──────────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="heading-lg">
                Up and running in{' '}
                <span className="text-gradient">3 seconds</span>
              </h2>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              counterReset: 'steps',
            }}>
              {[
                { n: '01', title: 'Find your icon', desc: `Browse ${totalIcons}+ icons across ${CATEGORIES.length - 1} categories. Search by name or tag.` },
                { n: '02', title: 'Copy the CDN URL', desc: 'Click any icon and copy the jsDelivr CDN link — one click.' },
                { n: '03', title: 'Drop it in', desc: 'Paste the URL in an <img> tag, CSS background, or React component.' },
              ].map((step) => (
                <div key={step.n} className="card" style={{ padding: '2rem', position: 'relative' }}>
                  <div style={{
                    fontSize: '3rem', fontWeight: 900,
                    color: 'var(--accent)', opacity: 0.15,
                    fontFamily: 'JetBrains Mono, monospace',
                    lineHeight: 1, marginBottom: '1rem',
                    letterSpacing: '-0.05em',
                  }}>
                    {step.n}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.0625rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-accent)',
              borderRadius: 'var(--radius-xl)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div className="orb orb-purple" style={{
                width: 400, height: 400,
                top: '-120px', left: '50%', transform: 'translateX(-50%)',
                opacity: 0.12,
              }}/>
              <p style={{
                marginBottom: '1rem', fontSize: '0.875rem',
                color: 'var(--text-muted)', textTransform: 'uppercase',
                letterSpacing: '0.1em', fontWeight: 600, position: 'relative',
              }}>
                Get started in seconds
              </p>
              <h2 className="heading-lg" style={{ marginBottom: '1.5rem', position: 'relative' }}>
                Start using{' '}
                <span className="text-gradient-animated">Iconyx</span>{' '}
                today
              </h2>
              <p style={{
                color: 'var(--text-secondary)', marginBottom: '2.5rem',
                fontSize: '1.0625rem', position: 'relative',
              }}>
                No account. No installation. No rate limits. Just copy a URL and go.
              </p>
              <div style={{
                display: 'flex', gap: '1rem',
                justifyContent: 'center', flexWrap: 'wrap', position: 'relative',
              }}>
                <Link href="/icons" className="btn-primary" id="cta-bottom-browse">
                  Browse All Icons
                </Link>
                <Link href="/docs" className="btn-secondary" id="cta-bottom-docs">
                  Read the Docs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .hero-grid-layout { grid-template-columns: 1fr !important; }
          .hero-grid-layout > div:last-child { display: none; }
        }
        .animate-reveal {
          opacity: 0;
          animation: reveal-up 0.7s ease forwards;
        }
      `}</style>
    </>
  );
}
