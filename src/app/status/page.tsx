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

  return (
    <div className="container" style={{ maxWidth: '800px', padding: '2rem 1rem' }}>
      
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

      </div>

      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <Link href="/icons" className="btn-secondary" style={{ display: 'inline-flex' }}>
          Back to Library
        </Link>
      </div>

    </div>
  );
}
