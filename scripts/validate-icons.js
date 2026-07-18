const fs = require('fs');
const path = require('path');

// Read manifest
const manifestPath = path.join(__dirname, '..', 'src', 'lib', 'icons.ts');
if (!fs.existsSync(manifestPath)) {
  console.error(`❌ Manifest file not found at: ${manifestPath}`);
  process.exit(1);
}

const manifestContent = fs.readFileSync(manifestPath, 'utf8');

// Simple regex extraction of icon names and categories from icons.ts
const iconRegex = /name:\s*['"]([^'"]+)['"]\s*,\s*category:\s*['"]([^'"]+)['"]/g;
const manifestIcons = [];
let match;
while ((match = iconRegex.exec(manifestContent)) !== null) {
  manifestIcons.push({ name: match[1], category: match[2] });
}

if (manifestIcons.length === 0) {
  console.error('❌ Could not find any icons inside icons.ts using regex.');
  process.exit(1);
}

console.log(`🔍 Found ${manifestIcons.length} icons in manifest.`);

let errors = 0;

// Validate that every icon in the manifest exists in public/icons/
manifestIcons.forEach((icon) => {
  const filePath = path.join(__dirname, '..', 'public', 'icons', icon.category, `${icon.name}.svg`);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing file: category "${icon.category}" icon "${icon.name}" -> ${filePath}`);
    errors++;
  } else {
    // Validate SVG formatting
    const svgContent = fs.readFileSync(filePath, 'utf8').trim();
    if (!svgContent.startsWith('<svg') || !svgContent.endsWith('</svg>')) {
      console.error(`❌ Invalid SVG structure for: ${icon.category}/${icon.name}.svg`);
      errors++;
    }
  }
});

// Check if there are dangling SVG files in public/icons/ that aren't in the manifest
const publicDir = path.join(__dirname, '..', 'public', 'icons');
if (fs.existsSync(publicDir)) {
  const categories = fs.readdirSync(publicDir);
  categories.forEach((cat) => {
    const catPath = path.join(publicDir, cat);
    if (fs.statSync(catPath).isDirectory()) {
      const files = fs.readdirSync(catPath);
      files.forEach((file) => {
        if (file.endsWith('.svg')) {
          const name = file.replace('.svg', '');
          const inManifest = manifestIcons.some((i) => i.name === name && i.category === cat);
          if (!inManifest) {
            console.error(`⚠️ Dangling file: public/icons/${cat}/${file} is not listed in src/lib/icons.ts manifest.`);
            errors++;
          }
        }
      });
    }
  });
}

if (errors > 0) {
  console.error(`\n❌ Validation failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('\n✅ Validation succeeded! All files match the manifest.');
  process.exit(0);
}
