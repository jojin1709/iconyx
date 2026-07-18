'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { icons, matchesSearch } from '@/lib/icons';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Filter icons based on query
  const filtered = icons.filter(icon => matchesSearch(icon, query)).slice(0, 8);

  const toggleOpen = useCallback(() => {
    setIsOpen(open => !open);
    setQuery('');
    setSelectedIndex(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleOpen();
      }
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        toggleOpen();
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, toggleOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleArrowKeys = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((selectedIndex + 1) % Math.max(1, filtered.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((selectedIndex - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        router.push(`/icons/${filtered[selectedIndex].name}`);
        setIsOpen(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(5, 5, 10, 0.75)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        paddingTop: '15vh'
      }}
    >
      <div
        ref={modalRef}
        style={{
          width: '100%', maxWidth: '600px',
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)', overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          animation: 'reveal-up 0.25s ease forwards'
        }}
      >
        {/* Search Input Box */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem 1.25rem', borderBottom: '1px solid var(--border)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="var(--text-muted)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.75rem' }}>
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type icon name or tags to search instantly..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleArrowKeys}
            style={{
              flex: 1, background: 'none', border: 'none', color: 'var(--text-primary)',
              fontSize: '1rem', outline: 'none'
            }}
          />
          <span style={{
            fontSize: '0.7rem', padding: '0.2rem 0.5rem', background: 'var(--bg-surface)',
            border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)',
            color: 'var(--text-muted)', fontFamily: 'var(--font-mono)'
          }}>ESC</span>
        </div>

        {/* Results List */}
        <div style={{ padding: '0.5rem', maxHeight: '350px', overflowY: 'auto' }}>
          {filtered.length === 0 ? (
            <div style={{ padding: '2rem 1.5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              No icons found matching your search.
            </div>
          ) : (
            filtered.map((icon, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={icon.name}
                  onClick={() => {
                    router.push(`/icons/${icon.name}`);
                    setIsOpen(false);
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0.75rem 1rem', borderRadius: 'var(--radius)',
                    cursor: 'pointer', transition: 'var(--transition)',
                    background: isSelected ? 'var(--accent-subtle)' : 'transparent',
                    border: '1px solid',
                    borderColor: isSelected ? 'var(--accent-border)' : 'transparent'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)',
                      color: isSelected ? 'var(--accent)' : 'var(--text-secondary)'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        dangerouslySetInnerHTML={{ __html: icon.svgContent }}
                      />
                    </div>
                    <div>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9375rem', fontFamily: 'var(--font-mono)' }}>
                        {icon.name}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                        in {icon.category}
                      </span>
                    </div>
                  </div>
                  {isSelected && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      ↵ Press Enter to view
                    </span>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer info bar */}
        <div style={{
          padding: '0.65rem 1rem', background: 'var(--bg-surface)',
          borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between',
          fontSize: '0.7rem', color: 'var(--text-muted)'
        }}>
          <span>Use <kbd>↑</kbd> <kbd>↓</kbd> keys to navigate</span>
          <span>Press <kbd>↵</kbd> to select</span>
        </div>
      </div>
    </div>
  );
}
