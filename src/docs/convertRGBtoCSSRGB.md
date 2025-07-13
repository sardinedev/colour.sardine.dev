---
title: Convert RGB to CSS RGB
code: true
tags: converters
---

## Description

This function converts RGB colours into CSS RGB.

Accepts a RGB object and converts it into a string in the format `rgb(R G B)` or `rgb(R G B / A)` if the alpha channel is present.

## Signature

```typescript
function convertRGBtoCSSRGB(colour: RGBColour): string;
```

## Example

```javascript
import { convertRGBtoCSSRGB } from "@sardine/colour";

const cssRGBColour = convertRGBtoCSSRGB({ R: 255, G: 255, B: 255, A: 0.5 });
console.log(cssRGBColour);
/* expects rgb(255 255 255 / 0.5) */
```
