---
title: Sort Hexadecimal Colours
code: true
tags: Utility Functions
---

> **Added in:** @sardine/colour@2.4.0

## Description

The `sortHexColours` function sorts an array of hexadecimal colour strings by hue, then by saturation. This creates a visually pleasing arrangement of colours that groups similar hues together.

The function intelligently handles special cases:
- **Greyscale colours** (saturation = 0) are moved to the end of the array
- **Transparent colours** (alpha = 0) are placed at the very end
- Colours with the same hue are sorted by descending saturation (most saturated first)
- Greyscale colours follow a custom order: grays (sorted by brightness), black, then white

The function accepts hexadecimal colours in both `#RRGGBB` and `#RRGGBBAA` formats.

## Signature

```typescript
function sortHexColours(hexColours: string[]): string[];
```

### Parameters

- **hexColours** (`string[]`): An array of hexadecimal colour strings to sort. Each colour must be in `#RRGGBB` or `#RRGGBBAA` format (case-insensitive).

### Returns

- **string[]**: A new sorted array of hexadecimal colour strings. The original array is not modified.

## Examples

### Basic colour sorting

```javascript
import { sortHexColours } from "@sardine/colour";

const colours = [
  "#0000ff", // blue
  "#ff0000", // red
  "#00ff00", // green
  "#ffff00", // yellow
];

const sorted = sortHexColours(colours);
console.log(sorted);
// Output: ["#ff0000", "#ffff00", "#00ff00", "#0000ff"]
// Sorted by hue: red (0°), yellow (60°), green (120°), blue (240°)
```

### Sorting with greyscale colours

```javascript
import { sortHexColours } from "@sardine/colour";

const colours = [
  "#ff0000", // red
  "#808080", // grey
  "#00ff00", // green
  "#000000", // black
  "#ffffff", // white
];

const sorted = sortHexColours(colours);
console.log(sorted);
// Output: ["#ff0000", "#00ff00", "#808080", "#000000", "#ffffff"]
// Chromatic colours first, then greyscale at the end
```

### Sorting with transparent colours

```javascript
import { sortHexColours } from "@sardine/colour";

const colours = [
  "#ff0000",   // red (opaque)
  "#00ff00",   // green (opaque)
  "#00000000", // transparent black
  "#ffffff00", // transparent white
];

const sorted = sortHexColours(colours);
console.log(sorted);
// Output: ["#ff0000", "#00ff00", "#00000000", "#ffffff00"]
// Transparent colours are placed at the very end
```

### Sorting colours with same hue

```javascript
import { sortHexColours } from "@sardine/colour";

const redShades = [
  "#ff8080", // red with low saturation
  "#ff0000", // red with full saturation
  "#ff4040", // red with medium saturation
];

const sorted = sortHexColours(redShades);
console.log(sorted);
// Output: ["#ff0000", "#ff4040", "#ff8080"]
// Same hue sorted by descending saturation
```

## Error Handling

The function validates input colours and throws descriptive errors for invalid formats:

```javascript
import { sortHexColours } from "@sardine/colour";

try {
  sortHexColours(["#ff0000", "invalid", "#00ff00"]);
} catch (error) {
  console.error(error);
  // Error: convertHextoRGB expects a valid hex colour string
}
```

## Interactive Demo

Try the function yourself with our interactive playground:

<iframe
  src="/playground/sortHexColours/"
  width="100%"
  height="500px"
  style="border:0; overflow:hidden;"
  title="sortHexColours"
  sandbox="allow-scripts allow-same-origin"
></iframe>

## Use Cases

This function is particularly useful for:

1. **Colour palette generation**: Create visually organized colour palettes for design systems
2. **Data visualization**: Arrange colours in charts and graphs for better readability
3. **UI components**: Sort colour picker options or theme swatches
4. **Image processing**: Organize extracted colours from images
5. **Design tools**: Implement colour sorting features in design applications

## Related Functions

- [`convertHextoRGB`](/docs/convert-hexadecimal-to-rgb-object): Convert hex colours to RGB for further processing
- [`isHexColour`](/docs/validation---ishexcolour): Validate hexadecimal colour strings
- [`convertRGBtoHex`](/docs/convert-rgb-to-hexadecimal): Convert RGB colours back to hex format
