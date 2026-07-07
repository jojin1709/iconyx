'use client';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function IconsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '480px' }}>
          <div style={{
            width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem',
            color: '#ef4444', fontSize: '1.5rem'
          }}>
            ⚠
          </div>
          <h1 className="heading-md" style={{ marginBottom: '1rem' }}>Something went wrong!</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.925rem', lineHeight: 1.6 }}>
            An unexpected error occurred while rendering the icons catalog. Please try resetting the viewport.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={() => reset()} className="btn-primary">
              Try Again
            </button>
            <a href="/" className="btn-secondary">
              Back Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
