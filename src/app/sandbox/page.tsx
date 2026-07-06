'use client';
import { useState, useCallback, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CopyButton from '@/components/CopyButton';
import { useToast } from '@/context/ToastContext';

export default function SandboxPage() {
  const [svgContent, setSvgContent] = useState<string>(
    `<polygon points="12 2 19 8 19 16 12 22 5 16 5 8" />\n<circle cx="12" cy="12" r="3" />`
  );
  const [size, setSize] = useState<number>(48);
  const [color, setColor] = useState<string>('#7c3aed');
  const [strokeWidth, setStrokeWidth] = useState<number>(2);
  const { showToast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const cleanSvgPaths = (raw: string) => {
    // 1. Strip svg wrapper tags if present to extract inner content
    let clean = raw.trim();
    const match = raw.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    if (match) {
      clean = match[1].trim();
    }
    // 2. Strip hardcoded stroke and stroke-width attributes so our controls override them
    clean = clean.replace(/stroke="[^"]*"/gi, '');
    clean = clean.replace(/stroke-width="[^"]*"/gi, '');
    return clean;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'image/svg+xml' && !file.name.endsWith('.svg')) {
      showToast('Please upload a valid SVG file!', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const paths = cleanSvgPaths(text);
      if (paths) {
        setSvgContent(paths);
        showToast('SVG successfully uploaded!', 'success');
      } else {
        showToast('Could not find SVG path data.', 'error');
      }
    };
    reader.readAsText(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.svg')) {
      showToast('Please drop a valid .svg file!', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const paths = cleanSvgPaths(text);
      if (paths) {
        setSvgContent(paths);
        showToast('SVG successfully dropped!', 'success');
      } else {
        showToast('Could not find SVG path data.', 'error');
      }
    };
    reader.readAsText(file);
  };

  const outputCode = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">\n  ${svgContent.trim()}\n</svg>`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h1 className="heading-md" style={{ marginBottom: '0.5rem' }}>SVG Sandbox</h1>
            <p style={{ color: 'var(--text-secondary)' }}>
              Upload or paste custom SVG paths to inspect, style, and export code.
            </p>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem',
          }} className="hero-grid-layout">
            
            {/* Input Side */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Drag/Drop Box */}
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                style={{
                  border: '2px dashed var(--border-accent)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2.5rem 1.5rem',
                  textAlign: 'center',
                  background: 'var(--bg-surface)',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-accent)'}
              >
                <input
                  type="file" accept=".svg" ref={fileInputRef} style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                  stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  style={{ marginBottom: '0.75rem' }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                <div style={{ fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.25rem' }}>
                  Upload SVG file
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Drag &amp; drop or click to browse
                </div>
              </div>

              {/* Text Area Input */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                  Or Paste SVG Inner Paths
                </label>
                <textarea
                  value={svgContent}
                  onChange={(e) => setSvgContent(cleanSvgPaths(e.target.value))}
                  placeholder={`<path d="M12 2L2 22h20L12 2z" />`}
                  style={{
                    width: '100%', height: '140px', background: 'var(--bg-surface)',
                    border: '1px solid var(--border)', borderRadius: 'var(--radius)',
                    padding: '0.875rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem', outline: 'none', resize: 'none',
                  }}
                />
              </div>

              {/* Styling Controls */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                {/* Size */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Size</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <input type="range" min="16" max="96" value={size} onChange={(e) => setSize(parseInt(e.target.value))} style={{ cursor: 'pointer', accentColor: 'var(--accent)' }} />
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-accent)', width: '32px', fontFamily: 'var(--font-mono)' }}>{size}px</span>
                  </div>
                </div>

                {/* Stroke width */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Stroke Width</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <input type="range" min="1" max="4" step="0.5" value={strokeWidth} onChange={(e) => setStrokeWidth(parseFloat(e.target.value))} style={{ cursor: 'pointer', accentColor: 'var(--accent)' }} />
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-accent)', width: '32px', fontFamily: 'var(--font-mono)' }}>{strokeWidth}</span>
                  </div>
                </div>

                {/* Color picker */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Color</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="color" value={color} onChange={(e) => setColor(e.target.value)} style={{ border: 'none', background: 'none', width: '30px', height: '24px', cursor: 'pointer' }} />
                    <span style={{ fontSize: '0.8rem', color: color, fontFamily: 'var(--font-mono)' }}>{color}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Side */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Preview
              </label>
              <div style={{
                height: '240px', background: 'var(--bg-surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
                  backgroundSize: '20px 20px', opacity: 0.5,
                }}/>
                {svgContent ? (
                  <svg
                    width={size} height={size} viewBox="0 0 24 24" fill="none"
                    stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
                    style={{ position: 'relative', zIndex: 1 }}
                    dangerouslySetInnerHTML={{ __html: svgContent }}
                  />
                ) : (
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', position: 'relative', zIndex: 1 }}>
                    Upload or paste SVG path data to preview
                  </div>
                )}
              </div>

              {/* Code output */}
              {svgContent && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Styled Output Code</span>
                    <CopyButton text={outputCode} label="Copy Output Code" />
                  </div>
                  <pre className="code-block" style={{ fontSize: '0.75rem', padding: '0.875rem 1.1rem', borderRadius: 'var(--radius-sm)', whiteSpace: 'pre-wrap', maxHeight: '150px', overflowY: 'auto' }}>
                    {outputCode}
                  </pre>
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
