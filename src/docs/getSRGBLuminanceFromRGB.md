---
title: Get sRGB Luminance From RGB
code: true
tags: Luminance & Brightness
description: Calculates the sRGB luminance value from an RGB colour.
---

> **Added in:** @sardine/colour@1.2.0

## Description

Calculates the sRGB luminance value for a given RGB colour object.

## Signature

```typescript
function getSRGBLuminanceFromRGB(rgb: RGB): number;
```

## Parameters

- `rgb`: `RGB` — The RGB colour object (e.g., `{ r: 34, g: 36, b: 41 }`).

## Returns

- `number` — The sRGB luminance value (0 to 1).

## Examples

```typescript
import { getSRGBLuminanceFromRGB } from "@sardine/colour";

getSRGBLuminanceFromRGB({ r: 34, g: 36, b: 41 });
// => 0.052
```

## Error Handling

- Throws an error if the input is not a valid RGB object.

## Interactive Demo

Try the function yourself with our interactive playground:

<iframe
  src="/playground/getSRGBLuminanceFromRGB.html"
  title="getSRGBLuminanceFromRGB"
  width="100%"
  height="500px"
  style="border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin"
></iframe>
