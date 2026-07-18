export function getReactCode(name: string, svgContent: string, size: number, color: string, strokeWidth: number, a11y: boolean = false): string {
  const componentName = name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Icon';
  const ariaAttr = a11y ? ` aria-label="${name} icon" role="img"` : ' aria-hidden="true"';
  return `import React from 'react';\n\nexport function ${componentName}({\n  size = ${size},\n  color = "${color}",\n  strokeWidth = ${strokeWidth}\n}: { size?: number; color?: string; strokeWidth?: number }) {\n  return (\n    <svg\n      width={size}\n      height={size}\n      viewBox="0 0 24 24"\n      fill="none"\n      stroke={color}\n      strokeWidth={strokeWidth}\n      strokeLinecap="round"\n      strokeLinejoin="round"\n      ${ariaAttr}\n      dangerouslySetInnerHTML={{ __html: \`${svgContent.replace(/`/g, '\\`')}\` }}\n    />\n  );\n}`;
}

export function getVueCode(name: string, svgContent: string, size: number, color: string, strokeWidth: number, a11y: boolean = false): string {
  const componentName = name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Icon';
  const ariaAttr = a11y ? ` aria-label="${name} icon" role="img"` : ' aria-hidden="true"';
  return `<template>\n  <svg\n    :width="size"\n    :height="size"\n    viewBox="0 0 24 24"\n    fill="none"\n    :stroke="color"\n    :stroke-width="strokeWidth"\n    stroke-linecap="round"\n    stroke-linejoin="round"\n    ${ariaAttr}\n    v-html="rawSvg"\n  />\n</template>\n\n<script>\nexport default {\n  name: '${componentName}',\n  props: {\n    size: { type: [Number, String], default: ${size} },\n    color: { type: String, default: '${color}' },\n    strokeWidth: { type: [Number, String], default: ${strokeWidth} }\n  },\n  data() {\n    return {\n      rawSvg: \`${svgContent.replace(/`/g, '\\`')}\`\n    };\n  }\n};\n</script>`;
}

export function getSvelteCode(name: string, svgContent: string, size: number, color: string, strokeWidth: number, a11y: boolean = false): string {
  const ariaAttr = a11y ? ` aria-label="${name} icon" role="img"` : ' aria-hidden="true"';
  return `<script>\n  export let size = ${size};\n  export let color = "${color}";\n  export let strokeWidth = ${strokeWidth};\n</script>\n\n<svg\n  width={size}\n  height={size}\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke={color}\n  stroke-width={strokeWidth}\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  ${ariaAttr}\n>\n  {@html \`${svgContent.replace(/`/g, '\\`')}\`}\n</svg>`;
}

export function getTailwindCode(name: string, svgContent: string, size: number, color: string, strokeWidth: number): string {
  return `<svg class="w-${Math.round(size/4)} h-${Math.round(size/4)} text-purple-500 fill-none stroke-current" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">\n  ${svgContent.trim()}\n</svg>`;
}

export function getHtmlCode(name: string, svgContent: string, size: number, color: string, strokeWidth: number, a11y: boolean = false): string {
  const ariaAttr = a11y ? ` aria-label="${name} icon" role="img"` : ' aria-hidden="true"';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"${ariaAttr}>\n  ${svgContent.trim()}\n</svg>`;
}

export function getReactNativeCode(name: string, svgContent: string, size: number, color: string, strokeWidth: number): string {
  const componentName = name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Icon';
  const rnSvg = svgContent
    .replace(/<path/g, '<Path')
    .replace(/<\/path/g, '</Path')
    .replace(/<circle/g, '<Circle')
    .replace(/<\/circle/g, '</Circle')
    .replace(/<rect/g, '<Rect')
    .replace(/<\/rect/g, '</Rect')
    .replace(/<polygon/g, '<Polygon')
    .replace(/<\/polygon/g, '</Polygon')
    .replace(/<line/g, '<Line')
    .replace(/<\/line/g, '</Line')
    .replace(/<polyline/g, '<Polyline')
    .replace(/<\/polyline/g, '</Polyline');
  return `import React from 'react';\nimport Svg, { Path, Circle, Rect, Polygon, Line, Polyline } from 'react-native-svg';\n\nexport function ${componentName}({\n  size = ${size},\n  color = "${color}",\n  strokeWidth = ${strokeWidth}\n}: { size?: number; color?: string; strokeWidth?: number }) {\n  return (\n    <Svg\n      width={size}\n      height={size}\n      viewBox="0 0 24 24"\n      fill="none"\n      stroke={color}\n      strokeWidth={strokeWidth}\n      strokeLinecap="round"\n      strokeLinejoin="round"\n    >\n      ${rnSvg.trim().split('\n').join('\n      ')}\n    </Svg>\n  );\n}`;
}

export function getTailwindPluginCode(name: string, cdnUrl: string): string {
  return `// add to tailwind.config.js plugins\nplugin(function({ matchUtilities, theme }) {\n  matchUtilities(\n    {\n      'icon-${name}': (value) => ({\n        maskImage: \`url("${cdnUrl}")\`,\n        webkitMaskImage: \`url("${cdnUrl}")\`,\n        backgroundColor: value,\n      }),\n    },\n    { values: theme('colors') }\n  )\n})`;
}

export function getCssMaskCode(name: string, cdnUrl: string, size: number, color: string): string {
  return `.icon-${name} {\n  width: ${size}px;\n  height: ${size}px;\n  background-color: ${color};\n  mask: url("${cdnUrl}") no-repeat center;\n  -webkit-mask: url("${cdnUrl}") no-repeat center;\n  mask-size: contain;\n  -webkit-mask-size: contain;\n}`;
}

export function getWebComponentCode(name: string, svgContent: string, size: number, color: string, strokeWidth: number): string {
  const componentClassName = name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Element';
  return `class ${componentClassName} extends HTMLElement {\n  connectedCallback() {\n    const size = this.getAttribute('size') || ${size};\n    const color = this.getAttribute('color') || '${color}';\n    const stroke = this.getAttribute('stroke') || ${strokeWidth};\n    this.innerHTML = \`\n      <svg width="\${size}" height="\${size}" viewBox="0 0 24 24" fill="none" stroke="\${color}" stroke-width="\${stroke}" stroke-linecap="round" stroke-linejoin="round">\n        ${svgContent.trim()}\n      </svg>\n    \`;\n  }\n}\ncustomElements.define('iconyx-${name}', ${componentClassName});`;
}

export function getBase64UriCode(name: string, svgContent: string, size: number, color: string, strokeWidth: number): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${svgContent.trim()}</svg>`;
  const base64 = typeof window !== 'undefined' ? window.btoa(svg) : Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}
