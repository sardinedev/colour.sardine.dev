---
title: Is Named CSS Colour Dark
code: true
tags: utility functions
description: Determines if a named CSS colour is considered dark.
---

> **Added in:** @sardine/colour@1.2.0

## Description

Checks if a named CSS colour string represents a dark colour based on luminance.

## Signature

```typescript
function isCSSNamedDarkColour(name: string): boolean
```

## Parameters
- `name`: `string` — The named CSS colour (e.g., `"navy"`).

## Returns
- `boolean` — `true` if the colour is dark, otherwise `false`.

## Examples

```typescript
import { isCSSNamedDarkColour } from "@sardine/colour";

isCSSNamedDarkColour("navy");
// => true

isCSSNamedDarkColour("yellow");
// => false
```

## Error Handling

- Throws an error if the input is not a valid named CSS colour.

## Interactive Demo
Try the function yourself with our interactive playground:

<iframe
  src="/playground/isCSSNamedDarkColour.html"
  title="isCSSNamedDarkColour"
  width="100%"
  height="500px"
  style="border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin"
></iframe>
