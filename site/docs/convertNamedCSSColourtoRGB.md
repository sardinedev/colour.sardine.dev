---
title: Convert a named CSS colour to RGB object
code: true
tags:
  - converters
---

## Description

Converts a named CSS Colour into a RGB object.

List of colours sourced here:
[https://developer.mozilla.org/en-US/docs/Web/CSS/named-color](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color)

Returns `undefined` if the colour is not found.

## Signature

```typescript
function convertNamedCSSColourtoRGB(
  NamedCSSColour: NamedCSSColour
): RGBColour | undefined;
```

## Example

```javascript
import { convertNamedCSSColourtoRGB } from "@sardine/colour";

const rgbColour = convertNamedCSSColourtoRGB("snow");
console.log(rgbColour);
// expects { R: 255, G: 250, B: 250 }
```

## Playground

<iframe src="/assets/playground/convertNamedCSSColourtoRGB.html" title="convertNamedCSSColourtoRGB" width="100%" height="500px" style="border:0; overflow:hidden;" sandbox="allow-scripts allow-same-origin"></iframe>
