'use client';
import { useState } from 'react';
import Link from 'next/link';
import { IconMeta } from '@/lib/icons';
import CopyButton from './CopyButton';

interface IconDetailViewProps {
  icon: IconMeta;
}

export default function IconDetailView({ icon }: IconDetailViewProps) {
  const [size, setSize] = useState(24);
  const [color, setColor] = useState('#a78bfa'); // Default theme accent
  const [strokeWidth, setStrokeWidth] = useState(2);

  const cdnUrl = `https://cdn.jsdelivr.net/gh/jojin1709/iconyx@main/public/icons/${icon.category}/${icon.name}.svg`;
  const imgTag = `<img src="${cdnUrl}" alt="${icon.name}" width="${size}" height="${size}" />`;
  const reactCode = `import React from 'react';\n\nexport function ${icon.name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Icon({\n  size = ${size},\n  color = "${color}"\n}: { size?: number; color?: string }) {\n  return (\n    <svg\n      width={size}\n      height={size}\n      viewBox="0 0 24 24"\n      fill="none"\n      stroke={color}\n      strokeWidth={${strokeWidth}}\n      strokeLinecap="round"\n      strokeLinejoin="round"\n      dangerouslySetInnerHTML={{ __html: \`${icon.svgContent.replace(/`/g, '\\`')}\` }}\n    />\n  );\n}`;

  return (
    <div className="container" style={{ maxWidth: '720px' }}>
      {/* Breadcrumbs */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        <Link href="/icons" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Icons</Link>
        <span>/</span>
        <Link href={`/icons?category=${icon.category}`} style={{ color: 'var(--text-accent)', textDecoration: 'none', textTransform: 'capitalize' }}>{icon.category}</Link>
        <span>/</span>
        <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{icon.name}</span>
      </div>

      <div className="card" style={{ padding: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div>
            <h1 className="heading-md" style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', marginBottom: '0.25rem' }}>
              {icon.name}
            </h1>
            <span className="badge badge-accent" style={{ textTransform: 'capitalize' }}>
              {icon.category} Icon
            </span>
          </div>
          <div style={{
            width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)',
          }}>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
              stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
              dangerouslySetInnerHTML={{ __html: icon.svgContent }}
            />
          </div>
        </div>

        {/* Customization Sliders */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.25rem', padding: '1.25rem', background: 'var(--bg-surface)',
          borderRadius: 'var(--radius)', border: '1px solid var(--border)', marginBottom: '1.5rem'
        }}>
          <div>
            <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              <span>Size</span>
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
              <span>Stroke Color</span>
              <span style={{ color: 'var(--accent)' }}>{color}</span>
            </label>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} style={{ width: '28px', height: '28px', border: 'none', background: 'none', cursor: 'pointer' }} />
              <input type="text" value={color} onChange={(e) => setColor(e.target.value)} style={{ flex: 1, padding: '0.2rem 0.5rem', background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }} />
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', height: '1px', background: 'var(--border)', margin: '1.5rem 0' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* CDN URL */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>CDN URL</span>
              <CopyButton text={cdnUrl} label="Copy URL" />
            </div>
            <div className="code-block" style={{ fontSize: '0.8rem', padding: '0.75rem 1rem' }}>
              <span className="token-url">{cdnUrl}</span>
            </div>
          </div>

          {/* HTML Snippet */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>HTML Image Tag</span>
              <CopyButton text={imgTag} label="Copy HTML" />
            </div>
            <div className="code-block" style={{ fontSize: '0.8rem', padding: '0.75rem 1rem', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
              <span className="token-tag">{'<img '}</span>
              <span className="token-attr">src</span>=<span className="token-str">&quot;{cdnUrl}&quot;</span>
              {' '}
              <span className="token-attr">width</span>=<span className="token-str">&quot;{size}&quot;</span>
              {' '}
              <span className="token-attr">height</span>=<span className="token-str">&quot;{size}&quot;</span>
              {' />'}
            </div>
          </div>

          {/* React snippet code */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>React / Next.js Component</span>
              <CopyButton text={reactCode} label="Copy Component" />
            </div>
            <pre className="code-block" style={{ fontSize: '0.7rem', padding: '0.75rem 1rem', whiteSpace: 'pre-wrap', maxHeight: '180px', overflowY: 'auto' }}>
              {reactCode}
            </pre>
          </div>

          {/* SVG Download */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
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
