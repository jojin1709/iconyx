'use client';
import { useState, useCallback } from 'react';
import { useToast } from '@/context/ToastContext';

interface CopyButtonProps {
  text: string;
  label?: string;
  successLabel?: string;
  className?: string;
  id?: string;
}

export default function CopyButton({
  text,
  label = 'Copy',
  successLabel = 'Copied!',
  className = 'copy-btn',
  id,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      showToast(`${label} copied to clipboard!`, 'success');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement('textarea');
      el.value = text;
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      showToast(`${label} copied to clipboard!`, 'success');
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text, label, showToast]);

  return (
    <button
      id={id}
      onClick={handleCopy}
      className={`${className} ${copied ? 'copied' : ''}`}
      aria-label={copied ? 'Copied!' : `Copy ${label}`}
    >
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          {successLabel}
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          {label}
        </>
      )}
    </button>
  );
}
