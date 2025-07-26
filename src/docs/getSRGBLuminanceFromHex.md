---
title: Get sRGB Luminance From Hexadecimal
code: true
tags: Luminance & Brightness
description: Calculates the sRGB luminance value from a hexadecimal colour.
---

> **Added in:** @sardine/colour@1.2.0

## Description

Calculates the sRGB luminance value for a given hexadecimal colour string.

## Signature

```typescript
function getSRGBLuminanceFromHex(hex: string): number;
```

## Parameters

- `hex`: `string` — The hexadecimal colour string (e.g., `"#222429"`).

## Returns

- `number` — The sRGB luminance value (0 to 1).

## Examples

```typescript
import { getSRGBLuminanceFromHex } from "@sardine/colour";

getSRGBLuminanceFromHex("#222429");
// => 0.052
```

## Error Handling

- Throws an error if the input is not a valid hexadecimal colour string.

## Interactive Demo

Try the function yourself with our interactive playground:

<iframe
  src="/playground/getSRGBLuminanceFromHex.html"
  title="getSRGBLuminanceFromHex"
  width="100%"
  height="500px"
  style="border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin"
></iframe>
