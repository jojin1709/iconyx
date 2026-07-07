import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SandboxLoading() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, padding: '3rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* Left panel skeleton */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ height: '32px', width: '250px', borderRadius: '4px' }} className="skeleton-pulse" />
            <div style={{ height: '200px', width: '100%', borderRadius: '12px' }} className="skeleton-pulse" />
            <div style={{ height: '40px', width: '150px', borderRadius: '6px' }} className="skeleton-pulse" />
          </div>
          {/* Right panel skeleton */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ height: '320px', width: '100%', borderRadius: '16px' }} className="skeleton-pulse" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
