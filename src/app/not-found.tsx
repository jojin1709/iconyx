'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '100vh', padding: '2rem', textAlign: 'center', position: 'relative',
      overflow: 'hidden', background: 'var(--bg-base)'
    }}>
      {/* Glow Orbs */}
      <div className="orb orb-purple orb-animated-1" style={{ width: '400px', height: '400px', top: '-10%', left: '30%', opacity: 0.15 }} />
      
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '480px' }}>
        {/* Animated broken icon wrapper */}
        <div style={{
          position: 'relative', width: '80px', height: '80px', margin: '0 auto 2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'var(--bg-card)', border: '1px solid var(--border-accent)',
          borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glow)',
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
            stroke="var(--accent-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="animate-spin-slow">
            <circle cx="12" cy="12" r="10"/>
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
          </svg>
        </div>

        <h1 className="heading-lg" style={{ marginBottom: '1rem', fontWeight: 900 }}>
          404 — <span className="text-gradient">Icon Missing</span>
        </h1>
        
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
          We searched all our categories, folders, and CDN cache but couldn&apos;t find the page or icon you were looking for.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/icons" className="btn-secondary">
            Browse Icon Library
          </Link>
        </div>
      </div>
    </div>
  );
}
