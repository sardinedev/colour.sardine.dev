---
title: Convert RGB colour object to named CSS colour
code: true
tags: converters
---

> **Available since:** @sardine/colour@2.1.0

## Description

The `convertRGBtoNamedCSSColour` function converts a colour in the RGB object format into its corresponding named CSS colour. It utilizes a predefined list of named CSS colours, mapping each colour to its hexadecimal representation.

## Signature

```typescript
function convertRGBtoNamedCSSColour(
  colour: RGBColour
): NamedCSSColour | undefined;
```

## Example

```javascript
import { convertRGBtoNamedCSSColour } from "@sardine/colour";

const colour = { R: 138, G: 43, B: 226 };
const namedColour = convertRGBtoNamedCSSColour(colour);
console.log(namedColour);
// expects blueviolet
```
