const fs = require('fs');
const path = require('path');

const newIconsList = [
  // Phase 1: UI Category Icons (15)
  { name: 'edit', category: 'ui', tags: ['pen', 'pencil', 'write', 'modify', 'change', 'draw'], svgContent: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"/>' },
  { name: 'loader', category: 'ui', tags: ['spinner', 'loading', 'progress', 'wait'], svgContent: '<line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>' },
  { name: 'log-in', category: 'ui', tags: ['signin', 'enter', 'auth', 'access'], svgContent: '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>' },
  { name: 'log-out', category: 'ui', tags: ['signout', 'exit', 'auth', 'leave'], svgContent: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>' },
  { name: 'more-horizontal', category: 'ui', tags: ['kebab', 'menu', 'options', 'ellipsis'], svgContent: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>' },
  { name: 'more-vertical', category: 'ui', tags: ['kebab', 'menu', 'options', 'ellipsis'], svgContent: '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>' },
  { name: 'key', category: 'ui', tags: ['password', 'unlock', 'access', 'secret'], svgContent: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778zm0 0L15.5 7.5m0 0l3 3m-3-3l-1.5-1.5"/>' },
  { name: 'help-circle', category: 'ui', tags: ['question', 'support', 'faq', 'assistance'], svgContent: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>' },
  { name: 'thumbs-up', category: 'ui', tags: ['like', 'approve', 'good', 'upvote'], svgContent: '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>' },
  { name: 'thumbs-down', category: 'ui', tags: ['dislike', 'disapprove', 'bad', 'downvote'], svgContent: '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm12-3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"/>' },
  { name: 'chevrons-up-down', category: 'ui', tags: ['sort', 'expand', 'select', 'dropdown'], svgContent: '<polyline points="7 15 12 20 17 15"/><polyline points="7 9 12 4 17 9"/>' },
  { name: 'save', category: 'ui', tags: ['disk', 'store', 'persist', 'download'], svgContent: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>' },
  { name: 'circle', category: 'ui', tags: ['shape', 'dot', 'round'], svgContent: '<circle cx="12" cy="12" r="10"/>' },
  { name: 'square', category: 'ui', tags: ['shape', 'box', 'rect'], svgContent: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>' },
  { name: 'hash', category: 'ui', tags: ['tag', 'number', 'pound', 'category'], svgContent: '<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>' },

  // Phase 2: Social brand icons (7)
  { name: 'whatsapp', category: 'social', tags: ['chat', 'message', 'support'], svgContent: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M12 8c-.5 0-1.5.5-1.5 1.5s1 2.5 2 3.5 2.5 2 3.5 2 1.5-1 1.5-1.5"/>' },
  { name: 'tiktok', category: 'social', tags: ['video', 'media', 'viral'], svgContent: '<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>' },
  { name: 'slack', category: 'social', tags: ['chat', 'collaboration', 'work'], svgContent: '<rect x="3" y="8" width="6" height="6" rx="3"/><rect x="15" y="8" width="6" height="6" rx="3"/><rect x="9" y="2" width="6" height="6" rx="3"/><rect x="9" y="14" width="6" height="6" rx="3"/>' },
  { name: 'figma', category: 'social', tags: ['design', 'vector', 'prototype'], svgContent: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 9h3.5a3.5 3.5 0 1 1-3.5 3.5V9z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 5 19.5z"/><circle cx="15.5" cy="5.5" r="3.5"/>' },
  { name: 'spotify', category: 'social', tags: ['music', 'audio', 'streaming'], svgContent: '<circle cx="12" cy="12" r="10"/><path d="M8 9.5a12.5 12.5 0 0 1 8 0"/><path d="M9 12a9.5 9.5 0 0 1 6 0"/><path d="M10 14.5a6.5 6.5 0 0 1 4 0"/>' },
  { name: 'reddit', category: 'social', tags: ['forum', 'community', 'news'], svgContent: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="5" r="1"/><line x1="12" y1="7" x2="12" y2="6"/>' },
  { name: 'pinterest', category: 'social', tags: ['pin', 'board', 'bookmark'], svgContent: '<circle cx="12" cy="12" r="10"/><path d="M12 8c-3 0-4 2-4 4 0 2.5 1.5 3.5 2 3.5s.5-.5.5-1-.5-1.5-1-2 1-3.5 2.5-3.5 2.5 1 2.5 2.5S13 16 12 16c-.5 0-1-.25-1-.75l-.5 2.25c-.25 1-1 2.25-1.25 2.5a8.5 8.5 0 0 0 2.75.5c4.5 0 8.5-4 8.5-8.5S16.5 3.5 12 3.5z"/>' },

  // Phase 3: Device icons (5)
  { name: 'printer', category: 'devices', tags: ['paper', 'office', 'print'], svgContent: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>' },
  { name: 'battery', category: 'devices', tags: ['charge', 'power', 'energy'], svgContent: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="11" x2="23" y2="13"/>' },
  { name: 'bluetooth', category: 'devices', tags: ['wireless', 'connection', 'share'], svgContent: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/>' },
  { name: 'usb', category: 'devices', tags: ['connector', 'cable', 'port'], svgContent: '<polyline points="12 22 12 5"/><polygon points="12 1 9 5 15 5 12 1"/><circle cx="6" cy="9" r="2"/><path d="M12 12H6v-1"/><circle cx="18" cy="15" r="2"/><path d="M12 16h6v-1"/>' },
  { name: 'tv', category: 'devices', tags: ['television', 'screen', 'display', 'media'], svgContent: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/>' },

  // Phase 4: Data/Commerce (4)
  { name: 'table', category: 'data', tags: ['grid', 'rows', 'columns', 'sheet'], svgContent: '<path d="M3 3h18v18H3z"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/>' },
  { name: 'chart-line', category: 'data', tags: ['graph', 'trends', 'line', 'metrics'], svgContent: '<path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>' },
  { name: 'qr-code', category: 'commerce', tags: ['barcode', 'scan', 'payment', 'link'], svgContent: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/><rect x="18" y="18" width="3" height="3"/><rect x="14" y="18" width="3" height="3"/><rect x="18" y="14" width="3" height="3"/>' },
  { name: 'receipt', category: 'commerce', tags: ['bill', 'invoice', 'purchase', 'tax'], svgContent: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="12" y2="16"/>' },

  // Phase 5: Files (4)
  { name: 'file-pdf', category: 'files', tags: ['document', 'pdf', 'acrobat'], svgContent: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15h1a1.5 1.5 0 0 0 0-3H9v6"/><path d="M12 12v6h1.5a3 3 0 0 0 0-6H12z"/><path d="M16.5 12h2.5M16.5 15h2M16.5 12v6"/>' },
  { name: 'file-zip', category: 'files', tags: ['archive', 'compressed', 'zip'], svgContent: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M12 12v6"/><rect x="10" y="8" width="4" height="4"/>' },
  { name: 'file-audio', category: 'files', tags: ['document', 'sound', 'music', 'mp3'], svgContent: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="9" cy="16" r="2"/><path d="M11 16V10l3 1v6"/>' },
  { name: 'file-video', category: 'files', tags: ['document', 'video', 'movie', 'mp4'], svgContent: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><rect x="7" y="11" width="6" height="5" rx="1"/><polygon points="13 13 17 11 17 16 13 14"/>' }
];

// Phase 6 style families parity helper
// We will generate dotted, fluency, and glass variants for the target 16 icons.
const parityBaseIcons = [
  { name: 'search', svg: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>' },
  { name: 'home', svg: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
  { name: 'settings', svg: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>' },
  { name: 'user', svg: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>' },
  { name: 'mail', svg: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>' },
  { name: 'check', svg: '<polyline points="20 6 9 17 4 12"/>' },
  { name: 'x', svg: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>' },
  { name: 'plus', svg: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>' },
  { name: 'download', svg: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>' },
  { name: 'upload', svg: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>' },
  { name: 'calendar', svg: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>' },
  { name: 'clock', svg: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' },
  { name: 'trash', svg: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>' },
  { name: 'folder', svg: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>' },
  { name: 'bell', svg: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>' },
  { name: 'eye', svg: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>' }
];

// Let's add variants
parityBaseIcons.forEach(base => {
  // Dotted
  // Make sure we add stroke-dasharray="2 3" or check if it already exists
  const dottedName = `dotted-${base.name}`;
  // We need to inject stroke-dasharray to path/polyline/circle elements
  const dottedSvg = base.svg
    .replace(/<path/g, '<path stroke-dasharray="2 3"')
    .replace(/<polyline/g, '<polyline stroke-dasharray="2 3"')
    .replace(/<circle/g, '<circle stroke-dasharray="2 3"')
    .replace(/<line/g, '<line stroke-dasharray="2 3"')
    .replace(/<rect/g, '<rect stroke-dasharray="2 3"');
  newIconsList.push({
    name: dottedName,
    category: 'dotted',
    tags: [base.name, 'dotted', 'style'],
    svgContent: dottedSvg
  });

  // Fluency (3D fluency)
  const fluencyName = `fluency-${base.name}`;
  const fluencyGradId = `fluencyGrad_${base.name}`;
  const fluencyShadowId = `fluencyShadow_${base.name}`;
  const fluencySvg = `<defs><linearGradient id="${fluencyGradId}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="${fluencyShadowId}" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs>${base.svg.replace(/stroke="[^"]*"/g, '').replace(/fill="none"/g, '').replace(/<path|<polyline|<circle|<line|<rect/g, (m) => `${m} fill="url(#${fluencyGradId})" filter="url(#${fluencyShadowId})" stroke="none"`) }`;
  newIconsList.push({
    name: fluencyName,
    category: 'tdfluency',
    tags: [base.name, '3d', 'fluency', 'gold'],
    svgContent: fluencySvg
  });

  // Liquid glass
  const glassName = `glass-${base.name}`;
  const glassGradId = `glassGrad_${base.name}`;
  const glassBlurId = `glassBlur_${base.name}`;
  const glassSvg = `<defs><linearGradient id="${glassGradId}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="${glassBlurId}"><feGaussianBlur stdDeviation="1"/></filter></defs>${base.svg.replace(/<path|<polyline|<circle|<line|<rect/g, (m) => `${m} fill="url(#${glassGradId})" filter="url(#${glassBlurId})" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"`) }`;
  newIconsList.push({
    name: glassName,
    category: 'liquidglass',
    tags: [base.name, 'glass', 'liquid', 'translucent'],
    svgContent: glassSvg
  });
});

console.log(`Adding ${newIconsList.length} new icons...`);

const manifestPath = path.join(__dirname, '..', 'src', 'lib', 'icons.ts');
let manifestContent = fs.readFileSync(manifestPath, 'utf8');

// Parse the existing array
const arrayStart = manifestContent.indexOf('export const icons: IconMeta[] = [');
const arrayEnd = manifestContent.lastIndexOf('];');

if (arrayStart === -1 || arrayEnd === -1) {
  console.error('Could not locate icons array inside icons.ts');
  process.exit(1);
}

// Find existing names to prevent duplicates
const existingNames = [];
const nameRegex = /name:\s*['"]([^'"]+)['"]/g;
let nameMatch;
while ((nameMatch = nameRegex.exec(manifestContent)) !== null) {
  existingNames.push(nameMatch[1]);
}

const iconsToAdd = newIconsList.filter(item => !existingNames.includes(item.name));
console.log(`Filter out existing icons: Adding ${iconsToAdd.length} non-duplicate items.`);

if (iconsToAdd.length > 0) {
  // Format entries to insert
  let entriesString = '\n  // ── ADDED DYNAMIC ICONS ──────────────────────────────────────────\n';
  iconsToAdd.forEach(icon => {
    const tagsStr = icon.tags.map(t => `'${t}'`).join(',');
    entriesString += `  { name:'${icon.name}', category:'${icon.category}', tags:[${tagsStr}], svgContent:\`${icon.svgContent}\` },\n`;
  });

  const beforeArray = manifestContent.substring(0, arrayEnd);
  const afterArray = manifestContent.substring(arrayEnd);
  manifestContent = beforeArray + entriesString + afterArray;
  fs.writeFileSync(manifestPath, manifestContent, 'utf8');
  console.log('✅ Updated src/lib/icons.ts manifest array.');
}

// Write stand-alone SVG files in public/icons/<category>/<name>.svg
iconsToAdd.forEach(icon => {
  const catDir = path.join(__dirname, '..', 'public', 'icons', icon.category);
  if (!fs.existsSync(catDir)) {
    fs.mkdirSync(catDir, { recursive: true });
  }
  const svgFilePath = path.join(catDir, `${icon.name}.svg`);
  
  // Format clean standard SVG
  let finalSvgContent = '';
  if (icon.category === 'tdfluency' || icon.category === 'liquidglass') {
    finalSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">${icon.svgContent}</svg>`;
  } else {
    finalSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon.svgContent}</svg>`;
  }
  fs.writeFileSync(svgFilePath, finalSvgContent, 'utf8');
});

console.log('🎉 Wrote all standalone SVG files into public/icons/ directories!');
