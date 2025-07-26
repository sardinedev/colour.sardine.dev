---
title: Find Nearest Hexadecimal Colour
code: true
tags: utility functions
description: Finds the nearest hexadecimal colour in a palette to a given hexadecimal colour.
---

> **Added in:** @sardine/colour@2.1.0

## Description

Finds the nearest hexadecimal colour in a palette to the given hexadecimal colour.

## Signature

```typescript
function findNearestHexColour(colour: string, palette: string[]): string
```

## Parameters
- `colour`: `string` — The hexadecimal colour to find the nearest match for (e.g., `"#ff0000"`).
- `palette`: `string[]` — An array of hexadecimal colours to search for the nearest match in.

## Returns
- `string` — The hexadecimal colour in the palette that is closest to the given colour. If the palette has fewer than 2 colours, or is undefined/null, the original colour is returned.

## Examples

```typescript
import { findNearestHexColour } from "@sardine/colour";

findNearestHexColour("#ff0000", ["#00ff00", "#0000ff", "#f80000"]);
// => "#f80000"

findNearestHexColour("#123456", ["#654321"]);
// => "#123456" (palette too small)

findNearestHexColour("#abcdef", undefined);
// => "#abcdef" (palette is undefined)
```

## Error Handling

- If `palette` is not an array or has fewer than 2 colours, the function returns the input colour.
- If `colour` is not a valid hexadecimal string, downstream conversion functions may throw errors (e.g., `convertHextoRGB`).

## Interactive Demo
Try the function yourself with our interactive playground:

<iframe
  src="/playground/findNearestHexColour.html"
  title="findNearestHexColour"
  width="100%"
  height="500px"
  style="border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin"
></iframe>
