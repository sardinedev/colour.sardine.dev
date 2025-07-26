---
title: Get contrast ratio
description: Calculate the contrast ratio between two colours according to WCAG standards.
code: true
tags: Contrast & Accessibility
---

> **Available since:** @sardine/colour@2.2.0

## Description

The `getContrastRatio` function calculates the contrast ratio between two colours according to the Web Content Accessibility Guidelines (WCAG). It supports multiple colour formats including hex, CSS RGB, and named CSS colours, making it versatile for accessibility testing and compliance.

## Signature

```typescript
getContrastRatio(
  colour1: string | NamedCSSColour,
  colour2: string | NamedCSSColour,
  standard: "WCAG2.1" | "WCAG3.0"
): number
```

### Parameters

- `colour1` - The first colour for comparison (hex, CSS RGB, or named CSS colour)
- `colour2` - The second colour for comparison (hex, CSS RGB, or named CSS colour)
- `standard` - The WCAG standard to use (`"WCAG2.1"` or `"WCAG3.0"`)

### Returns

Returns the contrast ratio as a number, truncated to 3 decimal places. Values range from 1 (identical colours) to 21 (pure black and white).

## Examples

### Hex Colours

```javascript
import { getContrastRatio } from "@sardine/colour";

// Black text on white background
const ratio = getContrastRatio("#000000", "#ffffff", "WCAG2.1");
console.log(ratio); // 21

// Red text on white background
const redOnWhite = getContrastRatio("#ff0000", "#ffffff", "WCAG2.1");
console.log(redOnWhite); // 3.998
```

### CSS RGB Colours

```javascript
import { getContrastRatio } from "@sardine/colour";

// Standard CSS RGB syntax
const ratio1 = getContrastRatio(
  "rgb(255, 255, 255)",
  "rgb(0, 0, 0)",
  "WCAG2.1"
);
console.log(ratio1); // 21

// Modern space-separated syntax
const ratio2 = getContrastRatio("rgb(255 255 255)", "rgb(0 0 0)", "WCAG2.1");
console.log(ratio2); // 21

// With percentage values
const ratio3 = getContrastRatio(
  "rgb(100%, 100%, 100%)",
  "rgb(0%, 0%, 0%)",
  "WCAG2.1"
);
console.log(ratio3); // 21
```

### Named CSS Colours

```javascript
import { getContrastRatio } from "@sardine/colour";

// Using named colours
const ratio = getContrastRatio("white", "black", "WCAG2.1");
console.log(ratio); // 21

// Blue text on white background
const blueOnWhite = getContrastRatio("blue", "white", "WCAG2.1");
console.log(blueOnWhite); // 8.592
```

### Mixed Formats

```javascript
import { getContrastRatio } from "@sardine/colour";

// Mixing different colour formats
const ratio1 = getContrastRatio("#ffffff", "rgb(0, 0, 0)", "WCAG2.1");
console.log(ratio1); // 21

const ratio2 = getContrastRatio("white", "#000000", "WCAG2.1");
console.log(ratio2); // 21
```

## WCAG Standards

The function supports both WCAG 2.1 and WCAG 3.0 standards:

- **"WCAG2.1"**: Standard contrast requirements (4.5:1 for normal text, 3:1 for large text)
- **"WCAG3.0"**: Enhanced contrast calculation with improved color space handling

```javascript
import { getContrastRatio } from "@sardine/colour";

const colour1 = "#767676";
const colour2 = "#ffffff";

// Check against both standards
const ratioWCAG21 = getContrastRatio(colour1, colour2, "WCAG2.1");
const ratioWCAG30 = getContrastRatio(colour1, colour2, "WCAG3.0");

console.log(`WCAG 2.1: ${ratioWCAG21}`); // WCAG 2.1: 4.54
console.log(`WCAG 3.0: ${ratioWCAG30}`); // WCAG 3.0: 4.54
```

## Error Handling

The function throws an error for invalid colour formats:

```javascript
import { getContrastRatio } from "@sardine/colour";

try {
  getContrastRatio("invalid", "#ffffff", "WCAG2.1");
} catch (error) {
  console.log(error); // "Invalid colour format: invalid"
}

try {
  getContrastRatio("#ffffff", "not-a-colour", "WCAG2.1");
} catch (error) {
  console.log(error); // "Invalid colour format: not-a-colour"
}
```

## Interactive Demo

Try the function yourself with our interactive playground:

<iframe
  src="/playground/getContrastRatio.html"
  title="getContrastRatio"
  width="100%"
  height="500px"
  style="border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin"
></iframe>
