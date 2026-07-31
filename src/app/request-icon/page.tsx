'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GITHUB_REPO = 'https://github.com/jojin1709/iconyx/issues/new';

const CATEGORY_OPTIONS = [
  { id: 'ui', label: 'UI Elements' },
  { id: 'arrows', label: 'Arrows' },
  { id: 'navigation', label: 'Navigation' },
  { id: 'communication', label: 'Communication' },
  { id: 'files', label: 'Files' },
  { id: 'media', label: 'Media' },
  { id: 'social', label: 'Social' },
  { id: 'devices', label: 'Devices' },
  { id: 'commerce', label: 'Commerce' },
  { id: 'weather', label: 'Weather' },
  { id: 'data', label: 'Data' },
  { id: 'design', label: 'Design' },
  { id: 'dotted', label: 'Dotted' },
  { id: 'tdfluency', label: '3D Fluency' },
  { id: 'liquidglass', label: 'Liquid Glass' },
];

export default function RequestIconPage() {
  const [formData, setFormData] = useState({
    name: '',
    iconName: '',
    category: 'ui',
    useCase: '',
    refUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.iconName || !formData.category || !formData.useCase) return;

    const body = [
      `## Icon Request`,
      '',
      `**Icon Name:** \`${formData.iconName}\``,
      `**Category:** ${formData.category}`,
      formData.name ? `**Requested by:** ${formData.name}` : '',
      '',
      `### Use Case`,
      formData.useCase,
      '',
      formData.refUrl ? `### Reference\n${formData.refUrl}` : '',
    ].filter(Boolean).join('\n');

    const params = new URLSearchParams({
      title: `Icon Request: ${formData.iconName}`,
      body,
      labels: 'icon-request',
    });

    window.open(`${GITHUB_REPO}?${params.toString()}`, '_blank');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h1 className="heading-md" style={{ marginBottom: '1rem', textAlign: 'center' }}>Request an Icon</h1>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2.5rem', fontSize: '0.9375rem' }}>
            Need an icon that is missing from our suite? Fill out the details below and we will open a GitHub Issue so the request is tracked publicly.
          </p>

          <div className="card" style={{ padding: '2.5rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

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
                className="btn-primary"
                style={{
                  width: '100%', padding: '0.85rem', justifyContent: 'center', fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                Open GitHub Issue
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
