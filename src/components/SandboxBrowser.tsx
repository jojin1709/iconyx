'use client';
import { useState, useRef, useMemo } from 'react';
import CopyButton from '@/components/CopyButton';
import { useToast } from '@/context/ToastContext';
import { icons } from '@/lib/icons';

export default function SandboxBrowser() {
  const [svgContent, setSvgContent] = useState<string>(
    `<polygon points="12 2 19 8 19 16 12 22 5 16 5 8" />\n<circle cx="12" cy="12" r="3" />`
  );
  const [size, setSize] = useState<number>(48);
  const [color, setColor] = useState<string>('#7c3aed');
  const [strokeWidth, setStrokeWidth] = useState<number>(2);
  
  // Size tracking states
  const [originalSize, setOriginalSize] = useState(0);
  const [optimizedSize, setOptimizedSize] = useState(0);

  // SVG Morphing states
  const [morphStart, setMorphStart] = useState('chevron-up');
  const [morphEnd, setMorphEnd] = useState('chevron-down');

  const { showToast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const cleanSvgPaths = (raw: string) => {
    let clean = raw.trim();
    const match = raw.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    if (match) {
      clean = match[1].trim();
    }
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
      setOriginalSize(text.length);
      const paths = cleanSvgPaths(text);
      if (paths) {
        setSvgContent(paths);
        setOptimizedSize(paths.length);
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
      setOriginalSize(text.length);
      const paths = cleanSvgPaths(text);
      if (paths) {
        setSvgContent(paths);
        setOptimizedSize(paths.length);
        showToast('SVG successfully dropped!', 'success');
      } else {
        showToast('Could not find SVG path data.', 'error');
      }
    };
    reader.readAsText(file);
  };

  // SVGO Minifier
  const optimizeSvg = () => {
    if (originalSize === 0) {
      setOriginalSize(svgContent.length);
    }
    let clean = svgContent;
    clean = clean.replace(/<!--[\s\S]*?-->/g, '');
    clean = clean.replace(/[\r\n\t]+/g, ' ');
    clean = clean.replace(/([0-9]+\.[0-9]{3,})/g, (val) => Number(val).toFixed(2));
    clean = clean.replace(/\s+/g, ' ');
    const optimized = clean.trim();
    setSvgContent(optimized);
    setOptimizedSize(optimized.length);
    showToast('SVG minified and optimized!', 'success');
  };

  const parsedNodes = useMemo(() => {
    const list: Array<{ tag: string; attributes: Record<string, string>; raw: string }> = [];
    const elementRegex = /<([a-zA-Z0-9]+)\s+([^>]*)\/?>/g;
    let match;
    while ((match = elementRegex.exec(svgContent)) !== null) {
      const tag = match[1];
      const attrStr = match[2];
      const attributes: Record<string, string> = {};
      const attrRegex = /([a-zA-Z0-9-]+)=["']([^"']*)["']/g;
      let attrMatch;
      while ((attrMatch = attrRegex.exec(attrStr)) !== null) {
        attributes[attrMatch[1]] = attrMatch[2];
      }
      list.push({ tag, attributes, raw: match[0] });
    }
    return list;
  }, [svgContent]);

  const updateNodeAttribute = (index: number, attrName: string, newValue: string) => {
    const nodes = [...parsedNodes];
    nodes[index].attributes[attrName] = newValue;
    const updatedContent = nodes.map(n => {
      const attrs = Object.entries(n.attributes).map(([k, v]) => `${k}="${v}"`).join(' ');
      return `<${n.tag} ${attrs} />`;
    }).join('\n');
    setSvgContent(updatedContent);
  };

  const outputCode = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">\n  ${svgContent.trim()}\n</svg>`;

  // SVG Morphing Code Generator
  const morphCodeSnippet = useMemo(() => {
    const iconA = icons.find(i => i.name === morphStart);
    const iconB = icons.find(i => i.name === morphEnd);
    if (!iconA || !iconB) return '/* Select start and end icons */';
    
    // Extract path 'd' attribute
    const dAMatch = iconA.svgContent.match(/d="([^"]+)"/);
    const dBMatch = iconB.svgContent.match(/d="([^"]+)"/);
    const dA = dAMatch ? dAMatch[1] : '';
    const dB = dBMatch ? dBMatch[1] : '';

    return `@keyframes morph-icon {\n  0% { d: path("${dA}"); }\n  100% { d: path("${dB}"); }\n}\n\n.morph-active {\n  animation: morph-icon 1s ease-in-out infinite alternate;\n}`;
  }, [morphStart, morphEnd]);

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem',
    }} className="hero-grid-layout">
      
      {/* Left Column: Creator inputs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        
        {/* Upload Box */}
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          style={{
            border: '2px dashed var(--border-accent)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem 1.5rem',
            textAlign: 'center',
            background: 'var(--bg-surface)',
            cursor: 'pointer',
          }}
        >
          <input
            type="file" accept=".svg" ref={fileInputRef} style={{ display: 'none' }}
            onChange={handleFileUpload}
          />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ marginBottom: '0.5rem' }}>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
            Upload SVG file
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Drag &amp; drop or click to browse
          </div>
        </div>

        {/* Text Area */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Paste SVG Paths
            </label>
            <button
              onClick={optimizeSvg}
              style={{
                background: 'var(--accent-subtle)', border: '1px solid var(--accent-border)',
                borderRadius: 'var(--radius-sm)', padding: '0.25rem 0.65rem',
                fontSize: '0.7rem', color: 'var(--text-accent)', fontWeight: 600, cursor: 'pointer'
              }}
            >
              ⚡ Optimize & Minify
            </button>
          </div>
          <textarea
            value={svgContent}
            onChange={(e) => setSvgContent(cleanSvgPaths(e.target.value))}
            placeholder={`<path d="M12 2L2 22h20L12 2z" />`}
            style={{
              width: '100%', height: '120px', background: 'var(--bg-surface)',
              border: '1px solid var(--border)', borderRadius: 'var(--radius)',
              padding: '0.875rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem', outline: 'none', resize: 'none',
            }}
          />
          {originalSize > 0 && (
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
              Original Size: <strong>{originalSize} bytes</strong> | Optimized Size: <strong>{optimizedSize} bytes</strong> ({Math.round(((originalSize - optimizedSize) / originalSize) * 100)}% saved)
            </div>
          )}
        </div>

        {/* Interactive Node Editor */}
        {parsedNodes.length > 0 && (
          <div className="card" style={{ padding: '1.25rem' }}>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              Interactive Node Attributes
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxHeight: '150px', overflowY: 'auto' }} className="no-scrollbar">
              {parsedNodes.map((node, nodeIdx) => (
                <div key={nodeIdx} style={{
                  padding: '0.75rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)',
                  fontSize: '0.75rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-accent)', fontWeight: 600, marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                    <span>&lt;{node.tag} /&gt;</span>
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Node #{nodeIdx + 1}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {Object.entries(node.attributes).map(([key, val]) => (
                      <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', minWidth: '40px' }}>{key}</span>
                        <input
                          type="text"
                          value={val}
                          onChange={(e) => updateNodeAttribute(nodeIdx, key, e.target.value)}
                          style={{
                            flex: 1, padding: '0.25rem 0.5rem', background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                            borderRadius: '4px', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SVG Morphing Tool */}
        <div className="card" style={{ padding: '1.25rem' }}>
          <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
            SVG Morphing Generator
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Start Icon</label>
              <select value={morphStart} onChange={(e) => setMorphStart(e.target.value)} style={{ width: '100%', padding: '0.35rem', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', color: 'var(--text-primary)' }}>
                {icons.filter(i => i.svgContent.includes('d=')).map(i => (
                  <option key={i.name} value={i.name}>{i.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>End Icon</label>
              <select value={morphEnd} onChange={(e) => setMorphEnd(e.target.value)} style={{ width: '100%', padding: '0.35rem', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', color: 'var(--text-primary)' }}>
                {icons.filter(i => i.svgContent.includes('d=')).map(i => (
                  <option key={i.name} value={i.name}>{i.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-secondary)' }}>MORPHING CSS KEYFRAMES</span>
            <CopyButton text={morphCodeSnippet} label="Copy CSS" />
          </div>
          <pre className="code-block" style={{ fontSize: '0.7rem', padding: '0.75rem 1rem', whiteSpace: 'pre-wrap', maxHeight: '100px', overflowY: 'auto' }}>
            {morphCodeSnippet}
          </pre>
        </div>

      </div>

      {/* Right Column: Canvas preview & code outputs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        
        {/* Visual Canvas */}
        <div style={{
          height: '220px', background: 'var(--bg-surface)', border: '1px solid var(--border)',
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

        {/* Customization Sliders */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', background: 'var(--bg-surface)', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Size ({size}px)</span>
            <input type="range" min="16" max="96" value={size} onChange={(e) => setSize(parseInt(e.target.value))} style={{ cursor: 'pointer', accentColor: 'var(--accent)', width: '120px' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Stroke ({strokeWidth})</span>
            <input type="range" min="1" max="4" step="0.5" value={strokeWidth} onChange={(e) => setStrokeWidth(parseFloat(e.target.value))} style={{ cursor: 'pointer', accentColor: 'var(--accent)', width: '120px' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Color</span>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} style={{ border: 'none', background: 'none', width: '28px', height: '24px', cursor: 'pointer' }} />
          </div>
        </div>

        {/* Code Output */}
        {svgContent && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Styled Output Code</span>
              <CopyButton text={outputCode} label="Copy Code" />
            </div>
            <pre className="code-block" style={{ fontSize: '0.75rem', padding: '0.875rem 1.1rem', borderRadius: 'var(--radius-sm)', whiteSpace: 'pre-wrap', maxHeight: '120px', overflowY: 'auto' }}>
              {outputCode}
            </pre>
          </div>
        )}

      </div>

    </div>
  );
}
