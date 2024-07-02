---
title: Find nearest colour
code: true
tags:
  - utility functions
---

## Description

The `findNearestColour` function is useful when you have a colour that needs to matched with the closest one from a palette of colours.
You can mix and match colours in different formats in the palette, and the function will return the closest colour to the one you provide.

Both the colour and the palette can be in either the CSS RGB, named CSS colour or hexadecimal format.

## Signature

```typescript
function findNearestColour(
  colour: string | NamedCSSColour,
  palette: string[] | NamedCSSColour[]
): string | NamedCSSColour | undefined;
```

## Example

```javascript
import { findNearestColour } from "@sardine/colour";

const palette = [
  "rgb(255,255,255)",
  "rgb(123,67,222)",
  "rgb(234,134,78)",
  "rgb(5,5,5)",
];
const colour = "rgb(110,110,110)";
const closestColour = findNearestColour(colour, palette);
console.log(closestColour);
// expects rgb(123,67,222)
```
