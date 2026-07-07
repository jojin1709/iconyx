import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function IconsLoading() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, padding: '2rem 0' }}>
        <div className="container">
          {/* Header Skeleton */}
          <div style={{ height: '32px', width: '200px', borderRadius: '4px', marginBottom: '1.5rem' }} className="skeleton-pulse" />
          <div style={{ height: '48px', width: '400px', borderRadius: '4px', marginBottom: '2.5rem' }} className="skeleton-pulse" />

          {/* Search Bar Skeleton */}
          <div style={{ height: '52px', width: '100%', borderRadius: '9999px', marginBottom: '2rem' }} className="skeleton-pulse" />

          {/* Grid Skeleton */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: '0.75rem'
          }}>
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                style={{
                  aspectRatio: '1',
                  borderRadius: '10px',
                  border: '1px solid var(--border)',
                }}
                className="skeleton-pulse"
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
