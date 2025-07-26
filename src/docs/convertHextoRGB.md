---
title: Convert Hexadecimal to RGB object
code: true
tags: converters
---

> **Available since:** @sardine/colour@1.2.0

## Description

This function converts hexadecimal colours into a RGB object.
It accepts multiple formats of hexadecimal colours:

- 6 digit hexadecimal, ie `#FF11AA`
- 3 digit hexadecimal, ie `#AAA`
- 8 digit hexadecimal, ie `#FF11AAFF`
- 4 digit hexadecimal, ie `#FFFF`

It will throw an error if a string is not passed or it is in a different format that the one described above.

## Signature

```typescript
function convertHextoRGB(hex: string): RGBColour;
```

## Example

```javascript
import { convertHextoRGB } from "@sardine/colour";

const rgbColour = convertHextoRGB("#FFFFFF");
console.log(rgbColour);
// expects { R: 255, G: 255, B: 255 }
```

## Playground

<iframe src="/playground/convertHextoRGB.html" title="convertHextoRGB" width="100%" height="500px" style="border:0; overflow:hidden;" sandbox="allow-scripts allow-same-origin"></iframe>
