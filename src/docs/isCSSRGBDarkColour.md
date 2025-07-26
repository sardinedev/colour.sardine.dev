---
title: Is CSS RGB Dark Colour
code: true
tags: utility functions
description: Determines if a CSS RGB colour string is considered dark.
---

> **Added in:** @sardine/colour@1.2.0

## Description

Checks if a CSS RGB colour string represents a dark colour based on luminance.

## Signature

```typescript
function isCSSRGBDarkColour(cssRGB: string): boolean
```

## Parameters
- `cssRGB`: `string` — The CSS RGB colour string (e.g., `"rgb(34, 36, 41)"`).

## Returns
- `boolean` — `true` if the colour is dark, otherwise `false`.

## Examples

```typescript
import { isCSSRGBDarkColour } from "@sardine/colour";

isCSSRGBDarkColour("rgb(34, 36, 41)");
// => true

isCSSRGBDarkColour("rgb(255, 224, 0)");
// => false
```

## Error Handling

- Throws an error if the input is not a valid CSS RGB colour string.

## Interactive Demo
Try the function yourself with our interactive playground:

<iframe
  src="/playground/isCSSRGBDarkColour.html"
  title="isCSSRGBDarkColour"
  width="100%"
  height="500px"
  style="border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin"
></iframe>
