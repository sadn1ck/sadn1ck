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
    role: z.string(),
    company: z.string(),
    draft: z.boolean().optional(),
    url: z.string().url(),
    order: z.number(),
    startDate: z.coerce.date(),
    endDate: z.coerce
      .date()
      .catch(new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 2000)),
  }),
});

export const collections = { blog, work };
