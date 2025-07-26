---
title: Get Contrast Ratio From Named CSS Colour
code: true
tags: Contrast & Accessibility
description: Calculates the contrast ratio between two named CSS colours using the specified WCAG standard.
---

> **Added in:** @sardine/colour@1.2.0

## Description

Calculates the contrast ratio between two named CSS colours according to the specified WCAG standard.

## Signature

```typescript
function getContrastRatioFromNamedCSSColour(
  colour1: string,
  colour2: string,
  standard?: WCAG
): number;
```

## Parameters

- `colour1`: `string` — The first named CSS colour (e.g., `"navy"`).
- `colour2`: `string` — The second named CSS colour (e.g., `"yellow"`).
- `standard`: `WCAG` (optional) — The WCAG standard to use (e.g., `"WCAG2.1"`).

## Returns

- `number` — The contrast ratio value.

## Examples

```typescript
import { getContrastRatioFromNamedCSSColour } from "@sardine/colour";

getContrastRatioFromNamedCSSColour("navy", "yellow", "WCAG2.1");
// => 15.3
```

## Error Handling

- Throws an error if either input is not a valid named CSS colour.

## Interactive Demo

Try the function yourself with our interactive playground:

<iframe
  src="/playground/getContrastRatioFromNamedCSSColour.html"
  title="getContrastRatioFromNamedCSSColour"
  width="100%"
  height="500px"
  style="border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin"
></iframe>
