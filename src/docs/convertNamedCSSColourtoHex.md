---
title: Convert a named CSS colour to Hexadecimal
code: true
tags: converters
---

> **Available since:** @sardine/colour@1.6.0

## Description

Converts a named CSS Colour in an hexadecimal one.

List of colours sourced here:
[https://developer.mozilla.org/en-US/docs/Web/CSS/named-color](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color)

Returns `undefined` if the colour is not found.

## Signature

```typescript
function convertNamedCSSColourtoHex(name: NamedCSSColour): string | undefined;
```

## Example

```javascript
import { convertNamedCSSColourtoHex } from "@sardine/colour";

const hexColour = convertNamedCSSColourtoHex("papayawhip");
console.log(hexColour);
// expects #FFEFD5
```

## Playground

<iframe src="/playground/convertNamedCSSColourtoHex" title="convertNamedCSSColourtoHex" width="100%" height="500px" style="border:0; overflow:hidden;" sandbox="allow-scripts allow-same-origin"></iframe>
