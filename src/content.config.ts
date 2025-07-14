import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const docs = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/docs" }),
	schema: z.object({
		description: z.string().optional(),
		tags: z.enum(["converters", "utility functions"]),
		title: z.string(),
	}),
});

export const collections = { docs };
