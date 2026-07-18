import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog — Iconyx',
  description: 'View the timeline and history of updates, icon releases, and feature upgrades to the Iconyx CDN.',
};

const LOG_RELEASES = [
  {
    version: 'v1.2.0',
    date: 'July 2026',
    title: 'Icon style families, Grouped Sidebar browser, and Custom SVG exports',
    type: 'Update',
    commits: [
      'Introduced three brand-new styled icon families: Dotted outlines, 3D Fluency gradients, and Liquid Glass glassmorphism shapes.',
      'Refactored the horizontal categories filter pills bar into a responsive, sticky vertical sidebar layout.',
      'Grouped categories into separate semantic Categories and visual Style Families list sub-sections.',
      'Added custom SVG downloads that dynamically output sizes, stroke widths, and color values set in the customizer.',
      'Integrated a "Recently Used" row to track frequently copied icons in localStorage.',
      'Added smart Synonym-matching queries (e.g. searching "delete" finds "trash").',
      'Fixed code block syntax readability variables in light mode.'
    ]
  },
  {
    version: 'v1.1.0',
    date: 'July 2026',
    title: 'PWA, React Snippets, and responsive mobile support',
    type: 'Update',
    commits: [
      'Added mobile responsive hamburger drawers inside header menus.',
      'Added direct React Component copy functionality to main browser cards.',
      'Enhanced search functionality with keyboard shortcuts (global "/" shortcut).',
      'Configured Web Manifest for local PWA installability.',
      'Integrated live-synced statistics calculations across page widgets.'
    ]
  },
  {
    version: 'v1.0.0',
    date: 'June 2026',
    title: 'Official Launch of Iconyx CDN',
    type: 'Release',
    commits: [
      'Launched official Iconyx suite featuring 174 clean hand-drawn vector SVG icons.',
      'Organized 12 neat categories covering design elements, weather, commerce, data, devices, and UI utilities.',
      'Implemented full global CDN routing through jsDelivr edge nodes.',
      'Created live web dashboard featuring visual browser grids and custom sandbox preview drawers.',
      'Introduced dynamic search engine queries mapping custom keyword metadata tags.'
    ]
  }
];

export default function ChangelogPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge badge-accent" style={{ marginBottom: '1rem' }}>Timeline</span>
            <h1 className="heading-lg" style={{ marginBottom: '1rem' }}>
              What&apos;s New in <span className="text-gradient">Iconyx</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', maxWidth: '500px', margin: '0 auto' }}>
              Track progress, package updates, and icon library additions over time.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative' }}>
            {/* Center line decoration */}
            <div style={{
              position: 'absolute', left: '16px', top: '10px', bottom: '10px',
              width: '2px', background: 'var(--border)', zIndex: 0
            }} />

            {LOG_RELEASES.map((rel) => (
              <div key={rel.version} style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 1 }}>
                
                {/* Timeline node icon */}
                <div style={{
                  width: '34px', height: '34px', borderRadius: '50%',
                  background: rel.type === 'Release' ? 'linear-gradient(135deg, var(--accent), var(--indigo))' : 'var(--bg-elevated)',
                  border: '3px solid var(--bg-base)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '0.9rem', fontWeight: 'bold', flexShrink: 0
                }}>
                  {rel.type === 'Release' ? '★' : '◆'}
                </div>

                {/* Release Card */}
                <div className="card" style={{ padding: '2rem', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    <div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-accent)', fontFamily: 'var(--font-mono)' }}>
                        {rel.version}
                      </span>
                      <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '0.2rem', color: 'var(--text-primary)' }}>
                        {rel.title}
                      </h2>
                    </div>
                    <span className="badge" style={{
                      background: rel.type === 'Release' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(6, 182, 212, 0.12)',
                      color: rel.type === 'Release' ? '#34d399' : '#22d3ee',
                      border: rel.type === 'Release' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(6, 182, 212, 0.3)',
                    }}>
                      {rel.date}
                    </span>
                  </div>

                  <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {rel.commits.map((c, ci) => (
                      <li key={ci} style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
