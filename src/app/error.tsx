'use client';
import { useEffect } from 'react';

export default function RootError({
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
    <html>
      <body style={{
        background: '#080810', color: '#f0f0ff', fontFamily: 'system-ui, sans-serif',
        display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh',
        margin: 0, padding: '2rem', textAlign: 'center'
      }}>
        <div style={{ maxWidth: '400px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            System Error
          </h1>
          <p style={{ color: '#8b8ba0', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            A critical application error occurred. Click below to attempt a restore reload.
          </p>
          <button
            onClick={() => reset()}
            style={{
              padding: '0.75rem 1.75rem', borderRadius: '9999px', border: 'none',
              background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: '#fff',
              fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)'
            }}
          >
            Reset Application
          </button>
        </div>
      </body>
    </html>
  );
}
