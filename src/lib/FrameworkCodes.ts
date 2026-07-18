export function getReactCode(name: string, svgContent: string, size: number, color: string, strokeWidth: number): string {
  const componentName = name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Icon';
  return `import React from 'react';\n\nexport function ${componentName}({\n  size = ${size},\n  color = "${color}",\n  strokeWidth = ${strokeWidth}\n}: { size?: number; color?: string; strokeWidth?: number }) {\n  return (\n    <svg\n      width={size}\n      height={size}\n      viewBox="0 0 24 24"\n      fill="none"\n      stroke={color}\n      strokeWidth={strokeWidth}\n      strokeLinecap="round"\n      strokeLinejoin="round"\n      dangerouslySetInnerHTML={{ __html: \`${svgContent.replace(/`/g, '\\`')}\` }}\n    />\n  );\n}`;
}

export function getVueCode(name: string, svgContent: string, size: number, color: string, strokeWidth: number): string {
  const componentName = name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Icon';
  return `<template>\n  <svg\n    :width="size"\n    :height="size"\n    viewBox="0 0 24 24"\n    fill="none"\n    :stroke="color"\n    :stroke-width="strokeWidth"\n    stroke-linecap="round"\n    stroke-linejoin="round"\n    v-html="rawSvg"\n  />\n</template>\n\n<script>\nexport default {\n  name: '${componentName}',\n  props: {\n    size: { type: [Number, String], default: ${size} },\n    color: { type: String, default: '${color}' },\n    strokeWidth: { type: [Number, String], default: ${strokeWidth} }\n  },\n  data() {\n    return {\n      rawSvg: \`${svgContent.replace(/`/g, '\\`')}\`\n    };\n  }\n};\n</script>`;
}

export function getSvelteCode(name: string, svgContent: string, size: number, color: string, strokeWidth: number): string {
  return `<script>\n  export let size = ${size};\n  export let color = "${color}";\n  export let strokeWidth = ${strokeWidth};\n</script>\n\n<svg\n  width={size}\n  height={size}\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke={color}\n  stroke-width={strokeWidth}\n  stroke-linecap="round"\n  stroke-linejoin="round"\n>\n  {@html \`${svgContent.replace(/`/g, '\\`')}\`}\n</svg>`;
}

export function getTailwindCode(name: string, svgContent: string, size: number, color: string, strokeWidth: number): string {
  // Translate hex color to tailwind style or raw style
  return `<svg class="w-${Math.round(size/4)} h-${Math.round(size/4)} text-purple-500 fill-none stroke-current" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">\n  ${svgContent.trim()}\n</svg>`;
}

export function getHtmlCode(name: string, svgContent: string, size: number, color: string, strokeWidth: number): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">\n  ${svgContent.trim()}\n</svg>`;
}
