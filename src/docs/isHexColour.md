---
title: Is Hexadecimal Colour
code: true
tags: Colour Validation
description: Validates if a string is a proper hexadecimal colour.
---

> **Added in:** @sardine/colour@1.2.0

## Description

Checks if a given string is a valid hexadecimal colour format.

## Signature

```typescript
function isHexColour(hex: string): boolean;
```

## Parameters

- `hex`: `string` — The string to validate (e.g., `"#ffe000"`).

## Returns

- `boolean` — `true` if the string is a valid hexadecimal colour, otherwise `false`.

## Examples

```typescript
import { isHexColour } from "@sardine/colour";

isHexColour("#ffe000");
// => true

isHexColour("#xyz123");
// => false
```

## Error Handling

- Returns `false` for invalid input; does not throw errors.

## Interactive Demo

Try the function yourself with our interactive playground:

<iframe
  src="/playground/isHexColour.html"
  title="isHexColour"
  width="100%"
  height="500px"
  style="border:0; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin"
></iframe>
