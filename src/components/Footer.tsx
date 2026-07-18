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
          Open source · MIT license · Free forever · Developed by Jojin John
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          {[
            { href: '/icons', label: 'Icons' },
            { href: '/docs', label: 'Docs' },
            { href: '/changelog', label: 'Changelog' },
            { href: '/status', label: 'Status' },
            { href: '/privacy', label: 'Privacy' },
            { href: '/terms', label: 'Terms' },
            { href: '/contact', label: 'Contact' },
            { href: 'https://www.linkedin.com/in/jojin-john-74386b34a/', label: 'LinkedIn' },
            { href: 'https://github.com/jojin1709/iconyx', label: 'GitHub' },
          ].map(link => {
            const isExternal = link.href.startsWith('http') || link.href.startsWith('//');
            if (isExternal) {
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="footer-link">
                  {link.label}
                </a>
              );
            }
            return (
              <Link key={link.label} href={link.href} className="footer-link">
                {link.label}
              </Link>
            );
          })}

          {/* Buy me a coffee button (Styling hover via className instead of JS handlers) */}
          <a
            href="https://www.buymeacoffee.com/jojin1709"
            target="_blank"
            rel="noopener noreferrer"
            className="bmc-btn"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              background: '#FFDD00', color: '#000000', fontWeight: 700,
              fontSize: '0.75rem', padding: '0.45rem 0.9rem', borderRadius: 'var(--radius-sm)',
              textDecoration: 'none', transition: 'var(--transition)',
            }}
          >
            ☕ Buy me a Coffee
          </a>
        </div>
      </div>

      <style>{`
        .bmc-btn:hover {
          opacity: 0.9;
        }
      `}</style>
    </footer>
  );
}
