'use client';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type ToastType = 'success' | 'error' | 'info';
interface Toast { id: number; message: string; type: ToastType; }
interface ToastCtx { showToast: (message: string, type?: ToastType) => void; }

const ToastContext = createContext<ToastCtx>({ showToast: () => {} });
export const useToast = () => useContext(ToastContext);

const ICONS: Record<ToastType, string> = {
  success: `<polyline points="20 6 9 17 4 12"/>`,
  error:   `<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>`,
  info:    `<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>`,
};
const COLORS: Record<ToastType, string> = {
  success: '#10b981',
  error:   '#ef4444',
  info:    '#7c3aed',
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 2800);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast Container */}
      <div style={{
        position: 'fixed', bottom: '1.5rem', right: '1.5rem',
        zIndex: 9999, display: 'flex', flexDirection: 'column', gap: '0.6rem',
        pointerEvents: 'none',
      }}>
        {toasts.map((t) => (
          <div key={t.id} style={{
            display: 'flex', alignItems: 'center', gap: '0.6rem',
            padding: '0.75rem 1.1rem',
            background: 'var(--bg-elevated)',
            border: `1px solid ${COLORS[t.type]}44`,
            borderRadius: 'var(--radius)',
            boxShadow: `0 4px 20px rgba(0,0,0,0.4), 0 0 0 1px ${COLORS[t.type]}22`,
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--text-primary)',
            backdropFilter: 'blur(12px)',
            pointerEvents: 'auto',
            animation: 'float-up 0.25s ease',
            maxWidth: '320px',
            whiteSpace: 'nowrap',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke={COLORS[t.type]} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              dangerouslySetInnerHTML={{ __html: ICONS[t.type] }}
            />
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
