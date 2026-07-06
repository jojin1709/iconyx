'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';

const NavLinks = [
  { href: '/icons', label: 'Browse Icons' },
  { href: '/docs',  label: 'Docs' },
  { href: '/sandbox', label: 'Sandbox' },
];

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <Link href="/" className="logo">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ color: 'var(--accent)' }}>
            <polygon points="12 2 19 8 19 16 12 22 5 16 5 8"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <span>Iconyx<span className="logo-dot">.</span></span>
        </Link>

        {/* Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          {NavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="btn-ghost"
              style={{
                color: pathname.startsWith(link.href) ? 'var(--text-accent)' : undefined,
                background: pathname.startsWith(link.href) ? 'var(--accent-subtle)' : undefined,
                borderColor: pathname.startsWith(link.href) ? 'var(--accent-border)' : undefined,
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Request Icon Link */}
          <a
            href="https://github.com/jojin1709/iconyx/issues/new?title=[Icon+Request]+&body=Please+add+the+following+icon:"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Request Icon
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="btn-ghost"
            style={{ padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Toggle light/dark theme"
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          <a
            href="https://www.linkedin.com/in/jojin-john-74386b34a/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ marginLeft: '0.25rem' }}
            aria-label="LinkedIn"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>

          <a
            href="https://github.com/jojin1709/iconyx"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ marginLeft: '0.25rem' }}
            aria-label="GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
