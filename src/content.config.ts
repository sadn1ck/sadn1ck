import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    company: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
    url: z.string().url(),
    roles: z
      .array(
        z.object({
          title: z.string(),
          startDate: z.coerce.date(),
          endDate: z.coerce.date().optional(),
        }),
      )
      .min(1),
  }),
});

export const collections = { blog, work };
