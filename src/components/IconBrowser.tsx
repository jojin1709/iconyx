'use client';
import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { icons, CATEGORIES, IconMeta, type CategoryId, getCdnUrl, matchesSearch } from '@/lib/icons';
import IconModal from './IconModal';
import CopyButton from './CopyButton';
import { useToast } from '@/context/ToastContext';

function IconCard({
  icon,
  onClick,
  gridSize,
  gridColor,
  gridStroke,
  onCopy,
}: {
  icon: IconMeta;
  onClick: (icon: IconMeta) => void;
  gridSize: number;
  gridColor: string;
  gridStroke: number;
  onCopy?: () => void;
}) {
  const cdnUrl = getCdnUrl(icon.category, icon.name);
  const rawSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${gridSize}" height="${gridSize}" viewBox="0 0 24 24" fill="none" stroke="${gridColor}" stroke-width="${gridStroke}" stroke-linecap="round" stroke-linejoin="round">${icon.svgContent}</svg>`;
  const reactCode = `import React from 'react';\n\nexport function ${icon.name.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Icon({\n  size = ${gridSize},\n  color = "${gridColor}"\n}: { size?: number; color?: string }) {\n  return (\n    <svg\n      width={size}\n      height={size}\n      viewBox="0 0 24 24"\n      fill="none"\n      stroke={color}\n      strokeWidth={${gridStroke}}\n      strokeLinecap="round"\n      strokeLinejoin="round"\n      dangerouslySetInnerHTML={{ __html: \`${icon.svgContent}\` }}\n    />\n  );\n}`;

  return (
    <div
      className="icon-card"
      onClick={() => onClick(icon)}
      role="button"
      tabIndex={0}
      aria-label={`${icon.name} icon — click to view details`}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick(icon)}
      id={`icon-${icon.name}`}
    >
      <svg
        className="icon-preview"
        width={gridSize}
        height={gridSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke={gridColor}
        strokeWidth={gridStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: icon.svgContent }}
      />
      <span className="icon-card-name">{icon.name}</span>

      <div className="icon-card-actions" onClick={(e) => e.stopPropagation()}>
        <CopyButton
          text={cdnUrl}
          label="CDN"
          successLabel="✓"
          id={`quick-copy-cdn-${icon.name}`}
          onCopy={onCopy}
        />
        <CopyButton
          text={rawSvg}
          label="SVG"
          successLabel="✓"
          id={`quick-copy-svg-${icon.name}`}
          onCopy={onCopy}
        />
        <CopyButton
          text={reactCode}
          label="React"
          successLabel="✓"
          id={`quick-copy-react-${icon.name}`}
          onCopy={onCopy}
        />
      </div>
    </div>
  );
}

export default function IconBrowser() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { showToast } = useToast();

  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [selectedIcon, setSelectedIcon] = useState<IconMeta | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Live customizable grid settings
  const [gridSize, setGridSize] = useState<number>(24);
  const [gridColor, setGridColor] = useState<string>('currentColor');
  const [gridStroke, setGridStroke] = useState<number>(2);

  // Frequently used icons names tracked locally
  const [frequentNames, setFrequentNames] = useState<string[]>([]);

  const frequentIcons = useMemo(() => {
    return frequentNames
      .map(name => icons.find(i => i.name === name))
      .filter((icon): icon is IconMeta => !!icon)
      .slice(0, 6);
  }, [frequentNames]);

  // Compute tag suggestions based on the typed query
  const tagSuggestions = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (trimmed.length < 2) return [];

    const matchedTags = new Set<string>();
    icons.forEach(icon => {
      icon.tags.forEach(tag => {
        if (tag.startsWith(trimmed) && tag !== trimmed) {
          matchedTags.add(tag);
        }
      });
    });
    return Array.from(matchedTags).slice(0, 6);
  }, [query]);

  // Load frequent list on component mount
  useEffect(() => {
    try {
      const key = 'iconyx_frequent_copies';
      const data = JSON.parse(localStorage.getItem(key) || '{}');
      const sorted = Object.entries(data)
        .sort((a: any, b: any) => b[1] - a[1])
        .map(entry => entry[0]);
      setFrequentNames(sorted);
    } catch (err) {
      console.error(err);
    }
  }, []);

  // Update localStorage copy records
  const handleIconCopy = useCallback((name: string) => {
    try {
      const key = 'iconyx_frequent_copies';
      const data = JSON.parse(localStorage.getItem(key) || '{}');
      data[name] = (data[name] || 0) + 1;
      localStorage.setItem(key, JSON.stringify(data));

      const sorted = Object.entries(data)
        .sort((a: any, b: any) => b[1] - a[1])
        .map(entry => entry[0]);
      setFrequentNames(sorted);
    } catch (err) {
      console.error(err);
    }
  }, []);

  // Sync state from query params on load
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const categoryExists = CATEGORIES.some(cat => cat.id === categoryParam);
      if (categoryExists) {
        setActiveCategory(categoryParam as CategoryId);
      }
    }
    const searchParam = searchParams.get('search');
    if (searchParam) {
      setQuery(searchParam);
    }
  }, [searchParams]);

  // Update query params in URL
  const updateUrlParams = useCallback((category: CategoryId, searchQuery: string) => {
    const params = new URLSearchParams();
    if (category !== 'all') {
      params.set('category', category);
    }
    if (searchQuery.trim()) {
      params.set('search', searchQuery);
    }
    router.replace(`/icons?${params.toString()}`, { scroll: false });
  }, [router]);

  const handleCategoryChange = useCallback((category: CategoryId) => {
    setActiveCategory(category);
    updateUrlParams(category, query);
  }, [query, updateUrlParams]);

  const handleSearchChange = useCallback((value: string) => {
    setQuery(value);
    updateUrlParams(activeCategory, value);
  }, [activeCategory, updateUrlParams]);

  const filtered = useMemo(() => {
    let list = icons;
    if (activeCategory !== 'all') {
      list = list.filter((i) => i.category === activeCategory);
    }
    const q = query.toLowerCase().trim();
    if (q) {
      list = list.filter((i) => matchesSearch(i, q));
    }
    return list;
  }, [query, activeCategory]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchRef.current?.focus();
    }
  }, []);

  // Global "/" shortcut to focus search (like Heroicons, Lucide, etc.)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // "/" when not already in an input/textarea focuses the search
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Prev / Next cycling helper functions for Modal
  const handleNextIcon = useCallback(() => {
    if (!selectedIcon) return;
    const currentIndex = filtered.findIndex(i => i.name === selectedIcon.name);
    if (currentIndex !== -1 && currentIndex < filtered.length - 1) {
      setSelectedIcon(filtered[currentIndex + 1]);
    } else if (filtered.length > 0) {
      setSelectedIcon(filtered[0]); // Wrap around
    }
  }, [selectedIcon, filtered]);

  const handlePrevIcon = useCallback(() => {
    if (!selectedIcon) return;
    const currentIndex = filtered.findIndex(i => i.name === selectedIcon.name);
    if (currentIndex !== -1 && currentIndex > 0) {
      setSelectedIcon(filtered[currentIndex - 1]);
    } else if (filtered.length > 0) {
      setSelectedIcon(filtered[filtered.length - 1]); // Wrap around
    }
  }, [selectedIcon, filtered]);

  // Bulk ZIP download downloader (feature #10)
  const downloadAllAsZip = useCallback(async () => {
    showToast('Preparing ZIP download...', 'info');
    try {
      // Import JSZip dynamically to reduce load bundle size
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();

      // Filter based on currently visible/filtered icons
      filtered.forEach(icon => {
        const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon.svgContent}</svg>`;
        zip.file(`${icon.category}/${icon.name}.svg`, svgContent);
      });

      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `iconyx-filtered-icons.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showToast(`Downloaded ZIP containing ${filtered.length} icons!`, 'success');
    } catch (err) {
      showToast('Failed to compile ZIP download', 'error');
      console.error(err);
    }
  }, [filtered, showToast]);

  return (
    <div onKeyDown={handleKeyDown}>
      {/* Search + Filter bar */}
      <div style={{
        position: 'sticky', top: '64px', zIndex: 50,
        background: 'var(--bg-panel)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        padding: '1rem 0',
      }}>
        <div className="container">
          {/* Search bar with Action buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }} className="search-row-layout">
            <div style={{ position: 'relative', flex: 1 }}>
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                style={{
                  position: 'absolute', left: '1.1rem', top: '50%', transform: 'translateY(-50%)',
                  color: 'var(--text-muted)', pointerEvents: 'none',
                }}
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                ref={searchRef}
                id="icon-search"
                type="search"
                className="input-search"
                placeholder="Search icons by name or tag… (Press / or Ctrl+K)"
                value={query}
                onChange={(e) => handleSearchChange(e.target.value)}
                aria-label="Search icons"
              />
              {query && (
                <button
                  onClick={() => handleSearchChange('')}
                  style={{
                    position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', color: 'var(--text-muted)',
                    cursor: 'pointer', padding: '0.25rem', display: 'flex',
                  }}
                  aria-label="Clear search"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              )}
            </div>

            {/* ZIP download button */}
            <button
              onClick={downloadAllAsZip}
              className="btn-secondary"
              style={{ padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-full)' }}
              title="Download currently filtered icons as a ZIP file"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <span className="hide-mobile">ZIP</span>
            </button>
          </div>

          {/* Autocomplete / Suggested Tags (feature #2) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.85rem', padding: '0 0.25rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              {tagSuggestions.length > 0 ? 'Suggestions:' : 'Popular:'}
            </span>
            {(tagSuggestions.length > 0 ? tagSuggestions : ['arrow', 'check', 'file', 'mail', 'cloud', 'chart', 'theme', 'user']).map(term => (
              <button
                key={term}
                onClick={() => handleSearchChange(term)}
                style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-full)', padding: '0.2rem 0.65rem',
                  fontSize: '0.75rem', color: 'var(--text-secondary)', cursor: 'pointer',
                  transition: 'var(--transition)',
                }}
              >
                {term}
              </button>
            ))}
          </div>

          {/* Category pills are now rendered in the left sidebar list below */}

          {/* Live Customizer Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            padding: '0.85rem 0.25rem 0.25rem',
            borderTop: '1px solid var(--border)',
            flexWrap: 'wrap'
          }} className="live-customizer-controls">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Customize Grid Previews:</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              {/* Size control */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Size:</span>
                <input
                  type="range"
                  min="16"
                  max="48"
                  value={gridSize}
                  onChange={(e) => setGridSize(parseInt(e.target.value))}
                  style={{ cursor: 'pointer', accentColor: 'var(--accent)', width: '80px' }}
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-accent)', fontFamily: 'var(--font-mono)', minWidth: '30px' }}>{gridSize}px</span>
              </div>
              {/* Stroke Control */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Stroke:</span>
                <input
                  type="range"
                  min="1"
                  max="3"
                  step="0.5"
                  value={gridStroke}
                  onChange={(e) => setGridStroke(parseFloat(e.target.value))}
                  style={{ cursor: 'pointer', accentColor: 'var(--accent)', width: '60px' }}
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-accent)', fontFamily: 'var(--font-mono)' }}>{gridStroke}</span>
              </div>
              {/* Color picker */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Color:</span>
                <input
                  type="color"
                  value={gridColor === 'currentColor' ? '#a78bfa' : gridColor}
                  onChange={(e) => setGridColor(e.target.value)}
                  style={{ border: 'none', background: 'none', width: '24px', height: '24px', cursor: 'pointer', padding: 0 }}
                />
                <button
                  onClick={() => setGridColor('currentColor')}
                  style={{
                    background: 'none', border: 'none', color: 'var(--text-accent)',
                    fontSize: '0.7rem', cursor: 'pointer', padding: 0, textDecoration: 'underline'
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Results Grid */}
      <div className="container" style={{ padding: '2rem 1.5rem' }}>
        <div className="browser-layout">
          {/* Left Sidebar Categories Column */}
          <aside className="sidebar-categories">
            <h3 style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid var(--border)'
            }}>
              Categories
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {CATEGORIES.map((cat) => {
                const count = cat.id === 'all'
                  ? icons.length
                  : icons.filter((i) => i.category === cat.id).length;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id as CategoryId)}
                    className={`sidebar-cat-btn ${isActive ? 'active' : ''}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '0.6rem 0.75rem',
                      background: isActive ? 'var(--accent-subtle)' : 'transparent',
                      color: isActive ? 'var(--text-accent)' : 'var(--text-secondary)',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 500,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: isActive ? 'var(--accent)' : 'var(--text-muted)',
                        opacity: isActive ? 1 : 0.6
                      }} />
                      {cat.label}
                    </span>
                    <span style={{
                      fontSize: '0.75rem',
                      color: isActive ? 'var(--text-accent)' : 'var(--text-muted)',
                      background: isActive ? 'rgba(124, 58, 237, 0.12)' : 'var(--bg-elevated)',
                      padding: '0.1rem 0.45rem',
                      borderRadius: '999px',
                      border: '1px solid var(--border)'
                    }}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Right Main Grid Column */}
          <div className="main-grid-content" style={{ flex: 1 }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: '1.25rem',
            }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                {query ? (
                  <>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{filtered.length}</span>
                    {' '}result{filtered.length !== 1 ? 's' : ''} for &ldquo;<span style={{ color: 'var(--text-accent)' }}>{query}</span>&rdquo;
                  </>
                ) : (
                  <>
                    Showing <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{filtered.length}</span> icons
                    {activeCategory !== 'all' && <> in <span style={{ color: 'var(--text-accent)' }}>{activeCategory}</span></>}
                  </>
                )}
              </p>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Click any icon for controls &amp; snippets
              </span>
            </div>

            {/* Frequently Used Icons Section */}
            {frequentIcons.length > 0 && !query && activeCategory === 'all' && (
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
                  Recently Used
                </h3>
                <div className="icon-grid" style={{ marginBottom: '1.5rem' }}>
                  {frequentIcons.map((icon) => (
                    <IconCard
                      key={`frequent-${icon.category}-${icon.name}`}
                      icon={icon}
                      onClick={setSelectedIcon}
                      gridSize={gridSize}
                      gridColor={gridColor}
                      gridStroke={gridStroke}
                      onCopy={() => handleIconCopy(icon.name)}
                    />
                  ))}
                </div>
                <div style={{ borderBottom: '1px solid var(--border)', marginBottom: '1.5rem' }} />
              </div>
            )}

            {filtered.length > 0 ? (
              <div className="icon-grid">
                {filtered.map((icon) => (
                  <IconCard
                    key={`${icon.category}-${icon.name}`}
                    icon={icon}
                    onClick={setSelectedIcon}
                    gridSize={gridSize}
                    gridColor={gridColor}
                    gridStroke={gridStroke}
                    onCopy={() => handleIconCopy(icon.name)}
                  />
                ))}
              </div>
            ) : (
              <div style={{
                textAlign: 'center', padding: '5rem 2rem',
                color: 'var(--text-muted)',
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ margin: '0 auto 1rem', opacity: 0.4 }}>
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  No icons found
                </p>
                <p style={{ fontSize: '0.875rem' }}>
                  Try a different keyword or{' '}
                  <button
                    onClick={() => { setQuery(''); setActiveCategory('all'); updateUrlParams('all', ''); }}
                    style={{ background: 'none', border: 'none', color: 'var(--text-accent)', cursor: 'pointer', padding: 0 }}
                  >
                    browse all icons
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <IconModal
        icon={selectedIcon}
        onClose={() => setSelectedIcon(null)}
        onNext={handleNextIcon}
        onPrev={handlePrevIcon}
      />
    </div>
  );
}
