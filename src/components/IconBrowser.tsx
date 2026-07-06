'use client';
import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { icons, CATEGORIES, IconMeta, type CategoryId } from '@/lib/icons';
import IconModal from './IconModal';
import CopyButton from './CopyButton';
import { useToast } from '@/context/ToastContext';

function IconCard({ icon, onClick }: { icon: IconMeta; onClick: (icon: IconMeta) => void }) {
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
        width="24" height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: icon.svgContent }}
      />
      <span className="icon-card-name">{icon.name}</span>

      <div className="icon-card-actions" onClick={(e) => e.stopPropagation()}>
        <CopyButton
          text={`https://cdn.jsdelivr.net/gh/YOUR_GITHUB_USERNAME/iconyx@main/public/icons/${icon.category}/${icon.name}.svg`}
          label="CDN"
          successLabel="✓"
          id={`quick-copy-cdn-${icon.name}`}
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
      list = list.filter(
        (i) =>
          i.name.includes(q) ||
          i.category.includes(q) ||
          i.tags.some((t) => t.includes(q))
      );
    }
    return list;
  }, [query, activeCategory]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchRef.current?.focus();
    }
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
        background: 'rgba(8,8,16,0.9)', backdropFilter: 'blur(20px)',
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
                placeholder="Search icons by name or tag… (Ctrl+K)"
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

          {/* Category pills */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.25rem' }}
            className="no-scrollbar">
            {CATEGORIES.map((cat) => {
              const count = cat.id === 'all'
                ? icons.length
                : icons.filter((i) => i.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  className={`pill ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(cat.id as CategoryId)}
                  id={`filter-${cat.id}`}
                  aria-pressed={activeCategory === cat.id}
                >
                  <span>{cat.emoji}</span>
                  {cat.label}
                  <span style={{
                    fontSize: '0.7rem', opacity: 0.6,
                    background: 'rgba(255,255,255,0.07)',
                    padding: '0.1rem 0.4rem',
                    borderRadius: '999px',
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="container" style={{ padding: '2rem 1.5rem' }}>
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

        {filtered.length > 0 ? (
          <div className="icon-grid">
            {filtered.map((icon) => (
              <IconCard key={`${icon.category}-${icon.name}`} icon={icon} onClick={setSelectedIcon} />
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

      <IconModal
        icon={selectedIcon}
        onClose={() => setSelectedIcon(null)}
        onNext={handleNextIcon}
        onPrev={handlePrevIcon}
      />
    </div>
  );
}
