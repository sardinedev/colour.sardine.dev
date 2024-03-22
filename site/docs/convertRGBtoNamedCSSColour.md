---
title: Convert RGB to named CSS colour
code: true
tags:
  - converters
---

## Description

The `convertRGBtoNamedCSSColour` function converts a colour in RGB object format into its corresponding named CSS color.

## Signature

```typescript
function convertRGBtoNamedCSSColour(colour: string): NamedCSSColour | undefined;
```

## Example

```javascript
import { convertRGBtoNamedCSSColour } from "@sardine/colour";

const namedColour = convertRGBtoNamedCSSColour({ R: 255, G: 250, B: 250 });
console.log(namedColour);
// expects snow
```

## Playground

<iframe src="/assets/playground/convertRGBtoNamedCSSColour.html" title="convertRGBtoNamedCSSColour" width="100%" height="500px" style="border:0; overflow:hidden;" sandbox="allow-scripts allow-same-origin"></iframe>