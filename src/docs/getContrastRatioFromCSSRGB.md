---
title: Get Contrast Ratio From CSSRGB
code: true
tags: utility functions
description: Calculates the contrast ratio between two colours in CSSRGB format.
---

> **Added in:** @sardine/colour@2.2.0

## Description

Calculates the contrast ratio between two colours in CSSRGB format, using the specified WCAG standard.

## Signature

```typescript
function getContrastRatioFromCSSRGB(colour1: string, colour2: string, standard: WCAG): number
```

## Parameters
- `colour1`: `string` — The first colour in CSSRGB format (e.g., `"rgb(255,0,0)"`).
- `colour2`: `string` — The second colour in CSSRGB format (e.g., `"rgb(0,255,0)"`).
- `standard`: `WCAG` — The WCAG standard to evaluate the contrast ratio against (e.g., `"WCAG2.1"`).

## Returns
- `number` — The contrast ratio between the two colours, truncated to 3 decimal places.

## Examples

```typescript
import { getContrastRatioFromCSSRGB } from "@sardine/colour";

getContrastRatioFromCSSRGB("rgb(255,0,0)", "rgb(0,255,0)", "WCAG2.1");
// => 1.284

getContrastRatioFromCSSRGB("rgb(0,0,0)", "rgb(255,255,255)", "WCAG2.1");
// => 21
```

## Error Handling

- If either colour is not a valid CSSRGB string, the function may throw an error from `convertCSSRGBtoRGB`.
- If the standard is not a valid WCAG value, the function may throw an error from downstream functions.

## Interactive Demo
Try the function yourself with our interactive playground:

<iframe
  src="/playground/getContrastRatioFromCSSRGB.html"
  title="getContrastRatioFromCSSRGB"
  width="100%"
  height="500px"
  style="border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin"
></iframe>
