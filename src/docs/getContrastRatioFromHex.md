---
title: Get contrast ratio from hexadecimal
code: true
tags: converters
---

> **Available since:** @sardine/colour@2.2.0

## Description

Calculates the contrast ratio between two colours in hexadecimal format using WCAG 2.1 or WCAG 3.0 standards.

The contrast ratio is a value that measures the perceptual difference in brightness between two colours. It's crucial for accessibility as it determines the readability of text on backgrounds. A higher contrast ratio indicates greater visual distinction between colours.

## Signature

```typescript
function getContrastRatioFromHex(
  colour1: string,
  colour2: string,
  standard: "WCAG2.1" | "WCAG3.0"
): number;
```

## Parameters

- **colour1** `string` - The first colour in hexadecimal format (e.g., `#ff0000`, `#abc`, `#ffffffff`)
- **colour2** `string` - The second colour in hexadecimal format (e.g., `#00ff00`, `#def`, `#ffffff80`)
- **standard** `"WCAG2.1" | "WCAG3.0"` - The accessibility standard to use for calculation

## Return Value

Returns a `number` representing the contrast ratio between the two colours, truncated to 3 decimal places. The value ranges from 1 (no contrast) to 21 (maximum contrast).

## Supported Hex Formats

The function accepts all standard hexadecimal colour formats:

- **3-digit**: `#rgb` (e.g., `#f00`)
- **6-digit**: `#rrggbb` (e.g., `#ff0000`)
- **4-digit**: `#rgba` (e.g., `#f00f`)
- **8-digit**: `#rrggbbaa` (e.g., `#ff0000ff`)

## Examples

### Basic Usage

```javascript
import { getContrastRatioFromHex } from "@sardine/colour";

// Black and white - maximum contrast
const maxContrast = getContrastRatioFromHex("#000000", "#ffffff", "WCAG2.1");
console.log(maxContrast); // 21

// Same colours - no contrast
const noContrast = getContrastRatioFromHex("#ffffff", "#ffffff", "WCAG2.1");
console.log(noContrast); // 1
```

### Short Hex Formats

```javascript
// 3-digit hex colours
const shortHex = getContrastRatioFromHex("#000", "#fff", "WCAG2.1");
console.log(shortHex); // 21

// Mixed formats
const mixed = getContrastRatioFromHex("#f00", "#00ff00", "WCAG2.1");
console.log(mixed); // 2.913
```

### Accessibility Testing

```javascript
// Testing text readability
const textContrast = getContrastRatioFromHex("#333333", "#ffffff", "WCAG2.1");
console.log(textContrast); // 12.627

// Check if contrast meets WCAG AA standards (4.5:1 for normal text)
if (textContrast >= 4.5) {
  console.log("Text passes WCAG AA standards");
}

// Check if contrast meets WCAG AAA standards (7:1 for normal text)
if (textContrast >= 7) {
  console.log("Text passes WCAG AAA standards");
}
```

### Alpha Channel Support

```javascript
// Colours with alpha channels
const alphaContrast = getContrastRatioFromHex(
  "#000000ff",
  "#ffffff80",
  "WCAG2.1"
);
console.log(alphaContrast); // Calculated including alpha values

// 4-digit hex with alpha
const shortAlpha = getContrastRatioFromHex("#000f", "#fff8", "WCAG2.1");
console.log(shortAlpha); // Includes alpha channel calculation
```

### WCAG Standards Comparison

```javascript
// Compare WCAG 2.1 vs WCAG 3.0
const wcag21 = getContrastRatioFromHex("#777777", "#ffffff", "WCAG2.1");
const wcag30 = getContrastRatioFromHex("#777777", "#ffffff", "WCAG3.0");

console.log(`WCAG 2.1: ${wcag21}`); // 4.478
console.log(`WCAG 3.0: ${wcag30}`); // Slightly different due to calculation refinements
```

## Error Handling

The function will throw an error if invalid hexadecimal values are provided:

```javascript
try {
  getContrastRatioFromHex("invalid", "#ffffff", "WCAG2.1");
} catch (error) {
  console.error(error.message);
  // "convertHextoRGB expects an valid hexadecimal colour value but got invalid"
}

try {
  getContrastRatioFromHex("#ff0000", "not-hex", "WCAG2.1");
} catch (error) {
  console.error(error.message);
  // "convertHextoRGB expects an valid hexadecimal colour value but got not-hex"
}
```

## WCAG Contrast Guidelines

Understanding contrast ratios for accessibility compliance:

- **WCAG AA Normal Text**: Minimum 4.5:1 ratio
- **WCAG AA Large Text**: Minimum 3:1 ratio
- **WCAG AAA Normal Text**: Minimum 7:1 ratio
- **WCAG AAA Large Text**: Minimum 4.5:1 ratio

```javascript
function checkAccessibility(ratio) {
  if (ratio >= 7) return "AAA compliant";
  if (ratio >= 4.5) return "AA compliant";
  if (ratio >= 3) return "AA large text only";
  return "Not compliant";
}

const ratio = getContrastRatioFromHex("#666666", "#ffffff", "WCAG2.1");
console.log(checkAccessibility(ratio)); // "AAA compliant"
```

## Interactive Demo

Try the function yourself with our interactive playground:

<iframe
  src="/playground/getContrastRatioFromHex.html"
  title="getContrastRatioFromHex"
  width="100%"
  height="500px"
  style="border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin"
></iframe>
