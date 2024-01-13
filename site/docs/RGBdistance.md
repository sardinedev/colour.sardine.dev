---
title: RGB distance
code: true
tags:
  - util
---

## Description

The `RGBdistance` function calculates the distance between two RGB colours using the [CIEDE2000 color-difference formula](https://en.wikipedia.org/wiki/Color_difference#CIEDE2000).
The CIEDE2000 color-difference formula is a standard method for calculating the perceptual difference between two colors in the CIELAB color space. It takes into account human visual perception and the non-linearities in how we perceive color differences.

The function returns a number and while there is no upper limit to the distance, the lower limit is 0. The lower the number, the more similar the colours are.
It is important to note that the distance is not linear, so a distance of 1 does not mean that the colours are twice as different as a distance of 0.5.
And a distance of 0 does not mean that the colours are identical, but that they are indistinguishable to the human eye.

## Signature

```typescript
function RGBdistance(colour1: RGBColour, colour2: RGBColour): number;
```

## Example

```javascript
import { RGBdistance } from "@sardine/colour";
const colour1 = {
  R: 255,
  G: 23,
  B: 124,
};
const colour2 = {
  R: 255,
  G: 0,
  B: 124,
};
const distance = RGBdistance(colour1, colour2);
console.log(distance);
/* expects 
0.02
*/
```
