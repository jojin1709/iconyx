'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { IconMeta, icons } from '@/lib/icons';
import CopyButton from './CopyButton';
import { getReactCode, getVueCode, getSvelteCode, getTailwindCode, getHtmlCode } from '@/lib/FrameworkCodes';

interface IconDetailViewProps {
  icon: IconMeta;
}

export default function IconDetailView({ icon }: IconDetailViewProps) {
  const [size, setSize] = useState(24);
  const [color, setColor] = useState('#a78bfa'); // Default theme accent
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [framework, setFramework] = useState<'html' | 'react' | 'vue' | 'svelte' | 'tailwind'>('react');
  
  // Animation Creator States
  const [animation, setAnimation] = useState<'none' | 'spin' | 'pulse' | 'bounce' | 'ping'>('none');
  const [animationDuration, setAnimationDuration] = useState(2);

  const cdnUrl = `https://cdn.jsdelivr.net/gh/jojin1709/iconyx@main/public/icons/${icon.category}/${icon.name}.svg`;

  // Find related style family variants
  const baseName = icon.name.replace(/^(dotted-|fluency-|glass-)/, '');
  const variants = useMemo(() => {
    return {
      outline: icons.find(i => i.name === baseName) || icon,
      dotted: icons.find(i => i.name === `dotted-${baseName}`),
      fluency: icons.find(i => i.name === `fluency-${baseName}`),
      glass: icons.find(i => i.name === `glass-${baseName}`),
    };
  }, [baseName, icon]);

  // Generate dynamic framework snippet code
  const codeSnippet = useMemo(() => {
    const rawSvg = icon.svgContent;
    switch (framework) {
      case 'react':
        return getReactCode(icon.name, rawSvg, size, color, strokeWidth);
      case 'vue':
        return getVueCode(icon.name, rawSvg, size, color, strokeWidth);
      case 'svelte':
        return getSvelteCode(icon.name, rawSvg, size, color, strokeWidth);
      case 'tailwind':
        return getTailwindCode(icon.name, rawSvg, size, color, strokeWidth);
      case 'html':
      default:
        return getHtmlCode(icon.name, rawSvg, size, color, strokeWidth);
    }
  }, [framework, icon, size, color, strokeWidth]);

  // Auto-generated Dark/Light media query CSS
  const prefersColorSchemeCss = `@media (prefers-color-scheme: dark) {\n  .iconyx-${icon.name} {\n    stroke: ${color};\n  }\n}\n@media (prefers-color-scheme: light) {\n  .iconyx-${icon.name} {\n    stroke: #1e1b4b; /* dark indigo fallback */\n  }\n}`;

  // Custom animation CSS properties
  const animationStyle = useMemo(() => {
    if (animation === 'none') return {};
    return {
      animation: `${animation} ${animationDuration}s infinite linear`
    };
  }, [animation, animationDuration]);

  // Keyframes generator code
  const animationCssSnippet = animation !== 'none' 
    ? `@keyframes ${animation} {\n  /* Copy keyframe presets */\n}\n.animate-${icon.name} {\n  animation: ${animation} ${animationDuration}s infinite;\n}`
    : '/* Select an animation style to generate keyframe CSS snippets */';

  return (
    <div className="container" style={{ maxWidth: '1000px', display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
      {/* Breadcrumbs */}
      <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        <Link href="/icons" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Icons</Link>
        <span>/</span>
        <Link href={`/icons?category=${icon.category}`} style={{ color: 'var(--text-accent)', textDecoration: 'none', textTransform: 'capitalize' }}>{icon.category}</Link>
        <span>/</span>
        <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{icon.name}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '2rem' }} className="hero-grid-layout">
        
        {/* Left Side: Preview & Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Main Card Preview */}
          <div className="card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
              <span className="badge badge-accent" style={{ textTransform: 'capitalize' }}>{icon.category}</span>
            </div>
            <div style={{
              width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)',
              boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.2)'
            }}>
              <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
                stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
                style={animationStyle}
                dangerouslySetInnerHTML={{ __html: icon.svgContent }}
              />
            </div>
            <h1 className="heading-md" style={{ fontFamily: 'var(--font-mono)', fontSize: '1.75rem', marginTop: '1.5rem', marginBottom: '0.25rem' }}>
              {icon.name}
            </h1>
          </div>

          {/* Customization Panel */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <h2 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              Customizer Panel
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  <span>Dimension (Size)</span>
                  <span style={{ color: 'var(--accent)' }}>{size}px</span>
                </label>
                <input type="range" min="12" max="64" value={size} onChange={(e) => setSize(Number(e.target.value))} style={{ width: '100%' }} />
              </div>
              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  <span>Stroke Width</span>
                  <span style={{ color: 'var(--accent)' }}>{strokeWidth}px</span>
                </label>
                <input type="range" min="1" max="3" step="0.5" value={strokeWidth} onChange={(e) => setStrokeWidth(Number(e.target.value))} style={{ width: '100%' }} />
              </div>
              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  <span>Accent Color</span>
                  <span style={{ color: 'var(--accent)' }}>{color}</span>
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <input type="color" value={color} onChange={(e) => setColor(e.target.value)} style={{ width: '32px', height: '32px', border: 'none', background: 'none', cursor: 'pointer' }} />
                  <input type="text" value={color} onChange={(e) => setColor(e.target.value)} style={{ flex: 1, padding: '0.35rem 0.75rem', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', color: 'var(--text-primary)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Style Comparison Canvas */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <h2 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              Side-by-Side Styles
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              {[
                { label: 'Outline', data: variants.outline },
                { label: 'Dotted', data: variants.dotted },
                { label: '3D Fluency', data: variants.fluency },
                { label: 'Glass', data: variants.glass }
              ].map((styleItem) => (
                <div key={styleItem.label} style={{
                  background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)',
                  padding: '1rem 0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>{styleItem.label}</span>
                  {styleItem.data ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke={styleItem.label === 'Outline' || styleItem.label === 'Dotted' ? color : undefined} 
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      dangerouslySetInnerHTML={{ __html: styleItem.data.svgContent }}
                    />
                  ) : (
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>N/A</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Exporter snippets & Animation tools */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Framework Exporters */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem', marginBottom: '1.25rem', gap: '0.5rem', overflowX: 'auto' }} className="no-scrollbar">
              {(['react', 'vue', 'svelte', 'tailwind', 'html'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setFramework(tab)}
                  style={{
                    background: framework === tab ? 'var(--accent-subtle)' : 'none',
                    border: '1px solid',
                    borderColor: framework === tab ? 'var(--accent-border)' : 'transparent',
                    borderRadius: 'var(--radius-sm)', padding: '0.35rem 0.65rem',
                    color: framework === tab ? 'var(--text-accent)' : 'var(--text-secondary)',
                    fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', cursor: 'pointer'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-secondary)' }}>SNIPPET CODE</span>
              <CopyButton text={codeSnippet} label="Copy Code" />
            </div>
            <pre className="code-block" style={{ fontSize: '0.7rem', padding: '0.75rem 1rem', whiteSpace: 'pre-wrap', maxHeight: '200px', overflowY: 'auto' }}>
              {codeSnippet}
            </pre>
          </div>

          {/* Animation Creator */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <h2 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>
              Animation Creator
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 600 }}>Animation Style</label>
                <select 
                  value={animation} 
                  onChange={(e) => setAnimation(e.target.value as any)}
                  style={{ width: '100%', padding: '0.4rem', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', color: 'var(--text-primary)' }}
                >
                  <option value="none">Static (None)</option>
                  <option value="spin">Spin</option>
                  <option value="pulse">Pulse</option>
                  <option value="bounce">Bounce</option>
                  <option value="ping">Ping</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 600 }}>Duration ({animationDuration}s)</label>
                <input type="range" min="0.5" max="5" step="0.5" value={animationDuration} onChange={(e) => setAnimationDuration(Number(e.target.value))} style={{ width: '100%' }} />
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-secondary)' }}>ANIMATION CSS</span>
              <CopyButton text={animationCssSnippet} label="Copy CSS" />
            </div>
            <pre className="code-block" style={{ fontSize: '0.7rem', padding: '0.75rem 1rem', whiteSpace: 'pre-wrap', maxHeight: '120px', overflowY: 'auto' }}>
              {animationCssSnippet}
            </pre>
          </div>

          {/* System preferences Dark/Light CSS generator */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Dark / Light Mode Media CSS
              </span>
              <CopyButton text={prefersColorSchemeCss} label="Copy CSS" />
            </div>
            <pre className="code-block" style={{ fontSize: '0.7rem', padding: '0.75rem 1rem', whiteSpace: 'pre-wrap', maxHeight: '150px', overflowY: 'auto' }}>
              {prefersColorSchemeCss}
            </pre>
          </div>

          {/* Download & Links */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${icon.svgContent}</svg>`
              )}`}
              download={`${icon.name}.svg`}
              className="btn-primary"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              Download Custom SVG
            </a>
            <Link href="/icons" className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
              Back to Library
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
