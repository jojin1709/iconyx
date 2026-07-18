'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { IconMeta, icons } from '@/lib/icons';
import CopyButton from './CopyButton';
import { 
  getReactCode, 
  getVueCode, 
  getSvelteCode, 
  getTailwindCode, 
  getHtmlCode,
  getReactNativeCode,
  getTailwindPluginCode,
  getCssMaskCode,
  getWebComponentCode,
  getBase64UriCode
} from '@/lib/FrameworkCodes';

interface IconDetailViewProps {
  icon: IconMeta;
}

const COLOR_PRESETS = [
  { name: 'Violet', value: '#8b5cf6' },
  { name: 'Nord', value: '#88c0d0' },
  { name: 'Dracula', value: '#ff79c6' },
  { name: 'Emerald', value: '#10b981' },
  { name: 'Gold', value: '#f59e0b' },
  { name: 'Slate', value: '#64748b' }
];

export default function IconDetailView({ icon }: IconDetailViewProps) {
  const [size, setSize] = useState(24);
  const [color, setColor] = useState('#8b5cf6');
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [framework, setFramework] = useState<
    'react' | 'react-native' | 'vue' | 'svelte' | 'tailwind' | 'html' | 'css-mask' | 'tailwind-plugin' | 'web-component' | 'base64'
  >('react');
  
  // Accessibility toggle
  const [a11y, setA11y] = useState(false);

  // Gradient customizer states
  const [gradientEnabled, setGradientEnabled] = useState(false);
  const [gradientEndColor, setGradientEndColor] = useState('#ec4899');
  
  // Animation Creator States
  const [animation, setAnimation] = useState<'none' | 'spin' | 'pulse' | 'bounce' | 'ping'>('none');
  const [animationDuration, setAnimationDuration] = useState(2);

  // Pattern Generator preview states
  const [patternMode, setPatternMode] = useState(false);
  const [patternSpacing, setPatternSpacing] = useState(40);

  const cdnUrl = `https://cdn.jsdelivr.net/gh/jojin1709/iconyx@main/public/icons/${icon.category}/${icon.name}.svg`;

  // related style families
  const baseName = icon.name.replace(/^(dotted-|fluency-|glass-)/, '');
  const variants = useMemo(() => {
    return {
      outline: icons.find(i => i.name === baseName) || icon,
      dotted: icons.find(i => i.name === `dotted-${baseName}`),
      fluency: icons.find(i => i.name === `fluency-${baseName}`),
      glass: icons.find(i => i.name === `glass-${baseName}`),
    };
  }, [baseName, icon]);

  // Handle dynamic gradient rendering
  const svgContentWithGradients = useMemo(() => {
    if (!gradientEnabled) return icon.svgContent;
    const gradientDef = `<defs><linearGradient id="grad-${icon.name}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${color}" /><stop offset="100%" stop-color="${gradientEndColor}" /></linearGradient></defs>`;
    return gradientDef + icon.svgContent;
  }, [gradientEnabled, color, gradientEndColor, icon]);

  const activeColor = gradientEnabled ? `url(#grad-${icon.name})` : color;

  // Framework Snippets
  const codeSnippet = useMemo(() => {
    const rawContent = svgContentWithGradients;
    switch (framework) {
      case 'react':
        return getReactCode(icon.name, rawContent, size, color, strokeWidth, a11y);
      case 'react-native':
        return getReactNativeCode(icon.name, rawContent, size, color, strokeWidth);
      case 'vue':
        return getVueCode(icon.name, rawContent, size, color, strokeWidth, a11y);
      case 'svelte':
        return getSvelteCode(icon.name, rawContent, size, color, strokeWidth, a11y);
      case 'tailwind':
        return getTailwindCode(icon.name, rawContent, size, color, strokeWidth);
      case 'css-mask':
        return getCssMaskCode(icon.name, cdnUrl, size, color);
      case 'tailwind-plugin':
        return getTailwindPluginCode(icon.name, cdnUrl);
      case 'web-component':
        return getWebComponentCode(icon.name, rawContent, size, color, strokeWidth);
      case 'base64':
        return getBase64UriCode(icon.name, rawContent, size, color, strokeWidth);
      case 'html':
      default:
        return getHtmlCode(icon.name, rawContent, size, color, strokeWidth, a11y);
    }
  }, [framework, icon, size, color, strokeWidth, a11y, svgContentWithGradients, cdnUrl]);

  const prefersColorSchemeCss = `@media (prefers-color-scheme: dark) {\n  .iconyx-${icon.name} {\n    stroke: ${color};\n  }\n}\n@media (prefers-color-scheme: light) {\n  .iconyx-${icon.name} {\n    stroke: #1e1b4b;\n  }\n}`;

  // Custom animation CSS properties
  const animationStyle = useMemo(() => {
    if (animation === 'none') return {};
    return {
      animation: `${animation} ${animationDuration}s infinite linear`
    };
  }, [animation, animationDuration]);

  // Keyframes generator code
  const animationCssSnippet = animation !== 'none' 
    ? `@keyframes ${animation} {\n  /* Presets */\n}\n.animate-${icon.name} {\n  animation: ${animation} ${animationDuration}s infinite;\n}`
    : '/* Select an animation style */';

  // Pattern CSS snippet
  const patternCssSnippet = useMemo(() => {
    const rawContent = svgContentWithGradients;
    const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${rawContent}</svg>`;
    const base64 = typeof window !== 'undefined' ? window.btoa(svgStr) : '';
    return `.pattern-${icon.name} {\n  background-image: url("data:image/svg+xml;base64,${base64}");\n  background-size: ${patternSpacing}px ${patternSpacing}px;\n  background-repeat: repeat;\n}`;
  }, [icon, size, color, strokeWidth, patternSpacing, svgContentWithGradients]);

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
          <div className="card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', display: 'flex', gap: '0.5rem', zIndex: 10 }}>
              <span className="badge badge-accent" style={{ textTransform: 'capitalize' }}>{icon.category}</span>
              <button 
                onClick={() => setPatternMode(!patternMode)}
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', fontSize: '0.7rem', padding: '0.2rem 0.5rem', cursor: 'pointer', fontWeight: 600 }}
              >
                {patternMode ? 'Show Icon' : 'Show Pattern Grid'}
              </button>
            </div>

            {patternMode ? (
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 24 24' fill='none' stroke='${encodeURIComponent(color)}' stroke-width='${strokeWidth}' stroke-linecap='round' stroke-linejoin='round'>${svgContentWithGradients}</svg>")`,
                backgroundSize: `${patternSpacing}px ${patternSpacing}px`,
                backgroundRepeat: 'repeat',
                opacity: 0.8
              }} />
            ) : (
              <div style={{
                width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)',
                boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.2)'
              }}>
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
                  stroke={activeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
                  style={animationStyle}
                  dangerouslySetInnerHTML={{ __html: svgContentWithGradients }}
                />
              </div>
            )}
            <h1 className="heading-md" style={{ fontFamily: 'var(--font-mono)', fontSize: '1.75rem', marginTop: '1.5rem', marginBottom: '0.25rem', zIndex: 10 }}>
              {icon.name}
            </h1>
          </div>

          {/* Color Presets */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
              Color Palettes Presets
            </span>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {COLOR_PRESETS.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => setColor(preset.value)}
                  style={{
                    background: preset.value, border: color === preset.value ? '2px solid #fff' : '1px solid var(--border)',
                    borderRadius: '50%', width: '28px', height: '28px', cursor: 'pointer',
                    boxShadow: color === preset.value ? '0 0 8px var(--accent)' : 'none'
                  }}
                  title={preset.name}
                />
              ))}
            </div>
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

              {/* Gradient Toggle */}
              <div>
                <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  <input type="checkbox" checked={gradientEnabled} onChange={(e) => setGradientEnabled(e.target.checked)} />
                  Enable Multi-Stop Gradient
                </label>
                {gradientEnabled && (
                  <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <input type="color" value={gradientEndColor} onChange={(e) => setGradientEndColor(e.target.value)} style={{ width: '32px', height: '32px', border: 'none', background: 'none', cursor: 'pointer' }} />
                    <input type="text" value={gradientEndColor} onChange={(e) => setGradientEndColor(e.target.value)} style={{ flex: 1, padding: '0.35rem 0.75rem', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', color: 'var(--text-primary)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }} />
                  </div>
                )}
              </div>

              {/* Accessibility Switch */}
              <div>
                <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  <input type="checkbox" checked={a11y} onChange={(e) => setA11y(e.target.checked)} />
                  Inject Screen-Reader Accessibility (a11y)
                </label>
              </div>

              {/* Pattern spacing controls */}
              {patternMode && (
                <div>
                  <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    <span>Pattern Grid Spacing</span>
                    <span style={{ color: 'var(--accent)' }}>{patternSpacing}px</span>
                  </label>
                  <input type="range" min="20" max="80" value={patternSpacing} onChange={(e) => setPatternSpacing(Number(e.target.value))} style={{ width: '100%' }} />
                </div>
              )}

            </div>
          </div>

          {/* Style Comparison */}
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

        {/* Right Side: Exporters, Animation, CSS mask and patterns */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Framework Exporters */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem', marginBottom: '1.25rem', gap: '0.5rem', overflowX: 'auto' }} className="no-scrollbar">
              {[
                { id: 'react', label: 'React' },
                { id: 'react-native', label: 'React Native' },
                { id: 'vue', label: 'Vue 3' },
                { id: 'svelte', label: 'Svelte' },
                { id: 'tailwind', label: 'Tailwind' },
                { id: 'html', label: 'HTML' },
                { id: 'css-mask', label: 'CSS Mask' },
                { id: 'tailwind-plugin', label: 'TW Plugin' },
                { id: 'web-component', label: 'Custom Element' },
                { id: 'base64', label: 'Base64 URI' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setFramework(tab.id as any)}
                  style={{
                    background: framework === tab.id ? 'var(--accent-subtle)' : 'none',
                    border: '1px solid',
                    borderColor: framework === tab.id ? 'var(--accent-border)' : 'transparent',
                    borderRadius: 'var(--radius-sm)', padding: '0.35rem 0.65rem',
                    color: framework === tab.id ? 'var(--text-accent)' : 'var(--text-secondary)',
                    fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {tab.label}
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

          {/* Pattern Exporter CSS */}
          {patternMode && (
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Repeating Pattern CSS
                </span>
                <CopyButton text={patternCssSnippet} label="Copy Pattern CSS" />
              </div>
              <pre className="code-block" style={{ fontSize: '0.7rem', padding: '0.75rem 1rem', whiteSpace: 'pre-wrap', maxHeight: '120px', overflowY: 'auto' }}>
                {patternCssSnippet}
              </pre>
            </div>
          )}

          {/* System Media CSS */}
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
                `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${activeColor}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${svgContentWithGradients}</svg>`
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
