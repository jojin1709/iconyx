import { ImageResponse } from 'next/og';
import { totalIcons } from '@/lib/icons';

export const alt = 'Iconyx — Free Open Source SVG Icon CDN';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#080810',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '40px',
        }}
      >
        {/* Subtle background radial pattern */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Decorative Grid outline */}
        <div
          style={{
            position: 'absolute',
            inset: '30px',
            border: '1px dashed rgba(255,255,255,0.07)',
            borderRadius: '24px',
            pointerEvents: 'none',
          }}
        />

        {/* Brand Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 30px rgba(124, 58, 237, 0.4)',
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 19 8 19 16 12 22 5 16 5 8" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <span
            style={{
              fontSize: '48px',
              fontWeight: 900,
              color: '#f0f0ff',
              letterSpacing: '-0.04em',
            }}
          >
            Iconyx<span style={{ color: '#7c3aed' }}>.</span>
          </span>
        </div>

        {/* Heading Tagline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            fontSize: '64px',
            fontWeight: 800,
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: 1.15,
            maxWidth: '900px',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}
        >
          <span>Beautiful icons,&nbsp;</span>
          <span
            style={{
              background: 'linear-gradient(135deg, #c4b5fd 0%, #818cf8 50%, #7c3aed 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            instant CDN.
          </span>
        </div>

        {/* Subheading details */}
        <div
          style={{
            display: 'flex',
            fontSize: '24px',
            color: '#8b8ba0',
            textAlign: 'center',
            marginBottom: '48px',
            maxWidth: '680px',
          }}
        >
          {totalIcons}+ hand-crafted, free open-source vector SVG icons served via jsDelivr global multi-CDN network.
        </div>

        {/* Badge pills */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <div
            style={{
              padding: '10px 24px',
              borderRadius: '9999px',
              background: 'rgba(124, 58, 237, 0.12)',
              border: '1px solid rgba(124, 58, 237, 0.35)',
              color: '#a78bfa',
              fontSize: '16px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            MIT License
          </div>
          <div
            style={{
              padding: '10px 24px',
              borderRadius: '9999px',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#34d399',
              fontSize: '16px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            100% Free
          </div>
          <div
            style={{
              padding: '10px 24px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#f0f0ff',
              fontSize: '16px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Developed by Jojin John
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
