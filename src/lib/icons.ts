// Central icon manifest — all 174 icons with metadata and CDN helpers

export const GITHUB_USERNAME = 'jojin1709';
export const REPO = 'iconyx';
export const CDN_BASE = `https://cdn.jsdelivr.net/gh/${GITHUB_USERNAME}/${REPO}@main/public/icons`;

export function getCdnUrl(category: string, name: string) {
  return `${CDN_BASE}/${category}/${name}.svg`;
}

// Semantic query dictionary mapping synonyms to common icons
export const SYNONYMS: Record<string, string[]> = {
  'trash': ['delete', 'remove', 'bin', 'rubbish', 'discard', 'clear', 'garbage'],
  'settings': ['gear', 'config', 'preferences', 'cog', 'setup', 'options'],
  'close': ['cancel', 'dismiss', 'exit', 'quit', 'remove', 'x'],
  'check': ['correct', 'success', 'done', 'complete', 'yes', 'agree', 'tick'],
  'search': ['find', 'magnify', 'look', 'query', 'filter'],
  'edit': ['pen', 'pencil', 'write', 'modify', 'change', 'draw'],
  'plus': ['add', 'new', 'create', 'insert', 'more'],
  'minus': ['remove', 'subtract', 'delete', 'less'],
  'user': ['profile', 'avatar', 'person', 'account', 'member'],
  'mail': ['email', 'letter', 'message', 'envelope', 'inbox'],
  'message-circle': ['chat', 'talk', 'comment', 'discussion', 'bubble', 'sms'],
  'bell': ['notify', 'notification', 'alarm', 'alert'],
  'lock': ['secure', 'private', 'key', 'password', 'auth'],
  'unlock': ['insecure', 'public', 'open', 'key', 'password', 'auth'],
  'home': ['house', 'dashboard', 'index', 'main'],
  'download': ['save', 'fetch', 'receive'],
  'upload': ['send', 'publish', 'export'],
  'link': ['chain', 'url', 'anchor', 'connect'],
  'external-link': ['out', 'share', 'redirect'],
  'refresh': ['sync', 'reload', 'restart', 'update', 'loop'],
  'sun': ['sunny', 'day', 'warm', 'bright', 'clear', 'weather'],
  'cloud': ['cloudy', 'overcast', 'sky', 'weather'],
  'cloud-rain': ['rainy', 'shower', 'wet', 'drizzle', 'weather'],
  'cloud-lightning': ['stormy', 'thunder', 'flash', 'weather'],
  'cloud-snow': ['snowy', 'cold', 'winter', 'freeze', 'weather'],
  'wind': ['breezy', 'windy', 'gale', 'weather'],
};

// Check if search term matches names, tags, or synonym maps
export function matchesSearch(icon: { name: string; category: string; tags: string[] }, query: string): boolean {
  const q = query.toLowerCase().trim();
  if (!q) return true;

  // 1. Direct name match
  if (icon.name.toLowerCase().includes(q)) return true;

  // 2. Direct category match
  if (icon.category.toLowerCase().includes(q)) return true;

  // 3. Direct tag match
  if (icon.tags.some(tag => tag.toLowerCase().includes(q))) return true;

  // 4. Synonym match
  for (const [key, list] of Object.entries(SYNONYMS)) {
    if (key.includes(icon.name) || icon.name.includes(key)) {
      if (list.some(syn => syn.toLowerCase().includes(q) || q.includes(syn))) {
        return true;
      }
    }
  }

  return false;
}

export const CATEGORIES = [
  { id: 'all',           label: 'All' },
  { id: 'ui',            label: 'UI' },
  { id: 'arrows',        label: 'Arrows' },
  { id: 'navigation',    label: 'Navigation' },
  { id: 'communication', label: 'Communication' },
  { id: 'files',         label: 'Files' },
  { id: 'media',         label: 'Media' },
  { id: 'social',        label: 'Social' },
  { id: 'devices',       label: 'Devices' },
  { id: 'commerce',      label: 'Commerce' },
  { id: 'weather',       label: 'Weather' },
  { id: 'data',          label: 'Data' },
  { id: 'design',        label: 'Design' },
  { id: 'dotted',        label: 'Dotted' },
  { id: 'tdfluency',     label: '3D Fluency' },
  { id: 'liquidglass',   label: 'Liquid Glass' },
] as const;

export type CategoryId = typeof CATEGORIES[number]['id'];

export interface IconMeta {
  name: string;
  category: string;
  tags: string[];
  svgContent: string;
}

export const icons: IconMeta[] = [
  // ── ARROWS ──────────────────────────────────────────────────────────
  { name:'chevron-up',      category:'arrows', tags:['up','collapse','hide'],             svgContent:`<polyline points="18 15 12 9 6 15"/>` },
  { name:'chevron-down',    category:'arrows', tags:['down','expand','show'],             svgContent:`<polyline points="6 9 12 15 18 9"/>` },
  { name:'chevron-left',    category:'arrows', tags:['left','back','previous'],           svgContent:`<polyline points="15 18 9 12 15 6"/>` },
  { name:'chevron-right',   category:'arrows', tags:['right','forward','next'],           svgContent:`<polyline points="9 18 15 12 9 6"/>` },
  { name:'arrow-up',        category:'arrows', tags:['up','increase','north'],            svgContent:`<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>` },
  { name:'arrow-down',      category:'arrows', tags:['down','decrease','south'],          svgContent:`<line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>` },
  { name:'arrow-left',      category:'arrows', tags:['left','back','west'],               svgContent:`<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>` },
  { name:'arrow-right',     category:'arrows', tags:['right','forward','east'],           svgContent:`<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>` },
  { name:'arrow-up-right',  category:'arrows', tags:['diagonal','external','northeast'],  svgContent:`<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>` },
  { name:'arrow-down-left', category:'arrows', tags:['diagonal','southwest'],             svgContent:`<line x1="17" y1="7" x2="7" y2="17"/><polyline points="17 17 7 17 7 7"/>` },
  { name:'refresh',         category:'arrows', tags:['reload','sync','rotate','update'],  svgContent:`<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>` },
  { name:'undo',            category:'arrows', tags:['back','revert','history'],          svgContent:`<polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/>` },
  { name:'redo',            category:'arrows', tags:['forward','history'],                svgContent:`<polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 0 0 4-4h12"/>` },
  { name:'expand',          category:'arrows', tags:['fullscreen','enlarge','zoom'],      svgContent:`<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>` },
  { name:'move',            category:'arrows', tags:['drag','reposition','pan'],          svgContent:`<polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/>` },

  // ── UI ──────────────────────────────────────────────────────────────
  { name:'close',           category:'ui', tags:['x','cancel','dismiss','remove'],        svgContent:`<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>` },
  { name:'menu',            category:'ui', tags:['hamburger','sidebar','navigation'],     svgContent:`<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>` },
  { name:'search',          category:'ui', tags:['find','magnify','look','query'],        svgContent:`<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>` },
  { name:'settings',        category:'ui', tags:['gear','config','preferences','cog'],    svgContent:`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>` },
  { name:'filter',          category:'ui', tags:['funnel','sort','narrow'],               svgContent:`<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>` },
  { name:'grid',            category:'ui', tags:['layout','squares','mosaic'],            svgContent:`<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>` },
  { name:'list',            category:'ui', tags:['items','rows','menu'],                  svgContent:`<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>` },
  { name:'check',           category:'ui', tags:['tick','done','complete','success'],     svgContent:`<polyline points="20 6 9 17 4 12"/>` },
  { name:'check-circle',    category:'ui', tags:['success','done','verified'],            svgContent:`<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>` },
  { name:'x-circle',        category:'ui', tags:['error','close','cancel','delete'],      svgContent:`<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>` },
  { name:'info',            category:'ui', tags:['information','help','about'],           svgContent:`<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>` },
  { name:'alert-triangle',  category:'ui', tags:['warning','caution','danger'],          svgContent:`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>` },
  { name:'star',            category:'ui', tags:['favourite','rating','bookmark'],        svgContent:`<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>` },
  { name:'heart',           category:'ui', tags:['love','like','favourite'],              svgContent:`<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>` },
  { name:'bookmark',        category:'ui', tags:['save','tag','mark'],                   svgContent:`<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>` },
  { name:'share',           category:'ui', tags:['send','distribute','social'],           svgContent:`<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>` },
  { name:'download',        category:'ui', tags:['save','get','pull'],                   svgContent:`<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>` },
  { name:'upload',          category:'ui', tags:['push','send','cloud'],                 svgContent:`<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>` },
  { name:'plus',            category:'ui', tags:['add','create','new','expand'],          svgContent:`<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>` },
  { name:'minus',           category:'ui', tags:['remove','subtract','decrease'],         svgContent:`<line x1="5" y1="12" x2="19" y2="12"/>` },
  { name:'eye',             category:'ui', tags:['view','visible','show','look'],         svgContent:`<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>` },
  { name:'eye-off',         category:'ui', tags:['hidden','invisible','hide'],            svgContent:`<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>` },
  { name:'lock',            category:'ui', tags:['secure','closed','private'],            svgContent:`<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>` },
  { name:'unlock',          category:'ui', tags:['open','public','free'],                 svgContent:`<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>` },
  { name:'copy',            category:'ui', tags:['duplicate','clipboard','paste'],        svgContent:`<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>` },
  { name:'sort',            category:'ui', tags:['order','arrange','hierarchy'],          svgContent:`<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="16" y2="12"/><line x1="3" y1="18" x2="11" y2="18"/>` },
  { name:'sliders',         category:'ui', tags:['controls','adjust','range'],            svgContent:`<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>` },
  { name:'user',            category:'ui', tags:['person','profile','account'],           svgContent:`<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>` },
  { name:'users',           category:'ui', tags:['people','team','group','community'],    svgContent:`<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>` },
  { name:'shield',          category:'ui', tags:['security','protect','safe'],            svgContent:`<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>` },
  { name:'shield-check',    category:'ui', tags:['verified','secure','trusted'],          svgContent:`<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>` },
  { name:'toggle-left',     category:'ui', tags:['switch','off','disable'],               svgContent:`<rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="8" cy="12" r="3"/>` },
  { name:'toggle-right',    category:'ui', tags:['switch','on','enable'],                 svgContent:`<rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="16" cy="12" r="3"/>` },
  { name:'zap',             category:'ui', tags:['lightning','flash','electric','fast'],  svgContent:`<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>` },
  { name:'award',           category:'ui', tags:['badge','winner','trophy','medal'],      svgContent:`<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>` },

  // ── SOCIAL ──────────────────────────────────────────────────────────
  { name:'github',          category:'social', tags:['code','repository','git'],          svgContent:`<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>` },
  { name:'twitter-x',       category:'social', tags:['twitter','x','tweet'],              svgContent:`<path d="M4 4l16 16"/><path d="M20 4L4 20"/>` },
  { name:'linkedin',        category:'social', tags:['professional','business','job'],    svgContent:`<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>` },
  { name:'instagram',       category:'social', tags:['photo','camera','story'],           svgContent:`<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>` },
  { name:'youtube',         category:'social', tags:['video','streaming','watch'],        svgContent:`<path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>` },
  { name:'facebook',        category:'social', tags:['social','meta'],                   svgContent:`<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>` },
  { name:'discord',         category:'social', tags:['gaming','community','chat'],        svgContent:`<circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><path d="M7.5 7.5C9 7 10.5 6.5 12 6.5s3 .5 4.5 1M7.5 16.5C9 17 10.5 17.5 12 17.5s3-.5 4.5-1"/>` },
  { name:'telegram',        category:'social', tags:['message','chat','messenger'],       svgContent:`<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>` },
  { name:'globe',           category:'social', tags:['world','internet','web','website'], svgContent:`<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>` },
  { name:'rss',             category:'social', tags:['feed','subscribe','blog'],          svgContent:`<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>` },

  // ── MEDIA ───────────────────────────────────────────────────────────
  { name:'play',            category:'media', tags:['start','video','audio','run'],       svgContent:`<polygon points="5 3 19 12 5 21 5 3"/>` },
  { name:'pause',           category:'media', tags:['stop','hold','wait'],                svgContent:`<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>` },
  { name:'stop',            category:'media', tags:['end','halt','square'],               svgContent:`<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>` },
  { name:'skip-forward',    category:'media', tags:['next','jump','fast-forward'],        svgContent:`<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>` },
  { name:'skip-back',       category:'media', tags:['previous','rewind','back'],          svgContent:`<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/>` },
  { name:'volume',          category:'media', tags:['sound','audio','speaker','loud'],    svgContent:`<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>` },
  { name:'volume-mute',     category:'media', tags:['mute','silent','quiet','off'],       svgContent:`<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>` },
  { name:'camera',          category:'media', tags:['photo','picture','shoot'],           svgContent:`<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>` },
  { name:'image',           category:'media', tags:['picture','photo','gallery'],         svgContent:`<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>` },
  { name:'mic',             category:'media', tags:['microphone','record','voice'],       svgContent:`<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>` },

  // ── FILES ───────────────────────────────────────────────────────────
  { name:'file',            category:'files', tags:['document','page','blank'],           svgContent:`<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>` },
  { name:'folder',          category:'files', tags:['directory','collection','storage'],  svgContent:`<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>` },
  { name:'folder-open',     category:'files', tags:['browse','open','active'],            svgContent:`<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="2" y1="10" x2="22" y2="10"/>` },
  { name:'file-text',       category:'files', tags:['document','text','note','article'],  svgContent:`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>` },
  { name:'file-code',       category:'files', tags:['source','programming','script'],     svgContent:`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="10 13 8 15 10 17"/><polyline points="14 13 16 15 14 17"/>` },
  { name:'file-image',      category:'files', tags:['photo','picture','graphic'],         svgContent:`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="10" cy="13" r="2"/><polyline points="20 17 15 12 6 21"/>` },
  { name:'trash',           category:'files', tags:['delete','remove','bin','discard'],   svgContent:`<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>` },
  { name:'clipboard',       category:'files', tags:['paste','copy','note','list'],        svgContent:`<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>` },
  { name:'archive',         category:'files', tags:['box','store','compress'],            svgContent:`<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>` },
  { name:'package',         category:'files', tags:['box','bundle','npm','module'],       svgContent:`<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>` },

  // ── COMMUNICATION ────────────────────────────────────────────────────
  { name:'mail',            category:'communication', tags:['email','message','envelope'],      svgContent:`<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>` },
  { name:'mail-open',       category:'communication', tags:['read','email','open'],             svgContent:`<path d="M2.5 8.5L12 14l9.5-5.5"/><path d="M2 17V8.5A2.5 2.5 0 0 1 4.5 6h15A2.5 2.5 0 0 1 22 8.5V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/>` },
  { name:'message-square',  category:'communication', tags:['chat','reply','comment','bubble'], svgContent:`<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>` },
  { name:'message-circle',  category:'communication', tags:['chat','talk','bubble'],            svgContent:`<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>` },
  { name:'phone',           category:'communication', tags:['call','contact','telephone'],      svgContent:`<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>` },
  { name:'phone-call',      category:'communication', tags:['calling','incoming','active'],     svgContent:`<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>` },
  { name:'bell',            category:'communication', tags:['notification','alert','ring'],     svgContent:`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>` },
  { name:'bell-off',        category:'communication', tags:['mute','silent','disable'],         svgContent:`<path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="M18.63 13A17.888 17.888 0 0 1 18 8"/><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"/><path d="M18 8a6 6 0 0 0-9.33-5"/><line x1="1" y1="1" x2="23" y2="23"/>` },
  { name:'send',            category:'communication', tags:['submit','message','email'],        svgContent:`<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>` },
  { name:'inbox',           category:'communication', tags:['received','tray','email'],         svgContent:`<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>` },
  { name:'at-sign',         category:'communication', tags:['email','mention','tag','contact'], svgContent:`<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>` },

  // ── NAVIGATION ──────────────────────────────────────────────────────
  { name:'home',            category:'navigation', tags:['house','main','index','start'],       svgContent:`<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>` },
  { name:'map',             category:'navigation', tags:['location','travel','directions'],     svgContent:`<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>` },
  { name:'map-pin',         category:'navigation', tags:['location','place','address','gps'],  svgContent:`<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>` },
  { name:'compass',         category:'navigation', tags:['direction','orientation','explore'],  svgContent:`<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>` },
  { name:'external-link',   category:'navigation', tags:['open','new tab','redirect','link'],  svgContent:`<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>` },
  { name:'link',            category:'navigation', tags:['url','chain','connect'],              svgContent:`<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>` },
  { name:'code',            category:'navigation', tags:['programming','brackets','dev'],       svgContent:`<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>` },
  { name:'terminal',        category:'navigation', tags:['console','cli','shell','bash'],       svgContent:`<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>` },
  { name:'cpu',             category:'navigation', tags:['processor','chip','hardware'],        svgContent:`<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>` },
  { name:'wifi',            category:'navigation', tags:['network','wireless','internet'],      svgContent:`<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>` },
  { name:'sun',             category:'navigation', tags:['light','day','bright','theme'],       svgContent:`<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>` },
  { name:'moon',            category:'navigation', tags:['dark','night','theme'],               svgContent:`<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>` },
  { name:'maximize',        category:'navigation', tags:['fullscreen','expand','enlarge'],      svgContent:`<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>` },
  { name:'minimize',        category:'navigation', tags:['collapse','shrink','exit fullscreen'], svgContent:`<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>` },
  { name:'anchor',          category:'navigation', tags:['link','fixed','maritime'],            svgContent:`<circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>` },
  { name:'flag',            category:'navigation', tags:['mark','report','country'],            svgContent:`<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>` },
  { name:'clock',           category:'navigation', tags:['time','watch','schedule','hour'],     svgContent:`<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>` },
  { name:'calendar',        category:'navigation', tags:['date','schedule','event','month'],    svgContent:`<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>` },

  // ── DATA ────────────────────────────────────────────────────────────
  { name:'bar-chart',       category:'data', tags:['chart','stats','analytics','graph'],   svgContent:`<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>` },
  { name:'pie-chart',       category:'data', tags:['chart','donut','analytics','share'],   svgContent:`<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>` },
  { name:'activity',        category:'data', tags:['monitor','pulse','health','metrics'],  svgContent:`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>` },
  { name:'trending-up',     category:'data', tags:['growth','increase','rise','profit'],   svgContent:`<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>` },
  { name:'trending-down',   category:'data', tags:['decline','decrease','fall','loss'],    svgContent:`<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>` },
  { name:'database',        category:'data', tags:['db','storage','sql','records'],        svgContent:`<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>` },
  { name:'server',          category:'data', tags:['host','backend','infrastructure'],     svgContent:`<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>` },
  { name:'cloud',           category:'data', tags:['storage','saas','sync','remote'],     svgContent:`<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>` },
  { name:'cloud-upload',    category:'data', tags:['upload','push','backup','sync'],       svgContent:`<polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>` },
  { name:'cloud-download',  category:'data', tags:['download','pull','restore','sync'],   svgContent:`<polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/>` },

  // ── DESIGN ──────────────────────────────────────────────────────────
  { name:'palette',         category:'design', tags:['color','art','creative','paint'],    svgContent:`<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>` },
  { name:'layers',          category:'design', tags:['stack','group','depth','z-index'],   svgContent:`<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>` },
  { name:'layout',          category:'design', tags:['grid','structure','page','template'], svgContent:`<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>` },
  { name:'tool',            category:'design', tags:['wrench','build','repair','fix'],      svgContent:`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>` },
  { name:'crop',            category:'design', tags:['trim','cut','resize','frame'],        svgContent:`<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"/><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"/>` },
  { name:'scissors',        category:'design', tags:['cut','trim','clip','snip'],           svgContent:`<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>` },
  { name:'type',            category:'design', tags:['text','font','heading','typography'], svgContent:`<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>` },
  { name:'bold',            category:'design', tags:['text','format','strong','weight'],    svgContent:`<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>` },
  { name:'italic',          category:'design', tags:['text','format','em','slant'],         svgContent:`<line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/>` },
  { name:'gift',            category:'design', tags:['present','reward','bonus','prize'],   svgContent:`<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>` },

  // ── COMMERCE ────────────────────────────────────────────────────────
  { name:'shopping-bag',    category:'commerce', tags:['bag','shop','purchase','checkout'], svgContent:`<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>` },
  { name:'shopping-cart',   category:'commerce', tags:['cart','trolley','buy','ecommerce'],svgContent:`<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>` },
  { name:'credit-card',     category:'commerce', tags:['payment','visa','mastercard','card'],svgContent:`<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>` },
  { name:'tag',             category:'commerce', tags:['price','label','sale','discount'], svgContent:`<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>` },
  { name:'gift-card',       category:'commerce', tags:['gift','card','voucher','coupon'],  svgContent:`<rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><path d="M6 14h4M16 14h2"/>` },
  { name:'store',           category:'commerce', tags:['shop','retail','building'],        svgContent:`<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><rect x="9" y="22" width="6" height="8"/>` },
  { name:'bank',            category:'commerce', tags:['finance','vault','money','gov'],   svgContent:`<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 2 7 22 7 12 2"/>` },
  { name:'wallet',          category:'commerce', tags:['cash','cards','pocketbook'],       svgContent:`<path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h14v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><path d="M18 12a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4v-6z"/>` },
  { name:'dollar-sign',     category:'commerce', tags:['usd','currency','price','cash'],   svgContent:`<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>` },
  { name:'percent',         category:'commerce', tags:['discount','tax','ratio','interest'],svgContent:`<circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/><line x1="19" y1="5" x2="5" y2="19"/>` },

  // ── DEVICES ─────────────────────────────────────────────────────────
  { name:'smartphone',      category:'devices', tags:['phone','mobile','iphone','android'],svgContent:`<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>` },
  { name:'laptop',          category:'devices', tags:['computer','macbook','notebook'],    svgContent:`<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="1" y1="20" x2="23" y2="20"/><line x1="5" y1="20" x2="19" y2="20"/>` },
  { name:'monitor',         category:'devices', tags:['desktop','screen','display','pc'],  svgContent:`<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>` },
  { name:'tablet',          category:'devices', tags:['ipad','screen','reader'],           svgContent:`<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>` },
  { name:'watch',           category:'devices', tags:['clock','time','smartwatch'],        svgContent:`<circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 14 14"/><path d="M12 5V1M12 23v-4M17 12h1M6 12h1"/>` },
  { name:'headphones',      category:'devices', tags:['audio','music','earphones'],        svgContent:`<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>` },
  { name:'hard-drive',      category:'devices', tags:['hdd','ssd','disk','memory','save'], svgContent:`<rect x="2" y="2" width="20" height="20" rx="2" ry="2"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="16" x2="22" y2="16"/><circle cx="6" cy="7" r="1"/><circle cx="6" cy="19" r="1"/>` },
  { name:'keyboard',        category:'devices', tags:['type','input','keypad'],            svgContent:`<rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="8" x2="6.01" y2="8"/><line x1="10" y1="8" x2="10.01" y2="8"/><line x1="14" y1="8" x2="14.01" y2="8"/><line x1="18" y1="8" x2="18.01" y2="8"/><line x1="6" y1="12" x2="6.01" y2="12"/><line x1="18" y1="12" x2="18.01" y2="12"/><rect x="9" y="12" width="6" height="1" rx="0.5"/>` },
  { name:'mouse',           category:'devices', tags:['click','pointer','accessory'],      svgContent:`<rect x="5" y="2" width="14" height="20" rx="7"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="5" y1="9" x2="19" y2="9"/>` },
  { name:'speaker',         category:'devices', tags:['audio','sound','boombox'],          svgContent:`<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><circle cx="12" cy="14" r="4"/><line x1="12" y1="6" x2="12.01" y2="6"/>` },

  // ── WEATHER ─────────────────────────────────────────────────────────
  { name:'sun',             category:'weather', tags:['light','day','bright','clear'],     svgContent:`<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>` },
  { name:'moon',            category:'weather', tags:['dark','night','crescent','theme'],  svgContent:`<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>` },
  { name:'cloud',           category:'weather', tags:['overcast','sky','weather'],         svgContent:`<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>` },
  { name:'cloud-rain',      category:'weather', tags:['shower','drizzle','wet','storm'],   svgContent:`<path d="M16 13a4 4 0 0 1-8 0a7 7 0 0 1 8-3.9"/><line x1="8" y1="17" x2="8" y2="21"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="16" y1="17" x2="16" y2="21"/>` },
  { name:'cloud-lightning', category:'weather', tags:['storm','thunder','flash','warning'],svgContent:`<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 8.58"/><polyline points="13 11 9 17 12 17 11 23 15 17 12 17 13 11"/>` },
  { name:'cloud-snow',      category:'weather', tags:['cold','freeze','winter','ice'],     svgContent:`<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="8" y1="20" x2="8.01" y2="20"/><line x1="12" y1="18" x2="12.01" y2="18"/><line x1="12" y1="22" x2="12.01" y2="22"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="16" y1="20" x2="16.01" y2="20"/>` },
  { name:'wind',            category:'weather', tags:['breeze','gale','air','blow'],       svgContent:`<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>` },
  { name:'thermometer',     category:'weather', tags:['temperature','hot','cold','heat'],  svgContent:`<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>` },
  { name:'umbrella',        category:'weather', tags:['shelter','rain','protection'],      svgContent:`<path d="M23 12a11.022 11.022 0 0 0-22 0zm-11 0v9a2 2 0 0 0 4 0"/>` },
  { name:'sunrise',         category:'weather', tags:['morning','dawn','east','sun'],       svgContent:`<path d="M18 22H6M12 2v8M12 2l-3 3M12 2l3 3M4.22 10.22l1.42 1.42M18.36 10.22l-1.42 1.42M1 22a11 11 0 0 1 22 0"/>` },
  { name:'sunset',          category:'weather', tags:['evening','dusk','west','sun'],       svgContent:`<path d="M18 22H6M12 10v8M12 18l-3-3M12 18l3-3M4.22 10.22l1.42 1.42M18.36 10.22l-1.42 1.42M1 22a11 11 0 0 1 22 0"/>` },

  // ── DOTTED ──────────────────────────────────────────────────────────
  { name:'dotted-star',      category:'dotted', tags:['star','rating','favorite','dotted'], svgContent:`<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke-dasharray="2 3"/>` },
  { name:'dotted-heart',     category:'dotted', tags:['heart','like','love','dotted'],     svgContent:`<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke-dasharray="2 3"/>` },
  { name:'dotted-check',     category:'dotted', tags:['check','success','confirm','dotted'],svgContent:`<polyline points="20 6 9 17 4 12" stroke-dasharray="2 3"/>` },
  { name:'dotted-lock',      category:'dotted', tags:['lock','secure','private','dotted'],  svgContent:`<rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke-dasharray="2 3"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke-dasharray="2 3"/>` },
  { name:'dotted-bell',      category:'dotted', tags:['bell','notify','alarm','dotted'],    svgContent:`<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke-dasharray="2 3"/><path d="M13.73 21a2 2 0 0 1-3.46 0" stroke-dasharray="2 3"/>` },
  { name:'dotted-cloud',     category:'dotted', tags:['cloud','storage','weather','dotted'], svgContent:`<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke-dasharray="2 3"/>` },

  // ── 3D FLUENCY ──────────────────────────────────────────────────────
  { name:'fluency-sphere',   category:'tdfluency', tags:['sphere','3d','circle','ball'],    svgContent:`<defs><radialGradient id="sphereGrad" cx="30%" cy="30%" r="70%"><stop offset="0%" stop-color="#c4b5fd"/><stop offset="50%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#4c1d95"/></radialGradient></defs><circle cx="12" cy="12" r="9" fill="url(#sphereGrad)" stroke="none"/>` },
  { name:'fluency-star',     category:'tdfluency', tags:['star','3d','gold','rating'],      svgContent:`<defs><linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="starShadow" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#starGrad)" filter="url(#starShadow)" stroke="none"/>` },
  { name:'fluency-shield',   category:'tdfluency', tags:['shield','3d','secure','blue'],    svgContent:`<defs><linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#2563eb"/></linearGradient></defs><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="url(#shieldGrad)" stroke="none"/>` },
  { name:'fluency-folder',   category:'tdfluency', tags:['folder','3d','directory','pink'],  svgContent:`<defs><linearGradient id="folderGrad1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f472b6"/><stop offset="100%" stop-color="#db2777"/></linearGradient><linearGradient id="folderGrad2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fbcfe8"/><stop offset="100%" stop-color="#f472b6"/></linearGradient></defs><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="url(#folderGrad1)" stroke="none"/><path d="M2 10h20v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" fill="url(#folderGrad2)" opacity="0.8" stroke="none"/>` },

  // ── LIQUID GLASS ────────────────────────────────────────────────────
  { name:'glass-bubble',     category:'liquidglass', tags:['glass','liquid','bubble','translucent'], svgContent:`<defs><linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="glassBlur"><feGaussianBlur stdDeviation="1.5"/></filter></defs><circle cx="10" cy="10" r="7" fill="rgba(99,102,241,0.25)" stroke="rgba(99,102,241,0.4)" stroke-width="1"/><circle cx="14" cy="14" r="7" fill="url(#glassGrad)" filter="url(#glassBlur)" stroke="rgba(255,255,255,0.5)" stroke-width="1"/>` },
  { name:'glass-heart',      category:'liquidglass', tags:['glass','liquid','heart','rose'],         svgContent:`<defs><linearGradient id="glassGrad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(244,63,94,0.4)"/><stop offset="100%" stop-color="rgba(244,63,94,0.08)"/></linearGradient><filter id="glassBlur2"><feGaussianBlur stdDeviation="1"/></filter></defs><path d="M12 21.23l-7.78-7.78-1.06-1.06a5.5 5.5 0 0 1 7.78-7.78l1.06 1.06 1.06-1.06a5.5 5.5 0 0 1 7.78 7.78l-1.06 1.06z" fill="url(#glassGrad2)" filter="url(#glassBlur2)" stroke="rgba(244,63,94,0.6)" stroke-width="1.5"/>` },
  { name:'glass-shield',     category:'liquidglass', tags:['glass','liquid','shield','secure'],      svgContent:`<defs><linearGradient id="glassGrad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.3)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient></defs><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="url(#glassGrad3)" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>` },
  { name:'glass-wallet',     category:'liquidglass', tags:['glass','liquid','wallet','finance'],     svgContent:`<defs><linearGradient id="glassGrad4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(16,185,129,0.35)"/><stop offset="100%" stop-color="rgba(16,185,129,0.05)"/></linearGradient></defs><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h14v4" stroke="var(--border)" fill="none"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4" stroke="var(--border)" fill="none"/><path d="M18 12a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4v-6z" fill="url(#glassGrad4)" stroke="rgba(16,185,129,0.6)" stroke-width="1.5"/>` },
];

export const totalIcons = icons.length;
