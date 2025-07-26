---
title: Convert Hexadecimal to named CSS colour
code: true
tags: converters
---

> **Available since:** @sardine/colour@2.1.0

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

## Playground

<iframe src="/playground/convertHextoNamedCSSColour" title="convertHextoNamedCSSColour" width="100%" height="500px" style="border:0; overflow:hidden;" sandbox="allow-scripts allow-same-origin"></iframe>
