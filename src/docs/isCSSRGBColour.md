---
title: Is CSS RGB Colour
code: true
tags: utility functions
description: Validates if a string is a proper CSS RGB colour.
---

> **Added in:** @sardine/colour@1.2.0

## Description

Checks if a given string is a valid CSS RGB colour format.

## Signature

```typescript
function isCSSRGBColour(cssRGB: string): boolean
```

## Parameters
- `cssRGB`: `string` — The string to validate (e.g., `"rgb(255, 224, 0)"`).

## Returns
- `boolean` — `true` if the string is a valid CSS RGB colour, otherwise `false`.

## Examples

```typescript
import { isCSSRGBColour } from "@sardine/colour";

isCSSRGBColour("rgb(255, 224, 0)");
// => true

isCSSRGBColour("rgb(34, 36, 41)");
// => true

isCSSRGBColour("not-a-colour");
// => false
```

## Error Handling

- Returns `false` for invalid input; does not throw errors.

## Interactive Demo
Try the function yourself with our interactive playground:

<iframe
  src="/playground/isCSSRGBColour.html"
  title="isCSSRGBColour"
  width="100%"
  height="500px"
  style="border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin"
></iframe>
