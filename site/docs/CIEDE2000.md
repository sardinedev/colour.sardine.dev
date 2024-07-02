---
title: Color difference - CIEDE2000
code: true
tags:
  - utility functions
---

## Description

The `ciede2000` function mesures the colour difference between two colours in the Lab colour space. It uses the [CIEDE2000 color-difference formula](https://en.wikipedia.org/wiki/Color_difference#CIEDE2000).

The CIEDE2000 color-difference formula is a standard method for calculating the perceptual difference between two colors in the CIELAB color space. It takes into account human visual perception and the non-linearities in how we perceive color differences.

## Signature

```typescript
function ciede2000(colour1: LabColour, colour2: LabColour): number;
```

## Example

```javascript
import { ciede2000 } from "@sardine/colour";
const colour1 = {
  L: 50.0,
  a: 2.6772,
  b: -79.7751,
};

const colour2 = {
  L: 50.0,
  a: 0.0,
  b: -82.7485,
};
const distance = ciede2000(XYZ);
console.log(distance);
/* expects 
2.0424596801565738
*/
```
