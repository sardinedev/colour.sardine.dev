import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const docs = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/docs" }),
	schema: z.object({
		description: z.string().optional(),
		tags: z.enum([
			"Colour Validation",
			"Contrast & Accessibility",
			"Converters",
			"Dark Colour Detection",
			"Luminance & Brightness",
			"Nearest Colour Finders",
			"Distance & Comparison",
		]),
		title: z.string(),
	}),
});

export const collections = { docs };
