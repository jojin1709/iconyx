'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useToast } from '@/context/ToastContext';
import { icons } from '@/lib/icons';

export default function StatusPage() {
  const { showToast } = useToast();
  const [purgeInput, setPurgeInput] = useState('');
  const [purging, setPurging] = useState(false);
  const [cdnStatus, setCdnStatus] = useState<{ reachable: boolean | null; latency: number | null }>({
    reachable: null,
    latency: null
  });

  const checkCdnLatency = async () => {
    try {
      const start = performance.now();
      // Fetch small search.svg to calculate round-trip latency
      const res = await fetch('https://cdn.jsdelivr.net/gh/jojin1709/iconyx@main/public/icons/ui/search.svg', {
        method: 'HEAD',
        cache: 'no-store'
      });
      const end = performance.now();
      if (res.ok) {
        setCdnStatus({ reachable: true, latency: Math.round(end - start) });
      } else {
        setCdnStatus({ reachable: false, latency: null });
      }
    } catch {
      setCdnStatus({ reachable: false, latency: null });
    }
  };

  useEffect(() => {
    checkCdnLatency();
    const interval = setInterval(checkCdnLatency, 10000);
    return () => clearInterval(interval);
  }, []);

  const handlePurge = async (e: React.FormEvent) => {
    e.preventDefault();
    const input = purgeInput.trim();
    if (!input) {
      showToast('Please enter an icon name or file path!', 'error');
      return;
    }

    setPurging(true);
    showToast(`Sending purge request to jsDelivr CDN edge nodes...`, 'info');

    // Try to resolve path
    let targetPath = input;
    if (!input.includes('.')) {
      const match = icons.find(i => i.name.toLowerCase() === input.toLowerCase());
      if (match) {
        targetPath = `public/icons/${match.category}/${match.name}.svg`;
      } else {
        targetPath = `public/icons/ui/${input}.svg`; // default fallback
      }
    }

    try {
      const res = await fetch('/api/purge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: targetPath }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to purge cache.');
      }

      showToast(`Successfully purged jsDelivr cache for ${targetPath}! (ID: ${data.id || 'N/A'}, Status: ${data.status || 'finished'})`, 'success');
      setPurgeInput('');
    } catch (err: any) {
      showToast(err.message || 'Purge request failed. Please check the path and try again.', 'error');
    } finally {
      setPurging(false);
    }
  };

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
            <h2 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>jsDelivr Edge CDN Status</h2>
            {cdnStatus.reachable === true ? (
              <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }} />
                OPERATIONAL
              </span>
            ) : cdnStatus.reachable === false ? (
              <span style={{ fontSize: '0.7rem', color: '#ef4444', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%' }} />
                OFFLINE / CORRUPT
              </span>
            ) : (
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                CONNECTING...
              </span>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>CDN Endpoint Host</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: 600 }}>cdn.jsdelivr.net</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Edge Ping Response Time</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-accent)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                {cdnStatus.latency !== null ? `${cdnStatus.latency}ms` : 'loading...'}
              </span>
            </div>
            <button 
              onClick={checkCdnLatency} 
              style={{ fontSize: '0.75rem', background: 'transparent', border: '1px solid var(--border)', padding: '0.5rem', borderRadius: 'var(--radius)', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'border-color 0.2s' }}
            >
              🔄 Refresh Latency Ping
            </button>
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
                placeholder="e.g. chevron-up or public/icons/ui/search.svg"
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
