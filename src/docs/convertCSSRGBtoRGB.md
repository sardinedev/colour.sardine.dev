---
title: Convert CSS RGB to RGB
code: true
tags: Converters
---

> **Available since:** @sardine/colour@2.1.0

## Description

Converts CSS RGB colour format into RGB object.

It accepts multiple formats of CSS RGB colours:

- Comma separated values, ie `rgb(0,0,0)`
- Comma separated values with alpha channel, ie `rgba(0,0,0,0.4)`
- CSS Colors 4 space-separated values, ie `rgb(0 0 0)`
- CSS Colors 4 space-separated values with alpha channel, ie `rgba(0 0 0 / 0.4)`

It will throw an error if a string is not passed or it is in a different format that the one described above.

## Signature

```typescript
function convertCSSRGBtoRGB(cssrgb: string): string;
```

## Example

```javascript
import { convertCSSRGBtoRGB } from "@sardine/colour";

const rgbColour = convertCSSRGBtoRGB("rgba(255,255,255,.5)");
console.log(rgbColour);
// expects { R: 255, G: 255, B: 255, A: 0.5 }
```

## Playground

<iframe src="/playground/convertCSSRGBtoRGB" title="convertCSSRGBtoRGB" width="100%" height="500px" style="border:0; overflow:hidden;" sandbox="allow-scripts allow-same-origin"></iframe>
