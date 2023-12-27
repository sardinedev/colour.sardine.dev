---
title: Convert Hexadecimal to named CSS colour
code: true
tags:
  - converters
---

## Description

The `convertHextoNamedCSSColour` function is designed to convert a hexadecimal color value into its corresponding named CSS color. It utilizes a predefined list of named CSS colors, mapping each color to its hexadecimal representation.

## Signature

```typescript
function convertHextoNamedCSSColour(colour: string): NamedCSSColour | undefined;
```

## Example

```javascript
import { convertHextoNamedCSSColour } from "@sardine/colour";

const hexColour = "#7fff00";
const namedColour = convertHextoNamedCSSColour(hexColour);
console.log(namedColour);
// expects chartreuse
```