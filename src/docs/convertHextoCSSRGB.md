---
title: Convert Hexadecimal to CSS RGB
code: true
tags: Converters
---

> **Available since:** @sardine/colour@2.3.0

## Description

This function converts hexadecimal colours into a CSS RGB/RGBA string.
It accepts multiple formats of hexadecimal colours:

- 6 digit hexadecimal, ie `#FF11AA`
- 3 digit hexadecimal, ie `#AAA`
- 8 digit hexadecimal, ie `#FF11AAFF`
- 4 digit hexadecimal, ie `#FFFF`

If the hexadecimal colour includes an alpha channel (8 or 4 digit format), the function returns a CSS RGBA string. Otherwise, it returns a CSS RGB string.

It will throw an error if a string is not passed or it is in a different format than the one described above.

> **Added in:** `@sardine/colour@2.3.0`

## Signature

```typescript
function convertHextoCSSRGB(hex: string): string;
```

## Examples

### Converting 6-digit hexadecimal to CSS RGB

```javascript
import { convertHextoCSSRGB } from "@sardine/colour";

const cssRgb = convertHextoCSSRGB("#ffffff");
console.log(cssRgb); // "rgb(255,255,255)"
```

### Converting 3-digit hexadecimal to CSS RGB

```javascript
import { convertHextoCSSRGB } from "@sardine/colour";

const cssRgb = convertHextoCSSRGB("#fff");
console.log(cssRgb); // "rgb(255,255,255)"
```

### Converting 8-digit hexadecimal to CSS RGBA

```javascript
import { convertHextoCSSRGB } from "@sardine/colour";

const cssRgba = convertHextoCSSRGB("#ffffffff");
console.log(cssRgba); // "rgba(255,255,255,1)"
```

### Converting hexadecimal with 50% alpha to CSS RGBA

```javascript
import { convertHextoCSSRGB } from "@sardine/colour";

const cssRgba = convertHextoCSSRGB("#7b2d596e");
console.log(cssRgba); // "rgba(123,45,89,0.43)"
```

### Converting 4-digit hexadecimal to CSS RGBA

```javascript
import { convertHextoCSSRGB } from "@sardine/colour";

const cssRgba = convertHextoCSSRGB("#ffff");
console.log(cssRgba); // "rgba(255,255,255,1)"
```

## Error Handling

The function will throw an error if:

- The input is not a string
- The hexadecimal format is invalid

```javascript
import { convertHextoCSSRGB } from "@sardine/colour";

// Error: Invalid input type
try {
  convertHextoCSSRGB(123456);
} catch (error) {
  console.error(error.message);
  // "convertHextoRGB expects a string but got a number"
}

// Error: Invalid hexadecimal format
try {
  convertHextoCSSRGB("invalid-hex");
} catch (error) {
  console.error(error.message);
  // "convertHextoRGB expects an valid hexadecimal colour value but got invalid-hex"
}
```

## Interactive Demo

Try the function yourself with our interactive playground:

<iframe src="/playground/convertHextoCSSRGB" title="convertHextoCSSRGB" width="100%" height="500px" style="border:0; overflow:hidden;" sandbox="allow-scripts allow-same-origin"></iframe>
