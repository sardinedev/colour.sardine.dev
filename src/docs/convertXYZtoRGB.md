---
title: Convert XYZ to RGB
code: true
tags: converters
---

> **Added in:** @sardine/colour@1.2.0

## Description

The `convertXYZtoRGB` function converts a colour from the CIE XYZ colour space to an RGB object. It expects an object with `X`, `Y`, and `Z` properties.

## Signature

```typescript
function convertXYZtoRGB(colour: XYZColour): RGBColour;
```

## Example

```javascript
import { convertXYZtoRGB } from "@sardine/colour";

const xyzColour = {
  X: 20.517540535826125,
  Y: 21.586050011389926,
  Z: 23.50720846240363
};
const rgbColour = convertXYZtoRGB(xyzColour);
console.log(rgbColour);
/* expects
{
  R: 81,
  G: 90,
  B: 74,
}
*/
```

## Interactive Demo

Try the function yourself with our interactive playground:

<iframe src="/playground/convertXYZtoRGB.html" title="convertXYZtoRGB" width="100%" height="500px" style="border:0; overflow:hidden;" sandbox="allow-scripts allow-same-origin"></iframe>
