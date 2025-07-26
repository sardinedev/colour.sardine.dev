---
title: Is Named CSS Colour
code: true
tags: Colour Validation
description: Determines whether a string represents a valid named CSS colour.
---

> **Added in:** @sardine/colour@2.4.0

## Description

Determines whether a string represents a valid named CSS colour.

## Signature

```typescript
function isNamedCSSColour(colour: string): boolean;
```

## Parameters

- `colour`: `string` — The string to test (e.g., `"red"`, `"navy"`).

## Returns

- `boolean` — `true` if the string represents a valid named CSS colour, `false` otherwise.

## Examples

```typescript
import { isNamedCSSColour } from "@sardine/colour";

isNamedCSSColour("red");
// => true

isNamedCSSColour("navy");
// => true

isNamedCSSColour("notacolour");
// => false
```

## Error Handling

- Returns `false` for any string that is not a valid named CSS colour.

## Interactive Demo

Try the function yourself with our interactive playground:

<iframe
  src="/playground/isNamedCSSColour.html"
  title="isNamedCSSColour"
  width="100%"
  height="500px"
  style="border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin"
></iframe>
