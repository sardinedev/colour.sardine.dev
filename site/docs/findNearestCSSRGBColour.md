---
title: Find nearest CSS RGB Colour
code: true
tags:
  - utility functions
---

## Description

The `findNearestCSSRGBColour` function is useful when you have a CSS RGB colour that needs to matched with the closest one from a palette of colours.
To keep the function small, the palette has to contain colours in the CSS RGB format as well. If you have a palette with mixed colour formats that a look at the `findNearestColour` function.

## Signature

```typescript
function findNearestCSSRGBColour(colour: string, palette: string[]): string;
```

## Example

```javascript
import { findNearestCSSRGBColour } from "@sardine/colour";

const palette = [
  "rgb(255,255,255)",
  "rgb(123,67,222)",
  "rgb(234,134,78)",
  "rgb(5,5,5)",
];
const colour = "rgb(110,110,110)";
const closestColour = findNearestCSSRGBColour(colour, palette);
console.log(closestColour);
// expects rgb(123,67,222)
```
