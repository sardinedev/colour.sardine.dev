---
title: Pick Hexadecimal Colour Contrast
code: true
tags: Contrast & Accessibility
description: Picks the hexadecimal colour with the highest contrast against a background colour from two options.
---

> **Added in:** @sardine/colour@1.4.0

## Description

Picks the hexadecimal colour with the highest contrast against a background colour from two options, using the specified WCAG standard.

## Signature

```typescript
function pickHexColourContrast(
  {
    backgroundColour,
    optionOneColour,
    optionTwoColour,
  }: {
    backgroundColour: string;
    optionOneColour: string;
    optionTwoColour: string;
  },
  standard: WCAG
): string;
```

## Parameters

- `backgroundColour`: `string` — The background hexadecimal colour (e.g., `"#ffffff"`).
- `optionOneColour`: `string` — The first option hexadecimal colour (e.g., `"#000000"`).
- `optionTwoColour`: `string` — The second option hexadecimal colour (e.g., `"#ff0000"`).
- `standard`: `WCAG` — The WCAG standard to evaluate the contrast ratio against (e.g., `"WCAG2.1"`).

## Returns

- `string` — The hexadecimal colour (either option one or two) with the highest contrast against the background colour.

## Examples

```typescript
import { pickHexColourContrast } from "@sardine/colour";

pickHexColourContrast(
  {
    backgroundColour: "#ffffff",
    optionOneColour: "#000000",
    optionTwoColour: "#ff0000",
  },
  "WCAG2.1"
);
// => "#000000"

pickHexColourContrast(
  {
    backgroundColour: "#222429",
    optionOneColour: "#ffe000",
    optionTwoColour: "#41c7c7",
  },
  "WCAG2.1"
);
// => "#ffe000"
```

## Error Handling

- If any colour is not a valid hexadecimal string, the function may throw an error from downstream luminance functions.
- If the standard is not a valid WCAG value, the function may throw an error from downstream functions.

## Interactive Demo

Try the function yourself with our interactive playground:

<iframe
  src="/playground/pickHexColourContrast.html"
  title="pickHexColourContrast"
  width="100%"
  height="500px"
  style="border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin"
></iframe>
