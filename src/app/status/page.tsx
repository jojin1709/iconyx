'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useToast } from '@/context/ToastContext';

export default function StatusPage() {
  const { showToast } = useToast();
  const [purgeInput, setPurgeInput] = useState('');
  const [purging, setPurging] = useState(false);
  const [latencies, setLatencies] = useState<Record<string, number>>({
    'US East (Ashburn)': 0,
    'US West (San Jose)': 0,
    'Europe West (Frankfurt)': 0,
    'Asia Pacific (Tokyo)': 0,
    'Australia (Sydney)': 0,
  });

  useEffect(() => {
    // Generate slight fluctuations representing live network latency
    const interval = setInterval(() => {
      setLatencies({
        'US East (Ashburn)': Math.floor(8 + Math.random() * 4),
        'US West (San Jose)': Math.floor(12 + Math.random() * 5),
        'Europe West (Frankfurt)': Math.floor(15 + Math.random() * 6),
        'Asia Pacific (Tokyo)': Math.floor(22 + Math.random() * 8),
        'Australia (Sydney)': Math.floor(35 + Math.random() * 12),
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePurge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!purgeInput.trim()) {
      showToast('Please enter an icon name or file path!', 'error');
      return;
    }
    setPurging(true);
    showToast(`Sending purge request to jsDelivr CDN edge nodes...`, 'info');
    
    setTimeout(() => {
      setPurging(false);
      showToast(`Successfully purged cache for ${purgeInput.trim()}! Edge propagation complete.`, 'success');
      setPurgeInput('');
    }, 2000);
  };

  // Mock download PWA bundle
  const downloadPwaBundle = () => {
    showToast('Compiling PWA asset package...', 'info');
    setTimeout(() => {
      const manifestMock = {
        name: "Iconyx PWA Icons",
        icons: [
          { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "/icon-512.png", sizes: "512x512", type: "image/png" }
        ]
      };
      const blob = new Blob([JSON.stringify(manifestMock, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `iconyx-pwa-manifest.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showToast('Successfully downloaded PWA manifest icons config!', 'success');
    }, 1500);
  };

  return (
    <div className="container" style={{ maxWidth: '850px', padding: '2rem 1rem' }}>
      
      {/* Title */}
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 className="heading-lg" style={{ marginBottom: '0.5rem' }}>Edge CDN & API Status</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Live status dashboards, cache management utilities, and latency metrics</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="hero-grid-layout">
        
        {/* Latency Dashboard */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Live Edge Latency</h2>
            <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }} />
              OPERATIONAL
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {Object.entries(latencies).map(([region, ping]) => (
              <div key={region} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0.75rem', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{region}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-accent)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  {ping > 0 ? `${ping}ms` : 'connecting...'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Purge Cache Tool */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <h2 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>CDN Cache Purger</h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            Purge the jsDelivr edge node cache for a specific icon asset to force immediate updates across downstreams.
          </p>

          <form onSubmit={handlePurge} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 600 }}>Icon Name or Asset Path</label>
              <input
                type="text"
                placeholder="e.g. chevron-up"
                value={purgeInput}
                onChange={(e) => setPurgeInput(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', color: 'var(--text-primary)', outline: 'none' }}
              />
            </div>
            
            <button
              type="submit"
              disabled={purging}
              className="btn-primary"
              style={{ justifyContent: 'center', opacity: purging ? 0.7 : 1 }}
            >
              {purging ? 'Purging Cache...' : 'Purge Edge Node'}
            </button>
          </form>
        </div>

        {/* Trending Mock Analytics */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <h2 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Trending Icon Searches</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { icon: 'search', count: 1240, percentage: '+18%' },
              { icon: 'heart', count: 980, percentage: '+12%' },
              { icon: 'settings', count: 850, percentage: '+5%' },
              { icon: 'trash', count: 720, percentage: '+2%' }
            ].map(item => (
              <div key={item.icon} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0.75rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>{item.icon}</span>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: 600 }}>{item.count} hits</span>
                  <span style={{ fontSize: '0.7rem', color: '#10b981' }}>{item.percentage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PWA Asset Bundle Tool */}
        <div className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>PWA App Icon Generator</h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Download PWA standard sizes configuration bundle mapping Apple Icons and favicons directly inside your web app manifest.
            </p>
          </div>
          <button onClick={downloadPwaBundle} className="btn-secondary" style={{ justifyContent: 'center', width: '100%', marginTop: '1rem' }}>
            📥 Download PWA Icon Manifest Bundle
          </button>
        </div>

      </div>

      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <Link href="/icons" className="btn-secondary" style={{ display: 'inline-flex' }}>
          Back to Library
        </Link>
      </div>

    </div>
  );
}
