import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem 0',
      background: 'var(--bg-surface)',
      marginTop: 'auto',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1rem' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 19 8 19 16 12 22 5 16 5 8"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          Iconyx
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Open source · MIT license · Free forever · Hosted on Vercel
        </p>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {[
            { href: '/icons', label: 'Icons' },
            { href: '/docs', label: 'Docs' },
            { href: 'https://www.linkedin.com/in/jojin-john-74386b34a/', label: 'LinkedIn' },
            { href: 'https://github.com/jojin1709/iconyx', label: 'GitHub' },
          ].map(link => (
            <a key={link.label} href={link.href} className="footer-link">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
