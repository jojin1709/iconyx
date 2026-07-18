'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CATEGORY_OPTIONS = [
  { id: 'ui', label: 'UI Elements' },
  { id: 'social', label: 'Social Media' },
  { id: 'devices', label: 'Devices & Hardware' },
  { id: 'data', label: 'Data & Commerce' },
  { id: 'files', label: 'Files & Folders' },
  { id: 'navigation', label: 'Navigation & Maps' },
  { id: 'media', label: 'Media & Video' },
  { id: 'weather', label: 'Weather & Nature' },
  { id: 'development', label: 'Dev & Engineering' },
  { id: 'communication', label: 'Communication & Chat' }
];

export default function RequestIconPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    iconName: '',
    category: 'ui',
    useCase: '',
    refUrl: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.iconName || !formData.category || !formData.useCase) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'icon-request',
          name: formData.name || 'Anonymous Requester',
          email: formData.email || 'no-reply@iconyx.app',
          iconName: formData.iconName,
          category: formData.category,
          useCase: formData.useCase,
          refUrl: formData.refUrl
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit icon request.');
      }

      setSubmitted(true);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h1 className="heading-md" style={{ marginBottom: '1rem', textAlign: 'center' }}>Request an Icon</h1>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2.5rem', fontSize: '0.9375rem' }}>
            Need an icon that is missing from our suite? Fill out the details below, and we will design it for the next release.
          </p>

          <div className="card" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)',
                  color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem', fontSize: '1.5rem'
                }}>
                  ✓
                </div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Request Submitted!</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Thank you for your suggestion. We review requests weekly and will update the library soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {error && (
                  <div style={{
                    padding: '0.75rem 1rem', background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 'var(--radius)',
                    color: '#ef4444', fontSize: '0.85rem'
                  }}>
                    {error}
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="request-form-row">
                  <div>
                    <label htmlFor="req-name" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Your Name
                    </label>
                    <input
                      id="req-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-surface)',
                        border: '1px solid var(--border)', borderRadius: 'var(--radius)',
                        color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.2s'
                      }}
                      placeholder="Optional"
                    />
                  </div>

                  <div>
                    <label htmlFor="req-email" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Your Email
                    </label>
                    <input
                      id="req-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-surface)',
                        border: '1px solid var(--border)', borderRadius: 'var(--radius)',
                        color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.2s'
                      }}
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="req-icon-name" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Icon Name <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <input
                    id="req-icon-name"
                    type="text"
                    required
                    value={formData.iconName}
                    onChange={(e) => setFormData({ ...formData, iconName: e.target.value })}
                    style={{
                      width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-surface)',
                      border: '1px solid var(--border)', borderRadius: 'var(--radius)',
                      color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.2s'
                    }}
                    placeholder="e.g. apple-watch, database-sync, double-check"
                  />
                </div>

                <div>
                  <label htmlFor="req-category" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Icon Category <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <select
                    id="req-category"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{
                      width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-surface)',
                      border: '1px solid var(--border)', borderRadius: 'var(--radius)',
                      color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.2s',
                      cursor: 'pointer'
                    }}
                  >
                    {CATEGORY_OPTIONS.map(opt => (
                      <option key={opt.id} value={opt.id}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="req-usecase" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Use Case & Description <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <textarea
                    id="req-usecase"
                    required
                    rows={4}
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                    style={{
                      width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-surface)',
                      border: '1px solid var(--border)', borderRadius: 'var(--radius)',
                      color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.2s',
                      resize: 'vertical'
                    }}
                    placeholder="Explain how you plan to use this icon..."
                  />
                </div>

                <div>
                  <label htmlFor="req-ref-url" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Optional Reference Image URL
                  </label>
                  <input
                    id="req-ref-url"
                    type="url"
                    value={formData.refUrl}
                    onChange={(e) => setFormData({ ...formData, refUrl: e.target.value })}
                    style={{
                      width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-surface)',
                      border: '1px solid var(--border)', borderRadius: 'var(--radius)',
                      color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.2s'
                    }}
                    placeholder="https://example.com/mockup.png"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    width: '100%', padding: '0.85rem', justifyContent: 'center', fontSize: '0.9rem',
                    cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1
                  }}
                >
                  {loading ? 'Submitting request...' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
