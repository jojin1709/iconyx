# Contributing to Iconyx

Thank you for showing interest in contributing to Iconyx! Iconyx is an open-source suite of clean, hand-crafted SVG vector icons. Follow these steps and guidelines to add new icons to the collection.

## Guidelines for Icon Designs

1. **Grid & Size**:
   - Icons must be designed on a **24x24 pixel grid**.
   - Use standard viewBox: `viewBox="0 0 24 24"`.

2. **SVG Code Rules**:
   - Use only raw stroke shapes (`<line>`, `<circle>`, `<rect>`, `<path>`, `<polyline>`, `<polygon>`).
   - Do **NOT** specify inline `stroke`, `fill`, `stroke-width`, `stroke-linecap`, or `stroke-linejoin` values inside individual elements.
   - Use `fill="none"` and `stroke="currentColor"` globally or let the wrapper manage it.
   - The design system automatically binds custom colors, size overrides, and stroke widths.

3. **Style Families**:
   - If adding a variant to a visual style family (like **Dotted**, **3D Fluency**, or **Liquid Glass**), ensure you replicate the exact class gradients, filters, or `stroke-dasharray="2 3"` settings used by existing family counterparts.

## Step-by-Step Contribution Flow

### 1. Update the Manifest
Add your new icon metadata inside [src/lib/icons.ts](file:///c:/Users/jojin/Downloads/iconyx/src/lib/icons.ts) under the `icons` array:

```typescript
{
  name: 'my-new-icon',
  category: 'ui',
  tags: ['plus', 'add', 'create'],
  svgContent: `<path d="..." />`
}
```

### 2. Generate Static Public SVGs
Run the build script to write your SVG code into individual files under `public/icons/`:
```bash
node scripts/generate-icons.js
```

### 3. Validate
Run the validation script to verify that all files exist and format requirements match exactly:
```bash
npm run validate:icons
```

Submit your Pull Request with a short description of the new icons added!
