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
    title: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
    url: z.string().url(),
    order: z.number(),
  }),
});

// const projects = defineCollection({
//   loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/projects" }),
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     date: z.coerce.date(),
//     draft: z.boolean().optional(),
//     demoURL: z.string().optional(),
//     repoURL: z.string().optional(),
//   }),
// });

export const collections = { blog, work };
