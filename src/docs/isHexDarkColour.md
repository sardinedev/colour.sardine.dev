---
title: Is Hexadecimal Dark Colour
code: true
tags: utility functions
description: Determines if a hexadecimal colour is considered dark.
---

> **Added in:** @sardine/colour@1.2.0

## Description

Checks if a given hexadecimal colour string represents a dark colour based on luminance.

## Signature

```typescript
function isHexDarkColour(hex: string): boolean
```

## Parameters
- `hex`: `string` — The hexadecimal colour string (e.g., `"#222429"`).

## Returns
- `boolean` — `true` if the colour is dark, otherwise `false`.

## Examples

```typescript
import { isHexDarkColour } from "@sardine/colour";

isHexDarkColour("#222429");
// => true

isHexDarkColour("#ffe000");
// => false
```

## Error Handling

- If the input is not a valid hexadecimal colour, the function may throw an error.

## Interactive Demo
Try the function yourself with our interactive playground:

<iframe
  src="/playground/isHexDarkColour.html"
  title="isHexDarkColour"
  width="100%"
  height="500px"
  style="border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin"
></iframe>
