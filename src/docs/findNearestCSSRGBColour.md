---
title: Find nearest CSS RGB Colour
code: true
tags: Nearest Colour Finders
---

> **Available since:** @sardine/colour@2.1.0

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

const palette = ["hotpink", "rgb(5 5 5)", "#ffffff"];
const colour = "pink";
const closestColour = findNearestCSSRGBColour(colour, palette);
console.log(closestColour);
// expects hotpink
```
