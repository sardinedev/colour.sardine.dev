---
title: Find Nearest Named CSS Colour
code: true
tags: utility functions
description: Finds the nearest named CSS colour in a palette to a given named CSS colour.
---

> **Added in:** @sardine/colour@2.1.0

## Description

Finds the nearest named CSS colour in a palette to the given named CSS colour.

## Signature

```typescript
function findNearestNamedCSSColour(
  colour: NamedCSSColour,
  palette: NamedCSSColour[]
): NamedCSSColour;
```

## Parameters

- `colour`: `NamedCSSColour` — The named CSS colour to find the nearest match for (e.g., `"red"`).
- `palette`: `NamedCSSColour[]` — An array of named CSS colours to search for the nearest match in.

## Returns

- `NamedCSSColour` — The named CSS colour in the palette that is closest to the given colour. If the palette has fewer than 2 colours, or is undefined/null, the original colour is returned.

## Examples

```typescript
import { findNearestNamedCSSColour } from "@sardine/colour";

findNearestNamedCSSColour("red", ["green", "blue", "orange"]);
// => "orange"

findNearestNamedCSSColour("navy", ["navy"]);
// => "navy" (palette too small)

findNearestNamedCSSColour("gold", undefined);
// => "gold" (palette is undefined)
```

## Error Handling

- If `palette` is not an array or has fewer than 2 colours, the function returns the input colour.
- If `colour` is not a valid named CSS colour, downstream conversion functions may throw errors (e.g., `convertNamedCSSColourtoRGB`).

## Interactive Demo

Try the function yourself with our interactive playground:

<iframe
  src="/playground/findNearestNamedCSSColour.html"
  title="findNearestNamedCSSColour"
  width="100%"
  height="500px"
  style="border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin"
></iframe>
