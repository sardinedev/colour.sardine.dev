---
title: Convert CSS RGB to Hexadecimal
code: true
tags: Converters
---

> **Available since:** @sardine/colour@1.6.0

## Description

Converts CSS RGB colour format into Hexadecimal.

It accepts multiple formats of CSS RGB colours:

- Coma separated values, ie `rgb(0,0,0)`
- Coma separated values with alpha channel, ie `rgba(0,0,0,0.4)`
- CSS Colors 4 space-separated values, ie `rgb(0 0 0)`
- CSS Colors 4 space-separated values with alpha channel, ie `rgba(0 0 0 / 0.4)`

It will throw an error if a string is not passed or it is in a different format that the one described above.

## Signature

```typescript
function convertCSSRGBtoHex(cssrgb: string): string;
```

## Example

```javascript
import { convertCSSRGBtoHex } from "@sardine/colour";

const hexColour = convertCSSRGBtoHex("rgba(255,255,255,.5)");
console.log(hexColour);
// expects #ffffff80
```

## Playground

<iframe src="/playground/convertCSSRGBtoHex" title="convertCSSRGBtoHex" width="100%" height="500px" style="border:0; overflow:hidden;" sandbox="allow-scripts allow-same-origin"></iframe>
