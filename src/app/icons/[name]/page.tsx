import { icons } from '@/lib/icons';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CopyButton from '@/components/CopyButton';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface RouteProps {
  params: Promise<{ name: string }>;
}

// Generate static routes during build time for all 129 icons!
export async function generateStaticParams() {
  return icons.map((icon) => ({
    name: icon.name,
  }));
}

// Dynamically generate SEO metadata for every individual icon page!
export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { name } = await params;
  const icon = icons.find((i) => i.name === name);

  if (!icon) {
    return {
      title: 'Icon Not Found — Iconyx',
    };
  }

  return {
    title: `${icon.name} Icon — Free SVG CDN`,
    description: `Free high-quality SVG CDN URL and React component code snippet for the "${icon.name}" vector icon in the "${icon.category}" category.`,
    keywords: [icon.name, 'svg icon', 'free icon', 'icon cdn', icon.category],
  };
}

export default async function IconDetailPage({ params }: RouteProps) {
  const { name } = await params;
  const icon = icons.find((i) => i.name === name);

  if (!icon) {
    notFound();
  }

  const cdnUrl = `https://cdn.jsdelivr.net/gh/jojin1709/iconyx@main/public/icons/${icon.category}/${icon.name}.svg`;
  const imgTag = `<img src="${cdnUrl}" alt="${icon.name}" width="24" height="24" />`;
  const reactCode = `import React from 'react';\n\nexport function ${icon.name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Icon({\n  size = 24,\n  color = "currentColor"\n}: { size?: number; color?: string }) {\n  return (\n    <svg\n      width={size}\n      height={size}\n      viewBox="0 0 24 24"\n      fill="none"\n      stroke={color}\n      strokeWidth={2}\n      strokeLinecap="round"\n      strokeLinejoin="round"\n      dangerouslySetInnerHTML={{ __html: \`${icon.svgContent.replace(/`/g, '\\`')}\` }}\n    />\n  );\n}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, padding: '4rem 0' }}>
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
                width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)',
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                  stroke="var(--accent-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  dangerouslySetInnerHTML={{ __html: icon.svgContent }}
                />
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
                  {'  '}
                  <span className="token-attr">width</span>=<span className="token-str">&quot;24&quot;</span>
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
                    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon.svgContent}</svg>`
                  )}`}
                  download={`${icon.name}.svg`}
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  Download SVG File
                </a>
                <Link href="/icons" className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                  Back to Library
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
