'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { IconMeta, getCdnUrl } from '@/lib/icons';
import CopyButton from './CopyButton';

interface IconModalProps {
  icon: IconMeta | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  isFavorite: boolean;
  onToggleFavorite: (name: string, e: React.MouseEvent) => void;
}

export default function IconModal({ icon, onClose, onNext, onPrev, isFavorite, onToggleFavorite }: IconModalProps) {
  const [size, setSize] = useState(24);
  const [color, setColor] = useState('#a78bfa'); // Default text-accent/purple color
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [animation, setAnimation] = useState<string>('none');
  const modalRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (icon) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Focus modal container for accessibility
      modalRef.current?.focus();
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [icon, handleKeyDown]);

  if (!icon) return null;

  const cdnUrl = getCdnUrl(icon.category, icon.name);
  const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${icon.svgContent}</svg>`;
  const imgTag = `<img src="${cdnUrl}" alt="${icon.name}" width="${size}" height="${size}" />`;
  
  // Custom styled React component copy snippet
  const reactCode = `import React from 'react';\n\nexport function ${icon.name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Icon({\n  size = ${size},\n  color = "${color}"\n}: { size?: number; color?: string }) {\n  return (\n    <svg\n      width={size}\n      height={size}\n      viewBox="0 0 24 24"\n      fill="none"\n      stroke={color}\n      strokeWidth={${strokeWidth}}\n      strokeLinecap="round"\n      strokeLinejoin="round"\n      dangerouslySetInnerHTML={{ __html: \`${icon.svgContent.replace(/`/g, '\\`')}\` }}\n    />\n  );\n}`;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`${icon.name} icon details`}
      tabIndex={-1}
      ref={modalRef}
      style={{ outline: 'none' }}
    >
      <div className="modal-content" style={{ position: 'relative' }}>
        {/* Previous Icon Trigger */}
        {onPrev && (
          <button
            onClick={onPrev}
            style={{
              position: 'absolute', left: '-50px', top: '50%', transform: 'translateY(-50%)',
              background: 'var(--bg-elevated)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-full)', width: '36px', height: '36px',
              cursor: 'pointer', color: 'var(--text-primary)', display: 'flex',
              alignItems: 'center', justifyContent: 'center', transition: 'var(--transition)',
              zIndex: 10,
            }}
            title="Previous icon (← Left Arrow)"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
        )}

        {/* Next Icon Trigger */}
        {onNext && (
          <button
            onClick={onNext}
            style={{
              position: 'absolute', right: '-50px', top: '50%', transform: 'translateY(-50%)',
              background: 'var(--bg-elevated)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-full)', width: '36px', height: '36px',
              cursor: 'pointer', color: 'var(--text-primary)', display: 'flex',
              alignItems: 'center', justifyContent: 'center', transition: 'var(--transition)',
              zIndex: 10,
            }}
            title="Next icon (→ Right Arrow)"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        )}

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1.5rem 1.5rem 0',
        }}>
          <div>
            <div style={{
              fontWeight: 700, fontSize: '1.125rem',
              color: 'var(--text-primary)', fontFamily: 'JetBrains Mono, monospace'
            }}>
              {icon.name}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
              {icon.category} · stroke · 24×24
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="badge badge-accent" style={{ textTransform: 'capitalize' }}>
              {icon.category}
            </span>
            <button
              onClick={(e) => onToggleFavorite(icon.name, e)}
              style={{
                background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)', padding: '0.4rem 0.6rem',
                cursor: 'pointer', color: isFavorite ? '#fbbf24' : 'var(--text-secondary)',
                display: 'flex', alignItems: 'center', gap: '0.25rem',
                transition: 'var(--transition)',
              }}
              title={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <span style={{ fontSize: '1rem', lineHeight: 1 }}>{isFavorite ? '★' : '☆'}</span>
              <span style={{ fontSize: '0.75rem' }}>{isFavorite ? 'Favorited' : 'Favorite'}</span>
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)', padding: '0.4rem',
                cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex',
                transition: 'var(--transition)',
              }}
              aria-label="Close modal"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Preview */}
        <div style={{ padding: '1.5rem', maxHeight: '82vh', overflowY: 'auto' }} className="no-scrollbar">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--bg-surface)', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', padding: '2.5rem',
            position: 'relative', marginBottom: '1.25rem',
          }}>
            <div style={{
              position: 'absolute', inset: 0, borderRadius: 'var(--radius)',
              backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
              backgroundSize: '20px 20px', opacity: 0.5,
            }}/>
            <svg
              width={size * 3}
              height={size * 3}
              viewBox="0 0 24 24"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={animation !== 'none' ? `animate-${animation}-custom` : ''}
              style={{ position: 'relative', zIndex: 1, transition: 'stroke 0.2s, width 0.2s, height 0.2s' }}
              dangerouslySetInnerHTML={{ __html: icon.svgContent }}
            />
          </div>

          {/* Size, Stroke Width, Color & Animation controls row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.2fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
            {/* Size Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Size</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-accent)', fontFamily: 'JetBrains Mono, monospace' }}>{size}px</span>
              </div>
              <input
                type="range" min="16" max="64" value={size}
                onChange={(e) => setSize(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent)', cursor: 'pointer' }}
              />
            </div>

            {/* Stroke Width Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Stroke</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-accent)', fontFamily: 'JetBrains Mono, monospace' }}>{strokeWidth}</span>
              </div>
              <input
                type="range" min="1" max="3" step="0.5" value={strokeWidth}
                onChange={(e) => setStrokeWidth(parseFloat(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent)', cursor: 'pointer' }}
              />
            </div>

            {/* Color Picker */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Color</span>
                <span style={{ fontSize: '0.8rem', color: color, fontFamily: 'JetBrains Mono, monospace' }}>{color}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="color" value={color}
                  onChange={(e) => setColor(e.target.value)}
                  style={{
                    background: 'none', border: 'none', width: '24px', height: '24px',
                    cursor: 'pointer', padding: 0, outline: 'none',
                  }}
                />
                <div style={{ display: 'flex', gap: '0.2rem' }}>
                  {['#a78bfa', '#06b6d4', '#10b981', '#ffffff'].map(c => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      style={{
                        width: '10px', height: '10px', borderRadius: '50%', backgroundColor: c,
                        border: color === c ? '2px solid #fff' : '1px solid var(--border)',
                        cursor: 'pointer', padding: 0,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Animation Selector */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Animation</span>
              </div>
              <select
                value={animation}
                onChange={(e) => setAnimation(e.target.value)}
                style={{
                  width: '100%', background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)', padding: '0.35rem 0.5rem', fontSize: '0.8rem',
                  color: 'var(--text-primary)', outline: 'none', cursor: 'pointer',
                }}
              >
                <option value="none">None</option>
                <option value="spin">Spin</option>
                <option value="bounce">Bounce</option>
                <option value="pulse">Pulse</option>
                <option value="float">Float</option>
                <option value="wiggle">Wiggle</option>
              </select>
            </div>
          </div>

          {/* Usage sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {/* CDN URL */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>CDN URL</span>
                <CopyButton text={cdnUrl} label="Copy URL" id={`copy-cdn-${icon.name}`} />
              </div>
              <div className="code-block" style={{ fontSize: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)' }}>
                <span className="token-url">{cdnUrl}</span>
              </div>
            </div>

            {/* HTML */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>HTML</span>
                <CopyButton text={imgTag} label="Copy HTML" id={`copy-html-${icon.name}`} />
              </div>
              <div className="code-block" style={{ fontSize: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                <span className="token-tag">{'<img '}</span>
                <span className="token-attr">src</span>=<span className="token-str">&quot;{cdnUrl}&quot;</span>
                {'  '}
                <span className="token-attr">width</span>=<span className="token-str">&quot;{size}&quot;</span>
                {'  '}
                <span className="token-attr">height</span>=<span className="token-str">&quot;{size}&quot;</span>
                {' />'}
              </div>
            </div>

            {/* React Code Snippet */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>React / Next.js Component</span>
                <CopyButton text={reactCode} label="Copy Component" id={`copy-react-${icon.name}`} />
              </div>
              <pre className="code-block" style={{ fontSize: '0.7rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', whiteSpace: 'pre-wrap', overflowX: 'auto' }}>
                {reactCode}
              </pre>
            </div>

            {/* SVG download action */}
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
              <CopyButton text={svgCode} label="Copy Raw SVG" id={`copy-svg-${icon.name}`} />
              <a
                href={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgCode)}`}
                download={`${icon.name}.svg`}
                className="copy-btn"
                style={{ width: '100%', justifyContent: 'center' }}
                aria-label={`Download ${icon.name} SVG`}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download SVG File
              </a>
            </div>

            {/* Tags */}
            {icon.tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '0.25rem' }}>
                {icon.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '0.2rem 0.6rem',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
