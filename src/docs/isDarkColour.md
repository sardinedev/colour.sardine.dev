---
title: Is Dark Colour
code: true
tags: utility functions
description: Determines if a colour (hexadecimal, RGB, or CSS RGB) is considered dark.
---

> **Added in:** @sardine/colour@1.2.0

## Description

Checks if a colour in various formats is considered dark based on luminance.

## Signature

```typescript
function isDarkColour(colour: string | RGB | CSSRGB): boolean
```

## Parameters
- `colour`: `string | RGB | CSSRGB` — The colour to check (hexadecimal, RGB object, or CSS RGB string).

## Returns
- `boolean` — `true` if the colour is dark, otherwise `false`.

## Examples

```typescript
import { isDarkColour } from "@sardine/colour";

isDarkColour("#222429");
// => true

isDarkColour({ r: 255, g: 224, b: 0 });
// => false

isDarkColour("rgb(34, 36, 41)");
// => true
```

## Error Handling

- Throws an error if the input is not a valid colour format.

## Interactive Demo
Try the function yourself with our interactive playground:

<iframe
  src="/playground/isDarkColour.html"
  title="isDarkColour"
  width="100%"
  height="500px"
  style="border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin"
></iframe>
