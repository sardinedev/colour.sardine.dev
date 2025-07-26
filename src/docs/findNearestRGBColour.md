---
title: Find Nearest RGB Colour
code: true
tags: utility functions
description: Finds the nearest RGB colour in a palette to a given RGB colour.
---

> **Added in:** @sardine/colour@2.1.0

## Description

Finds the nearest RGB colour in a palette to the given RGB colour.

## Signature

```typescript
function findNearestRGBColour(
  colour: RGBColour,
  palette: RGBColour[]
): RGBColour;
```

## Parameters

- `colour`: `RGBColour` — The RGB colour to find the nearest match for (e.g., `{ R: 255, G: 0, B: 0 }`).
- `palette`: `RGBColour[]` — An array of RGB colours to search for the nearest match in.

## Returns

- `RGBColour` — The RGB colour in the palette that is closest to the given colour. If the palette has fewer than 2 colours, or is undefined/null, the original colour is returned.

## Examples

```typescript
import { findNearestRGBColour } from "@sardine/colour";

findNearestRGBColour({ R: 255, G: 0, B: 0 }, [
  { R: 0, G: 255, B: 0 },
  { R: 0, G: 0, B: 255 },
  { R: 250, G: 10, B: 10 },
]);
// => { R: 250, G: 10, B: 10 }

findNearestRGBColour({ R: 18, G: 52, B: 86 }, [{ R: 101, G: 67, B: 33 }]);
// => { R: 18, G: 52, B: 86 } (palette too small)

findNearestRGBColour({ R: 171, G: 205, B: 239 }, undefined);
// => { R: 171, G: 205, B: 239 } (palette is undefined)
```

## Error Handling

- If `palette` is not an array or has fewer than 2 colours, the function returns the input colour.
- If `colour` is not a valid RGB object, downstream functions may throw errors (e.g., `RGBdistance`).

## Interactive Demo

Try the function yourself with our interactive playground:

<iframe
  src="/playground/findNearestRGBColour.html"
  title="findNearestRGBColour"
  width="100%"
  height="500px"
  style="border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin"
></iframe>
