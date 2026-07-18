const React = require('react');

function ChevronUpIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="18 15 12 9 6 15"/>` }
  });
}
exports.ChevronUpIcon = ChevronUpIcon;

function ChevronDownIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="6 9 12 15 18 9"/>` }
  });
}
exports.ChevronDownIcon = ChevronDownIcon;

function ChevronLeftIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="15 18 9 12 15 6"/>` }
  });
}
exports.ChevronLeftIcon = ChevronLeftIcon;

function ChevronRightIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="9 18 15 12 9 6"/>` }
  });
}
exports.ChevronRightIcon = ChevronRightIcon;

function ArrowUpIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>` }
  });
}
exports.ArrowUpIcon = ArrowUpIcon;

function ArrowDownIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>` }
  });
}
exports.ArrowDownIcon = ArrowDownIcon;

function ArrowLeftIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>` }
  });
}
exports.ArrowLeftIcon = ArrowLeftIcon;

function ArrowRightIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>` }
  });
}
exports.ArrowRightIcon = ArrowRightIcon;

function ArrowUpRightIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>` }
  });
}
exports.ArrowUpRightIcon = ArrowUpRightIcon;

function ArrowDownLeftIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="17" y1="7" x2="7" y2="17"/><polyline points="17 17 7 17 7 7"/>` }
  });
}
exports.ArrowDownLeftIcon = ArrowDownLeftIcon;

function RefreshIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>` }
  });
}
exports.RefreshIcon = RefreshIcon;

function UndoIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/>` }
  });
}
exports.UndoIcon = UndoIcon;

function RedoIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 0 0 4-4h12"/>` }
  });
}
exports.RedoIcon = RedoIcon;

function ExpandIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>` }
  });
}
exports.ExpandIcon = ExpandIcon;

function MoveIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/>` }
  });
}
exports.MoveIcon = MoveIcon;

function CloseIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>` }
  });
}
exports.CloseIcon = CloseIcon;

function MenuIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>` }
  });
}
exports.MenuIcon = MenuIcon;

function SearchIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>` }
  });
}
exports.SearchIcon = SearchIcon;

function SettingsIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>` }
  });
}
exports.SettingsIcon = SettingsIcon;

function FilterIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>` }
  });
}
exports.FilterIcon = FilterIcon;

function GridIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>` }
  });
}
exports.GridIcon = GridIcon;

function ListIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>` }
  });
}
exports.ListIcon = ListIcon;

function CheckIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="20 6 9 17 4 12"/>` }
  });
}
exports.CheckIcon = CheckIcon;

function CheckCircleIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>` }
  });
}
exports.CheckCircleIcon = CheckCircleIcon;

function XCircleIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>` }
  });
}
exports.XCircleIcon = XCircleIcon;

function InfoIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>` }
  });
}
exports.InfoIcon = InfoIcon;

function AlertTriangleIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>` }
  });
}
exports.AlertTriangleIcon = AlertTriangleIcon;

function StarIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>` }
  });
}
exports.StarIcon = StarIcon;

function HeartIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>` }
  });
}
exports.HeartIcon = HeartIcon;

function BookmarkIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>` }
  });
}
exports.BookmarkIcon = BookmarkIcon;

function ShareIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>` }
  });
}
exports.ShareIcon = ShareIcon;

function DownloadIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>` }
  });
}
exports.DownloadIcon = DownloadIcon;

function UploadIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>` }
  });
}
exports.UploadIcon = UploadIcon;

function PlusIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>` }
  });
}
exports.PlusIcon = PlusIcon;

function MinusIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="5" y1="12" x2="19" y2="12"/>` }
  });
}
exports.MinusIcon = MinusIcon;

function EyeIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>` }
  });
}
exports.EyeIcon = EyeIcon;

function EyeOffIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>` }
  });
}
exports.EyeOffIcon = EyeOffIcon;

function LockIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>` }
  });
}
exports.LockIcon = LockIcon;

function UnlockIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>` }
  });
}
exports.UnlockIcon = UnlockIcon;

function CopyIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>` }
  });
}
exports.CopyIcon = CopyIcon;

function SortIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="16" y2="12"/><line x1="3" y1="18" x2="11" y2="18"/>` }
  });
}
exports.SortIcon = SortIcon;

function SlidersIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>` }
  });
}
exports.SlidersIcon = SlidersIcon;

function UserIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>` }
  });
}
exports.UserIcon = UserIcon;

function UsersIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>` }
  });
}
exports.UsersIcon = UsersIcon;

function ShieldIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>` }
  });
}
exports.ShieldIcon = ShieldIcon;

function ShieldCheckIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>` }
  });
}
exports.ShieldCheckIcon = ShieldCheckIcon;

function ToggleLeftIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="8" cy="12" r="3"/>` }
  });
}
exports.ToggleLeftIcon = ToggleLeftIcon;

function ToggleRightIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="16" cy="12" r="3"/>` }
  });
}
exports.ToggleRightIcon = ToggleRightIcon;

function ZapIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>` }
  });
}
exports.ZapIcon = ZapIcon;

function AwardIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>` }
  });
}
exports.AwardIcon = AwardIcon;

function GithubIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>` }
  });
}
exports.GithubIcon = GithubIcon;

function TwitterXIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M4 4l16 16"/><path d="M20 4L4 20"/>` }
  });
}
exports.TwitterXIcon = TwitterXIcon;

function LinkedinIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>` }
  });
}
exports.LinkedinIcon = LinkedinIcon;

function InstagramIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>` }
  });
}
exports.InstagramIcon = InstagramIcon;

function YoutubeIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>` }
  });
}
exports.YoutubeIcon = YoutubeIcon;

function FacebookIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>` }
  });
}
exports.FacebookIcon = FacebookIcon;

function DiscordIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><path d="M7.5 7.5C9 7 10.5 6.5 12 6.5s3 .5 4.5 1M7.5 16.5C9 17 10.5 17.5 12 17.5s3-.5 4.5-1"/>` }
  });
}
exports.DiscordIcon = DiscordIcon;

function TelegramIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>` }
  });
}
exports.TelegramIcon = TelegramIcon;

function GlobeIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>` }
  });
}
exports.GlobeIcon = GlobeIcon;

function RssIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>` }
  });
}
exports.RssIcon = RssIcon;

function PlayIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polygon points="5 3 19 12 5 21 5 3"/>` }
  });
}
exports.PlayIcon = PlayIcon;

function PauseIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>` }
  });
}
exports.PauseIcon = PauseIcon;

function StopIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>` }
  });
}
exports.StopIcon = StopIcon;

function SkipForwardIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>` }
  });
}
exports.SkipForwardIcon = SkipForwardIcon;

function SkipBackIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/>` }
  });
}
exports.SkipBackIcon = SkipBackIcon;

function VolumeIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>` }
  });
}
exports.VolumeIcon = VolumeIcon;

function VolumeMuteIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>` }
  });
}
exports.VolumeMuteIcon = VolumeMuteIcon;

function CameraIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>` }
  });
}
exports.CameraIcon = CameraIcon;

function ImageIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>` }
  });
}
exports.ImageIcon = ImageIcon;

function MicIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>` }
  });
}
exports.MicIcon = MicIcon;

function FileIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>` }
  });
}
exports.FileIcon = FileIcon;

function FolderIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>` }
  });
}
exports.FolderIcon = FolderIcon;

function FolderOpenIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="2" y1="10" x2="22" y2="10"/>` }
  });
}
exports.FolderOpenIcon = FolderOpenIcon;

function FileTextIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>` }
  });
}
exports.FileTextIcon = FileTextIcon;

function FileCodeIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="10 13 8 15 10 17"/><polyline points="14 13 16 15 14 17"/>` }
  });
}
exports.FileCodeIcon = FileCodeIcon;

function FileImageIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="10" cy="13" r="2"/><polyline points="20 17 15 12 6 21"/>` }
  });
}
exports.FileImageIcon = FileImageIcon;

function TrashIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>` }
  });
}
exports.TrashIcon = TrashIcon;

function ClipboardIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>` }
  });
}
exports.ClipboardIcon = ClipboardIcon;

function ArchiveIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>` }
  });
}
exports.ArchiveIcon = ArchiveIcon;

function PackageIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>` }
  });
}
exports.PackageIcon = PackageIcon;

function MailIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>` }
  });
}
exports.MailIcon = MailIcon;

function MailOpenIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M2.5 8.5L12 14l9.5-5.5"/><path d="M2 17V8.5A2.5 2.5 0 0 1 4.5 6h15A2.5 2.5 0 0 1 22 8.5V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/>` }
  });
}
exports.MailOpenIcon = MailOpenIcon;

function MessageSquareIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>` }
  });
}
exports.MessageSquareIcon = MessageSquareIcon;

function MessageCircleIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>` }
  });
}
exports.MessageCircleIcon = MessageCircleIcon;

function PhoneIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>` }
  });
}
exports.PhoneIcon = PhoneIcon;

function PhoneCallIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>` }
  });
}
exports.PhoneCallIcon = PhoneCallIcon;

function BellIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>` }
  });
}
exports.BellIcon = BellIcon;

function BellOffIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="M18.63 13A17.888 17.888 0 0 1 18 8"/><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"/><path d="M18 8a6 6 0 0 0-9.33-5"/><line x1="1" y1="1" x2="23" y2="23"/>` }
  });
}
exports.BellOffIcon = BellOffIcon;

function SendIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>` }
  });
}
exports.SendIcon = SendIcon;

function InboxIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>` }
  });
}
exports.InboxIcon = InboxIcon;

function AtSignIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>` }
  });
}
exports.AtSignIcon = AtSignIcon;

function HomeIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>` }
  });
}
exports.HomeIcon = HomeIcon;

function MapIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>` }
  });
}
exports.MapIcon = MapIcon;

function MapPinIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>` }
  });
}
exports.MapPinIcon = MapPinIcon;

function CompassIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>` }
  });
}
exports.CompassIcon = CompassIcon;

function ExternalLinkIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>` }
  });
}
exports.ExternalLinkIcon = ExternalLinkIcon;

function LinkIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>` }
  });
}
exports.LinkIcon = LinkIcon;

function CodeIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>` }
  });
}
exports.CodeIcon = CodeIcon;

function TerminalIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>` }
  });
}
exports.TerminalIcon = TerminalIcon;

function CpuIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>` }
  });
}
exports.CpuIcon = CpuIcon;

function WifiIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>` }
  });
}
exports.WifiIcon = WifiIcon;

function SunIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>` }
  });
}
exports.SunIcon = SunIcon;

function MoonIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>` }
  });
}
exports.MoonIcon = MoonIcon;

function MaximizeIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>` }
  });
}
exports.MaximizeIcon = MaximizeIcon;

function MinimizeIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>` }
  });
}
exports.MinimizeIcon = MinimizeIcon;

function AnchorIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>` }
  });
}
exports.AnchorIcon = AnchorIcon;

function FlagIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>` }
  });
}
exports.FlagIcon = FlagIcon;

function ClockIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>` }
  });
}
exports.ClockIcon = ClockIcon;

function CalendarIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>` }
  });
}
exports.CalendarIcon = CalendarIcon;

function BarChartIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>` }
  });
}
exports.BarChartIcon = BarChartIcon;

function PieChartIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>` }
  });
}
exports.PieChartIcon = PieChartIcon;

function ActivityIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>` }
  });
}
exports.ActivityIcon = ActivityIcon;

function TrendingUpIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>` }
  });
}
exports.TrendingUpIcon = TrendingUpIcon;

function TrendingDownIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>` }
  });
}
exports.TrendingDownIcon = TrendingDownIcon;

function DatabaseIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>` }
  });
}
exports.DatabaseIcon = DatabaseIcon;

function ServerIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>` }
  });
}
exports.ServerIcon = ServerIcon;

function CloudIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>` }
  });
}
exports.CloudIcon = CloudIcon;

function CloudUploadIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>` }
  });
}
exports.CloudUploadIcon = CloudUploadIcon;

function CloudDownloadIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/>` }
  });
}
exports.CloudDownloadIcon = CloudDownloadIcon;

function PaletteIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>` }
  });
}
exports.PaletteIcon = PaletteIcon;

function LayersIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>` }
  });
}
exports.LayersIcon = LayersIcon;

function LayoutIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>` }
  });
}
exports.LayoutIcon = LayoutIcon;

function ToolIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>` }
  });
}
exports.ToolIcon = ToolIcon;

function CropIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"/><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"/>` }
  });
}
exports.CropIcon = CropIcon;

function ScissorsIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>` }
  });
}
exports.ScissorsIcon = ScissorsIcon;

function TypeIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>` }
  });
}
exports.TypeIcon = TypeIcon;

function BoldIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>` }
  });
}
exports.BoldIcon = BoldIcon;

function ItalicIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/>` }
  });
}
exports.ItalicIcon = ItalicIcon;

function GiftIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>` }
  });
}
exports.GiftIcon = GiftIcon;

function ShoppingBagIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>` }
  });
}
exports.ShoppingBagIcon = ShoppingBagIcon;

function ShoppingCartIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>` }
  });
}
exports.ShoppingCartIcon = ShoppingCartIcon;

function CreditCardIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>` }
  });
}
exports.CreditCardIcon = CreditCardIcon;

function TagIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>` }
  });
}
exports.TagIcon = TagIcon;

function GiftCardIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><path d="M6 14h4M16 14h2"/>` }
  });
}
exports.GiftCardIcon = GiftCardIcon;

function StoreIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><rect x="9" y="22" width="6" height="8"/>` }
  });
}
exports.StoreIcon = StoreIcon;

function BankIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 2 7 22 7 12 2"/>` }
  });
}
exports.BankIcon = BankIcon;

function WalletIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h14v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><path d="M18 12a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4v-6z"/>` }
  });
}
exports.WalletIcon = WalletIcon;

function DollarSignIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>` }
  });
}
exports.DollarSignIcon = DollarSignIcon;

function PercentIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/><line x1="19" y1="5" x2="5" y2="19"/>` }
  });
}
exports.PercentIcon = PercentIcon;

function SmartphoneIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>` }
  });
}
exports.SmartphoneIcon = SmartphoneIcon;

function LaptopIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="1" y1="20" x2="23" y2="20"/><line x1="5" y1="20" x2="19" y2="20"/>` }
  });
}
exports.LaptopIcon = LaptopIcon;

function MonitorIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>` }
  });
}
exports.MonitorIcon = MonitorIcon;

function TabletIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>` }
  });
}
exports.TabletIcon = TabletIcon;

function WatchIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 14 14"/><path d="M12 5V1M12 23v-4M17 12h1M6 12h1"/>` }
  });
}
exports.WatchIcon = WatchIcon;

function HeadphonesIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>` }
  });
}
exports.HeadphonesIcon = HeadphonesIcon;

function HardDriveIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="2" y="2" width="20" height="20" rx="2" ry="2"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="16" x2="22" y2="16"/><circle cx="6" cy="7" r="1"/><circle cx="6" cy="19" r="1"/>` }
  });
}
exports.HardDriveIcon = HardDriveIcon;

function KeyboardIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="8" x2="6.01" y2="8"/><line x1="10" y1="8" x2="10.01" y2="8"/><line x1="14" y1="8" x2="14.01" y2="8"/><line x1="18" y1="8" x2="18.01" y2="8"/><line x1="6" y1="12" x2="6.01" y2="12"/><line x1="18" y1="12" x2="18.01" y2="12"/><rect x="9" y="12" width="6" height="1" rx="0.5"/>` }
  });
}
exports.KeyboardIcon = KeyboardIcon;

function MouseIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="5" y="2" width="14" height="20" rx="7"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="5" y1="9" x2="19" y2="9"/>` }
  });
}
exports.MouseIcon = MouseIcon;

function SpeakerIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><circle cx="12" cy="14" r="4"/><line x1="12" y1="6" x2="12.01" y2="6"/>` }
  });
}
exports.SpeakerIcon = SpeakerIcon;

function WeatherSunIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>` }
  });
}
exports.WeatherSunIcon = WeatherSunIcon;

function WeatherMoonIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>` }
  });
}
exports.WeatherMoonIcon = WeatherMoonIcon;

function WeatherCloudIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>` }
  });
}
exports.WeatherCloudIcon = WeatherCloudIcon;

function CloudRainIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M16 13a4 4 0 0 1-8 0a7 7 0 0 1 8-3.9"/><line x1="8" y1="17" x2="8" y2="21"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="16" y1="17" x2="16" y2="21"/>` }
  });
}
exports.CloudRainIcon = CloudRainIcon;

function CloudLightningIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 8.58"/><polyline points="13 11 9 17 12 17 11 23 15 17 12 17 13 11"/>` }
  });
}
exports.CloudLightningIcon = CloudLightningIcon;

function CloudSnowIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="8" y1="20" x2="8.01" y2="20"/><line x1="12" y1="18" x2="12.01" y2="18"/><line x1="12" y1="22" x2="12.01" y2="22"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="16" y1="20" x2="16.01" y2="20"/>` }
  });
}
exports.CloudSnowIcon = CloudSnowIcon;

function WindIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>` }
  });
}
exports.WindIcon = WindIcon;

function ThermometerIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>` }
  });
}
exports.ThermometerIcon = ThermometerIcon;

function UmbrellaIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M23 12a11.022 11.022 0 0 0-22 0zm-11 0v9a2 2 0 0 0 4 0"/>` }
  });
}
exports.UmbrellaIcon = UmbrellaIcon;

function SunriseIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M18 22H6M12 2v8M12 2l-3 3M12 2l3 3M4.22 10.22l1.42 1.42M18.36 10.22l-1.42 1.42M1 22a11 11 0 0 1 22 0"/>` }
  });
}
exports.SunriseIcon = SunriseIcon;

function SunsetIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M18 22H6M12 10v8M12 18l-3-3M12 18l3-3M4.22 10.22l1.42 1.42M18.36 10.22l-1.42 1.42M1 22a11 11 0 0 1 22 0"/>` }
  });
}
exports.SunsetIcon = SunsetIcon;

function DottedStarIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke-dasharray="2 3"/>` }
  });
}
exports.DottedStarIcon = DottedStarIcon;

function DottedHeartIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke-dasharray="2 3"/>` }
  });
}
exports.DottedHeartIcon = DottedHeartIcon;

function DottedCheckIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="20 6 9 17 4 12" stroke-dasharray="2 3"/>` }
  });
}
exports.DottedCheckIcon = DottedCheckIcon;

function DottedLockIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke-dasharray="2 3"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke-dasharray="2 3"/>` }
  });
}
exports.DottedLockIcon = DottedLockIcon;

function DottedBellIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke-dasharray="2 3"/><path d="M13.73 21a2 2 0 0 1-3.46 0" stroke-dasharray="2 3"/>` }
  });
}
exports.DottedBellIcon = DottedBellIcon;

function DottedCloudIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke-dasharray="2 3"/>` }
  });
}
exports.DottedCloudIcon = DottedCloudIcon;

function FluencySphereIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><radialGradient id="sphereGrad" cx="30%" cy="30%" r="70%"><stop offset="0%" stop-color="#c4b5fd"/><stop offset="50%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#4c1d95"/></radialGradient></defs><circle cx="12" cy="12" r="9" fill="url(#sphereGrad)" stroke="none"/>` }
  });
}
exports.FluencySphereIcon = FluencySphereIcon;

function FluencyStarIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="starShadow" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#starGrad)" filter="url(#starShadow)" stroke="none"/>` }
  });
}
exports.FluencyStarIcon = FluencyStarIcon;

function FluencyShieldIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#2563eb"/></linearGradient></defs><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="url(#shieldGrad)" stroke="none"/>` }
  });
}
exports.FluencyShieldIcon = FluencyShieldIcon;

function FluencyFolderIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="folderGrad1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f472b6"/><stop offset="100%" stop-color="#db2777"/></linearGradient><linearGradient id="folderGrad2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fbcfe8"/><stop offset="100%" stop-color="#f472b6"/></linearGradient></defs><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="url(#folderGrad1)" stroke="none"/><path d="M2 10h20v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" fill="url(#folderGrad2)" opacity="0.8" stroke="none"/>` }
  });
}
exports.FluencyFolderIcon = FluencyFolderIcon;

function GlassBubbleIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="glassBlur"><feGaussianBlur stdDeviation="1.5"/></filter></defs><circle cx="10" cy="10" r="7" fill="rgba(99,102,241,0.25)" stroke="rgba(99,102,241,0.4)" stroke-width="1"/><circle cx="14" cy="14" r="7" fill="url(#glassGrad)" filter="url(#glassBlur)" stroke="rgba(255,255,255,0.5)" stroke-width="1"/>` }
  });
}
exports.GlassBubbleIcon = GlassBubbleIcon;

function GlassHeartIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(244,63,94,0.4)"/><stop offset="100%" stop-color="rgba(244,63,94,0.08)"/></linearGradient><filter id="glassBlur2"><feGaussianBlur stdDeviation="1"/></filter></defs><path d="M12 21.23l-7.78-7.78-1.06-1.06a5.5 5.5 0 0 1 7.78-7.78l1.06 1.06 1.06-1.06a5.5 5.5 0 0 1 7.78 7.78l-1.06 1.06z" fill="url(#glassGrad2)" filter="url(#glassBlur2)" stroke="rgba(244,63,94,0.6)" stroke-width="1.5"/>` }
  });
}
exports.GlassHeartIcon = GlassHeartIcon;

function GlassShieldIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.3)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient></defs><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="url(#glassGrad3)" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>` }
  });
}
exports.GlassShieldIcon = GlassShieldIcon;

function GlassWalletIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(16,185,129,0.35)"/><stop offset="100%" stop-color="rgba(16,185,129,0.05)"/></linearGradient></defs><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h14v4" stroke="var(--border)" fill="none"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4" stroke="var(--border)" fill="none"/><path d="M18 12a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4v-6z" fill="url(#glassGrad4)" stroke="rgba(16,185,129,0.6)" stroke-width="1.5"/>` }
  });
}
exports.GlassWalletIcon = GlassWalletIcon;

function EditIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"/>` }
  });
}
exports.EditIcon = EditIcon;

function LoaderIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>` }
  });
}
exports.LoaderIcon = LoaderIcon;

function LogInIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>` }
  });
}
exports.LogInIcon = LogInIcon;

function LogOutIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>` }
  });
}
exports.LogOutIcon = LogOutIcon;

function MoreHorizontalIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>` }
  });
}
exports.MoreHorizontalIcon = MoreHorizontalIcon;

function MoreVerticalIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>` }
  });
}
exports.MoreVerticalIcon = MoreVerticalIcon;

function KeyIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778zm0 0L15.5 7.5m0 0l3 3m-3-3l-1.5-1.5"/>` }
  });
}
exports.KeyIcon = KeyIcon;

function HelpCircleIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>` }
  });
}
exports.HelpCircleIcon = HelpCircleIcon;

function ThumbsUpIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>` }
  });
}
exports.ThumbsUpIcon = ThumbsUpIcon;

function ThumbsDownIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm12-3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"/>` }
  });
}
exports.ThumbsDownIcon = ThumbsDownIcon;

function ChevronsUpDownIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="7 15 12 20 17 15"/><polyline points="7 9 12 4 17 9"/>` }
  });
}
exports.ChevronsUpDownIcon = ChevronsUpDownIcon;

function SaveIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>` }
  });
}
exports.SaveIcon = SaveIcon;

function CircleIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12" r="10"/>` }
  });
}
exports.CircleIcon = CircleIcon;

function SquareIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>` }
  });
}
exports.SquareIcon = SquareIcon;

function HashIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>` }
  });
}
exports.HashIcon = HashIcon;

function WhatsappIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M12 8c-.5 0-1.5.5-1.5 1.5s1 2.5 2 3.5 2.5 2 3.5 2 1.5-1 1.5-1.5"/>` }
  });
}
exports.WhatsappIcon = WhatsappIcon;

function TiktokIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>` }
  });
}
exports.TiktokIcon = TiktokIcon;

function SlackIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="3" y="8" width="6" height="6" rx="3"/><rect x="15" y="8" width="6" height="6" rx="3"/><rect x="9" y="2" width="6" height="6" rx="3"/><rect x="9" y="14" width="6" height="6" rx="3"/>` }
  });
}
exports.SlackIcon = SlackIcon;

function FigmaIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 9h3.5a3.5 3.5 0 1 1-3.5 3.5V9z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 5 19.5z"/><circle cx="15.5" cy="5.5" r="3.5"/>` }
  });
}
exports.FigmaIcon = FigmaIcon;

function SpotifyIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12" r="10"/><path d="M8 9.5a12.5 12.5 0 0 1 8 0"/><path d="M9 12a9.5 9.5 0 0 1 6 0"/><path d="M10 14.5a6.5 6.5 0 0 1 4 0"/>` }
  });
}
exports.SpotifyIcon = SpotifyIcon;

function RedditIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="5" r="1"/><line x1="12" y1="7" x2="12" y2="6"/>` }
  });
}
exports.RedditIcon = RedditIcon;

function PinterestIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12" r="10"/><path d="M12 8c-3 0-4 2-4 4 0 2.5 1.5 3.5 2 3.5s.5-.5.5-1-.5-1.5-1-2 1-3.5 2.5-3.5 2.5 1 2.5 2.5S13 16 12 16c-.5 0-1-.25-1-.75l-.5 2.25c-.25 1-1 2.25-1.25 2.5a8.5 8.5 0 0 0 2.75.5c4.5 0 8.5-4 8.5-8.5S16.5 3.5 12 3.5z"/>` }
  });
}
exports.PinterestIcon = PinterestIcon;

function PrinterIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>` }
  });
}
exports.PrinterIcon = PrinterIcon;

function BatteryIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="11" x2="23" y2="13"/>` }
  });
}
exports.BatteryIcon = BatteryIcon;

function BluetoothIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/>` }
  });
}
exports.BluetoothIcon = BluetoothIcon;

function UsbIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline points="12 22 12 5"/><polygon points="12 1 9 5 15 5 12 1"/><circle cx="6" cy="9" r="2"/><path d="M12 12H6v-1"/><circle cx="18" cy="15" r="2"/><path d="M12 16h6v-1"/>` }
  });
}
exports.UsbIcon = UsbIcon;

function TvIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/>` }
  });
}
exports.TvIcon = TvIcon;

function TableIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M3 3h18v18H3z"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/>` }
  });
}
exports.TableIcon = TableIcon;

function ChartLineIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>` }
  });
}
exports.ChartLineIcon = ChartLineIcon;

function QrCodeIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/><rect x="18" y="18" width="3" height="3"/><rect x="14" y="18" width="3" height="3"/><rect x="18" y="14" width="3" height="3"/>` }
  });
}
exports.QrCodeIcon = QrCodeIcon;

function ReceiptIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="12" y2="16"/>` }
  });
}
exports.ReceiptIcon = ReceiptIcon;

function FilePdfIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15h1a1.5 1.5 0 0 0 0-3H9v6"/><path d="M12 12v6h1.5a3 3 0 0 0 0-6H12z"/><path d="M16.5 12h2.5M16.5 15h2M16.5 12v6"/>` }
  });
}
exports.FilePdfIcon = FilePdfIcon;

function FileZipIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M12 12v6"/><rect x="10" y="8" width="4" height="4"/>` }
  });
}
exports.FileZipIcon = FileZipIcon;

function FileAudioIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="9" cy="16" r="2"/><path d="M11 16V10l3 1v6"/>` }
  });
}
exports.FileAudioIcon = FileAudioIcon;

function FileVideoIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><rect x="7" y="11" width="6" height="5" rx="1"/><polygon points="13 13 17 11 17 16 13 14"/>` }
  });
}
exports.FileVideoIcon = FileVideoIcon;

function DottedSearchIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle stroke-dasharray="2 3" cx="11" cy="11" r="8"/><line stroke-dasharray="2 3" x1="21" y1="21" x2="16.65" y2="16.65"/>` }
  });
}
exports.DottedSearchIcon = DottedSearchIcon;

function FluencySearchIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="fluencyGrad_search" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="fluencyShadow_search" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs><circle fill="url(#fluencyGrad_search)" filter="url(#fluencyShadow_search)" stroke="none" cx="11" cy="11" r="8"/><line fill="url(#fluencyGrad_search)" filter="url(#fluencyShadow_search)" stroke="none" x1="21" y1="21" x2="16.65" y2="16.65"/>` }
  });
}
exports.FluencySearchIcon = FluencySearchIcon;

function GlassSearchIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad_search" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="glassBlur_search"><feGaussianBlur stdDeviation="1"/></filter></defs><circle fill="url(#glassGrad_search)" filter="url(#glassBlur_search)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" cx="11" cy="11" r="8"/><line fill="url(#glassGrad_search)" filter="url(#glassBlur_search)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" x1="21" y1="21" x2="16.65" y2="16.65"/>` }
  });
}
exports.GlassSearchIcon = GlassSearchIcon;

function DottedHomeIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path stroke-dasharray="2 3" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline stroke-dasharray="2 3" points="9 22 9 12 15 12 15 22"/>` }
  });
}
exports.DottedHomeIcon = DottedHomeIcon;

function FluencyHomeIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="fluencyGrad_home" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="fluencyShadow_home" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs><path fill="url(#fluencyGrad_home)" filter="url(#fluencyShadow_home)" stroke="none" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline fill="url(#fluencyGrad_home)" filter="url(#fluencyShadow_home)" stroke="none" points="9 22 9 12 15 12 15 22"/>` }
  });
}
exports.FluencyHomeIcon = FluencyHomeIcon;

function GlassHomeIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad_home" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="glassBlur_home"><feGaussianBlur stdDeviation="1"/></filter></defs><path fill="url(#glassGrad_home)" filter="url(#glassBlur_home)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline fill="url(#glassGrad_home)" filter="url(#glassBlur_home)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" points="9 22 9 12 15 12 15 22"/>` }
  });
}
exports.GlassHomeIcon = GlassHomeIcon;

function DottedSettingsIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle stroke-dasharray="2 3" cx="12" cy="12" r="3"/><path stroke-dasharray="2 3" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>` }
  });
}
exports.DottedSettingsIcon = DottedSettingsIcon;

function FluencySettingsIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="fluencyGrad_settings" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="fluencyShadow_settings" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs><circle fill="url(#fluencyGrad_settings)" filter="url(#fluencyShadow_settings)" stroke="none" cx="12" cy="12" r="3"/><path fill="url(#fluencyGrad_settings)" filter="url(#fluencyShadow_settings)" stroke="none" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>` }
  });
}
exports.FluencySettingsIcon = FluencySettingsIcon;

function GlassSettingsIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad_settings" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="glassBlur_settings"><feGaussianBlur stdDeviation="1"/></filter></defs><circle fill="url(#glassGrad_settings)" filter="url(#glassBlur_settings)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" cx="12" cy="12" r="3"/><path fill="url(#glassGrad_settings)" filter="url(#glassBlur_settings)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>` }
  });
}
exports.GlassSettingsIcon = GlassSettingsIcon;

function DottedUserIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path stroke-dasharray="2 3" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle stroke-dasharray="2 3" cx="12" cy="7" r="4"/>` }
  });
}
exports.DottedUserIcon = DottedUserIcon;

function FluencyUserIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="fluencyGrad_user" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="fluencyShadow_user" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs><path fill="url(#fluencyGrad_user)" filter="url(#fluencyShadow_user)" stroke="none" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle fill="url(#fluencyGrad_user)" filter="url(#fluencyShadow_user)" stroke="none" cx="12" cy="7" r="4"/>` }
  });
}
exports.FluencyUserIcon = FluencyUserIcon;

function GlassUserIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad_user" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="glassBlur_user"><feGaussianBlur stdDeviation="1"/></filter></defs><path fill="url(#glassGrad_user)" filter="url(#glassBlur_user)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle fill="url(#glassGrad_user)" filter="url(#glassBlur_user)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" cx="12" cy="7" r="4"/>` }
  });
}
exports.GlassUserIcon = GlassUserIcon;

function DottedMailIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path stroke-dasharray="2 3" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline stroke-dasharray="2 3" points="22,6 12,13 2,6"/>` }
  });
}
exports.DottedMailIcon = DottedMailIcon;

function FluencyMailIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="fluencyGrad_mail" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="fluencyShadow_mail" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs><path fill="url(#fluencyGrad_mail)" filter="url(#fluencyShadow_mail)" stroke="none" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline fill="url(#fluencyGrad_mail)" filter="url(#fluencyShadow_mail)" stroke="none" points="22,6 12,13 2,6"/>` }
  });
}
exports.FluencyMailIcon = FluencyMailIcon;

function GlassMailIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad_mail" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="glassBlur_mail"><feGaussianBlur stdDeviation="1"/></filter></defs><path fill="url(#glassGrad_mail)" filter="url(#glassBlur_mail)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline fill="url(#glassGrad_mail)" filter="url(#glassBlur_mail)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" points="22,6 12,13 2,6"/>` }
  });
}
exports.GlassMailIcon = GlassMailIcon;

function FluencyCheckIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="fluencyGrad_check" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="fluencyShadow_check" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs><polyline fill="url(#fluencyGrad_check)" filter="url(#fluencyShadow_check)" stroke="none" points="20 6 9 17 4 12"/>` }
  });
}
exports.FluencyCheckIcon = FluencyCheckIcon;

function GlassCheckIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad_check" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="glassBlur_check"><feGaussianBlur stdDeviation="1"/></filter></defs><polyline fill="url(#glassGrad_check)" filter="url(#glassBlur_check)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" points="20 6 9 17 4 12"/>` }
  });
}
exports.GlassCheckIcon = GlassCheckIcon;

function DottedXIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line stroke-dasharray="2 3" x1="18" y1="6" x2="6" y2="18"/><line stroke-dasharray="2 3" x1="6" y1="6" x2="18" y2="18"/>` }
  });
}
exports.DottedXIcon = DottedXIcon;

function FluencyXIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="fluencyGrad_x" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="fluencyShadow_x" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs><line fill="url(#fluencyGrad_x)" filter="url(#fluencyShadow_x)" stroke="none" x1="18" y1="6" x2="6" y2="18"/><line fill="url(#fluencyGrad_x)" filter="url(#fluencyShadow_x)" stroke="none" x1="6" y1="6" x2="18" y2="18"/>` }
  });
}
exports.FluencyXIcon = FluencyXIcon;

function GlassXIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad_x" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="glassBlur_x"><feGaussianBlur stdDeviation="1"/></filter></defs><line fill="url(#glassGrad_x)" filter="url(#glassBlur_x)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" x1="18" y1="6" x2="6" y2="18"/><line fill="url(#glassGrad_x)" filter="url(#glassBlur_x)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" x1="6" y1="6" x2="18" y2="18"/>` }
  });
}
exports.GlassXIcon = GlassXIcon;

function DottedPlusIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<line stroke-dasharray="2 3" x1="12" y1="5" x2="12" y2="19"/><line stroke-dasharray="2 3" x1="5" y1="12" x2="19" y2="12"/>` }
  });
}
exports.DottedPlusIcon = DottedPlusIcon;

function FluencyPlusIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="fluencyGrad_plus" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="fluencyShadow_plus" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs><line fill="url(#fluencyGrad_plus)" filter="url(#fluencyShadow_plus)" stroke="none" x1="12" y1="5" x2="12" y2="19"/><line fill="url(#fluencyGrad_plus)" filter="url(#fluencyShadow_plus)" stroke="none" x1="5" y1="12" x2="19" y2="12"/>` }
  });
}
exports.FluencyPlusIcon = FluencyPlusIcon;

function GlassPlusIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad_plus" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="glassBlur_plus"><feGaussianBlur stdDeviation="1"/></filter></defs><line fill="url(#glassGrad_plus)" filter="url(#glassBlur_plus)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" x1="12" y1="5" x2="12" y2="19"/><line fill="url(#glassGrad_plus)" filter="url(#glassBlur_plus)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" x1="5" y1="12" x2="19" y2="12"/>` }
  });
}
exports.GlassPlusIcon = GlassPlusIcon;

function DottedDownloadIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path stroke-dasharray="2 3" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline stroke-dasharray="2 3" points="7 10 12 15 17 10"/><line stroke-dasharray="2 3" x1="12" y1="15" x2="12" y2="3"/>` }
  });
}
exports.DottedDownloadIcon = DottedDownloadIcon;

function FluencyDownloadIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="fluencyGrad_download" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="fluencyShadow_download" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs><path fill="url(#fluencyGrad_download)" filter="url(#fluencyShadow_download)" stroke="none" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline fill="url(#fluencyGrad_download)" filter="url(#fluencyShadow_download)" stroke="none" points="7 10 12 15 17 10"/><line fill="url(#fluencyGrad_download)" filter="url(#fluencyShadow_download)" stroke="none" x1="12" y1="15" x2="12" y2="3"/>` }
  });
}
exports.FluencyDownloadIcon = FluencyDownloadIcon;

function GlassDownloadIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad_download" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="glassBlur_download"><feGaussianBlur stdDeviation="1"/></filter></defs><path fill="url(#glassGrad_download)" filter="url(#glassBlur_download)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline fill="url(#glassGrad_download)" filter="url(#glassBlur_download)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" points="7 10 12 15 17 10"/><line fill="url(#glassGrad_download)" filter="url(#glassBlur_download)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" x1="12" y1="15" x2="12" y2="3"/>` }
  });
}
exports.GlassDownloadIcon = GlassDownloadIcon;

function DottedUploadIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path stroke-dasharray="2 3" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline stroke-dasharray="2 3" points="17 8 12 3 7 8"/><line stroke-dasharray="2 3" x1="12" y1="3" x2="12" y2="15"/>` }
  });
}
exports.DottedUploadIcon = DottedUploadIcon;

function FluencyUploadIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="fluencyGrad_upload" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="fluencyShadow_upload" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs><path fill="url(#fluencyGrad_upload)" filter="url(#fluencyShadow_upload)" stroke="none" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline fill="url(#fluencyGrad_upload)" filter="url(#fluencyShadow_upload)" stroke="none" points="17 8 12 3 7 8"/><line fill="url(#fluencyGrad_upload)" filter="url(#fluencyShadow_upload)" stroke="none" x1="12" y1="3" x2="12" y2="15"/>` }
  });
}
exports.FluencyUploadIcon = FluencyUploadIcon;

function GlassUploadIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad_upload" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="glassBlur_upload"><feGaussianBlur stdDeviation="1"/></filter></defs><path fill="url(#glassGrad_upload)" filter="url(#glassBlur_upload)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline fill="url(#glassGrad_upload)" filter="url(#glassBlur_upload)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" points="17 8 12 3 7 8"/><line fill="url(#glassGrad_upload)" filter="url(#glassBlur_upload)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" x1="12" y1="3" x2="12" y2="15"/>` }
  });
}
exports.GlassUploadIcon = GlassUploadIcon;

function DottedCalendarIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<rect stroke-dasharray="2 3" x="3" y="4" width="18" height="18" rx="2" ry="2"/><line stroke-dasharray="2 3" x1="16" y1="2" x2="16" y2="6"/><line stroke-dasharray="2 3" x1="8" y1="2" x2="8" y2="6"/><line stroke-dasharray="2 3" x1="3" y1="10" x2="21" y2="10"/>` }
  });
}
exports.DottedCalendarIcon = DottedCalendarIcon;

function FluencyCalendarIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="fluencyGrad_calendar" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="fluencyShadow_calendar" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs><rect fill="url(#fluencyGrad_calendar)" filter="url(#fluencyShadow_calendar)" stroke="none" x="3" y="4" width="18" height="18" rx="2" ry="2"/><line fill="url(#fluencyGrad_calendar)" filter="url(#fluencyShadow_calendar)" stroke="none" x1="16" y1="2" x2="16" y2="6"/><line fill="url(#fluencyGrad_calendar)" filter="url(#fluencyShadow_calendar)" stroke="none" x1="8" y1="2" x2="8" y2="6"/><line fill="url(#fluencyGrad_calendar)" filter="url(#fluencyShadow_calendar)" stroke="none" x1="3" y1="10" x2="21" y2="10"/>` }
  });
}
exports.FluencyCalendarIcon = FluencyCalendarIcon;

function GlassCalendarIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad_calendar" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="glassBlur_calendar"><feGaussianBlur stdDeviation="1"/></filter></defs><rect fill="url(#glassGrad_calendar)" filter="url(#glassBlur_calendar)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" x="3" y="4" width="18" height="18" rx="2" ry="2"/><line fill="url(#glassGrad_calendar)" filter="url(#glassBlur_calendar)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" x1="16" y1="2" x2="16" y2="6"/><line fill="url(#glassGrad_calendar)" filter="url(#glassBlur_calendar)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" x1="8" y1="2" x2="8" y2="6"/><line fill="url(#glassGrad_calendar)" filter="url(#glassBlur_calendar)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" x1="3" y1="10" x2="21" y2="10"/>` }
  });
}
exports.GlassCalendarIcon = GlassCalendarIcon;

function DottedClockIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<circle stroke-dasharray="2 3" cx="12" cy="12" r="10"/><polyline stroke-dasharray="2 3" points="12 6 12 12 16 14"/>` }
  });
}
exports.DottedClockIcon = DottedClockIcon;

function FluencyClockIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="fluencyGrad_clock" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="fluencyShadow_clock" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs><circle fill="url(#fluencyGrad_clock)" filter="url(#fluencyShadow_clock)" stroke="none" cx="12" cy="12" r="10"/><polyline fill="url(#fluencyGrad_clock)" filter="url(#fluencyShadow_clock)" stroke="none" points="12 6 12 12 16 14"/>` }
  });
}
exports.FluencyClockIcon = FluencyClockIcon;

function GlassClockIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad_clock" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="glassBlur_clock"><feGaussianBlur stdDeviation="1"/></filter></defs><circle fill="url(#glassGrad_clock)" filter="url(#glassBlur_clock)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" cx="12" cy="12" r="10"/><polyline fill="url(#glassGrad_clock)" filter="url(#glassBlur_clock)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" points="12 6 12 12 16 14"/>` }
  });
}
exports.GlassClockIcon = GlassClockIcon;

function DottedTrashIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<polyline stroke-dasharray="2 3" points="3 6 5 6 21 6"/><path stroke-dasharray="2 3" d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>` }
  });
}
exports.DottedTrashIcon = DottedTrashIcon;

function FluencyTrashIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="fluencyGrad_trash" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="fluencyShadow_trash" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs><polyline fill="url(#fluencyGrad_trash)" filter="url(#fluencyShadow_trash)" stroke="none" points="3 6 5 6 21 6"/><path fill="url(#fluencyGrad_trash)" filter="url(#fluencyShadow_trash)" stroke="none" d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>` }
  });
}
exports.FluencyTrashIcon = FluencyTrashIcon;

function GlassTrashIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad_trash" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="glassBlur_trash"><feGaussianBlur stdDeviation="1"/></filter></defs><polyline fill="url(#glassGrad_trash)" filter="url(#glassBlur_trash)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" points="3 6 5 6 21 6"/><path fill="url(#glassGrad_trash)" filter="url(#glassBlur_trash)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>` }
  });
}
exports.GlassTrashIcon = GlassTrashIcon;

function DottedFolderIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path stroke-dasharray="2 3" d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>` }
  });
}
exports.DottedFolderIcon = DottedFolderIcon;

function GlassFolderIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad_folder" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="glassBlur_folder"><feGaussianBlur stdDeviation="1"/></filter></defs><path fill="url(#glassGrad_folder)" filter="url(#glassBlur_folder)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>` }
  });
}
exports.GlassFolderIcon = GlassFolderIcon;

function FluencyBellIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="fluencyGrad_bell" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="fluencyShadow_bell" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs><path fill="url(#fluencyGrad_bell)" filter="url(#fluencyShadow_bell)" stroke="none" d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path fill="url(#fluencyGrad_bell)" filter="url(#fluencyShadow_bell)" stroke="none" d="M13.73 21a2 2 0 0 1-3.46 0"/>` }
  });
}
exports.FluencyBellIcon = FluencyBellIcon;

function GlassBellIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad_bell" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="glassBlur_bell"><feGaussianBlur stdDeviation="1"/></filter></defs><path fill="url(#glassGrad_bell)" filter="url(#glassBlur_bell)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path fill="url(#glassGrad_bell)" filter="url(#glassBlur_bell)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" d="M13.73 21a2 2 0 0 1-3.46 0"/>` }
  });
}
exports.GlassBellIcon = GlassBellIcon;

function DottedEyeIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<path stroke-dasharray="2 3" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle stroke-dasharray="2 3" cx="12" cy="12" r="3"/>` }
  });
}
exports.DottedEyeIcon = DottedEyeIcon;

function FluencyEyeIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="fluencyGrad_eye" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient><filter id="fluencyShadow_eye" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/></filter></defs><path fill="url(#fluencyGrad_eye)" filter="url(#fluencyShadow_eye)" stroke="none" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle fill="url(#fluencyGrad_eye)" filter="url(#fluencyShadow_eye)" stroke="none" cx="12" cy="12" r="3"/>` }
  });
}
exports.FluencyEyeIcon = FluencyEyeIcon;

function GlassEyeIcon({ size = 24, color = 'currentColor' }) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    dangerouslySetInnerHTML: { __html: `<defs><linearGradient id="glassGrad_eye" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="rgba(255,255,255,0.4)"/><stop offset="100%" stop-color="rgba(255,255,255,0.05)"/></linearGradient><filter id="glassBlur_eye"><feGaussianBlur stdDeviation="1"/></filter></defs><path fill="url(#glassGrad_eye)" filter="url(#glassBlur_eye)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle fill="url(#glassGrad_eye)" filter="url(#glassBlur_eye)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" cx="12" cy="12" r="3"/>` }
  });
}
exports.GlassEyeIcon = GlassEyeIcon;

