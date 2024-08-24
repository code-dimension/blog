import { defineCollection, z } from 'astro:content'
import { SUPPORTED_CATEGORIES } from '@/data/supported-categories'

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			authorId: z.string(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			heroImage: z.string(),
			category: z.enum(SUPPORTED_CATEGORIES).optional(),
			tags: z.array(z.string()),
			draft: z.boolean().default(false)
		})
})

export const collections = { blog }
