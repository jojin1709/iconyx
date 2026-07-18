const fs = require('fs');
const path = require('path');

console.log('🚀 Building npm package distribution files...');

const srcLibIconsPath = path.join(__dirname, '..', 'src', 'lib', 'icons.ts');
if (!fs.existsSync(srcLibIconsPath)) {
  console.error(`❌ Manifest file not found at: ${srcLibIconsPath}`);
  process.exit(1);
}

const manifestContent = fs.readFileSync(srcLibIconsPath, 'utf8');

// Parse out icon objects via regex
const iconRegex = /name:\s*['"]([^'"]+)['"]\s*,\s*category:\s*['"]([^'"]+)['"]\s*,\s*tags:[^]*?svgContent:\s*`([^`]+)`/g;
const icons = [];
let match;
while ((match = iconRegex.exec(manifestContent)) !== null) {
  icons.push({ name: match[1], category: match[2], svgContent: match[3] });
}

if (icons.length === 0) {
  console.error('❌ Could not parse any icons from manifest file.');
  process.exit(1);
}

console.log(`📦 Loaded ${icons.length} icons to compile.`);

// Prepare directories
const distDir = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir);

// Generate files: index.js (CommonJS), index.mjs (ES module), index.d.ts (Types)
let esmContent = `import React from 'react';\n\n`;
let cjsContent = `const React = require('react');\n\n`;
let dtsContent = `import React from 'react';\n\ninterface IconProps {\n  size?: number;\n  color?: string;\n}\n\n`;

icons.forEach((icon) => {
  const componentName = icon.name
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('') + 'Icon';

  // React component template
  const svgInner = icon.svgContent.replace(/`/g, '\\`');

  const esmComponent = `export function ${componentName}({ size = 24, color = 'currentColor' }) {\n  return (\n    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: \`${svgInner}\` }} />\n  );\n}\n\n`;
  const cjsComponent = `function ${componentName}({ size = 24, color = 'currentColor' }) {\n  return React.createElement('svg', {\n    width: size,\n    height: size,\n    viewBox: '0 0 24 24',\n    fill: 'none',\n    stroke: color,\n    strokeWidth: 2,\n    strokeLinecap: 'round',\n    strokeLinejoin: 'round',\n    dangerouslySetInnerHTML: { __html: \`${svgInner}\` }\n  });\n}\nexports.${componentName} = ${componentName};\n\n`;
  const dtsComponent = `export declare function ${componentName}(props: IconProps): React.JSX.Element;\n`;

  esmContent += esmComponent;
  cjsContent += cjsComponent;
  dtsContent += dtsComponent;
});

// Write outputs
fs.writeFileSync(path.join(distDir, 'index.js'), cjsContent, 'utf8');
fs.writeFileSync(path.join(distDir, 'index.mjs'), esmContent, 'utf8');
fs.writeFileSync(path.join(distDir, 'index.d.ts'), dtsContent, 'utf8');

console.log('✅ Generated index.js (CommonJS)');
console.log('✅ Generated index.mjs (ES Module)');
console.log('✅ Generated index.d.ts (Declaration Types)');
console.log('🎉 npm package build completed successfully under dist/.');
process.exit(0);
